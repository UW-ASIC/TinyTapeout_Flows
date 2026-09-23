#!/usr/bin/env python3
"""
cktImg netlist placement -> xschem schematic.

Runs `cktimg-json --target xschem_sky130.json` on a SPICE deck and turns the placed
geometry it reports into a `.sch` file that xschem can open, edit and netlist back to
sky130 devices.

## What lives where

  * `xschem_sky130.json` -- a cktImg target manifest (cktImg's docs/TARGETS.md). It is
    the whole symbol mapping: per cktImg class, the `.sym` path, the pin offsets
    (`style.pin_xy`, in the manifest's pin order), the attribute template
    (`style.attrs`), and for MOSFETs the default model/W/L and bulk pin. Adding a class
    or changing a symbol is a JSON edit; cktImg validates class and terminal names.
  * `cktimg_sky130.zon` -- cktImg's own config: the sky130 PDK resolution and strict
    symbol geometry. See the comments in it.
  * this file -- the xschem-specific geometry and nothing symbol-specific.

`sym` and `attrs` are `str.format` templates over: name, ref (name without a leading
`x`, since sky130 symbols add their own `X` prefix), value, net (first pin's net),
and, for classes whose style carries `model`, model/w/l from the deck's own card.

## The mismatch this file exists to absorb

cktImg draws its own MOSFET: pins at d(+20,0), g(0,-20), s(-20,0), so the channel runs
horizontally. sky130's `nfet_01v8.sym` puts D(20,-30), G(-20,0), S(20,30) -- channel
vertical, wider pitch, and a fourth bulk pin cktImg has no concept of. Neither the
offsets, the axis, nor the pin count line up.

Three consequences, each handled below:

  * Orientation is *derived*, not copied. The JSON carries `rot`/`mirror`, but those
    describe cktImg's own symbol, and re-using them would rotate a sky130 symbol whose
    rest orientation is already 90 degrees off. Instead `best_orientation` tries all
    eight xschem placements and keeps whichever lands the pins closest to where cktImg
    put them. That is convention-free: it stays correct if either project redefines what
    "rot=1" means.

  * Whatever offset survives is absorbed by a stub wire. Because the same `rotate()` that
    computes a pin's position is the one written into the `C` line, a stub always spans
    exactly the gap between the real symbol pin and the coordinate cktImg assigned to it.
    Connectivity is therefore correct by construction even if the orientation search picks
    an ugly one -- a bad guess costs looks, never a broken net.

  * Bulk pins are read back out of the SPICE deck. cktImg drops the 4th MOS terminal, and
    a floating bulk is not a "properly made schematic": it breaks both simulation and LVS.
    `mos_cards` re-parses the M/X cards for it and the emitter drops a label on the pin.
    The same pass recovers the model and W/L, which cktImg only reports as a lossy
    display string (`01v8 lvt`, `W=1/L=0.15`).

## Node 0 is declared ground

`cktimg-json` adds a ground rail device only for a net literally named `gnd`. SPICE's
node `0` -- which every spicerack deck uses -- is otherwise an ordinary signal net to the
placer, so ground-referenced loads get parked in the margin band as feedback bridges.
`with_ground` appends `Xgnd0 0 ground` to a copy of the deck to fix that; it also puts a
real ground symbol in the schematic.

## Scale

cktImg works on an abstract integer grid; xschem symbol pins sit at +/-30. The manifest's
`units.scale` converts (cktImg passes it through and never applies it), and `--scale`
overrides it. The right value is the one that looks right with the file open in xschem.
"""

import argparse
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).parent
DEFAULT_CONFIG = HERE / "cktimg_sky130.zon"
DEFAULT_TARGET = HERE / "xschem_sky130.json"
LAB_PIN = "devices/lab_pin.sym"
PDK_PREFIX = "sky130_fd_pr__"

HEADER = """v {xschem version=3.4.5 file_version=1.2}
G {}
K {}
V {}
S {}
E {}
"""


