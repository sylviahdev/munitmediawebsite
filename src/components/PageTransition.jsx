import React from "react";
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
