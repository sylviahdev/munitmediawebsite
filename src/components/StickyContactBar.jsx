import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactButtons from "./ui/ContactButtons";

/**
 * StickyContactBar component
 * Fixed position contact buttons that appear on mobile after scrolling past hero
 * Hides on desktop (lg+) and disappears when near CTA section
 */
export const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past first section (hero)
      const heroHeight = window.innerHeight;
      const shouldShow = window.scrollY > heroHeight * 0.7;

      // Hide if scrolling near footer/CTA
      const scrolledToBottom =
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 500;

      setIsVisible(shouldShow && !scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 z-40 px-6 flex justify-center lg:hidden"
        >
          <div className="bg-white dark:bg-gray-900 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 p-4">
            <ContactButtons
              variant="horizontal"
              showLabels={false}
              buttonSize="sm"
              className="gap-3"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyContactBar;
