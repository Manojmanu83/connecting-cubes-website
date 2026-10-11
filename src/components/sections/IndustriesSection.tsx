'use client';

import React from 'react';
import { Factory, ShoppingBag, Truck, Cpu, Stethoscope, Scissors, ArrowRight } from 'lucide-react';

interface IndustryItem {
  name: string;
  description: string;
  icon: React.ElementType;
}

const INDUSTRIES: IndustryItem[] = [
  {
    name: 'Industrial & Manufacturing',
    description: 'Line-haul transport for machinery parts, raw materials, and finished goods.',
    icon: Factory,
  },
  {
    name: 'FMCG & Consumer Goods',
    description: 'Distribution coordination between manufacturing units, regional depots, and distributors.',
    icon: ShoppingBag,
  },
  {
    name: 'Automotive & Spares',
    description: 'Scheduled transit for sub-assemblies, spare components, and aftermarket parts.',
    icon: Truck,
  },
  {
    name: 'Electronics & Hardware',
    description: 'Careful handling coordination for electrical goods, devices, and infrastructure equipment.',
    icon: Cpu,
  },
  {
    name: 'Pharmaceuticals & Healthcare',
    description: 'Coordinated transit for medical devices, diagnostic materials, and healthcare essentials.',
    icon: Stethoscope,
  },
  {
    name: 'Textiles & Apparel',
    description: 'Volume-conscious cargo movements across manufacturing clusters and retail hubs.',
    icon: Scissors,
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F7FAFC] border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FC] text-[#1261A0] text-xs font-bold uppercase tracking-wider mb-4">
            SECTORS SERVED
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight leading-tight">
            Logistics Support Across Key Industry Sectors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#526478] leading-relaxed">
            Every industry has specific dispatch constraints. We coordinate transportation solutions tailored to your operational rhythm.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2A4A] mb-2 tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526478] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1261A0] hover:text-[#0B2A4A] transition-colors"
                  >
                    <span>Request industry quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
