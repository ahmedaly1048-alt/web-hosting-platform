"use client";

import React from "react";
import { 
  Contact, 
  AtSign, // Clean native replacement for AlternateEmail
  Compass, 
  HelpCircle, 
  Globe2, 
  Fingerprint, 
  Shuffle, 
  ShieldAlert 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f8fa] text-slate-500 pt-16 pb-8 font-sans border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER DISTRIBUTION SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          
          {/* BRAND PROFILE SIDEBAR */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h3 className="text-[#0f1d37] font-black text-[26px] tracking-tight">
              de<span className="text-sky-500">host</span>
            </h3>
            <p className="text-slate-700 font-extrabold text-[12.5px] tracking-tight mt-1">
              Let us help you right away!
            </p>
            
            {/* Micro Contacts Block */}
            <div className="space-y-2.5 mt-2 text-[12px] font-medium text-slate-500">
              <a href="tel:+903128701206" className="flex items-center gap-2 hover:text-sky-600 transition-colors group">
                <Contact className="w-3.5 h-3.5 text-sky-500 group-hover:scale-110 transition-transform" />
                <span>+90 312 870 12 06</span>
              </a>
              <a href="mailto:info@dehost.com.tr" className="flex items-center gap-2 hover:text-sky-600 transition-colors group">
                <AtSign className="w-3.5 h-3.5 text-sky-500 group-hover:scale-110 transition-transform" />
                <span>info@dehost.com.tr</span>
              </a>
              <div className="flex items-start gap-2 max-w-[220px]">
                <Compass className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-500">Pınarbaşı Mh. Akarsu 2 Sk. NO:13A Keçiören / Ankara</span>
              </div>
            </div>

            {/* Alternated Abstract Platform Handles */}
            <div className="flex gap-2.5 mt-4">
              {[Globe2, Fingerprint, Shuffle].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-300 hover:shadow-sm transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* DYNAMIC NAVIGATION LINKS COLUMNS */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* COL 1 */}
            <div>
              <h4 className="text-[#0f1d37] text-[11px] font-black tracking-widest uppercase mb-4 relative pb-1.5 inline-block">
                Presenter
                <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-sky-500" />
              </h4>
              <ul className="space-y-2 text-[12px] font-semibold text-slate-500">
                {["ispmanager License", "VPS Server Rental", "VDS Server Rental", "Premium VDS Rental", "Ryzen 5950X VDS Rental", "Ryzen 7950X VDS Rental", "Ryzen 9950X VDS Rental", "Nested Server Rental", "Virtual Data Center Server Rental", "Server Hosting"].map((link) => (
                  <li key={link}><a href="#" className="hover:text-sky-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* COL 2 */}
            <div>
              <h4 className="text-[#0f1d37] text-[11px] font-black tracking-widest uppercase mb-4 relative pb-1.5 inline-block">
                Game Servers
                <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-sky-500" />
              </h4>
              <ul className="space-y-2 text-[12px] font-semibold text-slate-500">
                {["Ark Server Rental", "Rust Server Rental", "FiveM Server Rental", "Arma 3 Server Rental", "Valheim Server Rental", "V Rising Server Rental", "Palworld Server Rental", "Unturned Server Rental", "Minecraft Server Rental"].map((link) => (
                  <li key={link}><a href="#" className="hover:text-sky-600 transition-colors">{link}</a></li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-[#0f1d37] text-[11px] font-black tracking-widest uppercase mb-4 relative pb-1.5 inline-block">
                  Institutional
                  <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-sky-500" />
                </h4>
                <ul className="space-y-2 text-[12px] font-semibold text-slate-500">
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Corporate Mail Server</a></li>
                </ul>
              </div>
            </div>

            {/* COL 3 */}
            <div>
              <h4 className="text-[#0f1d37] text-[11px] font-black tracking-widest uppercase mb-4 relative pb-1.5 inline-block">
                Corporate Information
                <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-sky-500" />
              </h4>
              <ul className="space-y-2 text-[12px] font-semibold text-slate-500">
                {["About Us", "Bank Accounts", "Service & Return Agreement", "Explicit Consent Text", "Privacy Policy", "Text of the Personal Data Protection Law (KVKK)"].map((link) => (
                  <li key={link}><a href="#" className="hover:text-sky-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* MID LEVEL COMPLIANCE TRACK */}
        <div className="py-8 flex flex-col items-center gap-5 text-center">
          
          {/* Sky-Blue Notice Line */}
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 px-4 py-2 rounded-full text-[11px] font-extrabold text-sky-600">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Our prices <span className="underline decoration-sm font-black">do not include VAT</span>.</span>
          </div>

          <p className="text-[10px] text-slate-400 font-medium max-w-2xl leading-relaxed">
            DeHost is a legal hosting company operating commercially under a license from the Information and Communication Technologies Authority (BTK). DeHost is a registered trademark of the Turkish Patent and Trademark Office.
          </p>

          {/* Validation Seals Area */}
          <div className="flex justify-center items-center gap-4 mt-2">
            <div className="h-9 px-3 bg-white border border-slate-200 rounded-xl flex items-center justify-center font-black text-slate-400 text-[10px] tracking-tight shadow-sm">
              PROTECTED BY <span className="text-[#0f1d37] ml-1 font-black">DMCA</span>
            </div>
            <div className="h-9 w-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
              <ShieldAlert className="w-4 h-4 text-sky-500" />
            </div>
          </div>
        </div>

        {/* LOWER FOOTER RIGHTS GRID */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-semibold text-slate-400">
          <span>DeHost© 2019–2026 All rights reserved.</span>
          
          {/* Card Brands */}
          <div className="flex items-center gap-1.5 opacity-70">
            <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-extrabold text-[9px] shadow-sm">troy</span>
            <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-extrabold text-[9px] shadow-sm">mastercard</span>
            <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-extrabold text-[9px] shadow-sm">VISA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}