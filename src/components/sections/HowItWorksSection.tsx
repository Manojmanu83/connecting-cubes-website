'use client';

import React from 'react';
import { FileText, SearchCheck, Layers, Truck, MapPinCheck } from 'lucide-react';

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    stepNumber: '01',
    title: 'Share Your Requirement',
    description:
      'Tell us what needs to be transported, including origin, destination, and cargo details.',
    icon: FileText,
  },
  {
    stepNumber: '02',
    title: 'Understand Your Cargo',
    description:
      'We review shipment requirements and relevant constraints such as volume, weight, and timeline.',
    icon: SearchCheck,
  },
  {
    stepNumber: '03',
    title: 'Identify a Suitable Solution',
    description:
      'We assess transportation options based on requirements and real-time carrier availability.',
    icon: Layers,
  },
  {
    stepNumber: '04',
    title: 'Coordinate the Shipment',
    description:
      'We coordinate with the relevant transportation provider and arrange the agreed shipment details.',
    icon: Truck,
  },
  {
    stepNumber: '05',
    title: 'Track and Deliver',
    description:
      'Follow the available shipment-tracking process and coordinate delivery through to destination.',
    icon: MapPinCheck,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFC] border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FC] text-[#1261A0] text-xs font-bold uppercase tracking-wider mb-4">
            STREAMLINED WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight">
            A Simpler Way to Move Your Cargo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#526478] leading-relaxed">
            Our structured 5-step coordination methodology ensures clarity, timely communication, and smooth cargo transit from pickup to destination.
          </p>
        </div>

        {/* Desktop Connected Horizontal Flow (lg screens) */}
        <div className="hidden lg:block relative mb-12">
          {/* Subtle horizontal connecting line passing through center of badges */}
          <div className="absolute top-[42px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-[#1261A0]/20 via-[#1E88E5]/40 to-[#1261A0]/20 z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center px-2 group">
                  {/* Step Circle Marker */}
                  <div className="w-[84px] h-[84px] rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#1261A0] shadow-sm group-hover:shadow-md flex flex-col items-center justify-center transition-all mb-6 relative">
                    <span className="text-[11px] font-mono font-bold text-[#1261A0] mb-0.5">
                      {step.stepNumber}
                    </span>
                    <Icon className="w-5 h-5 text-[#0B2A4A] group-hover:text-[#1261A0] transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0B2A4A] tracking-tight mb-2 uppercase leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#526478] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Process (sm & md screens) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#1261A0]/30">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex items-start gap-4">
                {/* Node marker on the line */}
                <div className="absolute -left-6 sm:-left-8 w-6 h-6 rounded-full bg-[#1261A0] text-white text-[11px] font-mono font-bold flex items-center justify-center ring-4 ring-white shadow">
                  {idx + 1}
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#1261A0] block">
                        STEP {step.stepNumber}
                      </span>
                      <h3 className="text-sm font-bold text-[#0B2A4A] tracking-tight uppercase">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[#526478] leading-relaxed pl-11">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA prompt below steps */}
        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2A4A] hover:bg-[#1261A0] text-white text-xs font-bold uppercase tracking-wide transition-all shadow-sm"
          >
            <span>Start with Step 01: Share Your Requirement</span>
          </a>
        </div>

      </div>
    </section>
  );
};
