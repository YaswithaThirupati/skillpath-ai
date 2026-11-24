import React, { useState, useEffect } from 'react';

function Hero({ onOpenPathModal, userName, setUserName }) {
  const [inputValue, setInputValue] = useState('Data Analyst');
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 bg-slate-950">
      <div className="max-w-6xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-[11px] text-blue-300">✓ Trusted by 10k+ learners • 4.9/5 Rating • 14 Weeks Job Ready</div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">Learn Smarter with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SkillPath AI</span></h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-[15px]">Complete learning path with 4 phases, video tutorials, resume builder and certificate</p>
        <div className="max-w-lg mx-auto space-y-3">
          <p className="text-[11px] text-slate-400 font-bold tracking-widest text-left">YOUR NAME</p>
          <input value={userName} onChange={(e)=>{setUserName(e.target.value); localStorage.setItem('skillPathUserName', e.target.value)}} placeholder="Thirupati Yaswitha" className="w-full px-4 py-3 rounded-xl bg-slate-900 border-2 border-blue-500/30 text-white text-center font-bold outline-none focus:border-blue-500" />
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-900 border border-purple-500/30">
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="flex-1 bg-transparent outline-none text-white text-sm px-3" placeholder="Data Analyst / Data Engineer" />
            <button onClick={()=>onOpenPathModal(inputValue)} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold">Generate Path →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white">Why SkillPath AI is Different</h2>
        <p className="text-slate-400 mt-3 text-sm">Everything you need to go from beginner to job-ready</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800"><div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl">🎯</div><h3 className="font-bold text-white mt-4">4 Phases Clarity</h3><p className="text-[12px] text-slate-400 mt-2">Structured learning with Why, What and Outcome for every topic</p></div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800"><div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-xl">📹</div><h3 className="font-bold text-white mt-4">Videos for Every Topic</h3><p className="text-[12px] text-slate-400 mt-2">Each topic has a Video button with direct YouTube tutorial search</p></div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800"><div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-xl">📄</div><h3 className="font-bold text-white mt-4">Clean Resume Builder</h3><p className="text-[12px] text-slate-400 mt-2">Simple white resume design ready for recruiters and ATS systems</p></div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800"><div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-xl">🏆</div><h3 className="font-bold text-white mt-4">Certificate & PDF</h3><p className="text-[12px] text-slate-400 mt-2">Verified certificate with your name and printable resume PDF - 4 Blue Borders</p></div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800"><div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center text-xl">📊</div><h3 className="font-bold text-white mt-4">Progress & Job Ready Score</h3><p className="text-[12px] text-slate-400 mt-2">Track 12 topics completion and see your job readiness percentage</p></div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800"><div className="w-12 h-12 rounded-xl bg-yellow-600 flex items-center justify-center text-xl">✅</div><h3 className="font-bold text-white mt-4">Auto Save Everything</h3><p className="text-[12px] text-slate-400 mt-2">Your name, contact details and progress are automatically saved</p></div>
      </div>
    </section>
  );
}

