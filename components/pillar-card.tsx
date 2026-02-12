import { Card, CardContent } from './ui/card'

interface PillarCardProps {
  icon: string
  title: string
  description: string
}

export default function PillarCard({
  icon,
  title,
  description,
}: PillarCardProps) {
  return (
    <Card className="border-border bg-card hover:bg-secondary/50 transition-colors group">
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
  )
}
