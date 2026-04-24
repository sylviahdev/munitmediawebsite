import React, { useState } from "react";
import { motion } from "framer-motion";

/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "254713919051";

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Professional Videography",
    description:
      "We capture events using cinematic cameras, drones, and storytelling techniques.",
    features: [
      "4K Ultra HD Recording",
      "Aerial Drone Coverage",
      "Multi-Camera Setup",
      "Professional Event Coverage",
    ],
    icon: "🎥",
  },
  {
    title: "Professional Photography",
    description:
      "High-end photography capturing emotion, detail, and timeless moments.",
    features: [
      "Event Photography",
      "Studio Shoots",
      "Portrait Retouching",
      "High-Resolution Delivery",
    ],
    icon: "📸",
  },
  {
    title: "Post Production (Cinematic Editing)",
    description:
      "We transform raw footage into high-end cinematic content for all platforms.",
    features: [
      "YouTube Video Editing & Optimization",
      "Social Media Posting (Instagram, TikTok, Facebook)",
      "Professional Sound Design & Mixing",
      "Motion Graphics & Color Grading",
    ],
    icon: "🎬",
  },
  {
    title: "Live Streaming",
    description:
      "Reliable, high-quality live streaming for events anywhere in Kenya.",
    features: [
      "Full HD Streaming",
      "Multi-Camera Switching",
      "Real-Time Monitoring",
      "Event Broadcasting",
    ],
    icon: "📡",
  },
];

/* ================= COMPONENT ================= */
export default function Services() {
  const [showQuote, setShowQuote] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  /* ================= SUBMIT HANDLER ================= */
  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const text = `Hello, my name is ${form.name}.
Phone: ${form.phone}
Service: ${form.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    // reset
    setForm({ name: "", phone: "", message: "" });
    setShowQuote(false);
  };

  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      
      {/* background glow (FIXED) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[160px]" />
      </div>

      {/* header */}
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Premium Videography & Photography Services
        </motion.h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We don’t just capture content — we build cinematic experiences that
          elevate your brand, event, and memories.
        </p>
      </div>

      {/* grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-[#111] border border-gray-800 rounded-2xl p-8 overflow-hidden"
          >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-500/10 to-transparent blur-2xl pointer-events-none" />

            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="text-2xl font-bold text-yellow-400">
              {service.title}
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
              {service.description}
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 text-sm">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setShowQuote(true)}
              className="inline-block mt-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Get Quote
            </button>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {showQuote && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] p-8 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Request a Quote
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full mb-3 p-3 bg-black border border-gray-700 rounded"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full mb-3 p-3 bg-black border border-gray-700 rounded"
            />

            <textarea
              placeholder="Tell us about your event..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full mb-4 p-3 bg-black border border-gray-700 rounded"
            />

            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowQuote(false)}
                className="text-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:scale-105 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}