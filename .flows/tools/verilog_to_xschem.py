#!/usr/bin/env python3
"""
Verilog to Xschem converter

Yosys: Creates single symbol with spice_sym_def pointing to SPICE netlist
Verilator: Creates inner primitive symbol + wrapper schematic + outer symbol


"""

import argparse
import re
import os
from pathlib import Path


def parse_verilog_ports(verilog_file):
    """Extract module name and ports from Verilog"""
    with open(verilog_file, "r") as f:
        content = f.read()

    module_match = re.search(r"module\s+(\w+)\s*\(", content)
    if not module_match:
        raise ValueError("No module found")

    module_name = module_match.group(1)

    # Extract ports
    ports = []
    for line in content.split("\n"):
        line = line.strip()
        if line.startswith(("input", "output", "inout")):
            match = re.match(
                r"(input|output|inout)\s+"
                r"(?:wire|reg|logic)?\s*"
                r"(?:\[[^\]]+\])?\s*"
                r"(\w+)",
                line,
            )
            if match:
                ports.append(
                    {"name": match.group(2).rstrip(",;"), "dir": match.group(1)}
                )
    return module_name, ports


##############################################################
## Yosys method functions
##############################################################


def create_yosys_symbol(module_name, ports, output_dir, project_name):
    sym_file = Path(output_dir) / f"{module_name}.sym"
    # Calculate dimensions
    inputs = [p for p in ports if p["dir"] == "input"]
    outputs = [p for p in ports if p["dir"] == "output"]

    max_ports = max(len(inputs), len(outputs), 1)
    height = max(100, max_ports * 20)
    width = 260

    # Build the SPICE path
    proj_name = project_name if project_name else module_name
    spice_path = f"../../runs/{proj_name}_full/final/spice/{module_name}.spice"

    content = f"""v {{xschem version=3.4.5 file_version=1.2}}
G {{}}
K {{type=subcircuit
format="@name @pinlist @symname"
template="name=x1"
spice_sym_def=".include {spice_path}"
}}
V {{}}
S {{}}
E {{}}
"""

    # Draw rectangular box
    content += f"""L 4 -130 -{height//2} -130 {height//2} {{}}
L 4 -130 {height//2} {width-130} {height//2} {{}}
L 4 {width-130} {height//2} {width-130} -{height//2} {{}}
L 4 {width-130} -{height//2} -130 -{height//2} {{}}
"""

    # Add module name text
    content += f"""T {{@symname}} -100 -10 0 0 0.3 0.3 {{}}
T {{@name}} {width-120} -{height//2-20} 0 0 0.2 0.2 {{}}
"""

    # Add input pins on left side
    if len(inputs) > 0:
        spacing = height // (len(inputs) + 1)
        for i, port in enumerate(inputs):
            y = -height // 2 + spacing * (i + 1)
            content += f"""B 5 -152.5 {y-2.5} -147.5 {y+2.5} {{name={port['name']} dir=in}}
L 4 -130 {y} -150 {y} {{}}
T {{{port['name']}}} -125 {y-4} 0 0 0.2 0.2 {{}}
"""

    # Add output pins on right side
    if len(outputs) > 0:
        spacing = height // (len(outputs) + 1)
        for i, port in enumerate(outputs):
            y = -height // 2 + spacing * (i + 1)
            content += f"""B 5 {width-112.5} {y-2.5} {width-107.5} {y+2.5} {{name={port['name']} dir=out}}
L 4 {width-130} {y} {width-110} {y} {{}}
T {{{port['name']}}} {width-135} {y-4} 0 1 0.2 0.2 {{}}
"""

    with open(sym_file, "w") as f:
        f.write(content)

    return sym_file


##############################################################
## Verilator method functions
##############################################################


