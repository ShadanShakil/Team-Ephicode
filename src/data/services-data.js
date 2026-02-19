import { Code, Palette, Cpu, TrendingUp, BarChart, Video, Globe, Settings } from "lucide-react"

export const servicesData = [
  {
    slug: "tech-development",
    title: "Tech Development",
    description: "From MVP to enterprise scale — we build robust, scalable, and secure applications that handle millions of users without breaking a sweat.",
    icon: <Code className="w-6 h-6" />,
    features: [
      "Custom SaaS & Web Applications",
      "iOS & Android Mobile Development",
      "API Development & Third-Party Integration",
      "Cloud Infrastructure & DevOps (AWS, GCP)",
      "Enterprise Software & Backend Systems",
      "E-commerce Ecosystems",
    ],
    process: [
      { title: "Discovery", description: "We dive deep into your requirements, goals, and technical constraints to define scope." },
      { title: "Architecture", description: "We design a scalable, secure system architecture built for your growth trajectory." },
      { title: "Development", description: "Agile sprints with daily updates, code reviews, and continuous delivery." },
      { title: "Quality Assurance", description: "Rigorous automated and manual testing to ensure a bug-free, performant release." },
      { title: "Launch & Support", description: "Smooth go-live process with post-launch monitoring and ongoing support." },
    ]
  },
  {
    slug: "product-design",
    title: "Product Design",
    description: "We craft smart, clear product experiences that keep people engaged — through precision UX, UI, and interaction design that converts users into loyal fans.",
    icon: <Palette className="w-6 h-6" />,
    features: [
      "User Interface (UI) Design",
      "User Experience (UX) Research & Testing",
      "Prototyping & Interactive Wireframing",
      "Design Systems & Component Libraries",
      "Brand Identity & Visual Language",
      "Motion & Interaction Design",
    ],
    process: [
      { title: "Research", description: "Deep-dive into user behaviors, pain points, and competitive landscape." },
      { title: "Ideation", description: "Brainstorming sessions, sketches, and information architecture mapping." },
      { title: "Design", description: "Crafting pixel-perfect high-fidelity designs with your brand identity." },
      { title: "Prototyping", description: "Clickable, interactive prototypes for real user testing." },
      { title: "Handoff", description: "Developer-ready assets with detailed documentation and design tokens." },
    ]
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    description: "We leverage cutting-edge artificial intelligence to automate complex processes, surface actionable insights, and build smarter digital products.",
    icon: <Cpu className="w-6 h-6" />,
    features: [
      "Machine Learning Model Development",
      "Natural Language Processing (NLP) & LLMs",
      "Computer Vision Systems",
      "Predictive Analytics & Forecasting",
      "AI-Powered Chatbots & Assistants",
      "AI Strategy & Roadmapping",
    ],
    process: [
      { title: "Data Audit", description: "Evaluating data quality, availability, and compliance requirements." },
      { title: "Model Design", description: "Selecting the right algorithms and architectures for your use case." },
      { title: "Training", description: "Training, fine-tuning, and validating models against real-world scenarios." },
      { title: "Integration", description: "Embedding AI seamlessly into your existing applications and workflows." },
      { title: "Monitoring", description: "Continuous performance tracking, retraining, and optimization." },
    ]
  },
  {
    slug: "growth-marketing",
    title: "Growth Marketing",
    description: "Stop guessing and start growing. We use advanced analytics to position your brand in front of the right audience — regardless of geography.",
    icon: <TrendingUp className="w-6 h-6" />,
    features: [
      "Global SEO & Content Strategy",
      "Paid Media (PPC) — Google, Meta, TikTok",
      "Social Media Management & Growth",
      "Email & CRM Marketing Automation",
      "Conversion Rate Optimization (CRO)",
      "Funnel Design & Growth Hacking",
    ],
    process: [
      { title: "Audit", description: "Analyzing your current performance, audience, and competitive landscape." },
      { title: "Strategy", description: "Developing a tailored, data-driven growth plan with clear KPIs." },
      { title: "Execution", description: "Running high-impact campaigns, creating content, and activating channels." },
      { title: "Optimization", description: "Continuous A/B testing, bid optimization, and creative iteration." },
      { title: "Reporting", description: "Transparent, real-time reporting on every impression, click, and conversion." },
    ]
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description: "We help traditional businesses modernize their operations, culture, and technology stack to compete in the global digital economy.",
    icon: <BarChart className="w-6 h-6" />,
    features: [
      "Legacy System Modernization",
      "Business Process Automation",
      "Cloud Migration & Architecture",
      "Data Strategy & Governance",
      "Digital Culture & Change Management",
      "Technical Audits & Roadmapping",
    ],
    process: [
      { title: "Assessment", description: "Evaluating your current systems, processes, and digital maturity." },
      { title: "Roadmap", description: "Defining a phased transformation journey with measurable milestones." },
      { title: "Implementation", description: "Executing technology upgrades, integrations, and process redesigns." },
      { title: "Training", description: "Upskilling your teams to confidently adopt and champion new tools." },
      { title: "Evolution", description: "Ongoing support, measurement, and continuous improvement cycles." },
    ]
  },
  {
    slug: "video-post-production",
    title: "Video & Post-Production",
    description: "We translate your brand's soul into high-impact video. Our editors and motion designers create cinematic content that converts viewers into fans.",
    icon: <Video className="w-6 h-6" />,
    features: [
      "4K Video Editing & Color Grading",
      "Motion Graphics & 2D Animation",
      "Social Media Ad Creatives (Reels, TikTok, YouTube)",
      "Brand Films & Corporate Videos",
      "Explainer & Product Demo Videos",
      "Brand Identity & Visual Storytelling",
    ],
    process: [
      { title: "Brief", description: "Understanding your brand's voice, target audience, and campaign goals." },
      { title: "Scripting", description: "Crafting compelling narratives and storyboards that drive action." },
      { title: "Production", description: "High-quality filming or asset collection for the edit." },
      { title: "Post-Production", description: "Editing, color grading, sound design, and motion graphics." },
      { title: "Delivery", description: "Platform-optimized final files delivered in all required formats." },
    ]
  },
  {
    slug: "global-growth-ads",
    title: "Global Growth & Ads",
    description: "Dominate every market. We engineer data-driven advertising strategies that transcend borders, placing your brand in front of the right audience worldwide.",
    icon: <Globe className="w-6 h-6" />,
    features: [
      "Global Paid Media Strategy",
      "Multi-Market PPC Campaigns (Google, Meta, TikTok)",
      "International SEO & Localization",
      "Cross-Border E-commerce Growth",
      "Audience Research & Geo-Targeting",
      "Performance Dashboards & ROI Reporting",
    ],
    process: [
      { title: "Market Research", description: "Identifying your highest-potential international markets and audiences." },
      { title: "Global Strategy", description: "Building a multi-market media plan with localized creative direction." },
      { title: "Campaign Launch", description: "Launching campaigns across channels with geo-specific targeting." },
      { title: "Optimization", description: "Rapid experimentation and budget reallocation towards best performers." },
      { title: "Scale", description: "Doubling down on winning markets, expanding reach and impact." },
    ]
  },
  {
    slug: "management-systems",
    title: "Management Systems",
    description: "We build and implement enterprise-grade management systems that streamline operations, automate workflows, and give your team clarity at scale.",
    icon: <Settings className="w-6 h-6" />,
    features: [
      "Custom CRM System Development",
      "ERP Integration & Implementation",
      "Workflow & Business Process Automation",
      "Business Intelligence Dashboards",
      "Inventory & Resource Management Systems",
      "Custom Admin Panels & Internal Tools",
    ],
    process: [
      { title: "Requirements", description: "Mapping your operational workflows and identifying key bottlenecks." },
      { title: "System Design", description: "Architecting a tailored solution that fits your business logic perfectly." },
      { title: "Development", description: "Building the system with clean, maintainable code and intuitive UI." },
      { title: "Integration", description: "Connecting with your existing tools — email, finance, CRM, and more." },
      { title: "Training & Handoff", description: "Full onboarding for your team with documentation and support." },
    ]
  },
]
