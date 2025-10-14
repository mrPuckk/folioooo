'use client'

import { motion } from 'framer-motion'
import { backgroundFloat, backgroundFloatReverse } from '@/lib/animations'

interface AnimatedBackgroundProps {
  className?: string
  variant?: 'default' | 'reverse' | 'minimal'
}

export function AnimatedBackground({ className = '', variant = 'default' }: AnimatedBackgroundProps) {
  const floatAnimation = variant === 'reverse' ? backgroundFloatReverse : backgroundFloat
  
  if (variant === 'minimal') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl"
          {...backgroundFloat}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/6 rounded-full blur-3xl"
          {...backgroundFloatReverse}
        />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 bg-primary/25 rounded-full blur-3xl"
        {...floatAnimation}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        {...floatAnimation}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3
        }}
      />
    </div>
  )
}
