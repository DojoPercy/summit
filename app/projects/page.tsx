"use client";

import PageHero from "@/components/page-hero";
import images from "@/lib/images";
import ProjectsIntro from "./components/ProjectsIntro";
import PlatformsShowcase from "./components/PlatformsShowcase";
import ProjectsClosing from "./components/ProjectsClosing";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";

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
