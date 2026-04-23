import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function CompanyOverview() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-32 bg-white">

      <div className="grid lg:grid-cols-12 gap-20 items-center">

        {/* ================= LEFT: TEXT ================= */}
        <div className="lg:col-span-5 space-y-12">

          {/* BADGE + SINCE 2010 */}
          <div className="space-y-3">

            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 bg-[#E6F0FF] text-[#0066FF] px-6 py-3 rounded-full border border-blue-100">
                <span className="w-2.5 h-2.5 bg-[#0066FF] rounded-full animate-pulse"></span>
                <span className="font-bold text-sm tracking-wide">About Us</span>
              </div>
            </div>

            {/* SINCE 2010 (NEW) */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-50 border border-gray-100">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <p className="text-xs font-bold text-gray-600 tracking-[0.3em] uppercase">
                Since 2010
              </p>
            </div>

          </div>

          {/* MAIN TEXT */}
          <div className="relative">
            <p className="text-gray-600 text-2xl md:text-3xl leading-relaxed italic flex items-start gap-4">
              <Sparkles className="text-blue-500 shrink-0 mt-2" size={32} />
              With unmatched expertise and a commitment to excellence, we deliver exceptional quality videography and photography services.
            </p>
          </div>

          {/* STATS */}
          <div className="flex gap-16 pt-10 border-t border-gray-100">

            <div>
              <p className="text-[#0066FF] text-7xl font-black tracking-tighter">
                500+
              </p>
              <p className="text-gray-400 font-bold text-sm uppercase tracking-[0.2em] mt-3">
                Projects
              </p>
            </div>

            <div className="w-[1.5px] bg-gray-200 h-20 self-center"></div>

            <div>
              <p className="text-[#0066FF] text-7xl font-black tracking-tighter">
                15+
              </p>
              <p className="text-gray-400 font-bold text-sm uppercase tracking-[0.2em] mt-3">
                Experience
              </p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT: VIDEO ================= */}
        <div className="lg:col-span-7">

          <motion.div whileHover={{ scale: 1.02 }} className="relative">

            {/* VIDEO CONTAINER */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] aspect-video border-[10px] border-white z-10">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LbCw20JX358?autoplay=1&mute=1&loop=1&playlist=LbCw20JX358&controls=0&rel=0&modestbranding=1"
                title="Showcase Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-8 -right-4 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 z-20 min-w-[280px]">

              <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">
                Featured Work
              </p>

              <p className="text-gray-900 font-black text-2xl">
                Project Showcase 2026
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CompanyOverview;