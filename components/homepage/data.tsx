import images from "@/lib/images";
import { Globe, Users, TrendingUp, ShieldCheck } from "lucide-react";

export const pillars = [
  {
    title: "Board-Level Technology Leadership",
    description:
      "Elevating technology conversations from IT execution to boardroom strategy, governance, and enterprise-wide impact.",
    imagePath: images.pillarBoardroom,
  },
  {
    title: "Digital Transformation & AI",
    description:
      "Exploring practical applications of AI, data, cloud, cybersecurity, and emerging technologies across sectors.",
    imagePath: images.pillarAI,
  },
  {
    title: "Technology Policy & Digital Governance",
    description:
      "Bridging the gap between innovation and regulation to support secure, inclusive, and sustainable digital ecosystems.",
    imagePath: images.pillarGovernance,
  },
  {
    title: "Innovation, Sustainability & Impact",
    description:
      "Leveraging technology to advance energy transition, climate action, financial inclusion, smart infrastructure, and social impact.",
    imagePath: images.pillarSustainability,
  },
  {
    title: "Cross-Regional Collaboration",
    description:
      "Connecting leaders across Africa, the Middle East, Europe, and North America to share insight, experience, and solutions.",
    imagePath: images.pillarCollaboration,
  },
];

export const cities = [
  {
    name: "Dubai & Abu Dhabi",
    focus: "Innovation, energy, and digital economy leadership",
    description:
      "Leading the global narrative on energy transition and digital governance through high-level summits and executive dialogues.",
    imagePath: images.cityDubai,
  },
  {
    name: "Accra & Nairobi",
    focus: "Digital transformation, fintech, and public sector innovation",
    description:
      "Hubs of rapid digital evolution, where fintech and public sector innovation converge to redefine African technology leadership.",
    imagePath: images.cityAccra,
  },
  {
    name: "Riyadh",
    focus: "Technology governance and smart nation initiatives",
    description:
      "At the heart of Vision 2030, Riyadh represents the pinnacle of smart nation initiatives and technology-led societal transformation.",
    imagePath: images.cityRiyadh,
  },
  {
    name: "New York & Global Cities",
    focus: "Global perspectives and best practices",
    description:
      "Bridging East and West through strategic dialogues in the world's most influential financial and technology capitals.",
    imagePath: images.cityNyc,
  },
];

export const stats = [
  {
    label: "Global Hubs",
    value: "25+",
    icon: <Globe className="w-5 h-5 text-accent" />,
  },
  {
    label: "Executive Members",
    value: "500+",
    icon: <Users className="w-5 h-5 text-accent" />,
  },
  {
    label: "Policy Impact",
    value: "High",
    icon: <TrendingUp className="w-5 h-5 text-accent" />,
  },
  {
    label: "Trust Level",
    value: "Board",
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
  },
];
