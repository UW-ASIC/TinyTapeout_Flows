export const metadata = {
    title: "CI/CD Workflows",
    order: 5
}

export const content = `
# CI/CD Workflows

**Push. Build. Verify.**

## Automatic Detection
On every push to \`caravel/\`, the CI detects your project type:

| Directories | Type | Workflows |
|-------------|------|-----------|
| \`digital/\` | digital | All |
| \`analog/\` | analog | GDS, Docs, Viewer |
| Both | mixed | All |

## Workflows

### test.yaml
Runs Verilator + Cocotb for each module in \`digital/\`.

- Auto-discovers modules with \`build/verification/Makefile\`
- Runs in parallel per module
- Uploads VCD waveforms as artifacts

### fpga.yaml  
Generates FPGA bitstream for TT ASIC Sim (ICE40UP5K).

### gds.yaml
Builds final GDS layout. Includes:
- **Precheck**: TinyTapeout DRC
- **GL Test**: Gate-level simulation (digital/mixed only)
- **Viewer**: Interactive layout viewer

### docs.yaml
Generates PDF datasheet from \`caravel/info.yaml\`.

## Triggers
- **Auto**: Push to \`caravel/**\` or \`.github/workflows/**\`
- **Manual**: Workflow dispatch from Actions tab
`
