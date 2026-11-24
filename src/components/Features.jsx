import React from 'react';
import { 
  Cpu, 
  Code2, 
  Bot, 
  FolderGit2, 
  Award, 
  MessageSquareCode, 
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: 'Neural Adaptive Curriculum',
      subtitle: 'Path changes as your skills improve',
      description: 'Our proprietary algorithm diagnoses knowledge gaps after every exercise, skipping fluff and dynamically generating targeted mini-lessons.',
      gradient: 'from-blue-600 to-indigo-600',
      tag: 'Patented AI',
      bullets: ['Live difficulty adjustments', 'Zero time wasted on prerequisites you already know', 'Personalized learning pacing']
    },
    {
      icon: Code2,
      title: 'Real-Time AI Code Reviewer',
      subtitle: 'Instant senior-engineer feedback',
      description: 'Submit your code or connect GitHub. The AI compiler analyzes edge cases, time/space complexity, race conditions, and clean architectural patterns.',
      gradient: 'from-purple-600 to-pink-600',
      tag: 'Sub-second speed',
      bullets: ['Line-by-line lint & refactor suggestions', 'Automatic memory leak detection', 'Production benchmark comparisons']
    },
    {
      icon: Bot,
      title: 'Contextual AI Pair Programmer',
      subtitle: 'Never stay stuck on an error again',
      description: 'Stuck in a cryptic Docker error or Rust borrow checker? The embedded assistant sees your exact code state and provides conversational hints.',
      gradient: 'from-indigo-600 to-purple-600',
      tag: '24/7 Availability',
      bullets: ['Zero hallucination guardrails', 'Socratic mode prompts you to solve it', 'Generates visual call stack diagrams']
    },
    {
      icon: FolderGit2,
      title: 'Production-Grade Repositories',
      subtitle: 'No toy calculators or todo lists',
      description: 'Build real-world distributed architectures with Kubernetes configs, Stripe billing, multi-agent frameworks, and automated CI/CD pipelines.',
      gradient: 'from-pink-600 to-rose-600',
      tag: 'Portfolio Ready',
      bullets: ['Fork directly to your personal GitHub', 'Automated end-to-end test verification', 'Production deployment blueprints']
    },
    {
      icon: MessageSquareCode,
      title: 'AI Technical Mock Interviews',
      subtitle: 'Practice with FAANG-level AI evaluators',
      description: 'Simulate high-stakes coding interviews and system design loops. Receive granular scores on communication, problem decomposition, and runtime efficiency.',
      gradient: 'from-cyan-600 to-blue-600',
      tag: 'Career Accelerator',
      bullets: ['System design canvas whiteboard', 'Real-time behavioral & algorithmic feedback', 'Salary negotiation tactical prep']
    },
    {
      icon: Award,
      title: 'Verifiable On-Chain Credentials',
      subtitle: 'Proof of skill that recruiters trust',
      description: 'Earn cryptographic certificates and verified skill badges linked to your real capstone repositories, easily shareable to LinkedIn.',
      gradient: 'from-purple-600 to-cyan-600',
      tag: 'Employer Verified',
      bullets: ['Direct hiring partner pipeline', 'Shareable cryptographically signed badges', 'Ranked global skill leaderboard']
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-700/40 text-purple-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            Cutting-Edge Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Fast, Deep, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Unstoppable Mastery
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Traditional video tutorials give you the illusion of learning. SkillPath AI forces hands-on synthesis, gives immediate feedback, and guarantees job-ready fluency.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative glass-panel rounded-2xl p-7 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-950/40 flex flex-col justify-between"
              >
                {/* Glow accent overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 shadow-md flex items-center justify-center`}>
                      <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-800/40">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400/90 mt-1">
                    {feature.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                  {feature.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
