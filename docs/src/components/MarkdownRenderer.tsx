import React from 'react'

interface MarkdownRendererProps {
  content: string
  onNavigate?: (path: string) => void
}

export function MarkdownRenderer({ content, onNavigate }: MarkdownRendererProps) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let inCodeBlock = false
  let codeLines: string[] = []

  const processInlineMarkdown = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = []
    let remaining = text
    let key = 0

    // Process bold, inline code, and links
    const regex = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
    const matches = remaining.match(regex)

    if (!matches) return text

    let lastIndex = 0
    matches.forEach((match) => {
      const matchIndex = remaining.indexOf(match, lastIndex)

      // Add text before match
      if (matchIndex > lastIndex) {
        parts.push(remaining.slice(lastIndex, matchIndex))
      }

      // Add the match
      if (match.startsWith('`')) {
        parts.push(<code key={key++}>{match.slice(1, -1)}</code>)
      } else if (match.startsWith('**')) {
        parts.push(<strong key={key++}>{processInlineMarkdown(match.slice(2, -2))}</strong>)
      } else if (match.startsWith('[')) {
        const linkMatch = match.match(/\[([^\]]+)\]\(([^)]+)\)/)
        if (linkMatch) {
          const [_, linkText, url] = linkMatch
          parts.push(
            <a
              key={key++}
              href={url}
              onClick={(e) => {
                if (url.startsWith('/') && onNavigate) {
                  e.preventDefault()
                  onNavigate(url)
                }
              }}
            >
              {linkText}
            </a>
          )
        }
      }

      lastIndex = matchIndex + match.length
    })

    // Add remaining text
    if (lastIndex < remaining.length) {
      parts.push(remaining.slice(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim()

    // Code blocks
    if (trimmed.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true
        codeLines = []
      } else {
        inCodeBlock = false
        elements.push(
          <pre key={`code-${index}`}>
            <code>{codeLines.join('\n')}</code>
          </pre>
        )
      }
      return
    }

    if (inCodeBlock) {
      codeLines.push(line)
      return
    }

    // Headers
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={index}>
          {trimmed.slice(4)}
        </h3>
      )
      return
    }
    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={index}>
          {trimmed.slice(3)}
        </h2>
      )
      return
    }
    if (trimmed.startsWith('# ')) {
      elements.push(
        <h1 key={index}>
          {trimmed.slice(2)}
        </h1>
      )
      return
    }

    // Lists
    if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={index}>
          {processInlineMarkdown(trimmed.slice(2))}
        </li>
      )
      return
    }
    if (trimmed.match(/^\d+\.\s/)) {
      elements.push(
        <li key={index}>
          {processInlineMarkdown(trimmed.replace(/^\d+\.\s/, ''))}
        </li>
      )
      return
    }

    // Regular paragraph
    if (trimmed) {
      elements.push(
        <p key={index}>
          {processInlineMarkdown(trimmed)}
        </p>
      )
      return
    }

    // Empty line
    elements.push(<br key={index} />)
  })

  return (
    <div className="markdown-content">
      {elements}
    </div>
  )
}
