import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Play } from "lucide-react";

const videos = [
  {
    id: "LbCw20JX358",
    title: "Cinematic Showcase 2026",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Wedding Highlights Film",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Corporate Brand Story",
  },
];

function CompanyOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-32">

      {/* Cinematic Gold Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-[#d4af37]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-[#c9a227]/10 blur-[200px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-28 items-start">

        {/* LEFT */}
        <div className="lg:col-span-5 space-y-14">

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
              <span className="text-xs tracking-[0.3em] uppercase text-white/70">About Us</span>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-white/5 border border-[#d4af37]/30 backdrop-blur-xl">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#f5e6c8]">Since 2010</p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/75 text-2xl md:text-3xl leading-relaxed italic flex gap-4"
          >
            <Sparkles className="text-[#d4af37] shrink-0 mt-2" size={28} />
            <span>
With unmatched expertise and a commitment to excellence, we deliver exceptional quality videography and photography services.
            </span>
          </motion.p>

          {/* STATS */}
          <div className="flex gap-14 pt-10 border-t border-white/10">
            <div>
              <p className="text-[#d4af37] text-6xl font-extrabold">100+</p>
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] mt-3">Projects</p>
            </div>

            <div className="w-px h-20 bg-white/10" />

            <div>
              <p className="text-[#d4af37] text-6xl font-extrabold">15+</p>
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] mt-3">Experience</p>
            </div>
          </div>

          {/* YouTube Link */}
          <a
            href="https://www.youtube.com/@m-unitmedia7055"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <ExternalLink size={18} />
            <span className="text-sm tracking-wide">Visit YouTube Channel</span>
          </a>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 space-y-10">

          {/* Main Video */}
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LbCw20JX358?autoplay=1&mute=1&loop=1&playlist=LbCw20JX358&controls=0&rel=0"
              title="Main Showcase"
              allow="autoplay; encrypted-media"
            />
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-white opacity-80 group-hover:scale-110 transition" />
                </div>

                <div className="p-3">
                  <p className="text-xs text-white/80">{video.title}</p>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default CompanyOverview;
