import React from "react";
import Hero from "../components/Hero";
import CompanyOverview from "../components/CompanyOverview"; // Added this
import Services from "../components/Services";
import Videos from "../components/Videos";
import Footer from "../components/Footer"; // Don't forget the footer!

function Home() {
  return (
    <>
      {/* 1. Impact: Video & Main Headline */}
      <Hero />
      
      {/* 2. Validation: Stats & Trust Badges */}
      <CompanyOverview />
      
      {/* 3. Offer: What you provide */}
      <Services />
      
      {/* 4. Proof: Video Gallery */}
      <Videos />

      {/* 5. Conversion: Map & Contact Info */}
      <Footer />
    </>
  );
}

export default Home;