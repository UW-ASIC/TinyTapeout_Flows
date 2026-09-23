---
name: analog-netlist-first
description: Author analog circuits as SPICE netlists with SpiceRack, turn them into editable xschem schematics with cktImg, and simulate them. Use when working in .flows/analog/, writing or converting a SPICE deck, generating a schematic from a netlist, or asked about cktimg-json / cktimg_to_xschem.py / xschem_sky130.json / spicerack / DesignBench.
---

# Netlist-first analog design

The template's original analog flow starts in the xschem GUI and netlists downward. This
one runs the other way: **the SPICE netlist is the source of truth**, and the schematic and
simulation are both derived from it. Both flows work; neither touches the other's targets.

Everything hangs off one artifact:

```
SpiceRack (spicerack)         <- author the circuit + testbench here
        |
   netlist/<name>.spice       <- the interchange format
   +----+---------------+
   |    |               |
cktImg  ngspice     Philis (packaged, not wired in -- see section 4)
   |    corners/MC      |
schematics/<name>.sch   GDS
```

Pick this flow when the circuit is easier to *write* than to *draw* -- which is almost
always true when an LLM is producing it.

## 1. Write the deck (SpiceRack)

SpiceRack (formerly DeSpice / PySpice, module `pyspice_rs`) is a Rust-backed Python
library, imported as `spicerack`. The nix shell puts it on `PYTHONPATH` already; check
with `python -c 'import spicerack'`. Old scripts need only the import renamed -- the
`Circuit` API and `unit` module are unchanged.

Put scripts in `analog/netlist/*.py`. **The contract is one line: the script prints a
SPICE deck to stdout.** That holds for a plain circuit and for a generated testbench
alike, which is why `make netlist` does not care which one you wrote.

```python
# analog/netlist/divider.py
import spicerack as ps
from spicerack.unit import u_V, u_kOhm

circuit = ps.Circuit("divider")
circuit.V(name="in", positive="vin", negative=circuit.gnd, value=10 @ u_V)
circuit.R(name="top", positive="vin", negative="vout", value=2 @ u_kOhm)
circuit.R(name="bot", positive="vout", negative=circuit.gnd, value=1 @ u_kOhm)

print(circuit)          # <- the deck. This is the whole interface.
```

Then:

```bash
cd analog/build/schematic
make netlist            # every .py in analog/netlist/ -> a matching .spice
```

To simulate directly, skip the file and use the backend from Python:

```python
sim = circuit.simulator(simulator="ngspice")
print(sim.operating_point()["vout"])
```

Backends: `ngspice`, `xyce`, `ltspice`, `spectre`, `vacask` -- whichever is installed.
`ngspice` is in the nix shell.

### Prebuilt testbenches

`spicerack.testbenches` ships with the package (it used to be a separate top-level
`testbenches` that the build never installed):

```python
from spicerack.testbenches import amplifier_voltage_gain, validate_metrics
```

It covers the common analog blocks, so an LLM does not have to reinvent a gain
measurement. Each returns a `DesignBench` with a `.netlist(backend)`
method:

`amplifier_voltage_gain`, `amplifier_current_gain`, `amplifier_transimpedance`,
`charge_amplifier`, `dac_static_linearity`, `adc_ramp`, `switch_characterization`,
`mux_routing`, `demux_routing`, `sample_hold`, `pll_lock`, `bandgap_reference`,
`bandgap_tempco`.

Plus the validation layer: `MetricSpec` / `extract_metrics` to pull numbers out of a
result, `ValidationRule` / `validate_metrics` to assert on them, and `CornerCase` /
`MonteCarloPlan` with `corner_netlists` / `monte_carlo_netlist` for spread, and
`evaluate_corners` / `evaluate_monte_carlo_file` to score them.

`examples/` in the SpiceRack repo is ordered from trivial to advanced; example 22 is the
testbench tour.

## 2. Netlist -> schematic (cktImg)

```bash
cd analog/build/schematic
make import NETLIST=divider         # netlist/divider.spice -> schematics/divider.sch
make schematic TOP_SCHEMATIC=divider   # open it
```

