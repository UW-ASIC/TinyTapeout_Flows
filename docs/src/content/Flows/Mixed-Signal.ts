export const metadata = {
    title: "Mixed-Signal Flow",
    order: 4
}

export const content = `
# Mixed-Signal Flow

**Best of both worlds.**

## 1. Create Project
Initialize a workspace with both analog and digital capabilities.

\`\`\`bash
make CreateProject PROJECT_NAME=my_mixed_chip PROJECT_TYPE=mixed
\`\`\`

## 2. Structure
You get complete environments for both domains:

*   \`analog/\`: **Analog Core**. Schematics and Layouts.
*   \`digital/\`: **Digital Logic**. Verilog and Cocotb tests.

## 3. Workflow
1.  **Digital Design**: Build and verify your digital blocks in \`digital/\`.
2.  **Analog Design**: Build your analog circuits in \`analog/\`.
3.  **Integration**:
    *   Harden digital blocks to GDS.
    *   Import digital GDS into the analog layout (or vice-versa).
    *   Connect them at the top level.

## 4. Top-Level Strategy
TinyTapeout expects a top-level wrapper.

*   **Digital Top**: Instantiate analog macros as blackboxes in Verilog.
*   **Analog Top**: Use the analog wrapper and place digital blocks as macros.
*   **Pins**: Define your pinout in \`info.yaml\`. Ensure analog pins are correctly mapped.
`
