import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Check } from "lucide-react";
import {
  CONTACT,
  getWhatsAppLink,
  getPhoneLink,
} from "../constants/contact";

const PACKAGES = [
  {
    key: "bronze",
    name: "Bronze Package",
    tagline: "Essential coverage",
    accent: "from-amber-700 via-amber-600 to-amber-800",
    chipBg: "bg-amber-700/15 text-amber-300 border-amber-600/30",
    items: [
      "1 Videographer",
      "1 Photographer",
      "Full Event Coverage",
      "Full HD Video",
      "Edited Photos & Video",
      "YouTube Upload",
    ],
  },
  {
    key: "silver",
    name: "Silver Package",
    tagline: "Most popular",
    accent: "from-slate-300 via-white to-slate-400",
    chipBg: "bg-white/10 text-white border-white/20",
    items: [
      "1 Videographer",
      "2 Photographers",
      "Pre & Event Coverage",
      "4K Video Quality",
      "Edited Photos & Video",
      "Photo Album (200 prints)",
      "YouTube Upload",
    ],
  },
  {
    key: "gold",
    name: "Gold Package",
    tagline: "Flagship cinematic experience",
    accent: "from-[#f5e6c8] via-[#d4af37] to-[#c9a227]",
    chipBg: "bg-[#d4af37]/15 text-[#d4af37] border-[#d4af37]/30",
    items: [
      "3 Videographers",
      "2 Photographers",
      "Drone Coverage",
      "Full Event Coverage",
      "4K / 6K Video Quality",
      "Edited Photos & Video",
      "Premium Photo Album",
      "Mounted Portrait",
      "YouTube Upload",
    ],
  },
];

const EVENT_TYPES = [
  "Wedding",
  "Dowry Ceremony",
  "Corporate Event",
  "Birthday / Party",
  "Brand Shoot / Promo",
  "Memorial Service",
  "Portrait Session",
  "Live Streaming",
  "Other",
];

export default function QuickBooking() {
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [packageKey, setPackageKey] = useState("silver");

  const selectedPackage = useMemo(
    () => PACKAGES.find((p) => p.key === packageKey) || PACKAGES[1],
    [packageKey]
  );

  const whatsappLink = useMemo(() => {
    const lines = [
      "Hi M-Unit Media! I'd like to book a shoot.",
      "",
      `*Package:* ${selectedPackage.name}`,
      eventType ? `*Event Type:* ${eventType}` : null,
      date ? `*Date:* ${date}` : null,
      location ? `*Location:* ${location}` : null,
      phone ? `*Phone:* ${phone}` : null,
      "",
      "Please share availability and pricing. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");
    return getWhatsAppLink(lines);
  }, [selectedPackage, eventType, date, location, phone]);

  const inputBase =
    "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]/60 focus:bg-white/[0.06] transition";

  return (
    <section
      id="booking"
      className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/8 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-6">
              Premium Videography Studio
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-white via-[#f5e6c8] to-[#d4af37] bg-clip-text text-transparent">
                Top Professional
              </span>
              <br />
              <span className="text-white/95">Videography</span>
              <br />
              <span className="italic font-light text-white/70">
                & Photography Services
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base md:text-lg text-white/65 leading-relaxed">
              We capture your moments with cinematic precision and refined
              artistry — delivering premium 4K / 6K visuals that transform your
              story into a timeless masterpiece.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#f5e6c8] via-[#d4af37] to-[#c9a227] shadow-[0_10px_40px_-10px_rgba(212,175,55,0.7)] hover:scale-[1.03] active:scale-[0.98] transition"
              >
                <MessageCircle size={18} />
                Book via WhatsApp
              </a>

              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition"
              >
                <Phone size={18} className="text-[#d4af37]" />
                {CONTACT.phoneDisplay}
              </a>
            </div>

            {/* Package selector chips */}
            <div className="mt-12">
              <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-4">
                Choose your package
              </p>
              <div className="flex flex-wrap gap-3">
                {PACKAGES.map((p) => {
                  const active = p.key === packageKey;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setPackageKey(p.key)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium border transition ${
                        active
                          ? `${p.chipBg} shadow-[0_8px_24px_-8px_rgba(212,175,55,0.4)]`
                          : "bg-white/[0.03] text-white/60 border-white/10 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-md p-6 md:p-8 shadow-[0_40px_120px_-30px_rgba(212,175,55,0.3)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Quick Booking
              </h3>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37]">
                {selectedPackage.tagline}
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappLink, "_blank", "noreferrer");
              }}
              className="space-y-3.5"
            >
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className={inputBase}
                aria-label="Event type"
              >
                <option value="" className="bg-neutral-900">
                  Event Type
                </option>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-neutral-900">
                    {t}
                  </option>
                ))}
              </select>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputBase}
                aria-label="Event date"
              />

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className={inputBase}
                aria-label="Location"
              />

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className={inputBase}
                aria-label="Phone number"
              />

              <select
                value={packageKey}
                onChange={(e) => setPackageKey(e.target.value)}
                className={inputBase}
                aria-label="Package"
              >
                {PACKAGES.map((p) => (
                  <option key={p.key} value={p.key} className="bg-neutral-900">
                    {p.name}
                  </option>
                ))}
              </select>

              {/* Package details */}
              <motion.div
                key={selectedPackage.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <p
                  className={`font-semibold text-sm mb-3 bg-gradient-to-r ${selectedPackage.accent} bg-clip-text text-transparent`}
                >
                  {selectedPackage.name} includes:
                </p>
                <ul className="space-y-2">
                  {selectedPackage.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 text-[#d4af37] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-[#f5e6c8] via-[#d4af37] to-[#c9a227] shadow-[0_10px_30px_-10px_rgba(212,175,55,0.7)] hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.9)] hover:scale-[1.01] active:scale-[0.99] transition"
              >
                <MessageCircle size={18} />
                Book a shoot
              </button>

              <p className="text-center text-[11px] text-white/40 pt-1">
                Opens WhatsApp with your booking details pre-filled
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
