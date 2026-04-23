import React from "react";
import Hero from "../components/Hero";
import CompanyOverview from "../components/CompanyOverview";
import Services from "../components/Services";
import Videos from "../components/Videos";
import ContactGrid from "../components/ContactGrid";

function Home() {
  const email = "munitmedia.ke@gmail.com";
  const phoneDisplay = "0713919051 / 0758668360";
  const phoneCall = "0713919051";
  const whatsappNumber = "254713919051";

  return (
    <main className="w-full bg-white overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-6 space-y-40 md:space-y-64 pb-24">

        {/* ================= HERO ================= */}
        <section id="home" className="pt-10">
          <Hero />
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about">
          <CompanyOverview />
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services">
          <Services />
        </section>

        {/* ================= VIDEOS ================= */}
        <section id="videos">
          <Videos />
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact">
          <ContactGrid />
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="relative bg-[#020617] text-white rounded-[4rem] p-14 md:p-28 text-center overflow-hidden shadow-2xl">

          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px]" />

          <div className="relative z-10 space-y-10">

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Capture life’s most important moments with cinematic precision
            </h2>

            <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto">
              Weddings, graduations, funerals, baby showers, corporate events & more — professionally filmed and edited in cinematic quality.
            </p>

            <div className="flex flex-col md:flex-row gap-5 justify-center items-center pt-4">

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20M-Unit%20Media%2C%20I%20want%20to%20book%20a%20video%20or%20photo%20shoot.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition"
              >
                WhatsApp Booking
              </a>

              <a
                href={`tel:${phoneCall}`}
                className="bg-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition"
              >
                Call Now
              </a>

            </div>

            <a
              href={`mailto:${email}`}
              className="inline-block text-white border-b-2 border-blue-500 text-lg font-bold mt-6 hover:text-blue-300 transition"
            >
              {email}
            </a>

          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="pt-20 border-t border-gray-100">

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT INFO */}
            <div className="space-y-6">

              <h3 className="font-black text-gray-900 text-3xl tracking-tight">
                M-Unit Media
              </h3>

              <p className="text-gray-600 text-lg">
                Premium Videography & Photography Services in Ekalakala, Machakos and beyond.
              </p>

              <div className="text-gray-500 text-sm space-y-2">
                <p>📧 {email}</p>
                <p>📞 {phoneDisplay}</p>
                <p>📍 Ekalakala, Machakos County, Kenya</p>
              </div>

              <p className="text-gray-400 text-sm pt-4">
                © {new Date().getFullYear()} M-Unit Media. All rights reserved.
              </p>

            </div>

            {/* RIGHT MAP */}
            <div className="w-full h-[340px] rounded-2xl overflow-hidden shadow-xl border">

              <iframe
                title="M-Unit Media Studio Location - Ekalakala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.247390435175!2d37.47003082582583!3d-0.9692987353636066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1825fd536a29b977%3A0x53370fcb8504981d!2sEkalakala!5e0!3m2!1sen!2ske!4v1776948709532!5m2!1sen!2ske"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

          {/* NAV LINKS */}
          <div className="mt-14 flex flex-wrap gap-8 font-bold text-gray-800 text-sm uppercase tracking-widest border-t pt-8">

            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#videos" className="hover:text-blue-600">Portfolio</a>

            <a
              href="https://youtube.com/@m-unitmedia7055"
              target="_blank"
              rel="noreferrer"
              className="text-red-600 hover:scale-105 transition"
            >
              YouTube
            </a>

          </div>

        </footer>

      </div>
    </main>
  );
}

export default Home;