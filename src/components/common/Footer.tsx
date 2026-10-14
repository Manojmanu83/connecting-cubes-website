'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Shield, ArrowUp, Info, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2A4A] text-white pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Overview (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="inline-block">
              <Logo variant="dark" size="md" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Connecting Cubes helps businesses coordinate end-to-end transportation requirements through a reliable network of transportation providers across India. Established in 2019.
            </p>
            <div className="pt-2 text-xs text-sky-300 font-medium">
              Pan-India Logistics Coordination • Established 2019
            </div>
          </div>

          {/* Col 2: Services Links (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white/90">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Road Transportation (FTL / PTL)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Rail Freight Coordination
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Air Cargo Coordination
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  End-to-End Logistics Management
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-sky-300 transition-colors">
                  Cargo Insurance Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white/90">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-sky-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-sky-300 transition-colors">
                  Industries Served
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-sky-300 transition-colors">
                  Shipment Tracking
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-sky-300 transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Coordination Note (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white/90">
              Coordinated Network
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Operating across an extensive network of 20,000+ PIN codes. All transport operations are subject to actual carrier availability and terms.
            </p>
            <div className="pt-2">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1261A0] hover:bg-[#1E88E5] text-white text-xs font-bold transition-colors"
              >
                <span>Request Quotation</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Meaningful Legal Placeholders */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2019–{new Date().getFullYear()} Connecting Cubes. All rights reserved. Coordinated logistics solutions across India.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModalTitle('Privacy Policy')}
              className="hover:text-sky-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModalTitle('Terms & Conditions')}
              className="hover:text-sky-300 transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Accessible Meaningful Legal Placeholder Dialog */}
      {legalModalTitle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-[#17202A] shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setLegalModalTitle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B2A4A]">
                {legalModalTitle} Placeholder
              </h3>
            </div>
            <p className="text-xs text-[#526478] leading-relaxed mb-4">
              Connecting Cubes strictly protects confidential cargo specifications and customer trade data. The complete legal documentation will be published following official statutory review.
            </p>
            <button
              type="button"
              onClick={() => setLegalModalTitle(null)}
              className="w-full py-2.5 rounded-xl bg-[#0B2A4A] text-white text-xs font-bold hover:bg-[#1261A0] transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
