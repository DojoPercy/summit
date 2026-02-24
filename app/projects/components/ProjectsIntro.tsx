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
            Curated Leadership Ecosystems
          </h2>
          <div className="h-1 w-24 bg-accent mb-12" />
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-serif">
            Our platforms are engineered to create meaningful dialogue and
            strategic connection among technology executives, policy makers,
            and global innovation leaders.
          </p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
