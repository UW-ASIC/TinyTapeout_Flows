export const metadata = {
  title: "Overview",
  order: 1
}

export const content = `
# TinyTapeout Integration

Submit your chip to get it manufactured!

## What is TinyTapeout?

TinyTapeout lets you get your chip design manufactured on a real silicon wafer. Your design becomes part of a multi-project chip.

## What You Get

- Real silicon chip with your design
- PCB development board
- Testing tools
- Community support

## Cost

Around $100-150 per submission (check TinyTapeout website for current pricing).

## Tile Sizes

- **Digital**: 1x1 tile (smallest)
- **Analog**: 1x2 tiles
- **Mixed-signal**: 2x2 tiles (largest)

Larger tiles = more area = more complexity possible.

## Submission Files

UWASIC automatically generates:
- \`info.yaml\` - Project configuration
- Verilog wrapper - Connects your design
- GitHub workflows - Automated verification
- Documentation - Project description

## Timeline

1. Submit design → TinyTapeout deadline
2. Wait 3-6 months → Chip manufacturing
3. Receive chip → Test and celebrate!

## Next Steps

See Create Package to prepare your submission.
`
