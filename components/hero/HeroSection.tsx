"use client"

import React from 'react'
import { motion as _motion } from 'framer-motion'
import HeroCarousel from './HeroCarousel'

// Cast motion to any to avoid intrinsic element typing mismatches with React 19
const motion: any = _motion as any

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center font-poppins overflow-hidden">
      <HeroCarousel />

      <div className="absolute z-10 flex flex-col items-center justify-center space-y-6 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Strategic Leadership for the Technology Age
        </motion.h1>
        <motion.p
          className="text-white/90 max-w-xl text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          An invitation-only council of executives, innovators, and thought leaders shaping the future of technology, policy, and business strategy.
        </motion.p>
        {/* No CTA button per request; hero is informational */}
      </div>
    </section>
  )
}
