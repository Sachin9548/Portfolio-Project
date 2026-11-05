import { useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  PlugZap,
  CloudDownload,
  Download,
  ShieldCheck,
  Layers,
  Cpu,
  Shuffle,
  Database,
  Network,
  LayoutDashboard,
  User,
  SlidersHorizontal,
  Cog,
  Cloud,
  Archive,
  Server,
  Image as ImageIcon,
  Webhook,
  GitBranch,
  MessageCircle,
  Reply,
  HelpCircle,
  ScanSearch,
  FileSearch,
  Sparkles,
  Zap,
  Radio,
  BarChart3,
  Eye,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import type { DiagramIconKey, DiagramSpec } from "@/data/projects";
import type { Accent } from "@/data/skills";
import { accentClasses } from "@/lib/accent";

const icons: Record<DiagramIconKey, LucideIcon> = {
  api: PlugZap,
  source: CloudDownload,
  ingest: Download,
  validate: ShieldCheck,
  queue: Layers,
  worker: Cpu,
  transform: Shuffle,
  db: Database,
  "analytics-api": Network,
  dashboard: LayoutDashboard,
  user: User,
  config: SlidersHorizontal,
  process: Cog,
  cloud: Cloud,
  s3: Archive,
  ec2: Server,
  image: ImageIcon,
  webhook: Webhook,
  rules: GitBranch,
  message: MessageCircle,
  response: Reply,
  question: HelpCircle,
  vector: ScanSearch,
  context: FileSearch,
  llm: Sparkles,
  event: Zap,
  collect: Radio,
  report: BarChart3,
  preview: Eye,
};

interface DataFlowDiagramProps {
  spec: DiagramSpec;
  accent: Accent;
}

/**
 * Animated, interactive data-flow diagram. Vertical pipeline of stages with
 * data packets traveling the connector while the diagram is on screen.
 * Every stage expands to explain what happens there. Respects reduced motion.
 */
export function DataFlowDiagram({ spec, accent }: DataFlowDiagramProps) {
  const a = accentClasses(accent);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const [open, setOpen] = useState<number | null>(null);
  const showPackets = !reduce && inView;

  return (
    <div ref={ref} className="rounded-xl border border-border/70 bg-surface-1/50 p-4 sm:p-6">
      <p className="mono-label">animated diagram · interactive</p>
      <h3 className="mt-1 text-lg font-semibold text-foreground">{spec.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{spec.description}</p>

      <ol className="mt-6">
        {spec.stages.map((stage, i) => {
          const Icon = icons[stage.icon] ?? Cog;
          const isOpen = open === i;
          const isLast = i === spec.stages.length - 1;
          return (
            <li key={stage.label} className="relative flex gap-3 sm:gap-4">
              {/* connector rail */}
              <div className="flex w-10 flex-none flex-col items-center sm:w-12">
                <div
                  className={
                    "flex size-10 flex-none items-center justify-center rounded-lg border bg-surface-2 " +
                    a.border
                  }
                >
                  <Icon className={"size-4 " + a.text} aria-hidden />
                </div>
                {!isLast && (
                  <div className="relative w-px flex-1 bg-border/80" aria-hidden>
                    {showPackets && (
                      <span
                        className={"absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full " + a.dot}
                        style={{
                          animation: "packet-fall 2.2s linear infinite",
                          animationDelay: `${(i % 4) * 0.55}s`,
                          boxShadow: "0 0 8px 1px currentColor",
                          color: "inherit",
                        }}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* stage */}
              <div className={"min-w-0 flex-1 " + (isLast ? "pb-0" : "pb-4")}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={
                    "group flex w-full items-center justify-between gap-3 rounded-lg border border-transparent px-3 py-2 text-left transition-colors hover:border-border hover:bg-surface-2/60 " +
                    (isOpen ? "border-border bg-surface-2/70" : "")
                  }
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {stage.label}
                    </span>
                    {stage.sub ? (
                      <span className="mono-label block normal-case">{stage.sub}</span>
                    ) : null}
                  </span>
                  <ChevronDown
                    className={
                      "size-4 flex-none text-muted-foreground transition-transform " +
                      (isOpen ? "rotate-180" : "")
                    }
                  />
                </button>
                {isOpen && (
                  <p className="px-3 pb-1 pt-2 text-sm leading-relaxed text-muted-foreground">
                    {stage.detail}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mono-label mt-4 normal-case">
        Click any stage to see what happens at that point in the flow.
      </p>
    </div>
  );
}
