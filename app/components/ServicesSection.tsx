"use client";

import React from "react";
import { 
  Globe, Server, Cpu, Layers, ArrowRight, ShieldCheck 
} from "lucide-react";

// Inline WordPress SVG Icon
const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-600" fill="currentColor">
    <path d="M12.158 12.786l-2.698 7.83c1.455.447 3 .5 4.542.148l-1.844-7.978zm2.632-6.1c.563 0 .972-.224.972-.544 0-.465-.632-.61-1.282-.61h-2.1c-.563 0-.982.224-.982.545 0 .464.632.609 1.281.609h2.111zm.557 1.341h-2.8c-.416 0-.822.062-1.213.176l3.411 9.878 2.378-6.84c.324-.9.444-1.503.444-1.956 0-.663-.444-1.258-1.22-1.258zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-1.636 0-3.173-.437-4.512-1.199l2.508-7.28 1.487 4.31c.21.61.436.89.875.89h.063c.438 0 .633-.28.633-.89l1.62-5.18c1.378 2.454 2.146 5.163 1.95 8.167C15.228 21.433 13.678 22 12 22z"/>
  </svg>
);

export default function ServicesSection() {
  return (
    <section className="w-full relative bg-[#fafcfd] text-slate-800 py-16 lg:py-20 overflow-hidden font-sans">
      
      {/* Light Background Technical Grid Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[36px] font-extrabold tracking-tight text-[#0f1d37]">
            Our Services and Featured Packages
          </h2>
          <p className="text-slate-400 text-[14px] mt-2.5 font-medium">
            Browse and purchase the packages that suit you!
          </p>
        </div>

        {/* --- MAIN GRID COMPOSITION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT CONTAINER: Discover Quality Hero Billboard Block */}
          <div className="lg:col-span-4 rounded-[2rem] bg-gradient-to-b from-[#062432] via-[#051a26] to-[#04121b] p-8 flex flex-col justify-between relative overflow-hidden border border-slate-800/10 min-h-[460px] lg:min-h-full group shadow-xl shadow-slate-900/5">
            
            {/* Soft Ambient Internal Dark Glow Spots */}
            <div className="absolute top-[-10%] right-[-10%] w-48 h-48 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute bottom-[-5%] left-[20%] w-44 h-44 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Top Badge */}
            <div className="self-start">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-sky-400 font-bold text-[11px] tracking-wide uppercase">
                  Premium Infrastructure
                </span>
              </div>
            </div>

            {/* Core Message Text */}
            <div className="my-auto pt-12 pb-8">
              <h3 className="text-[28px] sm:text-[32px] font-extrabold tracking-tight leading-[1.2] text-white">
                Discover Dehost Quality !
              </h3>
              <p className="text-slate-400 text-[13px] leading-relaxed mt-4 max-w-xs font-medium">
                We are always here for you with the best service, uninterrupted performance and 24/7 expert support.
              </p>
            </div>

            {/* Footer Row Actions & Stats */}
            <div className="border-t border-white/5 pt-5 space-y-5">
              <a href="#" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-bold text-[13px] tracking-tight group/link transition-colors">
                <span>Explore All Packages</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform transform group-hover/link:translate-x-1" />
              </a>

              <div className="flex gap-8 pt-1">
                <div>
                  <p className="text-[20px] font-black text-white tracking-tight leading-none">High</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1.5">Uptime</p>
                </div>
                <div className="w-px h-7 bg-white/10 self-center" />
                <div>
                  <p className="text-[20px] font-black text-white tracking-tight leading-none">7/24</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1.5">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER: Asymmetric Staggered Standard & Showcase Product Cards */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            
            {/* Top Pair Split Row Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Product Card 1: Web Hosting */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <span className="absolute top-3 right-3 bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide">
                  Popular
                </span>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-sky-600" />
                  </div>
                  <h4 className="font-extrabold text-[16px] text-[#0f1d37] tracking-tight">Web Hosting</h4>
                  <p className="text-[11.5px] text-slate-400 font-medium mt-0.5">LiteSpeed cPanel</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[16px] font-black text-[#0f1d37]">₺69.99</span>
                    <span className="text-[11px] text-slate-400 font-semibold">/month</span>
                  </div>
                  <a href="#" className="text-[12px] font-bold text-sky-600 flex items-center gap-1 group-hover:underline">
                    Review <span className="text-[10px]">→</span>
                  </a>
                </div>
              </div>

              {/* Product Card 2: VDS Server */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                    <Server className="w-5 h-5 text-sky-600" />
                  </div>
                  <h4 className="font-extrabold text-[16px] text-[#0f1d37] tracking-tight">VDS Server</h4>
                  <p className="text-[11.5px] text-slate-400 font-medium mt-0.5">Intel Xeon Gold & Platinum</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[16px] font-black text-[#0f1d37]">₺99.99</span>
                    <span className="text-[11px] text-slate-400 font-semibold">/month</span>
                  </div>
                  <a href="#" className="text-[12px] font-bold text-sky-600 flex items-center gap-1 group-hover:underline">
                    Review <span className="text-[10px]">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Full Width Showcase: AMD Ryzen Server Box */}
            <div className="bg-white border border-sky-500/10 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <span className="absolute top-3 right-3 bg-sky-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide">
                High Performance
              </span>

              {/* Specification Left Column info */}
              <div className="md:col-span-7 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-5.5 h-5.5 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-black text-[18px] text-[#0f1d37] tracking-tight">
                    AMD Ryzen 9950X3D Server
                  </h4>
                  <p className="text-[12.5px] text-slate-400 font-medium leading-relaxed mt-1.5 max-w-md">
                    The fastest virtual server experience in its class with 3D V-Cache technology.
                  </p>
                </div>
              </div>

              {/* Pricing & CTA Right Column Split Block */}
              <div className="md:col-span-5 flex flex-col md:items-end justify-center md:pl-6 md:border-l border-dashed border-slate-200">
                <div className="flex flex-col md:items-end leading-none">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[22px] font-black text-[#0f1d37]">₺359.99</span>
                    <span className="text-[11px] text-slate-400 font-bold">/month</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium mt-1 mb-4">Prices starting from</span>
                </div>

                <button className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold text-[12.5px] px-5 py-2.5 rounded-xl shadow-md shadow-sky-500/10 flex items-center justify-center gap-1.5 transition-all group">
                  <span>Review the packages</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Bottom Pair Split Row Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Product Card 3: Nested Servers */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5 text-sky-600" />
                  </div>
                  <h4 className="font-extrabold text-[16px] text-[#0f1d37] tracking-tight">Nested Servers</h4>
                  <p className="text-[11.5px] text-slate-400 font-medium mt-0.5">Intel & Ryzen Options</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[16px] font-black text-[#0f1d37]">₺400.00</span>
                    <span className="text-[11px] text-slate-400 font-semibold">/month</span>
                  </div>
                  <a href="#" className="text-[12px] font-bold text-sky-600 flex items-center gap-1 group-hover:underline">
                    Review <span className="text-[10px]">→</span>
                  </a>
                </div>
              </div>

              {/* Product Card 4: WordPress Hosting */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                <span className="absolute top-3 right-3 bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide">
                  New
                </span>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                    <WordPressIcon />
                  </div>
                  <h4 className="font-extrabold text-[16px] text-[#0f1d37] tracking-tight">WordPress Hosting</h4>
                  <p className="text-[11.5px] text-slate-400 font-medium mt-0.5">Optimized Infrastructure</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[16px] font-black text-[#0f1d37]">₺49.99</span>
                    <span className="text-[11px] text-slate-400 font-semibold">/month</span>
                  </div>
                  <a href="#" className="text-[12px] font-bold text-sky-600 flex items-center gap-1 group-hover:underline">
                    Review <span className="text-[10px]">→</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}