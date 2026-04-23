import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const whatsappNumber = "254713919051";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

/* ================= TESTIMONIALS ================= */
const testimonials = [
  {
    name: "Brian K.",
    role: "Baby shower Client",
    text: "The quality was insane. Munitmedia the best.",
  },
  {
    name: "Sarah M.",
    role: "Retirement Party Client",
    text: "The photos and videos are next level.",
  },
  {
    name: "David W.",
    role: "Wedding Client",
    text: "Every moment was captured perfectly. ",
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);

  /* AUTO AI SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: "🎥",
      title: "Videography",
      desc: "Cinematic video production for events & brands.",
      list: [
        "4K Shooting",
        "Aerial Drone Footage",
        "Multiple Camera Coverage",
        "Professional Event Coverage",
      ],
    },
    {
      icon: "📸",
      title: "Photography",
      desc: "Professional photography.",
      list: [
        "High-quality Studio Shoots",
        "Event Coverage",
        "Professional Retouching & Editing",
      ],
    },
    {
      icon: "🎬",
      title: "Editing",
      desc: "High-end cinematic post-production.",
      list: ["YouTube", "Sound Design", "Social Media"],
    },
    {
      icon: "📡",
      title: "Live Streaming",
      desc: "Real-time professional event broadcasting.",
      list: [
        "HD Streaming",
        "Multi-Camera Setup",
        "DVR Recording",
        "Real-Time Monitoring",
      ],
    },
  ];

  return (
    <section className="bg-black text-white relative">
      {/* ================= HERO ================= */}
      <div className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <motion.video
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/your-video.mp4" type="video/mp4" />
        </motion.video>

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Capture the {" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
              Extraordinary
            </span>
          </h1>

          <p className="text-gray-300 text-lg mt-5">
            Premium videography & photography that tells your story.
          </p>

          <a
            href={whatsappLink}
            className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-9 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Book on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-gray-900 rounded-2xl p-8 group hover:scale-105 transition"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl bg-yellow-500/10"></div>

              <div className="relative">
                <div className="text-4xl mb-4">{s.icon}</div>

                <h3 className="text-xl font-semibold text-yellow-400">
                  {s.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">{s.desc}</p>

                <ul className="mt-4 text-gray-300 text-sm space-y-2">
                  {s.list.map((l, idx) => (
                    <li key={idx}>• {l}</li>
                  ))}
                </ul>

                <a
                  href={whatsappLink}
                  className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-7 py-3 rounded-full text-sm font-semibold hover:scale-105 transition"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            What Clients Say
          </h2>

          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 p-8 rounded-2xl relative"
              >
                <div className="relative">
                  <p className="text-gray-300 italic">
                    “{testimonials[index].text}”
                  </p>

                  <div className="mt-6">
                    <h4 className="text-yellow-400 font-semibold">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto text-gray-400">
          Advanced cinematic production for brands, weddings, and events.
        </div>
      </div>

      {/* ================= STICKY CTA ================= */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={whatsappLink}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-5 py-3 rounded-full shadow-lg font-semibold hover:scale-110 transition"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
