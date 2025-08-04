'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { 
  Heart, 
  Star, 
  Zap, 
  Sparkles, 
  ArrowRight,
  Github,
  ExternalLink
} from 'lucide-react'

export default function POCPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2">
          Proof of Concept
        </h1>
        <p className="text-muted-foreground text-center">
          Demonstrating shadcn/ui + Framer Motion + Lucide Icons
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section 1: shadcn/ui Buttons */}
        <motion.section 
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            shadcn/ui Buttons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-lg border bg-card"
            >
              <h3 className="font-semibold mb-4">Button Variants</h3>
              <div className="space-y-3">
                <Button variant="default" className="w-full">
                  Default Button
                </Button>
                <Button variant="secondary" className="w-full">
                  Secondary Button
                </Button>
                <Button variant="outline" className="w-full">
                  Outline Button
                </Button>
                <Button variant="ghost" className="w-full">
                  Ghost Button
                </Button>
                <Button variant="link" className="w-full">
                  Link Button
                </Button>
                <Button variant="destructive" className="w-full">
                  Destructive Button
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-lg border bg-card"
            >
              <h3 className="font-semibold mb-4">Button Sizes</h3>
              <div className="space-y-3">
                <Button size="sm" className="w-full">
                  Small Button
                </Button>
                <Button size="default" className="w-full">
                  Default Size
                </Button>
                <Button size="lg" className="w-full">
                  Large Button
                </Button>
                <Button size="icon" className="w-full">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-lg border bg-card"
            >
              <h3 className="font-semibold mb-4">Interactive Buttons</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => setCount(count + 1)}
                  className="w-full"
                >
                  <Heart className="w-4 h-4" />
                  Clicked {count} times
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setIsVisible(!isVisible)}
                  className="w-full"
                >
                  <Zap className="w-4 h-4" />
                  Toggle Animation
                </Button>
                <Button asChild className="w-full">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Visit GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2: Framer Motion Animations */}
        <motion.section 
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Framer Motion Animations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Animated Cards */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-lg border bg-card"
            >
              <h3 className="font-semibold mb-4">Animated Cards</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded border bg-muted/50"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>Animated Card {i}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AnimatePresence Demo */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-lg border bg-card"
            >
              <h3 className="font-semibold mb-4">AnimatePresence</h3>
              <div className="space-y-4">
                <Button 
                  onClick={() => setIsVisible(!isVisible)}
                  className="w-full"
                >
                  {isVisible ? 'Hide' : 'Show'} Element
                </Button>
                
                <AnimatePresence>
                  {isVisible && (
                    <motion.div
                      className="p-4 rounded border bg-primary/10 text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <span>This element animates in/out!</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 3: Combined Demo */}
        <motion.section 
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Combined Demo
          </h2>

          <motion.div
            className="p-8 rounded-lg border bg-gradient-to-r from-primary/10 to-secondary/10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center space-y-6">
              <motion.h3 
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                All Technologies Working Together!
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                This demonstrates the seamless integration of shadcn/ui components, 
                Framer Motion animations, and Lucide icons in a Next.js application.
              </motion.p>

              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button size="lg" className="group">
                  <Star className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="container mx-auto px-4 py-8 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>Proof of Concept - shadcn/ui + Framer Motion + Lucide Icons</p>
      </motion.footer>
    </div>
  )
} 