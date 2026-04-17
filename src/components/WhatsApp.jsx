import React, { useState } from "react";
import { motion } from "framer-motion";

function WhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-16 right-0 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        pointerEvents="none"
      >
        <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg border border-green-500/30">
          Chat with us on WhatsApp!
          <div className="absolute bottom-0 right-4 w-2 h-2 bg-gray-900 transform rotate-45 -translate-y-1"></div>
        </div>
      </motion.div>

      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500 opacity-25"
        animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Main Button */}
      <motion.a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-xl hover:shadow-2xl transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="text-2xl"
          animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.6 }}
        >
          💬
        </motion.div>
      </motion.a>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            animate={{
              x: [0, 30],
              y: [0, -30],
              opacity: [1, 0],
            }}
            transition={{ duration: 1 }}
            style={{ top: "25%", left: "25%" }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 bg-green-300 rounded-full"
            animate={{
              x: [0, -30],
              y: [0, -30],
              opacity: [1, 0],
            }}
            transition={{ duration: 1, delay: 0.1 }}
            style={{ top: "25%", right: "25%" }}
          />
        </>
      )}
    </motion.div>
  );
}

export default WhatsApp;