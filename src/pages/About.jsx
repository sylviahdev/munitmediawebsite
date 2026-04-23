import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle background architecture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Cinematic Glow Accents */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#d4a847]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4a847]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center relative z-10">
        
        {/* LEFT: VISUAL SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
            <img 
              src="https://www.youtube.com/embed/LbCw20JX358" 
              alt="Cinematography"
              className="w-full h-full object-cover brightness-90"
            />
          </div>

          {/* Floating Luxury Badge */}
          <div className="absolute -bottom-8 -right-8 bg-white/[0.05] backdrop-blur-xl px-8 py-6 rounded-xl border border-white/10 shadow-xl">
            <p className="text-[#d4a847] text-xs tracking-widest uppercase font-bold mb-1">
              Featured Work
            </p>
            <p className="text-white font-bold text-lg">
              Project Showcase 2026
            </p>
          </div>
        </motion.div>

        {/* RIGHT: CONTENT & AUTHORITY */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#d4a847]" />
              <span className="text-[#d4a847] text-xs tracking-[0.3em] uppercase">
                About M-Unit Media
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] font-serif">
              We don’t just film.
              <br />
              <span className="italic text-[#d4a847]">We elevate.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-white/50 leading-relaxed max-w-2xl">
            <p>
              Based in Kenya, <strong className="text-white">M-Unit Media</strong> is a premium
              production house focused on cinematic storytelling that connects and inspires.
            </p>
            <p>
              From commercial campaigns to documentaries, we combine cutting-edge
              technology with artistic direction to deliver visual experiences
              that stand out in a crowded world.
            </p>
          </div>
          
          {/* VERIFIED STATS */}
          <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-10">
            <div>
              <p className="text-5xl font-black text-[#d4a847]">500+</p>
              <p className="text-xs text-white/40 uppercase tracking-widest mt-2">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#d4a847]">15+</p>
              <p className="text-xs text-white/40 uppercase tracking-widest mt-2">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}