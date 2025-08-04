'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />
      
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.04, 0.08],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center flex-1">
        {/* Apple-style Content */}
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 tracking-tight leading-tight hero-text hero-heading"
            variants={itemVariants}
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
            variants={itemVariants}
          >
            AI & Embedded Systems Engineer
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed font-light hero-text"
            variants={itemVariants}
          >
            Passionate about creating intelligent systems that bridge the gap between 
            artificial intelligence and embedded hardware. Specializing in machine learning, 
            computer vision, and IoT solutions.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            variants={itemVariants}
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