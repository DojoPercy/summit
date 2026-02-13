"use client";

import PageHero from "@/components/page-hero";
import images from "@/lib/images";
import {
  Mail,
  Users,
  Phone,
  MapPin,
  Building,
  ShieldCheck,
} from "lucide-react";
import SectionContainer from "@/components/section-container";
import ContactForm from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";
import Reveal from "@/components/animation/reveal";
import { motion as _motion } from "framer-motion";
import GoldWave from "@/components/ui/GoldWave";

const motion: any = _motion as any;

const contactMethods = [
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

const offices = [
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

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        headline="Contact Us"
        subtext="Participation in The Technology Boardroom is by invitation or nomination only. For membership, partnership, media, and programme enquiries, please reach out to our executive team."
        backgroundImage={images.contactHero}
      />

      {/* Intro - Strategic Presence */}
      <SectionContainer className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                Global Executive Engagement
              </h2>
              <div className="h-1 w-24 bg-accent mb-12" />
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-serif">
                The Technology Boardroom maintains a global footprint to serve
                as the bridge between technology leadership, boardrooms, and
                public sector policy across regions.
              </p>
            </Reveal>
          </div>
        </div>
        <div className=" -mb-24">
          <GoldWave className="h-24 opacity-30" count={8} />
        </div>
        {/* Contact Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, idx) => (
            <Reveal key={method.type} delay={idx * 0.05}>
              <div className="group h-full p-8 border border-border bg-card rounded-sm hover:border-accent/40 transition-all duration-500">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                  {method.icon}
                </div>
                <h3 className="text-foreground font-bold mb-4 tracking-tight uppercase text-xs tracking-[0.2em]">
                  {method.type}
                </h3>
                <div className="space-y-2">
                  {method.details.map((detail, dIdx) => (
                    <p
                      key={dIdx}
                      className="text-foreground/70 text-sm font-medium"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* Visual Break Section - Atmospheric */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden border-y border-border group">
        
        <img
          src={images.contactVisual}
          alt="Contact Visual"
          className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-2xl px-6">
            <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold">
              RADCOMM Media HQ
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white italic">
              Conveying the narrative of <br />
              <span className="not-italic font-bold">Digital Future</span>.
            </h3>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <SectionContainer className="py-24">
        
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global Offices
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed">
            Strategic locations allowing for deep regional expertise and direct
            executive reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {offices.map((office, idx) => (
            <Reveal key={office.region} delay={idx * 0.1}>
              <div className="flex flex-col md:flex-row gap-8 p-10 border border-border bg-card rounded-sm group hover:border-accent/30 transition-all duration-500">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-secondary/30 rounded-xs group-hover:bg-accent/10 transition-colors duration-500">
                    {office.icon}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {office.region}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed font-serif italic text-lg line-clamp-3 group-hover:text-foreground transition-colors">
                    {office.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
         <div className=" -mb-24">
            <GoldWave className="h-24 opacity-30" count={8} />
          </div>
      </SectionContainer>

      {/* Expression of Interest - The Signature Form */}
      <section className="bg-secondary/10 py-24 border-t border-border overflow-hidden">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold">
                  Participation
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Join the <br />
                  Conversation.
                </h2>
                <div className="h-1 w-20 bg-accent" />
                <p className="text-xl text-foreground/70 leading-relaxed font-serif">
                  If you are a CIO, CTO, CDO, or an executive shaping the
                  digital economy, submit an expression of interest to join our
                  exclusive dialogues.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <div className="space-y-2">
                    <p className="font-bold text-foreground uppercase tracking-widest text-[10px]">
                      Confidentiality First
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      All communications are treated with discretion and
                      strictly managed within our high-trust leadership
                      environment.
                    </p>
                  </div>
                </div>

                <div className="p-8 border border-accent/20 bg-accent/5 rounded-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <ShieldCheck className="text-accent w-6 h-6" />
                    <span className="text-foreground font-bold text-sm tracking-tight">
                      Executive Trust Guard
                    </span>
                  </div>
                  <p className="text-xs text-foreground/60 italic leading-relaxed">
                    The Technology Boardroom is a curated ecosystem. Your data
                    is never shared with third parties and is only used to
                    facilitate executive introductions.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-card p-12 lg:p-16 border border-border rounded-sm shadow-2xl relative">
              <div className="absolute -top-6 -left-6 px-6 py-2 bg-accent text-white font-bold text-xs uppercase tracking-widest">
                Official Submission
              </div>
              <ContactForm />
            </div>
          </div>
          
        </SectionContainer>
      </section>

      {/* Signature Final Note */}
      <SectionContainer className="py-24 text-center">
         <div className=" -mb-24">
            <GoldWave className="h-24 opacity-30" count={8} />
          </div>
        <Reveal>
          <p className="text-sm text-foreground/40 italic font-serif max-w-2xl mx-auto leading-relaxed">
            The Technology Boardroom is a RADCOMM Media initiative designed to
            foster high-level technology governance and sustainable digital
            transformation across emerging economies.
          </p>
        </Reveal>
      </SectionContainer>
    </>
  );
}
