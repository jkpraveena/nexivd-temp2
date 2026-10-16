import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, ZoomIn, X, CheckCircle2 } from 'lucide-react';

interface CertificateItem {
  id: string;
  title: string;
  standard: string;
  subInfo: string;
  badge: string;
  image: string;
  fallbackImage: string;
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      id: "cert-1",
      title: "Certificate of Recognition",
      standard: "DPIIT #StartupIndia Recognition",
      subInfo: "Certificate No: DIPP229733 • Healthcare & Medical Devices Biomedical",
      badge: "Govt. of India Recognized",
      image: "/certifications/cert-1.jpeg",
      fallbackImage: "/certifications/WhatsApp Image 2026-10-16 at 21.09.57.jpeg"
    },
    {
      id: "cert-2",
      title: "Form GST REG-06 Registration",
      standard: "Official Corporate GST Registration",
      subInfo: "Registration No: 36AAKCN8487B1Z3 • NexIVD Laboratories Pvt Ltd",
      badge: "Corporate Incorporation",
      image: "/certifications/cert-2.jpeg",
      fallbackImage: "/certifications/WhatsApp Image 2026-10-16 at 21.11.29.jpeg"
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
            NexIVD Laboratories Private Limited is recognized by the Government of India, operating under strict quality assurance and statutory compliance standards.
          </motion.p>
        </div>

        {/* 2 Official Certificate Cards */}
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
                className="relative bg-slate-900/5 p-4 aspect-[4/3] flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== cert.fallbackImage && !target.src.endsWith(cert.fallbackImage)) {
                      target.src = cert.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold backdrop-blur-[2px]">
                  <ZoomIn className="w-6 h-6" />
                  <span>Click to Enlarge</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-slate-200 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-highlight" />
                  {cert.badge}
                </div>
              </div>

              {/* Details (Clean, no description) */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-highlight">
                    Official Recognition #{index + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Document
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-1">
                  {cert.standard}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {cert.subInfo}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-highlight transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                    Preview Certificate
                  </button>
                  <span className="text-xs text-slate-400 font-medium">NexIVD Laboratories</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Clean, no description) */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
                <div>
                  <h4 className="font-display font-bold text-primary text-lg">{selectedCert.standard}</h4>
                  <p className="text-xs text-slate-500">{selectedCert.subInfo}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-slate-100/70 max-h-[75vh] flex items-center justify-center overflow-auto">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== selectedCert.fallbackImage && !target.src.endsWith(selectedCert.fallbackImage)) {
                      target.src = selectedCert.fallbackImage;
                    }
                  }}
                  className="max-h-[68vh] max-w-full object-contain rounded-xl shadow-lg border border-slate-200"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {selectedCert.badge} &bull; NexIVD Quality & Legal Compliance
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-highlight transition-colors"
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
