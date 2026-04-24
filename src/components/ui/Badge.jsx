import React from "react";
import { motion } from "framer-motion";
import { pulseVariants } from "../../constants/animations";

/**
 * Animated Badge component
 * Used for labels, tags, and status indicators
 */
export const Badge = ({
  label,
  color = "blue",
  withPulse = true,
  className = "",
}) => {
  const colorVariants = {
    blue: "bg-blue-100 border-blue-300 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300",
    green:
      "bg-green-100 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300",
    purple:
      "bg-purple-100 border-purple-300 text-purple-700 dark:bg-purple-900/30 dark:border-purple-700 dark:text-purple-300",
    amber:
      "bg-amber-100 border-amber-300 text-amber-700 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-300",
  };

  const dotColors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border ${colorVariants[color]} ${className}`}
    >
      {withPulse && (
        <motion.span
          variants={pulseVariants}
          animate="animate"
          className={`w-2.5 h-2.5 ${dotColors[color]} rounded-full`}
        />
      )}
      <span className="text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
  );
};

export default Badge;
