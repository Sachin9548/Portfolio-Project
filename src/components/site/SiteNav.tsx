import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/projects" },
  { label: "Engineering", to: "/engineering" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Sachin Meshram
          </span>
          <span className="mono-label hidden sm:inline normal-case">
            / engineering portfolio
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                "rounded-md px-3 py-1.5 text-sm transition-colors " +
                (isActive(l.to)
                  ? "text-foreground bg-secondary/70"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50")
              }
            >
              {l.label}
            </Link>
          ))}
          {profile.resume.available && (
            <a
              href={profile.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-border/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Download className="size-3" aria-hidden />
              Resume
            </a>
          )}
          <Link
            to="/contact"
            className="ml-1 inline-flex items-center gap-2 rounded-full border border-border/80 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent-blue/50 hover:text-foreground"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-accent-cyan"
              style={{ animation: "soft-pulse 2.4s ease-in-out infinite" }}
            />
            Open to conversations
          </Link>
        </nav>

        <button
          className="inline-flex size-9 items-center justify-center rounded-md border border-border/80 text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/60 bg-background/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={
                    "flex items-center justify-between rounded-md px-3 py-2.5 text-sm " +
                    (isActive(l.to)
                      ? "bg-secondary/70 text-foreground"
                      : "text-muted-foreground hover:text-foreground")
                  }
                >
                  {l.label}
                  <ArrowUpRight className="size-3.5 opacity-50" />
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
