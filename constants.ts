import { Project, Skill, Certification, FrameworkStep } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "cricket-analytics",
    title: "Cricket Analytics Platform",
    description: "Real-time performance metrics and predictive modeling for professional cricket teams.",
    image: "https://picsum.photos/seed/cricket/1200/800",
    stats: [
      { label: "Data Points", value: "10M+" },
      { label: "Accuracy", value: "98%" },
      { label: "Teams", value: "15+" }
    ],
    tags: ["Product Strategy", "Data Architecture", "Sports Tech"],
    link: "#"
  },
  {
    id: "fan-engagement",
    title: "Fan Engagement Engine",
    description: "Gamified fan experiences that increased user retention by 40% across major leagues.",
    image: "https://picsum.photos/seed/fan/1200/800",
    stats: [
      { label: "Active Users", value: "500K+" },
      { label: "Retention", value: "+40%" },
      { label: "Revenue", value: "$2M+" }
    ],
    tags: ["UX Design", "Growth", "Engagement"],
    link: "#"
  },
  {
    id: "scouting-tool",
    title: "Advanced Scouting Tool",
    description: "AI-driven talent identification system used by top-tier European football clubs.",
    image: "https://picsum.photos/seed/scout/1200/800",
    stats: [
      { label: "Players", value: "50K+" },
      { label: "Transfers", value: "100+" },
      { label: "ROI", value: "5x" }
    ],
    tags: ["AI/ML", "Scouting", "Product Management"],
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Product & Delivery",
    items: ["Roadmapping", "Agile/Scrum", "Stakeholder Management", "GTM Strategy"],
    icon: "Layout"
  },
  {
    category: "Analytics",
    items: ["SQL", "Python", "Tableau", "Predictive Modeling"],
    icon: "BarChart3"
  },
  {
    category: "Discovery",
    items: ["User Research", "Prototyping", "A/B Testing", "Market Analysis"],
    icon: "Search"
  },
  {
    category: "Power Tools",
    items: ["Jira", "Figma", "Mixpanel", "Amplitude"],
    icon: "Zap"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Certified Scrum Product Owner", issuer: "Scrum Alliance", date: "2023" },
  { name: "Google Data Analytics", issuer: "Google", date: "2022" },
  { name: "Product Strategy", issuer: "Reforge", date: "2023" }
];

export const FRAMEWORK: FrameworkStep[] = [
  {
    title: "Data Ingestion",
    description: "Aggregating raw sports data from multiple high-frequency sources.",
    icon: "Database"
  },
  {
    title: "Contextualization",
    description: "Applying domain-specific logic to transform raw numbers into insights.",
    icon: "Filter"
  },
  {
    title: "Productization",
    description: "Designing intuitive interfaces that make complex data actionable.",
    icon: "Layers"
  },
  {
    title: "Impact Measurement",
    description: "Continuously iterating based on user feedback and performance metrics.",
    icon: "TrendingUp"
  }
];

export const IMPACT_STATS = [
  { label: "Products Launched", value: "25+" },
  { label: "Growth", value: "30%" },
  { label: "ARR", value: "$1M+" }
];
