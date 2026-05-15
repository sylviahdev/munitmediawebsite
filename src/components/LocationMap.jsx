import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../constants/contact";

const MAPS_QUERY = "Ekalakala, Machakos, Kenya";
const EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
const OPEN_IN_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

export default function LocationMap() {
  return (
    <section
      id="location"
      className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#d4af37]/8 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">
              Visit our studio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Find us in{" "}
              <span className="italic bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
                Ekalakala, Machakos
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-white/60 text-lg leading-relaxed">
              Based in Ekalakala, serving clients across Machakos, Nairobi,
              Makueni, Kitui, and beyond.
            </p>
          </div>

          <a
            href={OPEN_IN_MAPS}
            target="_blank"
            rel="noreferrer"
            className="group self-start inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#d4af37]/40 text-sm tracking-wide text-white/80 hover:text-white transition"
          >
            <MapPin size={16} className="text-[#d4af37]" />
            <span>Open in Maps</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-30px_rgba(212,175,55,0.3)]"
        >
          <iframe
            src={EMBED_SRC}
            title={`Map showing ${CONTACT.location}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="w-full h-[420px] md:h-[520px] grayscale-[0.2] contrast-[1.05]"
          />
        </motion.div>
      </div>
    </section>
  );
}
