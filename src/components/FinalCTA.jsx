import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Calendar } from "lucide-react";
import {
  CONTACT,
  getWhatsAppLink,
  getEmailLink,
} from "../constants/contact";

export default function FinalCTA() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden">
      {/* Cinematic gold atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#d4af37]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-700/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-md p-10 md:p-16"
        >
          <span className="inline-block text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">
            Let's Create Together
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Ready to capture your moments?{" "}
            <span className="bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
              Book your shoot today.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
            Whether it's a wedding, a brand campaign, or a cinematic promo —
            we'll bring your vision to life with the polish your story deserves.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#f5e6c8] via-[#d4af37] to-[#c9a227] shadow-[0_10px_40px_-10px_rgba(212,175,55,0.7)] hover:scale-[1.03] active:scale-[0.98] transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <a
              href={getEmailLink()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              <Mail size={20} className="text-[#d4af37]" />
              Email Us
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-white/60">
            <a
              href={getEmailLink()}
              className="hover:text-[#d4af37] transition"
            >
              {CONTACT.email}
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-[#d4af37]" />
              Limited slots available this season
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
