"use client";

import PageHero from "@/components/page-hero";
import HeroSection from "@/components/hero/HeroSection";
import ExecutiveManifesto from "@/components/executive-manifesto";
import SectionContainer from "@/components/section-container";
import PremiumPillar from "@/components/premium-pillar";
import LocationCard from "@/components/location-card";
import CTASection from "@/components/cta-section";
import EditorialBlock from "@/components/editorial-block";
import { Users, Rocket, Scale, Lightbulb, Globe } from "lucide-react";
import { motion as _motion } from "framer-motion";

const motion: any = _motion as any;

const pillars = [
  {
    title: "Board-Level Technology Leadership",
    description:
      "Elevating technology conversations from IT execution to boardroom strategy, governance, and enterprise-wide impact.",
    // imagePath: "/images/pillars/boardroom.jpg", // ADD IMAGE: Boardroom/Executive Strategy
  },
  {
    title: "Digital Transformation & AI",
    description:
      "Exploring practical applications of AI, data, cloud, cybersecurity, and emerging technologies across sectors.",
    // imagePath: "/images/pillars/ai-tech.jpg", // ADD IMAGE: Advanced AI/Tech Interface
  },
  {
    title: "Technology Policy & Digital Governance",
    description:
      "Bridging the gap between innovation and regulation to support secure, inclusive, and sustainable digital ecosystems.",
    // imagePath: "/images/pillars/governance.jpg", // ADD IMAGE: Policy/Modern Government Building
  },
  {
    title: "Innovation, Sustainability & Impact",
    description:
      "Leveraging technology to advance energy transition, climate action, financial inclusion, smart infrastructure, and social impact.",
    // imagePath: "/images/pillars/sustainability.jpg", // ADD IMAGE: Green Tech/Innovation
  },
  {
    title: "Cross-Regional Collaboration",
    description:
      "Connecting leaders across Africa, the Middle East, Europe, and North America to share insight, experience, and solutions.",
    // imagePath: "/images/pillars/collaboration.jpg", // ADD IMAGE: Global Connection/Conference
  },
];

const cities = [
  {
    name: "Dubai & Abu Dhabi",
    focus: "Innovation, energy, and digital economy leadership",
    description:
      "Leading the global narrative on energy transition and digital governance through high-level summits and executive dialogues.",
    // imagePath: "/images/cities/dubai.jpg", // ADD IMAGE: Dubai/Abu Dhabi Skyline
  },
  {
    name: "Accra & Nairobi",
    focus: "Digital transformation, fintech, and public sector innovation",
    description:
      "Hubs of rapid digital evolution, where fintech and public sector innovation converge to redefine African technology leadership.",
    // imagePath: "/images/cities/accra.jpg", // ADD IMAGE: Modern Accra or Nairobi Cityscape
  },
  {
    name: "Riyadh",
    focus: "Technology governance and smart nation initiatives",
    description:
      "At the heart of Vision 2030, Riyadh represents the pinnacle of smart nation initiatives and technology-led societal transformation.",
    // imagePath: "/images/cities/riyadh.jpg", // ADD IMAGE: Riyadh Skyline/KAFD
  },
  {
    name: "New York & Global Cities",
    focus: "Global perspectives and best practices",
    description:
      "Bridging East and West through strategic dialogues in the world's most influential financial and technology capitals.",
    // imagePath: "/images/cities/nyc.jpg", // ADD IMAGE: New York City / Global Hub
  },
];

export default function Home() {
  return (
    <>
      {/* Fullscreen Hero Section */}
      <HeroSection />

      {/* The Executive Manifesto */}
      <ExecutiveManifesto />

      {/* Strategic Pillars - Staggered Grid */}
      <SectionContainer className="py-24" id="pillars">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Strategic Pillars
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Our platform is built on five core pillars that define meaningful
            engagement for technology leaders, ensuring every dialogue drives
            tangible value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* First Row: 3 columns */}
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[0]} index={0} />
          </div>
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[1]} index={1} />
          </div>
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[2]} index={2} />
          </div>

          {/* Second Row: 2 offset columns */}
          <div className="md:col-start-2 md:col-span-2">
            <PremiumPillar {...pillars[3]} index={3} />
          </div>
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[4]} index={4} />
          </div>
        </div>
      </SectionContainer>

      {/* Global Showcase - Split Editorial Layout */}
      <section
        className="bg-secondary/5 py-24 border-y border-border"
        id="locations"
      >
        <SectionContainer>
          <div className="mb-20 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Global Reach, Local Impact
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-8" />
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
              The Technology Boardroom operates across key global and regional
              hubs, ensuring diversity of thought and cross-border innovation.
            </p>
          </div>

          <div className="space-y-32">
            {cities.map((city, idx) => (
              <div
                key={city.name}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* City Image Wrapper */}
                <div className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden rounded-sm group border border-border">
                  {/* ADD IMAGE: {city.name} */}
                  <div className="absolute inset-0 bg-secondary/20 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                    <span className="text-foreground/20 text-xs font-mono uppercase tracking-[0.2em]">
                      // ADD IMAGE: {city.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* City Text content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block border-l-2 border-accent pl-4 mb-2">
                    <span className="text-accent uppercase tracking-widest text-sm font-bold">
                      {city.name}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    {city.focus}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed font-serif">
                    {city.description}
                  </p>
                  <div className="pt-4">
                    <div className="h-px w-full bg-border" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Powered by RADCOMM Group - Authority Signature */}
      <SectionContainer className="py-24">
        <div className="relative overflow-hidden rounded-sm border border-border bg-card p-1">
          <div className="relative overflow-hidden rounded-sm bg-secondary/5 px-8 py-16 md:px-16 md:py-24">
            {/* Subtle Background (HQ masdar city overlay) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
              {/* ADD IMAGE: Masdar City / RADCOMM HQ Background - Something modern/sustainable */}
              <div className="w-full h-full bg-accent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Powered by RADCOMM Group
                  </h2>
                  <div className="h-1 w-20 bg-accent" />
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-foreground/80 leading-relaxed font-serif italic">
                    The Technology Boardroom is curated and delivered by RADCOMM
                    Group, a media-led business intelligence and leadership
                    platform headquartered in Masdar City, Abu Dhabi.
                  </p>
                  <p className="text-lg text-foreground/60 leading-relaxed">
                    RADCOMM designs and delivers influential conferences,
                    awards, executive exchanges, and authoritative media
                    platforms shaping leadership dialogue across Africa and the
                    Middle East.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1" /> {/* Spacer */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-8">
                <div className="relative h-32 w-full max-w-[280px]">
                  <img
                    src="/RADCOMM.png"
                    alt="RADCOMM Group"
                    className="h-full w-full object-contain filter brightness-110 contrast-110"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
                    Official Curator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <CTASection
        headline="Join the Conversation"
        description="The Technology Boardroom is where technology leaders shape strategy, influence policy, and co-create the future of digital leadership. Participation is by invitation or nomination only."
        cta={{ text: "Apply Now", href: "/contact" }}
      />
    </>
  );
}
