'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Truck, Train, Plane, CheckCircle2, Info } from 'lucide-react';

interface TradeHub {
  id: string;
  name: string;
  region: string;
  role: string;
  x: number; // percentage in SVG viewBox
  y: number; // percentage in SVG viewBox
}

const TRADE_HUBS: TradeHub[] = [
  { id: 'del', name: 'Delhi NCR', region: 'North Zone', role: 'Major Industrial & Freight Hub', x: 38, y: 30 },
  { id: 'mum', name: 'Mumbai MMR', region: 'West Zone', role: 'Commercial Gateway & Port Access', x: 28, y: 56 },
  { id: 'ahd', name: 'Ahmedabad', region: 'West Zone', role: 'Manufacturing & Textiles Corridor', x: 26, y: 45 },
  { id: 'blr', name: 'Bengaluru', region: 'South Zone', role: 'Tech & Heavy Engineering Center', x: 37, y: 77 },
  { id: 'che', name: 'Chennai', region: 'South Zone', role: 'Automotive & Coastal Transit Hub', x: 44, y: 76 },
  { id: 'hyd', name: 'Hyderabad', region: 'South-Central', role: 'Pharma & Multi-modal Interchange', x: 39, y: 62 },
  { id: 'kol', name: 'Kolkata', region: 'East Zone', role: 'Eastern Trade & Riverine Gateway', x: 67, y: 47 },
  { id: 'guw', name: 'Guwahati', region: 'North-East', role: 'Northeast Freight Distribution Hub', x: 80, y: 38 },
];

export const CoverageSection: React.FC = () => {
  const [activeHub, setActiveHub] = useState<TradeHub>(TRADE_HUBS[0]);

  return (
    <section id="coverage" className="py-20 lg:py-28 bg-[#0B2A4A] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E88E5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            NETWORK FOOTPRINT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connecting Businesses Across India
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            With a broad transportation network spanning more than 20,000 PIN codes,
            Connecting Cubes helps businesses coordinate cargo movement across locations throughout India.
          </p>
        </div>

        {/* Map & Corridor Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Stylized Network Map Graphic (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#0E365E]/60 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 text-xs text-slate-300">
              <span className="flex items-center gap-2 font-semibold">
                <Compass className="w-4 h-4 text-sky-400" />
                Stylized Network Topology
              </span>
              <span className="text-[11px] text-sky-300">
                Click a hub to view regional coordination
              </span>
            </div>

            {/* Custom Scalable Vector Representation */}
            <div className="relative w-full aspect-[4/3] max-h-[440px] flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                aria-label="Stylized network map of India trade hubs"
              >
                {/* Decorative background outline contours representing India geography */}
                <path
                  d="M32 12 Q40 6 45 14 Q52 18 48 24 Q56 26 64 28 Q75 27 82 32 Q88 38 78 45 Q70 48 66 52 Q58 56 50 68 Q44 78 40 86 Q37 92 35 90 Q32 82 30 74 Q24 64 22 55 Q20 46 25 38 Q24 30 32 20 Z"
                  fill="none"
                  stroke="#1E88E5"
                  strokeWidth="0.75"
                  strokeOpacity="0.3"
                  strokeDasharray="2 2"
                />

                {/* Coordinated Transport Routes (Vector connecting lines) */}
                {/* North to West */}
                <line x1="38" y1="30" x2="26" y2="45" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />
                {/* West to Central/South */}
                <line x1="26" y1="45" x2="28" y2="56" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />
                <line x1="28" y1="56" x2="37" y2="77" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />
                {/* North to East */}
                <line x1="38" y1="30" x2="67" y2="47" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />
                {/* East to North-East */}
                <line x1="67" y1="47" x2="80" y2="38" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />
                {/* North to South-Central */}
                <line x1="38" y1="30" x2="39" y2="62" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />
                <line x1="39" y1="62" x2="44" y2="76" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />
                <line x1="37" y1="77" x2="44" y2="76" stroke="#64B5F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1.5 1.5" />

                {/* Hub Interactive Nodes */}
                {TRADE_HUBS.map((hub) => {
                  const isSelected = activeHub.id === hub.id;
                  return (
                    <g
                      key={hub.id}
                      className="cursor-pointer transition-all"
                      onClick={() => setActiveHub(hub)}
                    >
                      {/* Outer pulse when selected */}
                      {isSelected && (
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="6"
                          fill="#1E88E5"
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}
                      {/* Outer border ring */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r={isSelected ? 4 : 2.8}
                        fill={isSelected ? '#FFFFFF' : '#1261A0'}
                        stroke={isSelected ? '#1E88E5' : '#64B5F6'}
                        strokeWidth="1.2"
                      />
                      {/* Node label */}
                      <text
                        x={hub.x}
                        y={hub.y - 4}
                        textAnchor="middle"
                        fill={isSelected ? '#FFFFFF' : '#93C5FD'}
                        fontSize="3"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {hub.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Transport Indicators strip */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-sky-400" />
                Highway Corridors
              </span>
              <span className="flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-sky-400" />
                Railway Transits
              </span>
              <span className="flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-sky-400" />
                Air Cargo Lanes
              </span>
            </div>
          </div>

          {/* Right Corridor Details & Stated Coverage Card (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Hub Detail Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 px-2.5 py-1 rounded bg-white/10">
                  {activeHub.region}
                </span>
                <span className="text-xs text-slate-300">Selected Gateway</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeHub.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                {activeHub.role}. Seamless coordination connecting intra-state distribution with inter-state express line-hauls.
              </p>

              <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Road FTL/PTL provider dispatch capability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Connecting feeder routes to Tier-2 & Tier-3 industrial zones</span>
                </div>
              </div>
            </div>

            {/* Stated PIN Code Coverage Box */}
            <div className="bg-gradient-to-r from-[#1261A0]/30 to-[#1E88E5]/20 rounded-2xl p-6 border border-sky-400/20">
              <div className="text-3xl font-extrabold text-white font-heading mb-1">
                20,000+ PIN Codes
              </div>
              <p className="text-xs text-sky-200 mb-3 font-semibold">
                Stated Pan-India Coordination Reach
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Subject to confirmation of current carrier route coverage and cargo profile.
                Our dispatch coordination team verifies pickup and delivery feasibility for your specific PIN code before scheduling.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
