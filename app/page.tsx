import PageHero from '@/components/page-hero'
import HeroSection from '@/components/hero/HeroSection'
import SectionContainer from '@/components/section-container'
import PillarCard from '@/components/pillar-card'
import LocationCard from '@/components/location-card'
import CTASection from '@/components/cta-section'
import EditorialBlock from '@/components/editorial-block'

const pillars = [
  {
    icon: '👥',
    title: 'Board-Level Leadership',
    description: 'Access to C-suite executives and board members shaping global technology policy and innovation.',
  },
  {
    icon: '🚀',
    title: 'Digital Transformation',
    description: 'Strategic dialogues on digital evolution, emerging technologies, and organizational modernization.',
  },
  {
    icon: '⚖️',
    title: 'Policy & Governance',
    description: 'Navigate regulatory landscapes and shape technology policy at the highest levels.',
  },
  {
    icon: '💡',
    title: 'Innovation Networks',
    description: 'Connect with industry pioneers and breakthrough thinkers driving the future of technology.',
  },
  {
    icon: '🌍',
    title: 'Cross-Regional Strategy',
    description: 'Global perspectives on technology adoption and business strategy across continents.',
  },
]

const locations = [
  {
    region: 'Middle East & Africa',
    description: 'Dubai-based operations connecting executives across the UAE, GCC, and African markets.',
    icon: '🕌',
  },
  {
    region: 'Europe & Beyond',
    description: 'Strategic partnerships across European innovation hubs and emerging tech centers.',
    icon: '🏰',
  },
  {
    region: 'Asia Pacific',
    description: 'Expanding network across Asia-Pacific technology and financial centers.',
    icon: '🏯',
  },
  {
    region: 'Global Access',
    description: 'Virtual platforms and strategic visits enabling worldwide executive engagement.',
    icon: '🌐',
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
          title="Premium Executive Leadership"
          leftContent="The Technology Boardroom brings together distinguished executives and innovative thinkers for strategic dialogue on the most pressing technology challenges facing organizations globally.

Our curated community represents the highest levels of corporate and institutional leadership—CEOs, CTOs, CDOs, and policy makers committed to advancing technology strategy and innovation."
          rightContent="We believe that true innovation emerges from dialogue. Through exclusive roundtables, virtual forums, and strategic retreats, members engage with peers facing similar challenges, gaining insights and building relationships that drive organizational transformation.

Our platform transcends traditional conference experiences, offering intimate conversations between industry leaders, innovative problem-solving workshops, and collaborative exploration of emerging opportunities."
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
        headline="Ready to Join?"
        description="Apply for participation in The Technology Boardroom and connect with the world's most forward-thinking technology executives."
        cta={{ text: 'Apply for Participation', href: '/contact' }}
      />
    </>
  )
}
