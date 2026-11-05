import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { FeaturedProject } from "@/data/projects";
import { featuredProjects } from "@/data/projects";
import { DataFlowDiagram } from "@/components/diagrams/DataFlowDiagram";
import { MediaSlot } from "@/components/site/MediaSlot";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { accentClasses } from "@/lib/accent";
import { projectRoute } from "@/lib/links";

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-border/70 bg-surface-1/50 p-5">
      <p className="mono-label">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{text}</p>
    </div>
  );
}

/**
 * Shared case-study layout: intro, context, contribution, animated
 * architecture, narrative, decisions, stack, challenges, reported results,
 * media slot, live links and related capabilities.
 */
export function CaseStudy({ project }: { project: FeaturedProject }) {
  const a = accentClasses(project.accent);
  const idx = featuredProjects.findIndex((p) => p.id === project.id);
  const next =
    featuredProjects[(idx + 1) % featuredProjects.length] ?? project;

  return (
    <article className="ambient-top">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <header>
          <p className="mono-label">case study · {project.kind}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.name}
          </h1>
          <p className={"mt-3 text-lg font-medium " + a.text}>{project.tagline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.positioning}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors " +
                  a.chip + " " + a.hoverBorder
                }
              >
                {l.label}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </header>

        <MediaSlot
          alt={project.media.alt}
          caption={project.media.caption}
          src={project.media.src}
          className="mt-10"
        />

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-3">
          <InfoBlock label="Context" text={project.context} />
          <InfoBlock label="Problem" text={project.problem} />
          <InfoBlock label="My role" text={project.myRole} />
        </Reveal>

        <Reveal className="mt-12">
          <p className="mono-label">My contribution</p>
          <Stagger className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {project.contributions.map((c) => (
              <StaggerItem
                key={c}
                className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-surface-1/50 px-3.5 py-2.5"
              >
                <span className={"mt-1.5 size-1.5 flex-none rounded-full " + a.dot} aria-hidden />
                <span className="text-sm leading-relaxed text-foreground/90">{c}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="mt-14">
          <p className="mono-label">Architecture</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
            How the system works
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Live diagrams, not screenshots — click any stage to expand what happens
            at that point in the flow.
          </p>
        </Reveal>
        <div className="mt-6 space-y-8">
          {project.architectures.map((spec) => (
            <DataFlowDiagram key={spec.title} spec={spec} accent={project.accent} />
          ))}
        </div>

        {project.journeys && project.journeys.length > 0 ? (
          <Reveal className="mt-14">
            <p className="mono-label">User journey</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              How people move through the product
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              The flows users actually follow — from first action to the outcome
              the system delivers.
            </p>
            <div className="mt-6 space-y-8">
              {project.journeys.map((spec) => (
                <DataFlowDiagram key={spec.title} spec={spec} accent={project.accent} />
              ))}
            </div>
          </Reveal>
        ) : null}

        {project.narrative ? (
          <Reveal className="mt-14 rounded-xl border border-border/70 bg-surface-1/50 p-6 sm:p-8">
            <p className="mono-label">Engineering narrative</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {project.narrative.title}
            </h2>
            <div className="mt-4 space-y-4">
              {project.narrative.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-14">
          <p className="mono-label">Engineering decisions</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">Why it's built this way</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.decisions.map((d) => (
              <div key={d.title} className={"rounded-xl border bg-surface-1/50 p-4 " + a.border}>
                <p className="text-sm font-semibold text-foreground">{d.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <p className="mono-label">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border/80 bg-surface-2/60 px-3 py-1 font-mono text-xs text-foreground/85"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <p className="mono-label">Challenges &amp; solutions</p>
          <ul className="mt-4 space-y-3">
            {project.challenges.map((c) => (
              <li key={c.challenge} className="rounded-xl border border-border/70 bg-surface-1/50 p-5">
                <p className="text-sm font-medium text-foreground">{c.challenge}</p>
                <p className="mt-2 flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className={"mt-0.5 flex-none font-mono text-xs " + a.text}>fix</span>
                  {c.solution}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {project.results.length > 0 ? (
          <Reveal className="mt-12">
            <p className="mono-label">Reported results</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.results.map((r) => (
                <div key={r.label} className="rounded-xl border border-border/70 bg-surface-1/50 p-5">
                  <p className={"text-3xl font-bold tracking-tight " + a.text}>{r.value}</p>
                  <p className="mt-1 text-sm text-foreground/90">{r.label}</p>
                  <p className="mono-label mt-2 normal-case leading-relaxed">{r.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-12">
          <p className="mono-label">Related capabilities</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.relatedCapabilities.map((cap) => (
              <Link
                key={cap}
                to="/engineering"
                className={"rounded-full border px-3 py-1 text-xs transition-colors " + a.chip + " " + a.hoverBorder}
              >
                {cap}
              </Link>
            ))}
          </div>
        </Reveal>

        <nav aria-label="Next case study" className="mt-16 border-t border-border/60 pt-8">
          <Link
            to={projectRoute(next.id)}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-surface-1/50 p-5 transition-colors hover:border-border"
          >
            <span>
              <span className="mono-label block">Next case study</span>
              <span className="mt-1 block text-lg font-semibold text-foreground">{next.name}</span>
              <span className="mt-0.5 block text-sm text-muted-foreground">{next.tagline}</span>
            </span>
            <ArrowRight
              className="size-5 flex-none text-muted-foreground transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </nav>
      </div>
    </article>
  );
}
