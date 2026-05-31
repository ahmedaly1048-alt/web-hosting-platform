"use client";

import React from "react";
import { Trophy, Check, Star } from "lucide-react";

export default function AboutAdvantagesSection() {
  const advantagesList = [
    "DeHost is one of the affordable hosting companies on the market.",
    "DeHost's servers are high-performance, ensuring your website runs quickly and without interruption.",
    "DeHost offers 24/7 support, ensuring your website is always accessible.",
    "DeHost's control panel is easy to use, and you don't need any technical knowledge to manage its hosting services."
  ];

  return (
    <section className="w-full bg-white text-slate-800 py-16 lg:py-24 overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - TEXT CONTENT & ADVANTAGES */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
              <Trophy className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 font-extrabold text-[10.5px] uppercase tracking-wider">About Us</span>
            </div>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-700/10 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-[28px] sm:text-[32px] font-black tracking-tight text-[#0f1d37] leading-[1.15]">
                Türkiye Location Hosting and Server Solutions
              </h3>
            </div>

            <div className="text-slate-400 text-[13.5px] leading-relaxed font-medium space-y-4 mb-8 max-w-2xl">
              <p>
                Choosing the best hosting company for your website can be a difficult task. Many 
                companies offer different features and prices, making it challenging to determine 
                which one is right for you. DeHost, standing out as one of Türkiye's best hosting 
                companies, offers you impeccable service in this regard.
              </p>
              <p className="text-slate-500 font-bold">DeHost's advantages are as follows.</p>
            </div>

            {/* List Row Execution */}
            <div className="w-full space-y-3 max-w-2xl">
              {advantagesList.map((text, idx) => (
                <div key={idx} className="w-full bg-slate-50/50 border border-slate-100 rounded-xl p-4 flex items-start gap-3.5 hover:bg-white hover:border-slate-200 transition-all shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 shrink-0 mt-0.5 shadow-inner">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-[13px] text-slate-600 font-semibold leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - GRAPHICS VIEWPORT */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px]">
            <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-sky-500/5 to-transparent blur-3xl pointer-events-none" />
            
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-dashed border-sky-500/10 animate-[spin_100s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-100" />

              {/* Central Trophy Vector Simulation */}
              <div className="w-40 h-40 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-2xl relative shadow-xl flex items-center justify-center group transform hover:scale-105 transition-transform duration-300">
                <div className="absolute left-[-15px] top-8 bottom-8 w-4 border-4 border-amber-400 rounded-l-xl" />
                <div className="absolute right-[-15px] top-8 bottom-8 w-4 border-4 border-amber-400 rounded-r-xl" />
                
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-amber-300 shadow-md">
                  <Star className="w-6 h-6 text-sky-500 fill-sky-500" />
                </div>
                
                <div className="absolute bottom-[-10px] left-4 right-4 h-3 bg-amber-700 rounded-full" />
              </div>

              {/* Satellite Badges */}
              <div className="absolute top-8 right-0 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex items-center gap-2.5 z-20">
                <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
                  🏅
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-extrabold text-[11px] text-[#0f1d37] tracking-tight">Strong Infrastructure</span>
                  <span className="text-[9px] text-slate-400 font-bold mt-1">Türkiye Location</span>
                </div>
              </div>

              <div className="absolute bottom-16 left-[-20px] bg-white border border-slate-100 px-3.5 py-2 rounded-full shadow-lg z-20 text-[11.5px] font-extrabold text-slate-800">
                Corporate Support <span className="text-sky-500 font-black ml-1">DeHost</span>
              </div>

              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}