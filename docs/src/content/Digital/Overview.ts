export const metadata = {
  title: "Overview",
  order: 1
}

export const content = `
# Digital Workflow

Design digital circuits: processors, counters, state machines, anything in Verilog.

## What You'll Do

1. Create project
2. Write Verilog code
3. Test it
4. Synthesize to chip layout
5. Submit to TinyTapeout

## File Structure

\`\`\`
digital/your_project/
├── src/           # Your Verilog files (.v, .sv)
├── test/          # Test files (cocotb)
└── build/         # Build system (auto-generated)
    ├── des_tb/    # Simulation
    ├── lint/      # Check for errors
    ├── synthesis/ # Make actual chip
    └── verification/
\`\`\`

## TinyTapeout Interface

Your top module must use these signals:

- \`ui_in[7:0]\` - 8 input pins
- \`uo_out[7:0]\` - 8 output pins
- \`uio_in[7:0]\` - 8 bidirectional pins (input)
- \`uio_out[7:0]\` - 8 bidirectional pins (output)
- \`uio_oe[7:0]\` - Output enable for bidirectional
- \`clk\` - Clock
- \`rst_n\` - Active-low reset

## Next Steps

See Create Project to build your first digital design.
`
