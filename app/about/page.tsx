"use client";

import PageHero from "@/components/page-hero";
import PurposeSection from "./components/PurposeSection";
import WhoWeConvene from "./components/WhoWeConvene";
import MembershipBenefits from "./components/MembershipBenefits";
import ExecutiveProfile from "./components/ExecutiveProfile";
import VisionStatement from "./components/VisionStatement";
import images from "@/lib/images";

export default function About() {
  return (
    <>
      <PageHero
        headline="About the Summit"
        subtext="Africa's hospitality industry is experiencing a new era of growth, driven by rising tourism demand, increased investment in hotel infrastructure, expansion of international brands, and innovation in guest experience."
        backgroundImage={images.aboutHero}
      />
      <PurposeSection />
      <WhoWeConvene />
      <MembershipBenefits />
      <ExecutiveProfile />
      <VisionStatement />
    </>
  );
}
