interface GoldWaveDividerProps {
  className?: string;
}

/**
 * Hospitality ornamental section divider — replaces the animated wave
 * with a refined gold line + diamond ornament appropriate for luxury events.
 */
export default function GoldWaveDivider({ className = "" }: GoldWaveDividerProps) {
  return (
    <div className={`flex items-center gap-4 mb-16 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/40" />
      <div className="flex items-center gap-2">
        <div className="h-px w-8 bg-accent/60" />
        <span className="text-accent text-sm">&#9670;</span>
        <div className="h-px w-8 bg-accent/60" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/40" />
    </div>
  );
}
