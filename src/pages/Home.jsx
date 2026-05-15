import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import QuickBooking from "../components/QuickBooking";
import Portfolio from "../components/Portfolio";
import LatestVideos from "../components/LatestVideos";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />
      <Services />
      <QuickBooking />
      <Portfolio />
      <LatestVideos />
      <Testimonials />
      <FinalCTA />
      <LocationMap />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
