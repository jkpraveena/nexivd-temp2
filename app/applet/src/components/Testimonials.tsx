import { motion } from 'motion/react';
import { Star, Quote, Building2, Image as ImageIcon } from 'lucide-react';

export default function Testimonials() {
  const clientLogos = [
    {
      id: "client-1",
      name: "Diagnostic Partner 01",
      subtitle: "Clinical IVD Manufacturer",
      logo: "/client-logos/client-logo-1.svg",
      placeholderText: "Client Logo 1 (Placeholder)"
    },
    {
      id: "client-2",
      name: "Healthcare Partner 02",
      subtitle: "Biotech & Precision Medicine",
      logo: "/client-logos/client-logo-2.svg",
      placeholderText: "Client Logo 2 (Placeholder)"
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
        
        {/* 9. Client Logos Section */}
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

          {/* 2 Client Logo Placeholders */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {clientLogos.map((client, idx) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-highlight/40 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="w-full h-24 max-w-[240px] flex items-center justify-center p-2 mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                  <Building2 className="w-3.5 h-3.5 text-highlight" />
                  <span>{client.placeholderText}</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  Replace in: /public/client-logos/client-{idx + 1}.png
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
