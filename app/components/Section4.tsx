"use client";

import React from "react";
import { ShieldCheck, Key, Fingerprint, Lock } from "lucide-react";

export default function FreeSSLSection() {
  return (
    <section className="w-full bg-white text-slate-800 py-16 lg:py-24 overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 font-extrabold text-[10.5px] uppercase tracking-wider">Security</span>
            </div>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-700/10 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[28px] sm:text-[32px] font-black tracking-tight text-[#0f1d37]">
                Free SSL Certificate
              </h3>
            </div>

            <p className="text-slate-400 text-[13.5px] leading-relaxed font-medium max-w-2xl text-justify">
              We value our customers' security and privacy. That's why we offer a free SSL certificate 
              with all our hosting packages. A free SSL certificate provides a secure connection for 
              your site visitors and improves your SEO score.
            </p>
          </div>

          {/* RIGHT COLUMN - SECURE NODE GRAPHICS */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px]">
            <div className="absolute w-[320px] h-[320px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
            
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-dashed border-sky-500/10 animate-[spin_120s_linear_infinite]" />
              
              {/* Central Secure Shield */}
              <div className="w-36 h-44 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 rounded-b-[4rem] rounded-t-2xl relative shadow-2xl flex flex-col items-center justify-center p-4 text-white border border-sky-300/20 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sky-600 shadow-md mb-3">
                  <Lock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="font-black text-[12px] tracking-widest uppercase">SSL · A+</span>
              </div>

              {/* Satellites */}
              <div className="absolute top-12 left-2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-sky-500 hover:scale-110 transition-transform">
                <Key className="w-4 h-4 rotate-45" />
              </div>

              <div className="absolute top-16 right-4 w-8 h-8 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-sky-500 hover:scale-110 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>

              <div className="absolute bottom-16 right-0 w-8 h-8 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-sky-500 hover:scale-110 transition-transform">
                <Fingerprint className="w-4 h-4" />
              </div>

              {/* Mock Browser URL */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-slate-100/80 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20 whitespace-nowrap">
                <Lock className="w-3 h-3 text-sky-500" />
                <span className="text-[10px] font-bold text-slate-400">https://<span className="text-slate-800 font-extrabold">dehost.com.tr</span></span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}