"use client";

import React from "react";
import { Cpu, ArrowRight, Zap, Network } from "lucide-react";

export default function PremiumSpeedSection() {
  return (
    <section className="w-full bg-white text-slate-800 py-16 lg:py-24 overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - TEXT */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
              <Cpu className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 font-extrabold text-[10.5px] uppercase tracking-wider">Performance</span>
            </div>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-700/10 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-[28px] sm:text-[32px] font-black tracking-tight text-[#0f1d37]">
                Premium Speed Hosting
              </h3>
            </div>

            <p className="text-slate-400 text-[13.5px] leading-relaxed font-medium text-justify mb-6 max-w-2xl">
              It's crucial that your website is fast and reliable. DeHost uses premium hardware and 
              software infrastructure to ensure your website runs as fast as possible. DeHost's 
              servers are equipped with high-performance SSD drives, which increases your site's 
              speed and improves the user experience.
            </p>

            <a href="#" className="inline-flex items-center gap-1.5 border-b-2 border-sky-500 pb-0.5 font-bold text-[13.5px] text-sky-600 hover:text-sky-700 transition-colors group">
              <span>Review</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* RIGHT COLUMN - RADIAL SPEEDOMETER */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px]">
            <div className="absolute w-[320px] h-[320px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
            
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-dashed border-sky-500/10" />

              {/* Gauge Structure */}
              <div className="w-56 h-56 rounded-full border-[14px] border-slate-50 relative flex items-center justify-center shadow-inner">
                <div className="absolute inset-[-14px] rounded-full border-[14px] border-transparent border-t-sky-400 border-r-cyan-500 border-l-blue-400 rotate-45 pointer-events-none" />
                
                <div className="w-36 h-36 rounded-full bg-gradient-to-b from-white to-slate-50 shadow-xl flex flex-col items-center justify-center text-center p-4 border border-slate-100 z-10">
                  <span className="text-[36px] font-black text-[#0f1d37] tracking-tight leading-none">10</span>
                  <span className="text-[10px] text-sky-600 font-black tracking-widest uppercase mt-1">Gbps</span>
                  <div className="w-12 h-px bg-slate-200/80 my-2" />
                  <span className="text-[9px] text-slate-400 font-semibold">Premium Line</span>
                </div>

                <div className="absolute top-2 right-10 w-3 h-3 rounded-full bg-white border-2 border-slate-800 z-20 shadow shadow-black" />
              </div>

              {/* Lightning Bolt */}
              <div className="absolute top-4 right-2 w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white flex items-center justify-center shadow-lg transform rotate-12">
                <Zap className="w-5 h-5 fill-white stroke-none" />
              </div>

              {/* Cloudflare Node */}
              <div className="absolute bottom-4 left-0 bg-white border border-slate-100 p-2.5 rounded-xl shadow-lg flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 shrink-0">
                  <Network className="w-4 h-4" />
                </div>
                <div className="flex flex-col leading-none pr-2">
                  <span className="font-extrabold text-[11px] text-[#0f1d37] tracking-tight">Cloudflare CDN</span>
                  <span className="text-[9px] text-slate-400 font-bold mt-1">250+ Pop</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}