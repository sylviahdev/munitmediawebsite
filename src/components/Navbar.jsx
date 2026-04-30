import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ✅ CLEAN LINKS
  const whatsappQuoteLink =
    "https://wa.me/254713919051?text=Hi%20M-Unit%20Media,%20I'd%20like%20to%20get%20a%20quote%20for%20video%20coverage.";

  const youtubeLink = "https://www.youtube.com/@m-unitmedia7055";
  const facebookLink = "https://www.facebook.com/munitmedia";

  // ================= SCROLL SPY =================
  useEffect(() => {
    const sections = ["home", "services", "videos", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const top = el.offsetTop - 120;
        const height = el.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `relative text-sm font-semibold transition ${
      active === section
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <>
      {/* ================= TOP BAR (DESKTOP ONLY) ================= */}
      <div className="bg-slate-900 text-white text-xs py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* LEFT */}
          <div className="flex items-center gap-6">

            <span className="flex items-center gap-2">
              <Mail size={14} />
              munitmedia.ke@gmail.com
            </span>

            <span className="flex items-center gap-2">
              <Phone size={14} />
              0713919051
            </span>

            {/* YOUTUBE */}
            <a href={youtubeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-red-400">
              <svg width="14" height="14" fill="currentColor" className="text-red-500">
                <path d="M23.498 6.186a2.95 2.95 0 0 0-2.08-2.09C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.418.596A2.95 2.95 0 0 0 .502 6.186A30.6 30.6 0 0 0 0 12a30.6 30.6 0 0 0 .502 5.814 2.95 2.95 0 0 0 2.08 2.09C4.5 20.5 12 20.5 12 20.5s7.5 0 9.418-.596a2.95 2.95 0 0 0 2.08-2.09A30.6 30.6 0 0 0 24 12a30.6 30.6 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
              YouTube
            </a>

            {/* FACEBOOK */}
            <a href={facebookLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400">
              <svg width="14" height="14" fill="currentColor" className="text-blue-500">
                <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99h-2.3V12h2.3V9.8c0-2.28 1.35-3.54 3.42-3.54.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.69-1.47 1.4V12h2.5l-.4 2.88h-2.1v6.99A10 10 0 0 0 22 12z"/>
              </svg>
              Facebook
            </a>

          </div>

          {/* RIGHT */}
          <div className="text-slate-300 text-right">
            Premium Videography & Photography Services
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-10" alt="logo" />
            <div className="hidden sm:block">
              <div className="font-black text-lg">
                M-UNIT <span className="text-blue-600">MEDIA</span>
              </div>
              <div className="text-[10px] tracking-widest text-gray-500">
                Weddings • Events • Funerals
              </div>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "services", "videos", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className={linkClass(item)}>
                {item}
              </a>
            ))}

            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              Book Now
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden px-6 py-6 flex flex-col gap-5 bg-white shadow-lg">

            {["home", "services", "videos", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}

            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white py-3 rounded-lg text-center"
            >
              Book Now
            </a>

            {/* SOCIAL ICONS (VISIBLE ON PHONE) */}
            <div className="flex justify-center gap-6 pt-4">

              <a href={youtubeLink} target="_blank" rel="noreferrer">
                <svg width="26" height="26" fill="currentColor" className="text-red-500">
                  <path d="M23.498 6.186a2.95 2.95 0 0 0-2.08-2.09C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.418.596A2.95 2.95 0 0 0 .502 6.186A30.6 30.6 0 0 0 0 12a30.6 30.6 0 0 0 .502 5.814 2.95 2.95 0 0 0 2.08 2.09C4.5 20.5 12 20.5 12 20.5s7.5 0 9.418-.596a2.95 2.95 0 0 0 2.08-2.09A30.6 30.6 0 0 0 24 12a30.6 30.6 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
                </svg>
              </a>

              <a href={facebookLink} target="_blank" rel="noreferrer">
                <svg width="26" height="26" fill="currentColor" className="text-blue-500">
                  <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99h-2.3V12h2.3V9.8c0-2.28 1.35-3.54 3.42-3.54.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.69-1.47 1.4V12h2.5l-.4 2.88h-2.1v6.99A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

            </div>

          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;