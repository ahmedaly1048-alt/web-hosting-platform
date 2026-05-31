"use client";

import React from "react";
import { Zap, ShieldCheck, Rocket } from "lucide-react";

export default function SeamlessFeatureSection() {
  return (
    <section className="w-full bg-[#fafcfd] text-slate-800 py-16 lg:py-24 overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - INTERACTIVE INFRASTRUCTURE CARD */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px]">
            {/* Ambient Light Blue Backlight */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
            
            <div className="relative w-full max-w-[360px] h-[320px]">
              {/* Engineering Grid Subtle Pattern */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:20px_20px]" />
              
              {/* Main Protection Card */}
              <div className="absolute top-12 left-6 right-6 bg-white border border-slate-100 rounded-2xl p-5 shadow-xl z-20">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 shrink-0 shadow-inner">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-extrabold text-[15px] text-[#0f1d37] tracking-tight">Active Protection</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                      <span className="text-[10px] text-slate-400 font-bold tracking-tight">DDoS & WAF · Online</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-50 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] text-slate-500 font-extrabold tracking-tight">SSD I/O Performance</span>
                    <span className="text-[11px] text-sky-500 font-black">100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-sky-500 w-full rounded-full" />
                  </div>
                </div>

                {/* Micro Badges Grid */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="px-2 py-1 bg-sky-50/60 border border-sky-100/50 rounded-lg text-[9.5px] font-bold text-sky-700 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> 10 Gbps
                  </span>
                  <span className="px-2 py-1 bg-sky-50/60 border border-sky-100/50 rounded-lg text-[9.5px] font-bold text-sky-700">
                    💾 NVMe
                  </span>
                  <span className="px-2 py-1 bg-sky-50/60 border border-sky-100/50 rounded-lg text-[9.5px] font-bold text-sky-700">
                    📍 TR Location
                  </span>
                </div>
              </div>

              {/* Floating Satellites */}
              <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm border border-slate-100/80 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 hover:scale-105 transition-transform duration-300 z-30">
                <Rocket className="w-3.5 h-3.5 text-sky-500 -rotate-45" />
                <span className="text-[11px] font-extrabold text-slate-800 tracking-tight">LiteSpeed</span>
              </div>

              <div className="absolute bottom-4 left-[-10px] bg-white/95 backdrop-blur-sm border border-slate-100/80 px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300 z-30">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping absolute opacity-40" />
                <span className="w-2 h-2 rounded-full bg-sky-500 relative" />
                <span className="text-[11px] font-extrabold text-slate-800 tracking-tight">High Uptime</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - MARKETING COPY AREA */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 shadow-sm shrink-0">
              <Zap className="w-4 h-4" />
            </div>

            <h3 className="text-[28px] sm:text-[32px] font-extrabold tracking-tight text-[#0f1d37] leading-tight">
              Seamless, Fast and Economical
            </h3>

            <div className="text-slate-400 text-[13.5px] leading-relaxed font-medium space-y-4 text-justify">
              <p>
                Your website is the heart of your online presence. Therefore, it's crucial that your site is 
                always up-to-date, fast, and reliable. At DeHost, that's exactly what we offer. With 
                our uninterrupted, fast, and economical hosting solutions, you can find the hosting 
                service you're looking for at affordable prices. At DeHost, we guarantee uptime. This 
                means your site will be accessible 24/7, 365 days a year. Our servers are equipped 
                with the latest technology and monitored 24/7 by our expert team. This allows us to 
                proactively intervene before any problems arise and ensure your site remains active 
                at all times.
              </p>
              <p>
                Website speed is extremely important for user experience and search 
                engine ranking. At DeHost, we use the latest technologies, such as SSD storage and 
                LiteSpeed web server software, to ensure your website loads as quickly as possible. 
                Furthermore, our servers are optimized and can instantly provide the resources your 
                site needs. At DeHost, we offer hosting solutions for every budget. Our starter 
                packages are ideal for small websites and are affordable. As your needs grow, you 
                can easily upgrade to our packages with more resources.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}