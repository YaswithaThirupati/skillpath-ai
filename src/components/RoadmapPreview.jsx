import React, { useState } from 'react';
import { ROADMAP_TRACKS } from '../data/roadmapsData';
import { 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  PlayCircle, 
  Layers, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Briefcase,
  ExternalLink,
  Cpu,
  Code2,
  Cloud
} from 'lucide-react';

export default function RoadmapPreview({ onOpenPathModal }) {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(1);

  const currentTrack = ROADMAP_TRACKS[selectedTrackIndex];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Code2': return Code2;
      case 'Cloud': return Cloud;
      default: return Layers;
    }
  };

  return (
    <section id="roadmaps" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-700/40 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Interactive Career Maps
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curated Roadmaps Powered by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Neural Pathing
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Choose a flagship career path or let our AI synthesize a custom curriculum based on your existing skills and career aspirations.
          </p>
        </div>

        {/* Track Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {ROADMAP_TRACKS.map((track, idx) => {
            const Icon = getIcon(track.icon);
            const isSelected = selectedTrackIndex === idx;
            return (
              <button
                key={track.id}
                onClick={() => {
                  setSelectedTrackIndex(idx);
                  setActiveMilestoneIndex(1);
                }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/40 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-purple-400'}`} />
                {track.name}
              </button>
            );
          })}
        </div>

        {/* Selected Track Overview Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-900/40 mb-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {currentTrack.difficulty}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {currentTrack.duration}
                </span>
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  {currentTrack.salary} Target
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-2">{currentTrack.name}</h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">{currentTrack.description}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenPathModal(currentTrack.name)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold shadow-md shadow-purple-900/40 flex items-center gap-2 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                Customize This Roadmap
              </button>
            </div>
          </div>

          {/* Interactive Milestone Timeline */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Roadmap Progression & Capstone Milestones
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {currentTrack.milestones.map((milestone, mIdx) => {
                const isActive = activeMilestoneIndex === mIdx;
                const isCompleted = milestone.status === 'completed';
                const isInProgress = milestone.status === 'in-progress';
                const isLocked = milestone.status === 'locked';

                return (
                  <div
                    key={milestone.phase}
                    onClick={() => setActiveMilestoneIndex(mIdx)}
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border relative ${
                      isActive
                        ? 'bg-purple-950/40 border-purple-500/70 shadow-lg shadow-purple-950/40 ring-1 ring-purple-500'
                        : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase text-purple-400 tracking-wider">
                        {milestone.phase}
                      </span>
                      {isCompleted && (
                        <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-800/40">
                          <CheckCircle2 className="w-3 h-3" /> Done
                        </span>
                      )}
                      {isInProgress && (
                        <span className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-800/40 animate-pulse">
                          <PlayCircle className="w-3 h-3" /> Current
                        </span>
                      )}
                      {isLocked && (
                        <span className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold bg-slate-800/50 px-2 py-0.5 rounded-full border border-slate-700">
                          <Lock className="w-3 h-3" /> Locked
                        </span>
                      )}
                    </div>

                    <h5 className="text-sm font-bold text-white mb-1 line-clamp-1">
                      {milestone.title}
                    </h5>
                    <p className="text-xs text-slate-400 mb-3">{milestone.time}</p>

                    {/* Skill Tags preview */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {milestone.skills.slice(0, 2).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                      {milestone.skills.length > 2 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/60 text-slate-400">
                          +{milestone.skills.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Capstone project highlight */}
                    <div className="text-[11px] text-slate-300 bg-black/40 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block text-[9px] uppercase font-bold tracking-wider">Project:</span>
                      <span className="font-medium text-purple-200 line-clamp-1">{milestone.project}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expanded Milestone Details Drawer */}
            <div className="mt-6 p-5 rounded-xl bg-slate-900/80 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-extrabold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                      {currentTrack.milestones[activeMilestoneIndex].phase} Deep Dive
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {currentTrack.milestones[activeMilestoneIndex].title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Timeline: {currentTrack.milestones[activeMilestoneIndex].time} • Hands-on Capstone: <strong className="text-slate-200">{currentTrack.milestones[activeMilestoneIndex].project}</strong>
                  </p>
                </div>
                
                <button
                  onClick={() => onOpenPathModal(currentTrack.name)}
                  className="px-4 py-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/40 border border-purple-500/40 text-purple-200 text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  Start This Milestone <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 block mb-2">Mastered Competencies:</span>
                <div className="flex flex-wrap gap-2">
                  {currentTrack.milestones[activeMilestoneIndex].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-800/90 text-slate-200 text-xs font-medium border border-slate-700/60 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
