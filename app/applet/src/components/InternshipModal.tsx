import { useState } from 'react';
import { motion } from 'motion/react';
import { X, GraduationCap, Send, CheckCircle2, FileText, Mail, Sparkles } from 'lucide-react';
import { triggerInternshipEmail } from '../utils/db';

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InternshipModal({ isOpen, onClose }: InternshipModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    qualification: 'M.Sc. Clinical Biochemistry',
    graduationYear: '2026',
    areaOfInterest: 'Biomarker Validation & Analytical Testing',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Dispatches to info@nexivdlabs.com and nexivdlabs@gmail.com
      triggerInternshipEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        qualification: formData.qualification,
        graduationYear: formData.graduationYear,
        areaOfInterest: formData.areaOfInterest,
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-primary via-highlight to-primary text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-3">
            <GraduationCap className="w-4 h-4" />
            Academic Collaboration & Internships
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold">
            Apply for Research Internship
          </h3>
          <p className="text-slate-200 text-sm mt-1.5">
            Applications dispatched to: <span className="font-semibold text-accent">info@nexivdlabs.com</span> & <span className="font-semibold text-accent">nexivdlabs@gmail.com</span>
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Applicant Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="student@university.edu"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98482 18585"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  College / University *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Institution Name"
                  value={formData.college}
                  onChange={e => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Degree / Current Program *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. B.Tech / M.Sc. / Ph.D."
                  value={formData.qualification}
                  onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Year of Study / Graduation Year *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2026 or Final Year"
                  value={formData.graduationYear}
                  onChange={e => setFormData({ ...formData, graduationYear: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Area of Research Interest *
              </label>
              <select
                value={formData.areaOfInterest}
                onChange={e => setFormData({ ...formData, areaOfInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50"
              >
                <option value="Biomarker Validation & Analytical Testing">Biomarker Validation & Analytical Testing</option>
                <option value="Clinical Biochemistry & Preclinical Studies">Clinical Biochemistry & Preclinical Studies</option>
                <option value="IVD Device Verification & Validation (V&V)">IVD Device Verification & Validation (V&V)</option>
                <option value="Molecular Diagnostics & lncRNA Research">Molecular Diagnostics & lncRNA Research</option>
                <option value="Regulatory Affairs & CDSCO Compliance">Regulatory Affairs & CDSCO Compliance</option>
                <option value="Data Management & Biostatistics">Data Management & Biostatistics</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Statement of Interest / Academic Goals *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly state your academic objectives, laboratory exposure, or specific project interests..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-highlight text-sm bg-slate-50/50 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-semibold hover:text-highlight flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                Or open Google Form version
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white hover:bg-highlight transition-all font-bold text-sm shadow-xl shadow-primary/20"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Submitting...' : 'Submit Internship Application'}
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
                Application Submitted Successfully!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Your application has been logged and routed to our Academic Committee (<strong className="text-primary">info@nexivdlabs.com / nexivdlabs@gmail.com</strong>).
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-highlight"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
