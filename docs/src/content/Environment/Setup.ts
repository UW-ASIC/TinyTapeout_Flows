export const metadata = {
  title: "Setup",
  order: 1
}

export const content = `
# Installation & Environment

## One Script Setup

We provide a single script that handles everything: OS detection, Nix installation, and environment loading.

\`\`\`bash
./env.sh
\`\`\`

This script will:
1.  **Install Nix** (if missing)
2.  **Auto-detect** your project type (Analog/Digital/Mixed) based on folders
3.  **Enter** the configured environment

## Manual Selection

You can force a specific environment mode:

\`\`\`bash
./env.sh digital  # Loads only digital tools
./env.sh analog   # Loads only analog tools
\`\`\`

## Tools You Get

- **Digital**: Verilator, Yosys, OpenLane2, Cocotb
- **Analog**: XSchem, Magic, Ngspice, Netgen, KLayout
- **Common**: Python 3.12, Rust (Nightly), Make, Git

Everything is pinned and reproducible. No manual dependency hell.
`