def rotate(pt, rot, flip):
    """Apply xschem's instance transform to a symbol-local point.

    This is xschem's own ROTATION macro. It is reproduced rather than approximated
    because it is the single place where being wrong would silently misplace every pin --
    though note that a mistake here still could not *disconnect* anything, since stubs are
    measured from this function's output.
    """
    x, y = pt
    if flip:
        x = -x
    return [(x, y), (-y, x), (-x, -y), (y, -x)][rot % 4]


def best_orientation(offsets, pins):
    """Pick the xschem (rot, flip) that lands a symbol's pins nearest cktImg's placement.

    `offsets` maps terminal name -> symbol-local pin offset.

    `pins` maps terminal name -> target xy, already scaled and relative to the device
    origin. Returns (rot, flip, cost) where cost is total Manhattan stub length.

    Searching beats reading `rot`/`mirror` out of the JSON: those describe the orientation
    of *cktImg's* symbol, whose rest position differs from sky130's by 90 degrees for the
    MOSFETs and not at all for the passives. Encoding that per-class offset would be a
    table of two projects' conventions that goes stale the moment either redraws a symbol.
    Eight cheap trials need no such table.
    """
    best = (0, 0, None)
    for flip in (0, 1):
        for rot in range(4):
            cost = 0
            for term, target in pins.items():
                if term not in offsets:
                    continue
                px, py = rotate(offsets[term], rot, flip)
                cost += abs(px - target[0]) + abs(py - target[1])
            if best[2] is None or cost < best[2]:
                best = (rot, flip, cost)
    return best


def mos_cards(spice_text):
    """Map instance name (lowercased) -> (bulk, model, W, L) from `M`/`X` cards.

    cktImg reports three terminals for a MOSFET; SPICE carries four. Recovering the fourth
    here is what keeps the emitted schematic simulatable -- xschem would otherwise netlist
    a floating body. Model and sizing come along so the symbol matches the deck.

    Both `M1 d g s b nfet_01v8 W=..` and sky130's `XM1 d g s b sky130_fd_pr__nfet_01v8 W=..`
    are read. Every 6+ token X card lands here too; only names cktImg called a MOSFET are
    ever looked up, so the others are harmless. W/L are None when the card omits them.
    """
    out = {}
    for line in spice_text.splitlines():
        line = line.strip()
        if not line or line[0] in "*.+":
            continue
        tok = line.split()
        if len(tok) >= 6 and tok[0][0] in "mMxX" and "=" not in tok[5]:
            kv = dict(t.lower().split("=", 1) for t in tok[6:] if "=" in t)
            model = tok[5].lower().removeprefix(PDK_PREFIX)
            out[tok[0].lower()] = (tok[4], model, kv.get("w"), kv.get("l"))
    return out


