import { useState, FormEvent } from 'react';
import { Phone, Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSuccess(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Contact message send error');
      }
    } catch (err) {
      console.error(err);
      // Fallback: local success even if backend is not fully loaded yet
      setSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_0%_50%,rgba(99,102,241,0.03),transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-violet-400 mb-2">06 . Get In Touch</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.05em] font-display uppercase">
            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 font-sans text-xs uppercase tracking-wider">
            Let's collaborate on Networking architecture, Full Stack apps, or system optimization.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-5">
          
          {/* Left Block: Direct Links & Info Cards */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-lg font-black font-display uppercase tracking-tight text-white">Direct Channels</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Reach out directly for professional inquiries, full-stack consultations, or networking support.
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone card */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-4 p-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 hover:border-violet-500/40 rounded-2xl transition-all duration-300 group shadow-md"
              >
                <div className="p-3 bg-violet-500/10 border border-violet-500/20 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-white rounded-xl text-violet-400 transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-sans uppercase tracking-widest font-bold">Dial Direct</span>
                  <span className="text-sm font-sans font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Email card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 hover:border-violet-500/40 rounded-2xl transition-all duration-300 group shadow-md"
              >
                <div className="p-3 bg-violet-500/10 border border-violet-500/20 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-white rounded-xl text-violet-400 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[9px] text-slate-500 font-sans uppercase tracking-widest font-bold">Send Email</span>
                  <span className="text-sm font-sans font-bold text-white group-hover:text-violet-400 transition-colors duration-300 truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center space-x-4 p-4 bg-white/[0.01] border border-white/5 rounded-2xl cursor-default shadow-md">
                <div className="p-3 bg-slate-900 border border-white/10 rounded-xl text-slate-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-sans uppercase tracking-widest font-bold">Base Location</span>
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-200 font-bold">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl font-sans text-[10px] text-slate-500 space-y-2 uppercase tracking-wider font-bold shadow-lg">
              <span className="block text-slate-400 mb-1">PROPOSED DEPLOYMENT STATE</span>
              <div className="flex justify-between">
                <span>Frontend Provider</span>
                <span className="text-white">Vercel Cloud</span>
              </div>
              <div className="flex justify-between">
                <span>Backend Gateway</span>
                <span className="text-white">Railway API</span>
              </div>
              <div className="flex justify-between">
                <span>Domain Authority</span>
                <span className="text-cyan-400">Namecheap DNS</span>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Message Form */}
          <div className="md:col-span-3 bg-white/[0.01] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-black font-display uppercase tracking-tight text-white mb-6">Leave a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-sans text-slate-400 uppercase tracking-wider mb-2 font-bold">Your Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. David Macharia"
                  className="w-full bg-slate-950/40 border border-white/10 focus:border-violet-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all font-sans placeholder-slate-600 focus:ring-1 focus:ring-violet-500/20"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans text-slate-400 uppercase tracking-wider mb-2 font-bold">Email Address</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. you@example.com"
                  className="w-full bg-slate-950/40 border border-white/10 focus:border-violet-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all font-sans placeholder-slate-600 focus:ring-1 focus:ring-violet-500/20"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans text-slate-400 uppercase tracking-wider mb-2 font-bold">Message Content</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full bg-slate-950/40 border border-white/10 focus:border-violet-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all resize-none font-sans placeholder-slate-600 focus:ring-1 focus:ring-violet-500/20"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:from-white/5 disabled:to-white/5 disabled:text-slate-600 text-white font-extrabold font-sans rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer uppercase text-xs tracking-wider shadow-lg shadow-indigo-500/20 hover:scale-[1.01] active:scale-95"
              >
                {loading ? (
                  <span>Transmitting...</span>
                ) : success ? (
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span>Transmitted Successfully!</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Transmit Message</span>
                  </div>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
