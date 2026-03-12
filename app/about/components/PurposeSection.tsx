"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import FeatureImageBanner from "@/components/reusable_components/FeatureImageBanner";
import Reveal from "@/components/animation/reveal";
import images from "@/lib/images";

const summitPurposes = [
  "Provide a continental platform for hospitality leadership dialogue",
  "Promote best practices and innovation in hotel management",
  "Strengthen collaboration among hospitality stakeholders",
  "Recognise outstanding leaders and institutions shaping the industry",
  "Inspire the next generation of hospitality professionals",
];

export default function PurposeSection() {
  return (
    <SectionContainer className="py-24">
      <GoldWaveDivider />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
        {/* Left */}
        <Reveal>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-8 text-pretty">
            Why This Summit Matters
          </h2>
          <div className="h-1 w-20 bg-accent mb-10" />
          <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Africa is one of the world&apos;s fastest growing hospitality frontiers, attracting
              global hotel brands and investors seeking new opportunities.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              However, sustainable industry growth requires strong leadership, innovation, strategic
              collaboration, and recognition of excellence.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed font-semibold text-foreground/90">
              The Hotelier Africa Leadership Summit was created to:
            </p>
          </div>
        </Reveal>

        {/* Right — Purposes */}
        <Reveal delay={0.2}>
          <ul className="space-y-6 mt-2">
            {summitPurposes.map((purpose, idx) => (
              <li key={idx} className="flex items-start gap-5">
                <div className="mt-2.5 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                <span className="text-foreground/80 text-lg leading-relaxed">{purpose}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <FeatureImageBanner
        src={images.aboutPurpose}
        alt="Summit Mission"
        tagline="The Summit Mission"
        headline="Advancing hospitality excellence, investment, and leadership across Africa."
      />
    </SectionContainer>
  );
}
