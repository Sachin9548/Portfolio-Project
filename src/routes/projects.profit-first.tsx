import { createFileRoute } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { CaseStudy } from "@/components/site/CaseStudy";

export const Route = createFileRoute("/projects/profit-first")({
  head: () => ({
    meta: [
      { title: "Profit First — Case Study | Sachin Meshram" },
      {
        name: "description",
        content:
          "Profit First — an AI-powered multi-platform SaaS connecting Shopify, WordPress, Meta, Google and shipping partners to give business owners their real net profit.",
      },
      { property: "og:title", content: "Profit First — Case Study | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "One platform for real net profit — event-driven AWS architecture, single-table DynamoDB, RAG-based AI advisor, and React Native mobile app.",
      },
      { property: "og:url", content: "/projects/profit-first" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/profit-first" }],
  }),
  component: ProfitFirstPage,
});

function ProfitFirstPage() {
  const project = getProject("/projects/profit-first");
  if (!project) return null;
  return <CaseStudy project={project} />;
}
