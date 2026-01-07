# UWASIC Docs

## Structure

```
docs/
├── src/
│   ├── content/              # Documentation content
│   │   ├── how-to-use/       # Installation and basic usage
│   │   ├── digital/          # Digital workflow guides
│   │   ├── analog/           # Analog workflow guides
│   │   ├── mixed-signal/     # Mixed-signal workflow
│   │   ├── tinytapeout/      # TinyTapeout submission
│   │   └── updating-docs/    # Documentation maintenance
│   ├── components/           # React components
│   ├── utils/                # Utilities (content loader)
│   ├── App.tsx               # Main app
│   └── main.tsx              # Entry point
├── styles/                   # All CSS
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## Quick Start

```bash
cd docs/
bun install
bun run dev
```

## Adding Content

Create new file in `src/content/section-name/page-name.ts`:

```typescript
export const metadata = {
  title: "Page Title",
  order: 1,
};

export const content = `
# Your Content Here

In markdown format.
`;
```

## Deploy

Push to GitHub - workflow automatically builds and deploys (with deploy-docs.yml)
