"use client";

import React from "react";

interface PartnerLogo {
  name: string;
  url?: string;
  isCustomSVG?: boolean;
  renderSVG?: () => React.ReactNode;
}

export default function LogoWall() {
  const partners: PartnerLogo[] = [
    {
      name: "Google",
      isCustomSVG: true,
      renderSVG: () => (
        <span className="font-extrabold text-2xl tracking-tight select-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      )
    },
    {
      name: "Intel",
      isCustomSVG: true,
      renderSVG: () => (
        <div className="flex flex-col items-center border-2 border-[#0068B7] rounded-full px-5 py-0.5 text-[#0068B7] font-black italic text-xl tracking-tight bg-[#0068B7]/5 shadow-sm">
          intel
        </div>
      )
    },
    {
      name: "MikroTik",
      isCustomSVG: true,
      renderSVG: () => (
        <span className="font-sans font-black italic text-xl text-[#303030] tracking-tighter">
          Mikro<span className="text-[#E02424]">Tik</span>
        </span>
      )
    },
    {
      name: "Ryzen",
      isCustomSVG: true,
      renderSVG: () => (
        <div className="flex items-center gap-1 font-black text-[#231F20] text-xl tracking-widest">
          RYZ<span className="text-[#ED1C24] font-black drop-shadow-[0_0_6px_rgba(237,28,36,0.2)]">E</span>N
        </div>
      )
    },
    {
      name: "VMware",
      isCustomSVG: true,
      renderSVG: () => (
        <span className="font-mono text-lg font-bold tracking-widest text-[#006A91]">
          vmware<span className="text-[10px] align-super font-sans">®</span>
        </span>
      )
    },
    {
      name: "BTK",
      isCustomSVG: true,
      renderSVG: () => (
        <div className="flex items-center gap-2 text-[#1E3A8A]">
          <span className="text-2xl drop-shadow-sm">🇹🇷</span>
          <div className="flex flex-col text-[9px] font-black leading-tight uppercase tracking-tight max-w-[95px] text-[#111827]">
            <span className="text-[#C8102E]">Bilgi</span>
            <span>Teknolojileri</span>
            <span className="text-[#C8102E]">Kurumu</span>
          </div>
        </div>
      )
    },
    {
      name: "Cloudflare",
      isCustomSVG: true,
      renderSVG: () => (
        <div className="flex items-center gap-1.5 font-black uppercase text-sm tracking-wider text-[#F38020]">
          <span className="text-lg drop-shadow-sm">🧡</span>
          <span className="text-[#404040]">Cloudflare</span>
        </div>
      )
    }
  ];

  // Tripled array to ensure an uninterrupted loop cycle
  const continuousLogos = [...partners, ...partners, ...partners];

  return (
    <section className="w-full bg-[#f4f7fa] py-10 border-b border-slate-200/60 relative overflow-hidden select-none">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeContinuous {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marqueeContinuous 28s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[92rem] mx-auto px-4 sm:px-8">
        
        {/* Section Header Title */}
        <div className="w-full text-center mb-9">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-400/90">
            Our Infrastructure Partners
          </p>
        </div>

        {/* Sliding Viewport Window */}
        <div className="relative w-full overflow-hidden">
          
          {/* Edge gradient overlays for beautiful fade outs */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f4f7fa] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f4f7fa] to-transparent z-10 pointer-events-none" />

          {/* Animating Track Container */}
          <div className="animate-marquee-loop gap-16 md:gap-24 items-center">
            {continuousLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer min-w-[140px]"
              >
                {logo.isCustomSVG && logo.renderSVG ? (
                  logo.renderSVG()
                ) : (
                  <span className="text-xl font-bold text-slate-700">{logo.name}</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}