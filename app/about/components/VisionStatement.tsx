"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";
import images from "@/lib/images";

const pillars = [
  { value: "Pan-Africa", label: "Reach" },
  { value: "Award-Winning", label: "Excellence" },
  { value: "2nd Edition", label: "2026" },
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
          <div className="flex justify-center mb-8">
            <span className="hotel-tag">
              <span className="opacity-60">&#9670;</span>
              The Vision 2026
              <span className="opacity-60">&#9670;</span>
            </span>
          </div>
          <h3 className="font-headline text-4xl md:text-6xl font-bold text-foreground text-pretty mb-12 max-w-4xl mx-auto leading-tight">
            Inspiring excellence, innovation, and sustainable hospitality leadership across Africa.
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-border/50 max-w-3xl mx-auto">
            {pillars.map(({ value, label }) => (
              <div key={value} className="text-center">
                <p className="text-accent text-3xl font-bold font-headline uppercase tracking-tighter">
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
