import React from "react";
import { ShieldCheck, Phone, Mail, MessageSquare, ChevronDown } from "lucide-react";

function ContactGrid() {
  const phone = "+254 713 919 051"; //
  const email = "info@munitmedia.co.ke"; //

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-start py-20 px-6 max-w-7xl mx-auto">
      
      {/* LEFT COLUMN: Trust & Contact Info */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-blue-50 p-12 rounded-[3.5rem] space-y-8 border border-blue-100">
          <h3 className="text-3xl font-black text-gray-900 leading-tight">
            Why Choose M-Unit Media?
          </h3>
          <ul className="space-y-5">
            {[
              "15+ Years Industry Experience",
              "Cinematic 4K Video Quality",
              "Advanced Lighting & Audio Equipment",
              "Fast Turnaround on Delivery",
              "Certified Professionals Only"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 font-bold text-gray-700">
                <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Quick Links */}
        <div className="space-y-4">
          <a href={`tel:${phone}`} className="flex items-center gap-6 bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-500 p-4 rounded-2xl text-white">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-gray-400 tracking-widest">Call Us Anytime</p>
              <p className="text-xl font-black text-gray-900">{phone}</p>
            </div>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-6 bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-600 p-4 rounded-2xl text-white">
              <span className="flex items-center justify-center h-7 w-7"><Mail size={28} /></span>
            </div>
            <div>
              <p className="text-xs font-black uppercase text-gray-400 tracking-widest">Email Us</p>
              <p className="text-xl font-black text-gray-900">{email}</p>
            </div>
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: The Quote Form */}
      <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-[0_50px_100px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-5 mb-12">
          <div className="bg-blue-600 p-4 rounded-2xl text-white">
            <MessageSquare size={32} />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-gray-900">Quick Quote Request</h2>
            <p className="text-gray-500 font-bold italic">Instant response via WhatsApp</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-black text-gray-900 ml-2">Your Name *</label>
              <input type="text" placeholder="e.g., John Kamau" className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none font-bold transition-all" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black text-gray-900 ml-2">Email Address *</label>
              <input type="email" placeholder="john@example.com" className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none font-bold transition-all" required />
            </div>
          </div>

          {/* CORRECTED DROPDOWN */}
          <div className="space-y-2 relative">
            <label className="text-sm font-black text-gray-900 ml-2">Service Required *</label>
            <div className="relative">
              <select className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none font-bold transition-all appearance-none cursor-pointer" required>
                <option value="">Select a service...</option>
                <option value="wedding">Wedding Videography & Photography</option>
                <option value="corporate">Corporate Brand Shoots</option>
                <option value="events">Event Coverage (Birthdays/Baby Showers)</option>
                <option value="dowry">Dowry / Traditional Ceremonies</option>
                <option value="editing">Professional Video Editing</option>
                <option value="other">Other / Custom Project</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={24} />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-8 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Get Quote Now
          </button>
          
          <p className="text-center text-gray-400 font-bold text-sm">
            Redirecting to WhatsApp. Typically respond within 5 minutes!
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactGrid;