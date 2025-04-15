
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import AppWalkthrough from "@/components/AppWalkthrough";
import PromotionSection from "@/components/PromotionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureShowcase />
        <AppWalkthrough />
        <PromotionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
