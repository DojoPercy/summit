import {
  CheckCircle2,
  UserCircle,
  Share2,
  Eye,
  LineChart,
  Network,
  Calendar,
} from "lucide-react";

export const attendeeCategories = [
  {
    category: "Hospitality Leaders",
    roles: [
      "Hotel General Managers",
      "Regional Directors of Operations",
      "Chief Executive Officers",
      "Hotel Owners and Asset Managers",
    ],
  },
  {
    category: "Hospitality Investors & Developers",
    roles: [
      "Hotel Developers",
      "Real Estate Investors",
      "Hospitality Investment Firms",
      "Tourism Development Authorities",
    ],
  },
  {
    category: "Global Hospitality Brands",
    roles: [
      "International Hotel Chains",
      "Luxury Hospitality Groups",
      "Boutique Hotel Brands",
    ],
  },
  {
    category: "Industry Stakeholders",
    roles: [
      "Tourism Ministries",
      "Tourism Boards",
      "Travel and Tourism Organisations",
      "Hospitality Consultants",
    ],
  },
  {
    category: "Technology & Service Providers",
    roles: [
      "Hospitality Technology Companies",
      "Booking & Distribution Platforms",
      "Guest Experience Technology Providers",
      "Hospitality Procurement & Supply Firms",
    ],
  },
];

// kept for backwards compatibility (not used in WhoWeConvene)
export const roles = attendeeCategories.flatMap((c) => c.roles);

export const whyJoin = [
  {
    icon: <LineChart className="w-5 h-5 text-accent" />,
    title: "Strategic Insights into Industry Trends",
    description:
      "Access strategic insights into Africa's hospitality industry trends and emerging opportunities.",
    content:
      "Gain deep knowledge of the forces shaping Africa's hospitality sector — from investment flows and hotel development pipelines to consumer trends, revenue optimisation strategies, and operational innovations transforming hotels across the continent.",
  },
  {
    icon: <Network className="w-5 h-5 text-accent" />,
    title: "Networking with Senior Hospitality Executives",
    description:
      "Connect with senior hospitality executives, investors, and industry leaders from across Africa.",
    content:
      "Build meaningful relationships with hotel general managers, regional directors, CEOs, investors, and tourism authorities. The Executive Networking Reception and curated event format ensure you connect with the right people across Africa's hospitality ecosystem.",
  },
  {
    icon: <UserCircle className="w-5 h-5 text-accent" />,
    title: "Access to Hotel Investors & Development Partners",
    description:
      "Connect directly with hotel developers, investors, and hospitality brands seeking new partnerships.",
    content:
      "The Hospitality Investment Dialogue creates a direct bridge between hotel owners, developers, asset managers, and investment firms exploring new development opportunities across Africa's emerging tourism markets.",
  },
  {
    icon: <Share2 className="w-5 h-5 text-accent" />,
    title: "Leadership Knowledge from Global Experts",
    description:
      "Learn from global hospitality experts and industry innovators sharing best practices.",
    content:
      "Gain access to thought leadership sessions and executive panel discussions led by Africa's most influential hospitality leaders — covering hotel management, revenue optimisation, technology innovation, talent development, and sustainable tourism.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-accent" />,
    title: "Industry Recognition Through the Awards",
    description:
      "Celebrate and be recognised through the prestigious Hotelier Africa Leadership Awards.",
    content:
      "The Hotelier Africa Leadership Awards honour outstanding leadership, innovation, and excellence across 40 award categories — from Hotelier of the Year to Best Eco-Resort — celebrating the individuals and organisations driving Africa's hospitality forward.",
  },
  {
    icon: <Eye className="w-5 h-5 text-accent" />,
    title: "Sponsorship & Partnership Opportunities",
    description:
      "Engage directly with Africa's hospitality leadership community as a strategic partner.",
    content:
      "The summit offers a powerful platform for organisations to engage with Africa's hospitality leadership community. Sponsorship packages include: Title Sponsorship, Platinum Sponsorship, Gold Sponsorship, Session Sponsorship, and Awards Sponsorship. Sponsors benefit from brand visibility, direct access to hotel decision-makers, speaking opportunities, and media exposure across hospitality platforms.",
  },
  {
    icon: <Calendar className="w-5 h-5 text-accent" />,
    title: "Nominate for Africa's Top 50 Hotel GMs",
    description:
      "Put forward outstanding hotel general managers for continental recognition.",
    content:
      "A highlight of the summit is the unveiling of Africa's Top 50 Hotel General Managers 2026 — recognising the continent's most exceptional hospitality leaders setting new benchmarks in hotel management and service excellence. To nominate, send your nomination to marcom@sbfafrica.com or contact the Secretariat on +233 20 238 4549.",
  },
];

export const profileFeatures = [
  "40 Prestigious Award Categories",
  "Africa's Top 50 Hotel General Managers",
  "Continental Industry Recognition",
  "Nomination via marcom@sbfafrica.com",
];
