'use client'

import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/github-dark.css'

interface EnhancedMarkdownRendererProps {
  content: string
  className?: string
  showToc?: boolean
}

export function EnhancedMarkdownRenderer({ 
  content, 
  className = '',
  showToc = false 
}: EnhancedMarkdownRendererProps) {
  return (
    <div className={`enhanced-markdown ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeKatex]}
        components={{
          // Enhanced components with better styling
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-foreground mb-8 mt-12 first:mt-0 border-b border-border pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-foreground mb-6 mt-10 first:mt-0 border-b border-border/50 pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8 first:mt-0">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-foreground mb-3 mt-6 first:mt-0">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg font-semibold text-foreground mb-2 mt-4 first:mt-0">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-semibold text-foreground mb-2 mt-4 first:mt-0">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="text-foreground mb-6 leading-relaxed text-base">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-foreground ml-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground ml-4">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-6 py-4 mb-6 bg-primary/5 rounded-r-lg italic">
              {children}
            </blockquote>
          ),
          code: ({ node, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '')
            const isInline = !match
            return !isInline ? (
              <pre className="bg-muted/50 border border-border rounded-lg p-6 mb-6 overflow-x-auto shadow-lg">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="bg-muted/50 px-2 py-1 rounded text-sm font-mono text-primary" {...props}>
                {children}
              </code>
            )
          },
          a: ({ children, href }) => (
            <a 
              href={href} 
              className="text-primary hover:text-primary/80 underline transition-colors duration-200 hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-foreground">
              {children}
            </em>
          ),
          hr: () => (
            <hr className="border-border my-12" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-8 shadow-lg rounded-lg">
              <table className="min-w-full border border-border rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted/50">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody>
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-border hover:bg-muted/30 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-6 py-4 text-left font-bold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-6 py-4 text-foreground">
              {children}
            </td>
          ),
          // Enhanced math rendering
          div: ({ node, className, children, ...props }: any) => {
            if (className === 'math-display') {
              return (
                <div className="my-8 p-4 bg-muted/30 border border-border rounded-lg overflow-x-auto">
                  {children}
                </div>
              )
            }
            return <div className={className} {...props}>{children}</div>
          },
          span: ({ node, className, children, ...props }: any) => {
            if (className === 'math-inline') {
              return (
                <span className="px-1 text-primary">
                  {children}
                </span>
              )
            }
            return <span className={className} {...props}>{children}</span>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 