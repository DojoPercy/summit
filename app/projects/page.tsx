import PageHero from '@/components/page-hero'
import SectionContainer from '@/components/section-container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const projects = [
  {
    icon: '🎯',
    title: 'Executive Roundtables & Boardroom Dialogues',
    description: 'Intimate discussions on strategic priorities, emerging technologies, and organizational challenges.',
    details: [
      'Quarterly in-person roundtables in key executive hubs',
      'Panel discussions with board-level executives',
      'Confidential peer-to-peer conversations',
      'Focused agendas on strategic priorities',
    ],
  },
  {
    icon: '💬',
    title: 'Virtual Leadership Dialogues',
    description: 'Regular virtual forums on topics critical to technology leadership.',
    details: [
      'Monthly executive webinars and discussions',
      'Deep dives into emerging technologies (AI, cybersecurity, blockchain)',
      'Digital transformation strategy sessions',
      'Policy and regulation impact briefings',
      'Innovation and disruption workshops',
    ],
  },
  {
    icon: '⚡',
    title: 'AI for Energy & Green Transition',
    description: 'Strategic initiatives at the intersection of AI and sustainable technology.',
    details: [
      'Executive forums on AI applications in energy',
      'Green technology innovation networks',
      'Sustainability strategy guidance',
      'Partnership facilitation across sectors',
    ],
  },
  {
    icon: '🚗',
    title: 'Green Mobility & Sustainable Transport',
    description: 'Leadership conversations on the future of transportation and environmental responsibility.',
    details: [
      'Connected vehicle and smart transportation forums',
      'EV ecosystem development discussions',
      'Sustainable logistics and supply chain strategies',
      'Urban mobility innovation networks',
    ],
  },
  {
    icon: '💰',
    title: 'The Future of Money & Digital Assets',
    description: 'Exploring the transformation of finance, cryptocurrency, and digital economies.',
    details: [
      'Fintech and digital currency strategy sessions',
      'Blockchain and Web3 executive forums',
      'Central bank digital currency (CBDC) discussions',
      'Payment systems and financial innovation',
    ],
  },
  {
    icon: '🤝',
    title: 'Private Networking & Strategic Forums',
    description: 'Exclusive opportunities for executive relationship building and strategic partnerships.',
    details: [
      'Invitation-only networking events',
      'Strategic partnership workshops',
      'Industry-specific executive circles',
      'Executive retreats and strategic planning sessions',
      'Board member networking opportunities',
    ],
  },
]

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        headline="Platforms & Experiences"
        subtext="Our curated portfolio of executive platforms, forums, and dialogues designed for strategic leadership engagement."
      />

      {/* Projects Grid */}
      <SectionContainer className="space-y-12">
        <div className="space-y-4 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty">
            Our Executive Platforms
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Each platform is designed to create meaningful dialogue and strategic connection among technology executives, policy makers, and innovation leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border-border bg-card hover:bg-secondary/30 transition-all hover:border-accent/50 group"
            >
              <CardHeader>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <CardTitle className="font-display text-xl text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <Separator className="bg-border/50" />
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="text-sm text-foreground/60 flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Additional Information */}
      <SectionContainer className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Curated Experiences
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Every platform is carefully designed to foster genuine dialogue and strategic connection among executive leaders.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Global Reach
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Access to executive networks across regions, enabling truly international perspective and collaboration.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Strategic Focus
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Each platform addresses critical challenges and opportunities facing technology executives today.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