// CERTIFICATE - 4 BLUE BORDERS - No signature - Your photo style + 4 borders
function CertificateModal({ isOpen, onClose, role, userName }) {
  if (!isOpen) return null; 
  const displayName = userName?.trim() || 'Thirupati Yaswitha'; 
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* 4 SIDES BLUE BORDER */}
      <div className="w-full max-w-[850px] bg-white my-4 shadow-2xl relative border-[10px] border-[#0a3d8a]">
        {/* Inner thin border for premium double border */}
        <div className="border border-[#0090ff]/20 m-[3px]">
          <div className="p-8 md:p-12 pt-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-black text-[#0a3d8a] text-xl">SkillPath AI</p>
                <div className="w-10 h-1.5 bg-[#0a3d8a] mt-2"></div>
              </div>
              <div className="w-20 h-20 rounded-full bg-[#0090ff] flex items-center justify-center text-white text-[9px] font-bold text-center p-2 leading-tight">SkillPath<br/>Verified</div>
            </div>
            <div className="text-center mt-10">
              <h1 className="text-[26px] font-black text-[#0a2540]">CERTIFICATE OF COMPLETION</h1>
              <p className="text-[15px] text-black mt-3">This is to certify that</p>
              <h2 className="text-[24px] font-black text-black mt-4 capitalize">{displayName}</h2>
              <p className="text-[15px] text-black mt-5">has successfully completed</p>
              <p className="text-[17px] font-black text-black mt-2 capitalize">{role} - 14 Weeks Intensive</p>
              <p className="text-[14px] text-black mt-4">on {today} with 95% Score - Job Ready 100%</p>
            </div>
            <div className="flex gap-3 mt-16 justify-center print:hidden">
              <button onClick={onClose} className="px-8 py-3 rounded-xl bg-white border-2 border-black text-black font-bold text-sm">CLOSE</button>
              <button onClick={()=>window.print()} className="px-8 py-3 rounded-xl bg-[#0a3d8a] text-white font-bold text-sm">PRINT / SAVE PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeModal({ isOpen, onClose, role, progress, userName }) {
  if(!isOpen) return null;
  const completed = Object.keys(progress).filter(k=>progress[k]);
  const displayName = userName?.trim() || 'Thirupati Yaswitha';
  const [email, setEmail] = useState(() => localStorage.getItem('resume_email') || 'yaswitha12@email.com');
  const [phone, setPhone] = useState(() => localStorage.getItem('resume_phone') || '+91 9865432195');
  const [linkedin, setLinkedin] = useState(() => localStorage.getItem('resume_linkedin') || 'linkedin.com/in/yaswitha');
  const [location, setLocation] = useState(() => localStorage.getItem('resume_location') || 'Tada, Andhra Pradesh, India');
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => { localStorage.setItem('resume_email', email); localStorage.setItem('resume_phone', phone); localStorage.setItem('resume_linkedin', linkedin); localStorage.setItem('resume_location', location); }, [email, phone, linkedin, location]);
  const saveDetails = () => { setIsEditing(false); };
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 bg-black/60 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-[800px] bg-white my-4 shadow-2xl rounded-xl overflow-hidden max-h-[92vh] flex flex-col">
        {isEditing && (
          <div className="p-5 bg-[#f9fafb] border-b">
            <h3 className="font-bold text-black text-[13px] tracking-wide">EDIT CONTACT DETAILS</h3>
            <div className="grid gap-3 mt-4">
              <div><label className="text-[11px] font-bold text-gray-600 tracking-widest">EMAIL</label><input value={email} onChange={e=>setEmail(e.target.value)} className="w-full mt-1.5 px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-black text-[14px] outline-none" autoFocus /></div>
              <div><label className="text-[11px] font-bold text-gray-600 tracking-widest">PHONE</label><input value={phone} onChange={e=>setPhone(e.target.value)} className="w-full mt-1.5 px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-black text-[14px] outline-none" /></div>
              <div><label className="text-[11px] font-bold text-gray-600 tracking-widest">LINKEDIN</label><input value={linkedin} onChange={e=>setLinkedin(e.target.value)} className="w-full mt-1.5 px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-black text-[14px] outline-none" /></div>
              <div><label className="text-[11px] font-bold text-gray-600 tracking-widest">LOCATION</label><input value={location} onChange={e=>setLocation(e.target.value)} className="w-full mt-1.5 px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-black text-[14px] outline-none" /></div>
              <div className="flex gap-2 mt-1"><button onClick={saveDetails} className="flex-1 py-3 rounded-lg bg-black text-white font-bold text-[13px]">SAVE DETAILS</button><button onClick={()=>setIsEditing(false)} className="flex-1 py-3 rounded-lg bg-white border border-gray-300 text-black font-bold text-[13px]">CANCEL</button></div>
            </div>
          </div>
        )}
        <div className="p-8 bg-white text-black overflow-y-auto flex-1">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h1 className="text-[30px] font-black uppercase tracking-tight leading-none">{displayName}</h1>
              <p className="text-[11px] font-bold text-gray-600 uppercase mt-2 tracking-wide">{role || 'DATA ANALYST'} | ASPIRING {role || 'DATA ANALYST'}</p>
              <div className="mt-4 space-y-1"><p className="text-[12px] font-bold text-black">{email}</p><p className="text-[11px] text-gray-600">{phone} &nbsp;|&nbsp; {linkedin} &nbsp;|&nbsp; {location}</p></div>
            </div>
            <button onClick={()=>setIsEditing(true)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[11px] font-bold text-black print:hidden">Edit</button>
          </div>
          <div className="mt-7 border-t border-gray-200 pt-5"><h2 className="text-[11px] font-black tracking-[1.5px] text-black">PROFESSIONAL SUMMARY</h2><p className="text-[11px] leading-[16px] mt-2.5 text-gray-700">Motivated {role || 'Data Analyst'} with {completed.slice(0,5).join(', ') || 'Excel Advanced, SQL Basics, Statistics, Python Pandas, Power BI'}. {role || 'Data Analyst'} path via SkillPath AI - 95% score.</p></div>
          <div className="mt-6"><h2 className="text-[11px] font-black tracking-[1.5px] text-black border-b border-black pb-1.5">TECHNICAL SKILLS</h2><div className="mt-3 flex flex-wrap gap-2">{completed.length>0 ? completed.map((s,i)=><span key={i} className="text-[10px] px-3 py-1.5 bg-black text-white rounded-full font-bold">{s}</span>) : <span className="text-[11px] text-gray-400">Complete phases to show skills</span>}</div></div>
          <div className="mt-6"><h2 className="text-[11px] font-black tracking-[1.5px] text-black border-b border-black pb-1.5">PROJECTS</h2><div className="mt-3"><p className="text-[12px] font-bold capitalize">{role || 'Data Analyst'} - Full Learning Path</p><ul className="list-disc ml-5 mt-2 space-y-1"><li className="text-[11px] text-gray-700">Completed {completed.length} core topics</li><li className="text-[11px] text-gray-700">Built Sales Dashboard + Customer Analysis</li><li className="text-[11px] text-gray-700">95% score and verified certificate</li></ul></div></div>
        </div>
        <div className="p-3 bg-gray-50 border-t flex gap-2 print:hidden"><button onClick={onClose} className="flex-1 py-3 rounded-xl bg-white border-2 border-black text-black font-bold text-[13px]">CLOSE</button><button onClick={()=>setIsEditing(true)} className="flex-1 py-3 rounded-xl bg-black text-white font-bold text-[13px]">EDIT CONTACT</button><button onClick={()=>window.print()} className="flex-1 py-3 rounded-xl bg-white border-2 border-black text-black font-bold text-[13px]">SAVE PDF</button></div>
      </div>
    </div>
  );
}

