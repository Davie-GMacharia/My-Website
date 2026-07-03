import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, Play, RefreshCw, ShieldAlert } from 'lucide-react';
import { jsQuiz, personalInfo, packagesList } from '../data';

interface CommandOutput {
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
}

export default function TerminalSandbox() {
  const [terminalHistory, setTerminalHistory] = useState<CommandOutput[]>([
    { text: 'SYSTEM REBOOT SUCCESSFUL. ALL MODULES RUNNING PORT:3000', type: 'system' },
    { text: 'Type "help" or click the quick commands below to explore David\'s systems.', type: 'output' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const quickCommands = [
    { cmd: 'help', desc: 'List all commands' },
    { cmd: 'about', desc: 'Display core bio' },
    { cmd: 'packages', desc: 'List 12 computer packages' },
    { cmd: 'ping davidmacharia692@gmail.com', desc: 'Test connectivity to David\'s gateway' },
    { cmd: 'cisco-quiz', desc: 'Launch interactive JS Essentials & Networking quiz' },
  ];

  const handleCommandSubmit = (command: string) => {
    const trimmed = command.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...terminalHistory, { text: `macharia@mut-router:~$ ${command}`, type: 'input' as const }];

    if (quizActive) {
      handleQuizInput(trimmed, newHistory);
      setInputValue('');
      return;
    }

    if (trimmed === 'help') {
      newHistory.push({
        text: 'Available Commands:\n' +
          '  about       - Display biography & university credentials\n' +
          '  packages    - List 12 computer packages (all with Distinction)\n' +
          '  ping <ip>   - Send diagnostic packets to David\'s gateway\n' +
          '  contact     - Display official phone & email contacts\n' +
          '  cisco-quiz  - Launch interactive JS Essentials & Networking certification quiz\n' +
          '  clear       - Clear terminal log',
        type: 'output'
      });
    } else if (trimmed === 'about') {
      newHistory.push({
        text: `NAME: ${personalInfo.name}\n` +
          `TITLE: ${personalInfo.title}\n` +
          `ACADEMICS: CS Student at Murang'a University of Technology\n` +
          `BIO: ${personalInfo.bio}`,
        type: 'output'
      });
    } else if (trimmed === 'packages') {
      newHistory.push({
        text: 'COMPUTER PACKAGES OBTAINED (DISTINCTION IN ALL 12):\n' +
          packagesList.map((pkg, idx) => `  [${(idx + 1).toString().padStart(2, '0')}] ${pkg}`).join('\n'),
        type: 'success'
      });
    } else if (trimmed.startsWith('ping')) {
      const target = trimmed.substring(5).trim() || 'davidmacharia692@gmail.com';
      newHistory.push({ text: `PING ${target} (56 data bytes)...`, type: 'output' });
      
      // Simulate ping responses
      setTimeout(() => {
        setTerminalHistory(prev => [
          ...prev,
          { text: `64 bytes from ${target}: icmp_seq=1 ttl=64 time=14.2 ms`, type: 'success' },
          { text: `64 bytes from ${target}: icmp_seq=2 ttl=64 time=12.8 ms`, type: 'success' },
          { text: `--- ${target} ping statistics ---`, type: 'output' },
          { text: `2 packets transmitted, 2 received, 0% packet loss, rtt min/avg/max = 12.8/13.5/14.2 ms`, type: 'success' }
        ]);
      }, 600);
    } else if (trimmed === 'contact') {
      newHistory.push({
        text: `GATEWAY: davidmacharia692@gmail.com\n` +
          `MOBILE INTERRUPT: ${personalInfo.phone}\n` +
          `PROPOSED INFRA: Namecheap .com custom domain, Railway (Backend), Vercel (Frontend)`,
        type: 'output'
      });
    } else if (trimmed === 'cisco-quiz' || trimmed === 'quiz') {
      setQuizActive(true);
      setCurrentQuestionIdx(0);
      setQuizScore(0);
      newHistory.push({ text: 'INITIALIZING CISCO ACADEMY & MUT JS ESSENTIALS QUIZ...', type: 'system' });
      newHistory.push({ text: `Question 1: ${jsQuiz[0].question}\n` + 
         jsQuiz[0].options.map((opt, i) => `  [${i}] ${opt}`).join('\n') + 
         '\nType the corresponding number (0, 1, 2, 3) to answer.', type: 'output' });
    } else if (trimmed === 'clear') {
      setTerminalHistory([]);
      setInputValue('');
      return;
    } else {
      newHistory.push({ text: `Command not found: "${command}". Type "help" for assistance.`, type: 'error' });
    }

    setTerminalHistory(newHistory);
    setInputValue('');
  };

  const handleQuizInput = (answer: string, history: CommandOutput[]) => {
    const currentQ = jsQuiz[currentQuestionIdx];
    const parsedAns = parseInt(answer);

    if (isNaN(parsedAns) || parsedAns < 0 || parsedAns > 3) {
      history.push({ text: 'Invalid entry. Please enter a number between 0 and 3.', type: 'error' });
      setTerminalHistory(history);
      return;
    }

    if (parsedAns === currentQ.answer) {
      history.push({ text: `CORRECT! ✔ ${currentQ.explanation}`, type: 'success' });
      setQuizScore(prev => prev + 1);
    } else {
      history.push({ text: `INCORRECT ✘ The correct answer was [${currentQ.answer}]. ${currentQ.explanation}`, type: 'error' });
    }

    const nextIdx = currentQuestionIdx + 1;
    if (nextIdx < jsQuiz.length) {
      setCurrentQuestionIdx(nextIdx);
      const nextQ = jsQuiz[nextIdx];
      history.push({
        text: `Question ${nextIdx + 1}: ${nextQ.question}\n` +
          nextQ.options.map((opt, i) => `  [${i}] ${opt}`).join('\n') +
          '\nType the corresponding number (0, 1, 2, 3) to answer.',
        type: 'output'
      });
      setTerminalHistory(history);
    } else {
      // Quiz complete
      const finalScore = parsedAns === currentQ.answer ? quizScore + 1 : quizScore;
      const scorePercentage = Math.round((finalScore / jsQuiz.length) * 100);
      history.push({ text: 'QUIZ COMPLETE. EVALUATING CERTIFICATION TRANSCRIPT...', type: 'system' });
      history.push({
        text: `FINAL TRANSCRIPT SCORE: ${finalScore}/${jsQuiz.length} (${scorePercentage}%)\n` +
          (scorePercentage >= 70 ? 'STATUS: CERTIFICATION EARNED (JS Essentials Equivalent) ✔' : 'STATUS: REVIEW COURSE MATERIALS & RETAKE'),
        type: scorePercentage >= 70 ? 'success' : 'error'
      });
      setQuizActive(false);
      setTerminalHistory(history);
    }
  };

  return (
    <section id="sandbox" className="py-24 bg-slate-950 text-white relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,rgba(99,102,241,0.04),transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">04 . Command Center</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.05em] font-display uppercase">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Sandbox Lab</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 font-sans text-xs uppercase tracking-wider">
            Experience David's multi-disciplinary skills directly inside this simulated Cisco CLI & JS certification hub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 lg:grid-cols-4">
          
          {/* Quick Actions Panel */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-sans text-slate-400 uppercase tracking-[0.15em] mb-4 flex items-center space-x-2 font-bold">
              <Play className="h-4 w-4 text-violet-400 shrink-0" />
              <span>Diagnostic CLI Inputs</span>
            </h4>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {quickCommands.map((item) => (
                <button
                  key={item.cmd}
                  onClick={() => handleCommandSubmit(item.cmd)}
                  className="shrink-0 text-left px-3.5 py-2.5 bg-white/[0.01] hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white border border-white/10 rounded-xl text-xs font-sans text-violet-300 transition-all cursor-pointer flex items-center justify-between uppercase font-bold tracking-wider hover:scale-102"
                  title={item.desc}
                >
                  <span>{item.cmd.split(' ')[0]}</span>
                  <span className="hidden lg:inline text-[9px] text-slate-500 font-normal">Ctrl+Enter</span>
                </button>
              ))}
            </div>
            
            <div className="hidden lg:block p-4 bg-white/[0.01] border border-white/5 rounded-2xl shadow-xl backdrop-blur-sm">
              <span className="text-[10px] font-sans text-slate-500 block mb-2 uppercase font-bold tracking-wider">Diagnostic status</span>
              <div className="flex items-center space-x-2 text-[11px] font-sans uppercase tracking-wider text-slate-300">
                <div className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                <span>Router: Online</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] font-sans uppercase tracking-wider text-slate-300 mt-1.5">
                <div className="h-2 w-2 bg-violet-400 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                <span>Vercel / Railway Ready</span>
              </div>
            </div>
          </div>

          {/* Main Simulated CLI Box */}
          <div className="lg:col-span-3 flex flex-col h-[450px] bg-slate-950/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative">
            
            {/* Terminal Top Window Frame */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-900/60 backdrop-blur-md border-b border-white/5">
              <div className="flex items-center space-x-2">
                <TerminalIcon className="h-4 w-4 text-violet-400" />
                <span className="font-sans text-xs text-slate-400 font-bold uppercase tracking-wider">david_macharia_terminal.sh</span>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500/80 shadow-[0_0_6px_rgba(167,139,250,0.5)]" />
              </div>
            </div>

            {/* Scrollable Command log log */}
            <div className="flex-1 overflow-y-auto p-5 font-mono text-xs sm:text-sm space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
              {terminalHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`whitespace-pre-wrap leading-relaxed ${
                    item.type === 'input'
                      ? 'text-cyan-300 font-bold'
                      : item.type === 'error'
                      ? 'text-rose-400 flex items-start space-x-1.5'
                      : item.type === 'success'
                      ? 'text-cyan-400 font-bold'
                      : item.type === 'system'
                      ? 'text-white text-center py-2 border-y border-white/5 bg-white/[0.01] uppercase tracking-wider font-bold'
                      : 'text-slate-300'
                  }`}
                >
                  {item.type === 'error' && <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5 text-rose-500" />}
                  <span>{item.text}</span>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommandSubmit(inputValue);
              }}
              className="flex items-center border-t border-white/5 bg-white/[0.01] px-4 py-3"
            >
              <span className="font-mono text-violet-400 font-bold mr-2 shrink-0">macharia@mut-router:~$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={quizActive ? 'Type 0, 1, 2, or 3...' : 'Type a command, e.g. "help", "packages", "cisco-quiz"...'}
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:ring-0 p-0"
              />
              <button
                type="submit"
                className="p-1.5 bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 text-white rounded-lg transition-colors cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
