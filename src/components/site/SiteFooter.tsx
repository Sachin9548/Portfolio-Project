import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { codingProfiles } from "@/data/codingProfiles";

const navGroups = [
  {
    title: "Explore",
    links: [
      { label: "Work", to: "/projects" },
      { label: "Engineering", to: "/engineering" },
      { label: "Experience", to: "/experience" },
      { label: "About", to: "/about" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface-1/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-foreground">Sachin Meshram</p>
          <p className="mono-label mt-1">Senior Software Engineer · Nagpur, India</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Software engineer in Nagpur, India — backend services on AWS,
            e-commerce integrations, and AI features grounded in real data.
          </p>
        </div>

        {navGroups.map((g) => (
          <div key={g.title}>
            <p className="mono-label">{g.title}</p>
            <ul className="mt-3 space-y-2">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="mono-label">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5" /> Email
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="size-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="size-3.5" /> GitHub
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" /> Nagpur, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Sachin Meshram. Built with care in Nagpur, India.
          </p>
          <ul className="flex items-center gap-4">
            {codingProfiles.map((p) => (
              <li key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {p.name}
                  <ArrowUpRight className="size-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
