'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';

export const CargoInsuranceSection: React.FC = () => {
  return (
    <section id="insurance" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#EAF4FC] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#1E88E5]/20 relative overflow-hidden shadow-sm">
          
          {/* Background watermark badge */}
          <div className="absolute right-6 -bottom-10 opacity-5 pointer-events-none">
            <ShieldCheck className="w-80 h-80 text-[#1261A0]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Copy & Details (Spans 8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#1261A0] text-xs font-bold uppercase tracking-wider border border-[#1261A0]/10">
                RISK MITIGATION SUPPORT
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight leading-tight">
                Protect Your Cargo. Move With Confidence.
              </h2>

              <p className="text-base sm:text-lg text-[#526478] leading-relaxed max-w-2xl">
                Explore cargo insurance options to help protect eligible shipments against covered transit risks,
                subject to the insurer&apos;s policy terms and conditions.
              </p>

              {/* Verified Information Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white">
                  <FileCheck className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2A4A]">
                      Documentation Guidance
                    </h3>
                    <p className="text-xs text-[#526478] mt-1">
                      Assistance in preparing necessary invoice declarations and transit paperwork for underwriting review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white">
                  <ShieldCheck className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2A4A]">
                      Tailored Transit Options
                    </h3>
                    <p className="text-xs text-[#526478] mt-1">
                      Advisory support to match third-party transit policies with high-value or fragile commercial consignments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transparent Disclaimer */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/60 border border-slate-200 text-xs text-slate-600">
                <AlertCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-800">Please Note:</strong> Cargo insurance is provided by registered third-party insurance underwriters. Shipments are not automatically insured; coverage eligibility, scope, deductibles, and claims are subject to the insurer&apos;s explicit policy terms.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <span>Enquire About Cargo Insurance</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual Icon Illustration Card (Spans 4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-md border border-slate-100 space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#EAF4FC] text-[#1261A0] mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-9 h-9" />
                </div>
                <h3 className="text-base font-bold text-[#0B2A4A]">
                  Cargo Protection Desk
                </h3>
                <p className="text-xs text-[#526478] leading-relaxed">
                  Discuss transit coverage requirements with our team while booking your road, rail, or air movement.
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-[#1261A0] uppercase tracking-wider block">
                    Optional Add-On Service
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
