 'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'

interface PageHeroProps {
  headline: string
  subtext?: string
  cta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function PageHero({
  headline,
  subtext,
  cta,
  secondaryCta,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[87vh] flex items-center justify-center overflow-hidden border-b border-border"
      style={
        backgroundImage
          ? {
              backgroundImage: `url("${backgroundImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
    >
      {/* Overlay if image exists */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-background/70 z-10" />
      )}

      <div className="relative z-20 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-pretty text-foreground mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {headline}
        </motion.h1>

        {subtext && (
          <motion.p
            className="text-lg md:text-xl text-foreground/80 text-balance mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {subtext}
          </motion.p>
        )}

        {(cta || secondaryCta) && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            {cta && (
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-primary"
              >
                <Link href={cta.href}>{cta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-secondary hover:text-foreground"
              >
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
