export const metadata = {
  title: "Submit Package",
  order: 3
}

export const content = `
# Submit to TinyTapeout

## Push to GitHub

\`\`\`bash
git add caravel/
git commit -m "Add TinyTapeout submission"
git push
\`\`\`

## Automated Workflows

GitHub Actions automatically run:

**For Digital/Mixed**:
- \`test.yaml\` - RTL simulation
- \`gds.yaml\` - GDS generation
- \`docs.yaml\` - Documentation build

**For All Projects**:
- DRC/LVS checks
- Precheck validation
- GDS verification

## Check Workflow Status

1. Go to your GitHub repo
2. Click **Actions** tab
3. See workflow runs

Green checkmark = passed ✓
Red X = failed (check logs)

## Fix Failures

Common issues:
- **Syntax errors**: Check Verilog/schematic
- **DRC violations**: Fix layout spacing
- **LVS mismatch**: Match schematic and layout
- **Pin mismatch**: Check \`info.yaml\` pinout

## Submit to TinyTapeout

1. Wait for all workflows to pass
2. Go to [TinyTapeout](https://tinytapeout.com)
3. Submit your GitHub repo URL
4. Pay submission fee
5. Wait for confirmation

## After Submission

- Monitor TinyTapeout schedule
- Wait for manufacturing (3-6 months)
- Receive your chip!
- Test and share results

## Important

- **Don't push \`synthesis/\` folder** - Delete it first
- **All workflows must pass** before submitting
- **Check deadline** - TinyTapeout has submission cutoffs
`
