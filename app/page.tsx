import HeroSection from "@/components/hero/HeroSection";
import ExecutiveManifesto from "@/components/executive-manifesto";
import StrategicVision from "@/components/homepage/StrategicVision";
import StrategicPillars from "@/components/homepage/StrategicPillars";
import ImpactStats from "@/components/homepage/ImpactStats";
import GlobalShowcase from "@/components/homepage/GlobalShowcase";
import RadcommSignature from "@/components/homepage/RadcommSignature";
import ExecInvitation from "@/components/homepage/ExecInvitation";
import SponsorshipPackages from "@/components/homepage/SponsorshipPackages";
import HowToReserve from "@/components/homepage/HowToReserve";
import Organizers from "@/components/homepage/Organizers";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. About the Awards */}
      <ExecutiveManifesto />
      {/* 3. Theme — Focus Areas & Key Sectors */}
      <StrategicVision />
      {/* 4. Event Objectives */}
      <StrategicPillars />
      {/* 5. Key Stats */}
      <ImpactStats />
      {/* 6. Why This Event Matters */}
      <GlobalShowcase />
      {/* 7. Who Attends */}
      <RadcommSignature />
      {/* 8. Why Participate */}
      <ExecInvitation />
      {/* 9. Sponsorship Packages */}
      <SponsorshipPackages />
      {/* 10. How to Reserve */}
      <HowToReserve />
      {/* 11. Organisers */}
      <Organizers />
    </>
  );
}
