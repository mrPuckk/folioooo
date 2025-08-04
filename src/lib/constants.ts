export const SITE_CONFIG = {
  name: 'Tuong Portfolio',
  description: 'Frontend Developer & UI/UX Enthusiast',
  url: 'https://tuong-portfolio.vercel.app',
  ogImage: '/images/og-image.jpg',
  links: {
    github: 'https://github.com/tuong',
    linkedin: 'https://linkedin.com/in/tuong',
    twitter: 'https://twitter.com/tuong',
    email: 'tuong@example.com'
  }
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/tuong',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tuong',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tuong',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:tuong@example.com',
    icon: 'email'
  }
]

export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'All Projects' },
  { id: 'featured', name: 'Featured' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'fullstack', name: 'Full Stack' }
]

export const SKILL_CATEGORIES = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'tools', name: 'Tools' }
]

export const ANIMATION_DELAYS = {
  hero: 100,
  about: 200,
  skills: 300,
  projects: 400,
  experience: 500,
  contact: 600
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} 