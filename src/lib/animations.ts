export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const cardHover = {
  hover: { 
    y: -5,
    transition: { duration: 0.2 }
  }
}

export const buttonHover = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
}

export const backgroundFloat = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    x: [0, 20, 0],
    y: [0, -15, 0],
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1]
  }
}

export const backgroundFloatReverse = {
  animate: {
    scale: [1.2, 1, 1.2],
    opacity: [0.4, 0.2, 0.4],
    x: [0, -25, 0],
    y: [0, 20, 0],
  },
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1]
  }
}
