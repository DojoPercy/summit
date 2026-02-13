import PageHero from "@/components/page-hero";
import images from "@/lib/images";
import { Mail, Users, Phone, MapPin, Building } from "lucide-react";
import SectionContainer from "@/components/section-container";
import ContactCard from "@/components/contact-card";
import ContactForm from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

const contactMethods = [
  {
    type: "General Enquiries",
    icon: <Mail className="w-7 h-7" />,
    details: ["info@thetechnologyboardroom.com", "Response within 48 hours"],
  },
  {
    type: "Partnerships & Collaboration",
    icon: <Users className="w-7 h-7" />,
    details: ["info@radcommgroup.com", "Strategic partnership inquiries"],
  },
  {
    type: "Media & Publishing",
    icon: <Mail className="w-7 h-7" />,
    details: [
      "publishing@radcommgroup.com",
      "Editorial & thought leadership submissions",
    ],
  },
  {
    type: "Phone",
    icon: <Phone className="w-7 h-7" />,
    details: ["+971 55 790 9643", "+233 24 741 5140"],
  },
];

const offices = [
  {
    region: "United Arab Emirates",
    description:
      "RADCOMM Media Group, Masdar City, Abu Dhabi, United Arab Emirates",
    icon: <MapPin className="w-7 h-7" />,
  },
  {
    region: "Ghana",
    description:
      "RADCOMM Group, 58 Mansour Street, Parakuo Estates, Christian Village Achimota, Accra",
    icon: <Building className="w-7 h-7" />,
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        headline="Contact Us"
        subtext="Thank you for your interest in The Technology Boardroom. Participation is by invitation or nomination only. For membership, partnership, media, and programme enquiries, please reach out using the details below."
        backgroundImage={images.hero2}
      />

      {/* Contact Methods */}
      <SectionContainer className="space-y-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Contact Methods
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Multiple ways to reach our team and discuss how The Technology
            Boardroom can serve your leadership needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <ContactCard
              key={method.type}
              type={method.type}
              details={method.details}
              icon={method.icon}
            />
          ))}
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Office Locations */}
      <SectionContainer className="space-y-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Global Offices
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Strategic locations enabling executive engagement across regions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office) => (
            <div
              key={office.region}
              className="border border-border rounded-sm p-8 bg-card hover:bg-secondary/30 transition-colors"
            >
              <div className="text-4xl mb-4">{office.icon}</div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {office.region}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {office.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Join the Conversation */}
      <SectionContainer className="space-y-8">
        <div className="bg-secondary/20 border border-border rounded-sm px-8 py-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join the Conversation
          </h2>
          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              If you are a <strong>CIO</strong>, <strong>CTO</strong>,{" "}
              <strong>CDO</strong>, <strong>Head of Innovation</strong>,{" "}
              <strong>Data or AI Leader</strong>, <strong>Board Member</strong>,
              or <strong>Public Sector Technology Executive</strong> and wish to
              be considered for participation, please submit an expression of
              interest below.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our team will respond with next steps where appropriate.
            </p>
          </div>
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Expression of Interest Form */}
      <SectionContainer className="space-y-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Expression of Interest
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8">
            Submit your information below to express your interest in joining
            The Technology Boardroom. Our team will review your application and
            be in touch.
          </p>
        </div>

        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Additional Info */}
      <SectionContainer className="py-16">
        <div className="bg-secondary/20 border border-border rounded-sm px-8 py-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            What to Expect
          </h3>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>We'll review your application within 5 business days</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                A member of our team will contact you to discuss fit and
                opportunities
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                We'll provide information on membership, platforms, and upcoming
                events
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>All conversations are confidential and respected</span>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-foreground/70 text-sm italic">
              The Technology Boardroom is a high-trust, executive-only platform.
              All communications are treated with discretion and
              confidentiality.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
