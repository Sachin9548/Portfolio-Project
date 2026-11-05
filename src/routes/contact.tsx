import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight, ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { codingProfiles } from "@/data/codingProfiles";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sachin Meshram" },
      {
        name: "description",
        content:
          "Get in touch with Sachin Meshram — Senior Software Engineer in Nagpur, India. Open to backend engineering roles at product companies.",
      },
      { property: "og:title", content: "Contact — Sachin Meshram" },
      { property: "og:description", content: "Open to backend, cloud, and AI engineering conversations. Based in Nagpur, open to remote." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      note: "Best way to reach me. I reply to every genuine message.",
      accent: "text-accent-cyan",
      border: "border-accent-cyan/30",
      bg: "bg-accent-cyan/5",
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:+91${profile.phone}`,
      note: "Available on call and WhatsApp.",
      accent: "text-accent-blue",
      border: "border-accent-blue/30",
      bg: "bg-accent-blue/5",
      external: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/sachin-meshram248",
      href: profile.linkedin,
      note: "For professional messages and connection requests.",
      accent: "text-accent-blue",
      border: "border-accent-blue/30",
      bg: "bg-accent-blue/5",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Sachin9548",
      href: profile.github,
      note: "Code, open source, and experiments.",
      accent: "text-accent-violet",
      border: "border-accent-violet/30",
      bg: "bg-accent-violet/5",
      external: true,
    },
  ];

  return (
    <div className="ambient-top">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">

        {/* ── Header ── */}
        <header className="max-w-2xl">
          <p className="mono-label">contact</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's build something real.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Open to backend engineering roles at product companies where the work is
            real — SaaS, e-commerce, AI-powered systems. Based in Nagpur, open to remote.
            I reply to every genuine message.
          </p>
        </header>

        {/* ── Contact channels ── */}
        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <StaggerItem key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={"group flex h-full flex-col rounded-xl border p-5 transition-colors hover:bg-surface-2/60 " + c.border + " " + c.bg}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={"inline-flex items-center gap-2 text-sm font-semibold " + c.accent}>
                      <Icon className="size-4" aria-hidden />
                      {c.label}
                    </span>
                    {c.external && (
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    )}
                  </div>
                  <p className="mt-2 break-all font-mono text-sm text-foreground/90">{c.value}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* ── Resume ── */}
        {profile.resume.available && (
          <Reveal className="mt-8">
            <a
              href={profile.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-surface-1/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2/60"
            >
              <Download className="size-4 text-accent-cyan" aria-hidden />
              Download Resume (PDF)
            </a>
          </Reveal>
        )}

        {/* ── Good conversations to have ── */}
        <Reveal className="mt-12 rounded-xl border border-border/70 bg-surface-1/50 p-6">
          <p className="mono-label">good conversations to have</p>
          <ul className="mt-4 space-y-3">
            {[
              {
                text: "Backend or full-stack engineering roles at a product company where the work is real — not just maintenance.",
                dot: "bg-accent-blue",
              },
              {
                text: "Building or scaling a Shopify / Meta / e-commerce integration that needs serious backend engineering.",
                dot: "bg-accent-cyan",
              },
              {
                text: "Adding AI features grounded in actual business data — RAG pipelines, not demos.",
                dot: "bg-accent-violet",
              },
              {
                text: "SaaS product companies in the 50–200 employee range looking for a senior backend engineer.",
                dot: "bg-accent-warm",
              },
            ].map((item) => (
              <li key={item.text} className="flex gap-3">
                <span className={"mt-1.5 size-1.5 flex-none rounded-full " + item.dot} aria-hidden />
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ── Coding profiles ── */}
        <Reveal className="mt-12">
          <p className="mono-label">also find me on</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {codingProfiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-surface-1/50 px-4 py-2.5 text-sm transition-colors hover:bg-surface-2/60"
              >
                <span className="font-medium text-foreground">{p.name}</span>
                {p.badge && (
                  <span className="mono-label rounded-full border border-accent-cyan/40 px-1.5 py-0.5 text-[10px]">
                    {p.badge}
                  </span>
                )}
                <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden />
              </a>
            ))}
          </div>
        </Reveal>

        {/* ── Location + nav ── */}
        <Reveal className="mt-12 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden />
              {profile.location} · Open to remote
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View my work
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
