## UWASIC Design Template

A template for mixed-signal ASIC design using open-source tools, featuring automated workflows for digital, analog, and integration for TinyTapeout chip projects.

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
- [Command Reference](#command-reference)
- [Project Structure](#project-structure)
- [Digital Workflow](#digital-workflow)
- [Analog Workflow](#analog-workflow)
- [Mixed-Signal Workflow](#mixed-signal-workflow)
- [TinyTapeout Integration](#tinytapeout-integration)
- [Workflows and CI/CD](#workflows-and-cicd)

### Quick Start [**Do this first after Environment Setup**]

Navigate to the `flows/` directory and choose your project type:

```bash
cd flows/

# Digital-only project
make CreateProject PROJECT_NAME=my_counter PROJECT_TYPE=digital

# Analog-only project
make CreateProject PROJECT_NAME=my_opamp PROJECT_TYPE=analog

# Mixed-signal project (digital + analog)
make CreateProject PROJECT_NAME=my_processor PROJECT_TYPE=mixed
```

### View Available Commands

```bash
make help                    # Show all available commands
make status                  # Show current project modules and their parents
make DeleteAll              # Clean up all projects
```

---

### Environment Setup

##### Installing Nix Package Manager

The template uses Nix to ensure consistent tool versions across all platforms.

###### Linux Installation

```bash
# Install Nix (single-user)
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Enable flakes
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Restart shell
exec $SHELL
```

###### macOS Installation

```bash
# Due to finicky mac support,
# all mac users must run a docker wrapper around nix-shell
# Which makes it slower, but usable!
chmod +x mac_shell.sh
./mac_shell.sh
```

###### Windows Installation (via WSL2)

```powershell
# In PowerShell as Admin
wsl --install

# Restart, then in WSL2 Ubuntu:
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Enable modern Nix features
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Restart your shell
exec $SHELL
```

##### Entering the Nix Environment

From the project root:

```bash
# For WSL and Linux users
nix-shell

# For macos
./mac_shell.sh # This will always be your entry instead of nix-shell

# NOTE: Whenever you get python installation errors of UWASIC-ALG or gmid, then you need to,
rm -rf .venv
# Then re-run the shell
```

This provides all necessary tools:

- **Digital**: OpenLane2, Yosys, Icarus Verilog, cocotb, slang
- **Analog**: Xschem, Magic, ngspice, netgen, KLayout
- **Verification**: CACHE, OpenSTA

### Project Management

#### Project States

The template tracks project state automatically:

- **`none`**: No projects created
- **`digital`**: Digital-only project
- **`analog`**: Analog-only project
- **`mixed`**: Combined digital + analog project

#### Project Structure

After creating projects, your directory structure will be:

```

uwasic-template/
├── .github/ # Automated workflows
├── shell.nix # Nix environment configuration
├── flows/ # Project management system
│ ├── Makefile # Main project commands
│ └── templates/ # Project templates
├── digital/ # Digital design projects
│ └── project_name/
│ ├── build/ # Build system (synthesis, verification)
│ ├── src/ # RTL source files
│ └── test/ # Testbenches and verification
├── analog/ # Analog design projects
│ ├── library/ # Shared analog IP library
│ ├── build/ # Build system (layout, validation)
│ ├── layout/ # Magic layout files
│ ├── schematics/ # Xschem schematic files
│ └── symbols/ # Xschem symbol files
└── caravel/ # TinyTapeout submission package
├── src/ # Verilog wrapper and sources
├── analog/ # Copied analog project files
├── docs/ # Documentation
└── info.yaml # TinyTapeout project configuration

```

#### Design Rules

1. **Digital Projects**:
   - Can have child analog modules with `PARENT` parameter
   - Use `src/` directory for internal submodules

2. **Analog Projects**:
   - Child modules automatically symlink `.gds` files to parent's `layout/dep/` directory

3. **Mixed-Signal Projects**:
   - Combine both analog and digital components
   - Digital components must implement TinyTapeout interface

### Digital Workflow

#### Overview

The digital flow uses OpenLane2 for automated RTL-to-GDS conversion with comprehensive verification. However, the final conversion will be done with github workflows after caravel/ is formed and it is pushed.

#### Directory Structure

```

digital/
└── <project_name>/
├── build/ # Build system
│ ├── config.mk # Project configuration
│ ├── des_tb/ # RTL simulation
│ ├── lint/ # Static analysis
│ ├── synthesis/# Physical synthesis
│ └── verification/ # Formal verification
├── src/ # RTL source files (.v, .sv)
└── test/ # Testbenches and cocotb tests

```

#### Workflows

##### If you haven't created it refer to the Quick-Start

##### 1. RTL Simulation

```bash
cd digital/your_project/build/des_tb
make test-rtl
```

##### 2. Linting

```bash
cd digital/your_project/build/lint
make lint
```

##### 3. Local Synthesis and Implementation [Delete its output before pushing]

```bash
cd digital/your_project/build/synthesis
make synthesis    # Synthesis only
make harden      # Full flow to GDS
```

##### 4. Verification

```bash
cd digital/your_project/build/verification
make verification
```

---

### Analog Workflow

#### Overview

The analog flow uses Xschem for schematic capture and Magic for layout, with comprehensive DRC/LVS verification.

#### Directory Structure

```
analog/
├── library/          # Shared analog IP library
├── build/
│   ├── config.mk     # Project configuration
│   ├── layout/       # Layout tools
│   ├── schematic/    # Schematic tools
│   └── validation/   # DRC/LVS verification
├── layout/           # Magic layout files (.mag)
├── schematics/       # Xschem schematics (.sch)
│   └── testbenches/  # Testbench schematics
└── symbols/          # Xschem symbols (.sym)
```

#### Workflows

##### If you haven't created it refer to the Quick-Start

##### 1. Schematic Capture

```bash
cd analog/build/schematic
make setup        # Organize files
make schematic    # Open Xschem
```

##### 2. Layout Design

```bash
cd analog/build/layout
make layout       # Open Magic
```

##### 3. SPICE Simulation

```bash
cd analog/build/schematic
make spice        # Run simulations
```

##### 4. Physical Verification

```bash
cd analog/build/validation
make magic_test          # Magic DRC/LVS
make klayout_test        # KLayout verification
make full_verification   # Complete suite
```

---

### Mixed-Signal Workflow

Mixed-signal projects combine digital and analog designs into a single tapeout-ready submission.

#### Creating Mixed-Signal Projects

```bash
# Create mixed-signal project with both components
make CreateProject PROJECT_NAME=mixed_adc PROJECT_TYPE=mixed

# Add additional modules as needed
make AddModule MODULE_NAME=adc_core MODULE_TYPE=analog PARENT=mixed_adc
make AddModule MODULE_NAME=digital_filter MODULE_TYPE=digital PARENT=mixed_adc

# Create TinyTapeout integration
make CreateCaravel PROJECT_NAME=tt_mixed_adc
```

#### Project State Tracking

The template automatically tracks project states and allows:

- Multiple analog modules with parent-child relationships
- Digital modules that implement TinyTapeout interface
- Automatic integration of both domains in Caravel generation

---

### TinyTapeout Integration

TinyTapeout integration creates submission-ready packages for the Efabless shuttle program. The template automatically generates proper pin assignments, power connections, GitHub Actions workflows, and project configuration files.

#### TinyTapeout's info.yaml

#### Digital Projects

- **Interface**: Standard TinyTapeout digital interface (8 inputs, 8 outputs, 8 bidirectional)
- **Tile Configuration**: 1x1 tiles for digital projects
- **Testing**: Includes gate-level testing workflows

#### Analog Projects

- **Pin Assignment**: Uses `ua[5:0]` analog pins (configure count in `info.yaml`)
- **Power Connections**: Includes `VGND`, `VDPWR`, and `VAPWR` connections
- **Tile Configuration**: Defaults to 1x2 tiles for analog projects
- **Pin Limits**: Up to 6 analog pins

##### Power Connections

#### Mixed-Signal Projects

- **Tile Configuration**: 2x2 tiles for mixed projects
- **Analog Interface**: Proper `ua[]` pin assignments
- **Digital Integration**: Complete TinyTapeout digital interface
- **Power Distribution**: Separate analog and digital power domains

---

## Workflows and CI/CD

The template automatically generates GitHub Actions workflows based on project type for automated verification and tapeout preparation.

### Automated Workflow Generation

When you create a TinyTapeout project, appropriate workflows are automatically generated but are only run on the caravel/ directory, so you need to create one:

```bash
make CreateCaravel PROJECT_NAME=my_chip
```

### Generated Workflows

#### Universal Workflows (All Project Types)

- **`gds.yaml`**: GDS generation and precheck using TinyTapeout actions
- **`docs.yaml`**: Documentation generation workflow

#### Digital/Mixed-Signal Workflows

- **`test.yaml`**: RTL simulation using Icarus Verilog + cocotb
- **`fpga.yaml`**: FPGA implementation for ICE40UP5K platform

#### Workflow Features

- **Automated Testing**: RTL and gate-level simulation
- **FPGA Prototyping**: Automatic bitstream generation
- **Analog Characterization**: Automated circuit parameter extraction
- **Documentation**: Automatic generation of project documentation
- **Tapeout Preparation**: GDS generation with precheck validation

---

#### Debug Commands

Check current project state:

```bash
make status
```

View all available commands:

```bash
make help
```

Clean up and restart:

```bash
make DeleteAll
```

---

### Examples

#### Complete Digital Project Example

```bash
# Create digital project
make CreateProject PROJECT_NAME=counter_demo PROJECT_TYPE=digital

# Implement your counter in digital/counter_demo/src/counter_demo.v
# Create tests in digital/counter_demo/test/

# Create TinyTapeout integration
make CreateCaravel PROJECT_NAME=tt_counter_demo

# Check status
make status
```

#### Complete Analog Project Example

```bash
# Create analog project
make CreateProject PROJECT_NAME=amplifier PROJECT_TYPE=analog

# Create TinyTapeout integration
make CreateCaravel PROJECT_NAME=tt_amplifier

# Check status
make status
```

#### Complete Mixed-Signal Project Example

```bash
# Create mixed-signal project
make CreateProject PROJECT_NAME=mixed_adc PROJECT_TYPE=mixed

# Add additional modules
make AddModule MODULE_NAME=digital_filter PARENT=mixed_adc

# Create TinyTapeout integration
make CreateCaravel PROJECT_NAME=tt_mixed_adc

# Check status
make status
```

---

### Resources

- [TinyTapeout Documentation](https://tinytapeout.com/)
- [OpenLane2 Documentation](https://openlane2.readthedocs.io/)
- [Sky130 PDK Documentation](https://skywater-pdk.readthedocs.io/)
- [Xschem Documentation](http://repo.hu/projects/xschem/)
- [Magic VLSI Documentation](http://opencircuitdesign.com/magic/)
- [Efabless Platform](https://platform.efabless.com/)
