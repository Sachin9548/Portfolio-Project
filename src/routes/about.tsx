import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { journey, principles, profile } from "@/data/profile";

const PORTRAIT_SRC = "/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sachin Meshram" },
      {
        name: "description",
        content:
          "About Sachin Meshram: a backend-leaning software engineer from Nagpur, India, three years into building SaaS platforms for commerce and advertising.",
      },
      { property: "og:title", content: "About — Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Three years into software engineering — how I got here and how I think about building products.",
      },
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
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
          <header>
            <p className="mono-label">about</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Hi, I'm Sachin.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm a Senior Software Engineer from Nagpur, India — currently at Ascent Media Agency where
              I build and maintain multi-platform SaaS products from the ground up. My core work is backend
              engineering: event-driven systems on AWS, data pipelines connecting Shopify, Meta, Google and
              shipping partners, DynamoDB schemas designed around real access patterns, and RAG-based AI
              tools grounded in actual merchant data. On top of that I've shipped a React Native mobile app
              for Android and iOS, and delivered 70+ client websites across Shopify and React/Next.js. I like
              problems where the data is messy, the scale is real, and the fix has to hold up in production.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden /> {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5" aria-hidden /> Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Linkedin className="size-3.5" aria-hidden /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Github className="size-3.5" aria-hidden /> GitHub
              </a>
            </div>
          </header>
          <div className="w-40 flex-none sm:w-48">
            <img
              src={PORTRAIT_SRC}
              alt="Portrait of Sachin Meshram"
              className="w-full rounded-xl border border-border/80 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <section className="mt-16">
          <p className="mono-label">the path so far</p>
          <ol className="mt-5 space-y-4">
            {journey.map((stage, i) => (
              <li key={stage.title} className="flex gap-4">
                <span className="mono-label mt-1 flex-none">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1 rounded-xl border border-border/70 bg-surface-1/50 p-5">
                  <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <p className="mono-label">how I work</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-border/70 bg-surface-1/50 p-5">
                <p className="text-sm font-semibold text-foreground">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-md text-sm text-muted-foreground">
              That's the short version. The case studies show how this plays out
              in real products.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View the work
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-border/70 bg-surface-1/50 p-6">
          <p className="mono-label">contact</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-foreground hover:underline">
              <Mail className="size-4" aria-hidden /> {profile.email}
            </a>
            <a href={`tel:+91${profile.phone}`} className="inline-flex items-center gap-2 text-foreground hover:underline">
              <Phone className="size-4" aria-hidden /> {profile.phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
