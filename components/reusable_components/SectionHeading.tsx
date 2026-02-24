import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  divider?: boolean;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  divider = false,
  centered = false,
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      {divider && (
        <div
          className={cn(
            "h-1 w-24 bg-accent mb-8",
            centered && "mx-auto"
          )}
        />
      )}
      {subtitle && (
        <p
          className={cn(
            "text-xl text-foreground/60 max-w-2xl leading-relaxed",
            centered && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
