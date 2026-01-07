export const metadata = {
    title: "Quick Start",
    order: 1
}

export const content = `
# Quick Start

**Build chips fast.** Digital, Analog, or Mixed.

## 1. Enter Environment
Start the reproducible environment. All tools are pre-installed.

\`\`\`bash
nix-shell
cd flows
\`\`\`

## 2. Create Project
Generate the correct directory structure and configuration automatically.

\`\`\`bash
make CreateProject PROJECT_NAME=my_chip PROJECT_TYPE=digital
\`\`\`
*   **PROJECT_TYPE**: \`digital\`, \`analog\`, or \`mixed\`.

## 3. Next Steps
Select your domain to see detailed workflows:

*   [**Digital Flow**](/Flows/Digital) - Verilog, Cocotb, OpenLane.
*   [**Analog Flow**](/Flows/Analog) - XSchem, Magic/KLayout.
*   [**Mixed Signal**](/Flows/Mixed-Signal) - Integrating both worlds.
`
