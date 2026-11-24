import React, { useState } from 'react';

export default function Hero({ onOpenPathModal }) {
  const [inputValue, setInputValue] = useState('data analysis');

  const handleGenerate = () => {
    if (!inputValue.trim()) {
      alert('Please enter a role!');
      return;
    }
    // Idi click ayyaka Modal open chestundi
    if (onOpenPathModal) {
      onOpenPathModal(inputValue);
    } else {
      alert('Modal function missing!');
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-20 bg-slate-950 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Learn Smarter with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SkillPath AI</span>
          </h1>
          <p className="text-slate-300 text-base">
            Stop wandering through endless tutorials. SkillPath AI dynamically generates hyper-personalized curriculums.
          </p>
          
          <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-900 border border-purple-500/30 max-w-md">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g. Data Analysts"
              className="flex-1 bg-transparent outline-none text-white text-sm px-3"
            />
            <button 
              onClick={handleGenerate}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold hover:scale-105 transition-transform"
            >
              Generate Path →
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {['AI Systems & LLM Architect', 'Full-Stack Next.js 15 Dev', 'Cloud Native Platform Engineer', 'AI Security Specialist'].map((tag) => (
              <button key={tag} onClick={() => setInputValue(tag)} className="text-[11px] px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700">
                {tag}
              </button>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button className="px-5 py-2.5 rounded-xl bg-slate-800 text-white text-sm border border-slate-700">Explore Courses</button>
            <button onClick={() => handleGenerate()} className="px-5 py-2.5 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 text-sm">▶ Live Demo Roadmap</button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <h3 className="text-white font-bold mb-4">Autonomous AI Agent Track</h3>
            <div className="h-2 w-full bg-slate-800 rounded-full mb-2"><div className="h-2 w-[68%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div></div>
            <p className="text-xs text-slate-400">68% Completed - Milestone 3 of 5</p>
            <div className="mt-6 space-y-3 text-xs text-slate-300">
              <div>1. Vector Search & Embeddings</div>
              <div className="p-3 rounded-xl bg-purple-900/20 border border-purple-500/20">2. Multi-Agent Systems & LangGraph ACTIVE</div>
              <div>3. Fine-Tuning & Quantization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}