import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { codingProfiles } from "@/data/codingProfiles";
import { profile } from "@/data/profile";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Work History | Sachin Meshram" },
      {
        name: "description",
        content:
          "Work history: backend and full-stack engineering at Ascent Media Agency — SaaS platform work across Shopify, Meta and shipping integrations on AWS.",
      },
      { property: "og:title", content: "Experience — Work History | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Three years of professional experience building and maintaining a multi-tenant SaaS platform for commerce and advertising.",
      },
      { property: "og:url", content: "/experience" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="ambient-top">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <header className="max-w-2xl">
          <p className="mono-label">experience</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            3 years. 4 products. 70+ websites.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Currently at Ascent Media Agency, Nagpur — Senior Software Engineer building
            multi-platform SaaS products from scratch. Every metric below is a reported
            figure, labeled as such.
          </p>
        </header>

        <div className="mt-12 space-y-8">
          {experience.map((role) => (
            <Reveal key={role.company} className="relative pl-6">
              <span
                aria-hidden
                className={
                  "absolute left-0 top-2 size-2.5 rounded-full border-2 " +
                  (role.current
                    ? "border-accent-cyan bg-accent-cyan/30"
                    : "border-border bg-surface-2")
                }
              />
              <div className="rounded-xl border border-border/70 bg-surface-1/50 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                      {role.role}
                    </h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <p className="mono-label">{role.period}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>

                <Stagger className="mt-5 space-y-2.5">
                  {role.achievements.map((ach) => (
                    <StaggerItem key={ach.title} className="rounded-lg border border-border/60 bg-background/50 p-4">
                      <p className="text-sm font-medium text-foreground">{ach.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ach.detail}</p>
                    </StaggerItem>
                  ))}
                </Stagger>

                {role.reportedMetrics.length > 0 ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {role.reportedMetrics.map((m) => (
                      <div key={m.label} className="rounded-lg border border-border/60 bg-background/50 p-4">
                        <p className="text-2xl font-bold tracking-tight text-accent-cyan">{m.value}</p>
                        <p className="mt-0.5 text-sm text-foreground/90">{m.label}</p>
                        <p className="mono-label mt-1.5 normal-case leading-relaxed">{m.note}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <SectionHeading
            kicker="problem solving profiles"
            title="Where I practice."
            lead="Profiles linked as they are — badges and counts shown only where they're real."
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {codingProfiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border/70 bg-surface-1/50 p-5 transition-colors hover:bg-surface-2/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">{p.name}</p>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                {p.badge ? (
                  <span className="mono-label mt-3 inline-block rounded-full border border-accent-cyan/40 px-2 py-0.5">
                    {p.badge}
                  </span>
                ) : null}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 border-t border-border/60 pt-8">
          <p className="mono-label">next</p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="text-sm font-medium text-foreground hover:underline">
              See the work behind this →
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Or get in touch directly
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
