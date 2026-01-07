
const processInlineMarkdown = (text: string) => {
    const parts: any[] = []
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
            parts.push(`CODE:${match.slice(1, -1)}`)
        } else if (match.startsWith('**')) {
            parts.push(`BOLD:${match.slice(2, -2)}`)
        } else if (match.startsWith('[')) {
            const linkMatch = match.match(/\[([^\]]+)\]\(([^)]+)\)/)
            if (linkMatch) {
                const [_, linkText, url] = linkMatch
                parts.push(`LINK:${linkText}->${url}`)
            } else {
                parts.push(`FAIL_LINK:${match}`)
            }
        }

        lastIndex = matchIndex + match.length
    })

    // Add remaining text
    if (lastIndex < remaining.length) {
        parts.push(remaining.slice(lastIndex))
    }

    return parts.length > 0 ? parts.join('') : text
}

const tests = [
    "* [Cheatsheet](/Environment/Cheatsheet): A quick reference",
    "* [Digital](/Flows/Digital): Learn about digital",
    "Check [this](/this) and [that](/that)",
    "**[Bold Link](/url)**",
    "* [Link 1](/1)\n* [Link 2](/2)",
    "* [Broken Link] (/broken)", // Space between brackets
]

tests.forEach(t => {
    console.log(`Input: "${t}"`)
    console.log(`Output: "${processInlineMarkdown(t)}"`)
    console.log('---')
})