`make import` runs `.flows/tools/cktimg_to_xschem.py`, which runs cktImg's place-and-route
(`cktimg-json`) and converts the placed geometry to an xschem `.sch` using **real sky130
symbols**. The result opens, edits, and netlists back: verified by running xschem's own
netlister on the output and diffing against the source deck (a 5T OTA in both `M` and
`XM ... sky130_fd_pr__` form, and a spicerack divider).

Three files, each owning one thing:

| File | Owns |
|------|------|
| `.flows/tools/xschem_sky130.json` | The symbol mapping: a cktImg **target manifest** (`--target`) |
| `.flows/tools/cktimg_sky130.zon` | cktImg's config (`--config`): PDK resolution, strict geometry |
| `.flows/tools/cktimg_to_xschem.py` | xschem geometry: orientation, stubs, labels, the self-check |

### The manifest: adding or changing a symbol

`xschem_sky130.json` follows cktImg's `docs/TARGETS.md` schema. Keys of `classes` are
cktImg class names; `sym` is the xschem symbol path. Everything the script needs rides in
the class's `style`, which cktImg passes through untouched:

```json
"nmos": {
  "sym": "sky130_fd_pr/{model}.sym",
  "style": {
    "pin_xy": [[20, -30], [-20, 0], [20, 30]],
    "attrs": "name={ref} model={model} W={w} L={l}",
    "model": "nfet_01v8", "w": "1", "l": "0.15",
    "bulk": { "xy": [20, 0], "net": "0" }
  }
}
```

* `pin_xy` -- the centre of each `B 5 x0 y0 x1 y1` pin box in the `.sym` file, in the
  manifest's pin order (catalog order unless the class sets `pins`).
* `sym` and `attrs` are Python format strings over `name`, `ref` (name minus a leading
  `x`, since sky130 symbols add their own `X`), `value`, `net` (first pin's net), and --
  for a class whose style has `model` -- `model`/`w`/`l`, taken from the deck's own card
  and falling back to the style's defaults.
* `bulk` -- the 4th MOS pin cktImg does not model; the net comes from the deck.
* `rail: true` -- a global label symbol (`vdd.sym`/`gnd.sym`); its net is not labelled twice.

cktImg validates class and terminal names, so a typo fails the run instead of miswiring.
To find the classes a deck needs, run `cktimg-json deck.spice` and read the `class` fields.
Unmapped classes are skipped with a warning (`"unmapped": {"mode": "skip"}`).

### What it handles, and why you should care

* **Net names survive.** Every net gets a label. Without one, xschem renames unlabelled
  nodes `net1`, `net2`, ... and name-based LVS against your source deck silently breaks.
* **MOSFETs match the deck.** cktImg models 3-terminal devices and reports the model only
  as a display string. The script re-reads the deck's `M`/`X` cards for the bulk net, the
  exact model (so `_lvt`/`_hvt`/`g5v0d10v5` get their own sky130 symbol) and W/L.
* **Node `0` is ground.** `cktimg-json` only creates a ground rail for a net literally
  named `gnd`, so on a spicerack deck (`0` everywhere) it treats ground as a signal and
  parks grounded loads in the margin band. The script appends `Xgnd0 0 ground` to a temp
  copy of the deck, which also puts a real ground symbol in the schematic.
* **Symbol geometry is reconciled automatically.** cktImg's MOSFET and sky130's are
  different shapes. The script picks whichever of xschem's 8 orientations fits best and
  bridges any remaining gap with a short stub wire. Connectivity is correct by construction.
* **It self-checks.** Every run asserts each net comes out as one connected group,
  modelling xschem's real rule (including T-junctions onto a wire's interior). A failure
  aborts rather than writing a plausible-looking broken schematic.

### The one knob

`units.scale` in the manifest converts cktImg's abstract grid to xschem units (2). cktImg
passes it through without applying it. Override per run:

```bash
make import NETLIST=divider SCALE=2.5
```

There is no correct value derivable from either format's spec -- **tune it by eye with the
schematic open.** Too small and symbols overlap; too large and the routing sprawls. It
only affects looks, never connectivity.

