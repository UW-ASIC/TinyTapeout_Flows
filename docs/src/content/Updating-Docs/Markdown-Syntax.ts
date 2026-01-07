export const metadata = {
  title: "Markdown Syntax",
  order: 3
}

export const content = `
# Markdown Syntax

Supported markdown formatting in pages.

## Headers

\`\`\`
# Header 1
## Header 2
### Header 3
\`\`\`

## Text Formatting

\`\`\`
**Bold text**
\`inline code\`
Regular text
\`\`\`

## Lists

Bullet lists:
\`\`\`
- Item 1
- Item 2
- Item 3
\`\`\`

Numbered lists:
\`\`\`
1. First
2. Second
3. Third
\`\`\`

## Code Blocks

Use triple backticks with language:

\\\`\\\`\\\`bash
make CreateProject
\\\`\\\`\\\`

\\\`\\\`\\\`typescript
const x = 5;
\\\`\\\`\\\`

\\\`\\\`\\\`verilog
module counter();
endmodule
\\\`\\\`\\\`

## Example Page

\`\`\`typescript
export const metadata = {
  title: "Example",
  order: 1
}

export const content = \\\`
# My Example

This is **bold** and this is \\\`code\\\`.

## Installation

\\\`\\\`\\\`bash
bun install
\\\`\\\`\\\`

- Simple
- Easy
- Fast
\\\`
\`\`\`

## Not Supported

- Images (not yet)
- Tables (not yet)
- Links (not yet)
- HTML tags

Keep it simple!
`
