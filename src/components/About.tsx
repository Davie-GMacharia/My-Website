import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';
import { education, certificates, packagesList } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'edu' | 'cisco' | 'packages'>('edu');

  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(99,102,241,0.04),transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">02 . Academic Dossier</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.05em] font-display uppercase">
            Bio & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Credentials</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 font-sans text-xs uppercase tracking-wider">
            Bridging theoretical Computer Science with industry-grade certifications and practical technical mastery.
          </p>
        </div>

        {/* Tab Controls (Premium Rounded Glass Styling) */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12 max-w-2xl mx-auto bg-white/[0.02] p-1.5 border border-white/5 rounded-full backdrop-blur-md">
          <button
            onClick={() => setActiveTab('edu')}
            className={`flex-1 min-w-[150px] py-3 px-4 font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 rounded-full cursor-pointer ${
              activeTab === 'edu'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Academic Path</span>
          </button>
          
          <button
            onClick={() => setActiveTab('cisco')}
            className={`flex-1 min-w-[150px] py-3 px-4 font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 rounded-full cursor-pointer ${
              activeTab === 'cisco'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Professional Certs</span>
          </button>

          <button
            onClick={() => setActiveTab('packages')}
            className={`flex-1 min-w-[150px] py-3 px-4 font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 rounded-full cursor-pointer ${
              activeTab === 'packages'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>IT Packages (12)</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'edu' && (
              <motion.div
                key="edu-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.01] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-black font-display uppercase text-white">{education.institution}</h3>
                      <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs font-bold rounded-full">
                        {education.duration}
                      </span>
                    </div>
                    <p className="text-indigo-400 font-sans font-bold text-sm uppercase tracking-wider">
                      {education.degree}
                    </p>
                    <div className="space-y-3 pt-2">
                      {education.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                          <p className="text-slate-300 text-sm leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'cisco' && (
              <motion.div
                key="cisco-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {certificates
                  .filter((c) => c.type === 'cisco')
                  .map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-white/[0.01] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-violet-500/40 hover:bg-white/[0.03] transition-all duration-300 group shadow-lg"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="p-3 bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:bg-gradient-to-tr group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-white transition-all rounded-xl">
                            <Cpu className="h-5 w-5" />
                          </div>
                          <span className="font-sans text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                            {cert.issuer}
                          </span>
                        </div>
                        <h4 className="text-base font-black font-display uppercase text-white group-hover:text-violet-400 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                      <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center text-[10px] font-sans">
                        <span className="text-slate-500 font-bold uppercase">Issued {cert.date}</span>
                        <span className="px-2.5 py-1 bg-violet-500/10 text-violet-300 border border-violet-500/20 rounded-full font-bold uppercase">
                          Cisco Verified
                        </span>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}

            {activeTab === 'packages' && (
              <motion.div
                key="packages-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.01] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Badge & Details */}
                  <div className="lg:w-1/3 flex flex-col items-center text-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden">
                    <div className="p-4 bg-indigo-500/10 rounded-full mb-4">
                      <Award className="h-12 w-12 text-violet-400 animate-pulse" />
                    </div>
                    <h4 className="text-lg font-black font-display uppercase tracking-tight text-white">Distinction Earned</h4>
                    <p className="text-slate-400 text-xs font-sans uppercase tracking-wider mt-1 font-bold">Grade: Distinction in all 12 modules</p>
                    <div className="mt-6 px-4 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-[10px] font-sans font-bold uppercase tracking-wider shadow-md">
                      Honored Credential
                    </div>
                  </div>

                  {/* Complete 12 packages list */}
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-black font-display uppercase tracking-tight text-white mb-4 flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-violet-400" />
                      <span>Certified IT Competency Modules</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {packagesList.map((pkg, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2.5 bg-white/[0.01] border border-white/5 px-3.5 py-2.5 rounded-xl text-slate-300 hover:bg-white/5 hover:border-violet-500/20 transition-all duration-300"
                        >
                          <span className="font-sans text-violet-400 text-xs font-extrabold">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="text-xs sm:text-sm font-medium font-sans">{pkg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
