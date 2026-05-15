import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Mail, Phone, ArrowUpRight } from "lucide-react";
import {
  CONTACT,
  SOCIAL_LINKS,
  getWhatsAppLink,
  getEmailLink,
  getPhoneLink,
} from "../constants/contact";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const whatsappLink = getWhatsAppLink();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const offsets = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        return el
          ? { id, top: el.getBoundingClientRect().top }
          : { id, top: Number.POSITIVE_INFINITY };
      });

      const current = offsets
        .filter((o) => o.top <= 140)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActive(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative text-sm font-medium tracking-wide transition ${
      active === id
        ? "text-[#d4af37]"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`hidden md:block border-b border-white/5 transition-all duration-500 ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-xs text-white/60">
          <div className="flex items-center gap-6">
            <a
              href={getEmailLink()}
              className="flex items-center gap-2 hover:text-[#d4af37] transition"
            >
              <Mail size={13} className="text-[#d4af37]" />
              <span>{CONTACT.email}</span>
            </a>
            <a
              href={getPhoneLink()}
              className="flex items-center gap-2 hover:text-[#d4af37] transition"
            >
              <Phone size={13} className="text-[#d4af37]" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="tracking-[0.2em] uppercase text-white/40">
              Cinematic Visuals · Machakos, Kenya
            </span>
            <span className="h-3 w-px bg-white/15" />
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 text-white/60 hover:text-[#d4af37] transition"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
              </svg>
              <span className="tracking-wide">YouTube</span>
              <ArrowUpRight
                size={12}
                className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5e6c8] via-[#d4af37] to-[#c9a227] flex items-center justify-center text-black font-extrabold shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
            M
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold tracking-tight text-base md:text-lg">
              M-UNIT{" "}
              <span className="bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
                MEDIA
              </span>
            </div>
            <div className="hidden sm:block text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Videography · Photography
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
              {link.label}
              {active === link.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-[#f5e6c8] via-[#d4af37] to-[#c9a227] shadow-[0_6px_24px_-6px_rgba(212,175,55,0.6)] hover:scale-105 transition"
          >
            <MessageCircle size={16} />
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition ${
                  active === link.id
                    ? "text-[#d4af37] bg-white/5"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-black bg-gradient-to-r from-[#f5e6c8] via-[#d4af37] to-[#c9a227]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
