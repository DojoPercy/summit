"use client";

import PageHero from "@/components/page-hero";
import HeroSection from "@/components/hero/HeroSection";
import ExecutiveManifesto from "@/components/executive-manifesto";
import SectionContainer from "@/components/section-container";
import PremiumPillar from "@/components/premium-pillar";
import CTASection from "@/components/cta-section";
import EditorialBlock from "@/components/editorial-block";
import Reveal from "@/components/animation/reveal";
import { motion as _motion } from "framer-motion";
import images from "@/lib/images";
import { Globe, Users, TrendingUp, ShieldCheck } from "lucide-react";

const motion: any = _motion as any;

const pillars = [
  {
    title: "Board-Level Technology Leadership",
    description:
      "Elevating technology conversations from IT execution to boardroom strategy, governance, and enterprise-wide impact.",
    imagePath: images.pillarBoardroom,
  },
  {
    title: "Digital Transformation & AI",
    description:
      "Exploring practical applications of AI, data, cloud, cybersecurity, and emerging technologies across sectors.",
    imagePath: images.pillarAI,
  },
  {
    title: "Technology Policy & Digital Governance",
    description:
      "Bridging the gap between innovation and regulation to support secure, inclusive, and sustainable digital ecosystems.",
    imagePath: images.pillarGovernance,
  },
  {
    title: "Innovation, Sustainability & Impact",
    description:
      "Leveraging technology to advance energy transition, climate action, financial inclusion, smart infrastructure, and social impact.",
    imagePath: images.pillarSustainability,
  },
  {
    title: "Cross-Regional Collaboration",
    description:
      "Connecting leaders across Africa, the Middle East, Europe, and North America to share insight, experience, and solutions.",
    imagePath: images.pillarCollaboration,
  },
];

const cities = [
  {
    name: "Dubai & Abu Dhabi",
    focus: "Innovation, energy, and digital economy leadership",
    description:
      "Leading the global narrative on energy transition and digital governance through high-level summits and executive dialogues.",
    imagePath: images.cityDubai,
  },
  {
    name: "Accra & Nairobi",
    focus: "Digital transformation, fintech, and public sector innovation",
    description:
      "Hubs of rapid digital evolution, where fintech and public sector innovation converge to redefine African technology leadership.",
    imagePath: images.cityAccra,
  },
  {
    name: "Riyadh",
    focus: "Technology governance and smart nation initiatives",
    description:
      "At the heart of Vision 2030, Riyadh represents the pinnacle of smart nation initiatives and technology-led societal transformation.",
    imagePath: images.cityRiyadh,
  },
  {
    name: "New York & Global Cities",
    focus: "Global perspectives and best practices",
    description:
      "Bridging East and West through strategic dialogues in the world's most influential financial and technology capitals.",
    imagePath: images.cityNyc,
  },
];

const stats = [
  {
    label: "Global Hubs",
    value: "25+",
    icon: <Globe className="w-5 h-5 text-accent" />,
  },
  {
    label: "Executive Members",
    value: "500+",
    icon: <Users className="w-5 h-5 text-accent" />,
  },
  {
    label: "Policy Impact",
    value: "High",
    icon: <TrendingUp className="w-5 h-5 text-accent" />,
  },
  {
    label: "Trust Level",
    value: "Board",
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
  },
];

