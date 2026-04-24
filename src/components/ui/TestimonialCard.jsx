import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cardHoverVariants } from "../../constants/animations";

/**
 * TestimonialCard component
 * Individual testimonial card with quote, author, and rating
 */
export const TestimonialCard = ({
  quote,
  name,
  role,
  rating = 5,
  image,
  className = "",
}) => {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 ${className}`}
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-bold text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
