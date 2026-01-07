export const metadata = {
  title: "Schematic Design",
  order: 3
}

export const content = `
# Schematic Design

## Open Xschem

\`\`\`bash
cd analog/build/schematic
make schematic
\`\`\`

## Basic Workflow

1. **Insert Component**: Press \`Insert\` key
2. **Wire**: Press \`w\` key
3. **Move**: Select and drag
4. **Copy**: Press \`c\` key
5. **Delete**: Press \`Delete\` key
6. **Zoom**: Mouse wheel
7. **Pan**: Click and drag (middle mouse)

## Common Components

- **NMOS**: \`sky130_fd_pr/nfet_01v8\`
- **PMOS**: \`sky130_fd_pr/pfet_01v8\`
- **Resistor**: \`sky130_fd_pr/res_high_po\`
- **Capacitor**: \`sky130_fd_pr/cap_mim_m3_1\`
- **Voltage Source**: \`devices/vsource\`
- **Ground**: \`devices/gnd\`

## Add I/O Pins

1. Press \`Insert\`
2. Find \`devices/ipin\` (input) or \`devices/opin\` (output)
3. Place and name them

## Save Your Work

Press \`Ctrl+S\` or click File → Save

## Generate Netlist

In Xschem menu: **Netlist → LVS Netlist**

Creates SPICE file for simulation.
`
