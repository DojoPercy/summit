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
          The Hotelier Africa Leadership Summit & Awards is organised by a leading
          communications and business events platform dedicated to promoting
          leadership, innovation, and excellence across Africa&apos;s key industries.
        </p>
      </Reveal>
    </SectionContainer>
  );
}
