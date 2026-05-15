import React from "react";
import { motion } from "framer-motion";
import { Video, Camera, Film, Radio, MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "../constants/contact";

const services = [
  {
    icon: Video,
    title: "Videography",
    tagline: "Ads · Promos · Event Coverage",
    benefit:
      "Cinematic films that make your brand unforgettable and your events feel like a movie — built to convert, share, and stand the test of time.",
    points: [
      "Brand ads & promo videos that drive sales",
      "Wedding & event films that move people",
      "4K quality with pro audio & color grading",
      "Fast turnaround — ready to post in days",
    ],
    accent: "from-[#d4af37] via-amber-400 to-[#c9a227]",
    glow: "bg-amber-500/20",
    whatsappMsg:
      "Hi! I'd like to book a videography session (ads / promos / event coverage). What's your availability?",
  },
  {
    icon: Camera,
    title: "Photography",
    tagline: "Events · Portraits · Branding",
    benefit:
      "Stunning, scroll-stopping photos that elevate your personal brand, capture every emotion at your event, and look incredible everywhere — from billboards to Instagram.",
    points: [
      "Branding shoots that grow your business",
      "Wedding & event photography that lasts a lifetime",
      "Editorial portraits with magazine-grade retouching",
      "High-resolution gallery delivered in 72 hours",
    ],
    accent: "from-white via-[#f5e6c8] to-[#d4af37]",
    glow: "bg-[#d4af37]/20",
    whatsappMsg:
      "Hi! I'd like to book a photography session (event / portrait / branding). What's your availability?",
  },
  {
    icon: Film,
    title: "Post Production",
    tagline: "Editing · Color · Sound · Motion Graphics",
    benefit:
      "We transform raw footage into high-end cinematic content built for every platform — polished, paced, and ready to post.",
    points: [
      "YouTube video editing & optimization",
      "Social media edits (Instagram, TikTok, Facebook)",
      "Professional sound design & mixing",
      "Motion graphics & color grading",
    ],
    accent: "from-amber-300 via-[#d4af37] to-amber-600",
    glow: "bg-amber-400/20",
    whatsappMsg:
      "Hi! I'd like to discuss a post-production project (editing / color / sound). What's your turnaround?",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    tagline: "Events · Broadcasts · Multi-Cam",
    benefit:
      "Reliable, broadcast-quality live streaming for events anywhere in Kenya — multi-camera, real-time, and audience-ready.",
    points: [
      "Full HD multi-camera streaming",
      "Real-time switching & monitoring",
      "Event broadcasting to YouTube / Facebook",
      "On-site engineer & backup connectivity",
    ],
    accent: "from-[#f5e6c8] via-amber-400 to-[#c9a227]",
    glow: "bg-[#d4af37]/20",
    whatsappMsg:
      "Hi! I'd like to book a live streaming service for an event. Please share availability and pricing.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[200px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Services Built To{" "}
            <span className="bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
              Convert & Captivate
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-lg">
            Two crafts. One obsession — making you look extraordinary.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-8 md:p-10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute -top-32 -right-20 w-72 h-72 ${service.glow} blur-[120px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} text-black shadow-lg`}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#d4af37]/80">
                  {service.tagline}
                </p>

                {/* Benefit */}
                <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
                  {service.benefit}
                </p>

                {/* Points */}
                <ul className="mt-7 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsAppLink(service.whatsappMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[#d4af37] font-semibold tracking-wide hover:gap-3 transition-all"
                >
                  <MessageCircle size={18} />
                  Book {service.title}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
