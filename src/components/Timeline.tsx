import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardList, 
  Search, 
  Microscope, 
  PackageCheck, 
  ShieldCheck, 
  Mountain, 
  FileSignature, 
  GitBranch, 
  Factory, 
  UserPlus, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

interface TimelineProps {
  onOpenConsultation?: () => void;
}

export default function Timeline({ onOpenConsultation }: TimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const steps = [
    { 
      title: "Product Portfolio Planning", 
      desc: "Comprehensive diagnostic market assessment, clinical need identification, product roadmapping, and target profile definitions.",
      details: "Identifying market viability, reimbursement landscape, competitive profiling, and defining technical specifications.",
      icon: <ClipboardList className="w-5 h-5" />, 
      color: "bg-blue-600" 
    },
    { 
      title: "Feasibility Studies", 
      desc: "Scientific proof-of-concept investigations, analytical detection limit screening, and formulation feasibility.",
      details: "Initial assay chemistry testing, matrix effect evaluations, and proof of analytical reproducibility.",
      icon: <Search className="w-5 h-5" />, 
      color: "bg-cyan-600" 
    },
    { 
      title: "Assay Development", 
      desc: "Precision assay optimization, reagent buffer formulation, calibration curve standardization, and sensitivity tuning.",
      details: "Optimization of antibody/antigen pairs, conjugate chemistry, enzyme substrates, and reaction kinetics.",
      icon: <Microscope className="w-5 h-5" />, 
      color: "bg-indigo-600" 
    },
    { 
      title: "Raw Material Selection", 
      desc: "Vendor qualification, critical raw material sourcing, specificity profiling, and supply chain redundancy planning.",
      details: "Screening nitrocellulose membranes, optical labels, antibodies, recombinant proteins, and plastic consumables.",
      icon: <PackageCheck className="w-5 h-5" />, 
      color: "bg-teal-600" 
    },
    { 
      title: "Method Validation", 
      desc: "Rigorous verification & validation compliant with ISO 13485 and CLSI guidelines (EP05, EP06, EP07, EP09).",
      details: "Assessing analytical specificity, linearity, precision (repeatability & reproducibility), and interfering substances.",
      icon: <ShieldCheck className="w-5 h-5" />, 
      color: "bg-primary" 
    },
    { 
      title: "Stability Studies", 
      desc: "Real-time, accelerated, in-use, and freeze-thaw stability protocol design, execution, and shelf-life determination.",
      details: "Testing under Arrhenius accelerated thermal conditions, transport simulation, and humidity challenges.",
      icon: <Mountain className="w-5 h-5" />, 
      color: "bg-blue-700" 
    },
    { 
      title: "Quality Control", 
      desc: "Batch release criteria, incoming inspection SOPs, in-process control thresholds, and Certificate of Analysis (CoA) frameworks.",
      details: "Establishing statistical process control (SPC), reference panel qualification, and tolerance limits.",
      icon: <FileSignature className="w-5 h-5" />, 
      color: "bg-slate-700" 
    },
    { 
      title: "Regulatory Documentation", 
      desc: "Comprehensive technical dossier compilation for CDSCO (Form MD-3/4/5/9) and international submissions.",
      details: "Design History Files (DHF), Risk Management Files (ISO 14971), Clinical Evaluation Reports (CER/PER), and IFUs.",
      icon: <GitBranch className="w-5 h-5" />, 
      color: "bg-cyan-700" 
    },
    { 
      title: "Plant Setup Guidance", 
      desc: "Cleanroom design (Class 10,000 / ISO 7 & 8), HVAC validation, equipment qualification (DQ/IQ/OQ/PQ), and facility layouts.",
      details: "Guiding layout ergonomics, workflow zoning to prevent contamination, and automated packaging lines.",
      icon: <Factory className="w-5 h-5" />, 
      color: "bg-indigo-700" 
    },
    { 
      title: "Production Training", 
      desc: "Hands-on staff training, GLP/GMP standard operating procedures, and seamless commercial batch handover.",
      details: "Training manufacturing technicians, QC analysts, cleanroom protocol officers, and safety supervisors.",
      icon: <UserPlus className="w-5 h-5" />, 
      color: "bg-primary" 
    }
  ];

  return (
    <section id="consultancy" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">End-to-End Support</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6 leading-tight">
              Consultancy & IVD Manufacturing Roadmap
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We provide complete turnkey solutions from the initial concept phase to commercialization and final handover. Expand any phase below to explore its technical scope.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-highlight" />
                <span>Turnkey Deliverables Guarantee</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Need customized support for an ongoing audit, plant setup, or validation cohort?
              </p>
              <button
                onClick={onOpenConsultation}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs hover:bg-highlight transition-all shadow-md flex items-center justify-center gap-2"
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-slate-100 hidden sm:block" />
              
              <div className="grid gap-5">
                {steps.map((step, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04 }}
                      className="relative flex items-start gap-4 sm:gap-6 sm:pl-16 group"
                    >
                      {/* Circle marker */}
                      <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full ${step.color} text-white flex items-center justify-center p-3 z-10 shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform relative border-4 border-white`}>
                        {step.icon}
                      </div>

                      <div 
                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className={`glass flex-grow p-5 sm:p-6 rounded-3xl border transition-all cursor-pointer bg-white ${
                          isExpanded ? 'border-highlight/40 shadow-xl shadow-primary/5' : 'border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold text-highlight bg-highlight/10 px-2 py-0.5 rounded">
                              Phase {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                            </span>
                            <h3 className="text-base sm:text-lg font-display font-bold text-primary">
                              {step.title}
                            </h3>
                          </div>
                          <button className="text-slate-400 hover:text-primary p-1">
                            {isExpanded ? <ChevronUp className="w-5 h-5 text-highlight" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </div>

                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          {step.desc}
                        </p>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed bg-slate-50/70 p-3.5 rounded-xl">
                                <span className="font-bold text-primary block mb-1">Execution Focus:</span>
                                {step.details}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Handover CTA Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 sm:ml-16 p-8 glass-dark rounded-3xl text-white relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="sm:w-2/3">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      Ready to Discuss Plant Setup or Verification?
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Consult with our Ph.D. scientists directly. Our specialists will get in touch with you promptly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <button 
                      onClick={onOpenConsultation}
                      className="w-full sm:w-auto bg-accent text-primary px-8 py-3.5 rounded-xl font-bold whitespace-nowrap hover:bg-white transition-all shadow-lg text-sm"
                    >
                      Talk to an Expert
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/20 rounded-full blur-[60px] pointer-events-none" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
