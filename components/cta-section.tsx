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
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-6">
          {headline}
        </h2>
        <p className="text-lg text-foreground/70 text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-primary"
          size="lg"
        >
          <Link href={cta.href}>
            {cta.text} <span className="ml-2">{icon}</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}
