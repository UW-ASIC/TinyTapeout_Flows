export const metadata = {
    title: "Template Project",
    order: 2
}

export const content = `
# The Template Project

This repository is designed to be a **"Battery Included"** template for ASIC design. It abstracts away the complexity of tool installation and project configuration, allowing you to focus on design.

## Philosophy
*   **Reproducibility**: Everyone uses the exact same tool versions via Nix.
*   **Automation**: Makefiles handle directory creation, simulation running, and file management.
*   **Flexibility**: Supports pure digital, pure analog, or mixed-signal workflows in the same repo.

## Repository Structure

\`\`\`text
TinyTapeout_Flows/
├── docs/           # This documentation website
├── flows/          # The main workspace
│   ├── analog/     # Analog workspace (schematics, layouts)
│   ├── digital/    # Digital workspace (verilog, tests)
│   ├── caravel/    # TinyTapeout submission files
│   ├── env/        # Nix environment definitions
│   └── Makefile    # The master command runner
├── env.sh          # Entry point script
└── shell.nix       # Nix environment configuration
\`\`\`

## Key Features
*   **Unified Makefile**: A single interface for all tasks (\`make CreateProject\`, \`make verification\`, etc.).
*   **Pre-configured Tools**:
    *   **Digital**: Verilator, Cocotb, OpenLane 2, Yosys.
    *   **Analog**: XSchem, Ngspice, Magic, KLayout, Netgen.
*   **CI/CD Ready**: The environment is built to run in CI pipelines.
`
