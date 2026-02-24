"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";
import { GoldWave } from "@/components/ui/GoldWave";
import { stats } from "./data";

export default function ImpactStats() {
  return (
    <section className="relative bg-secondary/10 py-24 border-y border-border overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <GoldWave className="h-full" count={15} opacity={0.8} />
      </div>
      <SectionContainer className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.1}>
              <div className="text-center space-y-4 group">
                <div className="mx-auto w-12 h-12 bg-card border border-border flex items-center justify-center rounded-sm group-hover:bg-accent/10 transition-colors">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold text-foreground tracking-tighter">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
