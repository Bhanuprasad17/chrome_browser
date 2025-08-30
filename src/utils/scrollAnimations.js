// Enhanced scroll animation variants for Framer Motion - Google Chrome style
export const scrollVariants = {
  // Fade in from bottom with Google Chrome timing
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 80,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Fade in from left with staggered timing
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: -80,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Fade in from right with staggered timing
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: 80,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Scale in with bounce effect
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.6,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  },

  // Enhanced staggered container with Google Chrome timing
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Enhanced staggered item with smooth entrance
  staggerItem: {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Letter animation variants with Google Chrome timing
  letterAnimation: {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  },

  // Parallax effect for background elements
  parallax: {
    hidden: { 
      y: 100,
      opacity: 0.3,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Slide in from bottom with Google Chrome style
  slideInBottom: {
    hidden: { 
      opacity: 0, 
      y: 100,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Card entrance with subtle bounce
  cardEntrance: {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
};

// Enhanced easing functions matching Google Chrome
export const easing = {
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeIn: [0.55, 0.055, 0.675, 0.19],
  easeInOut: [0.83, 0, 0.17, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  smooth: [0.4, 0, 0.2, 1],
  chrome: [0.25, 0.46, 0.45, 0.94]
};

// Animation durations matching Google Chrome
export const durations = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  slower: 1.6,
  chrome: 0.8
};

// Stagger delays for different animation types
export const staggerDelays = {
  letters: 0.08,
  words: 0.15,
  cards: 0.2,
  sections: 0.3
};
