"use client";

import SectionContainer from "@/components/section-container";
import PremiumPillar from "@/components/premium-pillar";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import SectionHeading from "@/components/reusable_components/SectionHeading";
import { pillars } from "./data";

export default function StrategicPillars() {
  return (
    <SectionContainer className="py-24" id="pillars">
      <GoldWaveDivider />
      <SectionHeading
        title="Strategic Pillars"
        subtitle="Our platform is built on five core pillars that define meaningful engagement for technology leaders, ensuring every dialogue drives tangible value."
        subtitleClassName="max-w-3xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-2">
          <PremiumPillar {...pillars[0]} index={0} />
        </div>
        <div className="md:col-span-2">
          <PremiumPillar {...pillars[1]} index={1} />
        </div>
        <div className="md:col-span-2">
          <PremiumPillar {...pillars[2]} index={2} />
        </div>
        <div className="md:col-start-2 md:col-span-2">
          <PremiumPillar {...pillars[3]} index={3} />
        </div>
        <div className="md:col-span-2">
          <PremiumPillar {...pillars[4]} index={4} />
        </div>
      </div>
    </SectionContainer>
  );
}
