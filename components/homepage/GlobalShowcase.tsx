"use client";

import SectionContainer from "@/components/section-container";
import SectionHeading from "@/components/reusable_components/SectionHeading";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import { cities } from "./data";

export default function GlobalShowcase() {
  return (
    <section className="py-24" id="locations">
      <SectionContainer>
        <SectionHeading
          title="Global Reach, Local Impact"
          subtitle="The Technology Boardroom operates across key global and regional hubs, ensuring diversity of thought and cross-border innovation."
          divider
          centered
          subtitleClassName="max-w-3xl"
        />
        <div className="space-y-32">
          {cities.map((city, idx) => (
            <div
              key={city.name}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden rounded-sm group border border-border shadow-xl">
                {city.imagePath ? (
                  <img
                    src={city.imagePath}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                    <span className="text-foreground/20 text-xs font-mono uppercase tracking-[0.2em]">
                      // ADD IMAGE: {city.name}
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background/80 to-transparent">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    {city.name}
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <GoldWaveDivider className="h-14 opacity-30" />
                <div className="inline-block border-l-2 border-accent pl-4 mb-2">
                  <span className="text-accent uppercase tracking-widest text-sm font-bold">
                    Impact Node
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                  {city.focus}
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed font-serif italic line-clamp-4">
                  {city.description}
                </p>
                <div className="pt-4">
                  <div className="h-px w-24 bg-accent/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
