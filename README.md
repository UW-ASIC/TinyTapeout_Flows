## UWASIC Mixed-Signal Design Template

A comprehensive template for mixed-signal ASIC design using open-source tools, featuring automated workflows for digital, analog, and integrated Caravel chip projects.

### Overview

The UWASIC template provides a structured approach to ASIC design with three distinct workflows:
- **Digital flow**: RTL-to-GDS using OpenLane2
- **Analog flow**: Schematic-driven layout using Xschem/Magic
- **Caravel integration**: Tapeout-ready chip submission to Efabless

### Table of Contents
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Digital Design Flow](#digital-design-flow)
- [Analog Design Flow](#analog-design-flow)
- [Caravel Integration](#caravel-integration)
- [Workflows and CI/CD](#workflows-and-cicd)

### Environment Setup

#### Installing Nix Package Manager

The template uses Nix to ensure consistent tool versions across all platforms.

##### Linux Installation
```bash
# Install Nix (single-user)
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Enable flakes
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Restart shell
exec $SHELL
```

##### macOS Installation
```bash
# Use Determinate Systems installer (handles macOS security)
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install

# Install XQuartz for GUI tools
brew install --cask xquartz

# Enable flakes
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

##### Windows Installation (via WSL2)
```powershell
# In PowerShell as Admin
wsl --install

# Restart, then in WSL2 Ubuntu:
sh <(curl -L https://nixos.org/nix/install) --no-daemon
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

#### Entering the Nix Environment

From the project root:
```bash
nix-shell
```

This provides all necessary tools:
- **Digital**: OpenLane2, Yosys, Icarus Verilog, cocotb, slang
- **Analog**: Xschem, Magic, ngspice, netgen, KLayout
- **Verification**: CACE, OpenSTA

#### Project Structure

```
uwasic-template/
├── shell.nix         # Nix environment configuration
├── digital/          # Digital design workflow
├── analog/           # Analog design workflow  
└── caravel/          # Caravel harness integration
```

### Digital Design Flow

#### Overview
The digital flow uses OpenLane2 for automated RTL-to-GDS conversion with comprehensive verification.

#### Directory Structure
```
digital/
├── output/           # Shared output directory
└── template/         # Project template (duplicate for new projects)
    ├── build/        # Build system
    │   ├── config.mk # Project configuration
    │   ├── des_tb/   # RTL simulation
    │   ├── lint/     # Static analysis
    │   ├── synthesis/# Physical synthesis
    │   └── verification/ # Formal verification
    ├── src/          # RTL source files (.v, .sv)
    └── test/         # Testbenches and cocotb tests
```

#### Configuration (`build/config.mk`)
```makefile
# Project Setup
DESIGN_TOP := counter        # Top module name
RTL_FILES := $(shell find ../../src -name "*.v" -o -name "*.sv")
RTL_FILES_H := $(shell find ../../src -name "*.vh" -o -name "*.svh")
TB_FILES := $(shell find ../../test -name "*_tb.v" -o -name "tb_*.v")

# Verification Setup
COCOTB_TEST_FILES := $(shell find ../../test -name "test_*.py")
TOPLEVEL_TB_MODULES := tb_counter    # Testbench modules
MODULE_TESTS := test_counter         # Python test modules
```

#### Workflows

##### 1. RTL Simulation
```bash
cd digital/template/build/des_tb
make test-rtl
```
- Uses Icarus Verilog
- Runs all discovered testbenches
- Outputs VCD waveforms

##### 2. Linting
```bash
cd digital/template/build/lint
make lint
```
- SystemVerilog linting with slang
- Checks for common RTL issues

##### 3. Synthesis and Implementation
```bash
cd digital/template/build/synthesis
make synthesis    # Synthesis only
make harden      # Full flow to GDS
```
- Generates OpenLane2 configuration
- Outputs to `output/` directory:
  - `.mag` - Magic layout file
  - `.spice` - SPICE netlist
  - `.nl.v` - Gate-level netlist

##### 4. Verification
```bash
cd digital/template/build/verification
make verification  # Run all tests
make tb_counter   # Run specific test
```
- Cocotb-based verification
- Supports RTL and gate-level simulation
- SDF annotation for timing

#### Creating a New Digital Sub-Project
```bash
cd digital/
cp -r template my_project
cd my_project/build
# Edit config.mk with your design name
```

### Analog Design Flow

#### Overview
The analog flow uses Xschem for schematic capture and Magic for layout, with comprehensive DRC/LVS verification.

#### Directory Structure
```
analog/
├── build/
│   ├── config.mk     # Project configuration
│   ├── layout/       # Layout tools
│   ├── schematic/    # Schematic tools
│   └── validation/   # DRC/LVS verification
├── layout/           # Magic layout files (.mag)
├── library/          # Team IP library (TODO)
├── schematics/       # Xschem schematics (.sch)
│   └── testbenches/  # Testbench schematics
└── symbols/          # Xschem symbols (.sym)
```

#### Configuration (`build/config.mk`)
```makefile
PROJECT = template
TOP_SCHEMATIC ?= inverter
TOP_LAYOUT := $(TOP_SCHEMATIC)
```

#### Workflows

##### 1. Schematic Capture
```bash
cd analog/build/schematic
make setup        # Organize files
make schematic    # Open Xschem
```
- Creates/opens schematic files
- Auto-organizes symbols and testbenches
- Generates SPICE netlists

##### 2. Layout Design
```bash
cd analog/build/layout
make layout       # Open Magic
```
- Sky130 PDK configured
- Creates layout files if missing

##### 3. SPICE Simulation
a) through xschem itself or:
b) 
```bash
cd analog/build/schematic
make spice        # Run simulations
```
- Runs ngspice on generated netlists
- Processes all `.spice` files

##### 4. Physical Verification
```bash
cd analog/build/validation
make magic_test          # Magic DRC/LVS
make klayout_test        # KLayout verification
make full_verification   # Complete suite
```

**Magic Verification**:
- `magic_extract` - Extract netlist from layout
- `magic_drc` - Design rule checking
- `magic_lvs` - Layout vs. schematic

**KLayout Verification**:
- `klayout_drc` - Commercial-grade DRC
- `klayout_lvs` - Commercial-grade LVS
- Requires GDS conversion

### Caravel Integration

#### Overview
Caravel is the test harness SoC required for Efabless tapeout, providing:
- Management RISC-V processor
- 38 GPIO pins
- Power management
- ~10.5mm² user area

#### Directory Structure
```
caravel/
├── def/              # DEF placement files
├── gds/              # Final GDS files
├── info.yaml         # Project metadata
├── lef/              # LEF abstract views
├── mag/              # Magic files
│   ├── dev/          # Development files
│   └── top_module.mag
├── Makefile          # Integration makefile (TODO)
└── verilog/          # Gate-level netlists
```

#### Integration Methodology (TODO)

##### Required Files (info.yaml)
```yaml
project:
  name: "Your Project Name"
  author: "Your Name"
  description: "Project description"
  
source:
  - verilog/rtl/user_project_wrapper.v
  - mag/user_project_wrapper.mag
  
gds:
  file: gds/user_project_wrapper.gds
  
lef:
  file: lef/user_project_wrapper.lef
```

### Workflows and CI/CD

#### GitHub Actions Configuration

##### test.yaml - Digital Verification
- **Purpose**: Run digital RTL tests
- **Trigger**: Push or manual
- **Coverage**: Icarus Verilog + cocotb
- **TODO**: Restrict to `digital/` directory only

##### fpga.yaml - FPGA Implementation
- **Purpose**: Generate TinyTapeout FPGA bitstream
- **Trigger**: Manual only
- **Platform**: ICE40UP5K
- **TODO**: Add digital-only check

##### cace.yaml - Analog Characterization
- **Purpose**: Run CACE verification
- **Status**: Currently broken
- **TODO**: 
  - Fix paths for new structure
  - Support analog + mixed-signal
  - Add example CACE configurations

##### gds.yaml - Final Integration
- **Purpose**: Generate tapeout-ready GDS
- **Trigger**: Push or manual
- **TODO**: 
  - Implement project type detection
  - Call appropriate integration flow

### Usage Examples

#### Digital Project Workflow
```bash
# Setup
cd digital/
cp -r template my_cpu
cd my_cpu/build

# Development
make -C lint lint
make -C des_tb test-rtl
make -C verification test

# Implementation
make -C synthesis harden
```

#### Analog Project Workflow
```bash
# Setup
cd analog/build
vim config.mk  # Set TOP_SCHEMATIC

# Design
make -C schematic schematic
make -C schematic spice
make -C layout layout

# Verification
make -C validation full_verification
```

#### Mixed-Signal Project (TODO)
```bash
# Digital portion
cd digital/my_adc_digital/
# ... digital flow ...

# Analog portion  
cd analog/
# ... analog flow ...

# Integration
cd caravel/
make integrate TYPE=mixed
```

### TODO:

#### Team Library Integration (TODO)

```bash
cd analog/library
git clone <team-ip-repository>
# Configure search paths in xschemrc
```

#### Critical TODOs

1. **Caravel Integration Makefile**
   ```makefile
   # Detect project type based on file presence
   # Call appropriate sub-flows
   # Copy outputs to caravel structure
   ```

2. **Mixed-Signal Integration Guide**
   - SPICE to Xschem symbol conversion
   - Digital GDS to analog integration
   - Power/ground net handling
   - Hierarchical netlist management

3. **CACE Workflow Fixes**
   - Update GitHub action for new paths
   - Create template `cace.yaml` files
   - Document characterization flow

4. **Team Library Setup**
   - Git submodule configuration
   - Xschem library paths
   - Symbol management

#### Enhancement TODOs

5. **Workflow Modularity**
   - Auto-detect project type
   - Conditional workflow execution
   - Progress tracking

6. **Documentation**
   - Video tutorials
   - Example projects
   - Best practices guide

7. **Verification**
   - Mixed-signal cosimulation
   - Power integrity checks
   - Automatic test generation

## Resources
- [OpenLane2 Documentation](https://openlane2.readthedocs.io/)
- [Sky130 PDK Documentation](https://skywater-pdk.readthedocs.io/)
- [Caravel Harness Documentation](https://caravel-harness.readthedocs.io/)
- [CACE Documentation](https://cace.readthedocs.io/)
- [Efabless Platform](https://platform.efabless.com/)