def emit(data, mos, scale):
    """Build the .sch body from a cktimg-json document carrying a `target` block."""
    out = [HEADER]
    wires = []       # (x1, y1, x2, y2, net) -- collected for the connectivity check
    labels = []      # (x, y, net)

    def S(p):
        return (int(p[0] * scale), int(p[1] * scale))

    mapped = {t["device"] for t in data["target"]["devices"]}
    for i, dev in enumerate(data["devices"]):
        if i not in mapped:
            print(f"warning: no symbol mapped for class '{dev['class']}' "
                  f"(device {dev['name']}), skipped", file=sys.stderr)

    for t in data["target"]["devices"]:
        dev = data["devices"][t["device"]]
        style = t.get("style", {})
        # The target block's `pins` is the manifest's pin order, as indices into this
        # device's own pins; `pin_xy` is written in that same order.
        pins = [dev["pins"][i] for i in t["pins"]]
        offsets = {p["term"]: tuple(xy) for p, xy in zip(pins, style["pin_xy"])}

        ox, oy = S(dev["pos"])
        targets = {p["term"]: (S(p["xy"])[0] - ox, S(p["xy"])[1] - oy) for p in pins}
        rot, flip, _ = best_orientation(offsets, targets)

        name = dev["name"]
        fields = {"name": name, "ref": name[1:] if name[0] == "x" else name,
                  "value": dev.get("value", ""), "net": pins[0]["net"]}
        card = mos.get(name.lower()) if "model" in style else None
        if "model" in style:
            fields.update(model=style["model"], w=style["w"], l=style["l"])
            if card:
                fields.update({k: v for k, v in zip(("model", "w", "l"), card[1:]) if v})
        path = t["sym"].format(**fields)
        attrs = style["attrs"].format(**fields)
        out.append(f"C {{{path}}} {ox} {oy} {rot} {flip} {{{attrs}}}\n")

        # Stub each real symbol pin out to the coordinate cktImg assigned it.
        for p in pins:
            if p["term"] in offsets:
                px, py = rotate(offsets[p["term"]], rot, flip)
                wires += stub((ox + px, oy + py), S(p["xy"]), p["net"])

        if "bulk" in style:
            bx, by = rotate(style["bulk"]["xy"], rot, flip)
            labels.append((ox + bx, oy + by, card[0] if card else style["bulk"]["net"]))

    for w in data["wires"]:
        for seg in w["segments"]:
            pts = [S(p) for p in seg]
            for a, b in zip(pts, pts[1:]):
                if a != b:
                    wires.append((a[0], a[1], b[0], b[1], w["net"]))

    # Label every net once. This is not decoration: xschem names any unlabelled node
    # `net1`, `net2`, ... so an unlabelled schematic netlists back with the author's names
    # -- `tail`, `out1`, `vb` -- replaced by counters. That silently breaks name-based LVS
    # against the deck this was generated from, which is the one property the round trip
    # exists to provide. A few extra labels are cheaper than that.
    #
    # Nets carried by a global-label device (vdd/gnd already place `vdd.sym`/`gnd.sym`,
    # which *are* labels) are skipped, or the net would be declared twice.
    global_nets = {data["devices"][t["device"]]["pins"][0]["net"]
                   for t in data["target"]["devices"] if t.get("style", {}).get("rail")}
    seen = set()
    for dev in data["devices"]:
        for p in dev["pins"]:
            net = p["net"]
            if net in seen or net in global_nets:
                continue
            seen.add(net)
            labels.append((*S(p["xy"]), net))

    for lab in data.get("labels", []):
        x, y = S(lab["at"])
        labels.append((x, y, lab["net"]))

    for x1, y1, x2, y2, net in wires:
        out.append(f"N {x1} {y1} {x2} {y2} {{lab={net}}}\n")
    for i, (x, y, net) in enumerate(labels):
        out.append(f"C {{{LAB_PIN}}} {x} {y} 0 0 {{name=p{i} lab={net}}}\n")

    return "".join(out), wires, labels


def stub(frm, to, net):
    """Manhattan path from a symbol pin to where cktImg wants it. Empty when they coincide."""
    if frm == to:
        return []
    if frm[0] == to[0] or frm[1] == to[1]:
        return [(frm[0], frm[1], to[0], to[1], net)]
    corner = (to[0], frm[1])
    return [
        (frm[0], frm[1], corner[0], corner[1], net),
        (corner[0], corner[1], to[0], to[1], net),
    ]


def on_segment(pt, a, b):
    """Does `pt` lie on the Manhattan segment a-b? Endpoints count."""
    (x, y), (x1, y1), (x2, y2) = pt, a, b
    if x1 == x2:
        return x == x1 and min(y1, y2) <= y <= max(y1, y2)
    if y1 == y2:
        return y == y1 and min(x1, x2) <= x <= max(x1, x2)
    return False


