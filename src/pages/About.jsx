import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-10">
      {/* Container with a soft background to separate it from the white sections */}
      <div className="bg-gray-50 rounded-[3rem] p-8 md:p-20 grid md:grid-cols-2 gap-16 items-center border border-gray-100 shadow-sm">
        
        {/* Left: Visual representation (Filmmaking vibe) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1492691523567-6170f0295dbd?auto=format&fit=crop&q=80" 
            alt="Cinematography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
        </motion.div>

        {/* Right: The Story */}
        <div>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">
            Our Identity
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-6 leading-tight">
            We don't just film.<br /> We <span className="italic text-blue-600">elevate</span>.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Based in Kenya, <strong>M-Unit Media</strong> is a full-service production house. We believe every brand has a cinematic story that deserves to be told with precision and soul.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From commercial ads to corporate documentaries, we combine cutting-edge technology with creative storytelling to make your vision stand out.
          </p>
          
          {/* Quick Stats for Trust */}
          <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
            <div>
              <p className="text-3xl font-black text-gray-900">50+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">100%</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Client Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}