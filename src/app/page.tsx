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
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { staggerContainer, staggerItem, buttonHover } from '@/lib/animations'

export default function Home() {
  // Sample projects array - replace with your actual project data
  const projects = [
    { id: 'p1', name: 'EEG Seizure Detector – SoC Accelerator', status: 'in_progress' as const },
    { id: 'p2', name: 'ECG MINA Accelerator Reproduction', status: 'complete' as const },
    { id: 'p3', name: 'IoT Gas Detection System (Realtime Dashboard)', status: 'in_progress' as const },
    { id: 'p4', name: 'RF LNA 1–3 GHz Notes & Validation', status: 'pending' as const },
  ]

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
        storageKey="homepageProjectsCard_v1"
        maxVisible={8}
      />

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
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <AnimatedBackground />

        <div className="container mx-auto text-center relative z-10">
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
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
        {/* Footer background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        
        <div className="container mx-auto text-center relative z-10">
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
        </div>
      </footer>
    </div>
  )
} 