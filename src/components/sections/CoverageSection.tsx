'use client';

import React from 'react';
import { Compass, Truck, Train, Plane, ShieldCheck } from 'lucide-react';

interface IllustrativeNode {
  id: string;
  name: string;
  zone: string;
  x: number; // Exact X coordinate in india_accurate_map.svg coordinate space
  y: number; // Exact Y coordinate in india_accurate_map.svg coordinate space
}

// Grounded major-city markers matching india_accurate_map.svg coordinate space (-400 -460 1450 1760)
const ILLUSTRATIVE_NODES: IllustrativeNode[] = [
  { id: 'delhi', name: 'Delhi NCR', zone: 'North Intermodal', x: 74, y: 43 },
  { id: 'mumbai', name: 'Mumbai', zone: 'West Gateway', x: -185, y: 545 },
  { id: 'ahmedabad', name: 'Ahmedabad', zone: 'West Industrial', x: -190, y: 330 },
  { id: 'bengaluru', name: 'Bengaluru', zone: 'South Tech/Mfg', x: 20, y: 890 },
  { id: 'chennai', name: 'Chennai', zone: 'South Coastal', x: 175, y: 890 },
  { id: 'hyderabad', name: 'Hyderabad', zone: 'Central Deccan', x: 110, y: 680 },
  { id: 'kolkata', name: 'Kolkata', zone: 'East Riverine', x: 590, y: 390 },
  { id: 'guwahati', name: 'Guwahati', zone: 'Northeast Gateway', x: 790, y: 190 },
];

export const CoverageSection: React.FC = () => {
  return (
    <section id="coverage" className="py-16 lg:py-24 bg-[#0B2A4A] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E88E5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pan-India Logistics Connectivity
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            With coordination capability spanning more than 20,000 PIN codes, Connecting Cubes helps businesses move freight reliably across all states, union territories, and commercial transport corridors.
          </p>
        </div>

        {/* Map & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Accurate India Map Container (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#09233E]/90 rounded-3xl p-5 sm:p-7 border border-white/15 backdrop-blur-md relative shadow-2xl">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10 text-xs text-slate-300">
              <span className="flex items-center gap-2 font-semibold text-sky-200">
                <Compass className="w-4 h-4 text-[#1E88E5]" />
                Geographically Accurate Administrative Boundaries
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Includes Northeast & Island Territories
              </span>
            </div>

            {/* Scalable Map Frame with Exact Coordinate Overlay */}
            <div className="relative w-full aspect-[4/4.6] max-h-[580px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#061729]/60 border border-white/5 p-2">
              
              {/* Authentic Bundled India SVG Base with real state boundaries */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/india_accurate_map.svg"
                alt="Accurate Pan-India logistics map with genuine state and union territory borders"
                className="w-full h-full object-contain pointer-events-none select-none filter contrast-125"
                loading="lazy"
              />

              {/* Grounded City Markers Overlay SVG (Matching viewBox: -400 -460 1450 1760) */}
              <svg
                viewBox="-400 -460 1450 1760"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                {/* Grounded Major City Markers without connecting lines */}
                {ILLUSTRATIVE_NODES.map((node) => (
                  <g key={node.id} className="transition-all">
                    {/* Glowing outer pulse marker */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="14"
                      fill="#1E88E5"
                      opacity="0.25"
                      className="motion-safe:animate-ping"
                    />
                    {/* Core node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="8"
                      fill="#1261A0"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="3.5"
                      fill="#64B5F6"
                    />
                    {/* Node Text Label */}
                    <text
                      x={node.x}
                      y={node.y - 14}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="22"
                      fontWeight="bold"
                      className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      {node.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Illustrative Legend */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E88E5] inline-block" />
                <span className="text-sky-200 font-medium">Major Transport Hubs & Connectivity Nodes</span>
              </div>
              <span className="text-[10px] text-slate-400">
                Administrative Map Base
              </span>
            </div>
          </div>

          {/* RIGHT: Confirmed Coverage Details (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stated PIN Code Reach Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Confirmed Scope
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-2">
                20,000+ PIN Codes
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Stated transportation coordination reach across Indian states and union territories. Feasibility is verified per shipment against current carrier availability and local vehicle access constraints.
              </p>
            </div>

            {/* Multimodal Corridor Standards */}
            <div className="bg-[#09233E]/70 rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Integrated Transport Modes
              </h3>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-sky-300 mt-0.5">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">Highway & Surface Transport:</strong>
                    <span>Full Truckload (FTL) and Part Truckload (PTL) coordination along national highways and industrial feeder links.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-sky-300 mt-0.5">
                    <Train className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">Railway Freight Corridors:</strong>
                    <span>Inter-regional long-haul movement coordinated through commercial container terminals and rake sidings.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-sky-300 mt-0.5">
                    <Plane className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">Air Cargo Expedited Lanes:</strong>
                    <span>Time-sensitive consignments coordinated through major domestic airport cargo handling hubs.</span>
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
