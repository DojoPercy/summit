'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { motion as _motion } from 'framer-motion'
import images from '@/lib/images'

// Workaround for framer-motion + TS intrinsic element typing with React 19
const motion: any = _motion as any

const navigation = [
  { name: 'Homepage', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <nav className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 font-display text-2xl font-bold hover:text-primary transition-colors">
          <div className="relative h-10 w-36 sm:w-48">
            <Image
              src={images.logoGold}
              alt="Technology Boardroom"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
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
          <Link href="/contact">Apply Now</Link>
        </Button>
      </nav>

      {/* Mobile Navigation - would be expanded with sheet/dropdown */}
    </motion.header>
  )
}
