"use client";

import PageHero from "@/components/page-hero";
import SectionContainer from "@/components/section-container";
import EditorialBlock from "@/components/editorial-block";
import Reveal from "@/components/animation/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import images from "@/lib/images";
import { motion as _motion } from "framer-motion";
import {
  CheckCircle2,
  UserCircle,
  Share2,
  Eye,
  LineChart,
  Network,
  Calendar,
} from "lucide-react";

const motion: any = _motion as any;

const roles = [
  "Chief Information Officers (CIOs)",
  "Chief Technology Officers (CTOs)",
  "Chief Digital Officers (CDOs)",
  "Heads of Innovation",
  "Chief Data & AI Officers",
  "Board Members overseeing technology and digital strategy",
  "Government & Public Sector Technology Leaders",
  "Regulators, policymakers & digital economy stakeholders",
];

const whyJoin = [
  {
    icon: <UserCircle className="w-5 h-5 text-accent" />,
    title: "Be Recognised as a Trusted Technology Leader",
    description:
      "A prestigious platform for senior technology leaders to share insight and shape discourse.",
    content:
      "Members contribute concise executive perspectives through curated leadership panels, boardroom dialogues, and expert commentary—designed to fit the schedules of high-performing executives. All contributions are selectively curated by RADCOMM's editorial and advisory teams and featured across DigitalFuture Magazine, The Technology Boardroom platforms, and partner media channels.",
  },
  {
    icon: <Share2 className="w-5 h-5 text-accent" />,
    title: "Thought Leadership & Executive Publishing",
    description:
      "Publish bylined thought leadership articles and strategic commentaries across RADCOMM's media platforms.",
    content:
      "Each article is curated and refined in collaboration with RADCOMM's editorial team, aligned with board-level, policy, and C-suite audiences. Articles feature the member's headshot, professional biography, and organisational profile, positioning contributors as voices shaping technology strategy and digital governance.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-accent" />,
    title: "Executive Profiles",
    description:
      "Every member receives a Technology Boardroom Executive Profile to reinforce credibility.",
    content:
      "Profiles include professional headshot and executive biography, organisation overview, areas of expertise, and links to featured thought leadership. Members also receive official Technology Boardroom digital badges for use across LinkedIn, corporate websites, and email signatures.",
  },
  {
    icon: <Eye className="w-5 h-5 text-accent" />,
    title: "Executive Visibility Without the Noise",
    description:
      "A high-trust, invitation-only leadership council where visibility is earned through insight.",
    content:
      "Members benefit from curated exposure to the right audiences, boardroom-level conversations (not vendor pitches), global visibility with regional relevance, and long-term reputation building—not short-term publicity.",
  },
  {
    icon: <LineChart className="w-5 h-5 text-accent" />,
    title: "Peer Insight & Benchmarking",
    description:
      "Learn how other organizations are navigating digital transformation and strategic challenges.",
    content:
      "Access real-world case studies, implementation strategies, and lessons learned from peers facing similar challenges in different industries and regions.",
  },
  {
    icon: <Network className="w-5 h-5 text-accent" />,
    title: "Strategic Networking",
    description:
      "Build meaningful relationships with executives who can become partners and trusted advisors.",
    content:
      "Our curated approach ensures you're connecting with executives of similar seniority and relevant expertise, creating the foundation for lasting professional relationships.",
  },
  {
    icon: <Calendar className="w-5 h-5 text-accent" />,
    title: "Exclusive Forums & Dialogues",
    description:
      "Participate in intimate roundtables and specialized working groups focused on critical topics.",
    content:
      "From board-level strategy sessions to deep dives on emerging technologies, our programming is designed specifically for executive decision-makers committed to organizational excellence.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        headline="About The Technology Boardroom"
        subtext="The Technology Boardroom convenes Chief Information Officers (CIOs), Chief Technology Officers (CTOs), Chief Digital Officers (CDOs), and Public Sector Technology Leaders from across the Middle East, Africa, and global markets."
        backgroundImage={images.aboutHero}
      />

      {/* Intro Section - Purpose & Vision */}
      <SectionContainer className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-12">
            <EditorialBlock
              title="Our Purpose & Vision"
              leftContent={`The Technology Boardroom was established to elevate technology conversations beyond operational delivery—into the boardroom, policy arena, and executive strategy space. It is a trusted environment where leaders move beyond theory to practical, high-impact conversations on technology strategy, digital resilience, governance, and long-term value creation.`}
              rightContent={`Our vision is to be the world’s most trusted executive platform where technology leaders shape strategy, influence policy, and co-create sustainable digital economies. Through curated engagements across global hubs, we inform policy, strengthen governance, and accelerate innovation-led growth.`}
            />
          </div>
        </div>

        {/* Feature Visual Break */}
        <div className="mt-24 relative aspect-[21/9] w-full overflow-hidden rounded-sm border border-border group">
          <img
            src={images.aboutPurpose}
            alt="Boardroom Vision"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 max-w-2xl px-6">
              <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">
                The Strategic Mandate
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-white italic">
                Elevating technology from IT execution to Boardroom Strategy.
              </h3>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Who We Convene - Persona Cards */}
      <section className="bg-secondary/5 py-24 border-y border-border">
        <SectionContainer>
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who We Convene
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed">
              The Technology Boardroom brings together the architects of the
              digital economy—leaders who define strategy, policy, and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, i) => (
              <Reveal key={role} delay={i * 0.05}>
                <div className="group h-full p-8 border border-border bg-card rounded-sm hover:border-accent/40 transition-all duration-500">
                  <div className="h-0.5 w-6 bg-accent mb-6 transition-all duration-500 group-hover:w-12" />
                  <p className="text-foreground/80 font-medium leading-relaxed">
                    {role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Why Join - Membership Blueprint */}
      <SectionContainer className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Membership Benefits
                </h2>
                <div className="h-1 w-20 bg-accent mb-8" />
                <p className="text-xl text-foreground/60 leading-relaxed font-serif">
                  A comprehensive ecosystem designed to amplify executive
                  influence, visibility, and strategic insight.
                </p>
              </div>

              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border shadow-2xl">
                <img
                  src={images.aboutMembership}
                  alt="Membership Benefits"
                  className="w-full h-full object-cover brightness-75 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background to-transparent">
                  <p className="text-white text-sm font-medium italic">
                    "Visibility is earned through insight, experience, and
                    contribution."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-4">
              {whyJoin.map((item, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border px-8 py-4 bg-card rounded-sm transition-all hover:bg-secondary/5 data-[state=open]:border-accent/30"
                  >
                    <AccordionTrigger className="hover:no-underline group">
                      <div className="flex items-start gap-6 text-left">
                        <div className="mt-1 transition-transform group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-foreground/50 font-normal mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 pt-8 pl-14 text-lg leading-relaxed border-t border-border/50 mt-4 font-serif italic">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionContainer>

      {/* Executive Profile Preview - The "Value Visualized" */}
      <section className="bg-secondary/10 py-24 border-t border-border overflow-hidden">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                  Executive Ecosystem
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The Executive <br />
                  Digital Profile
                </h2>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Every member receives a dedicated digital profile, designed to
                  position leadership expertise at the heart of the global
                  technology conversation.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Professional Headshot & Executive Bio",
                  "Verified Expertise Badging",
                  "Curated Archive of Contributions",
                  "Cross-Regional Visibility",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <div className="h-px w-8 bg-accent" />
                    <span className="text-foreground/80 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative z-10 p-2 bg-border/20 rounded-sm backdrop-blur-xl border border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                <img
                  src={images.aboutProfilePreview}
                  alt="Executive Profile Preview"
                  className="w-full rounded-xs shadow-inner"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Final Vision Statement - Signature Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <img
            src={images.aboutLeadership}
            alt="Leadership Backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        <SectionContainer className="relative z-10 text-center">
          <Reveal>
            <div className="inline-block px-4 py-1 border border-accent/30 rounded-full mb-8">
              <span className="text-accent text-xs uppercase tracking-widest font-bold">
                The Vision 2025
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-6xl font-bold text-foreground text-pretty mb-12 max-w-4xl mx-auto leading-tight">
              Advancing strategic technology leadership at the board level.
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-border/50 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-accent text-3xl font-bold font-display uppercase tracking-tighter">
                  Global
                </p>
                <p className="text-xs text-foreground/40 uppercase tracking-widest mt-1">
                  Convene
                </p>
              </div>
              <div className="text-center">
                <p className="text-accent text-3xl font-bold font-display uppercase tracking-tighter">
                  Trusted
                </p>
                <p className="text-xs text-foreground/40 uppercase tracking-widest mt-1">
                  Environment
                </p>
              </div>
              <div className="text-center">
                <p className="text-accent text-3xl font-bold font-display uppercase tracking-tighter">
                  Strategic
                </p>
                <p className="text-xs text-foreground/40 uppercase tracking-widest mt-1">
                  Impact
                </p>
              </div>
            </div>
          </Reveal>
        </SectionContainer>
      </section>
    </>
  );
}
