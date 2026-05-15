import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  Sparkles,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { getWhatsAppLink } from "../constants/contact";

const HERO_REEL = [
  {
    id: "F8G5Ahiwha8",
    label: "Dowry Ceremony",
    title: "Joseph & Jennifer · A Cultural Masterpiece",
  },
  {
    id: "MUwanByN6hU",
    label: "Wedding Mass",
    title: "A Sacred Entry · Cinematic Wedding Coverage",
  },
  {
    id: "gBK5PG3RwSo",
    label: "Event Coverage",
    title: "Ndetani Village · Love & Legacy in Kitui",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const whatsappLink = getWhatsAppLink(
    "Hi! I'd like to book a shoot. Please share your availability and pricing."
  );

  const next = () => setIndex((i) => (i + 1) % HERO_REEL.length);
  const prev = () => setIndex((i) => (i - 1 + HERO_REEL.length) % HERO_REEL.length);

  // Auto-advance
  useEffect(() => {
    if (playing) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [playing]);

  const current = HERO_REEL[index];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white grain">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.15),transparent_55%)]" />
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-[#d4af37]/10 blur-[160px] rounded-full" />
        <div className="absolute -bottom-40 -right-32 w-[600px] h-[600px] bg-amber-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <Sparkles size={14} className="text-[#d4af37]" />
                <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-white/70 whitespace-nowrap">
                  Cinematic Videography & Photography
                </span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#d4af37] whitespace-nowrap">
                  4K / 6K Films
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-semibold leading-[1.02] tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
                Cinematic stories,
              </span>
              <br />
              <span className="italic text-white/95 font-light">
                captured beautifully.
              </span>
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-sm sm:text-base tracking-[0.2em] uppercase text-white/50"
            >
              Videography · Photography
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-white/65 leading-relaxed"
            >
              We turn weddings, dowry ceremonies, brand stories, project documentation, and once-in-a-lifetime events into timeless cinematic films ,captured and delivered in stunning 4K & 6K Visuals
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#f5e6c8] via-[#d4af37] to-[#c9a227] shadow-[0_10px_40px_-10px_rgba(212,175,55,0.7)] hover:shadow-[0_20px_60px_-10px_rgba(212,175,55,0.9)] hover:scale-[1.03] active:scale-[0.98] transition"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition"
              >
                <Calendar size={20} className="text-[#d4af37]" />
                <span>Book a Shoot</span>
              </a>
            </motion.div>

            {/* Urgency subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-white/60"
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Booking dates filling fast
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Replies within 5 minutes</span>
            </motion.div>
          </div>

          {/* RIGHT — video carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            {/* Card */}
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_40px_120px_-30px_rgba(212,175,55,0.4)]">
              <AnimatePresence mode="wait">
                <motion.button
                  key={current.id}
                  type="button"
                  onClick={() => setPlaying(true)}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full group"
                  aria-label={`Play ${current.title}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${current.id}/maxresdefault.jpg`}
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${current.id}/hqdefault.jpg`;
                    }}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Play indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.6)] group-hover:scale-110 transition">
                      <Play size={28} className="ml-1.5" />
                    </div>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-left">
                    <span className="inline-block text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">
                      {current.label}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-white leading-snug">
                      {current.title}
                    </h3>
                  </div>
                </motion.button>
              </AnimatePresence>

              {/* Counter */}
              <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs text-white/80 tracking-widest">
                {String(index + 1).padStart(2, "0")} / {String(HERO_REEL.length).padStart(2, "0")}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous video"
              className="absolute left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next video"
              className="absolute right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition"
            >
              <ChevronRight size={22} />
            </button>

            {/* Dot indicators */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {HERO_REEL.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-10 bg-[#d4af37]"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* Lightbox player */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlaying(false)}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <button
              type="button"
              onClick={() => setPlaying(false)}
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
                  src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0`}
                  title={current.title}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 text-center">
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#d4af37]">
                  {current.label}
                </span>
                <h4 className="mt-1 font-display text-xl md:text-2xl font-semibold text-white">
                  {current.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
