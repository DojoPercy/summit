import images from "@/lib/images";
import { Globe, Users, TrendingUp, Award } from "lucide-react";

export const pillars = [
  {
    title: "Leadership Excellence in Hospitality",
    description:
      "Elevating hotel management conversations to strategic boardroom level, celebrating and strengthening leadership excellence across Africa's hospitality sector.",
    imagePath: images.pillarBoardroom,
  },
  {
    title: "Hospitality Investment & Development",
    description:
      "Exploring emerging investment opportunities, hotel development trends, and infrastructure growth strategies across Africa's rapidly expanding hospitality markets.",
    imagePath: images.pillarAI,
  },
  {
    title: "Technology & Digital Innovation",
    description:
      "Leveraging digital transformation, AI, and technology to enhance guest experiences, optimise hotel operations, and drive competitive advantage.",
    imagePath: images.pillarGovernance,
  },
  {
    title: "Sustainability & Responsible Tourism",
    description:
      "Advancing eco-conscious hospitality practices, responsible tourism development, and sustainable operations across Africa's hotel and resort landscape.",
    imagePath: images.pillarSustainability,
  },
  {
    title: "Talent Development & Workforce",
    description:
      "Building the next generation of hospitality professionals, strengthening workforce capabilities, and inspiring leadership across the continent.",
    imagePath: images.pillarCollaboration,
  },
];

export const cities = [
  {
    name: "A Continental Platform",
    focus: "Providing a high-level platform for hospitality leadership dialogue",
    description:
      "Africa's hospitality industry is experiencing a new era of growth. The summit creates the definitive continental platform where the continent's most influential hotel leaders, investors, and innovators meet to drive the sector forward.",
    imagePath: images.cityAccra,
  },
  {
    name: "Best Practices & Innovation",
    focus: "Promoting best practices and innovation in hotel management",
    description:
      "Through thought-leadership sessions and executive panel discussions, the summit surfaces the strategies, technologies, and management approaches that are setting new standards across Africa's hotels and resorts.",
    imagePath: images.cityDubai,
  },
  {
    name: "Strategic Collaboration",
    focus: "Strengthening collaboration among hospitality stakeholders",
    description:
      "From hotel developers and investors to tourism boards and technology providers, the summit builds bridges across the full hospitality ecosystem — creating partnerships that advance Africa's global competitiveness.",
    imagePath: images.cityRiyadh,
  },
  {
    name: "Recognising Excellence",
    focus: "Recognising outstanding leaders shaping the industry",
    description:
      "Through the prestigious Hotelier Africa Leadership Awards and the Africa's Top 50 Hotel General Managers, the summit celebrates the individuals and organisations driving operational excellence and transformative guest experiences.",
    imagePath: images.cityNyc,
  },
];

export const stats = [
  {
    label: "Award Categories",
    value: "40",
    icon: <Award className="w-5 h-5 text-accent" />,
  },
  {
    label: "Delegates",
    value: "500+",
    icon: <Users className="w-5 h-5 text-accent" />,
  },
  {
    label: "Summit Edition",
    value: "2nd",
    icon: <TrendingUp className="w-5 h-5 text-accent" />,
  },
  {
    label: "Continental Reach",
    value: "Pan-Africa",
    icon: <Globe className="w-5 h-5 text-accent" />,
  },
];
