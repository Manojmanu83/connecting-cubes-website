'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, FileCheck, CheckCircle2 } from 'lucide-react';

export const CargoInsuranceSection: React.FC = () => {
  return (
    <section id="insurance" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#EAF4FC] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#1E88E5]/20 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Copy & Details (Spans 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#1261A0] text-xs font-bold uppercase tracking-wider border border-[#1261A0]/10">
                RISK MITIGATION SUPPORT
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight leading-tight">
                Protect Your Cargo. Move With Confidence.
              </h2>

              <p className="text-base sm:text-lg text-[#526478] leading-relaxed max-w-2xl">
                Explore cargo insurance options to help protect eligible shipments against covered transit risks.
                Availability and coverage scope are subject to registered underwriter terms and conditions.
              </p>

              {/* Verified Information Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white shadow-xs">
                  <FileCheck className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2A4A]">
                      Documentation Guidance
                    </h3>
                    <p className="text-xs text-[#526478] mt-1 leading-relaxed">
                      Assistance with invoice declarations, declared value declarations, and transit documentation required for insurer review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2A4A]">
                      Tailored Transit Options
                    </h3>
                    <p className="text-xs text-[#526478] mt-1 leading-relaxed">
                      Advisory coordination to match registered underwriter policies for commercial, fragile, or high-value consignments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button & Honest Subtitle */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99]"
                >
                  <span>Enquire About Cargo Insurance</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <span className="text-xs text-[#526478]">
                  Available as an optional add-on during booking.
                </span>
              </div>
            </div>

            {/* Visual Card with Authentic Local Asset (Spans 5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/insurance.webp"
                    alt="Connecting Cubes Cargo Protection Desk"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                      Protection Desk
                    </span>
                    <span className="text-[11px] text-sky-200">
                      Multi-modal Transit
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-[#0B2A4A]">
                    Proactive Cargo Advisory
                  </h3>
                  <p className="text-xs text-[#526478] leading-relaxed">
                    Discuss transit coverage requirements with our team while booking your road, rail, or air movement across India.
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1261A0]">
                      Subject to insurer terms & conditions
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
