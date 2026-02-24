"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import SectionHeading from "@/components/reusable_components/SectionHeading";
import Reveal from "@/components/animation/reveal";
import { offices } from "./data";

export default function GlobalOffices() {
  return (
    <SectionContainer className="py-24">
      <SectionHeading
        title="Global Offices"
        subtitle="Strategic locations allowing for deep regional expertise and direct executive reach."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {offices.map((office, idx) => (
          <Reveal key={office.region} delay={idx * 0.1}>
            <div className="flex flex-col md:flex-row gap-8 p-10 border border-border bg-card rounded-sm group hover:border-accent/30 transition-all duration-500">
              <div className="flex-shrink-0">
                <div className="p-4 bg-secondary/30 rounded-xs group-hover:bg-accent/10 transition-colors duration-500">
                  {office.icon}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  {office.region}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-serif italic text-lg line-clamp-3 group-hover:text-foreground transition-colors">
                  {office.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <GoldWaveDivider />
    </SectionContainer>
  );
}
