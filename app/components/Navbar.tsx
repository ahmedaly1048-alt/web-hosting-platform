"use client";

import React, { useState } from "react";
import { 
  Phone, Mail, Disc, User, ChevronDown, ShoppingCart, Menu, X, 
  HelpCircle, Copy, LogIn, Rocket, Ticket, Radio,
  Server, Cpu, Layers, ShieldCheck, HardDrive, Network, MailPlus, 
  Globe2, Terminal, Briefcase, Zap, ArrowRight, UserPlus
} from "lucide-react";

interface NavbarProps {
  onRegisterClick?: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("DEHOST10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <div className="w-full relative z-50 select-none font-sans bg-white">
      
      {/* --- TOP CAMPAIGN BAR --- */}
      <div className="w-full bg-gradient-to-r from-[#031424] via-[#08243e] to-[#0d3559] text-white text-[13px] py-2.5 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-blue-900/30">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shadow-inner">
            <Rocket className="w-4 h-4 text-blue-400" />
          </div>
          <p className="tracking-wide text-slate-100">
            Annual Server Purchases <span className="font-bold text-white">2 Months Free from Us!</span>
          </p>
        </div>
        
        <div className="flex items-center gap-3 text-slate-300">
          <span className="text-[12px] font-medium">10% Discount on Your First Order:</span>
          <button 
            onClick={handleCopyCode}
            className="border border-dashed border-blue-400/40 bg-blue-500/5 hover:bg-blue-500/10 px-3 py-1 rounded-md flex items-center gap-2 text-xs font-bold transition-all text-white active:scale-95 cursor-pointer focus:outline-none"
          >
            <Ticket className="w-3.5 h-3.5 text-blue-400" />
            <span>{copied ? "COPIED!" : "10%"}</span>
            <Copy className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      {/* --- MIDDLE INFO BAR --- */}
      <div className="w-full bg-[#05090e] text-slate-400 text-[12px] py-2.5 px-4 sm:px-8 flex justify-between items-center border-b border-slate-900">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <a href="tel:+903128701206" className="flex items-center gap-2 hover:text-blue-400 transition-colors text-slate-300 font-medium">
            <Phone className="w-3.5 h-3.5 text-blue-500" /> 
            <span>+90 312 870 12 06</span>
          </a>
          <span className="text-slate-800 hidden sm:inline">|</span>
          <a href="mailto:info@dehost.com.tr" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-blue-500" /> 
            <span>info@dehost.com.tr</span>
          </a>
          <span className="text-slate-800 hidden md:inline">|</span>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            <Disc className="w-3.5 h-3.5 text-[#5865F2]" /> 
            <span>Discord</span>
          </a>
          <span className="text-slate-800 hidden md:inline">|</span>
          <span className="flex items-center gap-2 font-semibold text-slate-200">
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse"></span> 
            Live Support Active
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors text-slate-300">
            <Radio className="w-3.5 h-3.5 text-blue-500" /> Blog
          </a>
          <span className="text-slate-800">|</span>
          <a href="#" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" /> Support Request
          </a>
          <span className="text-slate-800">|</span>
          
          {/* Linked Desktop Register Trigger Button */}
          <button 
            onClick={onRegisterClick}
            className="border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:text-white hover:border-slate-700 text-slate-200 font-bold px-3 py-1 rounded-md flex items-center gap-1.5 transition-all text-xs cursor-pointer outline-none"
          >
            <User className="w-3.5 h-3.5 text-blue-400" /> Register
          </button>
        </div>
      </div>

      {/* --- MAIN NAVIGATION NAVBAR --- */}
      <header className="w-full bg-white border-b border-slate-100 sticky top-0">
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-2xl font-black text-slate-800 tracking-tighter">
              de<span className="text-blue-600">host</span>
            </span>
          </div>

          {/* Desktop Navigation Links & Dropdowns */}
          <nav className="hidden xl:flex items-center gap-7 font-bold text-[14px] text-slate-700 h-12">
            <a href="#" className="hover:text-blue-600 transition-colors py-2">Homepage</a>
            
            {/* Domain Name */}
            <div className="relative group py-2">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] bg-rose-500 text-white font-black px-2 py-0.5 rounded-full shadow-sm shadow-rose-200 tracking-wide whitespace-nowrap">
                10% Discount
              </span>
              <a href="#" className="hover:text-blue-600 transition-colors">Domain Name</a>
            </div>

