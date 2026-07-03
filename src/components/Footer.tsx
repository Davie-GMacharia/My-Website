import { Terminal, Heart } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 text-slate-500 font-sans text-xs uppercase tracking-wider font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Logo & MUT info */}
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4 text-violet-400" />
          <span className="text-white font-black font-display tracking-tight uppercase">
            DAVID<span className="text-violet-400">.MACHARIA</span>
          </span>
          <span className="text-white/10">|</span>
          <span className="text-slate-400 font-sans tracking-normal uppercase text-[10px]">MUT CS STUDENT</span>
        </div>

        {/* Center: Hosting Details */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-slate-400 text-[10px]">
            HOSTED ON <span className="text-white font-bold">VERCEL</span> (FRONTEND) & <span className="text-white font-bold">RAILWAY</span> (BACKEND)
          </p>
          <p className="text-slate-500 text-[9px]">
            REGISTERED VIA <span className="text-cyan-400 font-bold">NAMECHEAP DNS (.COM DOMAIN MAPPING READY)</span>
          </p>
        </div>

        {/* Right: Copyright info */}
        <div className="flex flex-col items-center md:items-end gap-1 text-[10px] text-slate-500">
          <p>© {currentYear} DAVID MACHARIA. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1 text-[9px] text-slate-500">
            ENGINEERED WITH <Heart className="h-3 w-3 text-violet-400 fill-violet-400 animate-pulse" /> IN KENYA
          </p>
        </div>

      </div>
    </footer>
  );
}
