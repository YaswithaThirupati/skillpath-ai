# 🚀 SkillPath AI — Intelligent Learning Platform

> **Learn Smarter with SkillPath AI**: An AI-powered adaptive learning OS that synthesizes hyper-personalized curriculums, reviews your code in real time, and mentors you 24/7.

![SkillPath AI Preview](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80)

---

## 🌟 Key Features

1. **Hero Section ("Learn Smarter with SkillPath AI")**
   - High-impact headline with blue-purple gradients and glowing neon accents.
   - Interactive role input prompt ("Enter target skill or role...") with quick-suggestion chips.
   - Dual CTAs: *Explore Courses* and *Live Demo Roadmap*.
   - Live interactive learning dashboard preview showing milestone progression, 14-day streak, live code sandbox feedback, and salary projections.
   - Social proof metrics (42K+ learners, 94.8% completion rate, 4.95/5 star rating).

2. **Interactive Roadmap Tracks (Neural Pathing)**
   - Curated tracks for **AI Systems & LLM Engineer**, **Next-Gen Full Stack Architect**, and **Cloud Native & DevOps Engineer**.
   - Progressive milestone timeline with completion status, locked states, duration, estimated salary, and production capstone projects.
   - Interactive milestone deep dive drawer with mastered competencies.

3. **Platform Features Section**
   - 6 feature modules with glassmorphism styling, hover lift animations, and glowing badges:
     - 🧠 Neural Adaptive Curriculum
     - ⚡ Real-Time AI Code Reviewer
     - 🤖 Contextual AI Pair Programmer
     - 📁 Production-Grade Repositories
     - 💬 AI Technical Mock Interviews
     - 🏆 Verifiable On-Chain Credentials

4. **Popular Courses & AI Accelerators**
   - Category filtering: *All*, *AI & Data*, *Web & Full Stack*, *Cloud & DevOps*, *Cybersecurity*, *Mobile & App Dev*.
   - Instant search bar with multi-tag filtering.
   - Interactive course cards with duration, student enrollment counts, difficulty levels, instructor credentials, and prices.
   - **View Syllabus Modal**: Detailed week-by-week curriculum breakdown.
   - **Enroll Now**: Celebratory confetti explosion and active enrolled state toggle.

5. **Transparent Pricing Section**
   - **Monthly vs Annual toggle** with an automatic **25% discount** badge.
   - Three tiers:
     - **Starter Explorer ($0 Free Forever)**
     - **Pro Learner ($18/mo)** — *Most Popular with glowing purple gradient border*
     - **Team & Enterprise ($45/mo)**
   - 14-day 100% money-back guarantee badge.

6. **Floating AI Chat Assistant ("Pathy AI")**
   - Fixed bottom-right widget with glowing ping indicator and online status.
   - Expandable chat drawer with bot avatar, quick suggestion chips, and conversation reset.
   - Realistic typing indicator with simulated latency.
   - Intelligent keyword-based dummy AI response engine covering roadmaps, tech advice, pricing, and course recommendations.

7. **Footer & Global Features**
   - Interactive newsletter subscription with instant confirmation toast.
   - Operational system status indicator (`All Systems Operational 🟢`).
   - Quick navigation links & social channels.
   - Fully responsive across mobile, tablet, and widescreen displays.

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3 (Dark theme, blue-purple gradients, glassmorphism, custom scrollbar)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port indicated in your console) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📂 Project Structure

```text
skillpath-ai/
├── index.html                  # HTML entry point with fonts & metadata
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS Tailwind configuration
├── tailwind.config.js          # Tailwind theme & animation extensions
├── vite.config.js              # Vite server configuration
├── src/
│   ├── main.jsx                # React root mount
│   ├── index.css               # Global styling, glassmorphism & gradients
│   ├── App.jsx                 # App layout & global state
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glass navigation & mobile menu
│   │   ├── Hero.jsx            # Hero with dynamic interactive dashboard
│   │   ├── RoadmapPreview.jsx  # Interactive roadmap progression
│   │   ├── Features.jsx        # 6 platform capabilities with glow
│   │   ├── PopularCourses.jsx  # Filterable courses with confetti enrollment
│   │   ├── CourseModal.jsx     # Syllabus modal preview
│   │   ├── PathGeneratorModal.jsx # AI Roadmap synthesizer modal
│   │   ├── Pricing.jsx         # Monthly/Annual billing plans
│   │   ├── Testimonials.jsx    # Real-world reviews & career outcomes
│   │   ├── FAQ.jsx             # Accordion Q&A
│   │   ├── Footer.jsx          # Newsletter & footer links
│   │   └── ChatAssistant.jsx   # Floating AI Chatbot with dummy responses
│   └── data/
│       ├── coursesData.js      # Course catalog and syllabus
│       ├── roadmapsData.js     # Milestone tracks and salary estimates
│       └── testimonialsData.js # Student reviews and FAQs
└── dist/                       # Production build output
```
