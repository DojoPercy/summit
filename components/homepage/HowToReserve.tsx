"use client";

import SectionContainer from "@/components/section-container";
import Reveal from "@/components/animation/reveal";

const steps = [
  "Company name",
  "Contact person",
  "Package selected",
  "Number of guests",
];

export default function HowToReserve() {
  return (
    <section className="py-20 border-b border-border bg-accent/5">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — instructions */}
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Table Reservation</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              How to Reserve Your Table
            </h2>
            <p className="text-foreground/65 mb-8 leading-relaxed">
              To reserve a table, send an email with the following details to our event secretariat. Payments must be completed before the event to confirm participation.
            </p>

            <div className="space-y-3 mb-10">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-foreground/40 mb-4">Include in your email:</p>
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 border border-border bg-card px-5 py-4">
                  <span className="text-accent font-headline font-bold text-xl leading-none">{idx + 1}</span>
                  <span className="text-sm text-foreground/70 font-medium">{step}</span>
                </div>
              ))}
            </div>

            {/* Deadline */}
            <div className="border-l-4 border-accent pl-5 py-2 bg-accent/5">
              <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">Reservation Deadline</p>
              <p className="text-2xl font-headline font-bold text-foreground">10th April 2026</p>
            </div>
          </Reveal>

          {/* Right — contact details */}
          <Reveal delay={0.2}>
            <div className="border border-border bg-card p-8 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-foreground/40 mb-5">Submit Your Reservation To:</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Email</p>
                    <a
                      href="mailto:marcom@sbfafrica.com"
                      className="text-xl font-semibold text-accent hover:underline"
                    >
                      marcom@sbfafrica.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Phone</p>
                    <p className="text-xl font-semibold text-foreground">+233 50 589 3884</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Cheque Payable To</p>
                    <p className="text-sm text-foreground/70">Strategic Brand Focus Africa Ltd</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-foreground/50 leading-relaxed">
                  Payment must be received before the event date. Upon receipt of your reservation email and confirmed payment, a formal confirmation and seating details will be sent to you.
                </p>
              </div>

              <a
                href="mailto:marcom@sbfafrica.com?subject=Table Reservation — Ghana Green Mining Awards 2026"
                className="btn-gold block text-center text-xs"
              >
                Send Reservation Email
              </a>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