            {/* PRESENTER MEGA DROPDOWN */}
            <div className="relative group/mega h-full flex items-center">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[9px] bg-rose-500 text-white font-black px-2 py-0.5 rounded-full shadow-sm shadow-rose-200 tracking-wide whitespace-nowrap">
                10% Discount
              </span>
              <button className="hover:text-blue-600 transition-colors flex items-center gap-1 py-2 cursor-pointer focus:outline-none group-hover/mega:text-blue-600">
                <span>Presenter</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover/mega:rotate-180 group-hover/mega:text-blue-600 transition-transform duration-200" />
              </button>

              {/* Mega Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-[35%] pt-3 w-[960px] invisible opacity-0 scale-95 group-hover/mega:visible group-hover/mega:opacity-100 group-hover/mega:scale-100 transition-all duration-200 z-50 origin-top">
                <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden p-6 flex gap-6">
                  
                  {/* Left Side: Server Categories Content Grid */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-4 h-[3px] bg-blue-600 rounded-full"></span>
                      <span className="text-[11px] font-extrabold tracking-wider text-blue-600 uppercase">Server Categories</span>
                    </div>

                    <div className="grid grid-cols-3 gap-x-5 gap-y-4">
                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Server className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">VPS Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Affordable packages.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">VDS Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Affordable solutions.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Premium VDS Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Intel Xeon Platinum and Enterprise NVMe Disks.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">AMD Ryzen 9 5950X VDS</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">High performance and speed with the Ryzen 9 5950X.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">AMD Ryzen 9 7950X VDS</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Take flight with ultra-performance, jet-speed discs!</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">AMD Ryzen 9 9950X VDS</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">AMD Ryzen's top-of-the-line series offers 10Gbit speeds.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Terminal className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Plesk VDS</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Get automatic Plesk installation and a trial license.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Network className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Nested Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">High-scale virtual servers with NVMe disks.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <HardDrive className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Virtual Data Center Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Virtualize your dedicated resources. Next-generation tech!</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">ETSY Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Servers specifically designed for Etsy workflows.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <MailPlus className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Mail Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Mail server options tailored precisely to your needs.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Globe2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">America Location Server</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">US Location VDS / VPS high-throughput Servers.</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right Side Campaign Sidecard */}
                  <div className="w-[260px] bg-gradient-to-b from-[#091e3a] to-[#040e1a] rounded-xl p-5 flex flex-col justify-between text-white shadow-lg">
                    <div>
                      <span className="text-[9px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded font-black tracking-widest uppercase">
                        ⚡ Offer
                      </span>
                      <h3 className="text-sm font-bold mt-3 leading-snug">
                        2 Months Free with Annual Subscription
                      </h3>
                      <p className="text-[11px] text-slate-400 font-normal mt-2 leading-relaxed">
                        Premium and Ryzen VDS packages offer a pay-per-month, 12-month usage plan; including NVMe disk and 10Gbit bandwidth.
                      </p>
                    </div>
                    <button className="w-full mt-4 bg-white hover:bg-slate-100 text-[#091e3a] font-bold text-xs py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer">
                      <span>View Packages</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* HOSTING MEGA DROPDOWN */}
            <div className="relative group/hosting h-full flex items-center">
              <button className="hover:text-blue-600 transition-colors flex items-center gap-1 py-2 cursor-pointer focus:outline-none group-hover/hosting:text-blue-600">
                <span>Hosting</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover/hosting:rotate-180 group-hover/hosting:text-blue-600 transition-transform duration-200" />
              </button>

