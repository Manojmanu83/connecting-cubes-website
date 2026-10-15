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
  const [selectedTransporter, setSelectedTransporter] = useState('');
  const [consignmentInput, setConsignmentInput] = useState('');
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [inputError, setInputError] = useState('');

  const TRANSPORTERS = [
    'DELHIVERY',
    'XPRESSBEES',
    'RIVIGO',
    'DP WORLD',
    'MAHINDRA',
    'GATI',
  ];

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTransporter) {
      setInputError('Please select a transporter network first.');
      return;
    }
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
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#061729] via-[#0B2A4A] to-[#0E365E] text-white overflow-hidden"
    >
      {/* 1. Ambient Lighting & Restrained Gradient Atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1261A0]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#1E88E5]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* 2. Fine Background Logistics Route Mesh & Connected Nodes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#64B5F6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Fine Animated Route Lines between nodes */}
        <g className="animate-route">
          <line x1="8%" y1="28%" x2="28%" y2="38%" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="28%" y1="38%" x2="45%" y2="24%" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="28%" y1="38%" x2="35%" y2="68%" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="45%" y1="24%" x2="68%" y2="35%" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="35%" y1="68%" x2="60%" y2="62%" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="60%" y1="62%" x2="82%" y2="52%" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="68%" y1="35%" x2="88%" y2="30%" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
        </g>

        {/* Glowing Location Nodes */}
        {[
          { cx: '8%', cy: '28%', r: 3 },
          { cx: '28%', cy: '38%', r: 4 },
          { cx: '45%', cy: '24%', r: 3.5 },
          { cx: '35%', cy: '68%', r: 3 },
          { cx: '60%', cy: '62%', r: 4 },
          { cx: '68%', cy: '35%', r: 3.5 },
          { cx: '82%', cy: '52%', r: 3 },
          { cx: '88%', cy: '30%', r: 4 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r={node.r + 4} fill="#1E88E5" opacity="0.3" className="motion-safe:animate-pulse" />
            <circle cx={node.cx} cy={node.cy} r={node.r} fill="#FFFFFF" />
          </g>
        ))}
      </svg>

      {/* 3. Small Number of Slowly Drifting Constellation Particles */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-sky-300/40 animate-particle-1" />
        <div className="absolute top-[35%] left-[40%] w-1 h-1 rounded-full bg-white/50 animate-particle-2" />
        <div className="absolute top-[65%] left-[25%] w-2 h-2 rounded-full bg-[#1E88E5]/30 animate-particle-1" />
        <div className="absolute top-[18%] right-[30%] w-1.5 h-1.5 rounded-full bg-sky-200/40 animate-particle-2" />
        <div className="absolute top-[50%] right-[15%] w-1 h-1 rounded-full bg-white/40 animate-particle-1" />
        <div className="absolute top-[75%] right-[35%] w-2 h-2 rounded-full bg-[#64B5F6]/30 animate-particle-2" />
      </div>

      {/* 4. Subtle Cargo Aircraft Silhouette Traversing High-Altitude Background */}
      <div
        className="absolute top-[8%] left-0 pointer-events-none select-none z-0 animate-flight"
        aria-hidden="true"
      >
        <svg
          width="110"
          height="38"
          viewBox="0 0 160 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-sky-300 drop-shadow-md"
        >
          {/* Faint contrail vapor trail */}
          <line x1="0" y1="28" x2="60" y2="28" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" strokeDasharray="3 4" />
          {/* Cargo Heavy Transport Silhouette */}
          <path
            d="M60 28 L95 24 L135 25 Q148 26 155 28 Q148 30 135 31 L95 32 Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
          {/* Main Cargo Wings */}
          <path
            d="M92 24 L75 4 L86 4 L112 24 Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          <path
            d="M92 32 L75 52 L86 52 L112 32 Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          {/* Tail Stabilizer */}
          <path
            d="M64 27 L55 15 L62 15 L72 27 Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Hero Headline & Editorial Composition */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-sky-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] animate-pulse" />
              PAN-INDIA FREIGHT COORDINATION
            </div>

            {/* Emphasized Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-black text-white tracking-tight leading-[1.05] select-none">
              <span className="block text-white font-black drop-shadow-md">
                Reliable Freight.
              </span>
              <span className="block text-sky-200 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] font-extrabold mt-1 sm:mt-2">
                Nationwide Reach.
              </span>
            </h1>

            {/* Exact Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-sky-100/90 leading-relaxed max-w-xl font-normal">
              End-to-end logistics coordination across India, connecting businesses with transportation solutions across road, rail and air.
            </p>

            {/* Call to Actions: Request a Quote & Verify Route & Pin Feasibility */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#quote"
                className="btn-interactive inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1261A0] hover:bg-[#1E88E5] text-white text-base font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#coverage"
                className="btn-interactive inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-base font-bold border border-white/20 hover:border-white/40 backdrop-blur-md transition-all"
              >
                <span>Verify Route & Pin Feasibility</span>
              </a>
            </div>

            {/* Restrained Trust Points */}
            <div className="pt-6 border-t border-white/15">
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-semibold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  20,000+ PIN Codes Reach
                </span>
                <span className="mx-3 text-slate-500 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  Road, Rail & Air Multimodal
                </span>
                <span className="mx-3 text-slate-500 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  Single Point Coordination
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Translucent Shipment Tracking & Quotation Panel */}
          <div id="tracking" className="lg:col-span-5 relative scroll-mt-28">
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl p-6 sm:p-7 text-white shadow-2xl border border-white/20 overflow-hidden">

              {/* Header inside Panel */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs uppercase tracking-wider font-bold text-sky-200">
                    Dispatch Coordination Desk
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-sky-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                  <Clock className="w-3 h-3 text-sky-300" />
                  <span>Pan-India Transit</span>
                </div>
              </div>

              {/* Multimodal Transport Indicators */}
              <div className="grid grid-cols-3 gap-2 mb-5">
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

              {/* Clean White Floating Action Card */}
              <div className="bg-white rounded-xl p-5 text-[#17202A] shadow-xl border border-slate-100">

                {/* 1. TRACK YOUR SHIPMENT WITH TRANSPORTER SELECTION */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0B2A4A] flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-[#1261A0]" />
                      TRACK YOUR SHIPMENT
                    </h2>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Carrier LR / Docket
                    </span>
                  </div>

                  <form onSubmit={handleTrackSubmit} className="space-y-2.5">
                    {/* Transporter Dropdown */}
                    <div>
                      <label htmlFor="transporter-select" className="sr-only">
                        Select Transporter
                      </label>
                      <select
                        id="transporter-select"
                        value={selectedTransporter}
                        onChange={(e) => {
                          setSelectedTransporter(e.target.value);
                          if (inputError) setInputError('');
                        }}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] outline-none transition-all cursor-pointer"
                      >
                        <option value="">-- Select Transporter Network --</option>
                        {TRANSPORTERS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Consignment Number Input - Disabled until Transporter Selected */}
                    <div className="relative">
                      <input
                        type="text"
                        disabled={!selectedTransporter}
                        value={consignmentInput}
                        onChange={(e) => {
                          setConsignmentInput(e.target.value);
                          if (inputError) setInputError('');
                        }}
                        placeholder={
                          selectedTransporter
                            ? 'Enter consignment or LR number...'
                            : 'Select a transporter above first...'
                        }
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border transition-all outline-none ${!selectedTransporter
                          ? 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed placeholder-slate-400'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] placeholder-slate-400'
                          }`}
                      />
                    </div>

                    {inputError && (
                      <p className="text-[11px] text-red-600 font-medium">{inputError}</p>
                    )}

                    {/* Track Action */}
                    <button
                      type="submit"
                      disabled={!selectedTransporter || !consignmentInput.trim()}
                      className={`btn-interactive w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-sm ${!selectedTransporter || !consignmentInput.trim()
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        : 'bg-[#0B2A4A] hover:bg-[#1261A0] text-white cursor-pointer'
                        }`}
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>Track Consignment</span>
                    </button>
                  </form>
                </div>

                {/* Subtle Divider */}
                <div className="relative my-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2.5 text-[10px] font-bold text-slate-400 tracking-wider">
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
                    Share your pickup, destination, and freight details with our team for tailored coordination options.
                  </p>
                  <a
                    href="#quote"
                    className="btn-interactive w-full py-2.5 px-4 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
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
        transporter={selectedTransporter}
      />
    </section>
  );
};
