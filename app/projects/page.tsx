"use client";

import PageHero from "@/components/page-hero";
import images from "@/lib/images";
import {
  Target,
  MessageCircle,
  Zap,
  Truck,
  CreditCard,
  Handshake,
} from "lucide-react";
import SectionContainer from "@/components/section-container";
import { Separator } from "@/components/ui/separator";
import Reveal from "@/components/animation/reveal";
import { motion as _motion } from "framer-motion";

const motion: any = _motion as any;

const platforms = [
  {
    icon: <Target className="w-6 h-6 text-accent" />,
    title: "Executive Roundtables & Boardroom Dialogues",
    description:
      "Intimate discussions on strategic priorities, emerging technologies, and organizational challenges.",
    imagePath: images.projectRoundtables,
    details: [
      "Quarterly in-person roundtables in key executive hubs",
      "Panel discussions with board-level executives",
      "Confidential peer-to-peer conversations",
      "Focused agendas on strategic priorities",
    ],
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-accent" />,
    title: "Virtual Leadership Dialogues",
    description:
      "Regular virtual forums on topics critical to technology leadership and digital strategy.",
    imagePath: images.projectVirtual,
    details: [
      "Monthly executive webinars and discussions",
      "Deep dives into AI, Cybersecurity, and Data",
      "Digital transformation strategy sessions",
      "Policy and regulation impact briefings",
      "Innovation and disruption workshops",
    ],
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: "AI for Energy & Green Transition",
    description:
      "Strategic initiatives at the intersection of AI and sustainable technology leadership.",
    imagePath: images.projectAI,
    details: [
      "Executive forums on AI applications in energy",
      "Green technology innovation networks",
      "Sustainability strategy guidance",
      "Partnership facilitation across sectors",
    ],
  },
  {
    icon: <Truck className="w-6 h-6 text-accent" />,
    title: "Green Mobility & Sustainable Transport",
    description:
      "Leadership conversations on the future of transportation and environmental responsibility.",
    imagePath: images.projectMobility,
    details: [
      "Connected vehicle and smart transportation forums",
      "EV ecosystem development discussions",
      "Sustainable logistics and supply chain strategies",
      "Urban mobility innovation networks",
    ],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-accent" />,
    title: "The Future of Money & Digital Assets",
    description:
      "Exploring the transformation of finance, cryptocurrency, and digital economies.",
    imagePath: images.projectFintech,
    details: [
      "Fintech and digital currency strategy sessions",
      "Blockchain and Web3 executive forums",
      "Central bank digital currency (CBDC) discussions",
      "Payment systems and financial innovation",
    ],
  },
  {
    icon: <Handshake className="w-6 h-6 text-accent" />,
    title: "Private Networking & Strategic Forums",
    description:
      "Exclusive opportunities for executive relationship building and strategic partnerships.",
    imagePath: images.projectNetworking,
    details: [
      "Invitation-only networking events",
      "Strategic partnership workshops",
      "Industry-specific executive circles",
      "Board member networking opportunities",
    ],
  },
];

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        headline="Platforms & Experiences"
        subtext="Invite-only executive platforms, roundtables, and virtual dialogues designed to advance strategic technology leadership, policy, and innovation."
        backgroundImage={images.projects}
      />

      {/* Intro Section */}
      <SectionContainer className="py-24">
        <div className="max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Curated Leadership Ecosystems
            </h2>
            <div className="h-1 w-24 bg-accent mb-12" />
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-serif">
              Our platforms are engineered to create meaningful dialogue and
              strategic connection among technology executives, policy makers,
              and global innovation leaders.
            </p>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Platforms Showcase - Alternating Layout */}
      <section className="bg-secondary/5 border-y border-border overflow-hidden">
        {platforms.map((platform, idx) => (
          <div
            key={platform.title}
            className={`border-b border-border/50 last:border-0 ${idx % 2 !== 0 ? "bg-background" : ""}`}
          >
            <SectionContainer className="py-24 lg:py-32">
              <div
                className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Visual Area */}
                <div className="w-full lg:w-1/2 relative">
                  <Reveal delay={0.1}>
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border group shadow-2xl">
                      <img
                        src={platform.imagePath}
                        alt={platform.title}
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                      {/* Floating Indicator */}
                      <div className="absolute bottom-8 left-8 flex items-center gap-4">
                        <div className="p-3 bg-accent text-white rounded-xs">
                          {platform.icon}
                        </div>
                        <span className="text-white text-xs uppercase tracking-[0.3em] font-bold">
                          Platform {idx + 1}
                        </span>
                      </div>
                    </div>
                  </Reveal>

                  {/* Decorative backdrop blobs */}
                  <div
                    className={`absolute w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10 ${idx % 2 !== 0 ? "-left-20 -top-20" : "-right-20 -bottom-20"}`}
                  />
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <Reveal delay={0.2}>
                    <div className="space-y-6">
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                        {platform.title}
                      </h3>
                      <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-serif">
                        {platform.description}
                      </p>
                    </div>

                    <div className="h-px w-full bg-border/50 my-10" />

                    <div className="space-y-6">
                      <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold">
                        Key Focus Areas
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {platform.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-4">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-sm text-foreground/80 leading-snug">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-10">
                      <button className="text-accent uppercase tracking-widest text-xs font-bold border-b border-accent pb-1 hover:text-accent/70 hover:border-accent/70 transition-all">
                        Inquire about this platform
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </SectionContainer>
          </div>
        ))}
      </section>

      {/* Signature Closing Section */}
      <SectionContainer className="py-24 text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              A Global Mosaic of <br />
              <span className="text-accent italic">Strategic Interaction</span>.
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Our experiences are not just events; they are curated intellectual
              assets designed to strengthen the fabric of global technology
              governance and innovation.
            </p>
            <div className="pt-8 flex flex-wrap justify-center gap-12 text-foreground/30">
              <div className="text-center">
                <p className="text-4xl font-display font-bold">25+</p>
                <p className="text-[10px] uppercase tracking-widest mt-2">
                  Executive Hubs
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-display font-bold">500+</p>
                <p className="text-[10px] uppercase tracking-widest mt-2">
                  Board Members
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-display font-bold">12</p>
                <p className="text-[10px] uppercase tracking-widest mt-2">
                  Sector Focus
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}
