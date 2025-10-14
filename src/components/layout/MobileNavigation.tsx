'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, FolderOpen, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Projects', href: '/#projects', icon: FolderOpen },
  { name: 'Contact', href: '/#contact', icon: Mail }
]

export function MobileNavigation() {
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()

  useEffect(() => {
    // Only handle scroll-based navigation on the home page
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'contact']
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      setActiveSection('home')
    }
  }, [pathname])

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.replace('/', ''))
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return (
    <nav className="md:hidden flex items-center space-x-1 bg-background/95 backdrop-blur border border-border rounded-lg px-2 py-1 shadow-sm">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === '/' 
          ? activeSection === item.href.replace('/#', '').replace('/', 'home')
          : item.href === '/'

        return (
          <motion.div key={item.name}>
            {item.href === '/' ? (
              <Link href={item.href}>
                <motion.button
                  className={`relative p-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.name}
                >
                  <Icon className="h-4 w-4" />
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      layoutId="mobileActiveIndicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              </Link>
            ) : (
              <motion.button
                onClick={() => scrollToSection(item.href)}
                className={`relative p-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={item.name}
              >
                <Icon className="h-4 w-4" />
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    layoutId="mobileActiveIndicator"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            )}
          </motion.div>
        )
      })}
    </nav>
  )
}
