export type Accent = "blue" | "cyan" | "violet" | "warm";

export interface DomainApplication {
  context: string;
  text: string;
}

export interface EngineeringDomain {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  applications: DomainApplication[];
  accent: Accent;
}

export const domains: EngineeringDomain[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    summary: "The service layer products actually run on.",
    tech: ["Node.js", "TypeScript", "NestJS", "Express.js", "REST APIs"],
    accent: "blue",
    applications: [
      {
        context: "Profit First",
        text: "Event-driven SaaS backend on AWS — ingestion, webhook validation and analytics APIs serving merchant dashboards.",
      },
      {
        context: "WhatsApp Automation",
        text: "Automated messaging pipelines driven by Shopify webhooks and rule-based workflows.",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Distributed Systems",
    summary: "Infrastructure that stays dependable under load.",
    tech: ["AWS ECS", "EC2", "S3", "SQS", "Lambda", "CloudWatch", "Docker"],
    accent: "violet",
    applications: [
      {
        context: "Profit First",
        text: "Containerized ECS services with SQS queues and background workers keeping merchant data consistent during high-traffic events.",
      },
      {
        context: "See Before Buy",
        text: "Asynchronous image-processing pipelines on EC2 workers, fed through S3 and SQS.",
      },
    ],
  },
  {
    id: "databases",
    title: "Database Engineering",
    summary: "Schemas designed from access patterns, not habit.",
    tech: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Pinecone"],
    accent: "cyan",
    applications: [
      {
        context: "Profit First",
        text: "Single-table DynamoDB schema with Global Secondary Indexes designed for analytical access patterns.",
      },
      {
        context: "Ascent platform",
        text: "Redis caching and database indexing to cut response times on hot merchant queries.",
      },
    ],
  },
  {
    id: "product",
    title: "Product & Full Stack Development",
    summary: "Dashboards and storefront features people actually use.",
    tech: ["React.js", "Next.js", "Shopify apps", "React Native"],
    accent: "warm",
    applications: [
      {
        context: "Ads Manager",
        text: "High-performance advertising dashboards with one-click campaign launch workflows.",
      },
      {
        context: "E-commerce builds",
        text: "Shopify applications and merchant-facing product experiences across the platform portfolio.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    summary: "LLMs grounded in real data — not demos.",
    tech: ["AWS Bedrock", "RAG", "LLM integrations", "Meta CAPI", "Automated workflows"],
    accent: "blue",
    applications: [
      {
        context: "Profit First",
        text: "RAG-based AI consultation: Pinecone vector search over merchant financial data, answered through AWS Bedrock.",
      },
      {
        context: "Ads Manager",
        text: "Meta Conversions API — server-side conversion events captured independently of browser tracking.",
      },
    ],
  },
];

export interface CapabilityLayer {
  layer: string;
  primary: boolean;
  tech: string[];
}

export const capabilityLayers: CapabilityLayer[] = [
  { layer: "Backend", primary: true, tech: ["Node.js", "NestJS", "Express.js", "REST APIs", "Integrations"] },
  { layer: "Product Engineering", primary: true, tech: ["SaaS platforms", "Dashboards", "Shopify apps"] },
  { layer: "Frontend", primary: false, tech: ["React.js", "Next.js", "Dashboards", "User interfaces"] },
  { layer: "Databases", primary: false, tech: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Pinecone"] },
  { layer: "Cloud", primary: false, tech: ["AWS ECS", "EC2", "S3", "SQS", "Lambda", "Cognito", "CloudWatch"] },
  { layer: "DevOps", primary: false, tech: ["Docker", "CI/CD", "Nginx", "Deployment", "Monitoring"] },
  { layer: "Mobile", primary: false, tech: ["React Native"] },
  { layer: "AI", primary: false, tech: ["RAG", "AWS Bedrock", "LLM-powered applications"] },
  { layer: "E-commerce", primary: false, tech: ["Shopify app development", "Meta integrations", "Shipping APIs"] },
];

export interface Education {
  degree: string;
  institution: string;
  detail: string;
}

export const education: Education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "J D College of Engineering, Nagpur",
  detail: "CGPA: 7.63",
};

export interface SkillCategory {
  title: string;
  skills: string[];
}

// Exactly the categories and items supplied — nothing added or embellished.
export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "JavaScript ES6+",
      "REST APIs",
      "API Integrations",
      "Microservices",
      "Background Workers",
      "Event-Driven Architecture",
      "Webhooks",
      "Queue-Based Processing",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React.js", "Next.js", "React Native"],
  },
  {
    title: "Programming Languages",
    skills: ["Java (Core · DSA)", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Pinecone",
      "Database Indexing",
      "Single-Table Database Design",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS ECS",
      "AWS EC2",
      "AWS S3",
      "AWS SQS",
      "AWS Lambda",
      "AWS Cognito",
      "AWS CloudWatch",
      "Docker",
      "Git",
      "CI/CD",
      "Nginx",
      "PM2",
    ],
  },
  {
    title: "AI & E-commerce Technologies",
    skills: [
      "AWS Bedrock",
      "OpenAI API",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases",
      "Shopify App Development",
      "Shopify APIs",
      "Meta Marketing API",
      "Meta Conversions API (CAPI)",
    ],
  },
  {
    title: "Engineering Concepts",
    skills: [
      "System Design",
      "Microservices Architecture",
      "Distributed Systems",
      "Database Optimization",
      "Caching",
      "Scalability",
      "Reliability",
      "Idempotency",
      "API Security",
      "SDLC",
      "Agile / Scrum",
    ],
  },
];
