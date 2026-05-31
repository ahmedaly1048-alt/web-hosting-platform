"use client";

import React, { useState } from "react";
import { Search, RefreshCw, DollarSign, Info, ChevronRight } from "lucide-react";

interface DomainCard {
  tld: string;
  logoText: React.ReactNode;
  originalPrice: string;
  discountedPrice: string;
  isPopular?: boolean;
}

export default function DomainSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const domainExtensions: DomainCard[] = [
    {
      tld: ".com",
      isPopular: true,
      logoText: <span className="text-2xl font-black text-[#0091ff]">.com</span>,
      originalPrice: "₺449.99",
      discountedPrice: "₺268.99"
    },
    {
      tld: ".net",
      logoText: (
        <span className="text-2xl font-black text-slate-800 tracking-tight">
          .net<span className="text-[9px] block text-slate-400 font-bold leading-none uppercase">powered by verisign</span>
        </span>
      ),
      originalPrice: "₺460.99",
      discountedPrice: "₺348.99"
    },
    {
      tld: ".org",
      logoText: (
        <span className="text-2xl font-black text-slate-700 flex items-center gap-1">
          <span className="text-amber-500 text-lg">🔸</span>.org
        </span>
      ),
      originalPrice: "₺399.99",
      discountedPrice: "₺200.99"
    },
    {
      tld: ".site",
      logoText: <span className="text-2xl font-extrabold text-indigo-900/80 tracking-tight">.site</span>,
      originalPrice: "₺779.99",
      discountedPrice: "₺56.99"
    },
    {
      tld: ".in",
      logoText: (
        <span className="text-2xl font-black text-slate-800 flex items-center gap-0.5">
          <span className="text-orange-500 text-sm">☀️</span>.in
        </span>
      ),
      originalPrice: "₺239.99",
      discountedPrice: "₺187.99"
    },
    {
      tld: ".info",
      logoText: <span className="text-2xl font-black text-sky-700 border-b-2 border-sky-400 leading-none">.info</span>,
      originalPrice: "₺149.99",
      discountedPrice: "₺129.99"
    },
    {
      tld: ".pro",
      logoText: (
        <span className="text-2xl font-serif font-black text-slate-900">
          .<span className="text-red-500 inline-block bg-red-100 text-[9px] px-1 py-0.5 rounded font-sans align-middle mr-0.5">RE</span>pro
        </span>
      ),
      originalPrice: "₺519.99",
      discountedPrice: "₺219.99"
    },
    {
      tld: ".tr",
      logoText: (
        <span className="text-2xl font-black text-slate-800 flex items-center gap-1">
          <span className="text-red-600 text-sm">🔴</span>.tr
        </span>
      ),
      originalPrice: "₺449.99",
      discountedPrice: "₺268.99"
    }
  ];

  return (
    <section className="w-full bg-[#f4f7fa] py-16 px-4 sm:px-8 lg:px-12 font-sans select-none">
      <div className="max-w-[88rem] mx-auto">
        
        {/* --- MAIN HERO WRAPPER CARD (Mirrors image_98f9dd.png structure) --- */}
        <div className="w-full bg-gradient-to-br from-[#0b1b33] via-[#0f294a] to-[#0a223f] rounded-[2.5rem] pt-14 pb-28 px-6 sm:px-12 text-center relative overflow-hidden shadow-2xl border border-slate-800/40">
          
          {/* Subtle Technical Blueprint Background Accents */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#0091ff]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Pill Pricing Indicator */}
          <div className="inline-flex items-center gap-1.5 bg-sky-500/10 border border-sky-400/20 rounded-full px-4 py-1.5 mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-black tracking-wider text-sky-300 uppercase">Prices Starting From ₺39.99</span>
          </div>

          {/* Header Typography Section */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-none mb-4">
            Register a Perfect <span className="text-[#0091ff]">Domain !</span>
          </h2>
          <p className="text-slate-300/80 text-[14px] font-medium max-w-xl mx-auto leading-relaxed mb-9">
            Instantly search for the name you have in mind, and we'll save it specifically for you in seconds.
          </p>

          {/* --- SEARCH INPUT WRAPPER CONTAINER --- */}
          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex items-center shadow-lg border border-slate-200/50 relative z-10 focus-within:ring-2 focus-within:ring-[#0091ff]/40 transition-all">
            <div className="pl-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="example-domain" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none pl-3 pr-4 text-slate-800 placeholder-slate-400 font-bold text-[15px]"
            />
            <button className="bg-[#0091ff] hover:bg-[#007cdb] text-white text-[14px] font-black tracking-tight px-6 py-3.5 rounded-full shadow-md flex items-center gap-2 shrink-0 transition-all group">
              <span>Check Domain Name</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          {/* Secondary Sub-Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-[13.5px] font-bold text-slate-300/90">
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <RefreshCw className="w-4 h-4 text-[#0091ff]" /> <span>Domain Transfer</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <DollarSign className="w-4 h-4 text-[#0091ff]" /> <span>Domain Name Prices</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Info className="w-4 h-4 text-[#0091ff]" /> <span>Whois Lookup</span>
            </button>
          </div>

        </div>

        {/* --- GRID INTERLOCKING PRICING BLOCKS MATRIX --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 -mt-16 relative z-20">
          {domainExtensions.map((card, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl p-5 flex flex-col justify-between relative shadow-xl border transition-all duration-300 min-h-[145px] group cursor-pointer hover:-translate-y-1 ${
                card.isPopular 
                  ? "border-2 border-[#0091ff] bg-gradient-to-b from-[#f2f8ff] to-white" 
                  : "border-slate-100/80 hover:border-slate-300"
              }`}
            >
              {/* Popularity Badge Segment Tag */}
              {card.isPopular && (
                <span className="absolute -top-3 left-6 bg-[#0091ff] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  Popular
                </span>
              )}

              {/* Upper Section Branding Row */}
              <div className="pt-2">
                {card.logoText}
              </div>

              {/* Lower Section Pricing Row */}
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] text-slate-400 line-through font-semibold mb-0.5">{card.originalPrice}</span>
                  <span className={`text-[19px] font-black tracking-tight ${card.isPopular ? "text-[#0091ff]" : "text-emerald-600"}`}>
                    {card.discountedPrice}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  card.isPopular 
                    ? "bg-[#0091ff] border-[#0091ff] text-white" 
                    : "bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600"
                }`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}