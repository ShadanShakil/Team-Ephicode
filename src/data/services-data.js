import { Code, Palette, Cpu, TrendingUp, BarChart } from "lucide-react"

export const servicesData = [
  {
    slug: "tech-development",
    title: "Tech Development",
    description: "We build robust, scalable, and secure applications using the latest technologies.",
    icon: <Code className="w-6 h-6" />,
    features: [
      "Custom Web Applications",
      "Mobile App Development (iOS & Android)",
      "API Development & Integration",
      "Cloud Infrastructure & DevOps",
      "Enterprise Software Solutions",
    ],
    process: [
      { title: "Discovery", description: "We analyze your requirements and technical needs." },
      { title: "Architecture", description: "We design a scalable and secure system architecture." },
      { title: "Development", description: "Agile development with regular updates and feedback." },
      { title: "Testing", description: "Rigorous QA testing to ensure bug-free deployment." },
      { title: "Deployment", description: "Smooth go-live process and post-launch support." },
    ]
  },
  {
    slug: "product-design",
    title: "Product Design",
    description: "We design intuitive and engaging user experiences that drive user retention.",
    icon: <Palette className="w-6 h-6" />,
    features: [
      "User Interface (UI) Design",
      "User Experience (UX) Research",
      "Prototyping & Wireframing",
      "Design Systems",
      "Brand Identity & Logo Design",
    ],
    process: [
      { title: "Research", description: "Understanding user behaviors and market trends." },
      { title: "Ideation", description: "Brainstorming concepts and creating wireframes." },
      { title: "Design", description: "Crafting pixel-perfect high-fidelity designs." },
      { title: "Prototyping", description: "Creating interactive prototypes for testing." },
      { title: "Handoff", description: "Detailed documentation for developers." },
    ]
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    description: "We leverage artificial intelligence to automate processes and gain insights.",
    icon: <Cpu className="w-6 h-6" />,
    features: [
      "Machine Learning Models",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Predictive Analytics",
      "AI-Powered Chatbots",
    ],
    process: [
      { title: "Data Analysis", description: "Evaluating data quality and availability." },
      { title: "Model Selection", description: "Choosing the right algorithms for the task." },
      { title: "Training", description: "Training and fine-tuning models." },
      { title: "Integration", description: "Embedding AI models into applications." },
      { title: "Monitoring", description: "Continuous performance tracking and optimization." },
    ]
  },
  {
    slug: "growth-marketing",
    title: "Growth Marketing",
    description: "We help you reach your target audience and grow your business.",
    icon: <TrendingUp className="w-6 h-6" />,
    features: [
      "SEO & Content Strategy",
      "Performance Marketing",
      "Social Media Management",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
    ],
    process: [
      { title: "Audit", description: "Analyzing current performance and competitors." },
      { title: "Strategy", description: "Developing a tailored growth plan." },
      { title: "Execution", description: "Running campaigns and creating content." },
      { title: "Optimization", description: "A/B testing and refining strategies." },
      { title: "Reporting", description: "Transparent reporting on KPIs and ROI." },
    ]
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description: "We help traditional businesses modernize their operations and culture.",
    icon: <BarChart className="w-6 h-6" />,
    features: [
      "Legacy System Modernization",
      "Process Automation",
      "Cloud Migration",
      "Data Strategy & Governance",
      "Digital Culture Consulting",
    ],
    process: [
      { title: "Assessment", description: "Evaluating current systems and processes." },
      { title: "Roadmap", description: "Planning the transformation journey." },
      { title: "Implementation", description: "Executing technology and process changes." },
      { title: "Training", description: "Upskilling teams to adopt new tools." },
      { title: "Evolution", description: "Continuous improvement and innovation." },
    ]
  }
]
