"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";
import { cities } from "./data";

export default function GlobalShowcase() {
  return (
    <section className="py-24 bg-secondary/30 border-y border-border" id="why-matters">
      <SectionContainer>
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Importance</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Why This Event Matters
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mb-16">
            Participation positions your organization as a leader in Ghana&apos;s future resource economy — promoting ESG, sustainable industrialization, export growth, and public-private collaboration.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cities.map((city, idx) => (
            <Reveal key={city.name} delay={idx * 0.1}>
              <div className="group relative overflow-hidden border border-border bg-card hover:border-accent/40 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={city.imagePath}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">{city.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-accent transition-colors duration-300">
                    {city.focus}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {city.description}
                  </p>
                </div>

                {/* Left accent border on hover */}
                <div className="absolute left-0 top-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
