import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  UserCheck, 
  Network, 
  Lightbulb, 
  Microscope, 
  ArrowRight,
  ExternalLink,
  FileText,
  Mail,
  Copy,
  Check,
  BookmarkCheck
} from 'lucide-react';

interface AcademicProps {
  onOpenInternship?: () => void;
}

export default function Academic({ onOpenInternship }: AcademicProps) {
  const [copiedDoi, setCopiedDoi] = useState<string | null>(null);

  const highlights = [
    { title: "Hands-on Lab Exposure", desc: "Real-world experience with clinical chemistry, immunology assays, and modern instrumentation.", icon: <Microscope className="w-6 h-6" /> },
    { title: "GCP/GLP Workflows", desc: "Industry-standard Good Clinical Practice & Good Laboratory Practice compliance training.", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Doctoral Mentorship", desc: "Guided directly by experienced Ph.D. scientists with deep domain expertise in IVD manufacturing.", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Research & Publication", desc: "Support with dissertation thesis preparation, experimental data analysis, and manuscript drafting.", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Industry Networking", desc: "Build connections with diagnostic manufacturers, reference laboratories, and biotech innovators.", icon: <Network className="w-6 h-6" /> },
    { title: "Live Validation Projects", desc: "Contribute to live clinical trial protocols, analytical validation, and stability evaluation studies.", icon: <Lightbulb className="w-6 h-6" /> }
  ];

  const publications = [
    {
      id: "pub-1",
      title: "AST/ALT Ratio: Differential Diagnostic Modality Between ALD and Viral Hepatitis – A Preliminary Study",
      journal: "Clinical Diagnostics & Biochemical Investigations",
      date: "Preliminary Study / Published",
      doi: "DOI: Pending Registry / Available Upon Request",
      doiUrl: "#",
      type: "Clinical Diagnostic Study",
      summary: "Evaluates the transaminase ratio (De Ritis ratio) as a rapid, cost-effective differential diagnostic modality to discriminate between Alcoholic Liver Disease (ALD) and Viral Hepatitis in clinical laboratory cohorts.",
      keywords: ["AST/ALT Ratio", "ALD vs Viral Hepatitis", "Differential Diagnosis", "Biomarker Validation"]
    },
    {
      id: "pub-2",
      title: "Role of long non-coding RNAs in alcoholic liver diseases",
      journal: "Exploration of Digestive Diseases",
      date: "April 2026",
      doi: "10.37349/edd.2026.1005118",
      doiUrl: "https://doi.org/10.37349/edd.2026.1005118",
      type: "Molecular Research & Review",
      summary: "Comprehensive exploration of long non-coding RNAs (lncRNAs) as emerging regulatory molecules in the pathogenesis, cellular injury cascades, and targeted diagnostic biomarker discovery for alcoholic liver diseases.",
      keywords: ["lncRNA", "Alcoholic Liver Disease", "Exploration of Digestive Diseases", "Molecular Diagnostics"]
    }
  ];

  const handleCopyCitation = (citation: string, id: string) => {
    navigator.clipboard.writeText(citation);
    setCopiedDoi(id);
    setTimeout(() => setCopiedDoi(null), 2500);
  };

  return (
    <section id="academics" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Internships & Academics */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((h, i) => (
                <div key={i} className="glass p-6 rounded-3xl border border-white hover:border-highlight/30 hover:shadow-xl transition-all bg-white/70">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {h.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-2 text-base">{h.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">Education & Academic Partnerships</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Internships & Academic Collaboration
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              NexIVD bridges the gap between academic research and diagnostic industry practice. We offer undergraduate, postgraduate, and doctoral researchers immersive, hands-on scientific training and dissertation mentorship.
            </p>

            <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-5 mb-8">
              <div className="flex items-center gap-3 text-sm font-bold text-primary mb-2">
                <Mail className="w-4 h-4 text-highlight" />
                <span>Official HR & Academic Collaboration Portal:</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">
                Send CVs, college recommendation letters, and internship inquiries directly to:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold text-primary">
                <a href="mailto:info@nexivdlabs.com" className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:border-highlight">
                  info@nexivdlabs.com
                </a>
                <span className="text-slate-400 self-center">or</span>
                <a href="mailto:nexivdlabs@gmail.com" className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:border-highlight">
                  nexivdlabs@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => onOpenInternship && onOpenInternship()}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-highlight transition-all shadow-xl shadow-primary/20 group"
              >
                Apply for Internship
                <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <a
                href="mailto:info@nexivdlabs.com?cc=nexivdlabs@gmail.com&subject=Academic%20Collaboration%20Inquiry"
                className="px-6 py-4 rounded-xl font-bold border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all text-sm"
              >
                Email HR Directly
              </a>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Research Publications */}
        <div id="research" className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-3 block">
              Peer-Reviewed Scientific Literature
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Research Publications
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Advancing translational diagnostic medicine through rigorous biochemical investigations, clinical marker validations, and scientific publications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-highlight/40 shadow-lg hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-highlight/10 text-highlight">
                      <BookmarkCheck className="w-3.5 h-3.5" />
                      {pub.type}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {pub.date}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-primary mb-3 leading-snug hover:text-highlight transition-colors">
                    {pub.title}
                  </h4>

                  <p className="text-xs font-semibold text-slate-500 mb-4 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    <span>Journal: <strong className="text-slate-800">{pub.journal}</strong></span>
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pub.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pub.keywords.map((kw, kIdx) => (
                      <span key={kIdx} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-slate-500">
                    <span className="text-slate-400 block sm:inline">DOI: </span>
                    {pub.doi}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => handleCopyCitation(`${pub.title}. ${pub.journal}, ${pub.date}. ${pub.doi}`, pub.id)}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
                      title="Copy citation"
                    >
                      {copiedDoi === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>

                    {pub.doiUrl !== '#' ? (
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-highlight flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        Read Paper (DOI)
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href="mailto:info@nexivdlabs.com?subject=Inquiry%20regarding%20AST/ALT%20Ratio%20Study"
                        className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-highlight flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        Request Preprint
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0 pointer-events-none" />
    </section>
  );
}
