export const metadata = {
  title: "Build & Deploy",
  order: 4
}

export const content = `
# Build & Deploy

## Local Development

\`\`\`bash
cd docs/
bun install
bun run dev
\`\`\`

Visit \`http://localhost:5173\` to see your changes live.

## Build for Production

\`\`\`bash
cd docs/
bun run build
\`\`\`

Outputs to \`docs/\` directory (same folder).

## Deploy to GitHub Pages

### Setup (One Time)

1. Go to GitHub repo **Settings** → **Pages**
2. Set source:
   - Branch: **main**
   - Folder: **/docs**
3. Click **Save**

### Auto-Deploy

Push to GitHub:
\`\`\`bash
git add docs/
git commit -m "Update documentation"
git push
\`\`\`

GitHub Actions workflow:
1. Installs dependencies
2. Builds site
3. Commits built files
4. GitHub Pages deploys

Your site: \`https://username.github.io/repo-name\`

## Workflow File

Located at \`.github/workflows/deploy-docs.yml\`

Runs on every push to \`main\` branch.

## Troubleshooting

**Build fails?**
- Check syntax in .ts files
- Run \`bun run build\` locally first
- Check GitHub Actions logs

**Pages not updating?**
- Wait 1-2 minutes after push
- Check Pages settings enabled
- Clear browser cache
`
