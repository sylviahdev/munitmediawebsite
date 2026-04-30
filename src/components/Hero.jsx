import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  const videoId = "yX7kFvvVTng";

  const COMPANY_PHONE_DISPLAY = "+254 713 919 051";
  const COMPANY_PHONE_VALUE = "0713919051";
  const WHATSAPP_NUMBER = "254713919051";

  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("Gold Package");

  const packages = {
    "Bronze Package": [
      "1 Videographer",
      "1 Photographer",
      "Full Event Coverage",
      "Full HD Video",
      "Edited Photos & Video",
      "YouTube Upload",
    ],
    "Silver Package": [
      "1 Videographer",
      "2 Photographers",
      "Pre & Event Coverage",
      "4K Video Quality",
      "Edited Photos & Video",
      "Photo Album (200 prints)",
      "YouTube Upload",
    ],
    "Gold Package": [
      "3 Videographers",
      "2 Photographers",
      "Drone Coverage",
      "Full Event Coverage",
      "4K/6K Video Quality",
      "Edited Photos & Video",
      "Premium Photo Album",
      "Mounted Portrait",
      "YouTube Upload",
    ],
  };

  const whatsappMessage = `
Hi M-Unit Media 👋

I would like to book your services.

📌 Event Type: ${eventType || "Not specified"}
📅 Date: ${eventDate || "Not specified"}
📍 Location: ${location || "Not specified"}
📞 My Phone: ${clientPhone || "Not provided"}

📦 Package: ${selectedPackage}

📋 Includes:
${packages[selectedPackage].map((item) => `• ${item}`).join("\n")}
`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* 🎬 Background Video */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover scale-150 opacity-60 pointer-events-none"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`}
        title="Background Video"
        allow="autoplay; encrypted-media"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/95" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* PREMIUM BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 text-xs tracking-widest uppercase rounded-full 
                       bg-gradient-to-r from-[#d4af37] via-[#f5e6c8] to-[#c9a227] 
                       text-black font-semibold shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            Premium Videography Studio
          </motion.span>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f5e6c8] to-[#c9a227] bg-clip-text text-transparent">
              Top Professional Videography
            </span>
            <br />
            <span className="text-white/70">& Photography Services</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/60 text-lg max-w-lg leading-relaxed"
          >
            We capture your moments with cinematic precision and refined artistry.
            Delivering premium 4K/6K visuals that transform your story into a timeless masterpiece.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#c9a227] opacity-90 group-hover:opacity-100 transition" />
              <span className="absolute inset-0 blur-xl bg-[#d4af37] opacity-40 group-hover:opacity-70 transition" />
              <MessageCircle size={18} className="relative z-10 text-black" />
              <span className="relative z-10 font-semibold text-black">
                Book via WhatsApp
              </span>
            </a>

            {/* CALL */}
            <a
              href={`tel:${COMPANY_PHONE_VALUE}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              <Phone size={18} />
              {COMPANY_PHONE_DISPLAY}
            </a>
          </motion.div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        >

          <h3 className="text-xl font-semibold mb-6 text-white/80">
            Quick Booking
          </h3>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Event Type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]/40"
            />

            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]/40"
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]/40"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]/40"
            />

            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none font-semibold"
            >
              <option>Gold Package</option>
              <option>Silver Package</option>
              <option>Bronze Package</option>
            </select>

            {/* PACKAGE PREVIEW */}
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="font-medium mb-2 text-[#d4af37]">
                {selectedPackage} Includes:
              </h4>
              <ul className="text-sm text-white/60 space-y-1">
                {packages[selectedPackage].map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              className="block text-center mt-4 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-black font-semibold hover:scale-105 transition"
            >
              Start Booking
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}