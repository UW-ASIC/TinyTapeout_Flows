export const metadata = {
  title: "Layout Design",
  order: 4
}

export const content = `
# Layout Design

## Open Magic

\`\`\`bash
cd analog/build/layout
make layout
\`\`\`

## Basic Workflow

1. **Select Layer**: Click layer in palette (right side)
2. **Draw Box**: Left-click and drag
3. **Paint**: Press \`p\` key
4. **Erase**: Press \`e\` key
5. **Move**: Select, then press \`m\` and click new location
6. **Copy**: Select, press \`c\`, click new location
7. **Zoom In**: Press \`z\`
8. **Zoom Out**: Press \`Shift+z\`

## Important Layers

- **nwell**: N-well region
- **pwell**: P-well region
- **diff**: Diffusion (transistor source/drain)
- **poly**: Polysilicon (transistor gate)
- **m1, m2, m3**: Metal layers
- **via, via2**: Connections between metal layers

## Draw Transistor

1. Draw nwell (for PMOS) or pwell (for NMOS)
2. Draw diff inside well
3. Draw poly crossing diff (creates gate)
4. Add contacts to source/drain

## Connect with Metal

1. Draw metal1 over areas to connect
2. Use vias to connect different metal layers
3. Keep metal wide enough (check DRC rules)

## Save

File → Save or press \`Ctrl+S\`

## Check Your Work

\`\`\`bash
cd analog/build/validation
make magic_test
\`\`\`
`
