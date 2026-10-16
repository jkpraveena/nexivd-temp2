import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { saveInquiry } from '../utils/db';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'IVD Manufacturing Support',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Dispatches and records in background DB
      saveInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyOrCollege: 'Online Inquiry',
        serviceOrArea: formData.subject,
        message: formData.message,
        type: 'contact'
      });

      setIsSubmitting(false);
      setSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const contactDetails = [
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: "Phone / Direct Support", 
      value: "+91-9848218585", 
      href: "tel:+919848218585" 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Consultation & Corporate Emails", 
      value: (
        <div className="space-y-0.5">
          <div className="text-primary font-bold">info@nexivdlabs.com</div>
          <div className="text-slate-500 text-xs">nexivdlabs@gmail.com</div>
        </div>
      ), 
      href: "mailto:info@nexivdlabs.com?cc=nexivdlabs@gmail.com" 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: "Corporate & Laboratory Address", 
      value: (
        <span className="block text-primary font-bold text-sm leading-relaxed">
          NexIVD Laboratories Pvt. Ltd.<br />
          Plot No. 54, Pillar No: A1507,<br />
          Andhra Bank Colony, Moosarambagh,<br />
          Hyderabad, Telangana - 500036
        </span>
      ), 
      href: "https://maps.google.com/?q=Moosarambagh+Hyderabad" 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Connect With Us
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Start Your Diagnostics & Regulatory Journey Today
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Whether you need plant design, IVD regulatory approvals, or validation support, 
              our team of scientists and regulatory associates is ready to assist.
            </p>

            <div className="space-y-4">
              {contactDetails.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  className="flex items-start gap-4 p-6 glass rounded-2xl border border-white hover:border-highlight/20 hover:shadow-xl transition-all group bg-white/70"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                    <div className="text-primary font-bold">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 sm:p-12 rounded-[40px] text-white"
          >
            <div className="mb-8">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Fast Response Guarantee
              </span>
              <h3 className="text-2xl font-display font-bold mb-2">Send us a Message</h3>
              <p className="text-slate-400 text-sm">
                Fill in the form below and our team will get in touch with you shortly.
              </p>
            </div>

            {!submitted ? (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Dr. John Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors text-white text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98482 18585"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors text-white text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Service Subject</label>
                    <select 
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors text-white text-sm"
                    >
                      <option className="bg-slate-900" value="IVD Manufacturing Support">IVD Manufacturing Support</option>
                      <option className="bg-slate-900" value="Laboratory & Preclinical Support">Laboratory & Preclinical Support</option>
                      <option className="bg-slate-900" value="IVD Devices Verification & Validation">IVD Devices Verification & Validation</option>
                      <option className="bg-slate-900" value="Data Management & Biostatistics">Data Management & Biostatistics</option>
                      <option className="bg-slate-900" value="Medical Writing & Scientific Affairs">Medical Writing & Scientific Affairs</option>
                      <option className="bg-slate-900" value="IVD Regulatory Affairs">IVD Regulatory Affairs</option>
                      <option className="bg-slate-900" value="Academic Collaboration / Internships">Academic Collaboration / Internships</option>
                      <option className="bg-slate-900" value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message *</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Tell us about your diagnostic project, timeline, or requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent transition-colors resize-none text-white text-sm"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl shadow-accent/20 active:scale-95 group text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-display font-bold">Thank You! Your Request Has Been Recorded</h4>
                <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                  Your consultation request is recorded. Our team will reach back to you soon. Thank you!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating CTA for WhatsApp */}
      <motion.a
        href="https://wa.me/919848218585"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-40 hover:brightness-110"
        title="Chat on WhatsApp with NexIVD: 9848218585"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
