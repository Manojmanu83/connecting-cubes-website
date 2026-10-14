'use client';

import React from 'react';
import { Award, MapPin, Layers, Calendar } from 'lucide-react';

interface MetricItem {
  number: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}

const METRICS: MetricItem[] = [
  {
    number: '20+',
    label: 'Years Combined Experience',
    sublabel: 'Decades of domain expertise in freight handling',
    icon: Award,
  },
  {
    number: '20,000+',
    label: 'PIN Codes Covered',
    sublabel: 'Broad transportation reach across Indian districts',
    icon: MapPin,
  },
  {
    number: '3 Modes',
    label: 'Road, Rail & Air',
    sublabel: 'Coordinated options matched to cargo requirements',
    icon: Layers,
  },
  {
    number: '2019',
    label: 'Established Year',
    sublabel: 'Reliable coordination partner founded in India',
    icon: Calendar,
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Confirmed Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {METRICS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-[#F7FAFC] border border-slate-100 hover:border-[#1261A0]/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B2A4A] tracking-tight font-heading">
                    {item.number}
                  </div>
                  <div className="text-sm font-bold text-[#17202A]">
                    {item.label}
                  </div>
                  <p className="text-xs text-[#526478] leading-relaxed pt-1">
                    {item.sublabel}
                  </p>
                </div>

                {/* Subtle bottom accent line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#1261A0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
