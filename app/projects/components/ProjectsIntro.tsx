"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";

export default function ProjectsIntro() {
  return (
    <SectionContainer className="py-24">
      <div className="max-w-4xl">
        <GoldWaveDivider />
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Summit Programme & Awards
          </h2>
          <div className="h-1 w-24 bg-accent mb-12" />
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-serif">
            The Hotelier Africa Leadership Summit 2026 features four high-level
            sessions — the Executive Leadership Conference, CEO & GM Roundtable,
            Hospitality Investment Dialogue, and Executive Networking Reception —
            alongside the prestigious Hotelier Africa Leadership Awards, spanning
            40 categories across 3 award tiers, and the unveiling of Africa&apos;s
            Top 50 Hotel General Managers.
          </p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
