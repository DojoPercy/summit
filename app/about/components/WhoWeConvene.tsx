"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import SectionHeading from "@/components/reusable_components/SectionHeading";
import Reveal from "@/components/animation/reveal";
import { attendeeCategories } from "./data";

export default function WhoWeConvene() {
  return (
    <section className="bg-secondary/5 py-24 border-y border-border">
      <SectionContainer>
        <GoldWaveDivider />
        <SectionHeading
          title="Who Attends"
          subtitle="The summit brings together senior decision-makers from across the hospitality and tourism ecosystem — leaders shaping Africa's hospitality future."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendeeCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.05}>
              <div className="group h-full p-8 border border-border bg-card hover:border-accent/50 hover:bg-accent/[0.03] transition-all duration-500">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-6 bg-accent transition-all duration-500 group-hover:w-10" />
                  <span className="text-accent text-[8px]">&#9670;</span>
                </div>
                <p className="font-headline text-lg font-bold text-foreground mb-5 leading-tight">
                  {cat.category}
                </p>
                <ul className="space-y-3">
                  {cat.roles.map((role) => (
                    <li key={role} className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-4 bg-accent/50 flex-shrink-0" />
                      <span className="text-foreground/70 text-sm leading-relaxed">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
