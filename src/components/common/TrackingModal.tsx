'use client';

import React from 'react';
import { X, Search, Info, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  consignmentNumber: string;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  consignmentNumber,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracking-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 id="tracking-modal-title" className="text-lg font-bold text-[#0B2A4A]">
              Shipment Tracking Lookup
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Consignment Reference: {consignmentNumber || 'Not specified'}
            </p>
          </div>
        </div>

        {/* Honest System Status Notice */}
        <div className="bg-[#F7FAFC] border border-blue-100 rounded-xl p-4 mb-5">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-[#0B2A4A]">
                Transporter Integration Notice
              </p>
              <p>
                Live consignment tracking is synced directly through our active partner carrier networks (Road LR / Waybill, Railway RR, or Air Waybill).
              </p>
              <p className="text-slate-500">
                To preserve commercial data confidentiality and ensure 100% verified status, real-time telemetry is coordinated through your assigned shipment desk.
              </p>
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-3 mb-6 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Dedicated coordinator tracking assistance available for all booked loads</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Direct transporter dispatch updates provided via WhatsApp / Email</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs font-bold text-center transition-colors shadow-sm"
          >
            Contact Tracking Desk
          </a>
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
