import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import images from "@/lib/images";
import ProjectsIntro from "./components/ProjectsIntro";
import PlatformsShowcase from "./components/PlatformsShowcase";
import ProjectsClosing from "./components/ProjectsClosing";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";

export const metadata: Metadata = {
  title: "Programme & Awards",
  description:
    "Explore the full Summit Programme & Awards — CEO roundtables, investment dialogues, thought-leadership sessions, and 40 prestigious Hotelier Africa Leadership Award categories across 3 tiers.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Programme & Awards | Hotelier Africa Leadership Summit 2026",
    description:
      "40 award categories across 3 tiers, 4 summit sessions, and the prestigious Africa's Top 50 Hotel GMs — discover the full programme for the 2nd Hotelier Africa Leadership Summit 2026.",
    url: "https://summit.hotelierafricamag.com/projects",
  },
};

export default function Projects() {
  return (
    <>
      <PageHero
        headline="Summit Programme & Awards"
        subtext="High-level discussions, CEO roundtables, investment dialogues, executive networking, and the prestigious Hotelier Africa Leadership Awards — all in one premier event."
        backgroundImage={images.projectHero}
      />
      <ProjectsIntro />
      <GoldWaveDivider />
      <PlatformsShowcase />
      <ProjectsClosing />
    </>
  );
}
