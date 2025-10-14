'use client'

import { Switch } from '@/components/ui/switch'
import { Moon, Sun } from 'lucide-react'
import { Navigation } from '@/components/layout/Navigation'
import { MobileNavigation } from '@/components/layout/MobileNavigation'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { Theme } from '@/types'

interface HeaderProps {
  theme: Theme
  toggleTheme: () => void
  mounted: boolean
}

export function Header({ theme, toggleTheme, mounted }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background md:bg-background/95 backdrop-blur md:supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Site Title */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent cursor-pointer">
              {SITE_CONFIG.name.replace(' Portfolio', '')}
            </h1>
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* Mobile Navigation */}
          <MobileNavigation />

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <Switch
                checked={mounted ? theme.mode === 'dark' : false}
                onCheckedChange={mounted ? toggleTheme : undefined}
                disabled={!mounted}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
