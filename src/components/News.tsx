import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const posts = [
    {
      title: "The Future of IVD: AI-Integrated Diagnostics",
      date: "May 10, 2026",
      category: "Innovation",
      excerpt: "Exploring how artificial intelligence is transforming the accuracy of clinical laboratory testing."
    },
    {
      title: "New Regulatory Guidelines for Medical Devices",
      date: "May 05, 2026",
      category: "Compliance",
      excerpt: "A deep dive into the latest updates from global health authorities regarding IVD compliance."
    },
    {
      title: "NexIVD Partners with Leading Research University",
      date: "April 28, 2026",
      category: "Academic",
      excerpt: "Bridging the gap between theory and industry through our latest collaborative framework."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">Latest Updates</span>
            <h2 className="text-4xl font-display font-bold text-primary">News & Insights</h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-primary font-bold hover:text-highlight transition-colors group">
            View All News <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[40px] border border-white hover:border-highlight/20 transition-all flex flex-col group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-highlight uppercase tracking-wider mb-4">
                <span className="bg-highlight/10 px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-highlight transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
