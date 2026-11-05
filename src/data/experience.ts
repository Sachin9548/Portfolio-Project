export interface Achievement {
  title: string;
  detail: string;
}

export interface Role {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  achievements: Achievement[];
  reportedMetrics: { value: string; label: string; note: string }[];
}

// Only the single verified employment entry — nothing invented.
export const experience: Role[] = [
  {
    company: "Ascent Media Agency",
    location: "Nagpur, India",
    role: "Senior Software Engineer",
    period: "June 2024 – Present",
    current: true,
    summary:
      "Building multi-platform SaaS products for commerce and advertising — Shopify, WordPress, Meta, Google, and shipping partner integrations — plus React Native mobile apps and AI-powered tools.",
    achievements: [
      {
        title: "Architected multi-platform SaaS from scratch",
        detail:
          "Designed and built the full backend architecture for a SaaS platform connecting Shopify, WordPress, Meta, Google Ads, and shipping partners — event-driven ingestion, background workers, and a single-table DynamoDB schema serving analytical queries under 2 seconds.",
      },
      {
        title: "Built React Native mobile app — Android & iOS",
        detail:
          "Developed the Profit First executive mobile app in React Native from scratch, backed by Node.js APIs on AWS. Live on both Android and iOS, giving business owners real-time access to net profit and revenue summaries.",
      },
      {
        title: "Delivered 70+ client websites",
        detail:
          "Built and shipped 70+ real business websites — Shopify e-commerce stores and custom-coded sites in React and Next.js — handling client requirements, custom integrations, and deployment end to end.",
      },
      {
        title: "Improved backend performance by ~35%",
        detail:
          "Added Redis-based caching and database indexing on hot endpoints, reducing API response times by approximately 35% (reported figure).",
      },
      {
        title: "RAG-based AI business advisor",
        detail:
          "Built an AI consultation layer using AWS Bedrock and Pinecone — retrieval-grounded responses over merchant financial data so the AI answers from real numbers, not generic training.",
      },
      {
        title: "Meta Conversions API (CAPI) integration",
        detail:
          "Implemented server-side conversion tracking independently of browser-based pixels — improving conversion signal coverage for Meta advertising campaigns.",
      },
      {
        title: "Containerised AWS deployments with full observability",
        detail:
          "Deployed all services with AWS ECS (Docker containers) and set up CloudWatch monitoring, dashboards, and alerts — contributing to reported 99.9% uptime.",
      },
      {
        title: "Owned the full development cycle",
        detail:
          "Took features from requirement gathering and planning through architecture, implementation, deployment, and post-release maintenance — working across backend, workers, databases, infrastructure, and frontend.",
      },
    ],
    reportedMetrics: [
      {
        value: "35%",
        label: "reduction in response times",
        note: "Reported outcome of the Redis caching and database indexing work — presented as a reported figure, not an independently benchmarked one.",
      },
      {
        value: "99.9%",
        label: "uptime maintained",
        note: "Reported platform uptime, not an independently verified SLA.",
      },
    ],
  },
];
