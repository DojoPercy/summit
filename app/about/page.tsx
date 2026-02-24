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
        headline="About The Technology Boardroom"
        subtext="The Technology Boardroom convenes Chief Information Officers (CIOs), Chief Technology Officers (CTOs), Chief Digital Officers (CDOs), and Public Sector Technology Leaders from across the Middle East, Africa, and global markets."
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
