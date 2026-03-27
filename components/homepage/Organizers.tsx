"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";

const organizers = [
  {
    name: "Strategic Brand Focus Africa Limited",
    shortName: "SBF Africa",
    role: "Lead Organiser",
    description:
      "Strategic Brand Focus Africa Limited is a leading B2B events, media, and industry platform company specialising in executive conferences, leadership forums, and national recognition programs across Africa. The company organises high-level platforms in governance, industry, energy, technology, business leadership, and sustainable development.",
    contact: "marcom@sbfafrica.com",
    phone: "+233 50 589 3884",
    location: "Accra, Ghana",
  },
  {
    name: "Premier Business Africa Magazine",
    shortName: "Premier Business Africa",
    role: "Media Partner",
    description:
      "Premier Business Africa Magazine is a business leadership publication promoting investment, governance, industry excellence, and enterprise growth across Africa. The magazine provides visibility for leaders and organisations driving economic transformation.",
    contact: "marcom@sbfafrica.com",
  },
];

export default function Organizers() {
  return (
    <section className="py-24 border-b border-border">
      <SectionContainer>
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Behind the Platform</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mt-3 mb-16">
            Organisers
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {organizers.map((org, idx) => (
            <Reveal key={org.name} delay={idx * 0.15}>
              <div className="border border-border bg-card p-8 h-full group hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">{org.role}</span>
                    <h3 className="text-xl font-headline font-bold text-foreground mt-2 leading-snug">
                      {org.name}
                    </h3>
                  </div>
                  <div className="h-2 w-2 bg-accent rotate-45 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                </div>

                <p className="text-sm text-foreground/65 leading-relaxed mb-6">
                  {org.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[10px] uppercase tracking-widest text-foreground/35 w-16 flex-shrink-0">Email</span>
                    <a href={`mailto:${org.contact}`} className="text-accent hover:underline">{org.contact}</a>
                  </div>
                  {org.phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[10px] uppercase tracking-widest text-foreground/35 w-16 flex-shrink-0">Phone</span>
                      <span className="text-foreground/65">{org.phone}</span>
                    </div>
                  )}
                  {org.location && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[10px] uppercase tracking-widest text-foreground/35 w-16 flex-shrink-0">Office</span>
                      <span className="text-foreground/65">{org.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
