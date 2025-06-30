## Directory Structure

```
analog/                          # Analog design domain
├── schematics/                  # Circuit schematic files (.sch)
├── symbols/                     # Custom symbol definitions (.sym)
├── library/                     # Design libraries
│   └── xschem_library/          # XSchem library components
├── netlist/                     # Generated SPICE netlists
├── layout/                      # Physical layout files
├── output/                      # Final deliverables (GDS, reports)
└── build/                       # Build system and configurations
    ├── config.mk                # Project configuration
    ├── schematic/               # Schematic build tools
    │   ├── Makefile             # XSchem/NGSpice automation
    │   └── xschemrc             # XSchem configuration
    ├── layout/                  # Layout build tools
    │   └── Makefile             # Magic/KLayout automation
    └── cace/                    # Characterization and verification
        ├── cace.yaml            # CACE specification
        └── Makefile             # CACE automation
```

## Usage

The analog workflow consists of three main stages: schematic design, layout implementation, and final characterization. All commands should be run from within the specific build subdirectory.

### High-Level Workflow Commands

#### 1. Schematic Design & Simulation (`build/schematic/`)
```bash
cd build/schematic/
make setup       # Organize symbol files
make schematic   # Open XSchem for schematic editing
make spice       # Run NGSpice simulations on netlists
make clean       # Remove generated files
```

#### 2. Layout Implementation (`build/layout/`)
```bash
cd build/layout/
make layout          # Open Magic for layout editing
make magic_to_gds    # Convert Magic layout to GDS
make klayout_test1   # Run DRC verification with KLayout
make klayout_test2   # Run LVS verification with KLayout
make integrate_black_box  # Integrate digital blocks as blackboxes
make clean           # Remove generated files
```

#### 3. Characterization & Verification (`build/cace/`)
```bash
cd build/cace/
make cace_testing    # Run CACE characterization
make clean           # Remove generated files
```

### Complete Analog Design Flow Example
```bash
# Navigate to your analog design
cd analog/

# 1. Design schematics and run initial simulations
cd build/schematic
make setup && make schematic
# (Edit schematics in XSchem, generate netlists)
make spice
cd ../..

# 2. Create physical layout
cd build/layout
make layout
# (Create layout in Magic)
make magic_to_gds
make klayout_test1  # DRC check
make klayout_test2  # LVS check
cd ../..

# 3. Final characterization
cd build/cace
make cace_testing
```

### Configuration
Each analog design requires a `config.mk` file in the build directory that defines:
- `TOP_SCHEMATIC`: Top-level schematic name
- `TOP_CELL`: Top-level cell name for layout
- `PROJECT`: Project name for CACE
- `PDK`: Process Design Kit (default: sky130A)
- `PDK_ROOT`: Path to PDK installation

### Digital Integration
The workflow supports integrating digital blocks as blackboxes:
- Place digital GDS files in `BLACKBOX_PATH`
- Use `make integrate_black_box` to create combined layout
- Digital netlists can be imported for mixed-signal verification

### Output Artifacts
- **Schematics**: `.sch` files in `schematics/`
- **Netlists**: SPICE files in `netlist/`
- **Layout**: GDS files in `layout/` and `output/`
- **Reports**: DRC/LVS reports in `build/layout/reports/`
- **Characterization**: CACE results in `build/cace/`

## Tools List for Nix Package Management

### Schematic & Simulations
- **xschem**: Schematic capture and editing
- **NGSpice**: SPICE circuit simulation
- **GAW**: Waveform viewer (integrated with XSchem)

### Layout
- **Magic**: Layout editor and extraction
- **KLayout**: Advanced layout viewer, DRC, and LVS verification
- **Netgen**: Netlist comparison and LVS

### Characterization & Integration
- **CACE**: Circuit Automatic Characterization Engine
- **Caravel**: Integration framework for mixed-signal designs

### Digital Netlist Integration
- **Netgen**: Handles both SPICE and Verilog netlist comparison
- **Custom scripts**: For blackbox integration in KLayout

## Working on the Flow

### Current Status
- ✅ Schematic capture with XSchem
- ✅ SPICE simulation with NGSpice  
- ✅ Layout with Magic
- ✅ DRC/LVS verification with KLayout
- ✅ Characterization with CACE

### TODO
1. **Add Manufacturing Specs**: Configure layout tools with proper DRC rules for target process
2. **Improve Organization**: Separate schematics, symbols, and testbenches into distinct workflows
3. **Alternative Tools**: Evaluate KiCad integration or KiCad→XSchem conversion for familiar UI
4. **Digital Integration**: Enhance digital netlist import and mixed-signal verification
5. **Automation**: Create unified flow for schematic→layout→characterization
6. **Documentation**: Add detailed setup instructions for each tool

### Integration Notes
- Digital blocks from the digital workflow can be integrated as blackboxes
- Final GDS files are copied to `analog/output/` for system integration
- Mixed-signal verification requires both SPICE and Verilog netlists
