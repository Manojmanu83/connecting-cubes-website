'use client';

import React, { useState } from 'react';
import { Search, ShieldAlert, CheckCircle, Info, Clock, Phone, AlertCircle } from 'lucide-react';

export const TrackingSection: React.FC = () => {
  const [docketNumber, setDocketNumber] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docketNumber.trim()) {
      setErrorMsg('Please enter a valid LR, Docket, or Consignment number.');
      return;
    }
    setErrorMsg('');
    setSearchInitiated(true);
  };

  return (
    <section id="tracking" className="py-20 lg:py-28 bg-[#F1F6FB] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FC] text-[#1261A0] text-xs font-bold uppercase tracking-wider mb-4">
            CONSIGNMENT TRACKING DESK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight">
            Track Your Shipment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#526478] leading-relaxed">
            Enter your booking reference or transporter consignment note to check shipment coordination status.
          </p>
        </div>

        {/* Tracking Search Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label
                htmlFor="tracking-input"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-2"
              >
                Consignment Note / Docket Number / Booking Ref
              </label>
              <div className="relative">
                <input
                  id="tracking-input"
                  type="text"
                  value={docketNumber}
                  onChange={(e) => {
                    setDocketNumber(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="e.g., CC-2026-9842 or Carrier LR Number"
                  className="w-full px-4 py-3.5 text-sm sm:text-base rounded-xl border border-slate-300 focus:border-[#1261A0] focus:ring-2 focus:ring-[#1261A0]/20 text-slate-900 outline-none transition-all placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-5 rounded-lg bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Track</span>
                </button>
              </div>
              {errorMsg && (
                <p className="mt-2 text-xs text-red-600 font-semibold">{errorMsg}</p>
              )}
            </div>
          </form>

          {/* Honest Result Feedback (No fabricated fake GPS coordinates) */}
          {searchInitiated && (
            <div className="mt-8 pt-8 border-t border-slate-100 animate-fade-in space-y-4">
              <div className="p-4 rounded-xl bg-[#EAF4FC] border border-[#1E88E5]/20 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-[#0B2A4A]">
                    Carrier Synchronization Desk: Ref #{docketNumber}
                  </p>
                  <p>
                    Connecting Cubes coordinates shipments across dedicated multi-carrier networks. Direct telemetry is secured via your assigned shipment desk to ensure strict commercial privacy.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-800">
                  How to receive live dispatch updates:
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Contact your assigned coordination manager directly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Receive WhatsApp and Email status notifications upon milestone clearance</span>
                </div>
              </div>

              <div className="text-center pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl bg-[#0B2A4A] text-white text-xs font-bold hover:bg-[#1261A0] transition-colors"
                >
                  Connect with Assigned Coordinator
                </a>
              </div>
            </div>
          )}

          {/* Guidelines below search */}
          {!searchInitiated && (
            <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-[#526478] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1261A0]" />
                Updates synced per carrier dispatch cycle
              </span>
              <a
                href="#contact"
                className="font-bold text-[#1261A0] hover:underline"
              >
                Need tracking support?
              </a>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
