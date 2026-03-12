import { Mail, Users, Phone, MapPin } from "lucide-react";

export const contactMethods = [
  {
    type: "General Enquiries",
    icon: <Mail className="w-5 h-5 text-accent" />,
    details: ["marcom@sbfafrica.com", "Response within 48 hours"],
  },
  {
    type: "Award Nominations",
    icon: <Users className="w-5 h-5 text-accent" />,
    details: ["marcom@sbfafrica.com", "Nominations for all 40 award categories"],
  },
  {
    type: "Sponsorship & Partnerships",
    icon: <Mail className="w-5 h-5 text-accent" />,
    details: [
      "marcom@sbfafrica.com",
      "Sponsorship packages and strategic partnerships",
    ],
  },
  {
    type: "Phone",
    icon: <Phone className="w-5 h-5 text-accent" />,
    details: ["+233 20 238 4549", "Secretariat — Mon to Fri"],
  },
];

export const offices = [
  {
    region: "Ghana — West Africa",
    description:
      "Hotelier Africa, 58 Mansour Street, Parakuo Estates, Christian Village, Accra, Greater Accra Region, Ghana",
    icon: <MapPin className="w-6 h-6 text-accent" />,
  },
];
