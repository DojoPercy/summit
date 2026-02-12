'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 font-display text-2xl font-bold text-accent hover:text-primary transition-colors">
          <span className="text-3xl">⊕</span>
          <span className="hidden sm:inline">The Boardroom</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === item.href
                  ? 'text-accent'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          asChild 
          className="ml-auto bg-accent text-accent-foreground hover:bg-primary"
        >
          <Link href="/contact">Apply for Participation</Link>
        </Button>
      </nav>

      {/* Mobile Navigation - would be expanded with sheet/dropdown */}
    </header>
  )
}
