import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { MarkdownRenderer } from './components/MarkdownRenderer'
import { loadContent, Section, Page } from './utils/contentLoader'

function App() {
  const [sections] = useState<Section[]>(() => loadContent())
  const [currentPath, setCurrentPath] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<Page | null>(null)

  // Initialize with first page
  useEffect(() => {
    if (sections.length > 0 && !currentPath) {
      const firstPage = sections[0].pages[0]
      if (firstPage) {
        setCurrentPath(firstPage.path)
        setCurrentPage(firstPage)
      }
    }
  }, [sections, currentPath])

  const handleNavigate = (path: string) => {
    // Normalize path: remove leading slash if present
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path
    setCurrentPath(normalizedPath)

    // Find the page
    for (const section of sections) {
      const page = section.pages.find(p => p.path === normalizedPath)
      if (page) {
        setCurrentPage(page)
        break
      }
    }
  }

  return (
    <div className="app">
      <Sidebar
        sections={sections}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <main className="content">
        {currentPage ? (
          <article className="article">
            <MarkdownRenderer content={currentPage.content} onNavigate={handleNavigate} />
          </article>
        ) : (
          <div className="empty-state">
            <p>Select a page from the sidebar to get started</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
