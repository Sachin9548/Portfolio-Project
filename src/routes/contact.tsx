import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from "lucide-react";
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
          "Get in touch with Sachin Meshram — backend and full-stack software engineer in Nagpur, India. Email, phone, LinkedIn and GitHub.",
      },
      { property: "og:title", content: "Contact — Sachin Meshram" },
      {
        property: "og:description",
        content:
          "Open to conversations about backend, cloud and AI engineering. Reach me by email, phone, LinkedIn or GitHub.",
      },
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
      note: "Usually the fastest way to reach me.",
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:+91${profile.phone}`,
      note: "Available on call and WhatsApp.",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/sachin-meshram248",
      href: profile.linkedin,
      note: "For professional messages and connection requests.",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Sachin9548",
      href: profile.github,
      note: "Code, experiments and contributions.",
      external: true,
    },
  ];

  return (
    <div className="ambient-top">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <header className="max-w-2xl">
          <p className="mono-label">contact</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's build something real.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Open to backend engineering roles at product companies where the work is real — SaaS,
            e-commerce, AI-powered systems. Based in Nagpur, open to remote. I reply to every genuine message.
          </p>
        </header>

        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <StaggerItem key={c.label}>
                <a
                  href={c.href}
                  {...("external" in c && c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col rounded-xl border border-border/70 bg-surface-1/50 p-5 transition-colors hover:bg-surface-2/60"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Icon className="size-4 text-accent-cyan" aria-hidden />
                      {c.label}
                    </span>
                    {"external" in c && c.external ? (
                      <ArrowUpRight
                        className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <p className="mt-2 break-all font-mono text-sm text-foreground/90">{c.value}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-12 rounded-xl border border-border/70 bg-surface-1/50 p-6">
          <p className="mono-label">good conversations to have</p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-1.5 size-1.5 flex-none rounded-full bg-accent-blue" />
              Backend or full-stack engineering roles where the work is real
              product development.
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-1.5 size-1.5 flex-none rounded-full bg-accent-cyan" />
              Building or scaling a Shopify / Meta / e-commerce integration.
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-1.5 size-1.5 flex-none rounded-full bg-accent-violet" />
              Adding AI features that are grounded in actual data, not demos.
            </li>
          </ul>
        </Reveal>

        <Reveal className="mt-12 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden /> {profile.location}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {codingProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {p.name}
                </a>
              ))}
              <Link to="/projects" className="text-sm font-medium text-foreground hover:underline">
                Or start with the work →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
