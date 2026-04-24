import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  const videoId = "yX7kFvvVTng";

  const phoneDisplay = "+254 713 919 051";
  const phoneValue = "0713919051";
  const whatsappNumber = "254713919051";

  /* ================= FORM STATE ================= */
  const [price, setPrice] = useState("45000");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");

  /* ================= WHATSAPP MESSAGE ================= */
  const whatsappMessage = `
Hi M-Unit Media 👋

I would like to book your services.

📌 Event Type: ${eventType || "Not specified"}
📅 Date: ${eventDate || "Not specified"}
📍 Location: ${location || "Not specified"}
💰 Package: KES ${price}

Kindly share availability and booking details.
`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-12 overflow-hidden bg-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-blue-100/60 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-yellow-100/30 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* BADGE */}
          <span className="inline-block px-6 py-2 rounded-full bg-black text-white text-xs md:text-sm font-semibold tracking-wider mb-6">
            PREMIUM VIDEOGRAPHY & PHOTOGRAPHY SERVICES
          </span>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
            Top Professional  Quality Videography & Photography for Events
& Brands          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4 text-lg">
           We don’t just capture moments ,we preserve legacy. Through cinematic videography and refined photography, we transform your special occasions into timeless stories that last forever.
          </p>

          {/* ================= FORM ================= */}
          <div className="mt-6 space-y-3">

            <input
              type="text"
              placeholder="Event Type (Wedding, Funeral, Baby Shower...)"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="text"
              placeholder="Location (City / Venue)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg font-semibold"
            >
              <option value="45000">KES 45,000 — Gold Package</option>
              <option value="35000">KES 35,000 — Silver Package</option>
              <option value="25000">KES 25,000 — Bronze Package</option>
            </select>

          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 text-white text-center py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Send Booking on WhatsApp
            </a>

            <a
              href={`tel:${phoneValue}`}
              className="flex items-center justify-center gap-2 px-6 py-4 border rounded-xl"
            >
              <Phone size={18} />
              {phoneDisplay}
            </a>

          </div>

        </motion.div>

        {/* ================= RIGHT VIDEO ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            className="absolute w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1`}
            title="Hero Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;