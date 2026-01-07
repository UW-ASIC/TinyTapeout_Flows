export const metadata = {
  title: "Test & Verify",
  order: 3
}

export const content = `
# Test & Verify Digital Design

## Run Simulation

\`\`\`bash
cd digital/your_project/build/des_tb
make test-rtl
\`\`\`

Runs your cocotb tests. See waveforms in \`test_results/\`.

## Check for Errors (Lint)

\`\`\`bash
cd digital/your_project/build/lint
make lint
\`\`\`

Uses **Verilator** to find coding errors before synthesis.

## Local Synthesis (Optional)

\`\`\`bash
cd digital/your_project/build/synthesis
make synthesis    # Just synthesize
make harden       # Full chip layout
\`\`\`

**Note**: Delete \`synthesis/\` output before pushing to GitHub. CI will do final synthesis.

## Formal Verification

\`\`\`bash
cd digital/your_project/build/verification
make verification
\`\`\`

Proves your design works correctly.

## Quick Tips

- Always test before synthesis
- Lint catches most bugs early
- Use waveforms to debug
- CI runs all checks automatically
`
