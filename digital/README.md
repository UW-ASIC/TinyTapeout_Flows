## Digital Design Flow

### Directory Structure
```
digital/
├── output/           # Shared output directory
└── template/         # Project template (can be duplicated)
    ├── build/        # Build system and makefiles
    │   ├── config.mk # Project configuration
    │   ├── des_tb/   # Design testbench
    │   ├── lint/     # RTL linting
    │   ├── synthesis/# OpenLane2 synthesis
    │   └── verification/ # Cocotb verification
    ├── src/          # RTL source files
    └── test/         # Testbenches and tests
```

### Key Components

#### 1. Schematic Capture (`schematic/`)
- Uses Xschem for schematic entry
- Automatic symbol/testbench organization
- SPICE netlist generation
- Integration with team IP library (TODO)

#### 2. Layout (`layout/`)
- Magic for layout creation
- Sky130 PDK integration
- Parameterized cells support

#### 3. Validation (`validation/`)
Comprehensive verification suite:
- **Magic-based**:
  - DRC (Design Rule Check)
  - LVS (Layout vs Schematic)
  - Netlist extraction
- **KLayout-based**:
  - DRC verification
  - LVS verification
  - GDS generation
- **Netgen**: Standalone LVS comparison

### Usage

1. **Schematic design**:
   ```bash
   cd analog/build/schematic
   make schematic  # Opens Xschem
   ```

2. **Layout design**:
   ```bash
   cd analog/build/layout
   make layout     # Opens Magic
   ```

3. **Verification**:
   ```bash
   cd analog/build/validation
   make magic_test  # Run Magic DRC/LVS
   make klayout_test # Run KLayout verification
   make full_verification # Complete suite
   ```
