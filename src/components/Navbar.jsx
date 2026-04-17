import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Official WhatsApp Green: #25D366 | Darker Hover: #128C7E
  const whatsappQuoteLink = "https://wa.me/254713919051?text=Hi%20M-Unit%20Media,%20I'd%20like%20to%20get%20a%20quote%20for%20a%20video%20project.";

  // Scroll detection to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "videos", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `cursor-pointer transition-all duration-300 relative font-semibold ${
      active === section 
        ? "text-blue-600 scale-105" 
        : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <nav className="w-full backdrop-blur-lg bg-white/80 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-10 w-auto" alt="M-Unit Media" />
          <h1 className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block uppercase">
            M-Unit Media
          </h1>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#services" className={linkClass("services")}>Services</a>
          <a href="#videos" className={linkClass("videos")}>Portfolio</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
          
          {/* YouTube Action */}
          <a 
            href="https://www.youtube.com/@m-unitmedia7055" 
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-red-700 transition duration-300 flex items-center gap-2 text-sm shadow-sm"
          >
            Visit YouTube
          </a>

          {/* WHATSAPP GET QUOTE BUTTON */}
          <a 
            href={whatsappQuoteLink}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-white px-6 py-2 rounded-xl font-bold shadow-md shadow-green-100 hover:bg-[#128C7E] hover:scale-105 transition duration-300 text-center flex items-center gap-2"
          >
            Get Quote
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="absolute top-full left-0 w-full md:hidden px-6 py-8 flex flex-col gap-6 font-medium bg-white border-b shadow-2xl animate-in slide-in-from-top duration-300">
          <a href="#home" className="text-xl py-2 border-b border-gray-50 text-gray-900" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" className="text-xl py-2 border-b border-gray-50 text-gray-900" onClick={() => setOpen(false)}>Services</a>
          <a href="#videos" className="text-xl py-2 border-b border-gray-50 text-gray-900" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#contact" className="text-xl py-2 border-b border-gray-50 text-gray-900" onClick={() => setOpen(false)}>Contact</a>
          
          <div className="flex flex-col gap-4 pt-4">
            {/* Mobile Get Quote (WhatsApp) */}
            <a 
              href={whatsappQuoteLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-100 text-center flex items-center justify-center gap-2"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </a>
            <a 
              href="https://www.youtube.com/@m-unitmedia7055"
              className="text-center text-red-600 font-bold py-2"
              onClick={() => setOpen(false)}
            >
              Visit YouTube
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;