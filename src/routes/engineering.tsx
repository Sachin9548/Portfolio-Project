import { createFileRoute, Link } from "@tanstack/react-router";
import { domains, capabilityLayers, skillCategories, education } from "@/data/skills";
import { DomainExplorer } from "@/components/site/DomainExplorer";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { accentClasses } from "@/lib/accent";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering — Sachin Meshram" },
      {
        name: "description",
        content:
          "How I engineer systems — backend, cloud, databases, AI, mobile and e-commerce. Skills tied to real projects, not just listed.",
      },
      { property: "og:title", content: "Engineering — Sachin Meshram" },
      { property: "og:description", content: "Backend engineering, AWS, DynamoDB, RAG, React Native — tied to real products." },
      { property: "og:url", content: "/engineering" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/engineering" }],
  }),
  component: EngineeringPage,
});

function EngineeringPage() {
  return (
    <div className="ambient-top">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        {/* ── Header ── */}
        <header className="max-w-2xl">
          <p className="mono-label">engineering</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            How I engineer systems.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Backend is my center of gravity — but after 3 years of shipping full products
            end to end, I work across every layer. Everything below is tied to a real
            project where it was actually used, not just listed as a skill.
          </p>
        </header>

        {/* ── Engineering domains — interactive ── */}
        <Reveal className="mt-14">
          <SectionHeading
            kicker="domains"
            title="Five areas I work in every week."
            lead="Click a domain to see which real products it was used on."
          />
          <DomainExplorer />
        </Reveal>

        {/* ── How I approach key problems ── */}
        <Reveal className="mt-16">
          <SectionHeading
            kicker="in practice"
            title="How I approach key engineering problems."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                topic: "Event-Driven Architecture",
                accent: "blue" as const,
                points: [
                  "SQS queues buffer traffic spikes so workers never get overwhelmed",
                  "Idempotent handlers mean replays are harmless",
                  "Webhook verification at the boundary before any processing",
                  "Background workers decouple ingestion from transformation",
                ],
                project: "Used in: Profit First, WAutomation",
              },
              {
                topic: "Database Design",
                accent: "cyan" as const,
                points: [
                  "Single-table DynamoDB with GSIs designed around access patterns",
                  "Redis caching on hot endpoints — measure first, cache second",
                  "Database indexing targeted at real query bottlenecks",
                  "Schema decisions driven by how the product queries, not habit",
                ],
                project: "Used in: Profit First, Ads Manager",
              },
              {
                topic: "RAG & AI Integration",
                accent: "violet" as const,
                points: [
                  "Pinecone vector search retrieves merchant-specific context",
                  "AWS Bedrock LLM constrained to retrieved data only",
                  "AI answers grounded in real numbers, not generic training",
                  "Calling agent proactively surfaces performance summaries",
                ],
                project: "Used in: Profit First",
              },
              {
                topic: "AWS Infrastructure",
                accent: "blue" as const,
                points: [
                  "ECS + Docker for containerised, reproducible deployments",
                  "S3 + SQS pipeline spine — restartable and durable",
                  "CloudWatch dashboards and alerts for observability",
                  "EC2 workers for CPU-bound async image processing",
                ],
                project: "Used in: Profit First, See Before Buy",
              },
              {
                topic: "API & Integration Engineering",
                accent: "warm" as const,
                points: [
                  "Shopify, Meta, Google, shipping partner API integrations",
                  "Rate-limit handling and retry logic on all third-party calls",
                  "Server-side conversion tracking via Meta CAPI",
                  "Multi-platform data normalization into a unified schema",
                ],
                project: "Used in: Profit First, Ads Manager",
              },
              {
                topic: "React Native Mobile",
                accent: "cyan" as const,
                points: [
                  "Built the Profit First executive app from scratch",
                  "Android and iOS both supported from one codebase",
                  "Node.js backend APIs on AWS powering the mobile data",
                  "Real-time net profit and revenue summaries on device",
                ],
                project: "Used in: Profit First Mobile App",
              },
            ].map((item) => {
              const a = accentClasses(item.accent);
              return (
                <div key={item.topic} className={"rounded-xl border bg-surface-1/50 p-5 " + a.border}>
                  <p className={"text-sm font-semibold " + a.text}>{item.topic}</p>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                        <span className={"mt-1.5 size-1 flex-none rounded-full " + a.dot} aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mono-label mt-4 normal-case">{item.project}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* ── Capability layers ── */}
        <Reveal className="mt-16">
          <SectionHeading
            kicker="capability layers"
            title="What I take full responsibility for."
            lead="Primary layers are what I own end to end. Supporting layers are what I work with alongside the product."
          />
          <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityLayers.map((layer) => (
              <StaggerItem
                key={layer.layer}
                className={
                  "rounded-xl border p-5 " +
                  (layer.primary
                    ? "border-accent-blue/40 bg-surface-1/60"
                    : "border-border/70 bg-surface-1/40")
                }
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">{layer.layer}</p>
                  {layer.primary && (
                    <span className="mono-label rounded-full border border-accent-blue/40 px-2 py-0.5">
                      primary
                    </span>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 bg-surface-2/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* ── Full skills list ── */}
        <Reveal className="mt-16">
          <SectionHeading kicker="skills" title="The complete tech list." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-border/70 bg-surface-1/50 p-5">
                <p className="text-sm font-semibold text-foreground">{cat.title}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/70 bg-surface-2/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Education ── */}
        <Reveal className="mt-16">
          <SectionHeading kicker="education" title="Academic foundation." />
          <div className="mt-5 rounded-xl border border-border/70 bg-surface-1/50 p-5">
            <p className="text-base font-semibold text-foreground">{education.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">{education.institution}</p>
            <p className="mono-label mt-2 normal-case">{education.detail}</p>
          </div>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal className="mt-16 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Want to see these skills applied in real products?
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View case studies
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
