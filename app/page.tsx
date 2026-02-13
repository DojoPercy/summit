import PageHero from '@/components/page-hero'
import HeroSection from '@/components/hero/HeroSection'
import SectionContainer from '@/components/section-container'
import PillarCard from '@/components/pillar-card'
import LocationCard from '@/components/location-card'
import CTASection from '@/components/cta-section'
import EditorialBlock from '@/components/editorial-block'
import { Users, Rocket, Scale, Lightbulb, Globe } from 'lucide-react'

const pillars = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Board-Level Leadership',
    description: 'Access to C-suite executives and board members shaping global technology policy and innovation.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Digital Transformation',
    description: 'Strategic dialogues on digital evolution, emerging technologies, and organizational modernization.',
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Policy & Governance',
    description: 'Navigate regulatory landscapes and shape technology policy at the highest levels.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation Networks',
    description: 'Connect with industry pioneers and breakthrough thinkers driving the future of technology.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Cross-Regional Strategy',
    description: 'Global perspectives on technology adoption and business strategy across continents.',
  },
]

const locations = [
  {
    region: 'Middle East & Africa',
    description: 'Dubai-based operations connecting executives across the UAE, GCC, and African markets.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    region: 'Europe & Beyond',
    description: 'Strategic partnerships across European innovation hubs and emerging tech centers.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    region: 'Asia Pacific',
    description: 'Expanding network across Asia-Pacific technology and financial centers.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    region: 'Global Access',
    description: 'Virtual platforms and strategic visits enabling worldwide executive engagement.',
    icon: <Globe className="w-8 h-8" />,
  },
]

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
            Our platform is built on five core pillars that define meaningful engagement for technology executives.
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
            Global Reach
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Strategic presence across regions enabling truly global executive engagement.
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

      {/* CTA Section */}
      <CTASection
        headline="Join the Conversation"
        description="The Technology Boardroom is where technology leaders shape strategy, influence policy, and co-create the future of digital leadership. Participation is by invitation or nomination only."
        cta={{ text: 'Apply Now', href: '/contact' }}
      />
    </>
  )
}
