export const metadata = {
  title: "Overview",
  order: 1
}

export const content = `
# Mixed-Signal Workflow

Combine digital and analog circuits in one chip.

## What Is Mixed-Signal?

A chip with both:
- **Digital**: Processors, state machines, counters
- **Analog**: Amplifiers, ADCs, DACs, filters

Examples:
- ADC with digital output
- DAC with digital input
- Sensor with digital interface
- Mixed filters

## What You'll Do

1. Create mixed-signal project
2. Build digital part (Verilog)
3. Build analog part (Xschem + Magic)
4. Connect them together
5. Submit to TinyTapeout

## Available Pins

**Digital**:
- \`ui_in[7:0]\` - 8 inputs
- \`uo_out[7:0]\` - 8 outputs
- \`uio[7:0]\` - 8 bidirectional

**Analog**:
- \`ua[5:0]\` - 6 analog pins

**Power**:
- \`VDPWR\` - Digital 1.8V
- \`VAPWR\` - Analog 1.8V
- \`VGND\` - Ground

## Tile Size

Mixed projects use **2x2 tiles** on TinyTapeout (larger area).

## Next Steps

See Create Project to build your first mixed-signal design.
`
