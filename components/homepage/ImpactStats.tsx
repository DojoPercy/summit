"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";
import { stats } from "./data";

export default function ImpactStats() {
  return (
    <section className="relative bg-accent/5 py-20 border-y border-accent/20 overflow-hidden">
      {/* Subtle warm diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, hsl(var(--accent)) 0, hsl(var(--accent)) 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      <SectionContainer className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.1}>
              <div className="flex flex-col items-center justify-center text-center px-8 py-10 group">
                <span className="font-headline text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                  {stat.value}
                </span>
                <div className="w-8 h-px bg-accent mb-3 group-hover:w-16 transition-all duration-500" />
                <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-foreground/40">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
