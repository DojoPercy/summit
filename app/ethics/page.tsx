import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethics Policy",
  description: "Ethics Policy for Hotelier Africa — our editorial principles and professional standards.",
};

const doNotPromote = [
  "Political propaganda or partisan agendas",
  "Illegal activities",
  "Hate speech, discrimination, or exploitation",
  "Cruelty toward humans or animals",
  "Conflict or illegal products",
  "Exploitative practices involving children, vulnerable groups, or communities",
  "Any activity that undermines ethical business conduct or professional integrity",
];

export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b border-border bg-background">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent w-full" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Legal</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Ethics Policy
          </h1>
          <p className="mt-4 text-sm text-foreground/55">
            Hotelier Africa — operated by Strategic Brand Focus Africa Limited (SBF Africa)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">

        <div className="space-y-4">
          <p className="text-sm text-foreground/70 leading-relaxed">
            This Ethics Policy reflects the editorial principles and professional standards upheld by
            Hotelier Africa, a publication managed by Strategic Brand Focus Africa Limited (SBF Africa).
            It represents our commitment to responsible journalism, fair reporting, and ethical business
            conduct across our website, publications, social media platforms, events, and digital content.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Hotelier Africa maintains a high ethical standard in all editorial, digital, and multimedia
            content published across our platforms. We are committed to accuracy, fairness, professionalism,
            and integrity in all information we provide to our readers, partners, and industry stakeholders.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
            Reporting Concerns
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            If you notice any information on our website, social media, publications, or video content that
            you believe is incorrect, misleading, or unethical, we encourage you to notify us at{" "}
            <a href="mailto:info@sbfafrica.com" className="text-accent hover:underline">
              info@sbfafrica.com
            </a>
            . All feedback from readers, partners, and industry stakeholders is welcomed and appreciated.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Where content is found to be factually inaccurate, misleading, or inconsistent with our
            editorial standards, we will review the matter and make corrections where necessary.
            Substantive corrections to published content will be clearly reflected for future readers.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            However, in line with the principles of independent journalism, Hotelier Africa does not alter
            editorial opinions, professional reviews, rankings, or industry commentary upon request unless
            a factual error has been identified. Editorial independence remains essential to our credibility
            and reputation.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
            Editorial Independence
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Hotelier Africa maintains a strict separation between editorial content and commercial interests.
            Advertisers, sponsors, partners, or external parties do not influence editorial decisions,
            rankings, recognitions, or published opinions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
            What We Do Not Promote
          </h2>
          <ul className="space-y-3 pl-4">
            {doNotPromote.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
            Professional Standards
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Hotelier Africa expects its editors, contributors, staff, partners, and representatives to
            deal fairly and honestly with readers, clients, suppliers, sponsors, and competitors. All
            interactions must be conducted in a manner that protects the credibility, reputation, and
            professionalism of the publication.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Any reader, partner, advertiser, or stakeholder who engages with Hotelier Africa has the right
            to expect to be treated with fairness, honesty, transparency, and integrity.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Hotelier Africa remains committed to responsible journalism, professional excellence, and
            ethical publishing in support of the growth and development of Africa's hospitality, tourism,
            and leisure industry.
          </p>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-foreground/45 leading-relaxed">
            This Ethics Policy forms part of the general Terms & Conditions governing the use of Hotelier
            Africa websites, publications, and related services.
          </p>
        </div>
      </div>
    </div>
  );
}
