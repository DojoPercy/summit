import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Code of Conduct', href: '#' },
  ],
  contact: [
    { label: 'Email', value: 'hello@theboaroom.com' },
    { label: 'Phone', value: '+971 4 XXX XXXX' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-36">
                <Image src="/TECH BOARDROOM LOGO WHITE.png" alt="Technology Boardroom" fill style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <p className="text-sm text-foreground/60">
              An invitation-only executive council for strategic leadership dialogue.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <div className="text-xs text-foreground/50 mb-1">{item.label}</div>
                  <div className="text-sm text-foreground/70">{item.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <p className="text-xs text-foreground/50">© 2024 The Technology Boardroom. All rights reserved.</p>
              <div className="hidden sm:block h-6 w-28 relative">
                <Image src="/RADCOMM.png" alt="RADCOMM" fill style={{ objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
