export const metadata = {
    title: "Digital Flow",
    order: 2
}

export const content = `
# Digital Flow

**Design. Verify. Harden.**

## 1. Create Module
Add a new digital block to your project.

\`\`\`bash
make AddDigitalModule MODULE_NAME=my_counter
\`\`\`

## 2. Structure
Your module lives in \`flows/digital/my_counter/\`:

*   \`src/\`: **Verilog Source**. Put your \`.v\` files here.
*   \`test/\`: **Verification**. Cocotb Python tests and Verilog testbenches.
*   \`build/\`: **Work Area**. Makefiles for simulation, linting, and synthesis.

## 3. Verify
Run your tests using Verilator and Cocotb.

\`\`\`bash
cd flows/digital/my_counter/build/verification
make verification
\`\`\`

*   **Run All**: \`make verification\`
*   **Run Single**: \`make test TOPLEVEL=tb_my_counter MODULE=test_my_counter\`
*   **Debug**: Waveforms are saved to \`sim_build/rtl/dump.vcd\`.

## 4. Top-Level Integration
The project top-level is created automatically with your project name.

1.  **Instantiate**: Add your sub-modules to \`src/<project_name>.v\`.
2.  **Test**: Write top-level tests in \`test/test_<project_name>.py\`.
3.  **Run**: Execute top-level verification just like any other module.
`
