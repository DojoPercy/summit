"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";

const closingStats = [
  { value: "25+", label: "Executive Hubs" },
  { value: "500+", label: "Board Members" },
  { value: "12", label: "Sector Focus" },
];

export default function ProjectsClosing() {
  return (
    <SectionContainer className="py-24 text-center">
      <Reveal>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            A Global Mosaic of <br />
            <span className="text-accent italic">Strategic Interaction</span>.
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Our experiences are not just events; they are curated intellectual
            assets designed to strengthen the fabric of global technology
            governance and innovation.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-12 text-foreground/30">
            {closingStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-display font-bold">{value}</p>
                <p className="text-[10px] uppercase tracking-widest mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
