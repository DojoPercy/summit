"use client";

import SectionContainer from "@/components/section-container";
import EditorialBlock from "@/components/editorial-block";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import { GoldWave } from "@/components/ui/GoldWave";
import images from "@/lib/images";

export default function StrategicVision() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-border">
      <div className="absolute inset-0 z-0">
        <img
          src={images.homeVision}
          alt="Strategic Vision"
          className="w-full h-full object-cover grayscale opacity-10"
        />
        <GoldWave
          className="absolute top-0 h-40 opacity-20 rotate-180"
          count={8}
        />
      </div>
      <SectionContainer className="relative z-10">
        <EditorialBlock
          title="Our Strategic Purpose"
          leftContent={`The Technology Boardroom was established to elevate technology conversations beyond operational delivery—into the boardroom, policy arena, and executive strategy space. It is a trusted environment where leaders move beyond theory to practical, high-impact conversations on technology strategy, digital resilience, governance, and long-term value creation.`}
          rightContent={`Our vision is to be the world's most trusted executive platform where technology leaders shape strategy, influence policy, and co-create sustainable digital economies. Through curated engagements across global hubs, we inform policy, strengthen governance, and accelerate innovation-led growth.`}
        />
      </SectionContainer>
    </section>
  );
}
