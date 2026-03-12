"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";
import { contactMethods } from "./data";

export default function ContactIntro() {
  return (
    <SectionContainer className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-[10px]">&#9670;</span>
              <div className="h-px w-6 bg-accent/40" />
            </div>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-serif">
              For partnerships, sponsorship opportunities, delegate registration,
              award nominations, media inquiries, or event participation, please
              feel free to contact the Hotelier Africa team.
            </p>
          </Reveal>
        </div>
      </div>

      <GoldWaveDivider />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, idx) => (
          <Reveal key={method.type} delay={idx * 0.05}>
            <div className="group h-full p-8 border border-border bg-card hover:border-accent/50 hover:bg-accent/[0.03] transition-all duration-500">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>
              <h3 className="text-foreground font-bold mb-4 uppercase text-xs tracking-[0.2em]">
                {method.type}
              </h3>
              <div className="space-y-2">
                {method.details.map((detail, dIdx) => (
                  <p key={dIdx} className="text-foreground/70 text-sm font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
