import { Card, CardContent } from './ui/card'
import React from 'react'

interface LocationCardProps {
  region: string
  description: string
  icon?: React.ReactNode
}

export default function LocationCard({
  region,
  description,
  icon,
}: LocationCardProps) {
  return (
    <Card className="border-border bg-card hover:bg-secondary/50 transition-colors">
      <CardContent className="pt-8 pb-6">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">
          {region}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
