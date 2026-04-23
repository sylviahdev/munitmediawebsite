import React from "react";
import { MapPin, Mail, Phone, Instagram, Facebook } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 pb-16 border-b border-gray-800">
          
          {/* LEFT: Contact & Branding */}
          <div>
            <h3 className="text-2xl font-black tracking-tighter mb-6 text-[#0066FF]">
              M-UNIT MEDIA
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-sm">
              Capturing Kenya’s most iconic moments with unmatched expertise and professional cinematic quality.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-[#0066FF]" size={20} />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-[#0066FF]" size={20} />
                <span>+254 713 919 051</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-[#0066FF]" size={20} />
                <span>info@munitmedia.co.ke</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#0066FF] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#0066FF] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT: The Map Container */}
          <div className="relative group min-w-0">
            <div className="w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[5/3] rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500">
              {/* UX Tip: Using an iframe for a live Google Map */}
              <iframe
                title="M-Unit Media Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17164871325!2d36.7643118552399!3d-1.303164166297312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1713361200000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm font-medium min-w-0">
            © {currentYear} M-Unit Media. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest min-w-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;