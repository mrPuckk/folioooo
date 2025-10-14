'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, User, FolderOpen, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Projects', href: '/#projects', icon: FolderOpen },
  { name: 'Contact', href: '/#contact', icon: Mail }
]

export function MobileNavigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    setIsMenuOpen(false) // Close menu after navigation
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg bg-background border border-border shadow-lg hover:bg-muted/50 transition-colors md:bg-background/95 md:backdrop-blur"
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] border-l border-gray-200 dark:border-gray-700 shadow-2xl z-50 md:hidden"
              style={{
                backgroundColor: 'white',
                color: 'black'
              }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Navigation</h2>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-2">
                    {navItems.map((item) => {
                      const Icon = item.icon
                      const isActive = pathname === '/' 
                        ? activeSection === item.href.replace('/#', '').replace('/', 'home')
                        : item.href === '/'

                      return (
                        <motion.div
                          key={item.name}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item.href === '/' ? (
                            <Link href={item.href}>
                              <div
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                                  isActive
                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 shadow-sm'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                              >
                                <Icon className="h-5 w-5" />
                                <span className="font-medium">{item.name}</span>
                                {isActive && (
                                  <motion.div
                                    className="ml-auto w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                                    layoutId="mobileActiveIndicator"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                  />
                                )}
                              </div>
                            </Link>
                          ) : (
                            <button
                              onClick={() => scrollToSection(item.href)}
                              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                                isActive
                                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 shadow-sm'
                                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                              <span className="font-medium">{item.name}</span>
                              {isActive && (
                                  <motion.div
                                    className="ml-auto w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                                  layoutId="mobileActiveIndicator"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2 }}
                                />
                              )}
                            </button>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                </nav>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Navigate through the portfolio
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
