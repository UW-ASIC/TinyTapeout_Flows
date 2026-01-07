export const metadata = {
  title: "Create Package",
  order: 2
}

export const content = `
# Create TinyTapeout Package

## Generate Caravel Package

\`\`\`bash
cd flows/
make CreateCaravel PROJECT_NAME=tt_my_chip
\`\`\`

This creates \`caravel/\` directory with everything needed.

## What Gets Created

\`\`\`
caravel/
├── src/              # Verilog wrapper
├── info.yaml         # TinyTapeout config
├── docs/             # Documentation
└── .github/          # CI workflows
\`\`\`

## Edit info.yaml

Open \`caravel/info.yaml\` and fill in:

\`\`\`yaml
project:
  title: "My Amazing Chip"
  author: "Your Name"
  description: "What your chip does"

pinout:
  # For digital projects
  ui_in[0]: "Button 1"
  uo_out[0]: "LED 1"

  # For analog projects
  ua[0]: "Input voltage"
  ua[1]: "Output voltage"
\`\`\`

## Configure Tiles

In \`info.yaml\`:

\`\`\`yaml
# Digital
tiles: "1x1"

# Analog
tiles: "1x2"

# Mixed-signal
tiles: "2x2"
\`\`\`

## Add Documentation

Edit \`caravel/docs/info.md\`:
- Explain what your chip does
- Add diagrams
- Include usage instructions
- Show example applications

## Test Locally

\`\`\`bash
cd caravel/
# Test files are generated, workflows run on push
\`\`\`

## Next Step

See Submit to push to GitHub and trigger workflows.
`
