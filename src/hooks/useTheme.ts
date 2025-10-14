'use client'

import { useState, useEffect, useCallback } from 'react'
import { Theme } from '@/types'

export function useTheme(): {
  theme: Theme
  toggleTheme: () => void
  setTheme: (mode: 'light' | 'dark') => void
  mounted: boolean
} {
  const [theme, setThemeState] = useState<Theme>({ mode: 'light', system: false })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
          setThemeState({ mode: 'dark', system: !savedTheme })
          document.documentElement.classList.add('dark')
        } else {
          setThemeState({ mode: 'light', system: !savedTheme })
          document.documentElement.classList.remove('dark')
        }
      } catch (error) {
        console.warn('Failed to initialize theme:', error)
        setThemeState({ mode: 'light', system: false })
        document.documentElement.classList.remove('dark')
      }
      
      setMounted(true)
    }

    const timer = setTimeout(initializeTheme, 0)
    return () => clearTimeout(timer)
  }, [])

  const setTheme = useCallback((mode: 'light' | 'dark') => {
    setThemeState(prev => ({ ...prev, mode, system: false }))
    
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme.mode === 'light' ? 'dark' : 'light')
  }, [theme.mode, setTheme])

  return { theme, toggleTheme, setTheme, mounted }
}
