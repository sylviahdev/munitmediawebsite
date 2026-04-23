import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  const videoId = "yX7kFvvVTng";

  const phoneDisplay = "+254 713 919 051";
  const phoneValue = "0713919051";
  const whatsappNumber = "254713919051";

  const [price, setPrice] = useState("45000");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi M-Unit Media 👋

I would like a quote for the *KES ${price} package*.

Kindly share availability and booking details.`
  )}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-24 overflow-hidden bg-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-blue-100/60 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-yellow-100/30 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* BADGE */}
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white text-xs md:text-sm font-semibold tracking-wider shadow-lg mb-6">
            PREMIUM VIDEOGRAPHY & PHOTOGRAPHY SERVICES
          </span>

          {/* HEADLINE (PREMIUM UPGRADE) */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-gray-900"
          >
            Professional  Cinematic
            <span className="block text-blue-600">
              Videography & Photography
            </span>
            <span className="block text-blue-600">
              for Events & Brands
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed"
          >
           We Don’t Just Capture Moments ,We Preserve Legacy. Craft cinematic videography and refined photography that transform life’s most special occasions timeless visual experiences.
          </motion.p>

          {/* STATS */}
          <motion.p
            variants={itemVariants}
            className="text-gray-500 flex items-center gap-2 mt-5 mb-8"
          >
            <Sparkles className="text-cyan-500" size={18} />
            500+ Projects Completed • Trusted Across Kenya
          </motion.p>

          {/* PACKAGE */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Select Package</p>

            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-white border border-gray-200 px-5 py-3 rounded-xl font-semibold focus:ring-2 focus:ring-cyan-400 outline-none"
            >
              <option value="45000">KES 45,000 — Gold Package</option>
              <option value="35000">KES 35,000 — Silver Package</option>
              <option value="25000">KES 25,000 — Bronze Package</option>
            </select>
          </motion.div>

          {/* BUTTONS */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
              <span className="relative flex items-center gap-2">
                Get Free Quote <ArrowRight size={20} />
              </span>
            </a>

            <a
              href={`tel:${phoneValue}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-xl border border-gray-300 hover:bg-gray-50 transition"
            >
              <Phone size={20} />
              {phoneDisplay}
            </a>

          </motion.div>
        </motion.div>

        {/* ================= RIGHT VIDEO ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-end"
        >
          <div className="relative w-full md:w-[140%] lg:w-[150%] aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-gray-100">

            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

            <iframe
              className="absolute w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1`}
              title="Hero Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;