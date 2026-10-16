import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What turnkey solutions do you provide for IVD manufacturing?",
      answer: "We provide end-to-end support including product portfolio planning, feasibility studies, plant setup guidance, assay development, and final handover with staff training."
    },
    {
      question: "How long does the regulatory approval process usually take?",
      answer: "The timeline varies based on the product type and target market (national vs international). We optimize this through meticulous documentation and proactive compliance management."
    },
    {
      question: "Do you offer custom assay development?",
      answer: "Yes, we specialize in custom assay optimization and method validation for a wide range of markers including infectious diseases, cardiac markers, and hormones."
    },
    {
      question: "Are your internship programs certified?",
      answer: "Yes, our academic collaborations provide students with industry-recognized certifications and hands-on exposure to GCP/GLP compliant laboratory workflows."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500">Find answers to common inquiries about our services and process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden glass transition-all">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-primary">{faq.question}</span>
                {activeIndex === idx ? <ChevronUp className="text-highlight" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 mt-2">
                       {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
