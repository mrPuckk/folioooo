'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { CommonProps } from '@/types'

interface ContainerProps extends CommonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = 'lg', padding = true, ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto',
          sizeClasses[size],
          padding && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
