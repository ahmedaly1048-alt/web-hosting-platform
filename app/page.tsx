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
import Footer from "./components/Footer";
import ReviewsSection from "./components/ReviewSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#fafcfd]">
      {/* Dynamic Navigation Architecture Layer */}
      <Navbar /> 
      
      {/* Interactive Hero Carousel Element */}
      <HeroSection />

      {/* Infinite Auto-Sliding Infrastructure Partners Wall */}
      <LogoWall />

      {/* High-Conversion Domain Search & Extension Pricing Section */}
      <DomainSearch />

      {/* Grid Composition Showcase Packages */}
      <ServicesSection />

      {/* Constellation Network Services Overview */}
      <ServicesOverview />

      {/* Seamless Fast Infrastructure Copy Block */}
      <SeamlessFeatureSection />

      {/* Advantages Checkmark and Trophy Section */}
      <AboutAdvantagesSection />

      {/* Bandwidth Optimization Info Block */}
      <UnlimitedHostingSection />

      {/* Secure Browser Encryption Block */}
      <FreeSSLSection />

      {/* Gaming Low-Ping Framework Layout */}
      <GameServersSection />

      {/* High-Speed Speedometer Metrics Viewport */}
      <PremiumSpeedSection />

      {/* Fluid Interactive Question Dropdown Panel */}
      <FAQSection />

      {/* Social Verification Matrix Section */}
      <ReviewsSection />

      {/* Layer 3 Compliance Corporate Footer */}
      <Footer />
    </main>
  );
}