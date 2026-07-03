import { motion } from 'motion/react';
import { ArrowRight, Award, Zap } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950 text-white"
    >
      {/* Structural Minimal Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-80" />

      {/* Modern High-contrast Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse duration-5000" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Side: Profile Text & Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          {/* Label */}
          <div className="inline-flex items-center space-x-2 border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider text-indigo-300">
            <Award className="h-4 w-4 text-violet-400" />
            <span>01 . Computer Science Specialist</span>
          </div>

          {/* Huge Display Heading */}
          <div className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-tight tracking-tight uppercase select-none">
            <span className="block text-white">DAVID</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">MACHARIA</span>
          </div>

          <p className="text-xs font-mono tracking-widest text-indigo-300/80 uppercase">
            {personalInfo.title}
          </p>

          <p className="text-slate-300 max-w-lg leading-relaxed text-sm sm:text-base border-l-2 border-violet-500/40 pl-4 font-sans">
            Currently pursuing my Bachelor's Degree in Computer Science at <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold">Murang'a University of Technology</span>. Armed with 12 distinct IT competencies and Cisco JavaScript essentials.
          </p>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-3 gap-4 py-4 max-w-md">
            <div className="p-4 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl text-left shadow-lg hover:border-violet-500/20 transition-all">
              <div className="text-3xl font-extrabold font-display text-white">12/12</div>
              <div className="text-[10px] text-violet-400 font-sans uppercase tracking-wider mt-1 font-bold">IT Packages</div>
            </div>
            <div className="p-4 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl text-left shadow-lg hover:border-indigo-500/20 transition-all">
              <div className="text-3xl font-extrabold font-display text-indigo-400">JS 3</div>
              <div className="text-[10px] text-slate-400 font-sans uppercase tracking-wider mt-1 font-bold">Cisco Academy</div>
            </div>
            <div className="p-4 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl text-left shadow-lg hover:border-cyan-500/20 transition-all">
              <div className="text-3xl font-extrabold font-display text-white">100%</div>
              <div className="text-[10px] text-slate-400 font-sans uppercase tracking-wider mt-1 font-bold">Distinction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold font-sans text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer shadow-lg shadow-indigo-500/25 rounded-full hover:scale-102"
            >
              <span>Explore My Lab</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-extrabold font-sans text-xs uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center rounded-full hover:scale-102"
            >
              Connect Now
            </a>
          </div>
        </motion.div>

        {/* Right Side: Professional Interactive Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Elegant rotating halo rings */}
            <div className="absolute inset-0 border border-dashed border-violet-500/30 rounded-full animate-spin-slow scale-105" />
            <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-pulse scale-110" />

            {/* Glowing Corner Accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-violet-500" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-indigo-500" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-500" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-violet-500" />

            {/* Main Avatar Container */}
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] relative shadow-2xl">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Floating premium badge on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-wider">AVAILABLE FOR PROJECTS</span>
                </div>
                <div className="flex items-center space-x-1 text-violet-400">
                  <Zap className="h-3 w-3" />
                  <span className="text-[10px] font-sans font-bold uppercase">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
