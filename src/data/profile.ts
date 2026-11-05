export const profile = {
  name: "Sachin Meshram",
  title: "Senior Software Engineer",
  headline: "Building Systems That Power Real Products.",
  heroSupport:
    "Senior Software Engineer — Node.js, TypeScript, AWS. I build backend systems, SaaS platforms, and AI-powered products that run in production.",
  heroIntro:
    "Software Engineer with 3 years of professional experience, focused on backend engineering with Node.js, TypeScript and AWS — building multi-platform SaaS products, React Native mobile apps, and 70+ client websites.",
  positioning:
    "I build backend systems with Node.js, TypeScript, NestJS and Express.js on AWS. My day-to-day includes integrating platforms like Shopify, WordPress, Meta, and Google into unified data pipelines, event-driven processing of e-commerce data, database optimization, AI features using RAG and vector databases, and React Native mobile apps. I like problems where the requirements are real, the data is messy, and the fix has to hold up in production.",
  experienceYears: "3 years professional experience",
  location: "Nagpur, Maharashtra, India",
  company: "Ascent Media Agency",
  companyPeriod: "June 2024 – Present",
  email: "sachinmeshram2408@gmail.com",
  phone: "9421095835",
  linkedin: "https://www.linkedin.com/in/sachin-meshram248",
  github: "https://github.com/Sachin9548",
  heroStack: ["Node.js", "TypeScript", "NestJS", "React.js", "Next.js", "React Native", "AWS"],
  // Portrait uploaded via Lovable Assets — used in the hero and about page.
  portraitSrc: "/portrait.jpg",
  resume: {
    available: true as boolean,
    label: "Download Resume",
    url: "/Sachin_Meshram_Resume.pdf" as string,
  },
  // Subtle indicator — does not claim active availability.
  availability: {
    label: "Open to conversations",
    note: "Say hello if you'd like to talk backend, cloud, or AI engineering.",
  },
};

export const portraitSrc = profile.portraitSrc;

export interface JourneyStage {
  title: string;
  detail: string;
}

// Capability progression — no invented dates.
export const journey: JourneyStage[] = [
  {
    title: "Programming fundamentals",
    detail:
      "Started with core computer science and Java — data structures, algorithms, and the habit of writing code that can be maintained.",
  },
  {
    title: "Frontend & web applications",
    detail:
      "Built interfaces and dashboards with React.js and Next.js — which later helped me design APIs that real UIs actually consume.",
  },
  {
    title: "Backend engineering & APIs",
    detail:
      "Moved into Node.js, TypeScript, NestJS and Express.js — REST API design, third-party integrations, and the service layer behind product features.",
  },
  {
    title: "E-commerce integrations",
    detail:
      "Built against real commerce platforms: Shopify apps and webhooks, Meta advertising APIs, and shipping APIs for enterprise merchants.",
  },
  {
    title: "AWS & background processing",
    detail:
      "Deployed services with Docker and AWS ECS, and worked with SQS queues and background workers so long-running jobs don't block requests.",
  },
  {
    title: "SaaS platform work",
    detail:
      "Multi-tenant platform features: data synchronization, orchestration, caching, indexing, and taking features from requirement to release.",
  },
  {
    title: "AI & RAG integrations",
    detail:
      "RAG pipelines with Pinecone and AWS Bedrock — grounding LLM responses in real merchant data instead of free-floating generation.",
  },
  {
    title: "Product-focused engineering",
    detail:
      "Learning to connect engineering decisions to business outcomes — dashboards merchants actually open, conversion flows that measurably perform.",
  },
];

export interface Principle {
  title: string;
  detail: string;
}

export const principles: Principle[] = [
  {
    title: "Design for reliability",
    detail:
      "Queues, retries and idempotent handlers so a burst of events degrades gracefully instead of corrupting state.",
  },
  {
    title: "Keep things observable",
    detail:
      "Structured logging and CloudWatch dashboards — if I can't see what a system is doing, I can't fix it.",
  },
  {
    title: "Take background work seriously",
    detail:
      "Most silent failures live in async jobs; workers need the same care as APIs.",
  },
  {
    title: "Protect data integrity",
    detail:
      "Webhook verification, validation at boundaries, and schemas driven by access patterns — bad data compounds.",
  },
  {
    title: "Measure before optimizing",
    detail:
      "Add caching and indexing where latency is actually paid, not where it's fashionable.",
  },
  {
    title: "Write code others can extend",
    detail:
      "Clear module boundaries and boring technology choices the next engineer can safely pick up.",
  },
  {
    title: "Connect decisions to outcomes",
    detail:
      "Technical choices should trace back to something the business feels — latency, cost, conversion, trust.",
  },
];
