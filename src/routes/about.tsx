import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin, Github, Phone, MapPin, ArrowRight } from "lucide-react";
import { journey, principles, profile } from "@/data/profile";
import { skillCategories, education } from "@/data/skills";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sachin Meshram" },
      {
        name: "description",
        content:
          "Senior Software Engineer from Nagpur — 3 years building SaaS products, React Native apps, and 70+ client websites with Node.js, TypeScript, AWS.",
      },
      { property: "og:title", content: "About — Sachin Meshram" },
      { property: "og:description", content: "Backend engineer, SaaS builder, React Native developer." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="ambient-top">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">

        {/* ── Hero ── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_220px] lg:items-start">
          <header>
            <p className="mono-label">about</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              An Engineer Who Builds<br className="hidden sm:block" /> Across the Stack.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm a <span className="font-medium text-foreground">Senior Software Engineer</span> from
              Nagpur, India — currently at Ascent Media Agency where I build multi-platform SaaS products
              from the ground up. My core work is backend engineering: event-driven systems on AWS, data
              pipelines connecting Shopify, Meta, Google and shipping partners, DynamoDB schemas designed
              around real access patterns, and RAG-based AI tools grounded in actual merchant data.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              On top of that I've shipped a React Native mobile app for Android and iOS, and delivered 70+
              client websites across Shopify and React/Next.js. I like problems where the data is messy,
              the scale is real, and the fix has to hold up in production.
            </p>

            {/* contact row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden /> {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Mail className="size-3.5" aria-hidden /> {profile.email}
              </a>
              <a href={`tel:+91${profile.phone}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Phone className="size-3.5" aria-hidden /> {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Linkedin className="size-3.5" aria-hidden /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Github className="size-3.5" aria-hidden /> GitHub
              </a>
            </div>

            {/* quick stats */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { v: "3 years", l: "professional experience" },
                { v: "4", l: "SaaS products live" },
                { v: "70+", l: "client websites" },
                { v: "Android + iOS", l: "mobile app" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border/70 bg-surface-1/50 px-3 py-2">
                  <span className="text-sm font-bold text-gradient">{s.v} </span>
                  <span className="text-xs text-muted-foreground">{s.l}</span>
                </div>
              ))}
            </div>
          </header>

          {/* portrait */}
          <Reveal className="mx-auto w-52 lg:w-full">
            <div className="glass node-glow rounded-2xl border border-border/70 p-2">
              <img
                src="/portrait.jpg"
                alt="Portrait of Sachin Meshram"
                className="aspect-[3/4] w-full rounded-xl border border-border/60 object-cover object-top"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* ── Engineering Layers ── */}
        <Reveal className="mt-16">
          <SectionHeading
            kicker="engineering layers"
            title="What I work across."
            lead="Backend is my primary strength — but I've shipped complete products across every layer below."
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                layer: "Backend Engineering",
                primary: true,
                desc: "Node.js, TypeScript, NestJS, Express.js — REST APIs, integrations, background workers, event-driven systems.",
                dot: "bg-accent-blue",
              },
              {
                layer: "DSA & Problem Solving",
                primary: false,
                desc: "Core Java for DSA — algorithms, data structures, problem solving. HackerRank 5-Star Java, 150+ GFG problems.",
                dot: "bg-accent-warm",
              },              {
                layer: "Cloud & AWS",
                primary: true,
                desc: "ECS, EC2, S3, SQS, Lambda, Cognito, CloudWatch — containerised deployments and observable production systems.",
                dot: "bg-accent-violet",
              },
              {
                layer: "Database Engineering",
                primary: true,
                desc: "DynamoDB single-table design, PostgreSQL, MongoDB, Redis caching, Pinecone vector search.",
                dot: "bg-accent-cyan",
              },
              {
                layer: "AI & Automation",
                primary: false,
                desc: "RAG pipelines with Pinecone + AWS Bedrock, OpenAI API integrations, automated workflow systems.",
                dot: "bg-accent-blue",
              },
              {
                layer: "Frontend",
                primary: false,
                desc: "React.js, Next.js — dashboards, Shopify storefront apps, merchant-facing product experiences.",
                dot: "bg-accent-warm",
              },
              {
                layer: "Mobile",
                primary: false,
                desc: "React Native — Android and iOS. Built the Profit First executive app from scratch.",
                dot: "bg-accent-cyan",
              },
              {
                layer: "E-commerce",
                primary: false,
                desc: "Shopify app development, Meta Marketing + Conversions API, shipping partner integrations.",
                dot: "bg-accent-violet",
              },
              {
                layer: "DevOps",
                primary: false,
                desc: "Docker, CI/CD, Nginx, PM2 — deployment pipelines and server management.",
                dot: "bg-accent-warm",
              },
            ].map((item) => (
              <div
                key={item.layer}
                className={
                  "flex gap-3 rounded-xl border p-4 " +
                  (item.primary
                    ? "border-accent-blue/30 bg-surface-1/60"
                    : "border-border/70 bg-surface-1/40")
                }
              >
                <span className={"mt-1.5 size-2 flex-none rounded-full " + item.dot} aria-hidden />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">{item.layer}</p>
                    {item.primary && (
                      <span className="mono-label rounded-full border border-accent-blue/40 px-1.5 py-0.5 text-[10px]">primary</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Journey ── */}
        <Reveal className="mt-16">
          <SectionHeading
            kicker="the path so far"
            title="A progression of capabilities."
            lead="Not a list of jobs — a real sequence of engineering skills built over 3 years."
          />
          <ol className="mt-6 space-y-3">
            {journey.map((stage, i) => (
              <li key={stage.title} className="flex gap-4">
                <span className="mono-label mt-1 w-7 flex-none text-accent-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-xl border border-border/70 bg-surface-1/50 p-4">
                  <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* ── Principles ── */}
        <Reveal className="mt-16">
          <SectionHeading
            kicker="how I work"
            title="Engineering principles I apply every day."
          />
          <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title} className="rounded-xl border border-border/70 bg-surface-1/50 p-5">
                <p className="text-sm font-semibold text-foreground">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* ── Skills ── */}
        <Reveal className="mt-16">
          <SectionHeading kicker="skills" title="The full tech list." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-border/70 bg-surface-1/50 p-5">
                <p className="text-sm font-semibold text-foreground">{cat.title}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="rounded-full border border-border/70 bg-surface-2/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
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
          <SectionHeading kicker="education" title="Where it started." />
          <div className="mt-5 rounded-xl border border-border/70 bg-surface-1/50 p-5">
            <p className="text-base font-semibold text-foreground">{education.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">{education.institution}</p>
            <p className="mono-label mt-2 normal-case">{education.detail}</p>
          </div>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal className="mt-16 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-md text-sm text-muted-foreground">
              That's the full picture. The case studies show how this plays out in real products.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View the work
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
