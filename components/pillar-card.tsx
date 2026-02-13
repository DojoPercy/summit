 'use client'

import { motion as _motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import React from 'react'

const motion: any = _motion as any

interface PillarCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function PillarCard({
  icon,
  title,
  description,
}: PillarCardProps) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 140, damping: 14 }}
    >
      <Card className="border-border bg-card hover:bg-secondary/50 transition-colors">
        <CardContent className="pt-8 pb-6">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">
            {title}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
