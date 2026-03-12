"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";
import images from "@/lib/images";

export default function ExecInvitation() {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden border-b border-border">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.homeMembership}
          alt="Executive Invitation"
          className="w-full h-full object-cover grayscale brightness-[0.35]"
        />
        {/* Warm amber gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
        {/* Ornamental top/bottom accent lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </div>

      <SectionContainer className="relative z-10 text-center">
        <Reveal>
          {/* Hotel tag */}
          <div className="flex justify-center mb-8">
            <span className="hotel-tag">
              <span className="opacity-60">&#9670;</span>
              Reserve Your Seat
              <span className="opacity-60">&#9670;</span>
            </span>
          </div>

          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Join Africa&apos;s Leading<br />
            <em className="text-accent not-italic">Hospitality Executives.</em>
          </h2>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 mb-8 max-w-[200px] mx-auto">
            <div className="flex-1 h-px bg-accent/40" />
            <span className="text-accent text-xs">&#9670;</span>
            <div className="flex-1 h-px bg-accent/40" />
          </div>

          <p className="text-lg text-white/65 max-w-2xl mx-auto mb-12 font-serif italic leading-relaxed">
            Be part of the conversations shaping the future of hospitality
            leadership across Africa. Secure your delegate place today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="/contact" className="btn-gold">
              Buy Delegate Ticket
            </a>
            <a
              href="/projects"
              className="btn-luxury"
              style={{
                color: "rgba(255,255,255,0.8)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              View Full Programme
            </a>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
