This repository provides a Makefile-based template for setting up analog, digital, and mixed-signal projects. Once you've created your project directory, you can discard this template.

### Quick Start

View all available commands:
```bash
make help
```

Clean up existing projects:
```bash
make DeleteAll
```

Check current project status:
```bash
make status
```

### Project Types

#### Analog-Only Project

Create a new analog project:
```bash
make CreateAnalogProject PROJECT=my_analog_project
```

Add additional analog modules (requires parent specification):
```bash
make AddAnalogModule PROJECT=my_child_module ANALOG_PARENT=my_analog_project
```

**Note**: Child analog modules automatically symlink their `.gds` files to the parent's `layout/dep/$(CHILD_MODULE_NAME)` directory during build.

#### Digital-Only Project

Create a new digital project:
```bash
make CreateDigitalProject PROJECT=my_digital_project
```

**Note**: Only one digital module is allowed per project. Use the `src/` directory within your digital project for internal submodules instead of creating additional digital modules.

#### Mixed-Signal Project

For projects combining analog and digital components:

1. **Create the foundation** (the analog module declared here becomes the top module for Caravel):
   ```bash
   make CreateAnalogProject PROJECT=my_analog_top
   make CreateDigitalProject PROJECT=my_digital_top
   ```

2. **Add analog modules** to existing analog projects:
   ```bash
   make AddAnalogModule PROJECT=my_analog_module ANALOG_PARENT=my_analog_top
   ```

**Important Constraints**:
- **Analog modules**: Can be added to analog projects only. Child modules must specify a parent and will symlink `.gds` files to `parent/layout/dep/$(CHILD_NAME)/`
- **Digital modules**: Cannot be added to analog projects. Only one digital module allowed per project setup.

#### TinyTapeout Caravel Integration

Create TinyTapeout-ready projects in the `caravel/` directory:

**Analog projects:**
```bash
make CreateAnalogCaravel PROJECT=my_tt_project
```

**Digital projects:**
```bash
make CreateDigitalCaravel PROJECT=my_tt_project  
```

**Mixed-signal projects:**
```bash
make CreateMixedCaravel PROJECT=my_tt_project
```

**Set up GitHub workflows:**
```bash
make SetupWorkflows
```

**Features:**
- Uses official TinyTapeout template structure with proper `info.yaml`
- Automatically creates appropriate GitHub workflows based on project type:
  - **All projects**: GDS generation, precheck, documentation, viewer
  - **Digital/Mixed**: Additional test and FPGA workflows
- Creates files directly in `caravel/` (not `caravel/$(PROJECT)/`)
- Top module follows TinyTapeout naming: `tt_um_$(PROJECT)`

### Project Structure

The template creates the following directory structure:

```
../
├── analog/          # Analog projects and modules
│   ├── library/     # Shared analog library (auto-cloned)
│   └── <project>/   # Individual analog projects
├── digital/         # Digital projects and modules
│   └── <project>/   # Individual digital projects  
└── caravel/         # Caravel integration directory
```

- `PROJECT`: Name of the project or module to create
- `ANALOG_PARENT`: Parent analog project for new modules (required for mixed-signal)
- `LINKED_ANALOG`: Analog project to link with digital modules (required for mixed-signal)

For detailed implementation, see the [Makefile](./Makefile).

## Digital Workflow Implementation Guide

This section documents the complete digital project workflow, the improvements made to ensure robust operation, and what was required to get a real digital project working with TinyTapeout.

### Digital Project Development Process

#### 1. Project Creation
```bash
make CreateDigitalProject PROJECT=counter_demo
```

**What happens:**
- Creates `digital/counter_demo/` with proper structure
- Sets up build configuration in `build/config.mk`
- Creates empty template files: `src/counter_demo.v`, test files

#### 2. Implementation
You must implement your digital module with the **exact TinyTapeout interface**:

