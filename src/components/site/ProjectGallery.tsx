import { useState } from "react";
import { FolderPlus } from "lucide-react";
import { otherProjects, otherProjectCategories } from "@/data/projects";

/**
 * Filterable gallery for other live products and experiments. Ships with a
 * designed empty state — entries come only from the real supplied list.
 */
export function ProjectGallery() {
  const [category, setCategory] = useState<(typeof otherProjectCategories)[number]>("All");

  const visible = otherProjects.filter(
    (p) => category === "All" || p.category === category,
  );

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {otherProjectCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors " +
              (category === c
                ? "border-accent-blue/50 bg-accent-blue/10 text-accent-blue"
                : "border-border/80 text-muted-foreground hover:border-border hover:text-foreground")
            }
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li
              key={p.name}
              className="flex h-full flex-col rounded-xl border border-border/70 bg-surface-1/50 p-5"
            >
              <p className="mono-label">{p.category}</p>
              <h3 className="mt-1.5 text-base font-semibold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-auto pt-4">
                <p className="mono-label normal-case">Stack · {p.stack.join(" · ")}</p>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-accent-cyan hover:underline"
                  >
                    Visit project
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface-1/40 px-6 py-14 text-center">
          <div className="flex size-11 items-center justify-center rounded-lg border border-border/80 bg-surface-2">
            <FolderPlus className="size-5 text-muted-foreground" aria-hidden />
          </div>
          <p className="text-sm font-medium text-foreground">Reserved for more live work</p>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            This gallery fills in from the real project list — other live builds and
            experiments will appear here, organized by category. Nothing is
            pre-seeded, because every entry should point at something real.
          </p>
        </div>
      )}
    </div>
  );
}
