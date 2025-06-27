## Digital Workflow
digital/                   # Digital design domain
├── src/                   # RTL source files
├── runs/           # Output from testing testbenches
├── openlane/              # output from OpenLane2
└── test/                  # Digital testbenches & verification

### How to use:
1. Setup

```
# 1. Set Project Top Directory
vim Makefile
change DESIGN ?= to your top .v or .sv project file

# 2. Set Test testbench file
vim test/Makefile
# Change the Following:

# Include the testbench sources:
VERILOG_SOURCES += $(PWD)/tb_counter.v
TOPLEVEL = tb_counter

# MODULE is the basename of the Python test file
MODULE = test_counter
```

2. Commands

Design Flow Commands (use DESIGN=name):
- lint            - Lint RTL using slang
- synthesis       - Synthesize RTL to gate-level netlist using OpenLane2

Simulation Commands:
- test-rtl        - Run RTL tests (iverilog)
- verification    - Run cocotb Python tests
- test            - Run all tests for DESIGN

Utility Commands:
- clean           - Clean generated files

Examples:
- make lint DESIGN=counter
- make synthesis DESIGN=counter
- make verification DESIGN=counter
- make test DESIGN=counter

3. Output from OpenLane2

the output from OpenLane2 will be found in openlane/runs/<MODULE>_synthesis/final/, then there is going to be a few folder that you may need
- nl (netlist)

### Working on the flow

For the slang linter:
- https://github.com/MikePopoloski/slang

For the cocoatb configuration:
- https://github.com/cocotb/cocotb

For the openlane configuration, read: 
- Understanding the Analog Connection {https://openlane2.readthedocs.io/en/latest/usage/using_macros.html}

- Understanding a Pure Digital -> ASIC project {https://openlane2.readthedocs.io/en/latest/usage/caravel/index.html}

### Tools List for Nix Package management:
- OpenLane2
- Python (Cocoatb & Pytest)
- Makefile
- Icarus Verilog
- Slang

### TODO:
1. Add support for Slang into synthesizer flow (OpenLane2)
2. Add github workflows to automate testing (Workflows)
