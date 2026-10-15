'use client';

import React, { useState, useEffect } from 'react';
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
    title: 'Share Requirement',
    description:
      'Submit origin, destination, cargo specifications, and dispatch timeline requirements.',
    icon: FileText,
  },
  {
    stepNumber: '02',
    title: 'Understand Cargo',
    description:
      'We assess weight, volume, palletization, handling constraints, and transit sensitivities.',
    icon: SearchCheck,
  },
  {
    stepNumber: '03',
    title: 'Identify Suitable Solution',
    description:
      'Evaluate optimal road (FTL/PTL), rail, or air routes matched to commercial priorities.',
    icon: Layers,
  },
  {
    stepNumber: '04',
    title: 'Coordinate Shipment',
    description:
      'Dispatch coordination with vetted carriers, handling documentation and loading scheduling.',
    icon: Truck,
  },
  {
    stepNumber: '05',
    title: 'Track and Deliver',
    description:
      'Coordinated dispatch milestone tracking through to verified destination delivery.',
    icon: MapPinCheck,
  },
];

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Animated progression of the moving indicator along the path
  useEffect(() => {
    if (isPaused) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Position percentage of the moving indicator on desktop (5 steps: 10%, 30%, 50%, 70%, 90%)
  const stepPercentages = [10, 30, 50, 70, 90];

  return (
    <section className="py-16 lg:py-24 bg-[#F7FAFC] border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight">
            How We Coordinate Your Cargo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#526478] leading-relaxed">
            A clear 5-stage coordination sequence engineered to ensure operational precision from first enquiry to final delivery.
          </p>
        </div>

        {/* Desktop Connected Horizontal Flow (lg screens) */}
        <div
          className="hidden lg:block relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Base connecting line */}
          <div className="absolute top-[42px] left-[10%] right-[10%] h-[3px] bg-slate-200 rounded-full z-0" />

          {/* Active progress track */}
          <div
            className="absolute top-[42px] left-[10%] h-[3px] bg-gradient-to-r from-[#1261A0] via-[#1E88E5] to-[#64B5F6] rounded-full z-0 transition-all duration-700 ease-out"
            style={{
              width: `${(activeStep / (STEPS.length - 1)) * 80}%`,
            }}
          />

          {/* Moving Blue Indicator Pulse Traveling Along The Line */}
          <div
            className="absolute top-[37px] -translate-x-1/2 z-10 pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: `${stepPercentages[activeStep]}%`,
            }}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-[#1E88E5]/30 animate-ping" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#1261A0] border-2 border-white shadow-md" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              const isCompleted = activeStep > idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center px-2 group cursor-pointer focus:outline-none transition-all"
                  aria-label={`Step ${step.stepNumber}: ${step.title}`}
                >
                  {/* Step Circle Marker */}
                  <div
                    className={`w-[84px] h-[84px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 mb-5 relative ${
                      isCurrent
                        ? 'bg-[#1261A0] text-white shadow-lg ring-4 ring-[#1E88E5]/20 scale-105'
                        : isCompleted
                        ? 'bg-[#EAF4FC] border-2 border-[#1261A0]/40 text-[#1261A0]'
                        : 'bg-white border-2 border-slate-200 text-slate-400 group-hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono font-bold mb-0.5 ${
                        isCurrent ? 'text-sky-200' : isCompleted ? 'text-[#1261A0]' : 'text-slate-400'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <Icon
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isCurrent ? 'text-white scale-110' : isCompleted ? 'text-[#1261A0]' : 'text-slate-600'
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-sm font-bold tracking-tight mb-1.5 uppercase transition-colors duration-200 ${
                      isCurrent ? 'text-[#1261A0]' : 'text-[#0B2A4A]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#526478] leading-relaxed max-w-[210px]">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Process (sm & md screens) */}
        <div className="lg:hidden relative pl-8 space-y-6 before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200">
          {/* Mobile Active vertical bar */}
          <div
            className="absolute left-3.5 top-4 w-[2px] bg-gradient-to-b from-[#1261A0] to-[#1E88E5] transition-all duration-500 ease-out"
            style={{
              height: `${(activeStep / (STEPS.length - 1)) * 85}%`,
            }}
          />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="relative flex items-start gap-4 cursor-pointer"
              >
                {/* Node marker on the line */}
                <div
                  className={`absolute -left-8 w-7 h-7 rounded-full text-[11px] font-mono font-bold flex items-center justify-center ring-4 ring-white shadow-sm transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#1261A0] text-white scale-110 ring-[#1E88E5]/30'
                      : isCompleted
                      ? 'bg-[#EAF4FC] text-[#1261A0] border border-[#1261A0]/40'
                      : 'bg-white border-2 border-slate-300 text-slate-500'
                  }`}
                >
                  {idx + 1}
                </div>

                <div
                  className={`rounded-xl p-4.5 border transition-all duration-200 flex-1 ${
                    isCurrent
                      ? 'bg-white border-[#1261A0] shadow-md ring-2 ring-[#1261A0]/10'
                      : 'bg-white border-slate-200/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isCurrent
                          ? 'bg-[#1261A0] text-white'
                          : 'bg-[#EAF4FC] text-[#1261A0]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#1261A0] block">
                        STAGE {step.stepNumber}
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

      </div>
    </section>
  );
};