def create_inner_symbol(module_name, ports, output_dir, method):
    """Create inner primitive symbol with rectangular shape"""
    sym_file = Path(output_dir) / f"{module_name}_inner.sym"

    content = f"""v {{xschem version=3.4.5 file_version=1.2}}
G {{}}
K {{type=primitive
format="@name @pinlist @symname"
template="name=X1"
}}
V {{}}
S {{}}
E {{}}
T {{@symname}} -50 -30 0 0 0.2 0.2 {{}}
T {{@name}} -50 -10 0 0 0.2 0.2 {{}}
"""

    # Calculate dimensions based on port count
    inputs = [p for p in ports if p["dir"] == "input"]
    outputs = [p for p in ports if p["dir"] == "output"]

    max_ports = max(len(inputs), len(outputs))
    height = max(100, max_ports * 20)
    width = 200

    # Draw rectangular box
    content += f"""L 4 -130 -{height//2} -130 {height//2} {{}}
L 4 -130 {height//2} {width-130} {height//2} {{}}
L 4 {width-130} {height//2} {width-130} -{height//2} {{}}
L 4 {width-130} -{height//2} -130 -{height//2} {{}}
"""

    # Layout input pins on left side
    if len(inputs) > 0:
        spacing = height // (len(inputs) + 1)
        for i, port in enumerate(inputs):
            y = -height // 2 + spacing * (i + 1)
            content += f"""B 5 -152.5 {y-2.5} -147.5 {y+2.5} {{name={port['name']} dir=in}}
L 4 -130 {y} -150 {y} {{}}
T {{{port['name']}}} -125 {y-4} 0 0 0.15 0.15 {{}}
"""

    # Layout output pins on right side
    if len(outputs) > 0:
        spacing = height // (len(outputs) + 1)
        for i, port in enumerate(outputs):
            y = -height // 2 + spacing * (i + 1)
            content += f"""B 5 {width-112.5} {y-2.5} {width-107.5} {y+2.5} {{name={port['name']} dir=out}}
L 4 {width-130} {y} {width-110} {y} {{}}
T {{{port['name']}}} {width-135} {y-4} 0 1 0.15 0.15 {{}}
"""

    with open(sym_file, "w") as f:
        f.write(content)

    return sym_file


def create_wrapper_schematic(
    module_name,
    ports,
    output_dir,
    method,
    base_module_name=None,
    project_name=None,
):
    """Create wrapper schematic with proper net connections using lab attributes"""
    sch_file = Path(output_dir) / f"{module_name}.sch"

    content = f"""v {{xschem version=3.4.5 file_version=1.2}}
G {{}}
K {{type=subcircuit}}
V {{}}
S {{}}
E {{}}
"""

    # Calculate dimensions based on port count
    inputs = [p for p in ports if p["dir"] == "input"]
    outputs = [p for p in ports if p["dir"] == "output"]
    max_ports = max(len(inputs), len(outputs))
    height = max(100, max_ports * 20)

    # Add ipin/opin for each port
    y_pos = 0
    for port in ports:
        pin_type = "ipin" if port["dir"] == "input" else "opin"
        content += f"""C {{devices/{pin_type}.sym}} 0 {y_pos} 0 0 {{name=p{port['name']} lab={port['name']}}}
"""
        y_pos += 40

    # Position for inner symbol instance
    inst_x = 300
    inst_y = 100

    # Verilator: use d_cosim with .so and correct RTL path
    base_name = base_module_name if base_module_name else module_name
    proj_name = project_name if project_name else base_name
    rtl_path = f"../../rtl/{proj_name}.v"

    # Prefer a path to the inner symbol relative to the top-level analog/schematics directory
    resolved_output = Path(output_dir).resolve()
    inner_sym_file = resolved_output / f"{module_name}_inner.sym"
    schematics_root = None
    for p in resolved_output.parents:
        if p.name == "schematics":
            schematics_root = p
            break

    if schematics_root:
        inner_sym_ref = os.path.relpath(inner_sym_file, start=schematics_root).replace(os.path.sep, "/")
    else:
        # Fallback to the previous behavior
        inner_sym_ref = f"verilator/{module_name}_inner.sym"

    content += f"""
C {{{inner_sym_ref}}} {inst_x} {inst_y} 0 0 {{name={base_name} model={base_name}
device_model=".model {base_name} d_cosim simulation=\\"./{base_name}.so\\""
tclcommand="edit_file [abs_sym_path {rtl_path}]"}}
"""

    # Add lab_pin labels to connect the ipins/opins to the instance
    y_offset = inst_y - height // 2

    # Connect input pins
    if len(inputs) > 0:
        spacing = height // (len(inputs) + 1)
        for i, port in enumerate(inputs):
            pin_y = y_offset + spacing * (i + 1)
            content += f"""C {{devices/lab_pin.sym}} {inst_x-150} {pin_y} 0 0 {{name=l{port['name']} lab={port['name']}}}
"""

    # Connect output pins
    if len(outputs) > 0:
        spacing = height // (len(outputs) + 1)
        for i, port in enumerate(outputs):
            pin_y = y_offset + spacing * (i + 1)
            content += f"""C {{devices/lab_pin.sym}} {inst_x+90} {pin_y} 0 1 {{name=l{port['name']} lab={port['name']}}}
"""

    with open(sch_file, "w") as f:
        f.write(content)

    return sch_file


