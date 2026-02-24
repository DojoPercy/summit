"use client";

import SectionContainer from "@/components/section-container";
import ContactForm from "@/components/contact-form";
import { ShieldCheck } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="bg-secondary/10 py-24 border-t border-border overflow-hidden">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left copy */}
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
                If you are a CIO, CTO, CDO, or an executive shaping the digital
                economy, submit an expression of interest to join our exclusive
                dialogues.
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
                    All communications are treated with discretion and strictly
                    managed within our high-trust leadership environment.
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
                  The Technology Boardroom is a curated ecosystem. Your data is
                  never shared with third parties and is only used to facilitate
                  executive introductions.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-card p-12 lg:p-16 border border-border rounded-sm shadow-2xl relative">
            <div className="absolute -top-6 -left-6 px-6 py-2 bg-accent text-white font-bold text-xs uppercase tracking-widest">
              Official Submission
            </div>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
