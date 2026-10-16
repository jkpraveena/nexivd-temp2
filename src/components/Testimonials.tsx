import { motion } from 'motion/react';
import { Star, Quote, Building2 } from 'lucide-react';

export default function Testimonials() {
  const clientLogos = [
    {
      id: "client-1",
      name: "MONOZYME",
      subtitle: "Reagents & Equipments",
      logo: "/client-logos/client-1.jpeg",
      fallbackLogo: "/client-logos/WhatsApp Image 2026-10-16 at 21.13.19.jpeg",
      theme: "light"
    },
    {
      id: "client-2",
      name: "Bio Regus",
      subtitle: "Test Smart. Trust The Best.",
      logo: "/client-logos/client-2.jpeg",
      fallbackLogo: "/client-logos/WhatsApp Image 2026-10-16 at 21.13.32.jpeg",
      theme: "dark"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director, Clinical Reference Labs",
      text: "NexIVD's regulatory consultancy and verification support was pivotal in our recent IVD product approval. Their attention to detail in technical files and CDSCO compliance is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Founder, Biotech Startup",
      text: "The turnkey manufacturing support we received allowed us to set up our QC laboratory in record time. Excellent professionals with deep scientific integrity.",
      rating: 5
    },
    {
      name: "Prakash Sharma",
      role: "Senior Research Scientist",
      text: "Collaborating with NexIVD on method validation provided the rigorous scientific evidence we needed for our international trial submissions.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Client Logos Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-3 block">
              Strategic Diagnostic Collaborations
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary">
              Trusted by Industry Partners & Diagnostic Leaders
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Collaborating with innovative diagnostic manufacturers, reference laboratories, and biotech enterprises.
            </p>
          </div>

          {/* 2 Client Logos */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {clientLogos.map((client, idx) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-highlight/40 hover:shadow-xl transition-all duration-300 group shadow-sm"
              >
                <div className={`w-full h-28 max-w-[280px] flex items-center justify-center p-3 mb-4 rounded-2xl overflow-hidden border ${client.theme === 'dark' ? 'bg-slate-950 border-slate-900 shadow-inner' : 'bg-slate-50/80 border-slate-200/60'}`}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== client.fallbackLogo && !target.src.endsWith(client.fallbackLogo)) {
                        target.src = client.fallbackLogo;
                      }
                    }}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 text-base font-display font-bold text-primary">
                  <Building2 className="w-4 h-4 text-highlight" />
                  <span>{client.name}</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 font-medium">
                  {client.subtitle}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="text-center mb-16 pt-10 border-t border-slate-100">
          <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">Trust & Success</span>
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Feedback from clinical directors, biotech founders, and laboratory researchers who partner with NexIVD.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[40px] border border-slate-100 flex flex-col items-center text-center relative hover:shadow-2xl transition-all bg-white/70"
            >
              <div className="absolute top-[-20px] bg-primary p-4 rounded-2xl text-accent shadow-xl">
                <Quote className="w-6 h-6 fill-accent" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-4 h-4 ${idx < t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed text-sm">
                "{t.text}"
              </p>
              <div className="mt-auto">
                <h4 className="font-display font-bold text-primary">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
