import images from "@/lib/images";
import {
  Target,
  MessageCircle,
  Zap,
  Truck,
  CreditCard,
  Handshake,
} from "lucide-react";

export const platforms = [
  {
    icon: <Target className="w-6 h-6 text-accent" />,
    title: "Executive Roundtables & Boardroom Dialogues",
    description:
      "Intimate discussions on strategic priorities, emerging technologies, and organizational challenges.",
    imagePath: images.projectRoundtables,
    details: [
      "Quarterly in-person roundtables in key executive hubs",
      "Panel discussions with board-level executives",
      "Confidential peer-to-peer conversations",
      "Focused agendas on strategic priorities",
    ],
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-accent" />,
    title: "Virtual Leadership Dialogues",
    description:
      "Regular virtual forums on topics critical to technology leadership and digital strategy.",
    imagePath: images.projectVirtual,
    details: [
      "Monthly executive webinars and discussions",
      "Deep dives into AI, Cybersecurity, and Data",
      "Digital transformation strategy sessions",
      "Policy and regulation impact briefings",
      "Innovation and disruption workshops",
    ],
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: "AI for Energy & Green Transition",
    description:
      "Strategic initiatives at the intersection of AI and sustainable technology leadership.",
    imagePath: images.projectAI,
    details: [
      "Executive forums on AI applications in energy",
      "Green technology innovation networks",
      "Sustainability strategy guidance",
      "Partnership facilitation across sectors",
    ],
  },
  {
    icon: <Truck className="w-6 h-6 text-accent" />,
    title: "Green Mobility & Sustainable Transport",
    description:
      "Leadership conversations on the future of transportation and environmental responsibility.",
    imagePath: images.projectMobility,
    details: [
      "Connected vehicle and smart transportation forums",
      "EV ecosystem development discussions",
      "Sustainable logistics and supply chain strategies",
      "Urban mobility innovation networks",
    ],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-accent" />,
    title: "The Future of Money & Digital Assets",
    description:
      "Exploring the transformation of finance, cryptocurrency, and digital economies.",
    imagePath: images.projectFintech,
    details: [
      "Fintech and digital currency strategy sessions",
      "Blockchain and Web3 executive forums",
      "Central bank digital currency (CBDC) discussions",
      "Payment systems and financial innovation",
    ],
  },
  {
    icon: <Handshake className="w-6 h-6 text-accent" />,
    title: "Private Networking & Strategic Forums",
    description:
      "Exclusive opportunities for executive relationship building and strategic partnerships.",
    imagePath: images.projectNetworking,
    details: [
      "Invitation-only networking events",
      "Strategic partnership workshops",
      "Industry-specific executive circles",
      "Board member networking opportunities",
    ],
  },
];
