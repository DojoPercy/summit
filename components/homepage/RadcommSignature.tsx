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
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Powered by RADCOMM Group
                  </h2>
                  <div className="h-1 w-20 bg-accent" />
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-foreground/80 leading-relaxed font-serif italic">
                    The Technology Boardroom is curated and delivered by RADCOMM
                    Group, a media-led business intelligence and leadership
                    platform headquartered in Masdar City, Abu Dhabi.
                  </p>
                  <p className="text-lg text-foreground/60 leading-relaxed">
                    RADCOMM designs and delivers influential conferences, awards,
                    executive exchanges, and authoritative media platforms
                    shaping leadership dialogue across Africa and the Middle East.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1" />
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-8">
                <div className="relative h-32 w-full max-w-[280px]">
                  <img
                    src={images.radcomm}
                    alt="RADCOMM Group"
                    className="h-full w-full object-contain filter brightness-110 contrast-110"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
                    Official Curator
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
