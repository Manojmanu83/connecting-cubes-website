'use client';

import React from 'react';
import {
  Clock,
  UserCheck,
  Share2,
  Globe2,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  bullet: string;
  isFeatured?: boolean;
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Pan-India Reach',
    tagline: '20,000+ PIN Codes',
    description:
      'Transportation coordination across a broad network of locations in India, connecting major industrial corridors with regional destinations.',
    icon: Globe2,
    bullet: 'Highways, railway sidings, and air cargo terminals',
    isFeatured: true,
  },
  {
    number: '02',
    title: 'Time-Conscious Delivery',
    tagline: 'Schedule-Focused Planning',
    description:
      'We coordinate transportation options with delivery requirements in mind, prioritizing reliable schedules and prompt dispatch.',
    icon: Clock,
    bullet: 'Targeted transit schedules and proactive dispatch alignment',
  },
  {
    number: '03',
    title: 'End-to-End Coordination',
    tagline: 'Single Point Accountability',
    description:
      'A dedicated point of contact to manage transportation requirements, eliminating multiple vendor confusion and miscommunication.',
    icon: UserCheck,
    bullet: 'Seamless coordination from loading through to destination delivery',
  },
  {
    number: '04',
    title: 'Multiple Transport Providers',
    tagline: 'Vetted Carrier Network',
    description:
      'Suitable transportation options through a coordinated provider network, ensuring capacity resilience and optimal vehicle matching.',
    icon: Share2,
    bullet: 'Flexible multi-carrier allocation based on cargo requirements',
  },
  {
    number: '05',
    title: 'Cargo Insurance Assistance',
    tagline: 'Policy Term Advisory',
    description:
      'Support in exploring cargo insurance options, subject to availability and applicable policy terms, to protect goods during transit.',
    icon: ShieldCheck,
    bullet: 'Assistance with declarations and insurer documentation',
  },
  {
    number: '06',
    title: 'Cost-Conscious Solutions',
    tagline: 'Commercially Optimized',
    description:
      'We identify suitable transportation options based on cargo requirements and available services, optimizing logistical expense.',
    icon: TrendingUp,
    bullet: 'Transparent coordination options matched to consignment weight',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight leading-tight">
            Why Businesses Choose Connecting Cubes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#526478] leading-relaxed">
            Coordinated freight logistics engineered around transparency, responsive communication, and dependable execution across India.
          </p>
        </div>

        {/* Balanced 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            if (pillar.isFeatured) {
              return (
                <div
                  key={pillar.number}
                  className="bg-gradient-to-br from-[#0B2A4A] via-[#0E365E] to-[#1261A0] rounded-2xl p-7 text-white shadow-lg flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md text-sky-300 flex items-center justify-center border border-white/15">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <div className="flex items-center gap-2 text-xs text-sky-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{pillar.bullet}</span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={pillar.number}
                className="bg-[#F7FAFC] rounded-2xl p-7 border border-slate-200/80 hover:border-[#1261A0]/30 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2A4A] tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526478] leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-[#1261A0]">
                      {pillar.tagline}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
