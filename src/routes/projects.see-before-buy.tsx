import { createFileRoute } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { CaseStudy } from "@/components/site/CaseStudy";

export const Route = createFileRoute("/projects/see-before-buy")({
  head: () => ({
    meta: [
      { title: "See Before Buy — Case Study | Sachin Meshram" },
      {
        name: "description",
        content:
          "An AI-powered virtual try-on: scalable AWS image-processing pipelines on S3, SQS and EC2 for asynchronous product previews in Shopify storefronts.",
      },
      { property: "og:title", content: "See Before Buy — Case Study | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Let shoppers preview products before they commit — asynchronous AI image pipelines built for reliability.",
      },
      { property: "og:url", content: "/projects/see-before-buy" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/see-before-buy" }],
  }),
  component: SeeBeforeBuyPage,
});

function SeeBeforeBuyPage() {
  const project = getProject("/projects/see-before-buy");
  if (!project) return null;
  return <CaseStudy project={project} />;
}
