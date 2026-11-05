import { ArrowUpRight } from "lucide-react";
import { clientWebsites, type ClientWebsiteCategory } from "@/data/clientWebsites";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const groups: { title: string; category: ClientWebsiteCategory }[] = [
  { title: "Custom-coded websites", category: "Custom-coded" },
  { title: "Shopify e-commerce websites", category: "Shopify e-commerce" },
];

/**
 * Compact gallery of real delivered business websites and storefronts.
 * Secondary to the flagship SaaS case studies — names, links and previews only.
 */
export function ClientWebsites() {
  return (
    <div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Beyond SaaS products and backend engineering, I have also worked on
        real-world business websites and e-commerce storefronts, translating
        business requirements into functional web experiences.
      </p>

      {groups.map((g) => {
        const sites = clientWebsites.filter((s) => s.category === g.category);
        if (sites.length === 0) return null;
        return (
          <div key={g.category} className="mt-8">
            <p className="mono-label">{g.title}</p>
            <Stagger className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sites.map((s) => (
                <StaggerItem key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl border border-border/70 bg-surface-1/50 transition-colors hover:border-border hover:bg-surface-2/60"
                  >
                    <div className="aspect-[16/10] overflow-hidden border-b border-border/60 bg-surface-2">
                      <img
                        src={s.preview}
                        alt={s.previewAlt}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 px-4 py-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{s.name}</p>
                        <p className="truncate font-mono text-[11px] text-muted-foreground">
                          {s.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="size-4 flex-none text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        );
      })}

      <Reveal>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Previews captured from the live websites. These were delivered as
          client work — the SaaS case studies above remain the primary record of
          my engineering depth.
        </p>
      </Reveal>
    </div>
  );
}
