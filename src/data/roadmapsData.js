export const ROADMAP_TRACKS = [
  {
    id: 'ai-engineer',
    name: 'AI Systems & LLM Engineer',
    icon: 'Sparkles',
    duration: '4-6 Months',
    salary: '$145k - $210k',
    difficulty: 'Intermediate to Advanced',
    description: 'From deep learning foundations to building production agentic swarms and fine-tuning custom models.',
    milestones: [
      {
        phase: 'Phase 1',
        title: 'Python Mastery & Vector Embeddings',
        time: 'Weeks 1-4',
        status: 'completed',
        skills: ['Python 3.12+', 'NumPy & PyTorch', 'Sentence Transformers', 'ChromaDB / Pinecone'],
        project: 'Semantic Code Search Engine with Hybrid RAG'
      },
      {
        phase: 'Phase 2',
        title: 'Agentic Workflows & Multi-Agent Swarms',
        time: 'Weeks 5-8',
        status: 'in-progress',
        skills: ['LangGraph', 'Function Calling', 'State Persistence', 'Human-in-the-Loop'],
        project: 'Autonomous Technical Due Diligence Agent'
      },
      {
        phase: 'Phase 3',
        title: 'Model Fine-Tuning & Quantization',
        time: 'Weeks 9-14',
        status: 'locked',
        skills: ['LoRA / QLoRA', 'Axolotl / Unsloth', 'GGUF / AWQ Formats', 'Evaluation Evals'],
        project: 'Domain-Specialized Legal & Medical Assistant Model'
      },
      {
        phase: 'Phase 4',
        title: 'Production LLMOps & Streaming Inference',
        time: 'Weeks 15-20',
        status: 'locked',
        skills: ['vLLM Server', 'Triton Inference Server', 'LangSmith Observability', 'Guardrails AI'],
        project: 'High-Concurrency Enterprise AI Gateway'
      }
    ]
  },
  {
    id: 'fullstack-dev',
    name: 'Next-Gen Full Stack Architect',
    icon: 'Code2',
    duration: '3-5 Months',
    salary: '$120k - $180k',
    difficulty: 'Beginner to Intermediate',
    description: 'Build hyper-fast full-stack applications with React 19, Next.js 15, TypeScript, and edge databases.',
    milestones: [
      {
        phase: 'Phase 1',
        title: 'Modern TypeScript & Component Architecture',
        time: 'Weeks 1-4',
        status: 'completed',
        skills: ['TypeScript Strict Mode', 'React 19 Hooks', 'Tailwind CSS v4', 'Zustand State'],
        project: 'Real-Time Collaborative Kanban Board'
      },
      {
        phase: 'Phase 2',
        title: 'Next.js App Router & Server Actions',
        time: 'Weeks 5-8',
        status: 'in-progress',
        skills: ['Server Components', 'Streaming SSR', 'NextAuth / Clerk', 'Prisma ORM'],
        project: 'Multi-Tenant SaaS with Stripe Billing'
      },
      {
        phase: 'Phase 3',
        title: 'Distributed Systems & Edge Database',
        time: 'Weeks 9-12',
        status: 'locked',
        skills: ['Neon Postgres', 'Redis Caching', 'Cloudflare Workers', 'WebSockets / tRPC'],
        project: 'Sub-Millisecond Global Chat & Presence Engine'
      },
      {
        phase: 'Phase 4',
        title: 'Security, Testing & Performance Tuning',
        time: 'Weeks 13-16',
        status: 'locked',
        skills: ['Vitest & Playwright', 'OWASP Top 10', 'Core Web Vitals', 'CI/CD GitHub Actions'],
        project: 'Enterprise E-Commerce Microfrontend System'
      }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Native & DevOps Engineer',
    icon: 'Cloud',
    duration: '4-5 Months',
    salary: '$135k - $195k',
    difficulty: 'Intermediate',
    description: 'Automate infrastructure with Terraform, orchestrate microservices with Kubernetes, and maintain 99.99% uptime.',
    milestones: [
      {
        phase: 'Phase 1',
        title: 'Linux Systems & Docker Containerization',
        time: 'Weeks 1-3',
        status: 'completed',
        skills: ['Bash Scripting', 'Multi-Stage Dockerfiles', 'Docker Compose', 'Linux Kernel Cgroups'],
        project: 'Hardened Containerized Microservices Mesh'
      },
      {
        phase: 'Phase 2',
        title: 'Kubernetes Cluster Orchestration',
        time: 'Weeks 4-8',
        status: 'in-progress',
        skills: ['K8s Deployments & Services', 'Ingress NGINX', 'Helm Charts', 'ConfigMaps & Secrets'],
        project: 'Zero-Downtime Blue/Green Deployment Cluster'
      },
      {
        phase: 'Phase 3',
        title: 'Infrastructure as Code & GitOps',
        time: 'Weeks 9-13',
        status: 'locked',
        skills: ['Terraform Modular Code', 'AWS EKS / GCP GKE', 'ArgoCD', 'Vault Secrets'],
        project: 'Self-Healing Cloud Infrastructure in Multi-Region'
      },
      {
        phase: 'Phase 4',
        title: 'Full-Stack Observability & SRE',
        time: 'Weeks 14-18',
        status: 'locked',
        skills: ['Prometheus & Grafana', 'OpenTelemetry Tracing', 'PagerDuty On-Call Playbooks', 'Chaos Mesh'],
        project: 'Enterprise SRE Dashboard with Automated Remediation'
      }
    ]
  }
];
