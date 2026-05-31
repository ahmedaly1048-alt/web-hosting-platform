"use client";

import React from "react";
import { Gamepad2, ArrowRight, Zap } from "lucide-react";

export default function GameServersSection() {
  return (
    <section className="w-full bg-[#fafcfd] text-slate-800 py-16 lg:py-24 overflow-hidden font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN - GAMEPAD GRAPHIC */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px]">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
            
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-dashed border-sky-500/10" />
              
              {/* Controller Block */}
              <div className="w-56 h-36 bg-[#121c2c] rounded-[2.5rem] relative shadow-2xl p-4 flex items-center justify-between border border-slate-800/40 transform -rotate-6 hover:rotate-0 transition-transform duration-500 group">
                <div className="w-10 h-10 relative flex items-center justify-center mt-2">
                  <div className="absolute w-8 h-2.5 bg-slate-800 rounded-full" />
                  <div className="absolute h-8 w-2.5 bg-slate-800 rounded-full" />
                </div>

                <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-inner shadow-sky-500/30">
                  <Zap className="w-3.5 h-3.5 fill-sky-400" />
                </div>

                <div className="w-12 h-12 relative mt-1">
                  <span className="absolute top-0 left-3 w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="absolute bottom-0 left-3 w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span className="absolute left-0 top-3 w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="absolute right-0 top-3 w-2.5 h-2.5 rounded-full bg-sky-500" />
                </div>

                <div className="absolute bottom-3 left-12 w-6 h-6 rounded-full bg-sky-500 border border-sky-400/30 shadow-inner" />
                <div className="absolute bottom-3 right-12 w-6 h-6 rounded-full bg-sky-500 border border-sky-400/30 shadow-inner" />
              </div>

              {/* Ping Indicators */}
              <div className="absolute top-12 left-0 bg-white border border-slate-100 px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span className="text-[10.5px] text-slate-400 font-extrabold tracking-tight">Ping <span className="text-slate-800 ml-0.5">4 ms</span></span>
              </div>

              <div className="absolute bottom-10 right-4 bg-white border border-slate-100 p-3 rounded-xl shadow-lg flex flex-col items-center leading-none z-20 min-w-[55px]">
                <span className="text-[16px] font-black text-[#0f1d37]">240</span>
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">FPS / TR</span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN - CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
              <Gamepad2 className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 font-extrabold text-[10.5px] uppercase tracking-wider">Gaming</span>
            </div>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-700/10 shrink-0">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h3 className="text-[28px] sm:text-[32px] font-black tracking-tight text-[#0f1d37]">
                Game Servers
              </h3>
            </div>

            <p className="text-slate-400 text-[13.5px] leading-relaxed font-medium text-justify mb-6 max-w-2xl">
              DeHost also offers game server services specifically designed to provide players with 
              the best gaming experience. With powerful hardware, low latency, and 24/7 support, 
              your game server will always perform optimally. Our powerful servers deliver the best 
              gaming experience seamlessly.
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