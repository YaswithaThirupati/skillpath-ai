import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RefreshCw, 
  Minimize2, 
  ChevronDown,
  Terminal,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function ChatAssistant({ onOpenPathModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: "👋 Hi there! I'm **Pathy**, your SkillPath AI Assistant.\n\nWhether you need career guidance, a personalized tech roadmap, or code troubleshooting, I'm here to help. What are you looking to master today?",
      time: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'Recommend a roadmap for 2026',
    'How do I become an AI Engineer?',
    'What course is best for beginners?',
    'How does adaptive learning work?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const generateDummyResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('ai') || q.includes('llm') || q.includes('agent') || q.includes('python')) {
      return `🤖 **Autonomous AI Agent & LLM Path Recommendation:**\n\nFor 2026, the highest market demand is in **Compound AI Systems** rather than prompt engineering alone.\n\nHere is your recommended 3-step sequence:\n1. **Python & Vector Databases:** Master ChromaDB, Pinecone, and hybrid BM25 + dense retrieval.\n2. **LangGraph & State Persistence:** Build multi-agent supervisor graphs with human-in-the-loop validation.\n3. **Quantization & Fine-Tuning:** Learn LoRA/QLoRA on consumer GPUs via Axolotl or Unsloth.\n\n✨ *Tip:* You can check out our **Autonomous AI Agents & Multi-Agent Systems** course above for hands-on capstones!`;
    }

    if (q.includes('next') || q.includes('react') || q.includes('frontend') || q.includes('web') || q.includes('full stack')) {
      return `⚡ **Modern Full-Stack Mastery:**\n\nTo build production SaaS in 2026, focus on:\n- **Next.js 15 App Router** (React 19 Server Actions & Streaming)\n- **TypeScript Strict Mode** & Zod schema validation\n- **Edge Databases** (Neon Serverless Postgres, Prisma ORM)\n- **Vercel AI SDK** to stream completions into responsive generative UI\n\n💡 Would you like me to generate a personalized Full-Stack roadmap for you?`;
    }

    if (q.includes('price') || q.includes('cost') || q.includes('plan') || q.includes('free') || q.includes('subscription')) {
      return `💳 **SkillPath AI Pricing Overview:**\n\n- **Starter Explorer:** $0 Free Forever! Includes 2 foundational tracks and 10 AI Tutor queries/day.\n- **Pro Learner ($18/mo billed annually):** Unlimited AI Pair Programming, Automated Code Review, all 40+ Capstone Repos, and Mock Technical Interviews.\n- **Team/Enterprise:** Custom organizational skill graphs & seat analytics.\n\n🎁 We offer a 14-day 100% money-back guarantee on all paid plans!`;
    }

    if (q.includes('beginner') || q.includes('start') || q.includes('new to coding')) {
      return `🌱 **Starting from Scratch?**\n\nNo problem! SkillPath AI automatically calibrates to your level.\n\nWe recommend starting with our **Interactive Full-Stack Foundations** or **Python for Intelligent Automation**. Our AI pair programmer breaks down complex syntax into intuitive visual analogies and gives you bite-sized coding challenges with instant hints.`;
    }

    if (q.includes('adaptive') || q.includes('work') || q.includes('engine') || q.includes('how')) {
      return `🧠 **How the Adaptive Learning Engine Works:**\n\nUnlike static video courses, SkillPath AI uses a dynamic knowledge graph. Whenever you complete a coding exercise or quiz:\n- It diagnoses your exact conceptual retention.\n- If you breeze through, it skips repetitive prerequisites.\n- If you struggle with an async bug or recursion, it injects an interactive 5-minute sandbox to cement the concept before moving forward!`;
    }

    if (q.includes('interview') || q.includes('job') || q.includes('hire') || q.includes('salary')) {
      return `🎯 **Career & Mock Interview Support:**\n\nOur AI Technical Interviewer simulates real FAANG / top startup screening rounds! It runs code execution benchmarks, grades problem decomposition, and evaluates your architectural design choices on an interactive canvas. Average salary increase for graduates is +42%!`;
    }

    return `✨ Great question! In SkillPath AI, every learning trajectory is synthesized around real-world projects.\n\nI can help you:\n• Generate a custom roadmap for **"${query.slice(0, 30)}"**\n• Match you with the highest-rated capstone course\n• Practice a quick technical quiz right now!\n\nWhat would you prefer to explore next?`;
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputVal;
    if (!text.trim() || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Realistic dummy delay (750ms)
    setTimeout(() => {
      const replyText = generateDummyResponse(text);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        time: 'Just now'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 750);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: "🔄 Chat reset! I'm ready for your next question. What technology or role would you like to explore?",
        time: 'Just now'
      }
    ]);
  };

  return (
    <aside aria-label="AI Learning Assistant" className="fixed bottom-5 right-5 z-50">
      
      {/* Floating Toggle Button (Visible when closed) */}
      {!isOpen && (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-purple-900/50 hover:shadow-purple-700/60 transition-all duration-300 hover:scale-105 active:scale-95 border border-purple-400/40"
            aria-label="Open AI Assistant"
          >
            <div className="relative flex items-center justify-center">
              <Bot className="w-5 h-5 text-white animate-bounce" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-pink-500 ring-2 ring-[#07090e] animate-ping" />
              )}
            </div>
            <span className="hidden sm:inline">Ask AI Assistant</span>
            <span className="px-2 py-0.5 rounded-full bg-black/30 text-[10px] uppercase font-bold text-cyan-300 border border-cyan-400/30">
              Online
            </span>
          </button>
        </div>
      )}

      {/* Expanded Chat Box Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] glass-panel-glow rounded-3xl border border-purple-500/40 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Chat Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border-b border-purple-900/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0b0f19] rounded-[9px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-purple-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-black" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Pathy AI
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30">
                    Bot
                  </span>
                </h3>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Ready to guide your path
                </p>
              </div>
            </div>

            {/* Actions: Reset & Close */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Suggestion Chips (only when few messages) */}
          {messages.length <= 2 && (
            <div className="px-3.5 py-2.5 bg-slate-900/60 border-b border-slate-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Suggested questions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-purple-900/40 text-purple-200 border border-slate-700 hover:border-purple-500/40 transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';

              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isAi ? 'items-start' : 'items-end flex-row-reverse'}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isAi 
                      ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[82%] rounded-2xl p-3 shadow-md ${
                      isAi
                        ? 'bg-slate-900/90 text-slate-200 border border-purple-900/30 whitespace-pre-wrap leading-relaxed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center border border-purple-500/20">
                  <Bot className="w-4 h-4 text-purple-300 animate-spin" />
                </div>
                <div className="px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-900/95 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask anything about coding, paths, or courses..."
                disabled={isTyping}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-40 text-white font-semibold transition-all shadow-md shrink-0 active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 px-1">
              <span>Powered by SkillPath Neural Core</span>
              <span>Press Enter to send</span>
            </div>
          </div>

        </div>
      )}

    </aside>
  );
}
