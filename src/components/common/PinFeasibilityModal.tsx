'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  ShieldAlert,
  Compass,
} from 'lucide-react';

interface PinFeasibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PinFeasibilityModal: React.FC<PinFeasibilityModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [pinCode, setPinCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [checkedPin, setCheckedPin] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setPinCode('');
      setErrorMessage('');
      setIsLoading(false);
      setCheckedPin(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Digits only, max 6 digits
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPinCode(cleaned);
    if (errorMessage) setErrorMessage('');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pinCode.trim()) {
      setErrorMessage('Please enter a 6-digit Indian PIN code.');
      return;
    }

    if (pinCode.length !== 6) {
      setErrorMessage('PIN code must be exactly 6 digits.');
      return;
    }

    if (pinCode.startsWith('0')) {
      setErrorMessage('Indian postal PIN codes cannot begin with 0. Please enter a valid PIN.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    // Brief simulated client validation delay for clear feedback
    setTimeout(() => {
      setIsLoading(false);
      setCheckedPin(pinCode);
    }, 450);
  };

  const handleProceedToEnquiry = () => {
    if (checkedPin) {
      // Dispatch prefill event so ContactQuoteSection can prefill the PIN
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('cc-prefill-pin', {
            detail: { pin: checkedPin },
          })
        );
      }
    }
    onClose();
    // Scroll to the quote/contact section
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setPinCode('');
    setCheckedPin(null);
    setErrorMessage('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pin-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-[#17202A]">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center flex-shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h2 id="pin-modal-title" className="text-lg sm:text-xl font-bold text-[#0B2A4A]">
              PIN Code Serviceability Feasibility
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Pan-India logistics coordination reach across 20,000+ PIN codes
            </p>
          </div>
        </div>

        {!checkedPin ? (
          /* Form Entry State */
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label
                htmlFor="pin-input"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5"
              >
                Enter 6-Digit Indian PIN Code
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4 text-[#1261A0]" />
                </div>
                <input
                  id="pin-input"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  value={pinCode}
                  onChange={handleInputChange}
                  placeholder="e.g., 560001, 110001, 400001"
                  autoFocus
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-3 text-sm sm:text-base font-semibold tracking-wider rounded-xl border border-slate-300 focus:border-[#1261A0] focus:ring-2 focus:ring-[#1261A0]/20 text-slate-900 outline-none transition-all placeholder:font-normal placeholder-slate-400"
                />
              </div>

              {errorMessage && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-red-600 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            {/* Note on genuine verification */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
              <strong className="text-slate-800 block mb-0.5">Route Feasibility Verification:</strong>
              Connecting Cubes coordinates shipments per carrier capacity. Serviceability is verified per assignment against truck access, destination terminal schedules, and freight dimensions.
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="btn-interactive flex-1 py-3 px-5 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Checking Feasibility...</span>
                  </>
                ) : (
                  <>
                    <span>Check Serviceability</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          /* Responsible Verified Feasibility Result Notice */
          <div className="space-y-5 animate-fade-in">
            {/* Status Card */}
            <div className="p-4 rounded-xl bg-[#EAF4FC] border border-[#1E88E5]/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                  <p className="font-bold text-[#0B2A4A] text-sm">
                    Thanks! Please contact our team to confirm service availability for PIN code {checkedPin}.
                  </p>
                  <p className="text-slate-600">
                    Connecting Cubes coordinates logistics across an extensive network of 20,000+ PIN codes. Exact transit times and carrier options depend on current vehicle availability and cargo dimensions.
                  </p>
                </div>
              </div>
            </div>

            {/* Coordination Guarantee Info */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="font-semibold text-slate-800">
                Next Step for Route Confirmation:
              </div>
              <p className="text-[11px] leading-relaxed">
                Click below to carry PIN code <strong>{checkedPin}</strong> into our enquiry form. Our dispatch desk will review carrier lane feasibility and provide coordinated rate and vehicle options.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleProceedToEnquiry}
                className="btn-interactive flex-1 py-3 px-4 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Enquire with PIN {checkedPin}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors text-center"
              >
                Check Another PIN
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
