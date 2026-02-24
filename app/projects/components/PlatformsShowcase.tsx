"use client";

import PlatformCard from "./PlatformCard";
import { platforms } from "./data";

export default function PlatformsShowcase() {
  return (
    <section className="bg-secondary/5 border-y border-border overflow-hidden">
      {platforms.map((platform, idx) => (
        <PlatformCard key={platform.title} {...platform} index={idx} />
      ))}
    </section>
  );
}
