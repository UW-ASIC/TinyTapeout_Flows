## Analog Workflow
analog/                      # Analog design domain
  │── xschem/                # Schematic files
  │   ├── schematics/        # Circuit schematics
  │   └── symbols/           # Custom symbols
  │── simulations/           # Simulation NGSpice Files
  │── magic/                 # Layout files

### How to use:
1. Setup

```
```

2. Commands


3. Output

### Working on the flow

### Tools List for Nix Package management:
Schematic & Simulations:
- xschem (Schematics)
- NGSpice (Schematic-Level Sims)
- GAW (View waveforms through XSchem)

Digital Netlist Merged Here:
- What tool?

Layout:
- KLayout (Layouts, LVS, Post-Layout Parasitics, Schematic -> GDS)

Integration/verification:
- Netgen (perform LVS on SPICE, and verilog) (Also used in integration)
- CACE (Circuit Automatic Characterization Engine) (Final Stage of verification)

### TODO:
1. Add Manufacturing specs to layout tool so we get proper DRC errors
2. Make sure schematic, symbols, and testbenches for schematics are seperate
3. Try Kicad instead of xschem? or find a method to turn kicad into xschem for more familiar tool usage
4. Add importing of digital netlist into here
