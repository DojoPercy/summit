"use client";

import React from "react";
import { motion as _motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

// Cast motion to any to avoid intrinsic element typing mismatches with React 19
const motion: any = _motion as any;

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <HeroCarousel />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      <div className="absolute z-10 flex flex-col items-center justify-center space-y-8 px-6 mb-8">
        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hotel-tag"
        >
          <span className="opacity-60">&#9670;</span>
          <span>2nd Edition · 2026 · Accra, Ghana</span>
          <span className="opacity-60">&#9670;</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
        >
          Shaping the Future of <br className="hidden md:block" />
          <em className="text-accent not-italic">Hospitality Leadership</em>
          <br className="hidden md:block" />
          in Africa
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          className="flex items-center gap-4 w-full max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-accent/40" />
          <span className="text-accent text-xs">&#9670;</span>
          <div className="flex-1 h-px bg-accent/40" />
        </motion.div>

        <motion.p
          className="text-white/75 max-w-xl text-base md:text-lg font-serif leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Africa&apos;s premier continental platform for hospitality leaders,
          investors, and innovators — celebrating excellence, driving dialogue,
          and shaping the next era of African hospitality.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="/contact" className="btn-gold text-sm">
            Register Now
          </a>
          <a
            href="/projects"
            className="btn-luxury text-sm"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}
          >
            View Programme
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center space-y-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        onClick={() => {
          const manifesto = document.getElementById("manifesto");
          manifesto?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em]">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-accent/80 to-transparent"
          animate={{
            scaleY: [0, 1, 0.5],
            opacity: [0, 1, 0],
            translateY: [0, 16, 32],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
