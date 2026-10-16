import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, ZoomIn, X, ExternalLink, FileCheck } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    standard: string;
    image: string;
    id: string;
    description: string;
  } | null>(null);

  const certificates = [
    {
      id: "cert-1",
      title: "Accreditation Certificate 01",
      standard: "ISO 13485:2016 & CDSCO Compliance",
      badge: "Quality Management System",
      image: "/certifications/cert-placeholder-1.svg",
      description: "Medical Devices Quality Management System certification ensuring rigorous validation, traceability, and regulatory compliance across all IVD manufacturing processes."
    },
    {
      id: "cert-2",
      title: "Accreditation Certificate 02",
      standard: "Good Laboratory Practice (GLP) & Preclinical Compliance",
      badge: "Laboratory Excellence",
      image: "/certifications/cert-placeholder-2.svg",
      description: "Good Laboratory Practice and analytical quality compliance certification supporting verification, stability evaluation, and preclinical studies."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-highlight" />
            Quality & Compliance
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-5"
          >
            Certifications & Accreditations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            NexIVD adheres strictly to internationally benchmarked quality standards and regulatory compliance frameworks for IVD development and diagnostic testing.
          </motion.p>
        </div>

        {/* 2 Certificate Cards with Placeholders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl border border-slate-200 hover:border-highlight/40 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image Frame */}
              <div 
                className="relative bg-slate-100/70 p-4 aspect-[4/3] flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold backdrop-blur-[2px]">
                  <ZoomIn className="w-6 h-6" />
                  <span>Click to Enlarge</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-slate-200 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-highlight" />
                  {cert.badge}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-highlight">
                    Official Accreditation #{index + 1}
                  </span>
                  <span className="text-[11px] font-semibold bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-md">
                    Placeholder Ready
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-2">
                  {cert.standard}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-highlight transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                    Preview Certificate
                  </button>
                  <span className="text-xs text-slate-400">NexIVD Laboratories</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on replacing photo later */}
        <div className="mt-12 max-w-2xl mx-auto bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 flex items-center gap-3 text-sm text-blue-900">
          <FileCheck className="w-5 h-5 text-highlight shrink-0" />
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Accreditation Image Placeholders:</span> Configured for 2 official certificates. Photos can be easily updated in the public directory at any time.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
                <div>
                  <h4 className="font-display font-bold text-primary text-lg">{selectedCert.standard}</h4>
                  <p className="text-xs text-slate-500">{selectedCert.title}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 bg-slate-100/60 max-h-[70vh] flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg border border-slate-200"
                />
              </div>
              <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-500 max-w-md">
                  {selectedCert.description}
                </p>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-highlight transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
