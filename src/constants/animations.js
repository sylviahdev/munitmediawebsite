/**
 * Reusable Framer Motion animation variants
 * Consistent animation language across all sections
 */

// Section entrance animation - used for major sections
export const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Container for staggered animations (parent)
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

// Individual item animation within staggered container
export const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// For list items with slightly faster animation
export const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Card hover animation
export const cardHoverVariants = {
  rest: { y: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  },
};

// Button animation on hover
export const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

// Fade in animation - simple
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide in from left
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Slide in from right
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Scale in animation
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Pulse animation for badges/indicators
export const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
