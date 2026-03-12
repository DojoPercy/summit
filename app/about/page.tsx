import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import PurposeSection from "./components/PurposeSection";
import WhoWeConvene from "./components/WhoWeConvene";
import MembershipBenefits from "./components/MembershipBenefits";
import ExecutiveProfile from "./components/ExecutiveProfile";
import VisionStatement from "./components/VisionStatement";
import images from "@/lib/images";

export const metadata: Metadata = {
  title: "About the Summit",
  description:
    "Learn about the 2nd Hotelier Africa Leadership Summit & Awards 2026 — its mission, purpose, who attends, and why it is Africa's most important hospitality leadership gathering.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Hotelier Africa Leadership Summit & Awards 2026",
    description:
      "Discover the mission, vision, and purpose behind Africa's premier hospitality leadership platform — bringing together 500+ industry decision-makers in 2026.",
    url: "https://summit.hotelierafricamag.com/about",
  },
};

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
