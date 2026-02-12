import PageHero from '@/components/page-hero'
import SectionContainer from '@/components/section-container'
import EditorialBlock from '@/components/editorial-block'
import Reveal from '@/components/animation/reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

const roles = [
  'Chief Technology Officers',
  'Chief Digital Officers',
  'Chief Innovation Officers',
  'Chief Data Officers',
  'Chief Information Officers',
  'Board Members & Executives',
  'Technology Strategists',
  'Policy Makers & Regulators',
  'Venture Capital Leaders',
  'Enterprise Architects',
  'Innovation Directors',
  'Technology Council Members',
]

const whyJoin = [
  {
    title: 'Peer Insight & Benchmarking',
    description: 'Learn how other organizations are navigating digital transformation, emerging technologies, and strategic challenges. Benchmark your approach against industry leaders.',
    content: 'Our members gain access to real-world case studies, implementation strategies, and lessons learned from peers facing similar challenges in different industries and regions.',
  },
  {
    title: 'Strategic Networking',
    description: 'Build meaningful relationships with executives and thought leaders who can become partners, collaborators, and trusted advisors.',
    content: 'Unlike generic conferences, our curated approach ensures you\'re connecting with executives of similar seniority and relevant expertise, creating the foundation for lasting professional relationships.',
  },
  {
    title: 'Exclusive Forums & Dialogues',
    description: 'Participate in intimate roundtables, specialized working groups, and strategic retreats focused on topics that matter most to your organization.',
    content: 'From board-level strategy sessions to deep dives on emerging technologies, our programming is designed specifically for executive decision-makers committed to organizational excellence.',
  },
  {
    title: 'Thought Leadership Access',
    description: 'Engage with published research, member-exclusive insights, and collaborative knowledge creation on technology trends and policy matters.',
    content: 'We curate and produce original research that informs business strategy, policy discussions, and innovation initiatives—available exclusively to members.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        headline="About The Technology Boardroom"
        subtext="A premier executive council dedicated to strategic dialogue on technology, innovation, and business leadership."
      />

      {/* Intro Section */}
      <SectionContainer className="space-y-12">
        <EditorialBlock
          title="Our Purpose"
          leftContent="The Technology Boardroom exists to convene the world's most thoughtful and influential technology executives for meaningful dialogue on the challenges and opportunities shaping our future.

We believe that the best solutions emerge from intimate conversations between peers—executives who understand each other's challenges and can collaborate on solutions that matter."
          rightContent="Rather than hosting large-scale conferences or public forums, we curate intimate gatherings that foster genuine connection and substantive dialogue. Our members represent the highest levels of organizational leadership: CEOs, CIOs, CTOs, CDOs, and board members committed to driving meaningful technology innovation.

Our platform bridges the gap between strategy and execution, connecting executive leadership across industries and regions."
        />
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Who We Convene */}
      <SectionContainer className="space-y-12">
        <div>
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-6">
              Who We Convene
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
              The Technology Boardroom brings together executives and leaders from across the technology, finance, policy, and innovation sectors:
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role, i) => (
            <Reveal key={role} delay={i * 0.04}>
              <div className="border border-border rounded-sm px-4 py-3 bg-card/50 hover:bg-secondary/30 transition-colors">
                <p className="text-foreground/80 text-sm font-medium">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Why Join */}
      <SectionContainer className="space-y-12">
        <div>
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-6">
              Why Join the Boardroom
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
              Membership offers unparalleled access to executive leaders, curated insights, and strategic opportunities.
            </p>
          </Reveal>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {whyJoin.map((item, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <AccordionItem value={`item-${index}`} className="border border-border px-6 py-2 bg-card hover:bg-secondary/30 transition-colors">
                <AccordionTrigger className="hover:text-accent transition-colors">
                  <div className="text-left">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60 font-normal">
                      {item.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pt-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Vision Statement */}
      <SectionContainer className="py-16">
        <div className="bg-secondary/20 border border-border rounded-sm px-8 py-12">
          <Reveal>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center text-pretty mb-6">
              Our Vision
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-center text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              To create a global leadership community where the world's most innovative and influential technology executives collaborate on solutions to the defining challenges of our time—shaping the future of technology, business, and society.
            </p>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  )
}
