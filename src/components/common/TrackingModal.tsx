'use client';

import React from 'react';
import {
  X,
  Search,
  Info,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Building2,
  FileText,
} from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  consignmentNumber: string;
  transporter?: string;
}

// Verified official tracking destinations for partner networks
const TRANSPORTER_PORTALS: Record<
  string,
  { name: string; url: string; canDirectTrack: boolean; note?: string }
> = {
  DELHIVERY: {
    name: 'Delhivery Surface & Express',
    url: 'https://www.delhivery.com/tracking',
    canDirectTrack: true,
  },
  XPRESSBEES: {
    name: 'Xpressbees Logistics',
    url: 'https://www.xpressbees.com/track',
    canDirectTrack: true,
  },
  GATI: {
    name: 'Gati KWE Express',
    url: 'https://www.gatikwe.com',
    canDirectTrack: true,
  },
  RIVIGO: {
    name: 'Rivigo Relay Freight',
    url: 'https://www.rivigo.com',
    canDirectTrack: true,
  },
  'DP WORLD': {
    name: 'DP World Multimodal',
    url: 'https://www.dpworld.com',
    canDirectTrack: true,
  },
  MAHINDRA: {
    name: 'Mahindra Logistics',
    url: 'https://mahindralogistics.com',
    canDirectTrack: true,
  },
};

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  consignmentNumber,
  transporter,
}) => {
  if (!isOpen) return null;

  const activeTransporter = transporter ? TRANSPORTER_PORTALS[transporter.toUpperCase()] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracking-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-[#17202A]">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close tracking dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-[#EAF4FC] text-[#1261A0] flex items-center justify-center flex-shrink-0">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 id="tracking-modal-title" className="text-lg sm:text-xl font-bold text-[#0B2A4A]">
              Shipment Tracking Lookup
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Verified consignment dispatch telemetry
            </p>
          </div>
        </div>

        {/* Shipment Details Card */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 mb-4 space-y-2.5">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/80">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <Building2 className="w-3.5 h-3.5 text-[#1261A0]" />
              Transporter Network:
            </span>
            <span className="font-bold text-[#0B2A4A] bg-white px-2.5 py-1 rounded-md border border-slate-200">
              {activeTransporter ? activeTransporter.name : transporter || 'Not Selected'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <FileText className="w-3.5 h-3.5 text-[#1261A0]" />
              Docket / Consignment Ref:
            </span>
            <span className="font-mono font-bold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
              {consignmentNumber || 'N/A'}
            </span>
          </div>
        </div>

        {/* Responsible Tracking Transparency Notice */}
        <div className="bg-[#F7FAFC] border border-blue-100 rounded-xl p-4 mb-5">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#1261A0] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 space-y-1 leading-relaxed">
              <p className="font-bold text-[#0B2A4A]">
                Carrier Telemetry & Live Updates
              </p>
              <p className="text-slate-600">
                To preserve commercial confidentiality and verify live milestone clearance, our dispatch desk synchronizes tracking directly with active carrier waybills.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-2 mb-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Dedicated coordinator tracking assistance for all commercial loads</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Direct WhatsApp & Email milestone updates upon carrier checkpoint scans</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          {activeTransporter && activeTransporter.canDirectTrack && (
            <a
              href={activeTransporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive w-full py-2.5 px-4 rounded-xl bg-[#0B2A4A] hover:bg-[#1261A0] text-white text-xs font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <span>Open {transporter} Verified Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <div className="flex gap-2.5">
            <a
              href="#contact"
              onClick={onClose}
              className="btn-interactive flex-1 py-2.5 px-4 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white text-xs font-bold text-center transition-colors shadow-sm"
            >
              Contact Dispatch Coordinator
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
    </div>
  );
};
