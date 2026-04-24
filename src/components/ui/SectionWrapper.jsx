import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../../constants/animations";
import { SPACING } from "../../constants/spacing";

/**
 * SectionWrapper component
 * Provides consistent spacing, max-width, and scroll-in animations to all major sections
 */
export const SectionWrapper = ({
  children,
  id,
  className = "",
  animateOnScroll = true,
  showTopPadding = true,
}) => {
  const motionProps = animateOnScroll
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: sectionVariants,
      }
    : {};

  const Container = animateOnScroll ? motion.section : "section";

  return (
    <Container
      id={id}
      className={`w-full ${SPACING.containerMaxWidth} mx-auto ${SPACING.containerPadding} ${
        showTopPadding ? "pt-10" : ""
      } ${className}`}
      {...motionProps}
    >
      {children}
    </Container>
  );
};

export default SectionWrapper;
