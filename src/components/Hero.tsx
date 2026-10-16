import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-highlight" />
            ISO 13485:2016 Compliant • CDSCO Regulatory Experts
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-primary leading-[1.15] mb-8 max-w-4xl tracking-tight">
            Your Trusted Partner in{' '}
            <span className="bg-gradient-to-r from-highlight via-primary to-accent bg-clip-text text-transparent">
              IVD Manufacturing
            </span>{' '}
            & Regulatory Consultancy
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
            End-to-End Turnkey Solutions for IVD Manufacturing & Regulatory Compliance. Science with Excellence, Service with Innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <button 
              onClick={onOpenConsultation}
              className="bg-primary hover:bg-highlight text-white px-9 py-4 sm:py-5 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-primary/20 hover:shadow-highlight/20 active:scale-95 group text-sm sm:text-base cursor-pointer"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#services"
              className="bg-white text-primary border border-slate-200/90 px-9 py-4 sm:py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95 text-sm sm:text-base shadow-sm inline-flex items-center"
            >
              Explore Capabilities
            </a>
          </div>

          {/* Stats/Badges */}
          <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16 pt-8 border-t border-slate-200/60 max-w-3xl w-full">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary">100%</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-500 mt-2 font-display">
                Regulatory Compliance
              </span>
            </div>
            <div className="w-[1px] h-14 bg-slate-200" />
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary">Turnkey</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-500 mt-2 font-display">
                End-to-End Solutions
              </span>
            </div>
            <div className="w-[1px] h-14 bg-slate-200" />
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary">Ph.D. Led</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-500 mt-2 font-display">
                Scientific Team
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
