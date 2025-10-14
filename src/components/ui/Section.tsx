'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { CommonProps } from '@/types'

interface SectionProps extends CommonProps {
  id?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'muted' | 'gradient'
  fullHeight?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    children, 
    id,
    padding = 'lg',
    background = 'default',
    fullHeight = false,
    ...props 
  }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16 lg:py-20',
      xl: 'py-20 lg:py-24'
    }

    const backgroundClasses = {
      default: 'bg-background',
      muted: 'bg-muted/30',
      gradient: 'bg-gradient-to-br from-background via-background/95 to-background/90'
    }

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative',
          paddingClasses[padding],
          backgroundClasses[background],
          fullHeight && 'min-h-screen',
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'
