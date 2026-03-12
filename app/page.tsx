import HeroSection from "@/components/hero/HeroSection";
import ExecutiveManifesto from "@/components/executive-manifesto";
import EventHighlights from "@/components/homepage/EventHighlights";
import StrategicVision from "@/components/homepage/StrategicVision";
import StrategicPillars from "@/components/homepage/StrategicPillars";
import ImpactStats from "@/components/homepage/ImpactStats";
import GlobalShowcase from "@/components/homepage/GlobalShowcase";
import RadcommSignature from "@/components/homepage/RadcommSignature";
import ExecInvitation from "@/components/homepage/ExecInvitation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExecutiveManifesto />
      <EventHighlights />
      <StrategicVision />
      <StrategicPillars />
      <ImpactStats />
      <GlobalShowcase />
      <RadcommSignature />
      <ExecInvitation />
    </>
  );
}
