import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Smartphone } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data/projects";
import { ClientWebsites } from "@/components/site/ClientWebsites";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { accentClasses } from "@/lib/accent";
import { projectRoute } from "@/lib/links";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Projects & Case Studies | Sachin Meshram" },
      {
        name: "description",
        content:
          "Four live SaaS products, a React Native mobile app, and 70+ client websites — engineering case studies with real architecture, decisions, and results.",
      },
      { property: "og:title", content: "Work — Projects & Case Studies | Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Profit First, Ads Manager, See Before Buy, WAutomation — four products in production with full engineering case studies.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const screenshots: Record<string, string> = {
  "profit-first": "/profit-first.png",
  "ads-manager": "/ads-manager.png",
  "see-before-buy": "/see-before-buy.png",
  "whatsapp-automation": "/wautomation.png",
};

function ProjectsPage() {
  return (
    <div className="ambient-top">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        {/* ── Header ── */}
        <header className="max-w-2xl">
          <p className="mono-label">work</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Products in production,<br className="hidden sm:block" /> told as engineering.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Four live SaaS products built end to end — each with a full case study covering
            the real problem, architecture, engineering decisions, and outcomes. No demos,
            no side projects — everything here runs in production.
          </p>
          {/* quick stats */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { v: "4", l: "SaaS products live" },
              { v: "1", l: "React Native mobile app" },
              { v: "70+", l: "client websites delivered" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-lg border border-border/70 bg-surface-1/50 px-4 py-2"
              >
                <span className="text-base font-bold text-gradient">{s.v} </span>
                <span className="text-xs text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ── Featured SaaS Projects ── */}
        <section className="mt-14">
          <p className="mono-label">flagship saas products</p>
          <Stagger className="mt-5 grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((p) => {
              const a = accentClasses(p.accent);
              const imgSrc = screenshots[p.id];
              return (
                <StaggerItem key={p.id}>
                  <div className={"group flex h-full flex-col overflow-hidden rounded-xl border bg-surface-1/50 transition-colors hover:bg-surface-2/60 " + a.border}>
                    {/* screenshot */}
                    {imgSrc && (
                      <div className="aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-surface-2">
                        <img
                          src={imgSrc}
                          alt={`${p.name} screenshot`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      {/* header row */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="mono-label">{p.kind}</p>
                          <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">
                            {p.name}
                          </h2>
                        </div>
                        {p.links[0] && (
                          <a
                            href={p.links[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 flex-none text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={`Visit ${p.name}`}
                          >
                            <ArrowUpRight className="size-4" aria-hidden />
                          </a>
                        )}
                      </div>

                      <p className={"mt-2 text-sm font-medium " + a.text}>{p.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.context}</p>

                      {/* contributions preview — top 3 */}
                      <ul className="mt-4 space-y-1.5">
                        {p.contributions.slice(0, 3).map((c) => (
                          <li key={c} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                            <span className={"mt-1.5 size-1 flex-none rounded-full " + a.dot} aria-hidden />
                            {c}
                          </li>
                        ))}
                      </ul>

                      {/* stack */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.stack.slice(0, 5).map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                        {p.stack.length > 5 && (
                          <span className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                            +{p.stack.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* results preview */}
                      {p.results.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {p.results.slice(0, 2).map((r) => (
                            <div
                              key={r.label}
                              className="rounded-lg border border-border/60 bg-background/50 px-3 py-2"
                            >
                              <p className={"text-base font-bold " + a.text}>{r.value}</p>
                              <p className="text-[11px] text-muted-foreground">{r.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* links */}
                      <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm">
                        <Link
                          to={projectRoute(p.id)}
                          className={"inline-flex items-center gap-1.5 font-medium hover:underline " + a.text}
                        >
                          Full case study
                          <ArrowRight className="size-3.5" aria-hidden />
                        </Link>
                        {p.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                          >
                            {l.label}
                            <ArrowUpRight className="size-3.5" aria-hidden />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </section>

        {/* ── Mobile App ── */}
        <section className="mt-14">
          <p className="mono-label">mobile app</p>
          <Reveal className="mt-5">
            <div className="flex flex-col gap-6 overflow-hidden rounded-xl border border-accent-blue/30 bg-surface-1/50 p-6 sm:flex-row sm:items-center">
              <div className="flex size-14 flex-none items-center justify-center rounded-xl border border-accent-blue/40 bg-accent-blue/10">
                <Smartphone className="size-7 text-accent-blue" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="mono-label">React Native · Android &amp; iOS</p>
                <h2 className="mt-1.5 text-lg font-semibold text-foreground">
                  Profit First Mobile App
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A React Native executive app giving business owners real-time access to net profit,
                  revenue summaries, and business performance — on both Android and iOS. Built from
                  scratch with a Node.js backend on AWS. Same financial data as the SaaS platform,
                  in your pocket.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["React Native", "Node.js", "TypeScript", "AWS", "Android", "iOS"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-none">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/70 bg-background/60 px-4 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                >
                  App Store
                  <span className="rounded-full bg-surface-2 px-1.5 py-0.5 text-[10px]">Soon</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/70 bg-background/60 px-4 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                >
                  Google Play
                  <span className="rounded-full bg-surface-2 px-1.5 py-0.5 text-[10px]">Soon</span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Client Websites ── */}
        <section className="mt-14">
          <SectionHeading
            kicker="client websites"
            title="70+ websites delivered for real businesses."
            lead="Custom-coded sites and Shopify storefronts — a sample below. Every entry is live."
          />
          <ClientWebsites />
        </section>

        {/* ── Other Projects ── */}
        {otherProjects.filter(p => p.name !== "Profit First Mobile App").length > 0 && (
          <section className="mt-14">
            <SectionHeading
              kicker="other products"
              title="More from the workshop."
            />
          </section>
        )}

      </div>
    </div>
  );
}
