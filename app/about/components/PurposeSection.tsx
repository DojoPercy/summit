"use client";

import SectionContainer from "@/components/section-container";
import EditorialBlock from "@/components/editorial-block";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import FeatureImageBanner from "@/components/reusable_components/FeatureImageBanner";
import images from "@/lib/images";

export default function PurposeSection() {
  return (
    <SectionContainer className="py-24">
      <GoldWaveDivider />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-12">
          <EditorialBlock
            title="Our Purpose & Vision"
            leftContent={`The Technology Boardroom was established to elevate technology conversations beyond operational delivery—into the boardroom, policy arena, and executive strategy space. It is a trusted environment where leaders move beyond theory to practical, high-impact conversations on technology strategy, digital resilience, governance, and long-term value creation.`}
            rightContent={`Our vision is to be the world's most trusted executive platform where technology leaders shape strategy, influence policy, and co-create sustainable digital economies. Through curated engagements across global hubs, we inform policy, strengthen governance, and accelerate innovation-led growth.`}
          />
        </div>
      </div>

      <div className="mt-24">
        <FeatureImageBanner
          src={images.aboutPurpose}
          alt="Boardroom Vision"
          tagline="The Strategic Mandate"
          headline="Elevating technology from IT execution to Boardroom Strategy."
        />
      </div>
    </SectionContainer>
  );
}
