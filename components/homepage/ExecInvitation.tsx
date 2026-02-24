"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";
import images from "@/lib/images";

export default function ExecInvitation() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-border">
      <div className="absolute inset-0 z-0">
        <img
          src={images.homeMembership}
          alt="Executive Invitation"
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <SectionContainer className="relative z-10 text-center">
        <Reveal>
          <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
            The Exclusive Council
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 max-w-4xl mx-auto leading-tight text-pretty">
            Join the World&apos;s Most Trusted Technology Boardroom.
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-serif italic">
            Participation is reserved for executives and leaders committed to
            organizational excellence and global digital governance.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="px-12 py-4 bg-accent text-white font-bold uppercase tracking-widest hover:bg-accent/80 transition-colors rounded-xs"
            >
              Apply for Invitation
            </a>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
