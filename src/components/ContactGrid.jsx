import React, { useState } from "react";
import { ShieldCheck, Phone, Mail, MessageSquare, ChevronDown, AlertCircle, Loader } from "lucide-react";

function ContactGrid() {
  const phone = "+254 713 919 051";
  const email = "info@munitmedia.co.ke";
  const whatsappNumber = "254713919051";

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { value: "wedding", label: "Wedding Videography & Photography" },
    { value: "corporate", label: "Corporate Brand Shoots" },
    { value: "events", label: "Event Coverage (Birthdays/Baby Showers)" },
    { value: "dowry", label: "Dowry / Traditional Ceremonies" },
    { value: "editing", label: "Professional Video Editing" },
    { value: "other", label: "Other / Custom Project" }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.emailAddress.trim()) newErrors.emailAddress = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) newErrors.emailAddress = "Enter a valid email";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Please describe your project";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const generateWhatsAppMessage = () => {
    const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;
    return `Hi M-Unit Media! 👋\n\nI'd like to request a quote for your services.\n\n📋 *Project Details:*\n• Name: ${formData.name}\n• Phone: ${formData.phoneNumber}\n• Email: ${formData.emailAddress}\n• Service: ${serviceLabel}\n\n📝 *Project Description:*\n${formData.message}\n\nLooking forward to hearing from you!`;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;

    setLoading(true);
    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitted(true);
      resetForm();
      setLoading(false);
    }, 500);
  };

  const handleEmailSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;
      const emailBody = `
Name: ${formData.name}
Phone: ${formData.phoneNumber}
Service: ${serviceLabel}
Message: ${formData.message}
      `.trim();

      // Fallback: Open email client
      window.location.href = `mailto:${email}?subject=Quote Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      setSubmitted(true);
      resetForm();
    } catch (error) {
      console.error("Email error:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", phoneNumber: "", emailAddress: "", service: "", message: "" });
    setErrors({});
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* LEFT COLUMN: Trust & Contact Info */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl space-y-8 border border-slate-700 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
            Why Choose M-Unit Media?
          </h3>
          <ul className="space-y-4">
            {[
              "15+ Years Industry Experience",
              "Cinematic 4K Video Quality",
              "Advanced Lighting & Audio Equipment",
              "Fast Turnaround on Delivery",
              "Certified Professionals Only"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 font-bold text-slate-100">
                <ShieldCheck className="text-amber-400 shrink-0 mt-1" size={20} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Quick Links */}
        <div className="space-y-4">
          <a href={`tel:${phone}`} className="flex items-center gap-4 sm:gap-6 bg-slate-800 border border-slate-700 p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-xl hover:border-slate-600 transition-all hover:-translate-y-1">
            <div className="bg-green-500 p-3 md:p-4 rounded-xl text-white shrink-0">
              <Phone size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest">Call Us Anytime</p>
              <p className="text-lg md:text-xl font-black text-white truncate">{phone}</p>
            </div>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-4 sm:gap-6 bg-slate-800 border border-slate-700 p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-xl hover:border-slate-600 transition-all hover:-translate-y-1">
            <div className="bg-blue-600 p-3 md:p-4 rounded-xl text-white shrink-0">
              <Mail size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest">Email Us</p>
              <p className="text-lg md:text-xl font-black text-white truncate">{email}</p>
            </div>
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: The Quote Form */}
      <div className="lg:col-span-7 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 p-6 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
        <div className="flex items-start gap-4 mb-10 md:mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 md:p-4 rounded-xl text-white shrink-0 shadow-lg">
            <MessageSquare size={28} />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">Get Your Quote</h2>
            <p className="text-slate-300 font-bold text-sm md:text-base mt-1">WhatsApp or Email. We'll respond within 5 minutes!</p>
          </div>
        </div>

        {submitted && (
          <div className="mb-8 p-4 bg-green-500/20 border border-green-500 rounded-xl flex items-center gap-3">
            <div className="text-green-400 text-lg">✓</div>
            <p className="text-green-300 font-bold">Thanks! Check your WhatsApp or email inbox shortly.</p>
          </div>
        )}

        <form className="space-y-5 md:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-black text-slate-200 block">Your Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., John Kamau"
                className={`w-full px-4 md:px-6 py-3 md:py-4 bg-slate-700/50 rounded-xl border-2 transition-all font-semibold text-white placeholder-slate-400 focus:outline-none ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-slate-600 focus:border-amber-500 focus:bg-slate-700"
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm font-bold flex items-center gap-1"><AlertCircle size={14} /> {errors.name}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-black text-slate-200 block">Phone Number *</label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g., +254 713 919 051"
                className={`w-full px-4 md:px-6 py-3 md:py-4 bg-slate-700/50 rounded-xl border-2 transition-all font-semibold text-white placeholder-slate-400 focus:outline-none ${
                  errors.phoneNumber ? "border-red-500 focus:border-red-500" : "border-slate-600 focus:border-amber-500 focus:bg-slate-700"
                }`}
              />
              {errors.phoneNumber && <p className="text-red-400 text-sm font-bold flex items-center gap-1"><AlertCircle size={14} /> {errors.phoneNumber}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-black text-slate-200 block">Email Address *</label>
            <input
              id="email"
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 md:px-6 py-3 md:py-4 bg-slate-700/50 rounded-xl border-2 transition-all font-semibold text-white placeholder-slate-400 focus:outline-none ${
                errors.emailAddress ? "border-red-500 focus:border-red-500" : "border-slate-600 focus:border-amber-500 focus:bg-slate-700"
              }`}
            />
            {errors.emailAddress && <p className="text-red-400 text-sm font-bold flex items-center gap-1"><AlertCircle size={14} /> {errors.emailAddress}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-black text-slate-200 block">Service Required *</label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 md:px-6 py-3 md:py-4 bg-slate-700/50 rounded-xl border-2 transition-all font-semibold text-white appearance-none cursor-pointer focus:outline-none ${
                  errors.service ? "border-red-500 focus:border-red-500" : "border-slate-600 focus:border-amber-500 focus:bg-slate-700"
                }`}
              >
                <option value="">Select a service...</option>
                {services.map(svc => (
                  <option key={svc.value} value={svc.value}>{svc.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            </div>
            {errors.service && <p className="text-red-400 text-sm font-bold flex items-center gap-1"><AlertCircle size={14} /> {errors.service}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-black text-slate-200 block">Project Description *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
              rows="4"
              className={`w-full px-4 md:px-6 py-3 md:py-4 bg-slate-700/50 rounded-xl border-2 transition-all font-semibold text-white placeholder-slate-400 focus:outline-none resize-none ${
                errors.message ? "border-red-500 focus:border-red-500" : "border-slate-600 focus:border-amber-500 focus:bg-slate-700"
              }`}
            />
            {errors.message && <p className="text-red-400 text-sm font-bold flex items-center gap-1"><AlertCircle size={14} /> {errors.message}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 md:pt-6">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-base md:text-lg py-4 md:py-5 rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>💬</span>
                  <span>WhatsApp Quote</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black text-base md:text-lg py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>📧</span>
                  <span>Email Quote</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-slate-400 font-bold text-xs md:text-sm">
            ✓ We respond to all inquiries within 5 minutes during business hours
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactGrid;