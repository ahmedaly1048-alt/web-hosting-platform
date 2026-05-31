"use client";

import React, { useState } from "react";
import { 
  Cloud, Shield, MapPin, HardDrive, Zap, Monitor, 
  Cpu, Layers, Radio
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface SlideData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  features: FeatureItem[];
  buttonText: string;
  startingPrice: string;
  discountedPrice: string;
  footerNote: string;
  rightGraphicsType: "vds-hosting" | "web-hosting";
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      badge: "Türkiye Location VDS Rental",
      titlePrefix: "Buy a VDS | ",
      titleHighlight: "Rent a Virtual Server",
      description: "DeHost Türkiye location-based VDS rental service is designed for your projects with NVMe disks, DDoS protection, automatic installation, Windows/Linux support, and a powerful virtual server infrastructure.",
      buttonText: "VDS Packages",
      startingPrice: "₺149.99",
      discountedPrice: "₺99.99",
      footerNote: "Experience low-latency virtual server usage with Türkiye-based NVMe VDS infrastructure.",
      rightGraphicsType: "vds-hosting",
      features: [
        { icon: <Cloud className="w-3.5 h-3.5 text-sky-500" />, text: "VDS Server" },
        { icon: <HardDrive className="w-3.5 h-3.5 text-sky-500" />, text: "NVMe Disk" },
        { icon: <Shield className="w-3.5 h-3.5 text-sky-500" />, text: "DDoS Protection" },
        { icon: <Zap className="w-3.5 h-3.5 text-sky-500" />, text: "Automatic Installation" },
        { icon: <MapPin className="w-3.5 h-3.5 text-sky-500" />, text: "Türkiye Location" },
        { icon: <Monitor className="w-3.5 h-3.5 text-sky-500" />, text: "Windows / Linux" },
      ]
    },
    {
      badge: "Linux and Reseller Hosting Service",
      titlePrefix: "Web ",
      titleHighlight: "Hosting Solutions",
      description: "With our web hosting services powered by Cloudlinux, Litespeed, and NVMe SSD drives, we deliver top-tier performance and guarantee high uptime thanks to our experienced team.",
      buttonText: "Hosting Packages",
      startingPrice: "₺109.99",
      discountedPrice: "₺69.99",
      footerNote: "Professional startup with cPanel + LiteSpeed + free SSL.",
      rightGraphicsType: "web-hosting",
      features: [
        { icon: <HardDrive className="w-3.5 h-3.5 text-sky-500" />, text: "Unlimited SSD Disk" },
        { icon: <Layers className="w-3.5 h-3.5 text-sky-500" />, text: "Weekly Backup" },
        { icon: <Cloud className="w-3.5 h-3.5 text-sky-500" />, text: "Unlimited Email" },
        { icon: <Radio className="w-3.5 h-3.5 text-sky-500" />, text: "Unlimited Traffic" },
        { icon: <Cpu className="w-3.5 h-3.5 text-sky-500" />, text: "Unlimited MySQL" },
        { icon: <Monitor className="w-3.5 h-3.5 text-sky-500" />, text: "cPanel Base" },
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full relative bg-gradient-to-b from-[#eef4f9] via-[#f4f7fa] to-[#fafcfd] text-slate-800 overflow-hidden select-none min-h-[520px] lg:min-h-[560px] flex items-center py-6 lg:py-8 font-sans">
      
      {/* --- ENHANCED BACKDROP SHAPES, ORBS & RADIAL GRADIENTS --- */}
      {/* High-Contrast Structural Ambient Circles */}
      <div className="absolute top-[10%] left-[-8rem] w-[26rem] h-[26rem] bg-[#d5e6f5] rounded-full opacity-90 border-2 border-white/40 shadow-inner pointer-events-none" />
      <div className="absolute -top-[12rem] right-[25%] w-[42rem] h-[42rem] bg-[#dae9f7] rounded-full opacity-85 border-4 border-white/30 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[20rem] h-[20rem] bg-[#e1edf8] rounded-full opacity-75 pointer-events-none" />
      
      {/* High-Density Vibrant Blur Layers */}
      <div className="absolute top-[-5%] left-[-5%] w-[38rem] h-[38rem] bg-sky-300/40 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[15%] w-[48rem] h-[48rem] bg-sky-200/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35rem] h-[35rem] bg-[#cce0f5]/60 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Container with proper side padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid Layout - Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Arrow - Positioned relative to container */}
          <button 
            onClick={prevSlide} 
            className="absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 shadow-md border border-slate-200 z-20 transition-all active:scale-95"
          >
            <span className="text-xl font-light">‹</span>
          </button>

          {/* --- LEFT TEXT PANEL SECTION --- */}
          <div className="lg:col-span-6 flex flex-col items-start gap-3">
            
            {/* Top Pill Badge */}
            <span className="bg-[#e2f0fd] text-[#0084ff] font-extrabold text-[11px] px-3 py-1.5 rounded-full border border-[#b8daff] shadow-sm tracking-wide">
              {slides[currentSlide].badge}
            </span>
            
            {/* Typography Heading Block */}
            <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold tracking-tight leading-[1.2] text-[#0f1d37]">
              <span className="text-[#0091ff]">{slides[currentSlide].titlePrefix}</span>
              {slides[currentSlide].titleHighlight}
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-[13px] leading-relaxed max-w-md font-medium">
              {slides[currentSlide].description}
            </p>

            {/* 2x3 Grid Feature Matrix */}
            <div className="w-full grid grid-cols-2 gap-y-3 gap-x-5 my-1">
              {slides[currentSlide].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#1a2b49]">
                  <div className="w-6 h-6 rounded-lg bg-[#e3effc] flex items-center justify-center shrink-0 border border-[#ccdffa]">
                    {feature.icon}
                  </div>
                  <span className="tracking-tight">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Button & Price Container */}
            <div className="flex flex-wrap items-center gap-3 w-full mt-1">
              <button className="bg-[#0091ff] hover:bg-[#007cdb] text-white font-bold text-[14px] px-6 py-3 rounded-xl shadow-md flex items-center gap-2 transition-all group">
                {slides[currentSlide].buttonText}
                <span className="transform group-hover:translate-x-0.5 transition-transform text-sm">→</span>
              </button>
              
              <div className="bg-white border border-slate-200 rounded-xl px-4 py-1.5 flex flex-col justify-center shadow-sm">
                <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest leading-none mb-0.5">Starting at</span>
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="text-[10px] text-slate-400 line-through font-semibold">{slides[currentSlide].startingPrice}</span>
                  <span className="text-[18px] text-[#0091ff] font-black tracking-tight">{slides[currentSlide].discountedPrice}</span>
                  <span className="text-[9px] text-slate-400 font-bold">/mo</span>
                </div>
              </div>
            </div>

            {/* Location Footnote */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#0091ff]" />
              <span>{slides[currentSlide].footerNote}</span>
            </div>
          </div>

          {/* --- RIGHT GRAPHICS SECTION --- */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[380px]">
            
            {/* Graphics Content */}
            <div className="relative w-full max-w-[500px] h-[360px] flex items-center justify-center">
              
              {/* Device Display Platform Backdrop Panel */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[380px] h-[320px] bg-white/75 border border-white/80 rounded-[2rem] shadow-2xl p-3 backdrop-blur-md">
                  <div className="w-full h-full rounded-[1.75rem] border-2 border-slate-100/70 bg-gradient-to-br from-slate-50 to-slate-100/50 relative overflow-hidden">
                    
                    {/* Gridlines */}
                    <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px]" />
                    
                    {/* Blade Chassis Graphics */}
                    <div className="absolute right-5 top-5 bottom-5 w-40 bg-slate-200/40 rounded-xl border border-slate-200/60 p-2 flex flex-col gap-1.5">
                      <div className="w-full h-2/3 bg-slate-200/60 rounded-lg relative overflow-hidden">
                        <div className="absolute left-2 right-2 top-3 h-0.5 bg-sky-400 rounded-full" />
                        <div className="absolute left-2 right-2 top-6 h-0.5 bg-indigo-400 rounded-full" />
                      </div>
                      <div className="w-full flex-1 bg-white rounded-lg shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* --- SLIDE CONTENT GRAPHICS --- */}
              {slides[currentSlide].rightGraphicsType === "vds-hosting" ? (
                <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-start z-10">
                  
                  {/* Cards Stack */}
                  <div className="flex flex-col gap-2.5 w-[220px] ml-4 lg:ml-8">
                    {[
                      { title: "NVMe VDS", text: "Fast virtual server infrastructure", edge: "border-l-sky-500", style: "text-sky-500 bg-sky-50" },
                      { title: "1/10 Gbit Port", text: "High bandwidth", edge: "border-l-indigo-400", style: "text-indigo-400 bg-indigo-50" },
                      { title: "DDoS Protection", text: "Protection Included", edge: "border-l-purple-400", style: "text-purple-400 bg-purple-50" },
                      { title: "Türkiye Location", edge: "border-l-rose-400", text: "Low latency access", style: "text-rose-400 bg-rose-50" },
                      { title: "Windows / Linux", edge: "border-l-cyan-400", text: "OS Available Support", style: "text-cyan-500 bg-cyan-50", flags: ["WINDOWS", "LINUX"] },
                    ].map((card, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-white border border-slate-100 border-l-[3px] ${card.edge} rounded-lg p-2.5 flex items-center gap-2.5 shadow-md hover:-translate-y-0.5 transition-all duration-300`}
                      >
                        <div className={`w-7 h-7 rounded-lg ${card.style} flex items-center justify-center text-sm shrink-0 shadow-inner`}>
                          {idx === 0 ? "💻" : idx === 1 ? "📶" : idx === 2 ? "🛡️" : idx === 3 ? "📍" : "🖥️"}
                        </div>
                        <div className="flex flex-col leading-tight">
                          <span className="font-extrabold text-[11px] text-[#1a2b49]">{card.title}</span>
                          <span className="text-[9px] text-slate-400 font-bold mt-0.5">{card.text}</span>
                          {card.flags && (
                            <div className="flex gap-1 mt-1">
                              {card.flags.map((flag, fKey) => (
                                <span key={fKey} className="text-[6px] font-black bg-slate-100 text-slate-500 px-1 py-0.5 rounded tracking-wide">{flag}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Server Resource Monitor */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[190px] bg-white border border-slate-100 rounded-xl p-3 shadow-2xl z-20 backdrop-blur-md">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <span className="font-extrabold text-[#1a2b49] text-[11px]">VDS Server</span>
                      <span className="bg-[#eef5fc] text-[#0091ff] px-1.5 py-0.5 rounded-full text-[8px] font-black flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span> Active
                      </span>
                    </div>
                    
                    {/* Performance Meters */}
                    <div className="space-y-2 mt-2 font-bold text-slate-500 text-[9px]">
                      {[
                        { label: "CPU", metric: "45%", width: "45%", tint: "bg-sky-400", symbol: "⚙️" },
                        { label: "RAM", metric: "62%", width: "62%", tint: "bg-indigo-400", symbol: "💾" },
                        { label: "DISK", metric: "38%", width: "38%", tint: "bg-purple-400", symbol: "📁" },
                      ].map((row, rIdx) => (
                        <div key={rIdx} className="space-y-0.5">
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-1 text-slate-600">
                              <span>{row.symbol}</span> {row.label}
                            </span>
                            <span className="text-[#1a2b49] font-black">{row.metric}</span>
                          </div>
                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${row.tint} rounded-full`} style={{ width: row.width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                /* --- WEB HOSTING SLIDE --- */
                <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center z-10">
                  <div className="w-[260px] bg-white border border-slate-100 rounded-xl p-4 shadow-2xl">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        🚀
                      </div>
                      <div>
                        <p className="font-extrabold text-slate-800 text-sm">Linux Premium</p>
                        <p className="text-[9px] text-[#0091ff] font-bold">CloudLinux · LiteSpeed</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mt-3 text-[11px] font-semibold text-slate-500">
                      <div className="flex justify-between items-center">
                        <span>Uptime</span>
                        <span className="text-sky-500 font-bold">99.9%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Bandwidth</span>
                        <span className="text-slate-800 font-bold">Unlimited</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>SSL Certificate</span>
                        <span className="text-slate-800 font-bold">Free</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Daily Backups</span>
                        <span className="text-slate-800 font-bold">Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide} 
            className="absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-600 flex items-center justify-center hover:bg-slate-50 shadow-md border border-slate-200 z-20 transition-all active:scale-95"
          >
            <span className="text-xl font-light">›</span>
          </button>

        </div>

        {/* --- CAROUSEL INDICATORS --- */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-6 bg-[#0091ff]' : 'w-1.5 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}