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
    title: "Be Recognised as a Trusted Technology Leader",
    description:
      "The Technology Boardroom provides a prestigious platform for senior technology leaders to share insight, influence discourse, and shape the future of digital leadership.",
    content:
      "Members contribute concise executive perspectives through curated leadership panels, boardroom dialogues, and expert commentary—designed to fit the schedules of high-performing executives. All contributions are selectively curated by RADCOMM's editorial and advisory teams and featured across DigitalFuture Magazine, The Technology Boardroom platforms, and partner media channels—amplifying visibility while maintaining credibility and depth.",
  },
  {
    title: "Thought Leadership & Executive Publishing",
    description:
      "Members are invited to publish bylined thought leadership articles, strategic commentaries, and executive viewpoints across RADCOMM's media platforms.",
    content:
      "Each article is curated and refined in collaboration with RADCOMM's editorial team, aligned with board-level, policy, and C-suite audiences, and distributed across digital platforms and select social media channels. Articles feature the member's headshot, professional biography, and organisational profile, positioning contributors as voices shaping technology strategy and digital governance.",
  },
  {
    title: "Executive Profiles",
    description:
      "Every member receives a Technology Boardroom Executive Profile, designed to reinforce credibility, influence, and discoverability.",
    content:
      "Profiles include professional headshot and executive biography, organisation overview and leadership mandate, areas of expertise (AI, cybersecurity, digital transformation, data, innovation, etc.), links to websites, social platforms, and featured thought leadership, plus a curated archive of panels, publications, and contributions. Members also receive official Technology Boardroom digital badges for use across LinkedIn, corporate websites, email signatures, and speaking profiles.",
  },
  {
    title: "Executive Visibility Without the Noise",
    description:
      "The Technology Boardroom is not a mass network or open forum. It is a high-trust, invitation-only leadership council where visibility is earned through insight, experience, and contribution.",
    content:
      "Members benefit from curated exposure to the right audiences, boardroom-level conversations (not vendor pitches), global visibility with regional relevance, alignment with public-sector and policy leadership, and long-term reputation building—not short-term publicity.",
  },
  {
    title: "Peer Insight & Benchmarking",
    description:
      "Learn how other organizations are navigating digital transformation, emerging technologies, and strategic challenges. Benchmark your approach against industry leaders.",
    content:
      "Our members gain access to real-world case studies, implementation strategies, and lessons learned from peers facing similar challenges in different industries and regions.",
  },
  {
    title: "Strategic Networking",
    description:
      "Build meaningful relationships with executives and thought leaders who can become partners, collaborators, and trusted advisors.",
    content:
      "Unlike generic conferences, our curated approach ensures you're connecting with executives of similar seniority and relevant expertise, creating the foundation for lasting professional relationships.",
  },
  {
    title: "Exclusive Forums & Dialogues",
    description:
      "Participate in intimate roundtables, specialized working groups, and strategic retreats focused on topics that matter most to your organization.",
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
        subtext="The Technology Boardroom convenes Chief Information Officers (CIOs), Chief Technology Officers (CTOs), Chief Digital Officers (CDOs), Heads of Innovation, Chief Data & AI Officers, and Public Sector Technology Leaders from across the Middle East, Africa, and global markets."
        backgroundImage={images.about}
      />

      {/* Intro Section */}
      <SectionContainer className="space-y-12">
        <EditorialBlock
          title="Our Purpose & Vision"
          leftContent={`The Technology Boardroom was established to elevate technology conversations beyond operational delivery—into the boardroom, policy arena, and executive strategy space. It is a trusted environment where leaders move beyond theory to practical, high-impact conversations on technology strategy, digital resilience, governance, and long-term value creation.

Through curated engagements across global hubs, The Technology Boardroom enables cross-regional exchange that informs policy, strengthens governance, and accelerates innovation-led growth.`}
          rightContent={`Our vision is to be the world’s most trusted executive platform where technology leaders shape strategy, influence policy, and co-create sustainable digital economies. We advance strategic technology leadership at board and executive levels, shape digital governance and technology policy dialogue across regions, and enable responsible innovation and AI adoption.`}
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
              The Technology Boardroom brings together executives and leaders
              from across the technology, finance, policy, and innovation
              sectors:
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
              Membership offers unparalleled access to executive leaders,
              curated insights, and strategic opportunities.
            </p>
          </Reveal>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {whyJoin.map((item, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <AccordionItem
                value={`item-${index}`}
                className="border border-border px-6 py-2 bg-card hover:bg-secondary/30 transition-colors"
              >
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
              The Technology Boardroom exists to advance strategic technology
              leadership at board and executive levels, shape digital governance
              and technology policy dialogue across regions, and foster
              collaboration between public and private sector leaders to
              co-create sustainable digital economies.
            </p>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
