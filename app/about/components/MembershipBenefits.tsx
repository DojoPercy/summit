"use client";

import SectionContainer from "@/components/section-container";
import GoldWaveDivider from "@/components/reusable_components/GoldWaveDivider";
import Reveal from "@/components/animation/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import images from "@/lib/images";
import { whyJoin } from "./data";

export default function MembershipBenefits() {
  return (
    <SectionContainer className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Sticky sidebar */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-8">
            <GoldWaveDivider />
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Membership Benefits
              </h2>
              <div className="h-1 w-20 bg-accent mb-8" />
              <p className="text-xl text-foreground/60 leading-relaxed font-serif">
                A comprehensive ecosystem designed to amplify executive
                influence, visibility, and strategic insight.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border shadow-2xl">
              <img
                src={images.aboutMembership}
                alt="Membership Benefits"
                className="w-full h-full object-cover brightness-75 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background to-transparent">
                <p className="text-white text-sm font-medium italic">
                  &ldquo;Visibility is earned through insight, experience, and
                  contribution.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="space-y-4">
            {whyJoin.map((item, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border px-8 py-4 bg-card rounded-sm transition-all hover:bg-secondary/5 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-start gap-6 text-left">
                      <div className="mt-1 transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground/50 font-normal mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pt-8 pl-14 text-lg leading-relaxed border-t border-border/50 mt-4 font-serif italic">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionContainer>
  );
}
