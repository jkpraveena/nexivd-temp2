import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FlaskConical, 
  CheckCircle2, 
  Database, 
  PenTool, 
  Gavel, 
  Cpu, 
  ArrowUpRight, 
  X, 
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

interface ServicesProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const services = [
    {
      title: "Laboratory & Preclinical Support",
      desc: "Analytical validation, stability studies, preclinical performance evaluation, and laboratory testing support.",
      icon: <FlaskConical className="w-8 h-8" />,
      color: "bg-blue-600",
      badge: "Analytical & Preclinical",
      deliverables: [
        "Analytical sensitivity, specificity, and cross-reactivity testing",
        "Real-time and accelerated stability evaluation studies",
        "Preclinical diagnostic performance assessments",
        "Comprehensive laboratory protocols and test reports"
      ],
      keywords: ["Preclinical Performance", "Analytical Validation", "Stability Testing"]
    },
    {
      title: "IVD Medical Device Verification & Validation",
      desc: "Verification and validation services to assess the performance, reliability, and accuracy of IVD products.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "bg-cyan-600",
      badge: "V&V Testing",
      deliverables: [
        "Design Verification & Validation protocols compliant with ISO 13485",
        "Clinical sample cohort validation and comparator studies",
        "Diagnostic sensitivity, specificity, and precision assessments",
        "Risk management and design history file (DHF) documentation"
      ],
      keywords: ["Verification & Validation", "Diagnostic Accuracy", "CDSCO Compliance"]
    },
    {
      title: "Data Management & Biostatistics",
      desc: "Study data management, statistical analysis, interpretation of laboratory results, and support for evidence generation.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-teal-600",
      badge: "Evidence & Statistics",
      deliverables: [
        "Statistical analysis plans (SAP) and sample size calculations",
        "Clinical study electronic data capture (EDC) & CRF design",
        "ROC curve, Bland-Altman, and regression diagnostic analysis",
        "Clinical evidence generation for regulatory dossiers"
      ],
      keywords: ["Biostatistics", "Data Management", "Evidence Generation"]
    },
    {
      title: "Medical Writing & Scientific Affairs",
      desc: "Preparation of scientific documentation, clinical evidence summaries, technical files, manuscripts, and regulatory content.",
      icon: <PenTool className="w-8 h-8" />,
      color: "bg-indigo-600",
      badge: "Technical Documentation",
      deliverables: [
        "Clinical Performance Evaluation Reports (PER / CER)",
        "Instructions for Use (IFU) and product labeling authoring",
        "Technical Documentation files for national and global filings",
        "Peer-reviewed scientific manuscripts and white papers"
      ],
      keywords: ["Medical Writing", "Scientific Affairs", "Technical Files"]
    },
    {
      title: "IVD Regulatory Affairs",
      desc: "Support for regulatory submissions, technical documentation, compliance guidance, and market authorization processes.",
      icon: <Gavel className="w-8 h-8" />,
      color: "bg-slate-700",
      badge: "Regulatory Submissions",
      deliverables: [
        "CDSCO medical device registration & import/manufacturing licensing (Form MD-3/4/5/9)",
        "Technical dossier compilation (GHTF / STED format)",
        "Audit readiness, gap analysis, and post-market surveillance (PMS)",
        "Liaison with regulatory authorities and ethics committees"
      ],
      keywords: ["Regulatory Consultancy", "CDSCO Compliance", "Market Authorization"]
    },
    {
      title: "Technology & Support Services",
      desc: "Technical support, laboratory workflow assistance, instrumentation support, and operational guidance.",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-blue-800",
      badge: "Operational Support",
      deliverables: [
        "Diagnostic instrument calibration and workflow optimization",
        "LIMS integration and laboratory automation assistance",
        "Standard operating procedure (SOP) design and technician training",
        "Troubleshooting assays, reagents, and equipment setup"
      ],
      keywords: ["Technology Support", "IVD Manufacturing", "Plant Setup Guidance"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Laboratory Capabilities & Core Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            Laboratory Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Empowering IVD manufacturing industries, research institutions, and clinical laboratories with certified laboratory capabilities, regulatory guidance, and scientific excellence.
          </motion.p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass p-8 rounded-3xl border border-slate-200 hover:border-highlight/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full bg-white/70"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center p-3 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-primary mb-3 leading-tight group-hover:text-highlight transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              {/* Deliverable preview bullets */}
              <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-100">
                {item.deliverables.slice(0, 2).map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle className="w-3.5 h-3.5 text-highlight shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{del}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveModal(idx)}
                  className="flex items-center gap-1.5 text-primary font-bold text-sm hover:text-highlight transition-colors group/btn"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onOpenConsultation && onOpenConsultation(item.title)}
                  className="text-xs font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white px-3.5 py-1.5 rounded-xl transition-all"
                >
                  Book Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Keywords Highlight Strip */}
        <div className="mt-16 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
          <span className="font-bold text-primary uppercase tracking-wider mr-2">Specializations:</span>
          {[
            "IVD Manufacturing",
            "Regulatory Consultancy",
            "Verification & Validation",
            "Assay Development",
            "CDSCO Compliance",
            "Medical Writing",
            "Scientific Affairs",
            "Diagnostic Product Development"
          ].map((kw, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium hover:bg-highlight/10 hover:text-highlight transition-colors">
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${services[activeModal].color} text-white flex items-center justify-center p-3 shadow-md`}>
                    {services[activeModal].icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-highlight">
                      Capability Overview
                    </span>
                    <h3 className="text-2xl font-display font-bold text-primary">
                      {services[activeModal].title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Scope & Service Definition</h4>
                  <p className="text-slate-700 leading-relaxed text-base">
                    {services[activeModal].desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Deliverables & Workflows</h4>
                  <div className="space-y-2.5">
                    {services[activeModal].deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {services[activeModal].keywords.map((kw, kIdx) => (
                    <span key={kIdx} className="px-3 py-1 rounded-lg bg-primary/5 text-primary text-xs font-semibold">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Rapid response from our scientific specialists
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const serviceName = services[activeModal].title;
                      setActiveModal(null);
                      if (onOpenConsultation) {
                        onOpenConsultation(serviceName);
                      }
                    }}
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-xs hover:bg-highlight transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
