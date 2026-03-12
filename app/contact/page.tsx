import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import images from "@/lib/images";
import ContactIntro from "./components/ContactIntro";
import ContactVisualBreak from "./components/ContactVisualBreak";
import GlobalOffices from "./components/GlobalOffices";
import ContactFormSection from "./components/ContactFormSection";
import ContactFootnote from "./components/ContactFootnote";

export const metadata: Metadata = {
  title: "Contact & Register",
  description:
    "Contact the Hotelier Africa team for delegate registration, sponsorship packages, award nominations, media enquiries, and partnership opportunities. Reach us at marcom@sbfafrica.com.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Register | Hotelier Africa Leadership Summit 2026",
    description:
      "Register as a delegate, enquire about sponsorship, submit award nominations, or get in touch with the Hotelier Africa Summit team. Email: marcom@sbfafrica.com.",
    url: "https://summit.hotelierafricamag.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <PageHero
        headline="Contact & Register"
        subtext="For delegate registration, sponsorship, award nominations, partnerships, and media enquiries, please contact our team. We look forward to hearing from you."
        backgroundImage={images.contactHero}
      />
      <ContactIntro />
      <ContactVisualBreak />
      <GlobalOffices />
      <ContactFormSection />
      <ContactFootnote />
    </>
  );
}
