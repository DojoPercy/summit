"use client";

import SectionContainer from "@/components/section-container";
import images from "@/lib/images";

export default function RadcommSignature() {
  return (
    <section className="bg-secondary/5 py-24 border-y border-border">
      <SectionContainer>
        <div className="relative overflow-hidden rounded-sm border border-border bg-card p-1">
          <div className="relative overflow-hidden rounded-sm bg-background px-8 py-16 md:px-16 md:py-24">
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
              <img
                src={images.masdarCity}
                alt="Masdar City HQ"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Organised by SBF Africa
                  </h2>
                  <div className="h-1 w-20 bg-accent" />
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-foreground/80 leading-relaxed font-serif italic">
                    The Hotelier Africa Leadership Summit & Awards is organised
                    by a leading communications and business events platform
                    dedicated to promoting leadership, innovation, and excellence
                    across Africa&apos;s key industries.
                  </p>
                  <p className="text-lg text-foreground/60 leading-relaxed">
                    Through strategic industry platforms, the organisers convene
                    decision-makers, celebrate exceptional leadership, and foster
                    partnerships that advance economic and sectoral development
                    across the continent.
                  </p>
                  <div className="pt-2 space-y-1 text-sm text-foreground/50">
                    <p>Hotelier Africa · 58 Mansour Street, Parakuo Estates</p>
                    <p>Christian Village, Accra, Greater Accra Region, Ghana</p>
                    <p className="pt-1">
                      <a href="mailto:marcom@sbfafrica.com" className="text-accent hover:underline">marcom@sbfafrica.com</a>
                      {" · "}
                      <span>+233 20 238 4549</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1" />
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-8">
                <div className="relative h-32 w-full max-w-[280px]">
                  <img
                    src={images.logoGold}
                    alt="Hotelier Africa"
                    className="h-full w-full object-contain filter brightness-110 contrast-110"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
                    Official Organiser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