def check_connectivity(data, wires, labels, scale):
    """Assert every net cktImg reported survives as one connected group in the .sch.

    xschem derives connectivity from geometry: wire endpoints and symbol pins that share a
    coordinate are the same node, and same-named labels merge. This walks that same rule
    over what was emitted and confirms each net's pins end up in one component -- the one
    property whose failure would be invisible in the file and obvious only as a wrong
    netlist hours later.

    Raises AssertionError naming the net. Returns the number of nets checked.
    """
    parent = {}

    def find(x):
        parent.setdefault(x, x)
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a, b):
        ra, rb = find(a), find(b)
        if ra != rb:
            parent[ra] = rb

    # Every coordinate xschem could resolve a node at: wire ends, device pins, labels.
    points = set()
    for x1, y1, x2, y2, _ in wires:
        points.add((x1, y1))
        points.add((x2, y2))
    for x, y, _ in labels:
        points.add((x, y))
    for dev in data["devices"]:
        for p in dev["pins"]:
            points.add((int(p["xy"][0] * scale), int(p["xy"][1] * scale)))

    # xschem does not require endpoints to meet: a wire ending on another wire's *interior*
    # is a T-junction and one node, which is precisely what cktImg's junction dots mark.
    # Unioning only endpoints would report a correctly-drawn tail net as two groups.
    for x1, y1, x2, y2, _ in wires:
        union((x1, y1), (x2, y2))
        for pt in points:
            if on_segment(pt, (x1, y1), (x2, y2)):
                union(pt, (x1, y1))

    # Same-named labels are one node wherever they sit, which is how a label rescues a net
    # the router could not draw.
    by_name = {}
    for x, y, net in labels:
        if net in by_name:
            union((x, y), by_name[net])
        by_name[net] = (x, y)

    checked = 0
    nets = {}
    for dev in data["devices"]:
        for p in dev["pins"]:
            xy = (int(p["xy"][0] * scale), int(p["xy"][1] * scale))
            nets.setdefault(p["net"], []).append(xy)
    for net, xys in nets.items():
        roots = {find(xy) for xy in xys}
        assert len(roots) == 1, (
            f"net '{net}' emitted as {len(roots)} disconnected groups at {sorted(set(xys))}"
        )
        checked += 1
    return checked


def with_ground(text):
    """The deck with `Xgnd0 0 ground` added when node 0 appears in it; see the module doc.

    Inserted as the second line: after a title line if cktImg ever treats line 1 as one,
    and ahead of any `.end`.
    """
    # ponytail: a whole-token scan, so a card whose only `0` is a value (`V1 a b 0`) also
    # gets a ground symbol with nothing on it. Parse node positions if that ever matters.
    if "0" not in text.split():
        return text
    first, _, rest = text.partition("\n")
    return f"{first}\nXgnd0 0 ground\n{rest}"


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    ap.add_argument("netlist", help="SPICE deck to place")
    ap.add_argument("out", nargs="?", help="output .sch (default: stdout)")
    ap.add_argument("--scale", type=float,
                    help="cktImg grid units -> xschem units (default: the manifest's units.scale)")
    ap.add_argument("--config", default=str(DEFAULT_CONFIG),
                    help="lint.zon passed through to cktimg-json (default: cktimg_sky130.zon; "
                         "a replacement needs its own .pdk section or MOSFETs are dropped)")
    ap.add_argument("--target", default=str(DEFAULT_TARGET),
                    help="cktImg target manifest mapping classes to xschem symbols "
                         "(default: xschem_sky130.json)")
    args = ap.parse_args()

    exe = shutil.which("cktimg-json")
    if exe is None:
        sys.exit("cktimg-json not found on PATH -- build cktImg (`zig build`) and add "
                 "its zig-out/bin to PATH, or enter the nix shell")

    deck = Path(args.netlist)
    text = deck.read_text()
    # Beside the original, so relative `.include`s in the deck still resolve.
    with tempfile.NamedTemporaryFile("w", suffix=".spice", dir=deck.parent, delete=False) as f:
        f.write(with_ground(text))
    try:
        cmd = [exe, "--config", args.config, "--target", args.target, f.name]
        proc = subprocess.run(cmd, capture_output=True, text=True)
    finally:
        os.unlink(f.name)
    err = proc.stderr.replace(f.name, str(deck)).strip()
    if proc.returncode != 0:
        sys.exit(f"cktimg-json failed:\n{err}")
    if err:
        print(err, file=sys.stderr)

    data = json.loads(proc.stdout)
    scale = args.scale or data["target"].get("units", {}).get("scale", 2.0)
    sch, wires, labels = emit(data, mos_cards(text), scale)

    n = check_connectivity(data, wires, labels, scale)
    print(f"{args.netlist}: {len(data['devices'])} devices, {n} nets, "
          f"{len(wires)} wire segments", file=sys.stderr)

    if args.out:
        Path(args.out).write_text(sch)
    else:
        sys.stdout.write(sch)


if __name__ == "__main__":
    main()
