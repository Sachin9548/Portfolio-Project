import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Briefcase, Calendar } from "lucide-react";
import { experience } from "@/data/experience";
import { codingProfiles } from "@/data/codingProfiles";
import { profile } from "@/data/profile";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sachin Meshram" },
      {
        name: "description",
        content:
          "Senior Software Engineer at Ascent Media Agency — 3 years building multi-platform SaaS products, React Native apps, and 70+ client websites.",
      },
      { property: "og:title", content: "Experience — Sachin Meshram" },
      { property: "og:description", content: "3 years. 4 products. 70+ websites. Senior Software Engineer at Ascent Media Agency." },
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

        {/* ── Header ── */}
        <header className="max-w-2xl">
          <p className="mono-label">experience</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            3 years. 4 products.<br className="hidden sm:block" /> 70+ websites.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Currently at Ascent Media Agency, Nagpur as Senior Software Engineer — building
            multi-platform SaaS products from scratch, shipping a React Native mobile app,
            and delivering client websites end to end. Metrics below are reported figures,
            labeled as such.
          </p>
        </header>

        {/* ── Experience entries ── */}
        <div className="mt-12 space-y-8">
          {experience.map((role) => (
            <Reveal key={role.company}>
              <div className="rounded-2xl border border-border/70 bg-surface-1/50 overflow-hidden">

                {/* role header */}
                <div className={
                  "flex flex-wrap items-start justify-between gap-4 border-b border-border/60 bg-surface-2/40 px-6 py-5 " +
                  (role.current ? "border-l-2 border-l-accent-cyan" : "")
                }>
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 flex-none items-center justify-center rounded-lg border border-border/70 bg-surface-2">
                      <Briefcase className="size-4 text-muted-foreground" aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold tracking-tight text-foreground">
                        {role.role}
                      </h2>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {role.company} · {role.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" aria-hidden />
                      {role.period}
                    </div>
                    {role.current && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-2 py-0.5 text-[11px] text-accent-cyan">
                        <span className="size-1.5 rounded-full bg-accent-cyan" style={{ animation: "soft-pulse 2.4s ease-in-out infinite" }} aria-hidden />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{role.summary}</p>

                  {/* achievements */}
                  <Stagger className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {role.achievements.map((ach) => (
                      <StaggerItem
                        key={ach.title}
                        className="flex gap-2.5 rounded-lg border border-border/60 bg-background/50 p-4"
                      >
                        <span className="mt-1.5 size-1.5 flex-none rounded-full bg-accent-cyan" aria-hidden />
                        <div>
                          <p className="text-sm font-medium text-foreground">{ach.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ach.detail}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>

                  {/* reported metrics */}
                  {role.reportedMetrics.length > 0 && (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {role.reportedMetrics.map((m) => (
                        <div key={m.label} className="rounded-lg border border-accent-cyan/20 bg-accent-cyan/5 p-4">
                          <p className="text-3xl font-bold tracking-tight text-accent-cyan">{m.value}</p>
                          <p className="mt-1 text-sm font-medium text-foreground/90">{m.label}</p>
                          <p className="mono-label mt-1.5 normal-case leading-relaxed">{m.note}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── What I shipped ── */}
        <Reveal className="mt-16">
          <SectionHeading
            kicker="shipped at ascent media"
            title="Products I built here."
            lead="Every product below was designed, built, and deployed by me at this company."
          />
          <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { name: "Profit First", kind: "AI Business Intelligence SaaS", url: "https://profitfirstanalytics.co.in/", desc: "Multi-platform SaaS connecting Shopify, WordPress, Meta, Google and shipping partners — real net profit for business owners.", accent: "text-accent-blue" },
              { name: "Ads Manager", kind: "Advertising Analytics Platform", url: "https://ads.profitfirstanalytics.com/", desc: "One-click Meta campaign launch, server-side conversion tracking via CAPI, and profit-aware advertising dashboards.", accent: "text-accent-violet" },
              { name: "See Before Buy", kind: "AI Virtual Try-On Shopify App", url: "https://apps.shopify.com/see-before-buy-ai-full", desc: "AI-powered product visualization — shoppers preview products before buying, reducing returns and hesitation.", accent: "text-accent-cyan" },
              { name: "WAutomation", kind: "WhatsApp Automation Platform", url: "https://www.wautomation.shop/", desc: "Revenue-oriented WhatsApp automation — abandoned cart recovery, retargeting, and AI-powered customer support.", accent: "text-accent-warm" },
            ].map((p) => (
              <StaggerItem key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl border border-border/70 bg-surface-1/50 p-5 transition-colors hover:bg-surface-2/60"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="mono-label">{p.kind}</p>
                      <h3 className={"mt-1 text-base font-semibold " + p.accent}>{p.name}</h3>
                    </div>
                    <ArrowUpRight className="size-4 flex-none text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* ── Coding profiles ── */}
        <Reveal className="mt-16">
          <SectionHeading
            kicker="problem solving"
            title="Where I practice."
            lead="Profiles linked as-is — badges and stats shown only where real."
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
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.detail}</p>
                {p.badge && (
                  <span className="mono-label mt-3 inline-block rounded-full border border-accent-cyan/40 px-2 py-0.5">
                    {p.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal className="mt-16 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Want to see the engineering behind these products?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View case studies
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-border/80 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Get in touch
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
