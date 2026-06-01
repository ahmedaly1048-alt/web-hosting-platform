"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoWall from "./components/LogoWall";
import DomainSearch from "./components/DomainSerach";
import ServicesSection from "./components/ServicesSection";
import ServicesOverview from "./components/ServicesOverview";
import SeamlessFeatureSection from "./components/Section1";
import AboutAdvantagesSection from "./components/Section2";
import UnlimitedHostingSection from "./components/Section3";
import FreeSSLSection from "./components/Section4";
import GameServersSection from "./components/Section5";
import PremiumSpeedSection from "./components/Section6";
import FAQSection from "./components/FAQ";
import ReviewsSection from "./components/ReviewSection";
import Footer from "./components/Footer";
import RegisterComponent from "./components/Register";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <main className="w-full min-h-screen bg-[#fafcfd] relative">
      {/* Pass callback trigger directly to Navbar */}
      <Navbar onRegisterClick={openRegisterModal} /> 
      
      <HeroSection />
      <LogoWall />
      <DomainSearch />
      <ServicesSection />
      <ServicesOverview />
      <SeamlessFeatureSection />
      <AboutAdvantagesSection />
      <UnlimitedHostingSection />
      <FreeSSLSection />
      <GameServersSection />
      <PremiumSpeedSection />
      <FAQSection />
      <ReviewsSection />
      <Footer />

      {/* --- PREMIUM REGISTER SHEET PORTAL --- */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur Layer */}
          <div 
            className="absolute inset-0 bg-[#020914]/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
            onClick={closeRegisterModal}
          />
          
          {/* Form Content Wrapper Modal Card */}
          <div className="w-full max-w-[1100px] relative z-10 rounded-[2rem] overflow-hidden shadow-2xl scale-95 md:scale-100 transition-all duration-300 animate-in fade-in zoom-in-95">
            {/* Direct Close Portal Trigger Box */}
            <button 
              onClick={closeRegisterModal}
              className="absolute top-5 right-5 md:right-6 md:top-6 z-50 text-slate-400 hover:text-slate-900 bg-white/80 hover:bg-white p-2 rounded-full border border-slate-100 shadow-sm transition-all hover:rotate-90 duration-200 cursor-pointer text-xs flex items-center justify-center w-8 h-8 font-sans"
            >
              ✕
            </button>
            
            {/* Render Component Container directly omitting its layout orbs */}
            <RegisterComponent isModal={true} />
          </div>
        </div>
      )}
    </main>
  );
}