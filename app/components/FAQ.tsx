"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Headphones } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: AccordionItem[] = [
    {
      question: "What are the advantages of DeHost?",
      answer: "DeHost offers high performance and fast website loading times by utilizing the latest technology, such as SSD drives and Intel Xeon processors. It ensures the security of your website and data by providing advanced security features such as DDoS protection, SSL certificates, and optional paid backups. Offering 24/7 Turkish support with an experienced and knowledgeable support team."
    },
    {
      question: "Can I migrate my websites from different companies to DeHost?",
      answer: "Yes, you can migrate your websites effortlessly. Our technical team handles full migration backup restoration setups for your cPanel or Plesk architecture entirely free of charge with zero site configuration downtime."
    },
    {
      question: "What are the differences between individual hosting and corporate hosting?",
      answer: "Corporate hosting packages are deployed onto lower-density server pools with dedicated hardware core isolation parameters, enhanced execution memory, and strict security."
    }
  ];

  return (
    <section className="w-full bg-[#fafcfd] text-slate-800 py-16 lg:py-24 font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-8">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 font-extrabold text-[10.5px] uppercase tracking-wider">FAQ</span>
            </div>

            <h3 className="text-[32px] lg:text-[36px] font-black tracking-tight text-[#0f1d37] leading-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-400 text-[13.5px] font-medium mt-3">
              No questions left unanswered.
            </p>

            {/* Support CTA Card */}
            <div className="w-full mt-8 bg-sky-500/5 border border-sky-500/10 rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:bg-sky-500/10 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#062433] to-[#03151d] flex items-center justify-center text-sky-400 shadow-md">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-extrabold text-[13px] text-[#0f1d37]">Contact Support</span>
                  <span className="text-[11px] text-sky-600 font-bold mt-1.5">24/7 live support</span>
                </div>
              </div>
              <span className="text-sky-600 font-extrabold text-[14px] transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>

          {/* ACCORDION */}
          <div className="lg:col-span-8 w-full space-y-3">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-sky-500 shadow-lg shadow-sky-500/[0.02] ring-1 ring-sky-500/20" 
                      : "border-slate-100 hover:border-slate-200 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left font-bold text-[14.5px] text-[#0f1d37] tracking-tight transition-colors hover:text-sky-600"
                  >
                    <span>{item.question}</span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-sky-600 text-white" : "bg-sky-50 text-sky-600"
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-6 pb-5 pt-1 text-slate-400 text-[13px] leading-relaxed font-medium text-justify border-t border-slate-50 mt-1">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}