```verilog
module your_module_name (
    input wire clk,           // Required: System clock
    input wire rst_n,         // Required: Active-low reset  
    input wire ena,           // Required: Enable signal
    input wire [7:0] ui_in,   // Required: User inputs
    output reg [7:0] uo_out,  // Required: User outputs
    input wire [7:0] uio_in,  // Required: Bidirectional inputs
    output reg [7:0] uio_out, // Required: Bidirectional outputs
    output reg [7:0] uio_oe   // Required: Bidirectional output enables
);
    // Your implementation here
endmodule
```

**Critical Requirements:**
- Module name must match the project name
- All 8 interface signals are mandatory
- Interface must be compatible with TinyTapeout specifications

#### 3. Testing
Create comprehensive testbenches in `test/`:
- **Verilog testbench**: `tb_your_module.v` for basic simulation
- **Python testbench**: `test_your_module.py` using cocotb for advanced testing

#### 4. TinyTapeout Integration
```bash
make CreateDigitalCaravel PROJECT=tt_your_project
```

**Automatic Operations (Improved):**
- **Interface Validation**: Verifies your module has required TinyTapeout signals
- **File Management**: Copies ALL `.v` files, not just with error-prone wildcards
- **Project Integration**: Creates proper `project.v` wrapper with complete signal connections
- **Metadata Update**: Automatically updates `info.yaml` to include all source files
- **Test Integration**: Copies test files to caravel for CI/CD
- **Workflow Setup**: Creates appropriate GitHub Actions workflows

### Improvements Made to Digital Flows

#### Problems Found and Fixed

**1. Incomplete Signal Connections**
- **Problem**: Template `project.v` had placeholder comments instead of actual connections
- **Solution**: Updated template to include all required TinyTapeout signals
- **Impact**: No more manual fixing of signal connections

**2. Unreliable File Copying**
- **Problem**: Used shell wildcards `*.v` that could fail silently
- **Solution**: Individual file iteration with existence checking
- **Impact**: Guaranteed copying of all source files

**3. Missing Source File Registration**
- **Problem**: `info.yaml` only included `project.v`, missing actual implementation files
- **Solution**: Automatic detection and registration of all `.v` files
- **Impact**: TinyTapeout build system sees all required files

**4. No Interface Validation**
- **Problem**: No checking if digital module follows TinyTapeout interface
- **Solution**: Added validation for required signals (clk, rst_n, ena, etc.)
- **Impact**: Early detection of interface mismatches

**5. Missing Test Integration**
- **Problem**: Test files weren't copied to caravel directory
- **Solution**: Automatic test file copying with validation
- **Impact**: Tests available for CI/CD workflows

#### Implementation Steps Performed

**Real Counter Example:**
1. **Created project**: `make CreateDigitalProject PROJECT=counter_demo`
2. **Implemented counter**: 16-bit counter with configurable increment, reset control
3. **Added features**: Output selection (high/low byte), status flags on bidirectional pins
4. **Created tests**: Both Verilog and Python/cocotb testbenches
5. **Generated caravel**: `make CreateDigitalCaravel PROJECT=tt_counter_demo`
6. **Verified integration**: All files properly copied and connected

**Manual Steps No Longer Required:**
- ❌ Manually fixing `project.v` signal connections
- ❌ Manually copying source files that wildcards missed
- ❌ Manually updating `info.yaml` source_files list
- ❌ Manually copying test files to caravel

**Automatic Validation Added:**
- ✅ Checks module file exists
- ✅ Validates TinyTapeout interface compliance
- ✅ Confirms all required signals present
- ✅ Reports what files are being processed

### Counter Demo Implementation

The verification used a real 16-bit counter with:
- **Control inputs**: Enable (ui_in[0]), Reset (ui_in[1]), Increment value (ui_in[5:2])
- **Output control**: Byte selection (ui_in[6]) for 16-bit counter output
- **Status outputs**: Overflow flag, zero flag, LSB, control echoes (uio_out)
- **Comprehensive testing**: Both simulation and Python-based verification

This demonstrates the complete workflow from project creation to TinyTapeout-ready submission.
