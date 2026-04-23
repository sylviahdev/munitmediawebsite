import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const whatsappQuoteLink =
    "https://wa.me/254713919051?text=Hi%20M-Unit%20Media,%20I'd%20like%20to%20get%20a%20quote%20for%20video%20coverage.";

  // Scroll Spy
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
      {/* ================= TOP CONTACT BAR ================= */}
      <div className="bg-slate-900 text-white text-xs py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* LEFT CONTACT INFO */}
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <Mail size={14} />
              munitmedia.ke@gmail.com
            </span>

            <span className="flex items-center gap-2">
              <Phone size={14} />
              0713919051
            </span>

            <span className="flex items-center gap-2">
              <Phone size={14} />
              0758668360
            </span>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="text-slate-300 font-medium tracking-wide text-right">
            Premium Videography & Photography Services in Ekalakala, Machakos
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-10 w-auto" alt="logo" />

            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-black text-lg text-slate-900">
                M-UNIT <span className="text-blue-600">MEDIA</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500">
                Weddings • Funerals • Events
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">

            {["home", "services", "videos", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className={linkClass(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {active === item && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full"></span>
                )}
              </a>
            ))}

            {/* CTA */}
            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Book Now
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-6 shadow-xl">

            {["home", "services", "videos", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-800"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <a
              href={whatsappQuoteLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white py-3 rounded-xl text-center font-semibold"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;