import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "../constants/contact";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = getWhatsAppLink(
    "Hi! I'd like to chat about booking a videography or photography session."
  );

  return (
    <>
      {/* Tooltip card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-6 z-50 w-[300px] max-w-[calc(100vw-3rem)] rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    Chat with us
                  </div>
                  <div className="text-[11px] text-white/80">
                    Typically replies in minutes
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-white/80 text-sm leading-relaxed">
                Hi 👋 Tell us about your event, brand, or shoot , we'll send
                pricing & availability right away.
              </p>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl transition"
              >
                <MessageCircle size={18} />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_10px_40px_-5px_rgba(16,185,129,0.6)] flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <MessageCircle size={26} className="relative" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
