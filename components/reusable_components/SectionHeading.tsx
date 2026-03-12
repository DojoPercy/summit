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
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      <div className={cn("flex items-center gap-3 mb-6", centered && "justify-center")}>
        <div className="h-px w-12 bg-accent" />
        <span className="text-accent text-[10px]">&#9670;</span>
        <div className="h-px w-6 bg-accent/40" />
      </div>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-foreground/60 max-w-2xl leading-relaxed",
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
