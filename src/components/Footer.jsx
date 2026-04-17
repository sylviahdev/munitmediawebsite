import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black tracking-tighter uppercase mb-2">
              M-Unit Media
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Cinematic storytelling and digital production based in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-300">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#videos" className="hover:text-blue-400 transition">Portfolio</a>
            <a href="mailto:munitmedia.ke@gmail.com" className="text-blue-400 hover:underline transition">
              munitmedia.ke@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} M-Unit Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;