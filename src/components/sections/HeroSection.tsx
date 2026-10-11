'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Search,
  Truck,
  Train,
  Plane,
  ShieldCheck,
  CheckCircle,
  Clock,
  Compass,
} from 'lucide-react';
import { TrackingModal } from '../common/TrackingModal';

export const HeroSection: React.FC = () => {
  const [consignmentInput, setConsignmentInput] = useState('');
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [inputError, setInputError] = useState('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consignmentInput.trim()) {
      setInputError('Please enter a valid consignment reference or docket number.');
      return;
    }
    setInputError('');
    setTrackingModalOpen(true);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#F7FAFC] via-[#F1F6FB] to-white overflow-hidden"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0B2A4A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Ambient gradient circles */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#1261A0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1E88E5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Core Narrative & Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4FC] border border-[#1E88E5]/20 text-[#1261A0] text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
              LOGISTICS • CONNECTIVITY • RELIABILITY
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B2A4A] tracking-tight leading-[1.12]">
              Reliable Logistics.{' '}
              <span className="text-[#1261A0] inline-block">
                Connected Across India.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#526478] leading-relaxed max-w-2xl font-normal">
              End-to-end logistics coordination connecting businesses with reliable
              transportation solutions across road, rail, and air.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B2A4A] text-base font-bold border border-slate-300 hover:border-[#1261A0] transition-all"
              >
                <span>Talk to Our Team</span>
              </a>
            </div>

            {/* Restrained Trust Line */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-semibold text-[#526478]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#1261A0]" />
                  Pan-India Reach
                </span>
                <span className="mx-2 text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#1261A0]" />
                  Multiple Transport Options
                </span>
                <span className="mx-2 text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#1261A0]" />
                  Dedicated Coordination
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Graphic + Floating Interactive Panel */}
          <div className="lg:col-span-5 relative">
            {/* Visual Backing Graphic: Logistics Coordination Node Graphic */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0B2A4A] via-[#0E365E] to-[#1261A0] p-6 sm:p-8 text-white shadow-2xl overflow-hidden border border-slate-800">
              {/* Background decorative transport grid */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,5 95,28 95,72 50,95 5,72 5,28" />
                </svg>
              </div>

              {/* Badges of Transport Coordination */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-200">
                    Dispatch Coordination Desk
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-sky-200 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <Clock className="w-3 h-3" />
                  <span>Pan-India Transit</span>
                </div>
              </div>

              {/* Mode indicators */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 text-center border border-white/10">
                  <Truck className="w-4 h-4 mx-auto mb-1 text-sky-300" />
                  <span className="text-[11px] font-semibold block text-white">Road</span>
                  <span className="text-[9px] text-slate-300">FTL / PTL</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 text-center border border-white/10">
                  <Train className="w-4 h-4 mx-auto mb-1 text-sky-300" />
                  <span className="text-[11px] font-semibold block text-white">Rail</span>
                  <span className="text-[9px] text-slate-300">Long Haul</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 text-center border border-white/10">
                  <Plane className="w-4 h-4 mx-auto mb-1 text-sky-300" />
                  <span className="text-[11px] font-semibold block text-white">Air</span>
                  <span className="text-[9px] text-slate-300">Express Cargo</span>
                </div>
              </div>

              {/* Polished White Floating Panel / Card */}
              <div className="bg-white rounded-xl p-5 sm:p-6 text-[#17202A] shadow-lg border border-slate-100">
                
                {/* 1. TRACK YOUR SHIPMENT */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0B2A4A] flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-[#1261A0]" />
                      TRACK YOUR SHIPMENT
                    </h2>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Docket / LR
                    </span>
                  </div>

                  <form onSubmit={handleTrackSubmit} className="space-y-2">
                    <div className="relative">
                      <input
                        type="text"
                        value={consignmentInput}
                        onChange={(e) => {
                          setConsignmentInput(e.target.value);
                          if (inputError) setInputError('');
                        }}
                        placeholder="Enter consignment number..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 placeholder-slate-400 transition-all outline-none"
                      />
                    </div>
                    {inputError && (
                      <p className="text-[11px] text-red-600 font-medium">{inputError}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-lg bg-[#0B2A4A] hover:bg-[#1261A0] text-white text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>Track Shipment</span>
                    </button>
                  </form>
                </div>

                {/* Subtle Divider */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-[10px] font-bold text-slate-400 tracking-wider">
                      OR
                    </span>
                  </div>
                </div>

                {/* 2. NEED TO MOVE CARGO? */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0B2A4A] mb-1">
                    NEED TO MOVE CARGO?
                  </h3>
                  <p className="text-xs text-[#526478] mb-3 leading-relaxed">
                    Have cargo to transport across India? Share your origin, destination,
                    and freight requirements for tailored options.
                  </p>
                  <a
                    href="#quote"
                    className="w-full py-2.5 px-4 rounded-lg bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Shipment Tracking Lookup Modal */}
      <TrackingModal
        isOpen={trackingModalOpen}
        onClose={() => setTrackingModalOpen(false)}
        consignmentNumber={consignmentInput}
      />
    </section>
  );
};
