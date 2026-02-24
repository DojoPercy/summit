"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import SectionHeading from "@/components/reusable_components/SectionHeading";
import Reveal from "@/components/animation/reveal";
import { roles } from "./data";

export default function WhoWeConvene() {
  return (
    <section className="bg-secondary/5 py-24 border-y border-border">
      <SectionContainer>
        <GoldWaveDivider />
        <SectionHeading
          title="Who We Convene"
          subtitle="The Technology Boardroom brings together the architects of the digital economy—leaders who define strategy, policy, and innovation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <Reveal key={role} delay={i * 0.05}>
              <div className="group h-full p-8 border border-border bg-card rounded-sm hover:border-accent/40 transition-all duration-500">
                <div className="h-0.5 w-6 bg-accent mb-6 transition-all duration-500 group-hover:w-12" />
                <p className="text-foreground/80 font-medium leading-relaxed">
                  {role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
