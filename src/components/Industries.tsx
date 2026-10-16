import { motion } from 'motion/react';
import { Activity, Heart, TestTube2, Flame, Bone, Baby, Pill, Biohazard } from 'lucide-react';

export default function Industries() {
  const categories = [
    { title: "Infectious Diseases", icon: <Biohazard />, color: "bg-red-50 text-red-500" },
    { title: "Cardiac Markers", icon: <Activity />, color: "bg-rose-50 text-rose-500" },
    { title: "Hormones", icon: <Heart />, color: "bg-blue-50 text-blue-500" },
    { title: "Tumor Markers", icon: <Flame />, color: "bg-orange-50 text-orange-500" },
    { title: "Autoimmune Disorders", icon: <TestTube2 />, color: "bg-indigo-50 text-indigo-500" },
    { title: "Fertility Testing", icon: <Baby />, color: "bg-purple-50 text-purple-500" },
    { title: "Bone Health Markers", icon: <Bone />, color: "bg-amber-50 text-amber-500" },
    { title: "Drug Abuse Testing", icon: <Pill />, color: "bg-emerald-50 text-emerald-500" }
  ];

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Sectors We Support
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            IVD Products & Research Areas
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide specialized consultancy and validation services across a wide range of diagnostic categories and marker developments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group glass p-8 rounded-3xl border border-slate-100 hover:border-highlight/40 transition-all flex flex-col items-center text-center cursor-default"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-2">{cat.title}</h3>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                Specialized Support Available
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary text-white rounded-[40px] flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
           <div className="lg:w-2/3 relative z-10">
              <h3 className="text-3xl font-display font-bold mb-4">Custom Development & Assays</h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                Don't see your specific marker here? We specialize in custom assay development, method optimization, and performance validation tailored to your unique research or clinical requirements.
              </p>
           </div>
           <div className="lg:w-1/3 flex justify-center relative z-10 w-full">
              <button className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:bg-accent transition-all flex items-center justify-center gap-2">
                 Inquire About Custom Assays
              </button>
           </div>
           
           {/* Abstract medical pattern */}
           <div className="absolute right-[-50px] bottom-[-50px] w-80 h-80 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M44.7,-76.4C58.2,-69.2,70,-58.5,78.2,-45.5C86.4,-32.5,91,-16.2,89.1,-0.6C87.2,15,78.8,30,68.9,41.4C59,52.8,47.6,60.6,35.1,67.6C22.6,74.6,9.1,80.8,-4.2,88.1C-17.5,95.3,-31.1,103.7,-43.3,101.4C-55.5,99.1,-66.4,86.2,-74.6,72.4C-82.8,58.7,-88.4,44.1,-90,29.3C-91.6,14.6,-89.2,-0.2,-85.7,-14.8C-82.2,-29.3,-77.6,-43.6,-68.8,-55.8C-60,-68,-47.1,-78.1,-33.4,-84.9C-19.8,-91.7,-5.2,-95.2,8.8,-90.1C22.7,-85,31.2,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
           </div>
        </div>
      </div>
    </section>
  );
}
