import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./ui/TestimonialCard";
import Badge from "./ui/Badge";
import { TESTIMONIALS } from "../constants/testimonials";
import { containerVariants, itemVariants } from "../constants/animations";

/* ================= HEADER ================= */
const TestimonialsHeader = () => (
  <motion.div
    className="text-center space-y-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
  >
    <motion.div variants={itemVariants} className="flex justify-center">
      <Badge label="Social Proof" color="blue" />
    </motion.div>

    <motion.h2
      variants={itemVariants}
      className="text-4xl md:text-5xl font-black text-gray-900"
    >
      What Our Clients Say
    </motion.h2>

    <motion.p
      variants={itemVariants}
      className="text-xl text-gray-600 max-w-2xl mx-auto"
    >
      Don’t just take our word for it. Hear from clients who trusted us.
    </motion.p>
  </motion.div>
);

/* ================= GRID ================= */
const TestimonialsGrid = ({ testimonials }) => (
  <motion.div
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
  >
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={testimonial.id || `${testimonial.name}-${index}`}
        variants={itemVariants}
      >
        <TestimonialCard
          quote={testimonial.quote}
          name={testimonial.name}
          role={testimonial.role}
          rating={testimonial.rating}
        />
      </motion.div>
    ))}
  </motion.div>
);

/* ================= MAIN ================= */
export const Testimonials = ({ testimonials }) => {
  const safeTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : TESTIMONIALS;

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <TestimonialsHeader />
        <TestimonialsGrid testimonials={safeTestimonials} />
      </div>
    </section>
  );
};

export default Testimonials;