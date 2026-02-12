 'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'

interface CTASectionProps {
  headline: string
  description: string
  cta: {
    text: string
    href: string
  }
  icon?: string
}

export default function CTASection({
  headline,
  description,
  cta,
  icon = '→',
}: CTASectionProps) {
  return (
    <section className="relative border-y border-border bg-secondary/20 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {headline}
        </motion.h2>
        <motion.p
          className="text-lg text-foreground/70 text-balance mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-primary"
            size="lg"
          >
            <Link href={cta.href}>
              {cta.text} <span className="ml-2">{icon}</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
