'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { staggerContainer, staggerItem, buttonHover } from '@/lib/animations'
interface HeroProps {
  // No projects needed in Hero anymore since we have the draggable card
}

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Tuong-Phung-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />
      
      <AnimatedBackground variant="minimal" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center flex-1">
        {/* Apple-style Content */}
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 tracking-tight leading-tight hero-text hero-heading"
            variants={staggerItem}
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.05)',
              paddingBottom: '0.1em',
              marginBottom: '0.5em'
            }}
          >
            <span className="text-foreground">Tuong Q.</span>
            <br className="hidden sm:block" />
            <span className="text-foreground/80">Phung</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-10 font-light tracking-wide hero-text"
            variants={staggerItem}
          >
            AI & Embedded Systems Engineer
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed font-light hero-text"
            variants={staggerItem}
          >
            Passionate about creating intelligent systems that bridge the gap between 
            artificial intelligence and embedded hardware. Specializing in machine learning, 
            computer vision, and IoT solutions.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            variants={staggerItem}
          >
            <Button 
              onClick={scrollToProjects}
              className="group relative overflow-hidden w-full sm:w-auto text-lg px-14 py-6 font-medium rounded-full shadow-lg elegant-button bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              size="lg"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            
            <motion.div {...buttonHover}>
              <Button 
                onClick={downloadCV}
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto text-lg px-14 py-6 font-medium rounded-full shadow-lg elegant-button border-2 hover:border-primary/50"
              >
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Simplified Scroll Indicator */}
      <motion.div 
        className="relative z-20 mb-16 flex flex-col items-center"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <span className="text-xs text-muted-foreground/70 font-light tracking-widest mb-4 uppercase">
          Scroll to explore
        </span>
        <div className="relative">
          <div className="w-10 h-16 border border-muted-foreground/30 rounded-full flex justify-center items-start pt-3 relative">
            <motion.div
              className="w-2 h-3 bg-muted-foreground/50 rounded-full"
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
} 