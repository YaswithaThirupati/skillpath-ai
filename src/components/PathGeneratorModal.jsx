import React, { useState, useEffect } from 'react';

export default function PathGeneratorModal({ isOpen, onClose, initialRole = '', onNotify }) {
  const [role, setRole] = useState(initialRole || '');
  const [level, setLevel] = useState('Intermediate');
  const [isGenerating, setIsGenerating] = useState(false);
  const [stepMessage, setStepMessage] = useState('');
  const [generatedResult, setGeneratedResult] = useState(null);

  useEffect(() => {
    if (initialRole) setRole(initialRole);
  }, [initialRole]);

  if (!isOpen) return null;

  const popularRoles = ['Data Analysts', 'Data Engineer', 'Full-Stack Next.js', 'UI/UX Designer', 'Cyber Security'];

  const getRoadmapByRole = (roleText, level) => {
    const text = roleText.toLowerCase();
    const roleTitle = roleText.trim() || "Your Role";
    const weeks = level === 'Beginner' ? '16 Weeks' : level === 'Advanced' ? '8 Weeks' : '10 Weeks';
    const score = Math.floor(88 + Math.random() * 10) + '% Match';

    if (text.includes('data engineer')) {
      return {
        weeks: '14 Weeks',
        score: '95% Match',
        milestones: [
          { phase: `Phase 1 • ${roleTitle} Foundations`, topics: ['SQL Advanced', 'Python ETL', 'Data Warehousing'] },
          { phase: `Phase 2 • Big Data Pipelines`, topics: ['Apache Spark', 'Airflow', 'Kafka'] },
          { phase: `Phase 3 • Cloud Stack`, topics: ['AWS Redshift', 'Databricks', 'dbt'] },
          { phase: `Phase 4 • ${roleTitle} Capstone`, topics: ['Build Pipeline', 'Streaming', 'Design'] },
        ]
      };
    }

    if (text.includes('data analyst') || text.includes('data analysis')) {
      return {
        weeks: '8 Weeks',
        score: '92% Match',
        milestones: [
          { phase: `Phase 1 • ${roleTitle} Foundations`, topics: ['Advanced SQL', 'Excel Power Query', 'Data Cleaning'] },
          { phase: `Phase 2 • Visualization`, topics: ['PowerBI', 'Tableau', 'KPI Metrics'] },
          { phase: `Phase 3 • Python`, topics: ['Pandas', 'EDA', 'Projects'] },
          { phase: `Phase 4 • ${roleTitle} Capstone`, topics: ['Live Dashboard', 'Resume', 'Mock Interview'] }
        ]
      };
    }

    if (text.includes('full') || text.includes('next') || text.includes('saas')) {
      return {
        weeks: '10 Weeks',
        score: '94% Match',
        milestones: [
          { phase: `Phase 1 • ${roleTitle} Foundations`, topics: ['React & Next.js 15', 'App Router', 'Tailwind'] },
          { phase: `Phase 2 • Backend`, topics: ['Prisma', 'PostgreSQL', 'Auth'] },
          { phase: `Phase 3 • Production`, topics: ['Vercel Deploy', 'Stripe', 'Performance'] },
          { phase: `Phase 4 • ${roleTitle} Capstone`, topics: ['Build SaaS', 'Portfolio', 'LinkedIn'] }
        ]
      };
    }

    return {
      weeks: weeks,
      score: score,
      milestones: [
        { phase: `Phase 1 • ${roleTitle} Foundations`, topics: [`${roleTitle} Basics`, `Essential Tools`, `Core Concepts`] },
        { phase: `Phase 2 • ${roleTitle} Core Skills`, topics: [`Advanced Techniques`, `Best Practices`, `Hands-on Labs`] },
        { phase: `Phase 3 • ${roleTitle} Professional`, topics: [`Real Projects`, `Portfolio`, `Optimization`] },
        { phase: `Phase 4 • ${roleTitle} Mastery`, topics: [`Capstone Project`, `Resume`, `Interview Prep`] },
      ]
    };
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!role.trim()) return;
    setIsGenerating(true);
    setGeneratedResult(null);
    setStepMessage('Analyzing: ' + role);
    setTimeout(() => setStepMessage('Building skill graph for ' + role + '...'), 800);
    setTimeout(() => setStepMessage('Synthesizing milestones...'), 1600);
    setTimeout(() => {
      const roadmap = getRoadmapByRole(role, level);
      setIsGenerating(false);
      setGeneratedResult({ targetRole: role, estimatedWeeks: roadmap.weeks, readinessScore: roadmap.score, milestones: roadmap.milestones });
    }, 2400);
  };

  const handleSaveToWorkspace = () => {
    try {
      localStorage.setItem('mySkillPath', JSON.stringify(generatedResult));
    } catch {}
    if (onNotify) {
      onNotify(`Path "${role}" saved to Dashboard!`);
    } else {
      alert(`Path "${role}" saved!`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl border border-purple-500/40 bg-slate-950 shadow-2xl flex flex-col overflow-hidden">
        <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">AI Roadmap Synthesizer v4.0 FINAL DYNAMIC</h2>
            <p className="text-xs text-slate-400">Adaptive to: {role || 'Any Role'}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">X</button>
        </div>
        <div className="p-6 overflow-y-auto space-y-6">
          {!generatedResult && !isGenerating && (
            <form onSubmit={handleGenerate} className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase text-slate-300 block mb-2">Target Role - Yee Role Aina Vastundi</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white outline-none" placeholder="e.g. UI/UX Designer, Chef, Anything!" />
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {popularRoles.map((r) => (
                    <button key={r} type="button" onClick={() => setRole(r)} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">{r}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-300 block mb-2">Experience Level</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                    <button key={lvl} type="button" onClick={() => setLevel(lvl)} className={`py-2.5 rounded-xl text-xs font-semibold border ${level === lvl ? 'bg-purple-600/30 text-purple-200 border-purple-500' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>{lvl}</button>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold">Synthesize for {role || 'Your Role'}</button>
            </form>
          )}
          {isGenerating && (
            <div className="py-12 flex flex-col items-center text-center space-y-5">
              <div className="w-20 h-20 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" />
              <h3 className="text-base font-bold text-white">Synthesizing for {role}...</h3>
              <p className="text-xs text-purple-300 font-mono animate-pulse">{stepMessage}</p>
            </div>
          )}
          {generatedResult && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/40 flex justify-between">
                <div><span className="text-[10px] uppercase font-bold text-purple-400">Target Role</span><h3 className="text-base font-bold text-white">{generatedResult.targetRole}</h3></div>
                <div className="flex gap-2 text-xs"><div className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-white">{generatedResult.estimatedWeeks}</div><div className="px-2.5 py-1 rounded-lg bg-emerald-900 border border-emerald-700 text-emerald-300">{generatedResult.readinessScore}</div></div>
              </div>
              <div className="space-y-3">
                {generatedResult.milestones.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs font-bold text-purple-300">{m.phase}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">{m.topics.map((t, i) => (<span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>))}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setGeneratedResult(null)} className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold">Regenerate</button>
                <button onClick={handleSaveToWorkspace} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold">Save Path & Start Learning</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}