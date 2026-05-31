"use client";

import React from "react";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Adin Mining",
      role: "Owner of Adin Mining",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      text: "We are receiving services for Corporate Identity Design and Mail Server. We have not experienced any problems with these services, and they continue to run smoothly.",
    },
    {
      name: "AY-DEM Construction",
      role: "Owner of AY-DEM Construction",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      text: "We met DeHost through Mr. Doğukan. We agreed to receive many services tailored to our corporate needs. Thank you for your interest.",
    },
    {
      name: "Mahmut Piri",
      role: "ankaraasyahavalandirma.com.tr",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      text: "We first encountered DeHost in 2023 regarding web design, SEO, and email server services. We are satisfied with the service we receive from them.",
    },
    {
      name: "Mehmet Can",
      role: "Owner of Fastupload.net",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      text: "We decided to work with DeHost, and since then all our services have been running smoothly. We are satisfied with their web hosting and server-side support.",
    }
  ];

  return (
    <section className="w-full bg-[#fafcfd] py-16 lg:py-24 font-sans text-slate-800 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: META BRAND SCORING */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-8">
            <div className="space-y-3">
              <h2 className="text-[36px] lg:text-[42px] font-black tracking-tight text-[#0f1d37] leading-none">
                Customer Reviews
              </h2>
              <p className="text-slate-400 text-[14px] font-medium leading-relaxed max-w-sm">
                What do our customers say about the services they received?
              </p>
            </div>

            {/* Google Verified Score Badge */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm max-w-[280px]">
              <div className="flex items-center gap-2 text-[#0f1d37] font-bold text-[14px]">
                <span className="text-sky-500 font-black text-[18px]">G</span> Google Reviews
              </div>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-[38px] font-black text-[#0f1d37] tracking-tight">4.9</span>
                <span className="text-slate-400 font-bold text-[14px]">/ 5.0</span>
              </div>
              <div className="flex gap-1 mt-1 text-sky-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sky-500 stroke-none" />
                ))}
              </div>
              <p className="text-[11px] text-slate-400 font-bold mt-3 tracking-tight">
                200+ verified reviews
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE GRID LABELS */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* FEATURED TOP ROW ACCENT COMPONENT */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:border-sky-200 transition-all">
              <div className="absolute right-0 bottom-0 opacity-[0.03] select-none pointer-events-none transform translate-x-4 translate-y-4">
                <span className="text-[160px] font-black leading-none">“</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80" alt="Emre" className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                <div className="leading-none">
                  <h4 className="font-extrabold text-[14.5px] text-[#0f1d37]">Emre</h4>
                  <span className="text-[11px] text-slate-400 font-bold mt-1 inline-block">Owner of Abra CO-OP</span>
                </div>
              </div>
              <p className="text-slate-500 text-[13px] leading-relaxed font-medium mt-4 text-justify">
                After switching to DeHost, I realized that searching for quality and stable service from other companies for years was a huge waste of time. Thank you, DeHost, for all your support and services. Our server is safe with you.
              </p>
              <div className="flex gap-0.5 mt-4 text-sky-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-sky-500 stroke-none" />
                ))}
              </div>
            </div>

            {/* TWO COLUMN FLOW LOWER GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-sky-200 transition-all">
                  <div className="absolute right-0 bottom-0 opacity-[0.03] select-none pointer-events-none transform translate-x-2 translate-y-2">
                    <span className="text-[110px] font-black leading-none">“</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <img src={item.img} alt={item.name} className="w-9 h-9 rounded-full object-cover border border-slate-100" />
                      <div className="leading-none">
                        <h4 className="font-extrabold text-[13.5px] text-[#0f1d37]">{item.name}</h4>
                        <span className="text-[10px] text-slate-400 font-bold mt-1 inline-block max-w-[160px] truncate">{item.role}</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-[12.5px] leading-relaxed font-medium mt-4 text-justify">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex gap-0.5 mt-5 text-sky-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-sky-500 stroke-none" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}