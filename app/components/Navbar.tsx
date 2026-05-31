"use client";

import React, { useState } from "react";
import { 
  Phone, Mail, Disc, User, ChevronDown, ShoppingCart, Menu, X, 
  BookOpen, HelpCircle, Copy, LogIn, Rocket
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("DEHOST10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full relative z-50 select-none font-sans">
      
      {/* --- COMPACT TOP CAMPAIGN BAR --- */}
      <div className="w-full bg-gradient-to-r from-[#0b253a] via-[#0f314d] to-[#144269] text-white text-xs py-1.5 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-1.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
            <Rocket className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <p className="font-medium">
            Annual Server Purchases <span className="font-bold">2 Months Free</span>
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-slate-200">
          <span className="text-[11px]">First order discount:</span>
          <button 
            onClick={handleCopyCode}
            className="border border-dashed border-sky-400/50 bg-white/5 hover:bg-white/10 px-2.5 py-0.5 rounded-md flex items-center gap-1.5 text-[11px] font-bold transition-all"
          >
            <span>{copied ? "✓ COPIED" : "🎟️ DEHOST10"}</span>
            <Copy className="w-3 h-3 text-sky-400" />
          </button>
        </div>
      </div>

      {/* --- COMPACT MIDDLE INFO BAR --- */}
      <div className="w-full bg-[#090d12] text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 flex justify-between items-center border-b border-zinc-800/50">
        {/* Left Side Links */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <a href="tel:+903128701206" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#0091ff]" /> 
            <span className="font-medium text-slate-200">+90 312 870 12 06</span>
          </a>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <a href="mailto:info@dehost.com.tr" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#0091ff]" /> 
            <span>info@dehost.com.tr</span>
          </a>
          <span className="text-zinc-700 hidden md:inline">|</span>
          <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Disc className="w-3.5 h-3.5 text-[#5865F2]" /> 
            <span>Discord</span>
          </a>
          <span className="text-zinc-700 hidden md:inline">|</span>
          <span className="flex items-center gap-1.5 font-medium text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bfff] shadow-[0_0_6px_#00bfff]"></span> 
            Live Support
          </span>
        </div>

        {/* Right Side Utilities */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-[#0091ff]" /> Blog
          </a>
          <span className="text-zinc-700">|</span>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            <HelpCircle className="w-3.5 h-3.5 text-[#0091ff]" /> Support
          </a>
          <span className="text-zinc-700">|</span>
          <a href="#" className="bg-zinc-800/40 hover:bg-zinc-800 text-white font-semibold px-3 py-1 rounded-md flex items-center gap-1.5 transition-all text-[11px]">
            <User className="w-3 h-3 text-[#0091ff]" /> Register
          </a>
        </div>
      </div>

      {/* --- MAIN COMPACT NAVBAR --- */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 shadow-sm">
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-2xl font-black text-slate-800 tracking-tighter">
              de<span className="text-[#0091ff]">host</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 font-semibold text-sm text-slate-700">
            <a href="#" className="hover:text-[#0091ff] transition-colors">Home</a>
            
            {/* Domain with Badge */}
            <div className="relative group">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] bg-rose-500 text-white font-black px-1.5 py-0.5 rounded whitespace-nowrap">
                10% OFF
              </span>
              <a href="#" className="hover:text-[#0091ff] transition-colors">Domain</a>
            </div>

            {/* Presenter with Dropdown */}
            <div className="relative group flex items-center gap-0.5">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] bg-rose-500 text-white font-black px-1.5 py-0.5 rounded whitespace-nowrap">
                10% OFF
              </span>
              <a href="#" className="hover:text-[#0091ff] transition-colors">Presenter</a>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0091ff]" />
            </div>

            <a href="#" className="hover:text-[#0091ff] transition-colors flex items-center gap-0.5">
              Hosting <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
            
            <a href="#" className="hover:text-[#0091ff] transition-colors">Game Servers</a>
            <a href="#" className="hover:text-[#0091ff] transition-colors">Data Center</a>
            
            <a href="#" className="hover:text-[#0091ff] transition-colors flex items-center gap-0.5">
              Company <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="bg-[#0091ff] hover:bg-[#007cdb] text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-md flex items-center gap-1.5 transition-all">
              <LogIn className="w-3.5 h-3.5" /> Panel
            </button>
            
            <div className="p-2 border border-slate-200 rounded-lg bg-white cursor-pointer text-slate-600 hover:border-slate-300 transition-all">
              <ShoppingCart className="w-4 h-4" />
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="xl:hidden p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden w-full bg-white border-t border-slate-100 p-3 absolute top-full left-0 shadow-lg flex flex-col gap-1.5 font-semibold text-sm text-slate-700 z-50">
            <a href="#" className="text-[#0091ff] px-3 py-2 rounded-lg bg-sky-50">Home</a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center">
              Domain <span className="text-[9px] bg-rose-500 text-white font-bold px-1.5 py-0.5 rounded">10% OFF</span>
            </a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center">
              Presenter <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center">
              Hosting <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg">Game Servers</a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg">Data Center</a>
            <a href="#" className="px-3 py-2 hover:bg-slate-50 rounded-lg flex justify-between items-center">
              Company <ChevronDown className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </header>
    </div>
  );
}