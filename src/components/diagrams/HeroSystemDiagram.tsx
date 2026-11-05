import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  accent?: "blue" | "cyan" | "violet" | "warm";
}

const nodes: Node[] = [
  { x: 250, y: 246, w: 140, h: 52, label: "SaaS Platform", sub: "core app", accent: "blue" },
  { x: 258, y: 40, w: 124, h: 44, label: "End Users" },
  { x: 40, y: 128, w: 118, h: 44, label: "Shopify API" },
  { x: 482, y: 128, w: 118, h: 44, label: "Meta API" },
  { x: 32, y: 306, w: 118, h: 44, label: "Databases", sub: "SQL · NoSQL" },
  { x: 84, y: 452, w: 118, h: 44, label: "Workers", sub: "async jobs" },
  { x: 274, y: 470, w: 122, h: 44, label: "AI Services", sub: "LLM · RAG" },
  { x: 484, y: 306, w: 118, h: 44, label: "AWS Cloud", sub: "ECS · SQS" },
  { x: 492, y: 470, w: 118, h: 44, label: "Analytics", sub: "insights" },
];

// Edge paths from the center node's edge midpoint to the neighbor node.
const edges: { d: string; accent: string; dur: number; delay: number }[] = [
  { d: "M320,246 C320,180 320,130 320,84", accent: "var(--accent-cyan)", dur: 2.6, delay: 0 },
  { d: "M250,258 C190,244 160,208 158,172", accent: "var(--accent-blue)", dur: 3, delay: 0.7 },
  { d: "M390,258 C450,244 480,208 482,172", accent: "var(--accent-blue)", dur: 3, delay: 1.4 },
  { d: "M250,278 C190,288 158,296 150,306", accent: "var(--accent-cyan)", dur: 2.8, delay: 0.4 },
  { d: "M250,298 C200,340 160,404 143,452", accent: "var(--accent-violet)", dur: 3.2, delay: 1 },
  { d: "M320,298 C320,360 322,420 330,470", accent: "var(--accent-warm)", dur: 3.4, delay: 1.8 },
  { d: "M390,278 C450,288 484,296 484,306", accent: "var(--accent-violet)", dur: 2.9, delay: 2.2 },
  { d: "M390,298 C440,340 480,404 508,452", accent: "var(--accent-cyan)", dur: 3.1, delay: 2.6 },
];

function cx(n: Node) {
  return n.x + n.w / 2;
}

/**
 * Hero "connected system" visualization: a lightweight animated SVG of the
 * engineering ecosystem — application core, APIs, databases, workers,
 * AI services, cloud infrastructure, analytics and end users, with data
 * packets moving along every connection. Static (no packets) under
 * reduced-motion preferences.
 */
export function HeroSystemDiagram() {
  const reduce = useReducedMotion();
  const center = nodes[0];

  return (
    <svg
      viewBox="0 0 640 540"
      role="img"
      aria-label="Animated system map: a central SaaS platform connected to end users, Shopify and Meta APIs, databases, background workers, AI services, AWS infrastructure and analytics."
      className="h-auto w-full"
    >
      <defs>
        <pattern id="hero-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path
            d="M36 0H0V36"
            fill="none"
            stroke="var(--border)"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="640" height="540" fill="url(#hero-grid)" />

      {/* edges */}
      {edges.map((e) => (
        <path
          key={e.d}
          d={e.d}
          fill="none"
          stroke={e.accent}
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          style={reduce ? undefined : { animation: "dash-flow 1.6s linear infinite" }}
        />
      ))}

      {/* data packets */}
      {!reduce &&
        edges.map((e) => (
          <circle key={`p-${e.d}`} r="3.5" fill={e.accent} opacity="0.95">
            <animateMotion dur={`${e.dur}s`} begin={`${e.delay}s`} repeatCount="indefinite" path={e.d} />
          </circle>
        ))}

      {/* nodes */}
      {nodes.map((n) => {
        const isCenter = n === center;
        const color =
          n.accent === "cyan"
            ? "var(--accent-cyan)"
            : n.accent === "violet"
              ? "var(--accent-violet)"
              : n.accent === "warm"
                ? "var(--accent-warm)"
                : n.accent === "blue"
                  ? "var(--accent-blue)"
                  : "var(--border)";
        return (
          <g key={n.label}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="10"
              fill="var(--surface-2)"
              stroke={color}
              strokeOpacity={isCenter ? 0.9 : 0.45}
              strokeWidth={isCenter ? 1.5 : 1}
            />
            {isCenter && (
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                rx="10"
                fill="none"
                stroke={color}
                strokeOpacity="0.25"
                strokeWidth="6"
              />
            )}
            <text
              x={cx(n)}
              y={n.sub ? n.y + n.h / 2 - 2 : n.y + n.h / 2 + 4}
              textAnchor="middle"
              fill="var(--foreground)"
              fontSize="12.5"
              fontFamily="var(--font-mono)"
              fontWeight={isCenter ? 600 : 500}
            >
              {n.label}
            </text>
            {n.sub && (
              <text
                x={cx(n)}
                y={n.y + n.h / 2 + 14}
                textAnchor="middle"
                fill="var(--muted-foreground)"
                fontSize="9.5"
                fontFamily="var(--font-mono)"
              >
                {n.sub}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
