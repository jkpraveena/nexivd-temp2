import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Award, BookOpen, Shield, Sparkles, UserCheck } from 'lucide-react';

interface TeamMember {
  name: string;
  designation: string;
  degree: string;
  roleType: 'Leadership' | 'Research & Regulatory';
  photo: string;
  description: string;
}

export default function Team() {
  const [filter, setFilter] = useState<'All' | 'Leadership' | 'Research & Regulatory'>('All');

  const team: TeamMember[] = [
    {
      name: "Nallagangula Krishna Sumanth Reddy",
      designation: "CEO",
      degree: "Ph.D. in Precision Medicine",
      roleType: "Leadership",
      photo: "/team/team-placeholder.svg",
      description: "Nallagangula Krishna Sumanth Reddy is the Chief Executive Officer (CEO) and a scientist with a Ph.D. in Precision Medicine. He has expertise in translational research, personalized healthcare, and innovative scientific advancements, driving the organization’s vision toward cutting-edge healthcare solutions and sustainable growth."
    },
    {
      name: "Alukkathara Vijayan Navin",
      designation: "Director",
      degree: "M.Phil. & Ph.D.",
      roleType: "Leadership",
      photo: "/team/team-placeholder.svg",
      description: "Alukkathara Vijayan Navin is the Director and a scientist with an M.Phil. and Ph.D., bringing expertise in advanced research, scientific innovation, and strategic leadership. He contributes to the organization’s growth by guiding research initiatives and fostering the development of innovative healthcare solutions."
    },
    {
      name: "Hima Vankayalapati Bindu",
      designation: "Director",
      degree: "MBA",
      roleType: "Leadership",
      photo: "/team/team-placeholder.svg",
      description: "Hima Vankayalapati Bindu is the Director and holds an MBA, bringing expertise in business management, strategic planning, and organizational leadership. She contributes to the company’s growth by supporting effective decision-making and fostering a strong operational and business development framework."
    },
    {
      name: "Prabhu Das Nelaturi",
      designation: "Research Scientist",
      degree: "Ph.D.",
      roleType: "Research & Regulatory",
      photo: "/team/team-placeholder.svg",
      description: "Prabhu Das Nelaturi is a Research Scientist with a Ph.D., specializing in advanced scientific research and innovation. He contributes to the organization by supporting research initiatives and developing evidence-based solutions in his area of expertise."
    },
    {
      name: "Sangeetha Sahoo",
      designation: "Research Scientist",
      degree: "M.Sc. in Clinical Biochemistry",
      roleType: "Research & Regulatory",
      photo: "/team/team-placeholder.svg",
      description: "Sangeetha Sahoo is a Research Assistant with an M.Sc. in Clinical Biochemistry, supporting scientific research and laboratory-based investigations. She contributes to the organization’s research initiatives through her expertise in biochemical analysis, experimental studies, and data interpretation."
    },
    {
      name: "Gundam Drethi",
      designation: "Regulatory associate",
      degree: "M.Sc. in Biochemistry",
      roleType: "Research & Regulatory",
      photo: "/team/team-placeholder.svg",
      description: "Gundam Drethi is a Regulatory Associate with an M.Sc. in Biochemistry. She supports the organization’s regulatory affairs activities by assisting with compliance documentation, regulatory submissions, and ensuring adherence to applicable healthcare and scientific standards."
    }
  ];

  const filteredTeam = filter === 'All' ? team : team.filter(m => m.roleType === filter);

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Users className="w-4 h-4 text-highlight" />
            Scientific Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-5"
          >
            Meet Our Leadership & Scientific Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Led by seasoned doctoral scientists, regulatory authorities, and management visionaries with decades of combined clinical and IVD manufacturing expertise.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mt-8">
            {(['All', 'Leadership', 'Research & Regulatory'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  filter === tab
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50/70 rounded-3xl border border-slate-200/80 p-8 hover:bg-white hover:border-highlight/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col group"
            >
              {/* Photo & Badge */}
              <div className="flex items-start gap-5 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-primary/10 border-2 border-white shadow-md shrink-0">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-highlight/10 text-highlight w-fit mb-1.5">
                    {member.designation}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    {member.degree}
                  </span>
                </div>
              </div>

              {/* Name & Bio */}
              <h3 className="text-xl font-display font-bold text-primary mb-3 leading-snug group-hover:text-highlight transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {member.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-highlight" />
                  NexIVD Scientific Panel
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {member.roleType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
