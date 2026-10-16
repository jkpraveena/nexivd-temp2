import { motion } from 'motion/react';
import { Award, Zap, Clock, ShieldCheck, HeartPulse, Scale, Settings, Users } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      title: "Scientific Excellence",
      desc: "Uncompromising focus on evidence-based practices and regulatory compliance.",
      icon: <Award />,
    },
    {
      title: "End-to-End Support",
      desc: "We manage projects from initial concept studies through to final production handover.",
      icon: <Zap />,
    },
    {
      title: "Fast Turnaround",
      desc: "Optimized workflows ensuring quick turnaround times without compromising accuracy.",
      icon: <Clock />,
    },
    {
      title: "Data Security",
      desc: "Strictly confidential handling of all client data and intellectual property.",
      icon: <ShieldCheck />,
    },
    {
      title: "State-of-the-Art",
      desc: "Utilizing modern instrumentation and the latest technology in all our processes.",
      icon: <Settings />,
    },
    {
      title: "Scalable Solutions",
      desc: "Flexible service models that grow with your project requirements.",
      icon: <TrendingUpIcon />,
    },
    {
      title: "Industry Mentorship",
      desc: "Expert guidance for students and upcoming laboratory professionals.",
      icon: <Users />,
    },
    {
      title: "Global Compliance",
      desc: "Meeting national and international regulatory standards for IVD products.",
      icon: <Scale />,
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 right-0 w-[800px] h-full bg-primary/20 blur-[150px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Why Partner With Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Precision. Reliability. <span className="text-accent">Innovation.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              NexIVD provides more than just consultancy; we provide a foundation for your healthcare innovation through scientific excellence and reliable support.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 shrink-0">
             <div className="flex flex-col">
                <span className="text-5xl font-display font-bold text-accent">50+</span>
                <span className="text-slate-400 text-sm mt-1">Global Partners</span>
             </div>
             <div className="flex flex-col">
                <span className="text-5xl font-display font-bold text-white">100%</span>
                <span className="text-slate-400 text-sm mt-1">Confidentiality</span>
             </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center p-3 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 p-1 bg-gradient-to-r from-primary via-highlight to-accent rounded-[40px]"
        >
            <div className="bg-slate-900 rounded-[39px] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left overflow-hidden relative">
               <div className="relative z-10">
                 <h3 className="text-3xl font-display font-bold mb-4">Ready to start your project?</h3>
                 <p className="text-slate-400 text-lg">Our experts are waiting to consult on your IVD product journey.</p>
               </div>
               <button className="relative z-10 bg-accent text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-2xl shadow-accent/20">
                  Book A Call Today
               </button>
               
               {/* Visual pulse */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500%] bg-primary/20 rotate-45 -z-0 blur-3xl opacity-50" />
            </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
