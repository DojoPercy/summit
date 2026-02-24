"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";

export default function ContactFootnote() {
  return (
    <SectionContainer className="py-24 text-center">
      <GoldWaveDivider />
      <Reveal>
        <p className="text-sm text-foreground/40 italic font-serif max-w-2xl mx-auto leading-relaxed">
          The Technology Boardroom is a RADCOMM Media initiative designed to
          foster high-level technology governance and sustainable digital
          transformation across emerging economies.
        </p>
      </Reveal>
    </SectionContainer>
  );
}
