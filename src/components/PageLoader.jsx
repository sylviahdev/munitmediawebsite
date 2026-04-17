import React from "react";
import { motion } from "framer-motion";

export default function PageLoader() {
  const dots = [0, 1, 2];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-purple-900/20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <div className="text-6xl">🎬</div>
        </motion.div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold text-white mb-8">Loading</h2>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mb-8">
          {dots.map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: dot * 0.1,
              }}
            />
          ))}
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <p className="text-gray-400 mt-6 text-sm">Please wait while we load the page...</p>
      </div>
    </div>
  );
}
