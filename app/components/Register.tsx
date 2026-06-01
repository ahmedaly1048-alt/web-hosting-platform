"use client";

import React, { useState } from "react";
import { 
  User, Mail, Lock, ShieldCheck, Eye, EyeOff, 
  ArrowRight, Check, Disc, Building2
} from "lucide-react";

interface RegisterProps {
  isModal?: boolean;
}

export default function RegisterComponent({ isModal = false }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration Data submitting: ", formData);
  };

  const hasMinLength = formData.password.length >= 8;
  const hasNumber = /\d/.test(formData.password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_]/.test(formData.password);

  return (
    <div className={`w-full text-slate-800 flex items-center justify-center relative overflow-hidden font-sans select-none ${
      isModal ? "p-0" : "min-h-screen bg-[#fafcfd] py-6 px-4 sm:px-6"
    }`}>
      
      {/* Ambient backgrounds for standalone mode */}
      {!isModal && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-sky-300/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-300/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-[30%] right-[-5rem] w-[22rem] h-[22rem] bg-[#dcecf9]/40 rounded-full opacity-80 border-2 border-slate-50 shadow-inner pointer-events-none" />
        </>
      )}

      {/* Main Container - More compact */}
      <div className={`w-full max-w-[950px] bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10 min-h-[580px] ${
        isModal ? "border-0 shadow-none rounded-0" : "border border-slate-100 rounded-2xl shadow-xl"
      }`}>
        
        {/* --- LEFT SIDEBAR - Reduced padding --- */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#06182c] via-[#0b243f] to-[#040e1a] p-6 lg:p-8 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div>
            <div className="flex items-center cursor-pointer mb-6">
              <span className="text-xl font-black tracking-tighter">
                de<span className="text-[#0091ff]">host</span>
              </span>
            </div>

            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase">
              🚀 Join dehost
            </span>
            
            <h2 className="text-xl lg:text-2xl font-extrabold mt-3 leading-tight tracking-tight">
              Deploy Cloud Architecture in Seconds.
            </h2>
            <p className="text-slate-400 text-[11px] mt-2 leading-relaxed font-medium">
              Create an account for full authorization over NVMe VDS deployments, instant domain provisioning, and enterprise control panels.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Check className="w-3 h-3 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold text-[11px]">Instant Deployment Platform</h4>
                  <p className="text-[10px] text-slate-400">Automated Linux/Windows setup configurations.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Check className="w-3 h-3 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold text-[11px]">Tier-3 Infrastructure</h4>
                  <p className="text-[10px] text-slate-400">Low-latency physical servers located in Türkiye.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
            <span>© 2026 dehost.com.tr</span>
            <span>Secure SSL Encrypted</span>
          </div>
        </div>

        {/* --- RIGHT PANEL - Compact form --- */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-8 flex flex-col justify-center bg-white">
          <div className="w-full max-w-[420px] mx-auto">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Create Client Profile
              </h3>
              <p className="text-slate-500 text-[11px] font-medium mt-0.5">
                Already registered?{" "}
                <a href="#" className="text-[#0091ff] hover:underline font-bold transition-all">
                  Access Client Panel
                </a>
              </p>
            </div>

            {/* Social buttons - compact */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button type="button" className="border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 rounded-lg py-2 px-3 flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                <span>Google</span>
              </button>
              <button type="button" className="border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 rounded-lg py-2 px-3 flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                <Disc className="w-3.5 h-3.5 text-[#5865F2]" />
                <span>Discord</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <span className="relative px-2 bg-white text-[9px] font-black text-slate-400 tracking-wider uppercase">
                Or Continue With Form
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0091ff] focus:ring-2 focus:ring-blue-500/5 text-slate-800 text-xs font-semibold pl-8 pr-3 py-2 rounded-lg transition-all outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0091ff] focus:ring-2 focus:ring-blue-500/5 text-slate-800 text-xs font-semibold pl-8 pr-3 py-2 rounded-lg transition-all outline-none"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-0.5">
                <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">
                  Company <span className="text-[8px] text-slate-400 lowercase font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Dehost Enterprise Ltd."
                    className="w-full bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0091ff] focus:ring-2 focus:ring-blue-500/5 text-slate-800 text-xs font-semibold pl-8 pr-3 py-2 rounded-lg transition-all outline-none"
                  />
                </div>
              </div>

              {/* Passwords - compact grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="space-y-0.5">
                  <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0091ff] focus:ring-2 focus:ring-blue-500/5 text-slate-800 text-xs font-semibold pl-8 pr-7 py-2 rounded-lg transition-all outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-2 flex items-center text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">Confirm</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0091ff] focus:ring-2 focus:ring-blue-500/5 text-slate-800 text-xs font-semibold pl-8 pr-7 py-2 rounded-lg transition-all outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-2 flex items-center text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Security strength - compact */}
              {formData.password.length > 0 && (
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 space-y-1 transition-all duration-200">
                  <p className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wide">Security:</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[9px] font-semibold">
                    <span className={`flex items-center gap-1 ${hasMinLength ? "text-emerald-600" : "text-slate-400"}`}>
                      <span className={`w-1 h-1 rounded-full ${hasMinLength ? "bg-emerald-500" : "bg-slate-300"}`} /> 8+ chars
                    </span>
                    <span className={`flex items-center gap-1 ${hasNumber ? "text-emerald-600" : "text-slate-400"}`}>
                      <span className={`w-1 h-1 rounded-full ${hasNumber ? "bg-emerald-500" : "bg-slate-300"}`} /> 1 digit
                    </span>
                    <span className={`flex items-center gap-1 ${hasSpecial ? "text-emerald-600" : "text-slate-400"}`}>
                      <span className={`w-1 h-1 rounded-full ${hasSpecial ? "bg-emerald-500" : "bg-slate-300"}`} /> special
                    </span>
                  </div>
                </div>
              )}

              {/* Agreement - compact */}
              <div className="flex items-start gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  required
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-0.5 w-3.5 h-3.5 rounded border-slate-300 text-[#0091ff] focus:ring-[#0091ff] cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="text-[10px] font-medium text-slate-500 leading-tight">
                  I accept <a href="#" className="text-[#0091ff] font-bold hover:underline">Terms</a>,{" "}
                  <a href="#" className="text-[#0091ff] font-bold hover:underline">KVKK</a> and approve notifications.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0091ff] hover:bg-[#007cdb] text-white font-bold text-[13px] py-2 rounded-lg shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5 transition-all active:scale-[0.99] group mt-1 cursor-pointer"
              >
                <span>Complete Registration</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}