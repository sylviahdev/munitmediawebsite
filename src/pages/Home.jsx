import React from "react";
import Hero from "../components/Hero";
import CompanyOverview from "../components/CompanyOverview";
import Services from "../components/Services";
import Videos from "../components/Videos";
import Testimonials from "../components/Testimonials";
import ContactGrid from "../components/ContactGrid";
import Footer from "../components/Footer";
import SectionWrapper from "../components/ui/SectionWrapper";
import CTASection from "../components/ui/CTASection";
import StickyContactBar from "../components/StickyContactBar";
import { SPACING } from "../constants/spacing";

/**
 * Home Page - Complete landing page with strategic user journey
 *
 * Page Structure:
 * 1. Hero - Impact & first impression
 * 2. CompanyOverview - Credibility & validation
 * 3. Services - Offering details
 * 4. Videos - Social proof & portfolio
 * 5. Testimonials - Client testimonials for trust building
 * 6. CTA Section - Final conversion push
 * 7. Footer - Contact info & navigation
 * 8. StickyContactBar - Mobile-only floating contact (mobile only)
 */
function Home() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <div className={`${SPACING.sectionSpacing} pb-24`}>
        {/* ================= HERO ================= */}
        <SectionWrapper id="home" showTopPadding={true}>
          <Hero />
        </SectionWrapper>

        {/* ================= ABOUT ================= */}
        <SectionWrapper id="about">
          <CompanyOverview />
        </SectionWrapper>

        {/* ================= SERVICES ================= */}
        <SectionWrapper id="services">
          <Services />
        </SectionWrapper>

        {/* ================= PORTFOLIO ================= */}
        <SectionWrapper id="portfolio">
          <Videos />
        </SectionWrapper>

        {/* ================= TESTIMONIALS ================= */}
        <SectionWrapper id="testimonials" animateOnScroll={false}>
          <Testimonials />
        </SectionWrapper>

        {/* ================= CTA SECTION ================= */}
        <CTASection />

        {/* ================= CONTACT FORM ================= */}
        <SectionWrapper id="contact">
          <ContactGrid />
        </SectionWrapper>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= STICKY CONTACT BAR (Mobile Only) ================= */}
      <StickyContactBar />
    </main>
  );
}

export default Home;