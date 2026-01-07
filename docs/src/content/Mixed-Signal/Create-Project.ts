export const metadata = {
  title: "Create Project",
  order: 2
}

export const content = `
# Create Mixed-Signal Project

## Step 1: Create Project

\`\`\`bash
cd flows/
make CreateProject PROJECT_NAME=my_adc PROJECT_TYPE=mixed
\`\`\`

This creates both digital and analog directories.

## Step 2: Add Modules

Add child modules as needed:

\`\`\`bash
# Add analog comparator
make AddModule MODULE_NAME=comparator MODULE_TYPE=analog PARENT=my_adc

# Add digital controller
make AddModule MODULE_NAME=controller MODULE_TYPE=digital PARENT=my_adc
\`\`\`

## Step 3: Build Digital Part

Follow **Digital Workflow**:
1. Write Verilog in \`digital/my_adc/src/\`
2. Create tests in \`digital/my_adc/test/\`
3. Test with \`make test-rtl\`

## Step 4: Build Analog Part

Follow **Analog Workflow**:
1. Draw schematics in Xschem
2. Simulate with SPICE
3. Draw layout in Magic
4. Verify DRC/LVS

## Step 5: Connect Them

In your digital Verilog, use:
- \`ua[X]\` to connect to analog pins
- Regular digital pins for control/data

Example connection:
\`\`\`verilog
// Digital reads analog comparator output on ua[0]
// Digital controls via uo_out
assign analog_enable = uo_out[0];
\`\`\`

## Step 6: Check Status

\`\`\`bash
make status
\`\`\`

Shows your project structure with all modules.

## Done!

Next: see TinyTapeout Integration.
`
