'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsGrid />
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative py-20 px-4 overflow-hidden">
        {/* Enhanced Background with Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-80 h-80 bg-primary/25 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
            animate={{
              scale: [1.4, 1, 1.4],
              opacity: [0.4, 0.2, 0.4],
              x: [0, 50, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Additional depth elements */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-1/2 right-1/4 w-72 h-72 bg-secondary/25 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4
            }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Apple-style Header */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.h2 
                className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-2xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm rounded-xl -m-4 p-4 border border-border/20 shadow-lg" />
              <div className="relative">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Let&apos;s work together to create something amazing!
                </p>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="text-lg px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
        {/* Footer background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center space-x-6 mb-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="text-muted-foreground">
            © 2024 {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 