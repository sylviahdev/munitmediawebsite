import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mwende Kyalo",
    role: "Bride · Nairobi",
    quote:
      "They didn't just film our wedding —,they bottled the emotion. Watching the highlight reel still gives us chills a year later.",
    rating: 5,
  },
  {
    name: "Brian Kisilu",
    role: "Owner · Ekafarm Ltd",
    quote:
      "M-Unit Media professionally documented our land project from site clearing and ground preparation to the final planting stages. Every milestone was captured with cinematic quality and attention to detail, giving us a powerful visual story of the project's progress. The final 4K production was clean, engaging, and exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Sylviah",
    role: "Founder · SM Solutions",
    quote:
      "From concept to final cut, the team was professional, creative, and on time. Our launch event coverage looked world-class.",
    rating: 5,
  },
  {
    name: "Rachael and Mutisya",
    role: "Client · Kangundo",
    quote:
      "Best decision we made for our wedding anniversary. Crisp 4K video, gorgeous photos, and beautifully captured memories we'll cherish forever.",
    rating: 5,
  },
  {
    name: "Linet Kiilu",
    role: "Client · Makueni",
    quote:
      "They captured the farewell service with such dignity and care. Every moment was preserved beautifully, helping our family hold on to precious memories.",
    rating: 5,
  },
  {
    name: "Salome",
    role: "Consecration Ceremony · Ekalakala",
    quote:
      "Cinematic. Emotional. Magical. Our families and friends abroad felt like they were right there with us.",
    rating: 5,
  },
];

const stats = [
  { value: "100+", label: "Events Covered" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "27", label: "Counties Covered" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-700/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">
            Trusted by Clients Across Machakos and Beyond
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
              Families & Brands
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-lg">
            Don't take our word for it — hear from people we've worked with.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 text-center hover:border-[#d4af37]/40 transition"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-7 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4af37]/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <Quote className="text-[#d4af37]/40" size={28} />

              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              <p className="mt-4 text-white/80 leading-relaxed">"{t.quote}"</p>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-white/50">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
