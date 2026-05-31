"use client";

import React from "react";
import { Cloud, Infinity as InfinityIcon, ArrowRight } from "lucide-react";

export default function UnlimitedHostingSection() {
  return (
    <section className="w-full bg-[#fafcfd] text-slate-800 py-16 lg:py-24 overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - METRIC TRACK SLIDERS */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px]">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
            
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-dashed border-sky-500/10" />
              
              <div className="absolute top-6 right-8 text-sky-500 z-20 animate-pulse">
                <InfinityIcon className="w-14 h-14 stroke-[2.5]" />
              </div>

              <div className="w-[240px] bg-white border border-slate-100 rounded-2xl p-4 shadow-xl space-y-3.5 relative z-10">
                {[
                  { label: "∞ TB", width: "w-[85%]" },
                  { label: "∞ GB", width: "w-[70%]" },
                  { label: "∞ MB", width: "w-[55%]" },
                  { label: "∞ Site", width: "w-[40%]" }
                ].map((item, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="w-full h-2.5 bg-slate-50 border border-slate-100 rounded-full overflow-hidden flex items-center relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-600 absolute left-1 z-20" />
                      <div className={`h-full bg-gradient-to-r from-sky-400 to-sky-500 ${item.width} rounded-full relative z-10`} />
                    </div>
                    <div className="flex justify-end leading-none">
                      <span className="text-[10px] font-black text-slate-700 tracking-tight">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-6 left-0 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex items-center gap-3 z-20">
                <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500">
                  🔄
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-extrabold text-[11px] text-[#0f1d37] tracking-tight">Unlimited Traffic</span>
                  <span className="text-[9px] text-slate-400 font-bold mt-1">Bandwidth</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN - COPY AREA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
              <Cloud className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 font-extrabold text-[10.5px] uppercase tracking-wider">Hosting</span>
            </div>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-700/10 shrink-0">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-[28px] sm:text-[32px] font-black tracking-tight text-[#0f1d37]">
                Unlimited Hosting Service
              </h3>
            </div>

            <p className="text-slate-400 text-[13.5px] leading-relaxed font-medium text-justify mb-6 max-w-2xl">
              With DeHost's unlimited hosting service, you get all the space and bandwidth your 
              website needs. Hosting multiple websites? No problem. You can host an unlimited 
              number of websites and have separate control panels for each. DeHost offers its 
              customers a powerful hosting infrastructure with unlimited storage space and 
              bandwidth. As your site grows, you can add content without worry and easily handle 
              the increase in visitor traffic. Our company uses the latest security technologies to 
              keep your website secure at the highest level. With a free SSL certificate, weekly 
              backups, DDoS protection, and more, you can be sure your website is always safe.
            </p>

            <a href="#" className="inline-flex items-center gap-1.5 border-b-2 border-sky-500 pb-0.5 font-bold text-[13.5px] text-sky-600 hover:text-sky-700 transition-colors group">
              <span>Review</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}