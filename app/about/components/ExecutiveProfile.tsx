"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import images from "@/lib/images";
import { profileFeatures } from "./data";

export default function ExecutiveProfile() {
  return (
    <section className="bg-secondary/10 py-24 border-t border-border overflow-hidden">
      <SectionContainer>
        <GoldWaveDivider />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                Awards & Recognition
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
                Hotelier Africa <br />
                Leadership Awards
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                The awards honour individuals and organisations who have
                demonstrated exceptional contributions to advancing Africa&apos;s
                hospitality sector — across 40 prestigious award categories.
              </p>
            </div>
            <div className="space-y-6">
              {profileFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-foreground/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile mockup image */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 p-2 bg-border/20 rounded-sm backdrop-blur-xl border border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
              <img
                src={images.aboutProfilePreview}
                alt="Executive Profile Preview"
                className="w-full rounded-xs shadow-inner"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
