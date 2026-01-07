export const metadata = {
  title: "Create Project",
  order: 2
}

export const content = `
# Create Analog Project

## Step 1: Create Project

\`\`\`bash
cd flows/
make CreateProject PROJECT_NAME=my_opamp PROJECT_TYPE=analog
\`\`\`

## Step 2: Draw Schematic

\`\`\`bash
cd analog/build/schematic
make setup        # Organize files
make schematic    # Open Xschem
\`\`\`

In Xschem:
1. Place components from library
2. Wire them together
3. Add pins for inputs/outputs
4. Save as \`my_opamp.sch\`

## Step 3: Simulate

Add testbench in \`schematics/testbenches/tb_my_opamp.sch\`

Run simulation:
\`\`\`bash
cd analog/build/schematic
make spice
\`\`\`

View results in ngspice or plot files.

## Step 4: Draw Layout

\`\`\`bash
cd analog/build/layout
make layout       # Open Magic
\`\`\`

In Magic:
1. Draw your circuit using PDK cells
2. Match your schematic
3. Add metal connections
4. Save as \`my_opamp.mag\`

## Step 5: Verify

\`\`\`bash
cd analog/build/validation
make magic_test          # DRC and LVS
make klayout_test        # KLayout checks
make full_verification   # Everything
\`\`\`

Fix errors until all checks pass.

## Done!

Your analog design is ready. Next: see TinyTapeout Integration.
`
