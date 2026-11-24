import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Github, 
  Twitter, 
  Linkedin, 
  Disc as Discord, 
  Heart,
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onNotify }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      onNotify?.(`✨ Thanks for subscribing! Weekly AI roadmap updates sent to ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-purple-900/30">
                <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                SkillPath <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering engineers and career switchers to master modern tech 3.5x faster through personalized AI learning trajectories and automated code feedback.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                Get Weekly AI Career Insights & Cheat Sheets
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-800/30">
                  <CheckCircle2 className="w-4 h-4" /> You're subscribed to the SkillPath Digest!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Nav Column 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Learning Paths
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#roadmaps" className="hover:text-purple-300 transition-colors">AI & LLM Architect</a></li>
              <li><a href="#roadmaps" className="hover:text-purple-300 transition-colors">Next.js 15 Full-Stack</a></li>
              <li><a href="#roadmaps" className="hover:text-purple-300 transition-colors">Kubernetes & DevOps</a></li>
              <li><a href="#roadmaps" className="hover:text-purple-300 transition-colors">AI Security Red Teaming</a></li>
              <li><a href="#roadmaps" className="hover:text-purple-300 transition-colors">React Native Mobile</a></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-purple-300 transition-colors">AI Code Reviewer</a></li>
              <li><a href="#features" className="hover:text-purple-300 transition-colors">Adaptive Skill Graph</a></li>
              <li><a href="#features" className="hover:text-purple-300 transition-colors">Mock AI Interviews</a></li>
              <li><a href="#courses" className="hover:text-purple-300 transition-colors">Production Capstones</a></li>
              <li><a href="#pricing" className="hover:text-purple-300 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Community & Social
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">Discord Community</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">GitHub Templates</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">Twitter / X</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">LinkedIn Network</a></li>
              <li><a href="#faq" className="hover:text-purple-300 transition-colors">Help Center & FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Status, Copyright & Social Icons */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              All Systems Operational
            </span>
            <span>&copy; {new Date().getFullYear()} SkillPath AI. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Discord">
              <Discord className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
