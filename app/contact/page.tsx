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
        headline="Contact Us"
        subtext="Participation in The Technology Boardroom is by invitation or nomination only. For membership, partnership, media, and programme enquiries, please reach out to our executive team."
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
