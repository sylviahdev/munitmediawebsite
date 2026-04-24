import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../constants/animations";
import { CONTACT, getEmailLink } from "../../constants/contact";
import ContactButtons from "./ContactButtons";

/**
 * CTASection component
 * High-impact call-to-action section with headline, description, and contact buttons
 * Replaces the hardcoded CTA section in original Home.jsx
 */
export const CTASection = ({
  title = "Capture life's most important moments with cinematic precision",
  description = "Weddings, graduations, funerals, baby showers, corporate events & more professionally filmed and edited in cinematic quality.",
  showEmail = true,
  className = "",
}) => {
  return (
    <section className={`relative bg-[#020617] text-white rounded-[4rem] p-14 md:p-28 text-center overflow-hidden shadow-2xl ${className}`}>
      {/* Glow Effects - Optimized blur values for performance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[80px] pointer-events-none" />

      <motion.div
        className="relative z-10 space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="pt-4">
          <ContactButtons variant="horizontal" showLabels={true} buttonSize="lg" className="justify-center" />
        </motion.div>

        {showEmail && (
          <motion.a
            variants={itemVariants}
            href={getEmailLink()}
            className="inline-block text-white border-b-2 border-blue-500 text-lg font-bold mt-6 hover:text-blue-300 transition-colors"
          >
            {CONTACT.email}
          </motion.a>
        )}
      </motion.div>
    </section>
  );
};

export default CTASection;
