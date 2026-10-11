'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react';

interface NavLinkItem {
  name: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Tracking', href: '#tracking' },
  { name: 'Cargo Insurance', href: '#insurance' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4.5'
      }`}
    >
      {/* Top micro bar for trust & quick contact info */}
      <div className="hidden lg:block border-b border-slate-100/80 pb-2 mb-2 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Pan-India Logistics Coordination Network
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#1261A0]" />
              20,000+ PIN Codes Covered
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1261A0]" />
              Transit Insurance Assistance Available
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <span>Established 2019 • 20+ Yrs Industry Expertise</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center group transition-transform hover:opacity-95"
            aria-label="Connecting Cubes - Home"
          >
            <Logo variant="light" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-[#17202A] hover:text-[#1261A0] rounded-md transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1261A0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Button: Get a Quote */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1261A0] hover:bg-[#0E4E82] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#quote"
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#1261A0] text-white text-xs font-bold"
            >
              Quote
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B2A4A] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0B2A4A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0B2A4A]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl transition-all">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 text-base font-semibold text-[#17202A] hover:text-[#1261A0] hover:bg-[#EAF4FC] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="#quote"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#1261A0] text-white font-bold text-center shadow"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
