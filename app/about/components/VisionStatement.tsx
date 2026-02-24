"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";
import images from "@/lib/images";

const pillars = [
  { value: "Global", label: "Convene" },
  { value: "Trusted", label: "Environment" },
  { value: "Strategic", label: "Impact" },
];

export default function VisionStatement() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <img
          src={images.aboutLeadership}
          alt="Leadership Backdrop"
          className="w-full h-full object-cover"
        />
      </div>
      <GoldWaveDivider />
      <SectionContainer className="relative z-10 text-center">
        <Reveal>
          <div className="inline-block px-4 py-1 border border-accent/30 rounded-full mb-8">
            <span className="text-accent text-xs uppercase tracking-widest font-bold">
              The Vision 2025
            </span>
          </div>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-foreground text-pretty mb-12 max-w-4xl mx-auto leading-tight">
            Advancing strategic technology leadership at the board level.
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-border/50 max-w-3xl mx-auto">
            {pillars.map(({ value, label }) => (
              <div key={value} className="text-center">
                <p className="text-accent text-3xl font-bold font-display uppercase tracking-tighter">
                  {value}
                </p>
                <p className="text-xs text-foreground/40 uppercase tracking-widest mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
