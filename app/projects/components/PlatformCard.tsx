"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";

interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imagePath: string;
  details: string[];
  detailsLabel?: string;
  ctaLabel?: string;
  label?: string;
  index: number;
}

export default function PlatformCard({
  icon,
  title,
  description,
  imagePath,
  details,
  detailsLabel = "Key Focus Areas",
  ctaLabel = "Enquire about this session",
  label,
  index,
}: PlatformCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`border-b border-border/50 last:border-0 ${isReversed ? "bg-background" : ""}`}>
      <SectionContainer className="py-24 lg:py-32">
        <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Visual */}
          <div className="w-full lg:w-1/2 relative">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border group shadow-2xl">
                <img
                  src={imagePath}
                  alt={title}
                  className="w-full h-full object-cover brightness-75 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="p-3 bg-accent text-white rounded-xs">{icon}</div>
                  <span className="text-white text-xs uppercase tracking-[0.3em] font-bold">
                    {label ?? `Session ${index + 1}`}
                  </span>
                </div>
              </div>
            </Reveal>
            <div className={`absolute w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10 ${isReversed ? "-left-20 -top-20" : "-right-20 -bottom-20"}`} />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                  {title}
                </h3>
                <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-serif">
                  {description}
                </p>
              </div>
              <div className="h-px w-full bg-border/50 my-10" />
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
                  {detailsLabel}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-4">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm text-foreground/80 leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-10">
                <a
                  href="/contact"
                  className="text-accent uppercase tracking-widest text-xs font-bold border-b border-accent pb-1 hover:text-accent/70 hover:border-accent/70 transition-all"
                >
                  {ctaLabel}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <GoldWaveDivider />
      </SectionContainer>
    </div>
  );
}
