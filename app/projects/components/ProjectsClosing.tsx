"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";

const tier3Awards = [
  "Hospitality Sustainability Initiative of the Year",
  "Green Hotel Initiative Award",
  "Hospitality Innovation Award",
  "Best New Hospitality Development Project",
  "Excellence in Conference & Events Infrastructure",
  "Hospitality Digital Transformation Initiative",
  "Hospitality Talent Development Programme Award",
  "Guest Experience Innovation Award",
  "Tourism & Destination Development Initiative",
  "Hospitality Marketing Excellence Award",
];

export default function ProjectsClosing() {
  return (
    <>
      {/* Award Tier 3 */}
      <section className="border-t border-border bg-secondary/5 py-24">
        <SectionContainer>
          <GoldWaveDivider />
          <Reveal>
            <div className="mb-12">
              <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                Award Tier 3
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hospitality Projects & Initiatives Awards
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl">
                Recognising innovation, infrastructure, sustainability, and hospitality development
                initiatives that are shaping the future of Africa&apos;s hospitality sector.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5">
              {tier3Awards.map((award, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-sm leading-relaxed">{award}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </SectionContainer>
      </section>

      {/* Africa's Top 50 + Nominate CTA */}
      <SectionContainer className="py-24 text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center mb-4">
              <span className="hotel-tag">
                <span className="opacity-60">&#9670;</span>
                Summit Highlight
                <span className="opacity-60">&#9670;</span>
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Africa&apos;s Top 50 <br />
              <em className="text-accent not-italic">Hotel General Managers 2026</em>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              A highlight of the event will be the unveiling of Africa&apos;s Top 50 Hotel General
              Managers 2026, recognising the continent&apos;s most exceptional hospitality leaders
              who are setting new benchmarks in hotel management and service excellence.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:marcom@sbfafrica.com"
                className="btn-gold"
              >
                Nominate Now
              </a>
              <div className="text-foreground/50 text-sm">
                <p>Email: <span className="text-foreground/80">marcom@sbfafrica.com</span></p>
                <p>Tel: <span className="text-foreground/80">+233 20 238 4549</span></p>
              </div>
            </div>

            <div className="pt-12 border-t border-border/50 flex flex-wrap justify-center gap-12 text-foreground/30">
              {[
                { value: "40", label: "Award Categories" },
                { value: "3", label: "Award Tiers" },
                { value: "500+", label: "Attendees" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-4xl font-headline font-bold">{value}</p>
                  <p className="text-[10px] uppercase tracking-widest mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}