### Limits

* Mapped classes: MOSFETs (`nmos`/`pmos`/`nfet`/`pfet`), `res`, `cap`, `vsource`, and the
  rails. Anything else is skipped with a warning -- add it to the manifest.
* sky130 transistors only resolve through `cktimg_sky130.zon`'s `.pdk` section. A
  replacement `--config` needs the same section, or cktImg drops every MOSFET.
* `res`/`cap` map to `res_generic_m1`/`cap_mim_m3_1` with `W=1 L=1`; the deck's value is
  kept as `cktimg_value` for reference, not simulated.
* A deck whose only `0` token is a *value* (`V1 a b 0`) still gets a ground symbol,
  unconnected to anything.
* `make clean` deletes `analog/netlist/*.spice`. That is correct for generated decks --
  but a **hand-written `.spice` with no `.py` beside it will be lost.** Keep hand decks
  elsewhere or give them a generator.

### Why `cktimg_sky130.zon` sets `symbol_geometry = .err`

xschem connects by geometry -- a wire touching a pin *is* a connection -- which is exactly
the host cktImg's LINT.md says `.err` is for. At the default `.warn`, cktImg does not spread
margin-band feedback devices that share a centre, so two of them (e.g. an R∥C load that
resolved as feedback) land on the same point. The node-0 fix above removes the usual
trigger; this removes the rest.

## 3. Direct tool use

Bypass make when you need to:

```bash
T=.flows/tools
cktimg-json deck.spice                                  # raw geometry, to stdout
cktimg-json --config $T/cktimg_sky130.zon --target $T/xschem_sky130.json deck.spice
cktimg-json --lint deck.spice                           # rule findings on stderr
python3 $T/cktimg_to_xschem.py deck.spice out.sch [--scale 2.5] [--config F] [--target F]
```

`lint.zon` also tunes cktImg's placement and routing (`abut_gap`, `track_w`, `refine`,
...). Unrecognized keys are reported, not fatal. Router cost weights are deliberately not
configurable -- see cktImg's `docs/ALGORITHM.md`.

## 4. Philis (P&R to GDS) -- packaged, not wired in

Philis does automated analog place-and-route to GDS, with GPurify bundled for in-loop
DRC/LVS. EDA-Packaged now builds it (`edaPkgs.philis`: `bin/philis` plus rule decks under
`share/philis/pdks`, which `philis run` requires as an argument). The old blockers -- a
relative-path GPurify dependency and a stale GitHub repo -- no longer apply to the binary.

**It is not in the nix shell yet**: `Analog.nix` does not list it, and no Makefile target
calls it. Adding `edaPkgs.philis` to `packages` there is the first step.

Two caveats before relying on it:

* **Library use does not resolve.** Philis asks for GPurify's `gdsverify` package, but
  GPurify main now names its packages `gpurify*`; the binary builds only because Philis's
  own `Cargo.lock` pins an older revision. Use the CLI, not the crate.
* **It does not scale yet.** Philis's own `suite_result.txt` has `bjt_mirror` converging in
  2.5 s, while `chain4` -- four devices -- takes 19 minutes and finishes
  `DRC 44 | LVS MISMATCH`. Treat auto-P&R as a starting point, not a signoff path, and
  reach for the manual `macroMaster` route for anything real.

Until then, layout stays with the existing magic/tcl flow in `analog/build/layout/`.

## Gotchas

* **Everything runs inside the nix shell.** `./env.sh` first; the Makefiles hard-fail
  without `IN_NIX_SHELL`.
* **xschem is a GUI.** `make schematic` now fails loudly with no `DISPLAY`/`WAYLAND_DISPLAY`
  instead of appearing to succeed. Over SSH use `ssh -X`; under WSL you need WSLg or an X
  server.
* **The PDK path is version-independent.** `xschemrc` resolves through `$PDK_ROOT/$PDK`,
  the symlink `volare enable` keeps current. Do not reintroduce a hardcoded version hash --
  a stale one makes xschem *core dump* on startup, which is exactly the failure this
  replaced.
