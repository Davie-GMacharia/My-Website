import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Credentials' },
    { id: 'skills', label: 'Specialties' },
    { id: 'sandbox', label: 'Interactive Sandbox' },
    { id: 'ai-twin', label: 'Chat with AI' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled ? 'bg-black/95 border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('hero')}
          >
            <div className="p-1.5 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-lg text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="h-4.5 w-4.5" />
            </div>
            <span className="font-display text-lg font-black tracking-tight text-white uppercase">
              DAVID<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">.MACHARIA</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center bg-white/[0.03] border border-white/5 p-1 rounded-full backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-[11px] font-sans font-bold tracking-wider uppercase transition-colors rounded-full ${
                  activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeBubble"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full -z-10 shadow-md shadow-indigo-500/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-sans font-bold uppercase tracking-wider transition-colors rounded-lg ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-violet-600/20 to-indigo-600/20 text-violet-400 border-l-2 border-violet-500'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 flex justify-around text-slate-400 text-xs font-sans font-bold uppercase tracking-wider">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-1 hover:text-violet-400">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-1 hover:text-violet-400">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
