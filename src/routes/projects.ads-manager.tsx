import { createFileRoute } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { CaseStudy } from "@/components/site/CaseStudy";

export const Route = createFileRoute("/projects/ads-manager")({
  head: () => ({
    meta: [
      { title: "Ads Manager — Case Study | Sachin Meshram" },
      {
        name: "description",
        content:
          "An advertising analytics platform with one-click campaign launch, real-time dashboards and server-side conversion tracking through the Meta Conversions API.",
      },
      { property: "og:title", content: "Ads Manager — Case Study | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Launch campaigns in one click, measure what actually converted — background processing and server-side conversion events.",
      },
      { property: "og:url", content: "/projects/ads-manager" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/ads-manager" }],
  }),
  component: AdsManagerPage,
});

function AdsManagerPage() {
  const project = getProject("/projects/ads-manager");
  if (!project) return null;
  return <CaseStudy project={project} />;
}
