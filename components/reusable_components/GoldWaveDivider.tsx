import { GoldWave } from "@/components/ui/GoldWave";

interface GoldWaveDividerProps {
  className?: string;
  count?: number;
  opacity?: number;
}

/**
 * Renders the repeating top-of-section GoldWave accent with
 * a negative-margin pull-up so it overlaps the section above.
 */
export default function GoldWaveDivider({
  className = "h-24 opacity-30",
  count = 8,
  opacity,
}: GoldWaveDividerProps) {
  return (
    <div className="-mb-24">
      <GoldWave className={className} count={count} opacity={opacity} />
    </div>
  );
}
