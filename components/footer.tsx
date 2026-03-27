import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background" id="contact">
      <div className="h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent w-full" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-headline text-lg font-bold text-foreground leading-snug">
              Ghana Green Mining &<br />Critical Minerals Awards 2026
            </h3>
            <p className="text-xs text-foreground/55 leading-relaxed max-w-xs">
              Recognizing Responsible Mining · Sustainable Industry · Green Economy Leadership
            </p>
            <div className="h-px w-12 bg-accent/40" />
            <p className="text-xs text-foreground/45">
              Organised by Strategic Brand Focus Africa Limited (SBF Africa)<br />
              in collaboration with Premier Business Africa Magazine
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About the Awards', href: '#about' },
                { name: 'Theme', href: '#theme' },
                { name: 'Event Objectives', href: '#objectives' },
                { name: 'Who Attends', href: '#who-attends' },
                { name: 'Sponsorship Packages', href: '#sponsorship' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/55 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/50 mb-5">Event Secretariat</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">Email</div>
                <a href="mailto:marcom@sbfafrica.com" className="text-foreground/70 hover:text-accent transition-colors">
                  marcom@sbfafrica.com
                </a>
              </li>
              <li>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">Phone</div>
                <span className="text-foreground/70">+233 50 589 3884</span>
              </li>
              <li>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">Location</div>
                <span className="text-foreground/70">Accra, Ghana</span>
              </li>
              <li>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">Deadline</div>
                <span className="text-accent font-semibold">10th April 2026</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-foreground/40">
            © 2026 Strategic Brand Focus Africa Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 bg-accent rotate-45" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              24th April 2026 · Accra Marriott Hotel
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
