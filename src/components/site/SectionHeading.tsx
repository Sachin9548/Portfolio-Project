import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
}

export function SectionHeading({ kicker, title, lead, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="mono-label">{kicker}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {lead ? (
        <p
          className={
            "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base " +
            (align === "center" ? "mx-auto" : "")
          }
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
