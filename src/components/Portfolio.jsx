import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const projects = [
  {
    id: "F8G5Ahiwha8",
    type: "Dowry Ceremony",
    title: "Joseph & Jennifer · Pomp and Colour",
    caption:
      "A cultural masterpiece — capturing the elegance and emotion of a traditional Kamba dowry ceremony.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "MUwanByN6hU",
    type: "Wedding",
    title: "A Sacred Wedding Mass",
    caption:
      "Cinematic coverage of a wedding mass — every entrance, vow, and blessing preserved beautifully.",
    span: "lg:col-span-1",
  },
  {
    id: "S6qUJl5RxJQ",
    type: "Dowry Ceremony",
    title: "Thomas & Catherine · Kamba Tradition",
    caption:
      "Where tradition meets elegance — a celebration filmed with cinematic depth and heart.",
    span: "lg:col-span-1",
  },
  {
    id: "gBK5PG3RwSo",
    type: "Event Coverage",
    title: "Ndetani Village · Love & Legacy",
    caption:
      "Pure greatness and love captured live in Kitui — a community moment told cinematically.",
    span: "lg:col-span-2",
  },
  {
    id: "LbCw20JX358",
    type: "Dowry Ceremony",
    title: "Everlyn Wambui · Muumandu",
    caption:
      "An intimate dowry presentation ceremony in Machakos County, story-driven from start to finish.",
    span: "lg:col-span-1",
  },
  {
    id: "UCy6owErxNk",
    type: "Event Coverage",
    title: "Kwawanzilu Prayer Day 2026",
    caption:
      "Full-event coverage with multi-cam direction — capturing every voice, song, and prayer.",
    span: "lg:col-span-1",
  },
  {
    id: "8QbvDhkpSK8",
    type: "Memorial",
    title: "In Loving Memory · Monicah Kabee",
    caption:
      "A beautiful soul honoured with grace — a tribute film told with reverence and care.",
    span: "lg:col-span-1",
  },
  {
    id: "jrbahQOwlns",
    type: "Memorial",
    title: "Stephen Musau Sosi · A Legacy",
    caption:
      "A life cut short, a legacy unforgotten — preserving stories that families will treasure forever.",
    span: "lg:col-span-1",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[200px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            A glimpse into{" "}
            <span className="italic bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
              the magic
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
            Real projects. Real moments. Real stories — captured cinematically.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-5">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 text-left hover:border-[#d4af37]/40 hover:shadow-[0_30px_80px_-30px_rgba(212,175,55,0.4)] transition-all duration-500 ${project.span}`}
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${project.id}/maxresdefault.jpg`}
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${project.id}/hqdefault.jpg`;
                }}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-80"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                  <Play size={26} className="ml-1" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#d4af37] mb-2">
                  {project.type}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/60 line-clamp-2">
                  {project.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 text-center">
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#d4af37]">
                  {active.type}
                </span>
                <h4 className="mt-1 text-xl md:text-2xl font-semibold text-white">
                  {active.title}
                </h4>
                <p className="mt-2 text-white/60 max-w-xl mx-auto">
                  {active.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
