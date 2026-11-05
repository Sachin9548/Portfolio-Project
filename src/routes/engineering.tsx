import { createFileRoute } from "@tanstack/react-router";
import { domains, capabilityLayers, skillCategories, education } from "@/data/skills";
import { DomainExplorer } from "@/components/site/DomainExplorer";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering — Skills & Domains | Sachin Meshram" },
      {
        name: "description",
        content:
          "How I work as a backend-leaning full-stack engineer: Node.js and TypeScript services on AWS, databases designed around real access patterns, and AI features grounded in actual data.",
      },
      { property: "og:title", content: "Engineering — Skills & Domains | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Backend engineering, cloud infrastructure, databases, full-stack product work and AI — with the projects each area was actually used on.",
      },
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
        <header className="max-w-2xl">
          <p className="mono-label">engineering</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            How I engineer systems.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            My center of gravity is backend engineering — but after 3 years of building
            full products end to end, I work across every layer: APIs, databases, cloud
            infrastructure, mobile, and AI. Each section below is tied to a real project
            where it was actually used, not just listed as a skill.
          </p>
        </header>

        <Reveal className="mt-12">
          <SectionHeading
            kicker="domains"
            title="The areas I work in day to day."
            lead="Pick a domain to see which products it shows up in."
          />
          <DomainExplorer />
        </Reveal>

        <Reveal className="mt-16">
          <SectionHeading
            kicker="capability layers"
            title="What I can take responsibility for."
            lead="Primary layers are what I own; supporting layers are what I work with alongside the team."
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
                  {layer.primary ? (
                    <span className="mono-label rounded-full border border-accent-blue/40 px-2 py-0.5">
                      primary
                    </span>
                  ) : null}
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

        <Reveal className="mt-16">
          <SectionHeading
            kicker="skills"
            title="The full list, grouped."
          />
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

        <Reveal className="mt-16">
          <SectionHeading kicker="education" title="Where I started." />
          <div className="mt-6 max-w-xl rounded-xl border border-border/70 bg-surface-1/50 p-5">
            <p className="text-sm font-semibold text-foreground">{education.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">{education.institution}</p>
            <p className="mono-label mt-2 normal-case">{education.detail}</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
