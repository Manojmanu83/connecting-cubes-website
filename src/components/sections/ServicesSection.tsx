'use client';

import React from 'react';
import { Truck, Train, Plane, RefreshCw, ArrowRight, CheckCircle2, Shield, AlertCircle } from 'lucide-react';

import Image from 'next/image';

interface ServiceCardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  image: string;
  gradient: string;
  modeParam: string;
}

const SERVICES: ServiceCardData[] = [
  {
    id: 'road',
    tag: 'Highway & Arterial',
    title: 'Road Transportation',
    description:
      'Road transportation coordination for businesses, helping connect cargo with suitable transport solutions across India.',
    features: [
      'Full Truck Load (FTL) Coordination',
      'Part Truck Load (PTL) / Consolidation',
      'Long-distance inter-state freight',
      'Business-to-business cargo movement',
    ],
    icon: Truck,
    image: '/images/Indian trucks.jpg',
    gradient: 'from-[#0B2A4A]/90 to-[#144675]/80',
    modeParam: 'Road',
  },
  {
    id: 'rail',
    tag: 'Long Haul Efficiency',
    title: 'Rail Freight',
    description:
      'Rail freight coordination for suitable cargo requirements, providing an additional transportation option for businesses moving goods over longer distances.',
    features: [
      'High-volume consignment planning',
      'Inter-regional long-haul movement',
      'Economical bulk transportation',
      'Subject to rake & terminal availability',
    ],
    icon: Train,
    image: '/images/train.jpg',
    gradient: 'from-[#0E365E]/90 to-[#1261A0]/80',
    modeParam: 'Rail',
  },
  {
    id: 'air',
    tag: 'Priority Transit',
    title: 'Air Cargo',
    description:
      'Air cargo coordination for shipments where transit time is an important consideration.',
    features: [
      'Time-sensitive cargo coordination',
      'Major airport hub connectivity',
      'Strict handling & priority clearance',
      'Subject to flight routes & cargo restrictions',
    ],
    icon: Plane,
    image: '/images/aircraft.jpg',
    gradient: 'from-[#1261A0]/90 to-[#1E88E5]/80',
    modeParam: 'Air',
  },
  {
    id: 'e2e',
    tag: 'Single Point of Contact',
    title: 'End-to-End Logistics',
    description:
      'From understanding cargo requirements to coordinating transportation and delivery, we help simplify the logistics process through a single point of contact.',
    features: [
      'Requirement assessment & feasibility',
      'Carrier network coordination',
      'Dispatch milestone tracking',
      'Dedicated logistics desk support',
    ],
    icon: RefreshCw,
    image: '/images/coordination.webp',
    gradient: 'from-[#0B2A4A]/90 to-[#1E88E5]/80',
    modeParam: 'Not Sure',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F7FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FC] text-[#1261A0] text-xs font-bold uppercase tracking-wider mb-3">
            TRANSPORTATION CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight leading-tight">
            Logistics Solutions That Move Your Business Forward
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#526478] leading-relaxed">
            Explore transportation and coordination options designed around your shipment requirements across road, rail, and air.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5"
              >
                <div>
                  {/* Card Header Banner with Authentic Logistics Image */}
                  <div className="relative h-44 overflow-hidden text-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-5 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-white border border-white/10">
                          {service.tag}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-sm">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <p className="text-xs sm:text-sm text-[#526478] leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-[#0B2A4A] uppercase tracking-wider block">
                        Key Capabilities:
                      </span>
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1261A0] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 pt-0">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF4FC] text-[#1261A0] font-bold text-xs transition-colors duration-200 border border-slate-100 group-hover:border-[#1261A0]/20"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
