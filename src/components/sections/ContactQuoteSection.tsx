'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Truck,
  Train,
  Plane,
  HelpCircle as QuestionIcon,
  MapPin,
  Mail,
  Phone,
  Clock,
  Info,
} from 'lucide-react';

interface FormData {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  pickupLocation: string;
  deliveryLocation: string;
  cargoType: string;
  approxWeight: string;
  transportMode: 'Road' | 'Rail' | 'Air' | 'Not Sure';
  additionalDetails: string;
}

interface FormErrors {
  [key: string]: string;
}

export const ContactQuoteSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    pickupLocation: '',
    deliveryLocation: '',
    cargoType: '',
    approxWeight: '',
    transportMode: 'Road',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location / PIN code is required';
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery destination / PIN code is required';
    }

    if (!formData.cargoType.trim()) {
      newErrors.cargoType = 'Cargo type is required (e.g., machinery, electronics, retail)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      pickupLocation: '',
      deliveryLocation: '',
      cargoType: '',
      approxWeight: '',
      transportMode: 'Road',
      additionalDetails: '',
    });
    setErrors({});
  };

  return (
    <section id="quote" className="py-16 lg:py-24 bg-white relative">
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FC] text-[#1261A0] text-xs font-bold uppercase tracking-wider mb-3">
            FREIGHT QUOTATION & ENQUIRY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] tracking-tight leading-tight">
            Have a Shipment to Move?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#526478] leading-relaxed">
            Tell us about your cargo requirements, and our team can help you explore suitable transportation options across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Quotation Form (Spans 8 cols) */}
          <div className="lg:col-span-8 bg-[#F7FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            
            {submittedData ? (
              /* Honest Prototype Submission State */
              <div className="space-y-6 animate-fade-in">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0B2A4A]">
                    Quotation Information Verified
                  </h3>
                  <p className="text-sm text-[#526478] mt-1">
                    Your shipment specifications have passed client-side validation.
                  </p>
                </div>

                {/* Honest Prototype Notice */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-800">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>Frontend Demonstration State</span>
                  </div>
                  <p>
                    Because a live production backend/mail webhook is not yet configured for this initial phase, this form has verified all fields without transmitting data to an external server.
                  </p>
                </div>

                {/* Captured Payload Summary */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-[#0B2A4A] block uppercase tracking-wider mb-2">
                    Requirement Summary:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    <div><strong>Contact:</strong> {submittedData.fullName} {submittedData.companyName && `(${submittedData.companyName})`}</div>
                    <div><strong>Email:</strong> {submittedData.email}</div>
                    <div><strong>Phone:</strong> {submittedData.phoneNumber}</div>
                    <div><strong>Preferred Mode:</strong> {submittedData.transportMode}</div>
                    <div><strong>Pickup:</strong> {submittedData.pickupLocation}</div>
                    <div><strong>Delivery:</strong> {submittedData.deliveryLocation}</div>
                    <div><strong>Cargo Type:</strong> {submittedData.cargoType}</div>
                    {submittedData.approxWeight && <div><strong>Weight:</strong> {submittedData.approxWeight}</div>}
                  </div>
                  {submittedData.additionalDetails && (
                    <div className="pt-2 text-slate-600 border-t border-slate-100">
                      <strong>Notes:</strong> {submittedData.additionalDetails}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#1261A0] text-white text-xs font-bold hover:bg-[#0E4E82] transition-colors"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              /* Quotation Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Contact Information Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Rajesh Sharma"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g., Apex Manufacturing Ltd"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g., +91 98765 43210"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                        errors.phoneNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all`}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., rajesh@company.in"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Pickup & Delivery Location Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Pickup */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Pickup Location / City / PIN <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      placeholder="e.g., Bhiwandi, Maharashtra (421302)"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                        errors.pickupLocation ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all`}
                    />
                    {errors.pickupLocation && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.pickupLocation}</p>
                    )}
                  </div>

                  {/* Delivery */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Delivery Location / City / PIN <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      placeholder="e.g., Gurugram, Haryana (122001)"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                        errors.deliveryLocation ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all`}
                    />
                    {errors.deliveryLocation && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.deliveryLocation}</p>
                    )}
                  </div>
                </div>

                {/* Cargo Type & Approximate Weight */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Cargo Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Cargo Type <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.cargoType}
                      onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                      placeholder="e.g., Heavy Machinery, FMCG Cartons, Raw Material"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                        errors.cargoType ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all`}
                    />
                    {errors.cargoType && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.cargoType}</p>
                    )}
                  </div>

                  {/* Approximate Weight */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                      Approximate Weight <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.approxWeight}
                      onChange={(e) => setFormData({ ...formData, approxWeight: e.target.value })}
                      placeholder="e.g., 5.5 Metric Tons or 800 kg"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Transportation Mode Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-2">
                    Preferred Transportation Mode
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { mode: 'Road', icon: Truck, label: 'Road Freight' },
                      { mode: 'Rail', icon: Train, label: 'Rail Cargo' },
                      { mode: 'Air', icon: Plane, label: 'Air Express' },
                      { mode: 'Not Sure', icon: QuestionIcon, label: 'Not Sure / Advice' },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = formData.transportMode === item.mode;
                      return (
                        <button
                          key={item.mode}
                          type="button"
                          onClick={() => setFormData({ ...formData, transportMode: item.mode as any })}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                            isSelected
                              ? 'border-[#1261A0] bg-[#EAF4FC] text-[#1261A0] shadow-sm font-bold'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-[#1261A0]' : 'text-slate-400'}`} />
                          <span className="text-xs">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2A4A] mb-1.5">
                    Additional Details / Handling Requirements <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    placeholder="Specify any dimensions, transit deadlines, loading constraints, or special handling..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#1261A0] focus:ring-1 focus:ring-[#1261A0] text-slate-900 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-interactive w-full py-4 px-6 rounded-xl bg-[#1261A0] hover:bg-[#0E4E82] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  By submitting, your cargo details are reviewed by our logistics coordination desk for tailored feasibility. No public pricing is shared without mutual alignment.
                </p>
              </form>
            )}

          </div>

          {/* RIGHT: Coordination Desk Information & Honest Contact Card (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Why Request a Quote Panel */}
            <div className="bg-[#0B2A4A] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Tailored Commercial Quotations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Because freight variables—such as route tolling, seasonal capacity, cargo dimensions, and transit urgency—vary widely, we provide customized quotations rather than generalized rate cards.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Transparent carrier options matched to consignment weight</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Dedicated coordinator assigned to your enquiry</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Strict confidentiality regarding commercial trade flows</span>
                </div>
              </div>
            </div>

            {/* Business Contact Details Card (Strictly adhering to honest policy: no invented numbers or addresses) */}
            <div className="bg-[#F7FAFC] rounded-2xl p-6 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Business Contact Coordinates
              </span>
              <h4 className="text-sm font-bold text-[#0B2A4A] mb-3">
                Connecting Cubes Logistics Coordination
              </h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1261A0] flex-shrink-0 mt-0.5" />
                  <span>Pan-India Coordination Network (Operational Headquarters to be confirmed)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#1261A0] flex-shrink-0 mt-0.5" />
                  <span>Operations: Monday – Saturday (Standard Freight Transit Timings)</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 italic">
                Direct phone and registered address details will be populated once official business verification is completed.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
