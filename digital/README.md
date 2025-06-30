# Digital Workflow

## Directory Structure

```
digital/                          # Digital design domain
├── <template>/                   # Design template directory
│   ├── build/                    # Build artifacts
│   │   ├── des_tb/              # Design testbench
│   │   │   ├── simulations/     # Simulation results
│   │   │   └── Makefile         # Testbench makefile
│   │   ├── lint/                # Linting results
│   │   │   └── Makefile         # Lint makefile
│   │   ├── synthesis/           # Synthesis results
│   │   │   └── Makefile         # Synthesis makefile
│   │   └── verification/        # Verification results
│   │       └── Makefile         # Verification makefile
│   ├── src/                     # Source files (*.v or *.sv)
│   └── test/                    # Testbenches and .py cocotb files
├── <template2>/                  # Additional design template
├── <template3>/                  # Additional design template
├── ...
├── <templateN>/                  # Additional design template
└── output/                       # Final output files (.gds, etc.)
```

## Working on the Flow

### Understanding the Analog Connection
- Reference: [Using Macros in OpenLane2](https://openlane2.readthedocs.io/en/latest/usage/using_macros.html)

## Usage

Each template directory contains its own build system with specialized Makefiles for different stages of the digital design flow. All commands should be run from within the specific build subdirectory.

### High-Level Workflow Commands

#### 1. RTL Simulation (`build/des_tb/`)
```bash
cd <template>/build/des_tb/
make test-rtl    # Run all testbenches with Icarus Verilog
make clean       # Remove simulation artifacts
```

#### 2. RTL Linting (`build/lint/`)
```bash
cd <template>/build/lint/
make lint        # Static analysis with Slang
make clean       # Clean lint artifacts
```

#### 3. Synthesis (`build/synthesis/`)
```bash
cd <template>/build/synthesis/
make synthesis   # Synthesize design with OpenLane2
make harden      # Full place & route flow (generates GDS)
make clean       # Remove synthesis artifacts
```

#### 4. Verification (`build/verification/`)
```bash
cd <template>/build/verification/
make verification    # Run all CocoTB tests (RTL level)
make test           # Run single test (specify TOPLEVEL= MODULE=)
make verification GATES=yes  # Run gate-level verification
make clean_all      # Clean verification artifacts
```

### Complete Design Flow Example
```bash
# Navigate to your design template
cd digital/my_design/

# 1. Lint your RTL
cd build/lint && make lint && cd ../..

# 2. Run RTL simulations
cd build/des_tb && make test-rtl && cd ../..

# 3. Run verification tests
cd build/verification && make verification && cd ../..

# 4. Synthesize and generate GDS
cd build/synthesis && make harden && cd ../..

# 5. Final gate-level verification
cd build/verification && make verification GATES=yes
```

### Configuration
Each template requires a `config.mk` file in the build directory that defines:
- `DESIGN_TOP`: Top-level module name
- `RTL_FILES`: List of Verilog/SystemVerilog source files
- `RTL_FILES_H`: List of header files
- `TB_FILES`: List of testbench files
- `COCOTB_TEST_FILES`: List of CocoTB Python test files

### Output Artifacts
- **Simulation**: VCD waveforms in `des_tb/simulations/`
- **Synthesis**: Netlists in `synthesis/netlist/`
- **Final GDS**: Copied to `digital/output/` for integration