export default function Home() {
  return (
    <>
      {/* Fullscreen Hero Section */}
      <HeroSection />

      {/* The Executive Manifesto */}
      <ExecutiveManifesto />

      {/* Strategic Vision - Immersive editorial section */}
      <section className="relative py-24 overflow-hidden border-y border-border">
        <div className="absolute inset-0 z-0">
          <img
            src={images.homeVision}
            alt="Strategic Vision"
            className="w-full h-full object-cover grayscale opacity-10"
          />
        </div>
        <SectionContainer className="relative z-10">
          <EditorialBlock
            title="Our Strategic Purpose"
            leftContent={`The Technology Boardroom was established to elevate technology conversations beyond operational delivery—into the boardroom, policy arena, and executive strategy space. It is a trusted environment where leaders move beyond theory to practical, high-impact conversations on technology strategy, digital resilience, governance, and long-term value creation.`}
            rightContent={`Our vision is to be the world’s most trusted executive platform where technology leaders shape strategy, influence policy, and co-create sustainable digital economies. Through curated engagements across global hubs, we inform policy, strengthen governance, and accelerate innovation-led growth.`}
          />
        </SectionContainer>
      </section>

      {/* Strategic Pillars - Staggered Grid */}
      <SectionContainer className="py-24" id="pillars">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-pretty">
            Strategic Pillars
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Our platform is built on five core pillars that define meaningful
            engagement for technology leaders, ensuring every dialogue drives
            tangible value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[0]} index={0} />
          </div>
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[1]} index={1} />
          </div>
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[2]} index={2} />
          </div>

          <div className="md:col-start-2 md:col-span-2">
            <PremiumPillar {...pillars[3]} index={3} />
          </div>
          <div className="md:col-span-2">
            <PremiumPillar {...pillars[4]} index={4} />
          </div>
        </div>
      </SectionContainer>

      {/* Impact by the Numbers - Authority metrics */}
      <section className="bg-secondary/10 py-24 border-y border-border">
        <SectionContainer>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.1}>
                <div className="text-center space-y-4 group">
                  <div className="mx-auto w-12 h-12 bg-card border border-border flex items-center justify-center rounded-sm group-hover:bg-accent/10 transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-4xl font-display font-bold text-foreground tracking-tighter">
                      {stat.value}
                    </h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Global Showcase - Split Editorial Layout */}
      <section className="py-24" id="locations">
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
                <div className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden rounded-sm group border border-border shadow-xl">
                  {city.imagePath ? (
                    <img
                      src={city.imagePath}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                      <span className="text-foreground/20 text-xs font-mono uppercase tracking-[0.2em]">
                        // ADD IMAGE: {city.name}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background/80 to-transparent">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">
                      {city.name}
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block border-l-2 border-accent pl-4 mb-2">
                    <span className="text-accent uppercase tracking-widest text-sm font-bold">
                      Impact Node
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    {city.focus}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed font-serif italic line-clamp-4">
                    {city.description}
                  </p>
                  <div className="pt-4">
                    <div className="h-px w-24 bg-accent/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Powered by RADCOMM Group - Authority Signature */}
      <section className="bg-secondary/5 py-24 border-y border-border">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-sm border border-border bg-card p-1">
            <div className="relative overflow-hidden rounded-sm bg-background px-8 py-16 md:px-16 md:py-24">
              <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <img
                  src={images.masdarCity}
                  alt="Masdar City HQ"
                  className="w-full h-full object-cover grayscale"
                />
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
                      The Technology Boardroom is curated and delivered by
                      RADCOMM Group, a media-led business intelligence and
                      leadership platform headquartered in Masdar City, Abu
                      Dhabi.
                    </p>
                    <p className="text-lg text-foreground/60 leading-relaxed">
                      RADCOMM designs and delivers influential conferences,
                      awards, executive exchanges, and authoritative media
                      platforms shaping leadership dialogue across Africa and
                      the Middle East.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-1" />
                <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-8">
                  <div className="relative h-32 w-full max-w-[280px]">
                    <img
                      src={images.radcomm}
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
      </section>

      {/* Executive Invitation - Premium final call */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src={images.homeMembership}
            alt="Executive Invitation"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <SectionContainer className="relative z-10 text-center">
          <Reveal>
            <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
              The Exclusive Council
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 max-w-4xl mx-auto leading-tight text-pretty">
              Join the World&apos;s Most Trusted Technology Boardroom.
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-serif italic">
              Participation is reserved for executives and leaders committed to
              organizational excellence and global digital governance.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="px-12 py-4 bg-accent text-white font-bold uppercase tracking-widest hover:bg-accent/80 transition-colors rounded-xs"
              >
                Apply for Invitation
              </a>
            </div>
          </Reveal>
        </SectionContainer>
      </section>
    </>
  );
}
