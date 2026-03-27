"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";

const packages = [
  {
    tier: "Premium",
    name: "VVIP Executive Table",
    guests: "10 Guests",
    highlight: true,
    perks: [
      "Exclusive VVIP table for ten guests",
      "Keynote / corporate presentation opportunity",
      "Speaker / panel participation opportunity",
      "Full-page advert in Premier Business Africa Magazine",
      "Premium table branding",
      "Event branding visibility",
      "VIP networking reception",
      "Three-course executive dinner",
      "Corporate profile in event magazine",
      "Media exposure",
      "Recognition as Premium Partner",
      "Professional photography",
    ],
  },
  {
    tier: "Gold",
    name: "VIP Table",
    guests: "8 Guests",
    highlight: false,
    perks: [
      "VIP table for eight guests",
      "Corporate video showcase",
      "Half-page advert in magazine",
      "Networking reception",
      "Dinner experience",
      "Complimentary drinks",
      "Brand recognition",
      "Corporate profile",
      "Media publicity",
      "Event photography",
    ],
  },
  {
    tier: "Silver",
    name: "Corporate Table",
    guests: "5 Guests",
    highlight: false,
    perks: [
      "Table for five guests",
      "Banner placement opportunity",
      "Networking reception",
      "Dinner",
      "Complimentary drinks",
      "Awards guide recognition",
      "Logo placement on branding materials",
    ],
  },
];

export default function SponsorshipPackages() {
  return (
    <section className="py-24 border-y border-border bg-foreground" id="sponsorship">
      <SectionContainer>
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Table Reservation & Sponsorship</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Sponsorship Packages
          </h2>
          <p className="text-white/50 text-lg max-w-3xl mb-16">
            Position your organisation at the forefront of Ghana&apos;s mining, minerals, timber, and sustainable industry sector. The Awards provides unmatched visibility among CEOs, regulators, investors, policymakers, and sustainability leaders.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <Reveal key={pkg.tier} delay={idx * 0.1}>
              <div className={`relative flex flex-col h-full border transition-all duration-300 ${
                pkg.highlight
                  ? "border-accent bg-accent/10 shadow-lg shadow-accent/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}>
                {pkg.highlight && (
                  <div className="absolute -top-px inset-x-0 h-[3px] bg-accent" />
                )}

                <div className="p-8 border-b border-white/10">
                  <span className={`text-[10px] uppercase tracking-[0.35em] font-bold ${pkg.highlight ? "text-accent" : "text-white/40"}`}>
                    {pkg.tier} Sponsor
                  </span>
                  <h3 className="text-2xl font-headline font-bold text-white mt-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 mt-3">
                    <div className={`h-1.5 w-1.5 rotate-45 ${pkg.highlight ? "bg-accent" : "bg-white/30"}`} />
                    <span className={`text-sm font-medium ${pkg.highlight ? "text-accent" : "text-white/50"}`}>{pkg.guests}</span>
                  </div>
                </div>

                <div className="p-8 flex-1">
                  <ul className="space-y-3">
                    {pkg.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3">
                        <span className={`text-sm mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-accent" : "text-white/30"}`}>✔</span>
                        <span className="text-sm text-white/65 leading-snug">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <a
                    href="#contact"
                    className={`block text-center text-xs uppercase tracking-widest font-bold py-4 px-6 transition-all duration-200 ${
                      pkg.highlight
                        ? "bg-accent text-accent-foreground hover:brightness-110"
                        : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    Reserve {pkg.tier} Table
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
