export const COURSES = [
  {
    id: 'ai-agents-langchain',
    title: 'Autonomous AI Agents & Multi-Agent Systems',
    category: 'AI & Data',
    badge: 'Popular',
    level: 'Advanced',
    duration: '8 Weeks (36 hrs)',
    students: '12,420',
    rating: 4.95,
    reviews: 1840,
    price: '$49',
    originalPrice: '$129',
    instructor: {
      name: 'Dr. Aris Thorne',
      role: 'Ex-DeepMind Researcher',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    description: 'Build production-ready autonomous multi-agent swarms with LangGraph, AutoGen, and tool calling frameworks.',
    skills: ['LangChain', 'LangGraph', 'LlamaIndex', 'Python', 'Vector DBs', 'Agentic Workflows'],
    syllabus: [
      { week: 1, title: 'Foundations of Agentic AI & Tool Calling architectures' },
      { week: 2, title: 'Stateful Workflows with LangGraph & Cyclic Graphs' },
      { week: 3, title: 'Multi-Agent Collaboration & Supervisor Patterns' },
      { week: 4, title: 'Memory, RAG & Long-Context Retrieval Techniques' },
      { week: 5, title: 'Self-Correction, Reflection & Code Execution Sandboxes' },
      { week: 6, title: 'Capstone: Autonomous Full-Stack Software Engineer Swarm' }
    ]
  },
  {
    id: 'fullstack-nextjs-ai',
    title: 'Full-Stack Next.js 15 & AI SaaS Architecture',
    category: 'Web & Full Stack',
    badge: 'Bestseller',
    level: 'Intermediate',
    duration: '10 Weeks (48 hrs)',
    students: '19,830',
    rating: 4.92,
    reviews: 2410,
    price: '$59',
    originalPrice: '$149',
    instructor: {
      name: 'Elena Rostova',
      role: 'Principal Engineer at Vercel Partner',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
    },
    description: 'Architect scalable AI SaaS apps with Next.js 15 App Router, Server Actions, Stripe, Prisma, and Vercel AI SDK.',
    skills: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Stripe Billing', 'PostgreSQL', 'Vercel AI SDK'],
    syllabus: [
      { week: 1, title: 'Modern React 19 & Next.js 15 Server Components Deep Dive' },
      { week: 2, title: 'Type-Safe Data Layer: Prisma, Neon PostgreSQL & Migrations' },
      { week: 3, title: 'Streaming AI Responses & UI Generative Components' },
      { week: 4, title: 'Authentication, Role-Based Access & Organization Workspaces' },
      { week: 5, title: 'Stripe Subscriptions, Webhooks & Metered AI Token Usage' },
      { week: 6, title: 'Production Deployment, Edge Caching & Observability' }
    ]
  },
  {
    id: 'deep-learning-transformers',
    title: 'Modern Deep Learning & Fine-Tuning LLMs',
    category: 'AI & Data',
    badge: 'Trending',
    level: 'Advanced',
    duration: '12 Weeks (54 hrs)',
    students: '9,510',
    rating: 4.98,
    reviews: 1320,
    price: '$69',
    originalPrice: '$169',
    instructor: {
      name: 'Marcus Chen',
      role: 'Staff ML Engineer at Anthropic',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    description: 'Master Transformer architectures, LoRA/QLoRA parameter-efficient fine-tuning, DPO, and GPU cluster optimization.',
    skills: ['PyTorch', 'Hugging Face', 'LoRA / QLoRA', 'vLLM', 'CUDA Basics', 'Weights & Biases'],
    syllabus: [
      { week: 1, title: 'Transformer Math: Multi-Head Attention & Rotary Embeddings' },
      { week: 2, title: 'Dataset Preparation, Tokenization & Synthetic Data Generation' },
      { week: 3, title: 'PEFT: LoRA, QLoRA & Quantization with BitsAndBytes' },
      { week: 4, title: 'RLHF, DPO (Direct Preference Optimization) & Alignment' },
      { week: 5, title: 'High-Throughput Inference with vLLM & TensorRT-LLM' },
      { week: 6, title: 'Deploying Custom Models to RunPod & AWS SageMaker' }
    ]
  },
  {
    id: 'cloud-kubernetes-devops',
    title: 'Cloud-Native Platform Engineering & Kubernetes',
    category: 'Cloud & DevOps',
    badge: 'High Salary Track',
    level: 'Intermediate',
    duration: '9 Weeks (40 hrs)',
    students: '14,190',
    rating: 4.89,
    reviews: 1980,
    price: '$49',
    originalPrice: '$119',
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Cloud Architect & CNCF Ambassador',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    description: 'Design zero-downtime microservice clusters with Kubernetes, Terraform, ArgoCD GitOps, and Prometheus monitoring.',
    skills: ['Kubernetes (K8s)', 'Terraform', 'Docker', 'ArgoCD', 'Prometheus & Grafana', 'AWS / GCP'],
    syllabus: [
      { week: 1, title: 'Containerization Best Practices & Multi-Stage Builds' },
      { week: 2, title: 'K8s Cluster Architecture: Pods, Deployments & Ingress' },
      { week: 3, title: 'Infrastructure as Code with Terraform & AWS EKS' },
      { week: 4, title: 'Automated GitOps Pipelines using ArgoCD & Helm' },
      { week: 5, title: 'Observability: Metrics, OpenTelemetry Traces & Grafana Dashboards' },
      { week: 6, title: 'Zero-Trust Security, Service Meshes (Istio) & Disaster Recovery' }
    ]
  },
  {
    id: 'ai-cybersecurity-defense',
    title: 'AI-Driven Threat Intelligence & Ethical Hacking',
    category: 'Cybersecurity',
    badge: 'New',
    level: 'Intermediate',
    duration: '8 Weeks (32 hrs)',
    students: '7,340',
    rating: 4.91,
    reviews: 860,
    price: '$45',
    originalPrice: '$110',
    instructor: {
      name: 'Vikram Patel',
      role: 'CISO Advisor & Red Team Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    description: 'Defend enterprise infrastructure using LLM security scanners, prompt injection defense, and automated SIEM detection.',
    skills: ['Penetration Testing', 'OWASP Top 10 for LLMs', 'SIEM & SOC', 'Network Security', 'Python Hacking'],
    syllabus: [
      { week: 1, title: 'Threat Modeling & Modern Attack Surfaces in 2026' },
      { week: 2, title: 'Prompt Injections, Jailbreaking & LLM Red Teaming' },
      { week: 3, title: 'Automated Vulnerability Scanning with Python & Burp Suite' },
      { week: 4, title: 'Cloud IAM Privilege Escalation & Detection Rules' },
      { week: 5, title: 'AI-Powered Anomaly Detection in Enterprise SOCs' },
      { week: 6, title: 'Incident Response Simulation & Automated Containment' }
    ]
  },
  {
    id: 'react-native-mobile-ai',
    title: 'Cross-Platform React Native & On-Device AI',
    category: 'Mobile & App Dev',
    badge: 'Hot',
    level: 'Beginner to Intermediate',
    duration: '7 Weeks (30 hrs)',
    students: '8,920',
    rating: 4.88,
    reviews: 1140,
    price: '$39',
    originalPrice: '$99',
    instructor: {
      name: 'Sofia Martinez',
      role: 'Lead Mobile Architect',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
    },
    description: 'Ship slick iOS & Android apps with Expo, React Native, gesture animations, and local on-device small language models.',
    skills: ['React Native', 'Expo Router', 'On-Device SLMs', 'Reanimated 3', 'App Store Deployments'],
    syllabus: [
      { week: 1, title: 'Expo Router v4, Native Components & Layouts' },
      { week: 2, title: 'Fluid Gestures and 60fps Micro-Interactions with Reanimated' },
      { week: 3, title: 'Offline-First Sync with WatermelonDB & SQLite' },
      { week: 4, title: 'Embedding Local On-Device AI Models (ExecuTorch / MLC-LLM)' },
      { week: 5, title: 'In-App Purchases with RevenueCat & Push Notifications' },
      { week: 6, title: 'Production App Store & Google Play Automated CI/CD' }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'AI & Data',
  'Web & Full Stack',
  'Cloud & DevOps',
  'Cybersecurity',
  'Mobile & App Dev'
];
