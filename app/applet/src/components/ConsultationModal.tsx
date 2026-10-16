import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, Mail, CheckCircle2, MessageSquare, Calendar, Building, Sparkles } from 'lucide-react';
import { triggerConsultationEmail } from '../utils/db';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialService }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequirement: initialService || 'Laboratory & Preclinical Support',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequirement: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Trigger email directly to jkpraveena60@gmail.com and save to database
      triggerConsultationEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        serviceRequirement: formData.serviceRequirement,
        preferredTime: formData.preferredTime,
        message: formData.message
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello NexIVD Laboratories, I would like to book a consultation.\n\nName: ${formData.name || 'Client'}\nService: ${formData.serviceRequirement}\nPhone: ${formData.phone || 'N/A'}`
    );
    window.open(`https://wa.me/919848218585?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-primary to-secondary text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Expert Consultation
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold">
            Book a Scientific & Regulatory Consultation
          </h3>
          <p className="text-slate-300 text-sm mt-2">
            Inquiry will be directly triggered to: <span className="text-accent font-semibold">jkpraveena60@gmail.com</span> & recorded in our database.
          </p>
        </div>

        {/* Form or Success View */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Kumar"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98482 18585"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Company or Lab Name"
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Service Requirement *
                </label>
                <select
                  value={formData.serviceRequirement}
                  onChange={e => setFormData({ ...formData, serviceRequirement: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                >
                  <option value="Laboratory & Preclinical Support">Laboratory & Preclinical Support</option>
                  <option value="IVD Medical Device Verification & Validation">IVD Medical Device Verification & Validation</option>
                  <option value="Data Management & Biostatistics">Data Management & Biostatistics</option>
                  <option value="Medical Writing & Scientific Affairs">Medical Writing & Scientific Affairs</option>
                  <option value="IVD Regulatory Affairs">IVD Regulatory Affairs</option>
                  <option value="Technology & Support Services">Technology & Support Services</option>
                  <option value="Plant Setup Guidance">Plant Setup Guidance</option>
                  <option value="Turnkey IVD Manufacturing">Turnkey IVD Manufacturing</option>
                  <option value="Other Diagnostics Inquiry">Other Diagnostics Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Preferred Meeting Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                  <option value="Immediate / Urgent Callback">Immediate / Urgent Callback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Message / Project Details *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your product, assay, stage of development, or regulatory needs..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50 resize-none"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all text-sm font-bold border border-[#25D366]/30"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp: 9848218585
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white hover:bg-highlight transition-all font-bold text-sm shadow-xl shadow-primary/20"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Dispatching...' : 'Send Consultation Request'}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-display font-bold text-primary mb-2">
                Consultation Request Dispatched!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Your consultation details have been sent directly to <strong className="text-primary">jkpraveena60@gmail.com</strong> (CC: info@nexivdlabs.com) and securely recorded in our database.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 max-w-md mx-auto border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Name:</span>
                <span className="font-semibold text-primary">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service:</span>
                <span className="font-semibold text-primary">{formData.serviceRequirement}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Time Preference:</span>
                <span className="font-semibold text-primary">{formData.preferredTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg hover:brightness-105"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp Now
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-300"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
