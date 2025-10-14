'use client'

import { Header } from '@/components/layout/Header'
import { useTheme } from '@/hooks/useTheme'
import { CommonProps } from '@/types'

interface LayoutProps extends CommonProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
} 