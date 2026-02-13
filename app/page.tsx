import PageHero from "@/components/page-hero";
import HeroSection from "@/components/hero/HeroSection";
import SectionContainer from "@/components/section-container";
import PillarCard from "@/components/pillar-card";
import LocationCard from "@/components/location-card";
import CTASection from "@/components/cta-section";
import EditorialBlock from "@/components/editorial-block";
import { Users, Rocket, Scale, Lightbulb, Globe } from "lucide-react";

const pillars = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Board-Level Technology Leadership",
    description:
      "Elevating technology conversations from IT execution to boardroom strategy, governance, and enterprise-wide impact.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Digital Transformation & AI",
    description:
      "Exploring practical applications of AI, data, cloud, cybersecurity, and emerging technologies across sectors.",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Technology Policy & Digital Governance",
    description:
      "Bridging the gap between innovation and regulation to support secure, inclusive, and sustainable digital ecosystems.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation, Sustainability & Impact",
    description:
      "Leveraging technology to advance energy transition, climate action, financial inclusion, smart infrastructure, and social impact.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Cross-Regional Collaboration",
    description:
      "Connecting leaders across Africa, the Middle East, Europe, and North America to share insight, experience, and solutions.",
  },
];

const locations = [
  {
    region: "Dubai & Abu Dhabi",
    description: "Innovation, energy, and digital economy leadership",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    region: "Accra & Nairobi",
    description:
      "Digital transformation, fintech, and public sector innovation",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    region: "Riyadh",
    description: "Technology governance and smart nation initiatives",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    region: "New York & Global Cities",
    description: "Global perspectives and best practices",
    icon: <Globe className="w-8 h-8" />,
  },
];

export default function Home() {
  return (
    <>
      {/* Fullscreen Hero Section */}
      <HeroSection />

      {/* Platform Description */}
      <SectionContainer className="space-y-12">
        <EditorialBlock
          title="The Technology Boardroom"
          leftContent={`The Technology Boardroom is an exclusive global executive platform curated by RADCOMM Group, bringing together the world’s most influential technology leaders, digital transformation executives, and innovation policymakers to shape the future of technology, governance, and digital economies.

Designed as a high-level leadership council, the platform provides an invitation-only environment where senior decision-makers engage in strategic dialogue, trusted peer exchange, and collaborative problem-solving on the most critical technology issues facing organisations, governments, and societies.`}
          rightContent={`From boardrooms in New York and Dubai to executive dialogues in Accra, Nairobi, and Riyadh, The Technology Boardroom connects leaders shaping digital futures across regions and sectors.

Participation is by invitation or nomination only. Apply Now!`}
        />
      </SectionContainer>

      {/* Strategic Pillars */}
      <SectionContainer className="space-y-12" id="pillars">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Strategic Pillars
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Our platform is built on five core pillars that define meaningful
            engagement for technology executives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Global Reach */}
      <SectionContainer className="space-y-12" id="locations">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Global Reach, Local Impact
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            The Technology Boardroom operates across key global and regional
            hubs. This cross-regional footprint ensures relevance, diversity of
            thought, and real-world impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location) => (
            <LocationCard
              key={location.region}
              region={location.region}
              description={location.description}
              icon={location.icon}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Powered by RADCOMM Group */}
      <SectionContainer className="space-y-8">
        <div className="bg-secondary/20 border border-border rounded-sm px-8 py-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powered by RADCOMM Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                The Technology Boardroom is curated and delivered by RADCOMM
                Group, a media-led business intelligence and leadership platform
                headquartered in Masdar City, Abu Dhabi.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                RADCOMM designs and delivers influential conferences, awards,
                executive exchanges, and authoritative media platforms shaping
                leadership dialogue across Africa and the Middle East.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/RADCOMM.png"
                alt="RADCOMM Group"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
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
