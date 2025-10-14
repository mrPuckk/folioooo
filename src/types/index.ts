// Re-export all types for easier imports
export * from './project'
export * from './projectStatus'
export * from './common'

// Additional common types
export interface Theme {
  mode: 'light' | 'dark'
  system: boolean
}

export interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'other'
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
    linkedin: string
    twitter: string
    email: string
  }
}

export interface AnimationVariants {
  hidden: Record<string, any>
  visible: Record<string, any>
  exit?: Record<string, any>
}

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ErrorState {
  hasError: boolean
  message?: string
  code?: string | number
}

export interface LoadingState {
  isLoading: boolean
  progress?: number
}

export interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  error?: string
  success?: string
}
