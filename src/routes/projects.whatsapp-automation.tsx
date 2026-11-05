import { createFileRoute } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { CaseStudy } from "@/components/site/CaseStudy";

export const Route = createFileRoute("/projects/whatsapp-automation")({
  head: () => ({
    meta: [
      { title: "WAutomation — Case Study | Sachin Meshram" },
      {
        name: "description",
        content:
          "WAutomation — a revenue-oriented WhatsApp automation platform: abandoned cart recovery, customer retargeting, and AI-powered support built on Shopify webhooks.",
      },
      { property: "og:title", content: "WAutomation — Case Study | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Turn Shopify events into revenue through WhatsApp — event-driven messaging, recovery flows and AI sales agent.",
      },
      { property: "og:url", content: "/projects/whatsapp-automation" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/whatsapp-automation" }],
  }),
  component: WhatsAppAutomationPage,
});

function WhatsAppAutomationPage() {
  const project = getProject("/projects/whatsapp-automation");
  if (!project) return null;
  return <CaseStudy project={project} />;
}
