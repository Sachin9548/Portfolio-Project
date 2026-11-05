import type { Accent } from "@/data/skills";

/**
 * Accent → literal Tailwind class sets. The strings are written out so the
 * Tailwind scanner always sees them (no dynamic class assembly).
 */
export function accentClasses(accent: Accent) {
  switch (accent) {
    case "cyan":
      return {
        text: "text-accent-cyan",
        dot: "bg-accent-cyan",
        chip: "border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan",
        border: "border-accent-cyan/35",
        hoverBorder: "hover:border-accent-cyan/60",
      };
    case "violet":
      return {
        text: "text-accent-violet",
        dot: "bg-accent-violet",
        chip: "border-accent-violet/40 bg-accent-violet/10 text-accent-violet",
        border: "border-accent-violet/35",
        hoverBorder: "hover:border-accent-violet/60",
      };
    case "warm":
      return {
        text: "text-accent-warm",
        dot: "bg-accent-warm",
        chip: "border-accent-warm/40 bg-accent-warm/10 text-accent-warm",
        border: "border-accent-warm/35",
        hoverBorder: "hover:border-accent-warm/60",
      };
    default:
      return {
        text: "text-accent-blue",
        dot: "bg-accent-blue",
        chip: "border-accent-blue/40 bg-accent-blue/10 text-accent-blue",
        border: "border-accent-blue/35",
        hoverBorder: "hover:border-accent-blue/60",
      };
  }
}

/** CSS variable name for an accent, usable in inline styles / SVG fills. */
export function accentVar(accent: Accent): string {
  return `var(--accent-${accent})`;
}
