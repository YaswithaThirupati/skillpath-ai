import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Pricing({ onNotify }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  const plans = [
    {
      name: 'Starter Explorer',
      badge: 'Free Forever',
      description: 'Ideal for tech enthusiasts curious about AI and foundational programming tracks.',
      price: {
        monthly: '$0',
        annual: '$0'
      },
      period: 'forever',
      popular: false,
      ctaText: 'Start Free Today',
      gradient: 'from-slate-700 to-slate-900',
      features: [
        'Access to 2 foundational roadmaps',
        '10 AI Tutor queries per day',
        'Community discussion Discord access',
        'Basic browser code runner',
        'Standard completion badge',
      ],
      notIncluded: [
        'Unlimited AI Code Reviews',
        'Production Capstone CI/CD grading',
        '1-on-1 AI Mock Interviews',
        'Priority GPU Sandbox compute'
      ]
    },
    {
      name: 'Pro Learner',
      badge: 'Most Popular',
      description: 'For engineers committed to landing high-paying AI, Full-Stack, and DevOps jobs.',
      price: {
        monthly: '$24',
        annual: '$18'
      },
      period: 'per month',
      popular: true,
      ctaText: 'Upgrade to Pro',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      features: [
        'Unlimited AI Career Roadmaps with live adaptation',
        '24/7 Unlimited AI Pair Programming Tutor',
        'Real-time automated code reviews & linting',
        'All 40+ production capstones with Docker & K8s',
        'Unlimited AI Mock Technical Interviews',
        'Verifiable on-chain credentials for LinkedIn',
        'Dedicated GPU Cloud Sandbox environment',
        'Direct hiring board & talent network access'
      ],
      notIncluded: []
    },
    {
      name: 'Team & Enterprise',
      badge: 'For Organizations',
      description: 'For fast-growing engineering teams upskilling in AI, LLMOps, and cloud security.',
      price: {
        monthly: '$59',
        annual: '$45'
      },
      period: 'per seat / month',
      popular: false,
      ctaText: 'Contact Enterprise',
      gradient: 'from-purple-900 to-slate-900',
      features: [
        'Everything in Pro Learner',
        'Custom organizational skill taxonomies & tracks',
        'Team skill benchmark & analytics dashboard',
        'SSO (Okta, Azure AD, Google Workspace)',
        'Private GitHub enterprise repo integrations',
        'Dedicated executive learning strategist',
        'Custom invoicing & SLA guarantees'
      ],
      notIncluded: []
    }
  ];

  const handleSelectPlan = (plan) => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 }
      });
    } catch (e) {}

    onNotify?.(`🚀 Welcome to ${plan.name}! Your workspace is unlocked.`);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-700/40 text-purple-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            Transparent Investment in Your Career
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Flexible Plans for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Every Ambition
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Start free, then unlock full AI pair programming, unlimited reviews, and automated mock interviews.
          </p>

          {/* Monthly vs Annual Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                SAVE 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isPro = plan.popular;
            const price = billingCycle === 'annual' ? plan.price.annual : plan.price.monthly;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isPro
                    ? 'glass-panel-glow border-purple-500/60 shadow-2xl shadow-purple-950/60 scale-105 z-10 p-8 ring-2 ring-purple-500/40'
                    : 'glass-panel border-slate-800 p-8 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isPro && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-900/50 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    {!isPro && (
                      <span className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800">
                    <span className="text-4xl sm:text-5xl font-black text-white">{price}</span>
                    <span className="text-xs text-slate-400 font-medium ml-1">/ {plan.period}</span>
                    {billingCycle === 'annual' && price !== '$0' && (
                      <span className="text-[11px] text-purple-300 ml-2 font-semibold">billed yearly</span>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Included with this plan:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isPro ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-800 text-slate-400'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA button */}
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-95 ${
                    isPro
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-purple-900/50 hover:shadow-purple-700/60'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-6 rounded-2xl glass-panel border border-slate-800 max-w-2xl mx-auto flex items-center gap-4 text-center sm:text-left justify-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">14-Day Money Back Guarantee</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Try SkillPath AI Pro risk-free. If you don't feel significantly faster and more proficient within 14 days, get a 100% immediate refund.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
