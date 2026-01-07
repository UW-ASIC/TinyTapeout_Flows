export const metadata = {
  title: "Overview",
  order: 1
}

export const content = `
# Analog Workflow

Design analog circuits: amplifiers, filters, voltage references, current mirrors.

## What You'll Do

1. Create project
2. Draw schematic in Xschem
3. Simulate with SPICE
4. Draw layout in Magic
5. Verify DRC/LVS
6. Submit to TinyTapeout

## File Structure

\`\`\`
analog/
├── library/         # Shared components
├── schematics/      # Your circuit diagrams (.sch)
├── symbols/         # Component symbols (.sym)
├── layout/          # Chip layouts (.mag)
└── build/           # Build system
    ├── schematic/   # Xschem tools
    ├── layout/      # Magic tools
    └── validation/  # DRC/LVS checks
\`\`\`

## Analog Pins

TinyTapeout gives you 6 analog pins: \`ua[5:0]\`

Configure in \`info.yaml\`:
\`\`\`yaml
pinout:
  ua[0]: "Input voltage"
  ua[1]: "Output voltage"
  ua[2]: "Bias current"
\`\`\`

## Power

- \`VDPWR\` - Digital power (1.8V)
- \`VAPWR\` - Analog power (1.8V)
- \`VGND\` - Ground

## Next Steps

See Create Project to build your first analog design.
`
