import { SiteConfig, SocialLink } from '@/types'

export const SITE_CONFIG: SiteConfig = {
  name: 'Tuong Portfolio',
  description: 'AI & Embedded Systems Engineer',
  url: 'https://tuong-portfolio.vercel.app',
  ogImage: '/images/og-image.jpg',
  links: {
    github: 'https://github.com/tuongphung',
    linkedin: 'https://linkedin.com/in/tuongphung',
    twitter: 'https://twitter.com/tuongphung',
    email: 'tuong.phung@example.com'
  }
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'tuongphungquang@gmail.com',
    url: 'mailto:tuongphungquang@gmail.com',
    icon: 'email',
    platform: 'email'
  }
]

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/', icon: 'Home' },
  { name: 'About', href: '/#about', icon: 'User' },
  { name: 'Projects', href: '/#projects', icon: 'FolderOpen' },
  { name: 'Contact', href: '/#contact', icon: 'Mail' }
] as const

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
} as const 