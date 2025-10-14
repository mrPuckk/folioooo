'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { PortfolioUpdateNotice } from '@/components/PortfolioUpdateNotice'
import { DraggableProjectsCard } from '@/components/DraggableProjectsCard'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { staggerContainer, staggerItem, buttonHover } from '@/lib/animations'
import { DEFAULT_PROJECT_STATUSES, PROJECT_STATUS_CONFIG } from '@/config/projectStatusConfig'

export default function Home() {
  // Use configured project statuses
  const projects = DEFAULT_PROJECT_STATUSES

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Portfolio Update Notice - Homepage Only */}
      <PortfolioUpdateNotice 
        projects={projects}
        deadline="2025-10-25"
      />

      {/* Draggable Projects Card */}
      <DraggableProjectsCard 
        projects={projects}
        storageKey={PROJECT_STATUS_CONFIG.storageKey}
        maxVisible={PROJECT_STATUS_CONFIG.maxVisible}
      />

      {/* Hero Section */}
      <Section id="home" fullHeight>
        <Hero />
      </Section>

      {/* About Section */}
      <Section id="about">
        <About />
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <ProjectsGrid />
      </Section>

      {/* Enhanced Contact Section */}
      <Section id="contact" background="gradient" className="overflow-hidden">
        <AnimatedBackground />
        <Container className="text-center relative z-10">
          <SectionHeader title="Get In Touch" />
          
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
              <motion.div {...buttonHover}>
                <Button size="lg" className="text-lg px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
              </motion.div>
              <motion.div {...buttonHover}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Footer */}
      <Section background="gradient" className="border-t border-border overflow-hidden">
        <Container className="text-center relative z-10">
          <div className="flex justify-center mb-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-primary hover:from-primary/20 hover:to-secondary/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 transform font-medium shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">📧</span>
                {social.name}
              </a>
            ))}
          </div>
          <p className="text-muted-foreground">
            © 2024 Tuong Portfolio - code by Tuong Phung with stacks: Next.js + React + TypeScript + Tailwind + Framer Motion + shadcn/ui. All rights reserved.
          </p>
        </Container>
      </Section>
    </div>
  )
} 