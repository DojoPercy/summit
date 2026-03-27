"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";

const benefits = [
  "Gain national recognition",
  "Showcase ESG leadership",
  "Strengthen corporate reputation",
  "Connect with regulators & investors",
  "Promote your brand to industry leaders",
  "Demonstrate commitment to sustainability",
  "Position your company as a responsible industry leader",
  "Build strategic partnerships",
];

export default function ExecInvitation() {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden border-b border-border" id="why-participate">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about/_RAD4801.jpg"
          alt="Why Participate"
          className="w-full h-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/70 to-accent/30" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      <SectionContainer className="relative z-10 py-24">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="hotel-tag mb-8 inline-flex">
                <span className="opacity-60">&#9670;</span>
                Why Participate
                <span className="opacity-60">&#9670;</span>
              </span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Position Your Organisation<br />
                <em className="text-accent not-italic">at the Forefront</em><br />
                of Ghana&apos;s Green Economy.
              </h2>
              <p className="text-white/55 text-base leading-relaxed max-w-lg">
                Participating in the Ghana Green Mining & Critical Minerals Awards allows your organization to gain national recognition and demonstrate your commitment to sustainable, responsible resource development.
              </p>
            </div>

            {/* Right — benefits list */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 space-y-4">
              <p className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-6">
                Participating allows your organisation to:
              </p>
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-accent text-base mt-0.5 flex-shrink-0">✔</span>
                  <span className="text-white/75 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
              <div className="pt-4">
                <a href="#sponsorship" className="btn-gold text-xs">
                  Reserve a Table Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
