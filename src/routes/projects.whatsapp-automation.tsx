import { createFileRoute } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { CaseStudy } from "@/components/site/CaseStudy";

export const Route = createFileRoute("/projects/whatsapp-automation")({
  head: () => ({
    meta: [
      { title: "AI-Powered WhatsApp Automation — Case Study | Sachin Meshram" },
      {
        name: "description",
        content:
          "A WhatsApp automation platform on Shopify webhooks: context-aware recovery and retargeting workflows delivered through event-driven messaging pipelines.",
      },
      { property: "og:title", content: "AI-Powered WhatsApp Automation — Case Study | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Recover customers with conversations, not one-off blasts — event-driven messaging built on verified Shopify webhooks.",
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
