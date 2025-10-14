'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { CommonProps } from '@/types'

interface ErrorBoundaryProps extends CommonProps {
  error?: string
  variant?: 'default' | 'destructive' | 'warning'
  size?: 'sm' | 'md' | 'lg'
}

export const ErrorMessage = forwardRef<HTMLDivElement, ErrorBoundaryProps>(
  ({ className, error, variant = 'destructive', size = 'md', ...props }, ref) => {
    if (!error) return null

    const variantClasses = {
      default: 'bg-muted text-muted-foreground border-border',
      destructive: 'bg-red-50 text-red-600 border-red-200',
      warning: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    }

    const sizeClasses = {
      sm: 'p-2 text-sm',
      md: 'p-3 text-sm',
      lg: 'p-4 text-base'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {error}
      </div>
    )
  }
)

ErrorMessage.displayName = 'ErrorMessage'