              {/* Mega Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-[45%] pt-3 w-[740px] invisible opacity-0 scale-95 group-hover/hosting:visible group-hover/hosting:opacity-100 group-hover/hosting:scale-100 transition-all duration-200 z-50 origin-top">
                <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden p-6 flex gap-6">
                  
                  {/* Left Side: Hosting Content Grid */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-4 h-[3px] bg-blue-600 rounded-full"></span>
                      <span className="text-[11px] font-extrabold tracking-wider text-blue-600 uppercase">Hosting Solutions</span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Globe2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Linux Hosting</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Linux Web Hosting packages.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Rocket className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Linux Reseller Hosting</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Reseller hosting packages.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Terminal className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">ispmanager</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">iSPmanager control panel licenses.</p>
                        </div>
                      </a>

                      <a href="#" className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2.5 h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs group-hover/item:text-blue-600 transition-colors">Corporate Hosting</h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">Corporate hosting packages.</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right Side Campaign Sidecard */}
                  <div className="w-[230px] bg-gradient-to-b from-[#091e3a] to-[#040e1a] rounded-xl p-5 flex flex-col justify-between text-white shadow-lg">
                    <div>
                      <span className="text-[9px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded font-black tracking-widest uppercase">
                        ✨ New Customer
                      </span>
                      <h3 className="text-sm font-bold mt-3 leading-snug">
                        20% Discount for the First Year
                      </h3>
                      <p className="text-[11px] text-slate-400 font-normal mt-2 leading-relaxed">
                        All Linux hosting packages offer uninterrupted performance and affordable prices, perfect for beginners.
                      </p>
                    </div>
                    <button className="w-full mt-4 bg-white hover:bg-slate-100 text-[#091e3a] font-bold text-xs py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer">
                      <span>Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            </div>

            <a href="#" className="hover:text-blue-600 transition-colors py-2">Game Servers</a>
            <a href="#" className="hover:text-blue-600 transition-colors py-2">Data Center</a>
            
            <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-0.5 py-2">
              <span>Institutional</span> 
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-md flex items-center gap-1.5 transition-all cursor-pointer">
              <LogIn className="w-4 h-4" /> Customer Panel
            </button>
            
            <div className="p-2.5 border border-slate-200 rounded-lg bg-white cursor-pointer text-slate-600 hover:border-slate-300 transition-all">
              <ShoppingCart className="w-4 h-4" />
            </div>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="xl:hidden p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* --- MOBILE ACCORDION NAVIGATION MENU --- */}
        {mobileMenuOpen && (
          <div className="xl:hidden w-full bg-white border-t border-slate-100 p-4 absolute top-full left-0 shadow-xl flex flex-col gap-2 font-bold text-sm text-slate-700 z-50 max-h-[75vh] overflow-y-auto">
            
            {/* Added Cross-device Register Link to the absolute top of the mobile tray */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRegisterClick) onRegisterClick();
              }}
              className="w-full px-3 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg flex items-center justify-between text-left transition-all border border-blue-100/60 mb-1 cursor-pointer"
            >
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                <UserPlus className="w-4 h-4" /> Create Account
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a href="#" className="text-blue-600 px-3 py-2 rounded-lg bg-blue-50/50">Homepage</a>
            
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center">
              <span>Domain Name</span> 
              <span className="text-[9px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded-full">10% Discount</span>
            </a>
            
            {/* Presenter Mobile Block */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown("presenter")}
                className="w-full px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center text-left"
              >
                <span className="flex items-center gap-2">Presenter <span className="text-[9px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded-full">10% Discount</span></span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeMobileDropdown === "presenter" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
              {activeMobileDropdown === "presenter" && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-2 bg-slate-50/50 rounded-lg mt-1 border border-slate-100">
                  <span className="text-[10px] text-blue-600 font-extrabold uppercase px-2">Server Categories</span>
                  {["VPS Server", "VDS Server", "Premium VDS", "Ryzen 9 5950X", "Ryzen 9 7950X", "Ryzen 9 9950X", "Plesk VDS", "Nested Server", "Virtual Data Center", "ETSY Server", "Mail Server", "America Server"].map((item) => (
                    <a key={item} href="#" className="text-xs font-medium text-slate-600 hover:text-blue-600 px-2 py-1">{item}</a>
                  ))}
                </div>
              )}
            </div>

            {/* Hosting Mobile Block */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown("hosting")}
                className="w-full px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center text-left"
              >
                <span>Hosting</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeMobileDropdown === "hosting" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
              {activeMobileDropdown === "hosting" && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-2 bg-slate-50/50 rounded-lg mt-1 border border-slate-100">
                  <span className="text-[10px] text-blue-600 font-extrabold uppercase px-2">Hosting Solutions</span>
                  {["Linux Hosting", "Linux Reseller Hosting", "ispmanager", "Corporate Hosting"].map((item) => (
                    <a key={item} href="#" className="text-xs font-medium text-slate-600 hover:text-blue-600 px-2 py-1">{item}</a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg">Game Servers</a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg">Data Center</a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center">
              <span>Institutional</span> <ChevronDown className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        )}
      </header>
    </div>
  );
}