## UWASIC (Digital, Analog, Mixed) Design Template

A comprehensive template for mixed-signal ASIC design using open-source tools, featuring automated workflows for digital, analog, and integrated TinyTapeout chip projects.

### Overview

The UWASIC template provides a structured approach to ASIC design with three distinct workflows:
- **Digital flow**: RTL-to-GDS using OpenLane2
- **Analog flow**: Schematic-driven layout using Xschem/Magic  
- **Mixed-signal flow**: Combined analog and digital designs
- **TinyTapeout integration**: Tapeout-ready chip submission to Efabless

### Table of Contents
- [Quick Start](#quick-start)
- [Environment Setup](#environment-setup)
- [Project Management](#project-management)
- [Digital Design Flow](#digital-design-flow)
- [Analog Design Flow](#analog-design-flow)
- [Mixed-Signal Design Flow](#mixed-signal-design-flow)
- [TinyTapeout Integration](#tinytapeout-integration)
- [Workflows and CI/CD](#workflows-and-cicd)
- [Advanced Usage](#advanced-usage)

---

## Quick Start

### Creating Your First Project

Navigate to the `flows/` directory and choose your project type:

```bash
cd flows/

# Digital-only project
make CreateDigitalProject PROJECT=my_counter
make CreateDigitalCaravel PROJECT=my_chip

# Analog-only project  
make CreateAnalogProject PROJECT=my_opamp
make CreateAnalogCaravel PROJECT=my_analog_chip

# Mixed-signal project (digital + analog)
make CreateDigitalProject PROJECT=my_processor
make AddAnalogModule PROJECT=my_dac
make CreateMixedCaravel PROJECT=my_mixed_chip
```

### Project Management Commands

```bash
make help                    # Show all available commands
make status                  # Show current project state
make tree                    # Show project hierarchy
make DeleteAll              # Clean up all projects
```

---

## Environment Setup

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

## Project Management

### Project States

The template tracks project state automatically:
- **`none`**: No projects created
- **`digital`**: Digital-only project  
- **`analog`**: Analog-only project
- **`mixed`**: Combined digital + analog project

### Project Structure

After creating projects, your directory structure will be:

```
uwasic-template/
├── shell.nix         # Nix environment configuration
├── flows/            # Project management system
│   ├── Makefile      # Main project commands
│   └── templates/    # Project templates
├── digital/          # Digital design projects
│   └── project_name/
│       ├── build/    # Build system (synthesis, verification)
│       ├── src/      # RTL source files
│       └── test/     # Testbenches and verification
├── analog/           # Analog design projects  
│   ├── library/      # Shared analog IP library
│   └── project_name/
│       ├── build/    # Build system (layout, validation)
│       ├── layout/   # Magic layout files
│       ├── schematics/ # Xschem schematic files
│       └── symbols/  # Xschem symbol files
└── caravel/          # TinyTapeout submission package
    ├── .github/      # Automated workflows
    ├── src/          # Verilog wrapper and sources
    ├── analog/       # Copied analog project files
    ├── docs/         # Documentation
    └── info.yaml     # TinyTapeout project configuration
```

### Available Commands

#### Project Creation
```bash
make CreateDigitalProject PROJECT=name    # Create digital project
make CreateAnalogProject PROJECT=name     # Create analog project
```

#### Module Addition  
```bash
# Add analog module (child of existing analog project)
make AddAnalogModule PROJECT=child ANALOG_PARENT=parent

# Add additional analog projects (for mixed-signal foundations)
make CreateAnalogProject PROJECT=second_analog  # When PROJECT_STATE=analog

# Future: Digital module linking (in development)
# make AddDigitalModule PROJECT=digital_name LINK_ANALOG=analog_project
```

#### TinyTapeout Integration
```bash
make CreateDigitalCaravel PROJECT=name     # Digital TinyTapeout submission
make CreateAnalogCaravel PROJECT=name      # Analog TinyTapeout submission  
make CreateMixedCaravel PROJECT=name       # Mixed-signal TinyTapeout submission
```

#### Utilities
```bash
make help             # Show all commands
make status           # Show current project state
make tree             # Show project hierarchy
make DeleteAll        # Remove all projects
```

### Design Rules

1. **Digital Projects**: 
   - Only one digital module per digital project (single .gds output)
   - Use `src/` directory for internal submodules
   - Digital projects are standalone and do not link to analog

2. **Analog Projects**:
   - Can have child analog modules with `ANALOG_PARENT` parameter
   - Serve as base projects for mixed-signal designs
   - Cannot directly add digital modules

3. **Mixed-Signal Projects**:
   - Start with analog project(s) as the foundation
   - Multiple analog projects can be created to serve as the base
   - All analog projects are included in TinyTapeout submission
   - Digital module linking system is in development for explicit integration

4. **Project Architecture**:
   - **Analog Foundation**: Multiple analog projects can coexist and all are included
   - **Digital Standalone**: Single digital project per repository
   - **Mixed-Signal**: Analog projects + (future) linked digital modules
   - **Caravel Integration**: Automatic inclusion of all foundation projects

---

### Digital Design Flow

#### Overview
The digital flow uses OpenLane2 for automated RTL-to-GDS conversion with comprehensive verification.

#### Directory Structure
```
digital/
└── <DIGITAL_PROJECT_NAME>/         # Project template (duplicate for new projects)
    ├── build/        # Build system
    │   ├── config.mk # Project configuration
    │   ├── des_tb/   # RTL simulation
    │   ├── lint/     # Static analysis
    │   ├── synthesis/# Physical synthesis
    │   └── verification/ # Formal verification
    ├── src/          # RTL source files (.v, .sv)
    └── test/         # Testbenches and cocotb tests
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

##### e.g.
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

---

### Analog Design Flow

#### Overview
The analog flow uses Xschem for schematic capture and Magic for layout, with comprehensive DRC/LVS verification.

#### Directory Structure
```
digital/
├── library/              # Has all team symbols/schematics that may be useful
└── <ANALOG_PROJECT_NAME>/
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
- `klayout_drc` - DRC
- `klayout_lvs` - LVS
- downside: Requires GDS conversion

##### e.g.
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

---

## Mixed-Signal Design Flow

Mixed-signal projects combine digital and analog designs into a single tapeout-ready submission. The architecture starts with analog projects as the foundation.

### Creating Mixed-Signal Projects

Start with analog projects as the base:

```bash
# 1. Create base analog project(s) - these serve as the foundation
make CreateAnalogProject PROJECT=analog_frontend
make CreateAnalogProject PROJECT=dac_backend

# 2. Check project status and structure
make status                    # Shows all analog projects
make tree                      # Visual project hierarchy

# 3. Create TinyTapeout submission (includes all analog projects)
make CreateMixedCaravel PROJECT=my_mixed_chip
```

### Verified Mixed-Signal Architecture

✅ **Multiple Analog Projects**: You can create multiple analog projects that serve as the foundation  
✅ **Analog-First Design**: Mixed-signal projects start with analog components  
✅ **Status Reporting**: Complete project tracking with `status`, `tree`, and `dependencies` commands  
✅ **TinyTapeout Integration**: Proper analog pin assignments, power connections, and workflows  

### Project State Tracking

The template automatically tracks project states:

- **`none`**: No projects created
- **`analog`**: One or more analog projects (foundation for mixed-signal)
- **`digital`**: Single digital project (standalone)
- **`mixed`**: Combined analog and digital projects

### Checking Project Status

```bash
make status                    # Show all projects and their states
make tree                      # Visual project hierarchy
make dependencies             # Show what's ready for TinyTapeout integration
```

### Mixed-Signal Integration

The template automatically:
- Copies all analog project files to `caravel/analog/`  
- Generates proper TinyTapeout analog interface with power connections (`VGND`, `VDPWR`, `VAPWR`)
- Creates 2x2 tile configuration for mixed-signal projects
- Includes analog characterization workflows (CACE)
- Provides proper pin assignments for up to 6 analog pins (`ua[5:0]`)

### Future Enhancement: Digital Module Linking

The template is designed to support explicit linking between digital modules and analog projects. This will allow:
- Digital modules to explicitly link to specific analog projects
- Only linked digital modules included in final TinyTapeout submission
- Clear dependency tracking between digital and analog components

---

## TinyTapeout Integration

### Overview

TinyTapeout integration creates submission-ready packages for the Efabless shuttle program. The template automatically generates:
- Proper pin assignments and power connections
- GitHub Actions workflows for automated verification
- Project configuration files (`info.yaml`)
- Verilog wrappers with TinyTapeout interface

### TinyTapeout Specifications Compliance

The template automatically ensures compliance with [TinyTapeout analog specs](https://tinytapeout.com/specs/analog/):

#### Analog Projects
- **Pin Assignment**: Uses `ua[5:0]` analog pins (configure count in `info.yaml`)
- **Power Connections**: Includes `VGND`, `VDPWR`, and `VAPWR` connections
- **Digital Pin Handling**: All digital outputs properly grounded
- **Tile Configuration**: Defaults to 1x2 tiles for analog projects
- **Pin Limits**: Up to 6 analog pins, with cost considerations

#### Digital Projects  
- **Interface**: Standard TinyTapeout digital interface
- **Tile Configuration**: 1x1 tiles for digital projects
- **Testing**: Includes gate-level testing workflows

#### Mixed-Signal Projects
- **Tile Configuration**: 2x2 tiles for mixed projects
- **Analog Interface**: Proper `ua[]` pin assignments
- **Digital Integration**: Multiple digital modules supported
- **Power Distribution**: Separate analog and digital power domains

#### Examples used in determining template:
- https://github.com/TinyTapeout/ttsky-verilog-template
- https://github.com/TinyTapeout/ttsky-analog-template

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

---

## Workflows and CI/CD

The template automatically generates GitHub Actions workflows based on project type, using template files instead of hardcoded echo commands for better maintainability.

### Automated Workflow Generation

When you create a TinyTapeout project, the appropriate workflows are automatically generated:

```bash
# Creates analog-specific workflows
make CreateAnalogCaravel PROJECT=my_chip

# Creates digital-specific workflows  
make CreateDigitalCaravel PROJECT=my_chip

# Creates mixed-signal workflows (includes both)
make CreateMixedCaravel PROJECT=my_chip
```

### Workflow Templates

All workflows are generated from templates in `flows/caravel/templates/workflows/`:

#### Universal Workflows (All Project Types)
- **`gds.yaml`**: GDS generation and precheck using TinyTapeout actions
- **`docs.yaml`**: Documentation generation workflow

#### Digital/Mixed-Signal Workflows
- **`test.yaml`**: RTL simulation using Icarus Verilog + cocotb
- **`fpga.yaml`**: FPGA implementation for ICE40UP5K platform  
- **`gl_test`**: Gate-level testing (integrated into gds.yaml)

#### Analog/Mixed-Signal Workflows
- **`cace.yaml`**: Circuit Automatic Characterization Engine for analog verification

### Workflow Features

#### gds.yaml - GDS Generation
- **Purpose**: Generate tapeout-ready GDS files
- **Trigger**: Push or manual dispatch
- **Tools**: TinyTapeout GDS action with Sky130 PDK
- **Includes**: Precheck, GDS generation, and layout viewer
- **Conditional**: Adds gate-level testing for digital/mixed projects

#### test.yaml - Digital Verification  
- **Purpose**: Run digital RTL and gate-level tests
- **Coverage**: Icarus Verilog simulation + cocotb verification
- **Artifacts**: VCD waveforms and test results
- **Requirements**: Automatically installs Python dependencies

#### cace.yaml - Analog Characterization
- **Purpose**: Automated analog circuit characterization  
- **Environment**: Uses Nix shell for consistent tool versions
- **Requirements**: Expects `cace_config.yaml` in analog directory
- **Artifacts**: CACE results and HTML reports

#### fpga.yaml - FPGA Implementation
- **Purpose**: Generate FPGA bitstream for prototyping
- **Platform**: ICE40UP5K via TinyTapeout actions
- **Trigger**: Push to main branch or manual

### Workflow Customization

To customize workflows:
1. Modify templates in `flows/caravel/templates/workflows/`
2. Regenerate workflows: `make SetupWorkflows`
3. Or manually edit generated files in `caravel/.github/workflows/`

---

## Advanced Usage

### Template System Architecture

The template uses a sophisticated file-based system instead of hardcoded generation:

```
flows/
├── Makefile                    # Main project management
└── caravel/templates/
    ├── analog/                 # Analog project templates
    │   ├── info.yaml.template  # TinyTapeout configuration
    │   └── project.v.template  # Verilog wrapper
    ├── digital/                # Digital project templates
    │   ├── info.yaml.template
    │   └── project.v.template
    ├── mixed/                  # Mixed-signal templates
    │   ├── info.yaml.template
    │   └── project.v.template
    └── workflows/              # GitHub Actions templates
        ├── gds.yaml.template
        ├── test.yaml.template
        ├── cace.yaml.template
        ├── docs.yaml.template
        ├── fpga.yaml.template
        └── gl_test_fragment.yaml
```

### Customizing Templates

1. **Modify Templates**: Edit files in `flows/caravel/templates/`
2. **Placeholder System**: Use `PROJECT_NAME_PLACEHOLDER`, `ANALOG_TOP_PLACEHOLDER`, etc.
3. **Regenerate**: Run `make DeleteAll` and recreate projects to test changes

### Project State Management

The template automatically detects project state:

```makefile
PROJECT_STATE := $(shell \
    if [ ! -d "$(ANALOG_DIR)" ] && [ ! -d "$(DIGITAL_DIR)" ] && [ ! -d "$(CARAVEL_DIR)" ]; then \
        echo "none"; \
    elif [ -d "$(ANALOG_DIR)" ] && [ -d "$(DIGITAL_DIR)" ] && [ -d "$(CARAVEL_DIR)" ]; then \
        echo "mixed"; \
    elif [ -d "$(DIGITAL_DIR)" ] && [ -d "$(CARAVEL_DIR)" ] && [ ! -d "$(ANALOG_DIR)" ]; then \
        echo "digital"; \
    elif [ -d "$(ANALOG_DIR)" ] && [ -d "$(CARAVEL_DIR)" ] && [ ! -d "$(DIGITAL_DIR)" ]; then \
        echo "analog"; \
    else \
        echo "unknown"; \
    fi)
```

### TinyTapeout Integration Details

#### Analog Pin Configuration

Adjust analog pin count in generated `info.yaml`:

```yaml
project:
  analog_pins: 2    # Change this (1-6)
  tiles: "1x2"      # Adjust tile count as needed

pinout:
  ua[0]: "Input Signal"     # Label your pins
  ua[1]: "Output Signal"
  # ua[2]: ""               # Comment unused pins
```

#### Power Connection Examples

The template generates proper power connections:

```verilog
module tt_um_my_analog_chip (
    // ... standard pins ...
    inout  wire [5:0] ua,
    input  wire       VGND,     // Ground
    input  wire       VDPWR,    // 1.8V digital  
    input  wire       VAPWR     // 3.3V analog (optional)
);
    // Your analog blocks connect to power pins
    your_opamp opamp_inst (
        .vdd(VAPWR),
        .vss(VGND),
        .in_p(ua[0]),
        .in_n(ua[1]),
        .out(ua[2])
    );
endmodule
```

### Building Custom Flows

To add new project types:

1. **Create Templates**: Add new directory in `flows/caravel/templates/`
2. **Extend Makefile**: Add new `Create*Project` and `Create*Caravel` targets
3. **Update State Logic**: Modify `PROJECT_STATE` detection
4. **Add Workflows**: Create appropriate GitHub Actions templates

---

## Resources
- [OpenLane2 Documentation](https://openlane2.readthedocs.io/)
- [Sky130 PDK Documentation](https://skywater-pdk.readthedocs.io/)
- [Caravel Harness Documentation](https://caravel-harness.readthedocs.io/)
- [CACE Documentation](https://cace.readthedocs.io/)
- [Efabless Platform](https://platform.efabless.com/)
