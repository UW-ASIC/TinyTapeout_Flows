export interface PageMetadata {
  title: string
  order: number
}

export interface Page {
  id: string
  path: string
  metadata: PageMetadata
  content: string
}

export interface Section {
  id: string
  title: string
  pages: Page[]
}

// Import all content files
const contentModules = import.meta.glob('../content/**/*.ts', { eager: true })

export function loadContent(): Section[] {
  const sections = new Map<string, Section>()

  for (const [path, module] of Object.entries(contentModules)) {
    const mod = module as { metadata: PageMetadata; content: string }

    // Extract section and page from path
    // Example: ../content/getting-started/overview.ts
    const match = path.match(/\/content\/([^/]+)\/([^/]+)\.ts$/)
    if (!match) continue

    const [, sectionId, pageId] = match

    // Initialize section if it doesn't exist
    if (!sections.has(sectionId)) {
      sections.set(sectionId, {
        id: sectionId,
        title: sectionId.split('-').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        pages: []
      })
    }

    const section = sections.get(sectionId)!

    // Add page to section
    section.pages.push({
      id: pageId,
      path: `${sectionId}/${pageId}`,
      metadata: mod.metadata,
      content: mod.content
    })
  }

  // Sort pages within each section by order
  sections.forEach(section => {
    section.pages.sort((a, b) => a.metadata.order - b.metadata.order)
  })

  // Convert to array and sort sections
  return Array.from(sections.values()).sort((a, b) => {
    // Always put Getting-Started first
    if (a.id === 'Getting-Started') return -1
    if (b.id === 'Getting-Started') return 1

    // Sort others alphabetically
    return a.id.localeCompare(b.id)
  })
}
