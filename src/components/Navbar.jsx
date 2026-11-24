import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Compass, BookOpen, Layers, CreditCard, HelpCircle } from 'lucide-react';

export default function Navbar({ onOpenPathModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Roadmaps', href: '#roadmaps', icon: Compass },
    { name: 'Features', href: '#features', icon: Layers },
    { name: 'Courses', href: '#courses', icon: BookOpen },
    { name: 'Pricing', href: '#pricing', icon: CreditCard },
    { name: 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-purple-950/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-purple-500/30 group-hover:shadow-purple-500/60 transition-all duration-300">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                SkillPath <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">AI</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-purple-300/70 -mt-1">
                Intelligent Learning OS
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenPathModal}
              className="text-sm font-semibold text-purple-300 hover:text-white px-3.5 py-2 rounded-lg hover:bg-purple-950/40 border border-purple-500/20 transition-all duration-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              Build AI Path
            </button>
            <a
              href="#pricing"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-purple-600 to-blue-600 group-hover:from-purple-600 group-hover:to-blue-600 hover:text-white text-white shadow-md shadow-purple-900/40 hover:shadow-purple-700/50 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-200 bg-transparent rounded-lg flex items-center gap-1.5">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-purple-900/30 px-4 pt-4 pb-6 mt-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-purple-950/40 border border-transparent hover:border-purple-800/30 transition-all"
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPathModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-purple-300 bg-purple-950/50 border border-purple-700/40 hover:bg-purple-900/50"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                Build My AI Roadmap
              </button>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-purple-900/30"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
