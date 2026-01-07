export const metadata = {
    title: "Troubleshooting",
    order: 3
}

export const content = `
# Troubleshooting

## Bad Interpreter Error

**Symptom:**
\`\`\`
bash: .venv/bin/pip: bad interpreter: No such file or directory
\`\`\`

**Cause:** The virtual environment was created with a different Python version.

**Fix:**
\`\`\`bash
rm -rf .venv
./env.sh
\`\`\`

## Makefile: Not in nix-shell

**Symptom:**
\`\`\`
Makefile: This Makefile must be run inside the nix-shell environment
\`\`\`

**Cause:** Makefiles require the nix-shell environment for tool access.

**Fix:**
\`\`\`bash
./env.sh
\`\`\`

## PDK Not Found

**Symptom:** Missing sky130A or PDK errors.

**Fix:**
\`\`\`bash
rm -rf ~/.volare
./env.sh
\`\`\`
`
