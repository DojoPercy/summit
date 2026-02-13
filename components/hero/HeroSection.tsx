"use client";

import React from "react";
import { motion as _motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

// Cast motion to any to avoid intrinsic element typing mismatches with React 19
const motion: any = _motion as any;

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center font-poppins overflow-hidden">
      <HeroCarousel />

      <div className="absolute z-10 flex flex-col items-center justify-center space-y-6 px-6 mb-12">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white drop-shadow-2xl mb-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Shaping the Future of <br className="hidden md:block" />
          <span className="text-accent underline decoration-accent/30 underline-offset-8">
            Technology Leadership
          </span>
        </motion.h1>

        <motion.p
          className="text-white/80 max-w-2xl text-lg md:text-xl font-medium tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          An exclusive global executive platform and high-level leadership
          council curated by RADCOMM Group.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 z-10 flex flex-col items-center space-y-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => {
          const manifesto = document.getElementById("manifesto");
          manifesto?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">
          Scroll to Explore
        </span>
        <motion.div
          className="w-[2px] h-12 bg-gradient-to-b from-accent to-transparent"
          animate={{
            scaleY: [0, 1, 0.5],
            opacity: [0, 1, 0],
            translateY: [0, 20, 40],
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
