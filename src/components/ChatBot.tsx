import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Trash2, HelpCircle, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

export default function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Hello! I am David Macharia's AI twin. You can ask me anything about David's Computer Science studies at MUT, his distinction in all 12 computer packages, his Cisco JS certifications, or how to get in touch with him!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestedQuestions = [
    "Tell me about his Cisco JS certificates.",
    "What modules are in his computer packages?",
    "Where is David pursuing his degree?",
    "What are his core tech specialties?",
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: ChatMessage = {
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Direct call to Express server endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages.map((m) => ({
            role: m.sender === 'ai' ? 'model' : 'user',
            text: m.text,
          })),
          message: text,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      const aiMessage: ChatMessage = {
        sender: 'ai',
        text: data.response || "I'm having trouble connecting right now, but feel free to review David's certifications on the bio page!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: "I couldn't contact David's cognitive gateway. Make sure your local dev server is running on PORT:3000.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        sender: 'ai',
        text: "Log cleared. Hello! I am David's AI twin. What would you like to know about his credentials today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <section id="ai-twin" className="py-24 bg-slate-950 text-white relative border-t border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">05 . Cognitive Double</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.05em] font-display uppercase">
            AI Cognitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Twin Assistant</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 font-sans text-xs uppercase tracking-wider">
            Leveraging server-side Google Gemini 2.5 Flash to create an interactive virtual double of David.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 lg:grid-cols-3">
          
          {/* Left instructions block */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-xs font-sans text-slate-400 uppercase tracking-[0.15em] mb-2 flex items-center space-x-2 font-bold">
              <HelpCircle className="h-4.5 w-4.5 text-violet-400" />
              <span>Suggested Queries</span>
            </h4>
            <div className="flex flex-col gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className="text-left p-3.5 bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 rounded-2xl text-xs text-slate-300 hover:text-white transition-all duration-300 cursor-pointer font-sans"
                >
                  {q}
                </button>
              ))}
            </div>

            <button
              onClick={clearChat}
              className="w-full flex items-center justify-center space-x-2 p-3 bg-transparent hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-slate-400 hover:text-red-400 rounded-2xl font-sans text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer mt-4"
            >
              <Trash2 className="h-4 w-4" />
              <span>Reset Cognitive History</span>
            </button>
          </div>

          {/* Main Chat Window */}
          <div className="lg:col-span-2 flex flex-col h-[500px] bg-slate-950/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
            
            {/* Chat top header bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/60 backdrop-blur-md border-b border-white/5">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400">
                  <Bot className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-black font-display uppercase tracking-wider text-white">David's Cognitive AI</h4>
                  <span className="text-[10px] text-cyan-400 font-sans uppercase font-bold">Status: Online</span>
                </div>
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] animate-pulse" />
            </div>

            {/* Chat message display area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              <AnimatePresence initial={false}>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 max-w-[85%] ${
                      m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`p-2 bg-slate-900 border rounded-xl text-xs shrink-0 ${
                        m.sender === 'user'
                          ? 'border-violet-500/30 text-violet-400'
                          : 'border-white/15 text-white'
                      }`}
                    >
                      {m.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className="space-y-1">
                      <div
                        className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap shadow-md ${
                          m.sender === 'user'
                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-tr-none'
                            : 'bg-white/[0.01] border border-white/10 text-slate-200 rounded-tl-none'
                        }`}
                      >
                        {m.text}
                      </div>
                      <span className="block text-[8px] text-slate-500 font-sans text-right px-1 font-bold">
                        {m.timestamp}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {loading && (
                <div className="flex items-start gap-3 max-w-[85%]">
                  <div className="p-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                  <div className="bg-white/[0.01] border border-white/10 p-3.5 rounded-2xl rounded-tl-none">
                    <div className="flex space-x-1.5 py-1">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat bottom input controller */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-4 border-t border-white/5 bg-white/[0.01] flex items-center space-x-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask David's AI twin a question..."
                className="flex-1 bg-slate-900/40 border border-white/10 focus:border-violet-500/50 rounded-xl px-4 py-3 text-xs text-slate-200 outline-none transition-colors font-sans placeholder-slate-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:from-white/5 disabled:to-white/5 disabled:text-slate-600 text-white rounded-xl transition-all shrink-0 cursor-pointer shadow-md hover:scale-105 active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
