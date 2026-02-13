"use client";

import React from "react";
import { motion as _motion } from "framer-motion";
import SectionContainer from "./section-container";

const motion: any = _motion as any;

export default function ExecutiveManifesto() {
  return (
    <SectionContainer id="manifesto" className="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column: The Hook */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-1 w-12 bg-accent mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display leading-tight text-foreground">
              An Exclusive <br />
              <span className="text-accent italic">Global Executive</span>{" "}
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
            The Technology Boardroom is where the world’s most influential
            technology leaders shape the future of governance and digital
            economies.
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
                Designed as a high-level leadership council, the platform
                provides an invitation-only environment where senior
                decision-makers engage in strategic dialogue.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                From board-level strategy to enterprise-wide impact, we
                facilitate trusted peer exchange and collaborative
                problem-solving on the most critical technology issues.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                Curated by RADCOMM Group, our mission is to bridge the gap
                between innovation and regulation to support secure, inclusive,
                and sustainable digital ecosystems.
              </p>
              <div className="pt-4">
                <p className="text-accent font-semibold text-lg border-l-2 border-accent pl-4">
                  Participation is by invitation or nomination only.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