def create_outer_symbol(module_name, ports, output_dir):
    """Create outer symbol (user-facing) with rectangular shape"""
    sym_file = Path(output_dir) / f"{module_name}.sym"

    # Calculate dimensions
    inputs = [p for p in ports if p["dir"] == "input"]
    outputs = [p for p in ports if p["dir"] == "output"]

    max_ports = max(len(inputs), len(outputs))
    height = max(100, max_ports * 20)
    width = 260

    content = f"""v {{xschem version=3.4.5 file_version=1.2}}
G {{}}
K {{type=subcircuit
format="@name @pinlist @symname"
template="name=x1"
}}
V {{}}
S {{}}
E {{}}
"""

    # Draw rectangular box
    content += f"""L 4 -130 -{height//2} -130 {height//2} {{}}
L 4 -130 {height//2} {width-130} {height//2} {{}}
L 4 {width-130} {height//2} {width-130} -{height//2} {{}}
L 4 {width-130} -{height//2} -130 -{height//2} {{}}
"""

    # Add module name text
    content += f"""T {{@symname}} -100 -10 0 0 0.3 0.3 {{}}
T {{@name}} {width-120} -{height//2-20} 0 0 0.2 0.2 {{}}
"""

    # Add input pins on left side
    if len(inputs) > 0:
        spacing = height // (len(inputs) + 1)
        for i, port in enumerate(inputs):
            y = -height // 2 + spacing * (i + 1)
            content += f"""B 5 -152.5 {y-2.5} -147.5 {y+2.5} {{name={port['name']} dir=in}}
L 4 -130 {y} -150 {y} {{}}
T {{{port['name']}}} -125 {y-4} 0 0 0.2 0.2 {{}}
"""

    # Add output pins on right side
    if len(outputs) > 0:
        spacing = height // (len(outputs) + 1)
        for i, port in enumerate(outputs):
            y = -height // 2 + spacing * (i + 1)
            content += f"""B 5 {width-112.5} {y-2.5} {width-107.5} {y+2.5} {{name={port['name']} dir=out}}
L 4 {width-130} {y} {width-110} {y} {{}}
T {{{port['name']}}} {width-135} {y-4} 0 1 0.2 0.2 {{}}
"""

    with open(sym_file, "w") as f:
        f.write(content)

    return sym_file


def main():
    parser = argparse.ArgumentParser(description="Verilog to Xschem")
    parser.add_argument("--netlist", help="Synthesized netlist (Yosys)")
    parser.add_argument("--rtl", help="RTL file (Verilator)")
    parser.add_argument("--output", required=True, help="Output directory")
    parser.add_argument("--method", required=True, choices=["yosys", "verilator"])
    parser.add_argument("--pdk-root", help="PDK root")
    parser.add_argument("--pdk", help="PDK name")
    parser.add_argument(
        "--project-name", help="Project name for paths (defaults to module name)"
    )

    args = parser.parse_args()

    # Create subdirectories based on method
    if args.method == "yosys":
        subdir = Path(args.output) / "synth"
    else:
        subdir = Path(args.output) / "verilator"

    os.makedirs(subdir, exist_ok=True)

    if args.method == "yosys":
        if not args.netlist:
            raise ValueError("--netlist required for yosys method")

        module_name, ports = parse_verilog_ports(args.netlist)
        project_name = args.project_name if args.project_name else module_name

        print(f"Creating Yosys symbol for: {module_name}")
        print(f"Project name: {project_name}")
        print(f"Output directory: {subdir}")

        # Yosys: Just create single symbol with spice_sym_def
        create_yosys_symbol(module_name, ports, subdir, project_name)

        print(f"✓ Created in {subdir}/: {module_name}.sym")

    else:  # verilator
        if not args.rtl:
            raise ValueError("--rtl required for verilator method")

        module_name, ports = parse_verilog_ports(args.rtl)
        project_name = args.project_name if args.project_name else module_name
        functional_name = f"{project_name}_functional"

        print(f"Creating Verilator symbols for: {module_name}")
        print(f"Project name: {project_name}")
        print(f"Functional variant name: {functional_name}")
        print(f"Output directory: {subdir}")

        # Verilator: Create 3-file structure
        create_inner_symbol(functional_name, ports, subdir, "verilator")
        create_wrapper_schematic(
            functional_name,
            ports,
            subdir,
            "verilator",
            base_module_name=module_name,
            project_name=project_name,
        )
        create_outer_symbol(functional_name, ports, subdir)

        print(
            f"✓ Created in {subdir}/: {functional_name}_inner.sym, {functional_name}.sch, {functional_name}.sym"
        )


if __name__ == "__main__":
    main()