"use client";

import React from "react";
import { motion as _motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const motion: any = _motion as any;

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about/_RAD4598.jpg"
          alt="Ghana Green Mining Awards"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/75 to-accent/40" />
      </div>

      {/* Accent top bar */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Edition badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 border border-accent/50 bg-accent/10 px-5 py-2 mb-10"
          >
            <div className="h-1.5 w-1.5 bg-accent rotate-45" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">
              Inaugural Edition · Accra, Ghana · 2026
            </span>
            <div className="h-1.5 w-1.5 bg-accent rotate-45" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease: "easeOut" }}
          >
            Ghana Green Mining &<br />
            <span className="text-accent">Critical Minerals</span><br />
            Awards 2026
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-white/60 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Responsible Mining · Critical Minerals · Sustainable Industry · Green Economy
          </motion.p>

          {/* Event detail pills */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { icon: <Calendar size={14} className="text-accent" />, label: "Friday, 24th April 2026" },
              { icon: <MapPin size={14} className="text-accent" />, label: "Accra Marriott Hotel, Airport" },
              { icon: <Clock size={14} className="text-accent" />, label: "7:00 PM" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2"
              >
                {item.icon}
                <span className="text-white/80 text-xs font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            <a href="#sponsorship" className="btn-gold text-sm">
              Reserve a Table
            </a>
            <a
              href="#about"
              className="btn-luxury text-sm"
              style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.3)" }}
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] cursor-pointer">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-accent/70 to-transparent"
          animate={{ scaleY: [0, 1, 0.5], opacity: [0, 1, 0], translateY: [0, 16, 32] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
