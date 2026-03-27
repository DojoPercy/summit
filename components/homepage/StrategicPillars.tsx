"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";
import { pillars } from "./data";

export default function StrategicPillars() {
  return (
    <SectionContainer className="py-24" id="objectives">
      <Reveal>
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Why We Gather</span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Event Objectives
        </h2>
        <p className="text-foreground/60 text-lg max-w-3xl mb-16">
          The Ghana Green Mining & Critical Minerals Awards is not just an awards night — it is a national industry platform created to support Ghana&apos;s transition toward a modern, responsible, and globally competitive resource economy.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <Reveal key={idx} delay={idx * 0.08}>
            <div className="group border border-border bg-card hover:border-accent/50 transition-colors duration-300 p-8 h-full flex flex-col gap-5">
              {/* Number */}
              <span className="font-headline text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-300 leading-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {/* Title */}
              <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors duration-300">
                {pillar.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                {pillar.description}
              </p>
              {/* Bottom accent */}
              <div className="h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
