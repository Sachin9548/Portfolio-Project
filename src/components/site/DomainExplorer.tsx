import { useState } from "react";
import { domains } from "@/data/skills";
import { accentClasses } from "@/lib/accent";
import { ArrowRight } from "lucide-react";

/**
 * Interactive engineering-domain explorer: pick a domain, see where it was
 * applied in real products. Keyboard accessible, no invented content.
 */
export function DomainExplorer() {
  const [activeId, setActiveId] = useState(domains[0]?.id ?? "");
  const active = domains.find((d) => d.id === activeId) ?? domains[0];

  if (!active) return null;

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div
        role="tablist"
        aria-label="Engineering domains"
        className="flex flex-col gap-2"
      >
        {domains.map((d) => {
          const a = accentClasses(d.accent);
          const selected = d.id === active.id;
          return (
            <button
              key={d.id}
              role="tab"
              aria-selected={selected}
              type="button"
              onClick={() => setActiveId(d.id)}
              className={
                "rounded-xl border px-4 py-3.5 text-left transition-colors " +
                (selected
                  ? a.border + " bg-surface-2/70"
                  : "border-border/70 bg-surface-1/40 hover:border-border hover:bg-surface-2/50")
              }
            >
              <span className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">{d.title}</span>
                <ArrowRight
                  className={
                    "size-3.5 flex-none transition-opacity " +
                    (selected ? a.text : "text-muted-foreground opacity-0")
                  }
                  aria-hidden
                />
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">{d.summary}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-border/70 bg-surface-1/50 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          {active.tech.map((t) => {
            const a = accentClasses(active.accent);
            return (
              <span
                key={t}
                className={"rounded-full border px-2.5 py-0.5 font-mono text-[11px] " + a.chip}
              >
                {t}
              </span>
            );
          })}
        </div>
        <p className="mono-label mt-5">Applied in real products</p>
        <ul className="mt-3 space-y-4">
          {active.applications.map((app) => (
            <li key={app.context} className="border-l-2 pl-3.5" style={{ borderColor: "var(--border)" }}>
              <p className="text-sm font-medium text-foreground">{app.context}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{app.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
