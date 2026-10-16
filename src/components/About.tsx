import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "IVD Manufacturing Support",
      desc: "Comprehensive turnkey assistance spanning feasibility studies, pilot manufacturing, plant layout design, and ISO 13485 compliance.",
      icon: <Target className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Regulatory Expertise",
      desc: "End-to-end CDSCO licensing, CE-IVD / IVDR technical documentation, audit preparedness, and global market authorization.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Research & Innovation",
      desc: "Translational research, precision biomarker discovery, method validation, and peer-reviewed scientific publications.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      title: "Academic & Industry Collaboration",
      desc: "Fostering the next generation of laboratory scientists through structured internships, research dissertations, and GCP/GLP training.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-3 block">
              About NexIVD Laboratories
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Pioneering Diagnostics with Scientific Excellence
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              NexIVD Laboratories Pvt. Ltd. combines doctoral scientific rigor, regulatory precision, and compassionate healthcare solutions to empower IVD manufacturers, clinical laboratories, and researchers worldwide. We provide full-lifecycle turnkey solutions from initial proof-of-concept assays through to commercial manufacturing and regulatory approvals.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col gap-2.5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-highlight/30 hover:bg-white hover:shadow-lg transition-all">
                  <div className={`p-3 rounded-xl w-fit ${v.color}`}>
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-primary text-base">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#team"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-highlight transition-colors"
              >
                Meet Our Scientific Team <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-highlight transition-colors"
              >
                View Accreditations <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5] bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Diagnostic Laboratory" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-[2px] w-8 bg-accent" />
                    <span className="text-accent font-bold uppercase tracking-widest text-xs">Our Mission & Vision</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold leading-snug">
                    "Excellence in IVD Development & Global Regulatory Consultancy"
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To democratize access to cutting-edge diagnostic manufacturing capabilities through ethical science, transparent regulatory pathways, and relentless innovation.
                </p>

                <div className="pt-2 flex items-center gap-6 text-xs text-slate-300 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>ISO 13485:2016</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>CDSCO Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-[60px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
