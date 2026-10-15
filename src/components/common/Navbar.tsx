'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavLinkItem {
  name: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Network', href: '#coverage' },
  { name: 'Tracking', href: '#tracking' },
  { name: 'Cargo Insurance', href: '#insurance' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
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

            {/* Action Button: Login without arrow icon */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#quote"
                className="btn-interactive inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#1261A0] hover:bg-[#0E4E82] text-white text-sm font-bold shadow-sm hover:shadow-md active:scale-[0.98] transition-colors"
              >
                Login
              </a>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <a
                href="#quote"
                className="inline-flex items-center px-3.5 py-1.5 rounded-md bg-[#1261A0] text-white text-xs font-bold hover:bg-[#0E4E82] transition-colors"
              >
                Login
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

        {/* Mobile Drawer Menu - immediately visible below header */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto z-50">
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
                  className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-[#1261A0] text-white font-bold text-center shadow hover:bg-[#0E4E82] transition-colors"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
          aria-hidden="true"
        />
      )}
    </>
  );
};
