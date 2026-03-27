"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";

const focusAreas = [
  "Mineral development",
  "Environmental protection",
  "Local value addition",
  "Industrial transformation",
  "ESG compliance",
  "Community development",
  "Export growth",
  "Climate responsibility",
];

const keySectors = [
  "Gold",
  "Lithium",
  "Bauxite",
  "Manganese",
  "Timber & Forestry",
  "Industrial Minerals",
  "Critical Minerals for energy transition",
  "Manufacturing & value addition industries",
];

export default function StrategicVision() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-border" id="theme">
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, hsl(var(--accent) / 0.03) 0, hsl(var(--accent) / 0.03) 1px, transparent 0, transparent 50%)",
          backgroundSize: "32px 32px",
        }}
      />
      <SectionContainer className="relative z-10">
        {/* Section header */}
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Annual Theme</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Responsible Mining, Critical Minerals<br className="hidden md:block" /> & Sustainable Industrial Growth
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mb-16">
            Building Ghana&apos;s Green Resource Economy — as global demand for critical minerals accelerates, Ghana has a unique opportunity to become a leading responsible resource hub in Africa.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Focus Areas */}
          <Reveal>
            <p className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-8">
              This Year&apos;s Theme Focuses On
            </p>
            <ul className="space-y-4">
              {focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 bg-accent rotate-45 flex-shrink-0" />
                  <span className="text-foreground/80 text-base leading-relaxed">{area}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — Key Sectors */}
          <Reveal delay={0.2}>
            <p className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-8">
              Key Resource Sectors Covered
            </p>
            <ul className="space-y-4">
              {keySectors.map((sector, idx) => (
                <li key={idx} className="flex items-start gap-4 border-b border-border pb-4 last:border-0">
                  <span className="text-accent/60 text-xs font-mono font-bold mt-0.5 w-5 flex-shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/80 text-base leading-relaxed font-medium">{sector}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-accent/5 border border-accent/20">
              <p className="text-sm text-foreground/70 leading-relaxed">
                The platform promotes <strong className="text-foreground">responsible extraction</strong>, sustainable processing, environmental stewardship, and long-term economic growth.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
