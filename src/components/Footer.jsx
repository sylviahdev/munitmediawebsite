import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import {
  CONTACT,
  SOCIAL_LINKS,
  getWhatsAppLink,
  getEmailLink,
  getPhoneLink,
} from "../constants/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-black text-white border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5e6c8] via-[#d4af37] to-[#c9a227] flex items-center justify-center text-black font-extrabold shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                M
              </div>
              <div className="text-lg font-bold tracking-tight">
                M-UNIT{" "}
                <span className="bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
                  MEDIA
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Cinematic videography & professional photography for businesses,
              brands, and individuals across Kenya.
            </p>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-[#f5e6c8] via-[#d4af37] to-[#c9a227] hover:scale-105 transition"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-white/70">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "testimonials", label: "Testimonials" },
                { id: "contact", label: "Contact" },
              ].map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="hover:text-[#d4af37] transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-3 hover:text-[#d4af37] transition"
                >
                  <Phone size={16} className="text-[#d4af37]" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={getEmailLink()}
                  className="flex items-center gap-3 hover:text-[#d4af37] transition break-all"
                >
                  <Mail size={16} className="text-[#d4af37] shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={getEmailLink(CONTACT.emailAlt)}
                  className="flex items-center gap-3 hover:text-[#d4af37] transition break-all"
                >
                  <Mail size={16} className="text-[#d4af37] shrink-0" />
                  {CONTACT.emailAlt}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#d4af37]" />
                {CONTACT.location}
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {[
                { href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { href: SOCIAL_LINKS.youtube, label: "YouTube" },
                { href: SOCIAL_LINKS.facebook, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 text-white/70 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} M-Unit Media. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase">
            Crafted with care · Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
