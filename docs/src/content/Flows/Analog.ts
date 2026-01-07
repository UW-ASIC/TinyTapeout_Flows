export const metadata = {
    title: "Analog Flow",
    order: 3
}

export const content = `
# Analog Flow

**Schematic. Layout. Simulate.**

## 1. Create Project
Initialize the analog workspace.

\`\`\`bash
make CreateProject PROJECT_NAME=my_amp PROJECT_TYPE=analog
\`\`\`

## 2. Structure
*   \`schematics/\`: **Circuit Design**. XSchem files (\`.sch\`).
*   \`layout/\`: **Physical Design**. KLayout/Magic files (\`.gds\`, \`.mag\`).
*   \`build/\`: **Work Area**. Makefiles for tools.

## 3. Schematic Design
Draw your circuit in XSchem.

\`\`\`bash
cd flows/analog/build/schematic
make schematic
\`\`\`

*   **Simulate**: \`make spice\` (Runs Ngspice on your netlist).

## 4. Layout Design
Draw your layout in KLayout.

\`\`\`bash
cd flows/analog/build/layout
make layout
\`\`\`

*   **Initialize**: \`make init_tinytapeout\` (Creates a TinyTapeout-compatible template).
*   **Convert**: \`make mag2gds\` (Converts Magic files to GDSII).

## 5. Validation
Run DRC and LVS to ensure your layout matches your schematic and rules.

\`\`\`bash
cd flows/analog/build/validation
make drc
make lvs
\`\`\`
`
