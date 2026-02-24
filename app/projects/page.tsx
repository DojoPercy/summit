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
        headline="Platforms & Experiences"
        subtext="Invite-only executive platforms, roundtables, and virtual dialogues designed to advance strategic technology leadership, policy, and innovation."
        backgroundImage={images.projectHero}
      />
      <ProjectsIntro />
      <GoldWaveDivider />
      <PlatformsShowcase />
      <ProjectsClosing />
    </>
  );
}
