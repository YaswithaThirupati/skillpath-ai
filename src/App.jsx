import React, { useState, useEffect } from 'react';

function Hero({ onOpenPathModal, userName, setUserName }) {
  const [inputValue, setInputValue] = useState('');
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


// ROADMAP & DURATION DATA FLOW ENGINE
const getRoadmap = (roleText) => {
    const trimmed = (roleText || '').trim();
    const roleTitle = trimmed || "Your Role";
    const titleCap = roleTitle.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    const raw = trimmed.toLowerCase();

    // 1. Software Tester / QA Engineer / SDET
    if (/\b(qa|sdet)\b|quality\s*assurance|\b(test|tester|testing)\b/i.test(raw)) {
      return {
        weeks: '12 Weeks',
        score: '95% Match',
        milestones: [
          {
            phase: `Phase 1 • Manual Testing & QA Fundamentals`,
            sub: 'Core QA & Defect Lifecycle',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Every QA engineer must master requirements analysis, test planning, and manual test case execution',
            outcome: 'Write structured test cases, report defects in Jira, and perform API testing with Postman',
            topics: [
              { name: 'Manual Testing & SDLC/STLC', what: 'Black-box testing, test case design, boundary value analysis' },
              { name: 'Bug Tracking & Jira Management', what: 'Defect lifecycle, bug priority/severity, writing reproducible bug tickets' },
              { name: 'API Testing with Postman', what: 'REST endpoints, HTTP request methods, status codes, response assertions' }
            ]
          },
          {
            phase: `Phase 2 • Test Automation Core with Selenium`,
            sub: 'Programming & Web Automation',
            duration: 'Week 4-6 • 3 Weeks',
            why: 'Automation reduces repetitive manual cycles and is required by over 80% of hiring companies',
            outcome: 'Automate browser testing using Selenium WebDriver and structured assertion frameworks',
            topics: [
              { name: 'Java / Python for Automation', what: 'Core OOP concepts, exception handling, data structures for test scripts' },
              { name: 'Selenium WebDriver Core', what: 'Locators (XPath, CSS), waits, window handles, web element actions' },
              { name: 'TestNG / PyTest Frameworks', what: 'Test annotations, assertions, parallel execution, HTML reporting' }
            ]
          },
          {
            phase: `Phase 3 • Modern Automation & Performance Testing`,
            sub: 'Fast E2E & Backend QA',
            duration: 'Week 7-9 • 3 Weeks',
            why: 'Modern web applications require fast headless testing, automated APIs, and load resilience',
            outcome: 'Automate API regression suites and measure load capacity with JMeter',
            topics: [
              { name: 'Playwright & Cypress Testing', what: 'Next-gen browser automation, auto-waiting, network intercepting' },
              { name: 'API Automation with RestAssured', what: 'Automated REST API testing, payload validation, token authentication' },
              { name: 'Performance Testing with JMeter', what: 'Load testing, stress testing, response times, throughput metrics' }
            ]
          },
          {
            phase: `Phase 4 • CI/CD Pipelines & Capstone Framework`,
            sub: 'DevOps for QA & Portfolio Ready',
            duration: 'Week 10-12 • 3 Weeks',
            why: 'Real-world QA engineers integrate automated test suites into continuous deployment pipelines',
            outcome: 'Build and deploy a complete hybrid test automation framework on GitHub with CI/CD',
            topics: [
              { name: 'Git & GitHub for QA Teams', what: 'Test script version control, branch management, pull request reviews' },
              { name: 'CI/CD Pipeline with Jenkins & Actions', what: 'Triggering automated test runs on git push and reporting pass/fail status' },
              { name: 'Hybrid Test Framework Capstone', what: 'Page Object Model (POM) framework with data-driven tests and reporting' }
            ]
          }
        ]
      };
    }

    // 2. Cybersecurity Analyst / InfoSec / SOC
    if (/\b(cyber|cybersecurity|infosec|soc|penetration|pentest|ethical\s*hack|security\s*analyst)\b/i.test(raw)) {
      return {
        weeks: '14 Weeks',
        score: '96% Match',
        milestones: [
          {
            phase: `Phase 1 • Networking & Security Fundamentals`,
            sub: 'Core Systems & Protocols',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Understanding network architecture and system internals is critical to detecting intrusions',
            outcome: 'Analyze network packets with Wireshark and secure Linux/Windows environments',
            topics: [
              { name: 'Network Protocols & Wireshark', what: 'TCP/IP, OSI model, DNS, packet capture analysis, network scanning' },
              { name: 'Linux & Windows Security', what: 'User permissions, shell hardening, access control lists, CLI security' },
              { name: 'Security Principles & Cryptography', what: 'CIA triad, symmetric/asymmetric encryption, hashing, PKI infrastructure' }
            ]
          },
          {
            phase: `Phase 2 • SOC Operations & Threat Detection`,
            sub: 'SIEM Tools & Incident Response',
            duration: 'Week 4-7 • 4 Weeks',
            why: 'Security Operations Centers require real-time log monitoring and rapid threat triage',
            outcome: 'Monitor alerts in Splunk, analyze malicious behavior, and map attacks using MITRE ATT&CK',
            topics: [
              { name: 'SIEM & Log Analysis with Splunk', what: 'Ingesting syslogs, creating alert rules, investigating suspicious events' },
              { name: 'MITRE ATT&CK & Threat Intelligence', what: 'Adversary tactics, techniques, IOC identification, threat feeds' },
              { name: 'Incident Response & Triage', what: 'Phishing investigation, malware analysis basics, containment playbooks' }
            ]
          },
          {
            phase: `Phase 3 • Vulnerability Assessment & Defense`,
            sub: 'Scanning & Hardening',
            duration: 'Week 8-11 • 4 Weeks',
            why: 'Proactive vulnerability management prevents exploits before attackers discover them',
            outcome: 'Scan networks with Nessus and audit web applications against OWASP Top 10 vulnerabilities',
            topics: [
              { name: 'Vulnerability Scanning with Nessus', what: 'Scanning network assets, CVSS scoring, patch prioritization' },
              { name: 'OWASP Top 10 Web Security', what: 'SQL injection, XSS, broken access control, CSRF mitigation' },
              { name: 'Firewalls, IDS/IPS & Defense-in-Depth', what: 'Configuring firewall rules, Snort IDS, endpoint detection & response (EDR)' }
            ]
          },
          {
            phase: `Phase 4 • Security Capstone & Audit Defense`,
            sub: 'Live Incident Portfolio',
            duration: 'Week 12-14 • 3 Weeks',
            why: 'Hiring teams assess practical incident response playbooks and audit reporting skills',
            outcome: 'Produce a comprehensive security audit report and complete an end-to-end SOC triage simulation',
            topics: [
              { name: 'SOC Incident Triage Simulation', what: 'Hands-on enterprise attack simulation and remediation report' },
              { name: 'Enterprise Security Audit Report', what: 'Writing executive risk assessments and remediation recommendations' },
              { name: 'CompTIA Security+ / CySA+ Defense', what: 'Certification domains review, technical interview defense, scenario questions' }
            ]
          }
        ]
      };
    }

    // 3. UI/UX Designer / Product Designer
    if (/\b(ui|ux|ui\/ux|user\s*experience|user\s*interface|product\s*design(er)?|figma)\b/i.test(raw)) {
      return {
        weeks: '12 Weeks',
        score: '94% Match',
        milestones: [
          {
            phase: `Phase 1 • UX Research & User-Centered Design`,
            sub: 'Empathy to Structure',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Great design starts with deep user empathy, research validation, and information architecture',
            outcome: 'Conduct user interviews, build user personas, and create low-fidelity wireframes',
            topics: [
              { name: 'User Research & User Personas', what: 'Conducting user interviews, empathy mapping, identifying pain points' },
              { name: 'Information Architecture & User Journeys', what: 'Site maps, user flows, task analysis, card sorting exercises' },
              { name: 'Low-Fidelity Wireframing', what: 'Rapid paper sketching, Balsamiq/Figma structural wireframing' }
            ]
          },
          {
            phase: `Phase 2 • UI Design Mastery with Figma`,
            sub: 'Visual Design & Design Systems',
            duration: 'Week 4-6 • 3 Weeks',
            why: 'Figma is the global industry standard for professional digital product interfaces',
            outcome: 'Design scalable UI components with auto-layout, design tokens, and typography systems',
            topics: [
              { name: 'Figma Auto-Layout & Constraints', what: 'Responsive frames, flex alignments, spacing tokens, adaptive layouts' },
              { name: 'Design Systems & Component Libraries', what: 'Color palettes, typography hierarchies, reusable components, variants' },
              { name: 'Visual Hierarchy & Accessibility (WCAG)', what: 'Contrast ratios, accessibility standards, visual balance, typography rules' }
            ]
          },
          {
            phase: `Phase 3 • Interactive Prototyping & Usability Testing`,
            sub: 'Motion & Validation',
            duration: 'Week 7-9 • 3 Weeks',
            why: 'Interactive prototypes validate interactions with users and stakeholders before engineering begins',
            outcome: 'Build high-fidelity prototypes with micro-interactions and conduct usability testing sessions',
            topics: [
              { name: 'High-Fidelity Interactive Prototyping', what: 'Smart animate, interactive components, micro-interactions, page transitions' },
              { name: 'Usability Testing & Feedback Synthesis', what: 'Moderated testing sessions, heatmaps, synthesizing feedback into iterations' },
              { name: 'Developer Handoff & Documentation', what: 'Figma dev mode, design specs, asset export, redlining for engineers' }
            ]
          },
          {
            phase: `Phase 4 • Product Design Portfolio Capstone`,
            sub: 'Case Study & Presentation',
            duration: 'Week 10-12 • 3 Weeks',
            why: 'A portfolio with detailed problem-solving case studies is essential to land design roles',
            outcome: 'Publish a polished UX case study and complete design portfolio ready for recruiter reviews',
            topics: [
              { name: 'End-to-End Mobile App Case Study', what: 'Complete design lifecycle from research to final high-fidelity Figma prototype' },
              { name: 'Portfolio Website & Case Study Storytelling', what: 'Structuring UX case studies, showing process, business impact, and iterations' },
              { name: 'Design Interview Defense & Whiteboard Challenge', what: 'App critique exercises, whiteboard design challenges, portfolio presentation' }
            ]
          }
        ]
      };
    }

    // 4. DevOps Engineer / SRE / Platform
    if (/\b(devops|sre|platform\s*engineer|site\s*reliability|kubernetes|k8s|infrastructure)\b/i.test(raw)) {
      return {
        weeks: '14 Weeks',
        score: '95% Match',
        milestones: [
          {
            phase: `Phase 1 • Linux Systems & Containerization`,
            sub: 'Foundations & Packaging',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Containers and command-line Linux are the core building blocks of modern cloud platforms',
            outcome: 'Write Bash automation scripts and package applications into optimized Docker containers',
            topics: [
              { name: 'Linux System Administration & Bash', what: 'Process management, networking commands, storage, shell scripting' },
              { name: 'Docker & Multi-Stage Builds', what: 'Dockerfiles, container caching, multi-stage optimization, image security' },
              { name: 'Docker Compose & Local Networking', what: 'Multi-service stacks, environment configurations, persistent volumes' }
            ]
          },
          {
            phase: `Phase 2 • CI/CD Pipelines & Git Workflows`,
            sub: 'Automated Delivery',
            duration: 'Week 4-7 • 4 Weeks',
            why: 'Continuous integration and deployment pipelines eliminate manual release errors',
            outcome: 'Build automated build, test, and release pipelines using GitHub Actions and Jenkins',
            topics: [
              { name: 'Git Branching & Release Workflows', what: 'GitFlow, trunk-based development, semantic versioning, pull request gates' },
              { name: 'GitHub Actions & CI Pipelines', what: 'Workflows, triggers, matrix testing, secret management, artifact publishing' },
              { name: 'Jenkins & Pipeline-as-Code', what: 'Jenkinsfile syntax, declarative pipelines, automated container deployment' }
            ]
          },
          {
            phase: `Phase 3 • Infrastructure as Code & Kubernetes`,
            sub: 'Terraform & Orchestration',
            duration: 'Week 8-11 • 4 Weeks',
            why: 'Modern teams declare all infrastructure via code and orchestrate containers with Kubernetes',
            outcome: 'Provision cloud infrastructure using Terraform and deploy microservices on Kubernetes',
            topics: [
              { name: 'Terraform Infrastructure as Code (IaC)', what: 'State management, modules, providers, provisioning AWS/cloud resources' },
              { name: 'Kubernetes Cluster Architecture', what: 'Pods, Deployments, Services, ConfigMaps, Secrets, Ingress controllers' },
              { name: 'Helm Package Manager & GitOps', what: 'Helm charts, templating deployments, ArgoCD continuous delivery' }
            ]
          },
          {
            phase: `Phase 4 • Observability, SRE & Production Capstone`,
            sub: 'Monitoring & Reliability',
            duration: 'Week 12-14 • 3 Weeks',
            why: 'Maintaining 99.99% uptime requires automated monitoring, alerting, and incident runbooks',
            outcome: 'Deploy a zero-downtime microservices cluster with Prometheus monitoring and Grafana dashboards',
            topics: [
              { name: 'Prometheus & Grafana Observability', what: 'Metrics scraping, custom dashboards, alertmanager rules, SLOs/SLIs' },
              { name: 'Log Aggregation & Distributed Tracing', what: 'ELK / Loki logging, OpenTelemetry tracing, incident triage runbooks' },
              { name: 'Zero-Downtime Deployment Capstone', what: 'Blue/green or canary deployment pipeline on Kubernetes with automated rollback' }
            ]
          }
        ]
      };
    }

    // 5. Teacher / Educator / Instructional Designer
    if (/\b(teach|teacher|teaching|educator|professor|instructor|instructional\s*design(er)?)\b/i.test(raw)) {
      return {
        weeks: '12 Weeks',
        score: '95% Match',
        milestones: [
          {
            phase: `Phase 1 • Educational Psychology & Pedagogy Foundations`,
            sub: 'Learning Science & Methods',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Effective teaching begins with understanding cognitive development and educational theories',
            outcome: 'Apply Bloom’s Taxonomy and differentiated instruction techniques to diverse student profiles',
            topics: [
              { name: 'Pedagogy & Learning Theories', what: 'Bloom’s Taxonomy, constructivism, active learning, cognitive load theory' },
              { name: 'Classroom Management & Culture', what: 'Setting expectations, positive reinforcement, conflict resolution, student motivation' },
              { name: 'Differentiated Learning Strategies', what: 'Adapting instruction for diverse paces, IEPs, learning styles, and inclusion' }
            ]
          },
          {
            phase: `Phase 2 • Curriculum Design & Objective-Driven Lesson Planning`,
            sub: 'Instructional Structure',
            duration: 'Week 4-6 • 3 Weeks',
            why: 'Clear lesson structure and measurable learning objectives ensure consistent student mastery',
            outcome: 'Create comprehensive unit plans, interactive teaching aids, and rubric-based assessments',
            topics: [
              { name: 'Curriculum & Lesson Planning', what: 'Backward design (UbD), SMART learning objectives, daily lesson schedules' },
              { name: 'Interactive Teaching Materials', what: 'Engaging visual aids, structured worksheets, group activities, experiential tasks' },
              { name: 'Rubric & Assessment Design', what: 'Formative assessments, summative exams, holistic and analytical rubrics' }
            ]
          },
          {
            phase: `Phase 3 • EdTech Tools & Hybrid Delivery Methods`,
            sub: 'Digital Education Technology',
            duration: 'Week 7-9 • 3 Weeks',
            why: 'Modern classrooms blend interactive technology with face-to-face instruction for higher engagement',
            outcome: 'Deliver lessons through Learning Management Systems (LMS) and interactive digital teaching tools',
            topics: [
              { name: 'LMS Platforms (Google Classroom / Canvas)', what: 'Class setup, assignment distribution, grading workflows, parent communication' },
              { name: 'Digital Engagement Tools (Kahoot / Nearpod)', what: 'Gamified quizzes, interactive presentations, student polling, digital whiteboards' },
              { name: 'Remote & Blended Learning Best Practices', what: 'Synchronous vs asynchronous pacing, hybrid engagement, digital classroom etiquette' }
            ]
          },
          {
            phase: `Phase 4 • Student Evaluation & Teaching Practicum Capstone`,
            sub: 'Practicum & Professional Portfolio',
            duration: 'Week 10-12 • 3 Weeks',
            why: 'Demonstrated instructional delivery and reflective practice establish professional readiness',
            outcome: 'Complete an end-to-end teaching unit with recorded mock demonstrations and student progress portfolios',
            topics: [
              { name: 'Full Unit Curriculum Capstone', what: 'Complete 4-week thematic unit plan with objectives, materials, and assessments' },
              { name: 'Mock Teaching Demonstration & Video Analysis', what: 'Delivering recorded micro-teaching sessions, self-reflection, peer review' },
              { name: 'Teaching Philosophy & Interview Portfolio', what: 'Statement of teaching philosophy, sample lesson artifacts, interview preparation' }
            ]
          }
        ]
      };
    }

    // 6. Data Analyst / Business Analyst / BI Analyst
    if (/\b(data\s*analyst|data\s*analysis|business\s*analyst|bi\s*analyst)\b/i.test(raw) || (raw.includes('analyst') && !raw.includes('test') && !raw.includes('sec'))) {
      return {
        weeks: '12 Weeks',
        score: '95% Match',
        milestones: [
          {
            phase: `Phase 1 • Data Analytics Foundations & Spreadsheets`,
            sub: 'Basics to Strong Base',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Every Data Analyst must know spreadsheet manipulation, basic querying, and statistical distributions',
            outcome: 'Clean and summarize tabular data in Excel and write foundational SQL queries',
            topics: [
              { name: 'Excel Advanced & Power Query', what: 'VLOOKUP, XLOOKUP, Pivot Tables, data cleaning, automated transforms' },
              { name: 'SQL Querying Basics', what: 'SELECT, WHERE, JOINs, GROUP BY, aggregations, database relationships' },
              { name: 'Statistics for Data Analysis', what: 'Mean, median, standard deviation, probability, hypothesis testing fundamentals' }
            ]
          },
          {
            phase: `Phase 2 • Python for Data Wrangling & Analysis`,
            sub: 'Pandas & Exploratory Analysis',
            duration: 'Week 4-6 • 3 Weeks',
            why: 'Python handles massive datasets that exceed spreadsheet limits and automates repetitive analysis',
            outcome: 'Process thousands of records with Pandas and conduct exploratory data analysis (EDA)',
            topics: [
              { name: 'Python Pandas & NumPy', what: 'DataFrames, filtering, handling missing data, vectorization, transforms' },
              { name: 'Exploratory Data Analysis (EDA)', what: 'Visualizing distributions, correlations, outliers using Seaborn and Matplotlib' },
              { name: 'Advanced SQL for Analytics', what: 'Window functions, CTEs, self-joins, ranking, cohort analysis queries' }
            ]
          },
          {
            phase: `Phase 3 • Business Intelligence & Executive Dashboards`,
            sub: 'Power BI, Tableau & KPI Metrics',
            duration: 'Week 7-9 • 3 Weeks',
            why: 'Executives make strategic decisions based on interactive dashboards and clear KPI communication',
            outcome: 'Build interactive BI dashboards and present data-backed business recommendations',
            topics: [
              { name: 'Power BI & Tableau Mastery', what: 'Data modeling, DAX calculations, interactive visuals, dashboard UX' },
              { name: 'Business Metrics & KPI Tracking', what: 'Customer churn, LTV, CAC, revenue growth, funnel conversion rates' },
              { name: 'Data Storytelling & Executive Presentation', what: 'Translating charts into actionable business decisions and slide presentations' }
            ]
          },
          {
            phase: `Phase 4 • Capstone Portfolio & Interview Readiness`,
            sub: 'Real-World Projects',
            duration: 'Week 10-12 • 3 Weeks',
            why: 'A portfolio of end-to-end analytics case studies proves practical competence to hiring managers',
            outcome: 'Deliver complete business dashboard project on GitHub with verified certificate',
            topics: [
              { name: 'Sales & Customer BI Dashboard', what: 'Complete e-commerce sales and customer analytics dashboard with live filters' },
              { name: 'Customer Segmentation Analysis', what: 'RFM analysis and user cohort behavior study with actionable recommendations' },
              { name: 'Analytics Portfolio & Case Study Defense', what: 'Documenting project methodology on GitHub and technical interview preparation' }
            ]
          }
        ]
      };
    }

    // 7. Data Engineer / Big Data / ETL
    if (/\b(data\s*engineer(ing)?|big\s*data|etl|data\s*pipeline)\b/i.test(raw)) {
      return {
        weeks: '14 Weeks',
        score: '95% Match',
        milestones: [
          {
            phase: `Phase 1 • Data Engineering Foundations & Modeling`,
            sub: 'Advanced SQL & Data Modeling',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Robust schema design and optimized SQL form the foundation of any production data architecture',
            outcome: 'Design relational schemas, optimize SQL execution plans, and write modular Python ETL pipelines',
            topics: [
              { name: 'Advanced SQL & Query Optimization', what: 'Complex joins, partitioning, window functions, indexing, explain plans' },
              { name: 'Python for Data Engineering', what: 'OOP, file parsers (CSV/JSON/Parquet), batching, database connectors' },
              { name: 'Data Warehousing & Modeling', what: 'Star vs Snowflake schemas, dimensional modeling, slowly changing dimensions' }
            ]
          },
          {
            phase: `Phase 2 • Distributed Computing & Pipeline Orchestration`,
            sub: 'Apache Spark & Airflow',
            duration: 'Week 4-7 • 4 Weeks',
            why: 'Companies handle millions of rows requiring distributed computing and automated workflow scheduling',
            outcome: 'Transform big data with PySpark and orchestrate scheduled pipelines with Apache Airflow',
            topics: [
              { name: 'Apache Spark & PySpark', what: 'DataFrames, lazy execution, transformations, cluster compute, memory tuning' },
              { name: 'Workflow Orchestration with Airflow', what: 'DAGs, custom operators, sensor tasks, dependency scheduling, retries' },
              { name: 'Data Pipeline Design Patterns', what: 'Idempotency, data lineage, error handling, schema evolution' }
            ]
          },
          {
            phase: `Phase 3 • Cloud Data Lakes & Streaming Ingestion`,
            sub: 'Cloud Platforms & Kafka',
            duration: 'Week 8-11 • 4 Weeks',
            why: 'Enterprise data stacks live on cloud infrastructure with real-time event streaming',
            outcome: 'Stream data with Kafka and build transformed data models using dbt on cloud warehouses',
            topics: [
              { name: 'Cloud Data Warehouses (Snowflake / Redshift / BigQuery)', what: 'Compute-storage separation, clustering, role-based access control' },
              { name: 'dbt (Data Build Tool)', what: 'Modular SQL transformations, testing, documentation, incremental models' },
              { name: 'Real-Time Streaming with Kafka', what: 'Producers, consumers, topic partitioning, streaming ingestion pipelines' }
            ]
          },
          {
            phase: `Phase 4 • Lakehouse Capstone & System Design`,
            sub: 'Enterprise Production Pipeline',
            duration: 'Week 12-14 • 3 Weeks',
            why: 'Senior data engineering roles require system design knowledge and demonstrable end-to-end pipeline builds',
            outcome: 'Deploy a complete lakehouse pipeline with monitoring and architectural documentation',
            topics: [
              { name: 'End-to-End Lakehouse Project', what: 'Bronze/silver/gold layered pipeline from raw ingestion to reporting' },
              { name: 'Data Quality & Observability', what: 'Great Expectations, automated anomaly alerts, data SLA monitoring' },
              { name: 'Data Engineering System Design', what: 'High-throughput system architecture, disaster recovery, interview prep' }
            ]
          }
        ]
      };
    }

    // 8. AI / Machine Learning / Deep Learning / Data Science
    if (/\b(ai|ml|nlp|llm|genai)\b|machine\s*learning|deep\s*learning|artificial\s*intelligence|data\s*scien(ce|tist)/i.test(raw)) {
      return {
        weeks: '16 Weeks',
        score: '96% Match',
        milestones: [
          {
            phase: `Phase 1 • Mathematics & Classical Machine Learning`,
            sub: 'Math, Statistics & Scikit-Learn',
            duration: 'Week 1-4 • 4 Weeks',
            why: 'Mastering linear algebra, optimization, and classical algorithms is vital before moving to neural networks',
            outcome: 'Train and evaluate supervised and unsupervised machine learning algorithms using Scikit-Learn',
            topics: [
              { name: 'Linear Algebra & Optimization for ML', what: 'Vectors, matrix operations, gradients, gradient descent, loss functions' },
              { name: 'Feature Engineering & EDA', what: 'Data preprocessing, normalization, feature encoding, handling missing data' },
              { name: 'Scikit-Learn & Classical Algorithms', what: 'Linear/logistic regression, decision trees, random forests, XGBoost, cross-validation' }
            ]
          },
          {
            phase: `Phase 2 • Deep Learning & Neural Networks with PyTorch`,
            sub: 'PyTorch & Architectures',
            duration: 'Week 5-8 • 4 Weeks',
            why: 'Deep learning powers modern computer vision, NLP, and multimodal AI systems',
            outcome: 'Build and train custom neural networks in PyTorch using GPUs',
            topics: [
              { name: 'PyTorch Deep Learning Foundations', what: 'Tensors, autograd, Dataset/DataLoader, backpropagation, GPU acceleration' },
              { name: 'Computer Vision & CNN Architectures', what: 'Convolutional layers, pooling, transfer learning with ResNet/Vision Transformers' },
              { name: 'Optimization & Hyperparameter Tuning', what: 'AdamW, learning rate schedules, dropout, batch normalization, TensorBoard' }
            ]
          },
          {
            phase: `Phase 3 • Generative AI, Transformers & LLM Engineering`,
            sub: 'Transformers, RAG & Fine-Tuning',
            duration: 'Week 9-13 • 5 Weeks',
            why: 'Generative AI and Retrieval-Augmented Generation are the most sought-after industry skills',
            outcome: 'Build hybrid RAG systems and fine-tune open-weights LLMs for specialized tasks',
            topics: [
              { name: 'Transformers & Hugging Face', what: 'Attention mechanisms, BERT/GPT architectures, tokenizers, pipelines' },
              { name: 'Retrieval-Augmented Generation (RAG)', what: 'Vector databases (Pinecone/Chroma), semantic search, prompt orchestration' },
              { name: 'LLM Fine-Tuning & Quantization', what: 'LoRA, QLoRA, parameter-efficient fine-tuning, GGUF/AWQ deployment formats' }
            ]
          },
          {
            phase: `Phase 4 • MLOps, Model Serving & Capstone Application`,
            sub: 'Production AI Deployment',
            duration: 'Week 14-16 • 3 Weeks',
            why: 'Deploying, monitoring, and scaling models in production separates hobbyists from professional AI engineers',
            outcome: 'Deploy a complete production AI application with high-throughput API serving',
            topics: [
              { name: 'Model Serving with FastAPI & vLLM', what: 'High-throughput async inference, streaming token responses, containerization' },
              { name: 'MLOps & Model Monitoring', what: 'MLflow model registry, data drift tracking, LangSmith observability' },
              { name: 'Full-Stack GenAI Capstone Project', what: 'End-to-end autonomous agent or domain-specific assistant with web UI' }
            ]
          }
        ]
      };
    }

    // 9. Web Developer / Full Stack / Frontend / Backend
    if (/\b(web\s*dev(eloper)?|frontend|front\s*end|backend|back\s*end|full\s*stack|fullstack|react|node|javascript|typescript|mern|mean)\b/i.test(raw)) {
      return {
        weeks: '16 Weeks',
        score: '94% Match',
        milestones: [
          {
            phase: `Phase 1 • Modern Frontend Core & Component Architecture`,
            sub: 'HTML, Modern JS & React',
            duration: 'Week 1-4 • 4 Weeks',
            why: 'Clean DOM mastery, responsive CSS, and component state management are essential for modern web apps',
            outcome: 'Build responsive, accessible user interfaces using React and Tailwind CSS',
            topics: [
              { name: 'HTML5, Modern CSS & Tailwind CSS', what: 'Semantic layout, Flexbox, CSS Grid, mobile-first design, utility classes' },
              { name: 'Modern JavaScript (ES6+) & Async Programming', what: 'Promises, async/await, closures, array methods, DOM APIs' },
              { name: 'React.js & Component Architecture', what: 'Component state, props, hooks (useState, useEffect, useMemo), custom hooks' }
            ]
          },
          {
            phase: `Phase 2 • Backend Development & RESTful APIs`,
            sub: 'Node.js, Express & Databases',
            duration: 'Week 5-8 • 4 Weeks',
            why: 'Web applications require robust backend logic, data persistence, and secure authentication',
            outcome: 'Develop RESTful APIs in Node.js connected to PostgreSQL and MongoDB databases',
            topics: [
              { name: 'Node.js & Express API Framework', what: 'Routing, middleware, error handling, request validation, RESTful principles' },
              { name: 'PostgreSQL & MongoDB Database Integration', what: 'Relational vs document databases, CRUD operations, indexing, Prisma ORM' },
              { name: 'Authentication & Web Security', what: 'JWT tokens, bcrypt password hashing, CORS, cookies, input sanitization' }
            ]
          },
          {
            phase: `Phase 3 • Full-Stack Frameworks & TypeScript`,
            sub: 'Next.js App Router & State',
            duration: 'Week 9-12 • 4 Weeks',
            why: 'Production applications leverage server-side rendering, type safety, and global state management',
            outcome: 'Build type-safe full-stack web applications using Next.js and TypeScript',
            topics: [
              { name: 'Next.js App Router & Server Components', what: 'Server vs client components, streaming SSR, server actions, route handlers' },
              { name: 'TypeScript for Full-Stack Developers', what: 'Static types, interfaces, generics, type-safe API requests and responses' },
              { name: 'Global State Management & Caching', what: 'Zustand, React Query / TanStack Query, optimistic updates, cache invalidation' }
            ]
          },
          {
            phase: `Phase 4 • Production SaaS Capstone & Cloud Deployment`,
            sub: 'Containerization & Launch',
            duration: 'Week 13-16 • 4 Weeks',
            why: 'Recruiters evaluate live deployed full-stack products with automated CI/CD and clean code',
            outcome: 'Deploy a full-stack SaaS project with authentication, database, and payment integration',
            topics: [
              { name: 'Full-Stack SaaS Capstone Project', what: 'Complete web application with user auth, database, payment billing, and dashboard' },
              { name: 'Docker & Cloud Deployment', what: 'Containerizing web apps, deploying on Vercel/Render/AWS, environment secrets' },
              { name: 'CI/CD & Web Performance Optimization', what: 'GitHub Actions automation, Core Web Vitals, Lighthouse audits, SEO' }
            ]
          }
        ]
      };
    }

    // 10. Python Developer
    if (/\b(python(\s*dev(eloper)?)?)\b/i.test(raw)) {
      return {
        weeks: '12 Weeks',
        score: '95% Match',
        milestones: [
          {
            phase: `Phase 1 • Python Core Mastery & Object-Oriented Design`,
            sub: 'Advanced Syntax & Algorithms',
            duration: 'Week 1-3 • 3 Weeks',
            why: 'Writing idiomatic, clean Python and understanding algorithms is fundamental to backend software development',
            outcome: 'Write object-oriented Python modules and solve algorithmic problems efficiently',
            topics: [
              { name: 'Python Core & Advanced Syntax', what: 'Generators, decorators, context managers, type hints, list comprehensions' },
              { name: 'Object-Oriented Programming (OOP)', what: 'Classes, inheritance, polymorphism, magic methods, design patterns' },
              { name: 'Data Structures & Algorithms in Python', what: 'Lists, dicts, sets, stacks, queues, sorting, Big-O complexity analysis' }
            ]
          },
          {
            phase: `Phase 2 • Backend Frameworks & Database ORMs`,
            sub: 'FastAPI, Django & SQL',
            duration: 'Week 4-6 • 3 Weeks',
            why: 'Python developers build high-speed APIs, microservices, and database-driven web backends',
            outcome: 'Build asynchronous REST APIs using FastAPI and connect them to PostgreSQL via SQLAlchemy',
            topics: [
              { name: 'FastAPI & Pydantic Data Validation', what: 'Async route handlers, dependency injection, automatic Swagger/OpenAPI docs' },
              { name: 'PostgreSQL & SQLAlchemy ORM', what: 'Database schemas, relations, migrations with Alembic, query optimization' },
              { name: 'API Authentication & Security', what: 'OAuth2 with JWT, password hashing, rate limiting, secure headers' }
            ]
          },
          {
            phase: `Phase 3 • Concurrency, Testing & Background Task Queues`,
            sub: 'Asyncio, PyTest & Celery',
            duration: 'Week 7-9 • 3 Weeks',
            why: 'Production Python applications require automated testing and background worker queues for heavy tasks',
            outcome: 'Write automated test suites and process background tasks with Celery and Redis',
            topics: [
              { name: 'Asyncio & Concurrency in Python', what: 'Event loop, coroutines, async HTTP requests, threading vs multiprocessing' },
              { name: 'Automated Testing with PyTest', what: 'Unit tests, fixtures, test parameterization, mocking, code coverage' },
              { name: 'Background Workers with Celery & Redis', what: 'Task queues, delayed execution, periodic scheduled tasks, message brokers' }
            ]
          },
          {
            phase: `Phase 4 • Microservices, Docker & Production Capstone`,
            sub: 'Containerization & Deployment',
            duration: 'Week 10-12 • 3 Weeks',
            why: 'Packaging Python applications into Docker containers for cloud deployment is a standard industry expectation',
            outcome: 'Deploy a complete Python backend microservice on the cloud with automated GitHub Actions testing',
            topics: [
              { name: 'Docker & Containerization for Python', what: 'Multi-stage Dockerfiles, docker-compose, volume mounting, environment security' },
              { name: 'Python Microservice Capstone', what: 'Complete backend service with database, background worker, caching, and auth' },
              { name: 'CI/CD & Cloud Deployment', what: 'GitHub Actions automated testing, cloud deployment on Render/AWS, monitoring' }
            ]
          }
        ]
      };
    }

    // 11. Intelligent Dynamic Synthesizer for ANY OTHER ROLE (e.g. Teacher, Nurse, Barista, Drone Operator, etc.)
    return {
      weeks: '12 Weeks',
      score: '95% Match',
      milestones: [
        {
          phase: `Phase 1 • ${titleCap} Foundations & Core Methodologies`,
          sub: 'Fundamentals & Setup',
          duration: 'Week 1-3 • 3 Weeks',
          why: `Mastering foundational concepts and standard practices is essential for every ${titleCap}`,
          outcome: `Establish strong fundamental competency, industry terminology, and workflow setup`,
          topics: [
            { name: `${titleCap} Core Principles & Standards`, what: `Fundamental principles, industry standards, and operating methodologies for ${titleCap}` },
            { name: `Essential Tools & Working Environment`, what: `Key software, equipment, and resources utilized by professional ${titleCap}s` },
            { name: `Baseline Methodologies & Quality Basics`, what: `Standard operating procedures, quality baselines, and safety/ethics protocols` }
          ]
        },
        {
          phase: `Phase 2 • Applied Skills & Professional Workflow`,
          sub: 'Hands-on Execution',
          duration: 'Week 4-6 • 3 Weeks',
          why: `Industry execution requires transitioning from theory to structured day-to-day responsibilities`,
          outcome: `Execute hands-on practical tasks and solve real-world problems typical of a ${titleCap}`,
          topics: [
            { name: `Core Practical Execution & Tasks`, what: `Hands-on execution of daily ${titleCap} tasks with standard industry workflows` },
            { name: `Troubleshooting & Quality Control`, what: `Identifying defects, problem resolution strategies, and quality assurance` },
            { name: `Collaboration & Modern Workflow Tools`, what: `Team communication, documentation standards, and modern productivity tooling` }
          ]
        },
        {
          phase: `Phase 3 • Advanced Systems, Strategy & Compliance`,
          sub: 'Complex Scenarios',
          duration: 'Week 7-9 • 3 Weeks',
          why: `Senior-level performance demands handling complex scenarios, regulations, and optimization`,
          outcome: `Manage complex operational challenges, adhere to regulatory standards, and optimize processes`,
          topics: [
            { name: `Advanced Strategy & Problem Solving`, what: `Navigating complex case studies and edge-case operational challenges` },
            { name: `Industry Compliance, Ethics & Governance`, what: `Adhering to regulatory frameworks, security/safety standards, and compliance` },
            { name: `Performance Optimization & Metrics`, what: `Measuring performance outcomes, tracking key indicators, and workflow efficiency` }
          ]
        },
        {
          phase: `Phase 4 • ${titleCap} Capstone & Industry Readiness`,
          sub: 'Portfolio Ready',
          duration: 'Week 10-12 • 3 Weeks',
          why: `Demonstrating real-world capability with a comprehensive project proves employability to hiring managers`,
          outcome: `Complete an end-to-end portfolio project with documentation and interview presentation`,
          topics: [
            { name: `End-to-End ${titleCap} Capstone Project`, what: `Comprehensive real-world project demonstrating end-to-end practical competency` },
            { name: `Professional Portfolio & Case Study Documentation`, what: `Documenting methodologies, deliverables, results, and evidence of work` },
            { name: `Industry Review & Technical Interview Preparation`, what: `Technical defense, scenario walkthroughs, and career presentation` }
          ]
        }
      ]
    };
  };

function getRoadmapDuration(pathOrRoadmap, roleName) {
  if (!pathOrRoadmap && !roleName) return '12 Weeks';
  const milestones = Array.isArray(pathOrRoadmap) ? pathOrRoadmap : pathOrRoadmap?.milestones;
  if (Array.isArray(milestones) && milestones.length > 0) {
    let total = 0;
    for (const m of milestones) {
      const match = m?.duration?.match(/(\d+)\s*Weeks?/i);
      if (match) {
        total += parseInt(match[1], 10);
      }
    }
    if (total > 0) return total + ' Weeks';
    const last = milestones[milestones.length - 1];
    const endMatch = last?.duration?.match(/Week\s*\d+-(\d+)/i);
    if (endMatch) return endMatch[1] + ' Weeks';
  }
  const role = roleName || pathOrRoadmap?.targetRole;
  if (role && typeof role === 'string' && role.trim()) {
    const rm = getRoadmap(role);
    if (rm && rm.weeks) return rm.weeks;
  }
  if (pathOrRoadmap?.weeks) return pathOrRoadmap.weeks;
  if (pathOrRoadmap?.estimatedWeeks) return pathOrRoadmap.estimatedWeeks;
  return '12 Weeks';
}

// CERTIFICATE - 4 BLUE BORDERS - No signature - Your photo style + 4 borders
function CertificateModal({ isOpen, onClose, role, duration, userName }) {
  if (!isOpen) return null; 
  const displayName = userName?.trim() || 'Thirupati Yaswitha'; 
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
  const displayDuration = duration || getRoadmapDuration(null, role) || '12 Weeks';
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
              <p className="text-[17px] font-black text-black mt-2 capitalize">{role} - {displayDuration} Intensive</p>
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
  useEffect(()=>{ if(isOpen){ setRole(initialRole || ''); setGeneratedResult(null); } }, [isOpen, initialRole]); if(!isOpen) return null;
    const handleGenerate = (e) => { e.preventDefault(); if(!role.trim()) return; setIsGenerating(true); setTimeout(()=>{ const roadmap = getRoadmap(role); const exactDuration = getRoadmapDuration(roadmap, role); setIsGenerating(false); setGeneratedResult({ targetRole: role, estimatedWeeks: exactDuration, readinessScore: roadmap.score, milestones: roadmap.milestones }); }, 1000); };
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
  useEffect(()=>{ try{ const savedName = localStorage.getItem('skillPathUserName'); if(savedName) setUserName(savedName); const s = JSON.parse(localStorage.getItem('mySkillPath')||'null'); if(s) { const actualWeeks = getRoadmapDuration(s); if (s.estimatedWeeks !== actualWeeks) { s.estimatedWeeks = actualWeeks; localStorage.setItem('mySkillPath', JSON.stringify(s)); } setMyPath(s); } const p = JSON.parse(localStorage.getItem('myProgress')||'{}'); setProgress(p); const st = JSON.parse(localStorage.getItem('myStreak')||'{"count":0}'); setStreak(st); }catch{} }, []);
  const openPathModal = (role='') => { setInitialRole(role); setIsPathModalOpen(true); }; const showToast = (msg) => { setToast(msg); setTimeout(()=>setToast(''), 3500); };
  const totalTopics = myPath ? myPath.milestones.flatMap(m=>m.topics).length : 12; const completedCount = Object.keys(progress).filter(k=>progress[k]).length; const jobReadiness = Math.round((completedCount / totalTopics) * 100) || 0; const activeDuration = getRoadmapDuration(myPath);
  const handlePhaseComplete = () => { if(!myPath || !activePhase) return; const currentIndex = myPath.milestones.findIndex(m=>m.phase===activePhase.phase); setActivePhase(null); showToast(`${activePhase.phase} Completed!`); if(currentIndex+1<myPath.milestones.length){ setTimeout(()=>setActivePhase(myPath.milestones[currentIndex+1]), 600); } else { setTimeout(()=>{ showToast(`All Done! Certificate Ready!`); setShowCert(true); }, 800); } };
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between bg-slate-950/80 backdrop-blur border-b border-slate-800"><span className="font-extrabold">SkillPath AI</span><div className="flex gap-3 items-center"><span className="text-[10px] text-slate-400 hidden md:block">{userName}</span><span className="text-xs bg-orange-900/40 border border-orange-700/40 px-3 py-1 rounded-full">🔥 {streak.count} Day Streak</span><button onClick={()=>openPathModal('')} className="px-4 py-2 rounded-xl bg-blue-600 text-sm font-bold text-white">Get Started</button></div></nav>
      <Hero onOpenPathModal={openPathModal} userName={userName} setUserName={setUserName} />
      <FeaturesSection />
      {myPath && (<section id="my-path" className="px-6 py-8 max-w-6xl mx-auto"><div className="p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-purple-900/40 via-slate-900 to-blue-900/40 border border-purple-500/40"><div className="flex flex-wrap justify-between gap-4"><div><span className="text-[11px] font-bold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">ACTIVE PATH • {completedCount}/{totalTopics} • {userName}</span><h2 className="text-2xl md:text-3xl font-extrabold mt-3 capitalize">{myPath.targetRole} - 4 Phases Journey • {activeDuration} • {myPath.readinessScore || '95% Match'}</h2><div className="flex gap-2 mt-3 items-center"><div className="w-64 h-2.5 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{width: `${jobReadiness}%`}} /></div><span className="text-xs font-bold text-emerald-300">{jobReadiness}% Job Ready</span></div></div><div className="flex gap-2 flex-wrap"><button onClick={()=>setShowResume(true)} className="h-fit text-xs px-4 py-2.5 rounded-lg bg-blue-600 text-white font-bold">📄 Resume</button><button onClick={()=>setShowCert(true)} className="h-fit text-xs px-4 py-2.5 rounded-lg bg-yellow-600 text-white font-bold">🏆 Certificate - 4 Borders</button></div></div><div className="grid md:grid-cols-2 gap-4 mt-6">{myPath.milestones.map((m,i)=><div key={i} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800"><div className="flex justify-between"><div><div className="text-sm font-bold text-purple-300">{i+1}. {m.phase}</div><div className="text-[10px] text-slate-500">{m.sub} • {m.duration}</div></div></div><div className="mt-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800/50"><p className="text-[9px] font-bold text-blue-300">WHY: {m.why}</p><p className="text-[9px] font-bold text-emerald-300 mt-1">OUTCOME: {m.outcome}</p></div><div className="flex flex-wrap gap-1 mt-2">{m.topics.map((t,idx)=><span key={idx} className={`text-[10px] px-2 py-1 rounded-full border ${progress[t.name||t]?'bg-emerald-800/50 border-emerald-700 text-emerald-200':'bg-slate-800 border-slate-700 text-white'}`}>{progress[t.name||t]?'✅ ':''}{t.name||t}</span>)}</div></div>)}</div><div className="mt-6 flex gap-3"><button onClick={()=>setActivePhase(myPath.milestones[0])} className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm text-white">Continue Learning - Videos Working</button><button onClick={()=>setShowCert(true)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 font-bold text-sm text-white">Cert</button></div></div></section>)}
      <section className="px-6 py-16 text-center bg-slate-950 border-t border-slate-800"><h2 className="text-3xl font-black text-white">Ready? Original Style!</h2><p className="text-slate-400 mt-2 text-sm">6 Features in English + Certificate 4 Blue Borders + CLOSE button</p><button onClick={()=>openPathModal('')} className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white">Generate Exact Path →</button><p className="mt-10 text-[11px] text-slate-600">© 2026 SkillPath AI • Built by {userName}</p></section>
      {toast && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] bg-slate-900 border border-purple-500/30 px-5 py-3 rounded-2xl text-sm font-bold">{toast}</div>}
      <PathGeneratorModal isOpen={isPathModalOpen} onClose={()=>setIsPathModalOpen(false)} initialRole={initialRole} onNotify={showToast} />
      <PhaseModal isOpen={!!activePhase} onClose={()=>setActivePhase(null)} phase={activePhase} role={myPath?.targetRole||''} progress={progress} setProgress={setProgress} onComplete={handlePhaseComplete} />
      <CertificateModal isOpen={showCert} onClose={()=>setShowCert(false)} role={myPath?.targetRole||'Your Role'} duration={activeDuration} userName={userName} />
      <ResumeModal isOpen={showResume} onClose={()=>setShowResume(false)} role={myPath?.targetRole||''} progress={progress} userName={userName} />
    </div>
  );
}