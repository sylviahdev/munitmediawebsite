import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const videoId = "yX7kFvvVTng";

  return (
    <section id="home" className="relative grid md:grid-cols-2 gap-12 items-center py-10 md:py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
          Media Production Agency for Videography & Photography
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-6 text-gray-900">
          Professional videography <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> & photography services for events and brands.</span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-lg">
         We offer high-quality videography and photography for weddings, funerals, dowry ceremonies, birthdays, baby showers, corporate events, graduations, and special occasions,ensuring every moment is beautifully captured.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </a>
          <a href="#videos" className="border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition duration-300">
            View Work
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-white border-[4px] border-white">
          <iframe
            className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover scale-[1.02]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`}
            title="M-Unit Media Hero"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;