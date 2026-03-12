"use client";

import React from "react";
import { motion as _motion } from "framer-motion";
import SectionContainer from "./section-container";

const motion: any = _motion as any;

export default function ExecutiveManifesto() {
  return (
    <SectionContainer id="manifesto" className="py-24 md:py-32">
      {/* Ornamental top divider */}
      <div className="flex items-center gap-4 mb-20">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/40" />
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-sm">&#9670;</span>
          <div className="h-px w-8 bg-accent/60" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/40" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column: The Hook */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="hotel-tag mb-6 inline-flex">
              <span className="opacity-60">&#9670;</span>
              About the Summit
              <span className="opacity-60">&#9670;</span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold leading-tight text-foreground mt-6">
              A Premier <br />
              <em className="text-accent not-italic">Continental Hospitality</em>{" "}
              <br />
              Platform.
            </h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-foreground font-medium leading-relaxed font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Hotelier Africa Leadership Summit & Awards is where Africa&apos;s
            most influential hospitality leaders gather to shape the future of
            the continent&apos;s hospitality industry.
          </motion.p>
        </div>

        {/* Right Column: The Details */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                Building on the success of its inaugural edition, the summit
                continues to serve as a high-level leadership gathering dedicated
                to fostering strategic dialogue, knowledge exchange, partnerships,
                and recognition of excellence within Africa&apos;s rapidly evolving
                hospitality industry.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The event brings together leaders from global hotel brands,
                independent hotel groups, hospitality investors, tourism boards,
                asset managers, consultants, and technology providers to explore
                emerging opportunities and shape the next phase of Africa&apos;s
                hospitality growth.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                Through thought-leadership sessions, executive panel discussions,
                strategic networking, and the prestigious Hotelier Africa
                Leadership Awards, the summit celebrates the individuals and
                organisations driving operational excellence, innovation,
                sustainability, and transformative guest experiences.
              </p>
              <div className="pt-4">
                <p className="text-accent font-semibold text-lg border-l-2 border-accent pl-4">
                  The 2nd edition — 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </SectionContainer>
  );
}
