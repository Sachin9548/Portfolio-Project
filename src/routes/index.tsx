import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Github, Linkedin, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { domains } from "@/data/skills";
import { codingProfiles } from "@/data/codingProfiles";
import { journey } from "@/data/profile";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { accentClasses } from "@/lib/accent";
import { projectRoute } from "@/lib/links";
import { HeroSystemDiagram } from "@/components/diagrams/HeroSystemDiagram";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sachin Meshram — Senior Software Engineer · Nagpur, India" },
      {
        name: "description",
        content:
          "Senior Software Engineer with 3 years of experience — Node.js, TypeScript, AWS. Four live SaaS products, React Native mobile app, and 70+ delivered client websites.",
      },
      { property: "og:title", content: "Sachin Meshram — Senior Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend engineering with Node.js, TypeScript and AWS — four live SaaS products and 70+ delivered client websites.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* ───────────────────────────── HERO ───────────────────────────── */}
      <section className="ambient-top relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface-1/60 px-3 py-1.5">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-accent-cyan"
                style={{ animation: "soft-pulse 2.4s ease-in-out infinite" }}
              />
              <span className="text-xs text-muted-foreground">{profile.availability.label}</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Building Systems That<br />Power Real Products.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base text-foreground/85 sm:text-lg">
              Backend engineering, scalable SaaS architecture, cloud infrastructure, and AI-powered products.
            </p>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              I'm <span className="font-medium text-foreground">Sachin Meshram</span>, a Senior Software Engineer
              focused on building reliable backend systems, scalable SaaS platforms, and practical
              AI-powered applications. {profile.experienceYears}, based in {profile.location.split(",")[0]}.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore My Work
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/engineering"
                className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                View Engineering
              </Link>
              {profile.resume.available && (
                <a
                  href={profile.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Download className="size-4" aria-hidden />
                  Resume
                </a>
              )}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {profile.heroStack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border/80 bg-surface-2/60 px-3 py-1 font-mono text-xs text-foreground/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right — prominent photo */}
          <Reveal className="mx-auto w-full max-w-xs">
            <div className="glass node-glow relative rounded-3xl border border-border/70 p-3">
              <img
                src={profile.portraitSrc}
                alt="Portrait of Sachin Meshram"
                className="aspect-[3/4] w-full rounded-2xl border border-border/70 object-cover object-top"
              />
              {/* info strip below photo */}
              <div className="mt-3 space-y-1.5 pb-1">
                <p className="text-center text-sm font-semibold text-foreground">{profile.name}</p>
                <p className="text-center text-xs text-muted-foreground">{profile.title}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" aria-hidden />
                  {profile.location.split(",")[0]}
                </div>
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="GitHub"
                  >
                    <Github className="size-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Email"
                  >
                    <Mail className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── STATS ───────────────────────────── */}
      <section className="border-y border-border/60 bg-surface-1/40">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            { value: "3 years", label: "professional experience" },
            { value: "4 products", label: "live in production" },
            { value: "70+", label: "client websites delivered" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={
                "flex items-baseline justify-center gap-3 rounded-xl px-4 py-3 text-center " +
                (i < 2 ? "sm:border-r sm:border-border/60" : "")
              }
            >
              <p className="text-xl font-bold tracking-tight text-gradient sm:text-2xl">{s.value}</p>
              <p className="text-xs text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── SYSTEM DIAGRAM ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — text */}
          <Reveal>
            <p className="mono-label">engineering ecosystem</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              An interconnected system,<br className="hidden sm:block" /> not just code.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every product I build connects multiple engineering layers working together — not in isolation.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { label: "APIs & Integrations", desc: "Shopify, Meta, Google, shipping partners — real platform data flowing in." },
                { label: "Event-Driven Backend", desc: "SQS queues and background workers processing data reliably at any scale." },
                { label: "Databases", desc: "DynamoDB, PostgreSQL, Redis — schemas designed around actual access patterns." },
                { label: "AI Services", desc: "RAG pipelines grounded in real merchant data via Pinecone and AWS Bedrock." },
                { label: "Cloud Infrastructure", desc: "AWS ECS, EC2, S3, CloudWatch — containerised and observable in production." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-1.5 size-1.5 flex-none rounded-full bg-accent-cyan" aria-hidden />
                  <div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className="text-sm text-muted-foreground"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link
                to="/engineering"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:underline"
              >
                See the full engineering breakdown
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* Right — diagram */}
          <Reveal>
            <div className="glass node-glow rounded-2xl border border-border/70 p-3 sm:p-4">
              <div className="mx-auto w-full max-w-md lg:max-w-full">
                <HeroSystemDiagram />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── FEATURED PROJECTS ───────────────────────────── */}
      <section className="border-t border-border/60 bg-surface-1/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            kicker="featured work"
            title="Four live products, built end to end."
            lead="Real products in production — each with a full case study covering the problem, architecture, engineering decisions, and results."
          />
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2">
            {featuredProjects.map((p) => {
              const a = accentClasses(p.accent);
              const screenshots: Record<string, string> = {
                "profit-first": "/profit-first.png",
                "ads-manager": "/ads-manager.png",
                "see-before-buy": "/see-before-buy.png",
                "whatsapp-automation": "/wautomation.png",
              };
              const imgSrc = screenshots[p.id];
              return (
                <StaggerItem key={p.id}>
                  <div className={"flex h-full flex-col rounded-xl border bg-surface-1/50 overflow-hidden " + a.border}>
                    {/* screenshot */}
                    {imgSrc && (
                      <div className="aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-surface-2">
                        <img
                          src={imgSrc}
                          alt={`${p.name} product screenshot`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      {/* top */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="mono-label">{p.kind}</p>
                          <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">{p.name}</h3>
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

                      {/* tagline */}
                      <p className={"mt-2 text-sm font-medium " + a.text}>{p.tagline}</p>

                      {/* context */}
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.context}</p>

                      {/* my role */}
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground/70">My role: </span>
                        {p.myRole}
                      </p>

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

                      {/* links */}
                      <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm">
                        <Link
                          to={projectRoute(p.id)}
                          className={"inline-flex items-center gap-1.5 font-medium hover:underline " + a.text}
                        >
                          Full case study
                          <ArrowRight className="size-3.5" aria-hidden />
                        </Link>
                        {p.links[0] && (
                          <a
                            href={p.links[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                          >
                            {p.links[0].label}
                            <ArrowUpRight className="size-3.5" aria-hidden />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ───────────────────────────── MOBILE APP STRIP ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-2 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/70 bg-surface-1/50 px-6 py-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-12 flex-none items-center justify-center rounded-xl border border-accent-blue/40 bg-accent-blue/10">
                {/* phone icon inline SVG */}
                <svg className="size-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <circle cx="12" cy="18" r="0.75" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Profit First — also on Android &amp; iOS
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  React Native mobile app · Node.js backend · AWS · Built from scratch
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#"
                aria-label="Download on the App Store (coming soon)"
                className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
                <span className="rounded-full bg-surface-2 px-1.5 py-0.5 text-[10px]">Soon</span>
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play (coming soon)"
                className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.18 23.76c.3.17.64.22.99.15l12.5-7.15-2.54-2.54-10.95 9.54zM.54 1.18C.2 1.54 0 2.1 0 2.83v18.34c0 .73.2 1.29.54 1.65l.09.08 10.27-10.27v-.24L.63 1.1l-.09.08zM20.12 10.5l-2.62-1.5-2.85 2.85 2.85 2.85 2.63-1.51c.75-.43.75-1.12 0-1.69zM3.18.24L15.68 7.4l-2.54 2.54L2.19.4c.35-.07.7-.02.99.15v-.31z"/>
                </svg>
                Google Play
                <span className="rounded-full bg-surface-2 px-1.5 py-0.5 text-[10px]">Soon</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ───────────────────────────── WHAT I DO ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          kicker="what I do"
          title="Five engineering areas I work in every week."
          align="center"
        />
        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {domains.map((d) => {
            const a = accentClasses(d.accent);
            return (
              <StaggerItem key={d.id}>
                <Link
                  to="/engineering"
                  className="flex h-full flex-col gap-2 rounded-xl border border-border/70 bg-background/60 p-4 transition-colors hover:border-border hover:bg-surface-2/60"
                >
                  <span className={"size-2.5 rounded-full " + a.dot} aria-hidden />
                  <h3 className="text-sm font-semibold text-foreground">{d.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{d.summary}</p>
                  <p className={"mt-auto pt-2 text-xs font-medium " + a.text}>
                    {d.tech.slice(0, 2).join(" · ")}
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ───────────────────────────── ENGINEERING JOURNEY ───────────────────────────── */}
      <section className="border-y border-border/60 bg-surface-1/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <SectionHeading
            kicker="the journey"
            title="How I got here — a progression of capabilities."
            lead="Not a timeline of jobs. A progression of real engineering capabilities built over 3 years."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {journey.slice(0, 8).map((stage, i) => (
              <Reveal key={stage.title}>
                <div className="flex gap-3 rounded-xl border border-border/70 bg-background/60 p-4">
                  <span className="mono-label mt-0.5 flex-none text-accent-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {stage.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Full story on the About page
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────── ENGINEERING PRINCIPLES ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          kicker="how I think"
          title="Good software is more than working code."
          lead="Seven engineering principles I apply to every system I build."
        />
        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Design for reliability",
              body: "Queues, retries and idempotent handlers so a burst of events degrades gracefully instead of corrupting state.",
              dot: "bg-accent-blue",
            },
            {
              title: "Keep systems observable",
              body: "Structured logging and CloudWatch dashboards — if I can't see what a system is doing, I can't fix it.",
              dot: "bg-accent-cyan",
            },
            {
              title: "Make async processing dependable",
              body: "Most silent failures live in async jobs. Background workers need the same care as APIs.",
              dot: "bg-accent-violet",
            },
            {
              title: "Protect data integrity",
              body: "Webhook verification, validation at boundaries, and schemas driven by access patterns — bad data compounds.",
              dot: "bg-accent-warm",
            },
            {
              title: "Optimize real bottlenecks",
              body: "Add caching and indexing where latency is actually paid, not where it's fashionable.",
              dot: "bg-accent-blue",
            },
            {
              title: "Connect decisions to outcomes",
              body: "Technical choices should trace back to something the business feels — latency, cost, conversion, trust.",
              dot: "bg-accent-cyan",
            },
          ].map((p) => (
            <StaggerItem key={p.title}>
              <div className="flex gap-3 rounded-xl border border-border/70 bg-surface-1/50 p-5">
                <span className={"mt-1.5 size-2 flex-none rounded-full " + p.dot} aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">{p.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ───────────────────────────── CONTACT ───────────────────────────── */}
      <section className="border-t border-border/60 bg-surface-1/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal className="ambient-top rounded-2xl border border-border/70 bg-surface-1/50 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Have a product worth building?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              {profile.availability.note} Open to backend, cloud, and AI engineering conversations.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Mail className="size-4" aria-hidden />
                Email me
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border/80 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                All contact links
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3" aria-hidden />
                {profile.location}
              </span>
              <span aria-hidden>·</span>
              {codingProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground"
                >
                  {p.name}
                  <ArrowUpRight className="size-3" aria-hidden />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
