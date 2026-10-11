'use client';

import React from 'react';
import {
  Clock,
  UserCheck,
  Share2,
  Globe2,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FC] text-[#1261A0] text-xs font-bold uppercase tracking-wider mb-4">
            THE CONNECTING CUBES ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight leading-tight">
            Why Businesses Choose Connecting Cubes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#526478] leading-relaxed">
            Coordinated freight logistics engineered around transparency, responsive communication, and dependable execution across India.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Spotlight Feature Card (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2A4A] via-[#0E365E] to-[#1261A0] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-sky-300 flex items-center justify-center border border-white/10">
                <Globe2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-200 block mb-2">
                  CORE PILLAR 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Pan-India Reach
                </h3>
                <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                  Transportation coordination across a broad network of locations in India,
                  connecting major commercial corridors with regional destinations.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>20,000+ PIN codes reach capability</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Highways, railway sidings, and air cargo terminals</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Coordinated transit planning from dispatch to delivery</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-300">Operational Experience</span>
              <span className="text-sm font-bold text-white">20+ Combined Years</span>
            </div>
          </div>

          {/* 5 Distinct Cards in a 2-column subgrid (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Benefit 1 */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#1261A0]/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">02</span>
                </div>
                <h4 className="text-base font-bold text-[#0B2A4A] tracking-tight mb-2">
                  Time-Conscious Delivery Coordination
                </h4>
                <p className="text-xs sm:text-sm text-[#526478] leading-relaxed">
                  We coordinate transportation options with delivery requirements in mind, prioritizing reliable schedules and prompt dispatch.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#1261A0]">
                Schedule-Focused Planning
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#1261A0]/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">03</span>
                </div>
                <h4 className="text-base font-bold text-[#0B2A4A] tracking-tight mb-2">
                  End-to-End Coordination
                </h4>
                <p className="text-xs sm:text-sm text-[#526478] leading-relaxed">
                  A single point of contact to help manage transportation requirements, eliminating multiple vendor confusion and miscommunication.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#1261A0]">
                Single Point Accountability
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#1261A0]/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">04</span>
                </div>
                <h4 className="text-base font-bold text-[#0B2A4A] tracking-tight mb-2">
                  Multiple Transportation Providers
                </h4>
                <p className="text-xs sm:text-sm text-[#526478] leading-relaxed">
                  Suitable transportation options through a coordinated provider network, ensuring capacity resilience and optimal vehicle matching.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#1261A0]">
                Vetted Carrier Network
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#1261A0]/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">05</span>
                </div>
                <h4 className="text-base font-bold text-[#0B2A4A] tracking-tight mb-2">
                  Cargo Insurance Assistance
                </h4>
                <p className="text-xs sm:text-sm text-[#526478] leading-relaxed">
                  Support in exploring cargo insurance options, subject to availability and applicable policy terms, to protect goods during transit.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#1261A0]">
                Policy Term Assistance
              </div>
            </div>

            {/* Benefit 5 - Cost Conscious (Full width across bottom of right subgrid) */}
            <div className="sm:col-span-2 bg-[#EAF4FC]/60 rounded-2xl p-6 sm:p-7 border border-[#1E88E5]/20 hover:border-[#1261A0]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1261A0] text-white flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B2A4A] tracking-tight mb-1">
                    Cost-Conscious Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-[#526478] leading-relaxed max-w-xl">
                    We work to identify suitable transportation options based on cargo requirements and available services, optimizing logistical expense without compromising handling safety.
                  </p>
                </div>
              </div>
              <div className="self-end sm:self-center">
                <span className="text-xs font-mono font-bold text-[#1261A0] bg-white px-3 py-1 rounded-full border border-blue-100">
                  06
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
