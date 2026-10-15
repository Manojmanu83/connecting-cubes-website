import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CoverageSection } from '@/components/sections/CoverageSection';
import { CargoInsuranceSection } from '@/components/sections/CargoInsuranceSection';
import { ContactQuoteSection } from '@/components/sections/ContactQuoteSection';
import { Footer } from '@/components/common/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section with dynamic tracking/quote widget */}
        <HeroSection />

        {/* 2. Trust and Confirmed Metrics */}
        <TrustSection />

        {/* 3. Transportation Services */}
        <ServicesSection />

        {/* 4. Why Businesses Choose Connecting Cubes */}
        <WhyChooseUsSection />

        {/* 5. 5-Step How It Works Workflow */}
        <HowItWorksSection />

        {/* 6. Pan-India Network Coverage */}
        <CoverageSection />

        {/* 7. Cargo Insurance Protection */}
        <CargoInsuranceSection />

        {/* 8. Quotation & Requirement Consultation */}
        <ContactQuoteSection />
      </main>

      {/* Deep Navy Corporate Footer */}
      <Footer />
    </div>
  );
}
