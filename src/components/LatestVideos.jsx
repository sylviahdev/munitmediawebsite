import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowUpRight } from "lucide-react";

const CHANNEL_ID = "UCqRSfyg7WO5bt9FtGZBg-zg";
const CHANNEL_URL = "https://www.youtube.com/@m-unitmedia7055";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const RSS2JSON = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;
const CACHE_KEY = "munit_latest_videos_v1";
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

const FALLBACK = [
  { id: "F8G5Ahiwha8", title: "Joseph & Jennifer's Dowry Ceremony", pubDate: "" },
  { id: "MUwanByN6hU", title: "A Sacred Wedding Mass", pubDate: "" },
  { id: "S6qUJl5RxJQ", title: "Thomas & Catherine · Kamba Tradition", pubDate: "" },
  { id: "gBK5PG3RwSo", title: "Ndetani Village · Love & Legacy", pubDate: "" },
  { id: "LbCw20JX358", title: "Everlyn Wambui · Muumandu", pubDate: "" },
  { id: "UCy6owErxNk", title: "Kwawanzilu Prayer Day 2026", pubDate: "" },
];

function extractVideoId(item) {
  // rss2json puts the watch URL in `link` and the video id is the v= param
  try {
    const url = new URL(item.link);
    return url.searchParams.get("v");
  } catch {
    return null;
  }
}

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function LatestVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Try cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.ts < CACHE_TTL_MS && parsed.videos?.length) {
            if (!cancelled) {
              setVideos(parsed.videos);
              setLoading(false);
            }
            return;
          }
        }
      } catch {
        // ignore cache errors
      }

      try {
        const res = await fetch(RSS2JSON);
        if (!res.ok) throw new Error("rss fetch failed");
        const data = await res.json();
        if (data.status !== "ok" || !Array.isArray(data.items)) {
          throw new Error("rss invalid response");
        }
        const mapped = data.items
          .map((item) => {
            const id = extractVideoId(item);
            if (!id) return null;
            return {
              id,
              title: item.title,
              pubDate: item.pubDate || "",
              link: item.link,
            };
          })
          .filter(Boolean)
          .slice(0, 8);

        if (mapped.length && !cancelled) {
          setVideos(mapped);
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ ts: Date.now(), videos: mapped })
            );
          } catch {
            // ignore
          }
        } else if (!cancelled) {
          setVideos(FALLBACK);
        }
      } catch {
        if (!cancelled) setVideos(FALLBACK);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="latest"
      className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Ambient atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#d4af37]/8 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/6 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20"
        >
          <div>
            <span className="inline-block text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4">
              Fresh from the studio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Latest{" "}
              <span className="italic bg-gradient-to-r from-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
                Releases
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-white/60 text-lg leading-relaxed">
              Our newest cinematic films — pulled live from our YouTube channel
              the moment a new story drops.
            </p>
          </div>

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="group self-start inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 text-sm tracking-wide text-white/80 hover:text-white transition"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>Visit the channel</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video rounded-2xl bg-white/[0.03] border border-white/5 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((v, i) => (
              <motion.button
                key={v.id}
                type="button"
                onClick={() => setActive(v)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative text-left rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 hover:border-[#d4af37]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)] transition"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;
                    }}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition">
                      <Play
                        size={18}
                        className="ml-0.5 text-white group-hover:text-black transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="p-4">
                  <h3 className="text-sm md:text-[15px] font-medium text-white leading-snug line-clamp-2 min-h-[2.5rem]">
                    {v.title}
                  </h3>
                  {v.pubDate && (
                    <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-white/40">
                      {formatDate(v.pubDate)}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 text-center">
                <h4 className="font-display text-xl md:text-2xl font-semibold text-white">
                  {active.title}
                </h4>
                {active.pubDate && (
                  <p className="mt-2 text-xs tracking-[0.3em] uppercase text-white/50">
                    Released {formatDate(active.pubDate)}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
