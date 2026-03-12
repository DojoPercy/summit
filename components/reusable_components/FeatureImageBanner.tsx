import { cn } from "@/lib/utils";

interface FeatureImageBannerProps {
  src: string;
  alt: string;
  tagline: string;
  headline: string;
  /** Pass a React node if you need bold/formatted text inside the headline */
  headlineNode?: React.ReactNode;
  aspectRatio?: string;
  className?: string;
}

/**
 * Full-width image with a centred text overlay — used for atmospheric
 * section breaks across About and Contact pages.
 */
export default function FeatureImageBanner({
  src,
  alt,
  tagline,
  headline,
  headlineNode,
  aspectRatio = "aspect-[21/9]",
  className,
}: FeatureImageBannerProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-sm border border-border group",
        aspectRatio,
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-5 max-w-2xl px-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">
              {tagline}
            </span>
            <div className="h-px w-8 bg-accent/60" />
          </div>
          <h3 className="text-3xl md:text-4xl font-headline font-bold text-white italic">
            {headlineNode ?? headline}
          </h3>
        </div>
      </div>
    </div>
  );
}
