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
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2A4A] mb-2 tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526478] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#1261A0] font-semibold">
                  <span>Customized modal solutions</span>
                  <span className="text-slate-300">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Section Enquiry Call to Action */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs max-w-2xl mx-auto">
          <h3 className="text-base font-bold text-[#0B2A4A] mb-1">
            Don&apos;t see your specific sector listed?
          </h3>
          <p className="text-xs sm:text-sm text-[#526478] mb-5 leading-relaxed">
            Our multi-modal network adapts to diverse bulk, palletized, containerized, and temperature-conscious freight.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99]"
          >
            <span>Request an Industry Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
