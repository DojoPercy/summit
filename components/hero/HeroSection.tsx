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
          Shaping the Future of Technology Leadership
        </motion.h1>
        <motion.p
          className="text-white/90 max-w-2xl text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          The Technology Boardroom is an exclusive global executive platform curated by RADCOMM Group, bringing together the world’s most influential technology leaders, digital transformation executives, and innovation policymakers to shape the future of technology, governance, and digital economies.
        </motion.p>
        <motion.p
          className="text-white/90 max-w-2xl text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Designed as a high-level leadership council, the platform provides an invitation-only environment where senior decision-makers engage in strategic dialogue, trusted peer exchange, and collaborative problem-solving on the most critical technology issues facing organisations, governments, and societies.
        </motion.p>
        <motion.p
          className="text-white/90 max-w-2xl text-sm md:text-base font-semibold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Participation is by invitation or nomination only. Apply Now!
        </motion.p>
        {/* No CTA button per request; hero is informational */}
      </div>
    </section>
  )
}
