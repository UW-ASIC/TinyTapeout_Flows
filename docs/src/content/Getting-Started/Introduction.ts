export const metadata = {
    title: "Introduction",
    order: 1
}

export const content = `
# Getting Started

Welcome to the **UWASIC TinyTapeout Flows**. This repository provides a unified environment for designing Digital, Analog, and Mixed-Signal chips.

## 1. Initial Setup
Before you begin, you need to enter the reproducible environment. This ensures you have all the correct tools (Verilator, XSchem, Magic, etc.) installed automatically.

*   **Read more**: [Setup Guide](/Environment/Setup)

\`\`\`bash
./env.sh
\`\`\`

## 2. Create Your First Project
Once inside the environment, use the \`make\` commands to generate your project structure.

\`\`\`bash
cd flows
make CreateProject PROJECT_NAME=my_first_chip PROJECT_TYPE=digital
\`\`\`

*   **PROJECT_TYPE**: Choose \`digital\`, \`analog\`, or \`mixed\`.

## 3. Where to Go Next
Now that you have a project, follow the specific flow for your domain:

*   **[Digital Flow](/Flows/Digital)**: For Verilog/SystemVerilog designs, simulation, and hardening.
*   **[Analog Flow](/Flows/Analog)**: For schematic capture (XSchem) and custom layout (Magic/KLayout).
*   **[Mixed-Signal](/Flows/Mixed-Signal)**: For integrating analog and digital blocks.
*   **[Cheatsheet](/Environment/Cheatsheet)**: A quick reference for all available commands.
`
