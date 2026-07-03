/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TerminalSandbox from './components/TerminalSandbox';
import ChatBot from './components/ChatBot';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'sandbox', 'ai-twin', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    setActiveSection('sandbox');
    document.getElementById('sandbox')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero onExploreClick={handleExploreClick} />
        <About />
        <Skills />
        <TerminalSandbox />
        <ChatBot />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

