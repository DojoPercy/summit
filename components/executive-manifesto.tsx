"use client";

import React from "react";
import { motion as _motion } from "framer-motion";
import SectionContainer from "./section-container";

const motion: any = _motion as any;

export default function ExecutiveManifesto() {
  return (
    <SectionContainer id="about" className="py-24 md:py-32">
      {/* Ornamental divider */}
      <div className="flex items-center gap-4 mb-20">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/30" />
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-accent/50" />
          <div className="h-2 w-2 bg-accent rotate-45" />
          <div className="h-px w-8 bg-accent/50" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="hotel-tag mb-6 inline-flex">
              <span className="opacity-60">&#9670;</span>
              About the Awards
              <span className="opacity-60">&#9670;</span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold leading-tight text-foreground mt-6">
              Ghana&apos;s Natural Resource<br />
              <em className="text-accent not-italic">Sector at a Defining</em>{" "}
              <br />Moment.
            </h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-foreground font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            As the world shifts toward sustainable energy, responsible extraction, and environmentally conscious industrialization, Ghana is emerging as one of Africa&apos;s most important resource economies.
          </motion.p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="space-y-6">
              <p className="text-foreground/75 leading-relaxed">
                Driven by gold, lithium, bauxite, manganese, timber, and other critical minerals essential to the global future, Ghana&apos;s leadership in responsible resource development plays a vital role in building a modern, globally competitive, and environmentally responsible economy.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                The Ghana Green Mining & Critical Minerals Awards 2026 is a prestigious national recognition platform created to celebrate excellence, sustainability, innovation, and leadership across Ghana&apos;s mining, minerals, timber, and natural resource industries.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-foreground/75 leading-relaxed">
                The Awards forms part of the Ghana Green Mining, Timber & Sustainable Industry Leadership Platform 2026 — a high-level industry gathering bringing together mining companies, government institutions, regulators, policymakers, investors, development partners, exporters, and sustainability experts.
              </p>
              <div className="pt-4">
                <p className="text-accent font-semibold text-lg border-l-4 border-accent pl-4">
                  Friday, 24th April 2026<br />
                  <span className="text-base font-normal text-foreground/60">Accra Marriott Hotel, Airport · 7:00 PM</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
