"use client";

import images from "@/lib/images";

export default function ContactVisualBreak() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden border-y border-border group">
      <img
        src={images.contactVisual}
        alt="Contact Visual"
        className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-2xl px-6">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold">
            RADCOMM Media HQ
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white italic">
            Conveying the narrative of <br />
            <span className="not-italic font-bold">Digital Future</span>.
          </h3>
        </div>
      </div>
    </section>
  );
}
