import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Hero() {
  const videoId = "yX7kFvvVTng";

  const COMPANY_PHONE_DISPLAY = "+254 713 919 051";
  const COMPANY_PHONE_VALUE = "0713919051";
  const WHATSAPP_NUMBER = "254713919051";

  // ================= STATE =================
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("Gold Package");

  // ================= PACKAGES =================
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

  // ================= WHATSAPP =================
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

  // ================= UI =================
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 pt-24 pb-16 bg-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100 blur-[150px] rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>

          <span className="px-5 py-2 bg-black text-white text-xs rounded-full font-semibold">
            PREMIUM VIDEOGRAPHY & PHOTOGRAPHY
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 text-gray-900">
            Top Professional <span className="text-yellow-500">Videography</span> & Photography Services
          </h1>

          <p className="text-gray-600 mt-6 text-lg max-w-xl">
            We capture your moments with cinematic precision and creativity.
            Our team delivers high-quality photography and cinematic videography
            designed to make your moments unforgettable.
          </p>

          {/* FORM */}
          <div className="mt-8 space-y-4">

            <input
              className="input"
              placeholder="Event Type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            />

            <input
              className="input"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />

            <input
              className="input"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              className="input"
              placeholder="Phone Number"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
            />

            <select
              className="input font-semibold"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
            >
              <option>Gold Package</option>
              <option>Silver Package</option>
              <option>Bronze Package</option>
            </select>

            {/* PACKAGE PREVIEW */}
            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="font-semibold">{selectedPackage} Includes:</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                {packages[selectedPackage].map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <a
              href={whatsappLink}
              target="_blank"
              className="flex-1 bg-green-500 text-white text-center py-4 rounded-xl font-semibold"
            >
              Book via WhatsApp
            </a>

            <a
              href={`tel:${COMPANY_PHONE_VALUE}`}
              className="flex items-center justify-center gap-2 px-6 py-4 border rounded-xl"
            >
              <Phone size={18} />
              {COMPANY_PHONE_DISPLAY}
            </a>

          </div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            className="absolute w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`}
            title="Hero Video"
            allow="autoplay; encrypted-media"
          />
        </motion.div>

      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px;
          border: 1px solid #ddd;
          border-radius: 12px;
          outline: none;
        }
        .input:focus {
          border-color: #facc15;
          box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.3);
        }
      `}</style>

    </section>
  );
}