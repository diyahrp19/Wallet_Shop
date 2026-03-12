import { useInView, useMotionValue, useSpring } from 'framer-motion'

// Animation variants for scroll reveal animations
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

export const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

export const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

export const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
}

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

// Staggered container for grid items
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

// Staggered item for use inside staggerContainer
export const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
}

// Button hover animation
export const buttonHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1
        }
    }
}

// Card hover animation
export const cardHover = {
    rest: { y: 0 },
    hover: {
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
}

// Custom hook for scroll-triggered animations with viewport
export const useScrollAnimation = (options = {}) => {
    const ref = useInView({
        once: true,
        margin: "0px 0px -100px 0px",
        ...options
    })
    return ref
}

// Custom hook for counter animation
export const useCounterAnimation = (end, duration = 2) => {
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        duration: duration * 1000,
        bounce: 0
    })

    return { motionValue, springValue }
}

// Parallax hook
export const useParallax = (value, distance = 50) => {
    return useMotionValue(value * distance)
}

// Hover scale for images
export const imageHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

// Floating animation for decorative elements
export const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

// Pulse animation for badges
export const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

// Shimmer effect for loading states
export const shimmer = {
    initial: { x: '-100%' },
    animate: { x: '100%', transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' } }
}

// Bounce animation for scroll indicator
export const scrollBounce = {
    y: [0, 10, 0],
    transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

// Viewport settings for different section types
export const viewportOptions = {
    once: true,
    margin: "0px 0px -100px 0px"
}

export const viewportOptionsSmall = {
    once: true,
    margin: "0px 0px -50px 0px"
}

