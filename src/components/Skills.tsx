import { motion } from 'motion/react';
import { Layers, Network, Globe, Monitor, CheckCircle2, Smartphone } from 'lucide-react';
import { skills } from '../data';

export default function Skills() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="h-5 w-5 text-violet-400" />;
      case 'Network':
        return <Network className="h-5 w-5 text-indigo-400" />;
      case 'Globe':
        return <Globe className="h-5 w-5 text-cyan-400" />;
      case 'Monitor':
        return <Monitor className="h-5 w-5 text-pink-400" />;
      case 'Smartphone':
        return <Smartphone className="h-5 w-5 text-emerald-400" />;
      default:
        return <Layers className="h-5 w-5 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 text-white relative border-t border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">03 . Core Capabilities</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.05em] font-display uppercase">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Specialties</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 font-sans text-xs uppercase tracking-wider">
            Proven competencies spanning system deployment, Cisco core routing, and custom full stack engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.01] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-violet-500/40 hover:bg-white/[0.02] transition-all duration-300 shadow-xl"
            >
              {/* Card top row */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-900 border border-white/10 rounded-xl">
                    {getIconComponent(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-display uppercase text-white group-hover:text-violet-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="font-sans text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                      Category: {skill.category}
                    </span>
                  </div>
                </div>
                
                {/* Level Percentage Indicator */}
                <span className="font-sans font-extrabold text-xs text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full shadow-inner">
                  {skill.level}%
                </span>
              </div>

              {/* Graphical level bar */}
              <div className="space-y-1.5 mb-6">
                <div className="flex justify-between text-[9px] text-slate-500 font-sans uppercase font-bold tracking-wider">
                  <span>Foundational</span>
                  <span>Advanced Expert</span>
                </div>
                <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                  />
                </div>
              </div>

              {/* Details list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {skill.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-sans text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
