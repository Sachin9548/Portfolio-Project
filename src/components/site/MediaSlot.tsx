import { ImageOff } from "lucide-react";

interface MediaSlotProps {
  alt: string;
  caption: string;
  src?: string | undefined;
  className?: string;
}

/**
 * Honest media slot: renders the real screenshot when one exists,
 * otherwise a clearly-labeled placeholder that never pretends to be
 * product UI.
 */
export function MediaSlot({ alt, caption, src, className }: MediaSlotProps) {
  if (src) {
    return (
      <figure className={className}>
        <div className="overflow-hidden rounded-xl border border-border/80 bg-surface-1">
          <img src={src} alt={alt} loading="lazy" className="w-full object-cover" />
        </div>
        {caption ? <figcaption className="mono-label mt-2">{caption}</figcaption> : null}
      </figure>
    );
  }
  return (
    <figure className={className}>
      <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface-1/70 p-6 text-center">
        <div className="flex size-10 items-center justify-center rounded-lg border border-border/80 bg-surface-2">
          <ImageOff className="size-4 text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Screenshot placeholder</p>
          <p className="mono-label mt-1 normal-case">{alt}</p>
        </div>
      </div>
      {caption ? <figcaption className="mono-label mt-2">{caption}</figcaption> : null}
    </figure>
  );
}
