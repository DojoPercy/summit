"use client";

import PageHero from "@/components/page-hero";
import images from "@/lib/images";
import ContactIntro from "./components/ContactIntro";
import ContactVisualBreak from "./components/ContactVisualBreak";
import GlobalOffices from "./components/GlobalOffices";
import ContactFormSection from "./components/ContactFormSection";
import ContactFootnote from "./components/ContactFootnote";

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
