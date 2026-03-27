import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hotelier Africa — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    heading: "1. Our Approach",
    items: [
      "This website and related services (collectively, the "Site") are operated by Hotelier Africa, a publication and digital media platform managed by Strategic Brand Focus Africa Limited (SBF Africa). SBF Africa is a communications, media, and business events company headquartered in Africa with regional operations across the continent.",
      "This Privacy Policy explains how we collect, use, store, and protect personal information obtained through our Site. Some of this information may identify you directly and is referred to as Personal Data. We are committed to protecting your privacy and handling your Personal Data responsibly and in accordance with applicable data protection laws.",
      "The terms "you", "your", "user", or "visitor" refer to any person who accesses, browses, or uses this Site.",
      "Any Personal Data you provide to us through the Site, email, event registrations, subscriptions, or other communication channels will be processed in accordance with this Privacy Policy. If you provide personal information relating to another person, you confirm that you have their consent to share such information with us.",
      "By accessing or using this Site, you agree to our Terms & Conditions and this Privacy Policy. If you do not agree with these terms, you should not use this Site.",
      "If you have any questions regarding this Privacy Policy, you may contact us at: marcom@sbfafrica.com",
    ],
  },
  {
    heading: "2. Changes to This Privacy Policy",
    items: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or operational practices. The version published on this Site at the time of your visit will apply.",
      "Where significant changes are made, we may notify users through the website, email, or other appropriate communication channels. Continued use of the Site after changes means you accept the updated Policy.",
    ],
  },
  {
    heading: "3. What Information Do We Collect?",
    intro: "We may collect and store the following information:",
    subsections: [
      {
        label: "3.1 Information you provide to us",
        body: "You may provide personal information when you subscribe to newsletters or publications, register for events, conferences, awards, or summits, submit nominations or applications, contact us through forms or email, or participate in surveys, competitions, or promotions. This information may include: Name, Email address, Phone number, Company / organisation name, Job title / position, Country / location, Payment details (where applicable).",
      },
      {
        label: "3.2 Information collected automatically",
        body: "We may collect information about how you use our Site, including: Pages visited, Content viewed, Device type, Browser type, IP address, Date and time of visits.",
      },
      {
        label: "3.3 Information generated from usage",
        body: "We may analyse user activity to understand audience interests, improve content, and enhance our services, including: Subscription preferences, Event participation history, Content engagement, Advertising interaction.",
      },
    ],
  },
  {
    heading: "4. Purposes for Which We Use Personal Data",
    intro: "We may use your Personal Data for the following purposes:",
    list: [
      "To create and manage user accounts or subscriptions",
      "To provide access to publications, newsletters, rankings, and digital content",
      "To process event registrations, award nominations, and conference participation",
      "To respond to inquiries, requests, or applications",
      "To send updates about industry news, events, awards, and publications",
      "To process payments for services, advertising, sponsorship, or event participation",
      "To improve our website, publications, and services",
      "To ensure security and prevent fraud or misuse",
      "To send marketing or promotional communications (only where permitted)",
      "To comply with legal and regulatory requirements",
    ],
  },
  {
    heading: "5. Security",
    items: [
      "We are committed to protecting your Personal Data. We use appropriate technical, administrative, and organisational measures to safeguard information against unauthorised access, loss, misuse, or disclosure.",
      "However, because the Internet is not completely secure, we cannot guarantee absolute security of data transmitted online.",
    ],
  },
  {
    heading: "6. Disclosure of User Information",
    intro: "We may share your information only where necessary and in accordance with the law, including with:",
    list: [
      "Our parent company, affiliates, or partners",
      "Service providers (hosting, payment processing, email services, event management)",
      "Advertising and media partners (for marketing or sponsorship activities)",
      "Event partners or co-organisers where required for participation",
      "Legal authorities where required by law",
      "Third parties where you have given consent",
    ],
    footer: "We do not sell personal data to unauthorised third parties.",
  },
  {
    heading: "7. International Data Transfers",
    items: [
      "Because Hotelier Africa operates across multiple countries, your Personal Data may be stored or processed in different jurisdictions.",
      "Where data is transferred internationally, we take reasonable steps to ensure it is protected in accordance with applicable data protection laws.",
    ],
  },
  {
    heading: "8. Cookies",
    intro: "Our Site may use cookies and similar technologies to:",
    list: [
      "Improve user experience",
      "Understand website traffic",
      "Remember user preferences",
      "Deliver relevant content and advertising",
    ],
    footer: "By using this Site, you consent to the use of cookies unless you disable them in your browser settings.",
  },
  {
    heading: "9. Children",
    items: [
      "This Site is intended for professionals and industry users. We do not knowingly collect personal data from children under the age of 18.",
    ],
  },
  {
    heading: "10. Links to Other Websites",
    items: [
      "Our Site may contain links to external websites. We are not responsible for the privacy practices of those websites, and users should review their policies separately.",
    ],
  },
  {
    heading: "11. Contact",
    items: [
      "For any privacy-related inquiries, please contact: Hotelier Africa, operated by Strategic Brand Focus Africa Limited. Email: marcom@sbfafrica.com | Website: www.hotelierafricamag.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b border-border bg-background">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent w-full" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Legal</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-foreground/55">
            Hotelier Africa — operated by Strategic Brand Focus Africa Limited (SBF Africa)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {sections.map((section) => (
          <div key={section.heading} className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              {section.heading}
            </h2>

            {section.intro && (
              <p className="text-sm text-foreground/70 leading-relaxed">{section.intro}</p>
            )}

            {"items" in section && section.items?.map((item, i) => (
              <p key={i} className="text-sm text-foreground/70 leading-relaxed">{item}</p>
            ))}

            {"subsections" in section && section.subsections?.map((sub) => (
              <div key={sub.label} className="pl-4 border-l border-border space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">{sub.label}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{sub.body}</p>
              </div>
            ))}

            {"list" in section && section.list && (
              <ul className="space-y-2 pl-4">
                {section.list.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent/70" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {"footer" in section && section.footer && (
              <p className="text-sm text-foreground/70 leading-relaxed">{section.footer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
