"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";

const attendeeGroups = [
  {
    category: "Government & Regulators",
    items: ["Ministry of Lands & Natural Resources", "Ministry of Trade & Industry", "Minerals Commission", "Environmental Protection Agency (EPA)", "Forestry Commission"],
  },
  {
    category: "Industry Bodies",
    items: ["Ghana Chamber of Mines", "Ghana Export Promotion Authority", "Manufacturers Association of Ghana", "Ghana Timber Association"],
  },
  {
    category: "Mining & Resource Companies",
    items: ["Mining companies", "Lithium / Bauxite / Gold / Manganese companies", "Timber & forestry companies", "Industrial & manufacturing companies"],
  },
  {
    category: "Finance & Investment",
    items: ["Banks & investors", "Development partners", "ESG & sustainability professionals", "Diplomats & trade missions"],
  },
  {
    category: "Leadership & Media",
    items: ["CEOs & board members", "Media & business leaders", "Sustainability consultants", "Legal & compliance experts"],
  },
];

export default function RadcommSignature() {
  return (
    <section className="py-24 border-y border-border" id="who-attends">
      <SectionContainer>
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Attendees</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Who Attends
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mb-16">
            The event brings together high-level decision makers from across Ghana&apos;s resource sector — making this one of the most important networking platforms in the industry.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendeeGroups.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.08}>
              <div className="border border-border bg-card p-7 h-full group hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-3 w-3 bg-accent rotate-45 flex-shrink-0" />
                  <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-accent">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/65 leading-snug">
                      <span className="mt-1.5 h-1 w-1 bg-foreground/30 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Closing statement card */}
          <Reveal delay={0.4}>
            <div className="border border-accent/30 bg-accent/5 p-7 flex flex-col justify-center">
              <p className="text-foreground font-semibold text-base leading-relaxed">
                This makes the Awards one of the most important networking platforms in Ghana&apos;s resource sector.
              </p>
              <div className="mt-6">
                <a href="#sponsorship" className="btn-gold text-xs py-3 px-6">
                  Reserve Your Place
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
