"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";
import images from "@/lib/images";

const focusAreas = [
  "Leadership excellence in hotel management",
  "Hospitality investment and development trends",
  "Technology and digital transformation in hotels",
  "Sustainability and responsible tourism",
  "Talent development and workforce transformation",
  "Revenue optimisation and operational innovation",
  "Africa's positioning as a global tourism destination",
];

export default function StrategicVision() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-border">
      <div className="absolute inset-0 z-0">
        <img
          src={images.homeVision}
          alt="About the Summit"
          className="w-full h-full object-cover grayscale opacity-[0.07]"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
      </div>
      <SectionContainer className="relative z-10">
        <GoldWaveDivider />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <Reveal>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-8 text-pretty">
              About the Summit
            </h2>
            <div className="h-1 w-20 bg-accent mb-10" />
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                Africa&apos;s hospitality industry is experiencing a new era of growth, driven by rising
                tourism demand, increased investment in hotel infrastructure, expansion of international
                brands, and innovation in guest experience.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                The Hotelier Africa Leadership Summit serves as a strategic meeting point for the
                industry&apos;s top decision-makers to explore emerging opportunities, share leadership
                insights, and develop collaborative solutions that strengthen the sector.
              </p>
            </div>
          </Reveal>

          {/* Right — Focus Areas */}
          <Reveal delay={0.2}>
            <p className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-8">
              The Summit Focuses On
            </p>
            <ul className="space-y-5">
              {focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <div className="mt-2.5 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-lg leading-relaxed">{area}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
