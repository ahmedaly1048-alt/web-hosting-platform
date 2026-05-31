"use client";

import React, { useState } from "react";
import { 
  Rocket, Cloud, Globe, Server, Mail, ChevronRight 
} from "lucide-react";

export default function ServicesOverview() {
  // Service tags extracted exactly from the grid in image_97915d.png
  const serviceTags = [
    "Domain", "Hosting", "Presenter", "Domain Name", "VPS Server",
    "VDS Server", "Premium VDS", "Nested Server", "Ryzen 9950X3D VDS",
    "Ryzen 7950X VDS", "Ryzen 5950X VDS", "Plesk VDS", "Mail Server",
    "Linux Hosting", "Reseller Hosting", "SEO Hosting", "Corporate Hosting",
    "Game Servers", "Data Center"
  ];

  // State to handle micro-interactions on the hub graphic nodes
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="w-full bg-white text-slate-800 py-16 lg:py-24 overflow-hidden font-sans relative">
      
      {/* --- TOP HEADER BLOCK --- */}
      <div className="w-full max-w-4xl mx-auto px-4 text-center mb-16 lg:mb-20">
        <h2 className="text-[32px] sm:text-[38px] font-extrabold tracking-tight text-[#0f1d37] leading-tight relative inline-block">
          {/* Decorative small light blue accent dashes from the image header */}
          <span className="absolute -left-4 top-2 w-2 h-4 bg-sky-500 rounded-sm hidden sm:block" />
          Next–Generation Hosting Servers and Domain Names with DeHost
          <span className="absolute -right-4 bottom-2 w-4 h-2 bg-sky-500 rounded-sm hidden sm:block" />
        </h2>
        <p className="text-slate-400 text-[14px] leading-relaxed mt-5 max-w-4xl mx-auto font-medium">
          DeHost is an innovative hosting company offering web hosting, server, and domain name services, 
          providing its customers with the latest technology and affordable prices. We help you securely 
          and quickly host websites, applications, projects, and more.
        </p>
      </div>

      {/* --- CONTENT MATRIX --- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE PANEL: Text & Tag Matrix Layout */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Row Header with Light Blue Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 shadow-sm">
                <Rocket className="w-4 h-4 transform -rotate-45" />
              </div>
              <h3 className="text-[24px] font-extrabold tracking-tight text-[#0f1d37]">
                Get to know our services.
              </h3>
            </div>

            {/* Explanatory Paragraphs */}
            <div className="space-y-4 text-slate-400 text-[13.5px] leading-relaxed font-medium max-w-xl mb-6">
              <p>
                You've come to the right place to host your website securely and reliably. At DeHost, 
                we offer a wide range of services to support your business or personal project's online presence.
              </p>
              <p>
                With our best-in-class infrastructure, guaranteed reliability, and superior customer support, 
                we are committed to providing you with a seamless hosting experience. We meet all your requests 
                and needs with the highest quality solutions through the services we offer.
              </p>
            </div>

            {/* Pill Tags Matrix Area */}
            <div className="flex flex-wrap gap-2 max-w-xl">
              {serviceTags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="bg-sky-50 text-sky-600 font-bold text-[11.5px] px-3.5 py-2 rounded-full border border-sky-200 cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-200 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE PANEL: Constellation Infrastructure Hub Graphics */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[400px]">
            
            {/* Radial Core Atmosphere Glow Effect */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-sky-500/5 to-cyan-500/5 blur-3xl pointer-events-none" />

            {/* Orbit Target Canvas Area */}
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">
              
              {/* Outer Orbit Wireframe Guide Rings */}
              <div className="absolute w-full h-full rounded-full border border-dashed border-sky-500/10 animate-[spin_120s_linear_infinite]" />
              <div className="absolute w-[75%] h-[75%] rounded-full border border-dashed border-sky-500/20" />
              <div className="absolute w-[50%] h-[50%] rounded-full border border-slate-100" />

              {/* CENTER HUB MASTER NODE */}
              <div className="absolute w-24 h-24 rounded-full bg-white shadow-2xl p-1.5 border border-slate-100 z-20 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-50 to-cyan-50 flex items-center justify-center border border-sky-200 group">
                  <Cloud className="w-9 h-9 text-sky-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>

              {/* NODE 1: TOP LEFT - DOMAIN */}
              <div 
                className="absolute top-10 left-0 z-30 transition-all duration-300 transform"
                onMouseEnter={() => setActiveNode("domain")}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Connector Path Indicator Line */}
                <div className="absolute w-20 h-px bg-gradient-to-r from-sky-400/0 to-sky-400/40 top-1/2 left-full origin-left rotate-[28deg] pointer-events-none" />
                <div className="bg-white/95 backdrop-blur-sm border border-slate-100 px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2 hover:border-sky-300 hover:shadow-sky-500/5 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[12px] font-extrabold text-slate-800 tracking-tight">Domain</span>
                </div>
              </div>

              {/* NODE 2: MIDDLE RIGHT - VDS & VPS */}
              <div 
                className="absolute top-[42%] right-[-10px] z-30 transition-all duration-300"
                onMouseEnter={() => setActiveNode("vds")}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Connector Path Indicator Line */}
                <div className="absolute w-16 h-px bg-gradient-to-l from-sky-400/0 to-sky-400/40 top-1/2 right-full pointer-events-none" />
                <div className="bg-white/95 backdrop-blur-sm border border-slate-100 px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2 hover:border-sky-300 hover:shadow-sky-500/5 transition-all cursor-pointer">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping absolute -top-0.5 -left-0.5 opacity-40" />
                  <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                    <Server className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[12px] font-extrabold text-slate-800 tracking-tight">VDS & VPS</span>
                </div>
              </div>

              {/* NODE 3: BOTTOM LEFT - CORPORATE EMAIL */}
              <div 
                className="absolute bottom-10 left-2 z-30 transition-all duration-300"
                onMouseEnter={() => setActiveNode("email")}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Connector Path Indicator Line */}
                <div className="absolute w-[90px] h-px bg-gradient-to-r from-sky-400/0 to-sky-400/40 top-1/2 left-full origin-left -rotate-[38deg] pointer-events-none" />
                <div className="bg-white/95 backdrop-blur-sm border border-slate-100 px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2 hover:border-sky-300 hover:shadow-sky-500/5 transition-all cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[12px] font-extrabold text-slate-800 tracking-tight">Corporate Email</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}