function PathGeneratorModal({ isOpen, onClose, initialRole = '', onNotify }) {
  const [role, setRole] = useState(initialRole || ''); const [isGenerating, setIsGenerating] = useState(false); const [generatedResult, setGeneratedResult] = useState(null);
  useEffect(()=>{ if(initialRole) setRole(initialRole); }, [initialRole]); if(!isOpen) return null;
  const getRoadmap = (roleText) => {
    const roleTitle = roleText.trim() || "Your Role"; const titleCap = roleTitle.replace(/\b\w/g, l=>l.toUpperCase());
    const raw = roleText.trim().toLowerCase();
    if(raw.includes('analyst')){
      return { weeks: '14 Weeks', score: '95% Match', milestones: [
          { phase: `Phase 1 • ${titleCap} Foundations`, sub: 'Basics to Strong Base', duration: 'Week 1-3 • 3 Weeks', why: 'Every Data Analyst must know fundamentals', outcome: 'Answer basic interview questions, Clean data in Excel', topics: [{name:'Excel Advanced', what:'VLOOKUP, Pivot Tables - Data cleaning main'}, {name:'SQL Basics', what:'Extract data from database - 70% jobs'}, {name:'Statistics Fundamentals', what:'Mean, Median, Standard Deviation - Analysis base'}] },
          { phase: `Phase 2 • Big Data Pipelines`, sub: 'Real Industry Tools', duration: 'Week 4-7 • 4 Weeks', why: 'Companies need Python, Power BI - 60% job ready', outcome: 'Build dashboards, Analyze lakhs of rows in Python', topics: [{name:'Python Pandas', what:'Fast cleaning of big data - 10x faster than Excel'}, {name:'Power BI / Tableau', what:'Dashboard for managers - Visual display'}, {name:'Data Cleaning', what:'80% of analyst work is cleaning - Most important'}] },
          { phase: `Phase 3 • Cloud Stack`, sub: 'Where Jobs Are', duration: 'Week 8-11 • 4 Weeks', why: '90% analyst jobs need business thinking', outcome: 'Give business insights - Why sales dropped?', topics: [{name:'Business Metrics KPI', what:'ROI, Growth, Churn - Business language'}, {name:'Advanced SQL Case Studies', what:'Flipkart, Swiggy real data analysis'}, {name:'Google Analytics', what:'Website data analysis - Marketing data'}] },
          { phase: `Phase 4 • Capstone — Portfolio Ready`, sub: 'Portfolio Ready', duration: 'Week 12-14 • 3 Weeks', why: 'No project in resume = No job', outcome: 'Resume ready + Certificate + 100% Job Ready!', topics: [{name:'Sales Dashboard Project', what:'Main resume project - Top priority'}, {name:'Customer Analysis', what:'E-commerce behavior analysis'}, {name:'Presentation & Storytelling', what:'How to explain in interview - Story format'}] }
        ] };
    }
    return { weeks: '14 Weeks', score: '95% Match', milestones: [
        { phase: `Phase 1 • ${titleCap} Foundations`, sub: 'Basics', duration: 'Week 1-3', why: 'Every Engineer must know fundamentals', outcome: 'Answer basic interview questions, SQL strong', topics: [{name:'SQL Advanced', what:'Complex queries, joins'}, {name:'Python ETL', what:'Extract Transform Load - Daily work'}, {name:'Data Warehousing', what:'Star vs Snowflake schema'}] },
        { phase: `Phase 2 • Big Data Pipelines`, sub: 'Real Industry Tools', duration: 'Week 4-7', why: 'Companies handle crores of data - Spark required', outcome: 'Build pipeline handling lakhs of records', topics: [{name:'Apache Spark', what:'10x faster - Big data must'}, {name:'Airflow', what:'Schedule jobs automatically'}, {name:'Kafka', what:'Real-time like Swiggy tracking'}] },
        { phase: `Phase 3 • Cloud Stack`, sub: 'Where Jobs Are', duration: 'Week 8-11', why: '90% jobs are on cloud - AWS must', outcome: 'Deploy project on cloud', topics: [{name:'AWS Redshift', what:'Cloud warehouse'}, {name:'Databricks', what:'All-in-one platform'}, {name:'dbt', what:'Most trending tool'}] },
        { phase: `Phase 4 • Capstone — Portfolio Ready`, sub: 'Portfolio Ready', duration: 'Week 12-14', why: 'No project = No job', outcome: 'Resume ready + Certificate + 100% Job Ready!', topics: [{name:'Build Pipeline', what:'End-to-end pipeline'}, {name:'Streaming', what:'Real-time dashboard'}, {name:'Design', what:'System Design prep'}] }
      ] };
  };
  const handleGenerate = (e) => { e.preventDefault(); if(!role.trim()) return; setIsGenerating(true); setTimeout(()=>{ const roadmap = getRoadmap(role); setIsGenerating(false); setGeneratedResult({ targetRole: role, estimatedWeeks: roadmap.weeks, readinessScore: roadmap.score, milestones: roadmap.milestones }); }, 1000); };
  const handleSave = () => { localStorage.setItem('mySkillPath', JSON.stringify(generatedResult)); localStorage.setItem('myProgress', JSON.stringify({})); if(onNotify) onNotify(`Path "${role}" saved!`); onClose(); window.location.reload(); };
  return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"><div className="w-full max-w-2xl rounded-3xl border border-purple-500/40 bg-slate-950 flex flex-col overflow-hidden max-h-[90vh]"><div className="p-6 bg-slate-900 border-b border-slate-800 flex justify-between"><h2 className="font-bold text-white">AI Roadmap - Exact 4 Phases</h2><button onClick={onClose} className="text-white font-bold">CLOSE</button></div><div className="p-6 overflow-y-auto">{!generatedResult && !isGenerating && (<form onSubmit={handleGenerate} className="space-y-5"><input value={role} onChange={(e)=>setRole(e.target.value)} required placeholder="Data Analyst / Data Engineer" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none" /><button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white">Generate Exact Path →</button></form>)}{isGenerating && <div className="py-16 text-center"><div className="w-16 h-16 mx-auto rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" /><p className="text-purple-300 text-sm mt-4">Creating exact phases for {role}...</p></div>}{generatedResult && (<div className="space-y-3"><div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/40"><h3 className="font-bold text-white capitalize">{generatedResult.targetRole} • 4-Phase Journey • {generatedResult.estimatedWeeks} • {generatedResult.readinessScore}</h3></div>{generatedResult.milestones.map((m,i)=><div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800"><p className="text-sm font-bold text-white">{i+1}. {m.phase}</p><p className="text-[11px] text-slate-400">{m.sub} • {m.duration}</p><div className="mt-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800"><p className="text-[10px] font-bold text-blue-300">WHY: {m.why}</p><p className="text-[10px] font-bold text-emerald-300 mt-1.5">OUTCOME: {m.outcome}</p></div><div className="mt-2.5 flex flex-wrap gap-1.5">{m.topics.map((t,idx)=><span key={idx} className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-white border border-slate-700">{t.name}</span>)}</div></div>)}<div className="flex gap-3 mt-4"><button onClick={()=>setGeneratedResult(null)} className="flex-1 py-3 rounded-xl bg-slate-800 text-sm text-white">Back</button><button onClick={handleSave} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm text-white">Save & Start</button></div></div>)}</div></div></div>);
}

