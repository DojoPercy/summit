import { Mail, Users, Phone, MapPin, Building } from "lucide-react";

export const contactMethods = [
  {
    type: "General Enquiries",
    icon: <Mail className="w-5 h-5 text-accent" />,
    details: ["info@thetechnologyboardroom.com", "Response within 48 hours"],
  },
  {
    type: "Partnerships & Collaboration",
    icon: <Users className="w-5 h-5 text-accent" />,
    details: ["info@radcommgroup.com", "Strategic partnership inquiries"],
  },
  {
    type: "Media & Publishing",
    icon: <Mail className="w-5 h-5 text-accent" />,
    details: [
      "publishing@radcommgroup.com",
      "Editorial & thought leadership submissions",
    ],
  },
  {
    type: "Phone",
    icon: <Phone className="w-5 h-5 text-accent" />,
    details: ["+971 55 790 9643", "+233 24 741 5140"],
  },
];

export const offices = [
  {
    region: "United Arab Emirates",
    description:
      "RADCOMM Media Group, Masdar City, Abu Dhabi, United Arab Emirates",
    icon: <MapPin className="w-6 h-6 text-accent" />,
  },
  {
    region: "Ghana",
    description:
      "RADCOMM Group, 58 Mansour Street, Parakuo Estates, Christian Village Achimota, Accra",
    icon: <Building className="w-6 h-6 text-accent" />,
  },
];
