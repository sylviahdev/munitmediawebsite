import React from "react";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  slideInLeftVariants,
  slideInRightVariants,
  scaleInVariants,
} from "../../constants/animations";

/**
 * AnimatedText component
 * Text element with entrance animation variants
 */
export const AnimatedText = ({
  children,
  variant = "fadeIn",
  delay = 0,
  className = "",
  as = "p",
}) => {
  const variantMap = {
    fadeIn: fadeInVariants,
    slideInLeft: slideInLeftVariants,
    slideInRight: slideInRightVariants,
    scaleIn: scaleInVariants,
  };

  const MotionComponent = motion[as] || motion.p;

  return (
    <MotionComponent
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedText;