function PhaseModal({ isOpen, onClose, phase, role, onComplete, progress, setProgress }) {
  if(!isOpen || !phase) return null;
  const toggleTopic = (topic) => { const name = topic.name || topic; const newProg = { ...progress, [name]: !progress[name] }; setProgress(newProg); localStorage.setItem('myProgress', JSON.stringify(newProg)); };
  const allChecked = phase.topics.every(t=>progress[t.name || t]);
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-3xl border border-blue-500/40 bg-slate-950 p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start gap-4"><div><h2 className="text-lg font-bold text-white">{phase.phase}</h2><p className="text-[11px] text-slate-400">{phase.sub} • {phase.duration}</p><div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800"><p className="text-[10px] font-bold text-blue-300">WHY: {phase.why}</p><p className="text-[10px] font-bold text-emerald-300 mt-2">OUTCOME: {phase.outcome}</p></div></div><button onClick={onClose} className="text-white text-xl font-bold">X</button></div>
        <div className="space-y-3 mt-5"><p className="text-[11px] font-bold tracking-widest text-slate-400">TOPICS - VIDEO BUTTON WORKING</p>{phase.topics.map((t,i)=>{ const name = t.name || t; const desc = t.what || ''; return (<div key={i} className={`p-3 rounded-xl border ${progress[name]?'bg-emerald-900/20 border-emerald-700/40':'bg-slate-900 border-slate-800'}`}><div className="flex items-center gap-3"><input type="checkbox" checked={!!progress[name]} onChange={()=>toggleTopic(t)} className="w-5 h-5" /><span className="text-sm flex-1 font-bold text-white">{name}</span><button onClick={()=>window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' tutorial ' + role)}`, '_blank')} className="text-[11px] px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold">Video ▶</button></div>{desc && <p className="text-[11px] text-slate-400 mt-2 ml-8">{desc}</p>}</div>)})}</div>
        <button onClick={onComplete} disabled={!allChecked} className={`w-full mt-5 py-3 rounded-xl font-bold text-sm text-white ${allChecked?'bg-gradient-to-r from-blue-600 to-purple-600':'bg-slate-700'}`}>{allChecked ? 'Continue to Next Phase →' : `Complete all ${phase.topics.length} topics`}</button>
        <button onClick={onClose} className="w-full mt-2 py-2.5 rounded-xl bg-white border-2 border-black text-black font-bold text-[13px]">CLOSE</button>
      </div>
    </div>
  );
}

export default function App() {
  const [isPathModalOpen, setIsPathModalOpen] = useState(false); const [initialRole, setInitialRole] = useState(''); const [toast, setToast] = useState(''); const [myPath, setMyPath] = useState(null); const [activePhase, setActivePhase] = useState(null); const [progress, setProgress] = useState({}); const [streak, setStreak] = useState({ count: 0 }); const [showCert, setShowCert] = useState(false); const [showResume, setShowResume] = useState(false); const [userName, setUserName] = useState('Thirupati Yaswitha');
  useEffect(()=>{ try{ const savedName = localStorage.getItem('skillPathUserName'); if(savedName) setUserName(savedName); const s = JSON.parse(localStorage.getItem('mySkillPath')||'null'); if(s) setMyPath(s); const p = JSON.parse(localStorage.getItem('myProgress')||'{}'); setProgress(p); const st = JSON.parse(localStorage.getItem('myStreak')||'{"count":0}'); setStreak(st); }catch{} }, []);
  const openPathModal = (role='') => { setInitialRole(role); setIsPathModalOpen(true); }; const showToast = (msg) => { setToast(msg); setTimeout(()=>setToast(''), 3500); };
  const totalTopics = myPath ? myPath.milestones.flatMap(m=>m.topics).length : 12; const completedCount = Object.keys(progress).filter(k=>progress[k]).length; const jobReadiness = Math.round((completedCount / totalTopics) * 100) || 0;
  const handlePhaseComplete = () => { if(!myPath || !activePhase) return; const currentIndex = myPath.milestones.findIndex(m=>m.phase===activePhase.phase); setActivePhase(null); showToast(`${activePhase.phase} Completed!`); if(currentIndex+1<myPath.milestones.length){ setTimeout(()=>setActivePhase(myPath.milestones[currentIndex+1]), 600); } else { setTimeout(()=>{ showToast(`All Done! Certificate Ready!`); setShowCert(true); }, 800); } };
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between bg-slate-950/80 backdrop-blur border-b border-slate-800"><span className="font-extrabold">SkillPath AI</span><div className="flex gap-3 items-center"><span className="text-[10px] text-slate-400 hidden md:block">{userName}</span><span className="text-xs bg-orange-900/40 border border-orange-700/40 px-3 py-1 rounded-full">🔥 {streak.count} Day Streak</span><button onClick={()=>openPathModal('')} className="px-4 py-2 rounded-xl bg-blue-600 text-sm font-bold text-white">Get Started</button></div></nav>
      <Hero onOpenPathModal={openPathModal} userName={userName} setUserName={setUserName} />
      <FeaturesSection />
      {myPath && (<section id="my-path" className="px-6 py-8 max-w-6xl mx-auto"><div className="p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-purple-900/40 via-slate-900 to-blue-900/40 border border-purple-500/40"><div className="flex flex-wrap justify-between gap-4"><div><span className="text-[11px] font-bold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">ACTIVE PATH • {completedCount}/{totalTopics} • {userName}</span><h2 className="text-2xl md:text-3xl font-extrabold mt-3 capitalize">{myPath.targetRole} - 4 Phases Journey • 14 Weeks • 95% Match</h2><div className="flex gap-2 mt-3 items-center"><div className="w-64 h-2.5 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{width: `${jobReadiness}%`}} /></div><span className="text-xs font-bold text-emerald-300">{jobReadiness}% Job Ready</span></div></div><div className="flex gap-2 flex-wrap"><button onClick={()=>setShowResume(true)} className="h-fit text-xs px-4 py-2.5 rounded-lg bg-blue-600 text-white font-bold">📄 Resume</button><button onClick={()=>setShowCert(true)} className="h-fit text-xs px-4 py-2.5 rounded-lg bg-yellow-600 text-white font-bold">🏆 Certificate - 4 Borders</button></div></div><div className="grid md:grid-cols-2 gap-4 mt-6">{myPath.milestones.map((m,i)=><div key={i} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800"><div className="flex justify-between"><div><div className="text-sm font-bold text-purple-300">{i+1}. {m.phase}</div><div className="text-[10px] text-slate-500">{m.sub} • {m.duration}</div></div></div><div className="mt-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800/50"><p className="text-[9px] font-bold text-blue-300">WHY: {m.why}</p><p className="text-[9px] font-bold text-emerald-300 mt-1">OUTCOME: {m.outcome}</p></div><div className="flex flex-wrap gap-1 mt-2">{m.topics.map((t,idx)=><span key={idx} className={`text-[10px] px-2 py-1 rounded-full border ${progress[t.name||t]?'bg-emerald-800/50 border-emerald-700 text-emerald-200':'bg-slate-800 border-slate-700 text-white'}`}>{progress[t.name||t]?'✅ ':''}{t.name||t}</span>)}</div></div>)}</div><div className="mt-6 flex gap-3"><button onClick={()=>setActivePhase(myPath.milestones[0])} className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm text-white">Continue Learning - Videos Working</button><button onClick={()=>setShowCert(true)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 font-bold text-sm text-white">Cert</button></div></div></section>)}
      <section className="px-6 py-16 text-center bg-slate-950 border-t border-slate-800"><h2 className="text-3xl font-black text-white">Ready? Original Style!</h2><p className="text-slate-400 mt-2 text-sm">6 Features in English + Certificate 4 Blue Borders + CLOSE button</p><button onClick={()=>openPathModal('')} className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white">Generate Exact Path →</button><p className="mt-10 text-[11px] text-slate-600">© 2026 SkillPath AI • Built by {userName}</p></section>
      {toast && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] bg-slate-900 border border-purple-500/30 px-5 py-3 rounded-2xl text-sm font-bold">{toast}</div>}
      <PathGeneratorModal isOpen={isPathModalOpen} onClose={()=>setIsPathModalOpen(false)} initialRole={initialRole} onNotify={showToast} />
      <PhaseModal isOpen={!!activePhase} onClose={()=>setActivePhase(null)} phase={activePhase} role={myPath?.targetRole||''} progress={progress} setProgress={setProgress} onComplete={handlePhaseComplete} />
      <CertificateModal isOpen={showCert} onClose={()=>setShowCert(false)} role={myPath?.targetRole||'Your Role'} userName={userName} />
      <ResumeModal isOpen={showResume} onClose={()=>setShowResume(false)} role={myPath?.targetRole||''} progress={progress} userName={userName} />
    </div>
  );
}