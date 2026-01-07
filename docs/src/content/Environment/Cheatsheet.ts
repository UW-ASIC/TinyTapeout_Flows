export const metadata = {
  title: "Cheatsheet",
  order: 3
}

export const content = `
# Basic Commands

All commands run from \`flows/\` directory.

## Create Projects

\`\`\`bash
cd flows/

# Digital project
make CreateProject PROJECT_NAME=my_chip PROJECT_TYPE=digital

# Analog project
make CreateProject PROJECT_NAME=my_amp PROJECT_TYPE=analog

# Mixed-signal project
make CreateProject PROJECT_NAME=my_mixed PROJECT_TYPE=mixed
\`\`\`

## Add Modules

\`\`\`bash
# Add analog module to a project
make AddModule MODULE_NAME=opamp MODULE_TYPE=analog PARENT=my_chip

# Add digital module
make AddModule MODULE_NAME=counter MODULE_TYPE=digital PARENT=my_chip
\`\`\`

## Create TinyTapeout Package

\`\`\`bash
make CreateCaravel PROJECT_NAME=tt_my_chip
\`\`\`

## Helpful Commands

\`\`\`bash
make help          # Show all commands
make status        # Show project structure
make DeleteAll     # Delete all projects
\`\`\`
`
