import { Card, CardContent } from './ui/card'
import React from 'react'

interface ContactCardProps {
  type: string
  details: string[]
  icon: React.ReactNode
}

export default function ContactCard({
  type,
  details,
  icon,
}: ContactCardProps) {
  return (
    <Card className="border-border bg-card hover:bg-secondary/50 transition-colors">
      <CardContent className="pt-8 pb-6">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-4">
          {type}
        </h3>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="text-foreground/70 text-sm">
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
