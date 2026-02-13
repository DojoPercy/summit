import PageHero from '@/components/page-hero'
import images from '@/lib/images'
import { Mail, Users, Phone, MapPin, Building } from 'lucide-react'
import SectionContainer from '@/components/section-container'
import ContactCard from '@/components/contact-card'
import ContactForm from '@/components/contact-form'
import { Separator } from '@/components/ui/separator'

const contactMethods = [
  {
    type: 'General Enquiries',
    icon: <Mail className="w-7 h-7" />,
    details: ['hello@theboaroom.com', 'Response within 48 hours'],
  },
  {
    type: 'Partnerships & Media',
    icon: <Users className="w-7 h-7" />,
    details: ['partnerships@theboaroom.com', 'Strategic collaboration opportunities'],
  },
  {
    type: 'Phone',
    icon: <Phone className="w-7 h-7" />,
    details: ['+971 4 XXX XXXX (Dubai)', 'Available weekdays 9AM-5PM GST'],
  },
]

const offices = [
  {
    region: 'United Arab Emirates',
    description: 'Our primary hub serving the Middle East, Africa, and South Asia regions. Located in Dubai, our team serves executives across the UAE, GCC, and African markets.',
    icon: <MapPin className="w-7 h-7" />,
  },
  {
    region: 'Ghana',
    description: 'Our African operations center facilitating engagement across the African continent and supporting strategic initiatives in emerging markets.',
    icon: <Building className="w-7 h-7" />,
  },
]

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        headline="Get in Touch"
        subtext="Reach out to learn more about membership, participate in our platforms, or explore partnership opportunities with The Technology Boardroom."
        backgroundImage={images.hero2}
      />

      {/* Contact Methods */}
      <SectionContainer className="space-y-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Contact Methods
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Multiple ways to reach our team and discuss how The Technology Boardroom can serve your leadership needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <ContactCard
              key={method.type}
              type={method.type}
              details={method.details}
              icon={method.icon}
            />
          ))}
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Office Locations */}
      <SectionContainer className="space-y-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Global Offices
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Strategic locations enabling executive engagement across regions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office) => (
            <div
              key={office.region}
              className="border border-border rounded-sm p-8 bg-card hover:bg-secondary/30 transition-colors"
            >
              <div className="text-4xl mb-4">{office.icon}</div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {office.region}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {office.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Expression of Interest Form */}
      <SectionContainer className="space-y-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-pretty mb-4">
            Expression of Interest
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8">
            Submit your information below to express your interest in joining The Technology Boardroom. Our team will review your application and be in touch.
          </p>
        </div>
        
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </SectionContainer>

      <Separator className="bg-border" />

      {/* Additional Info */}
      <SectionContainer className="py-16">
        <div className="bg-secondary/20 border border-border rounded-sm px-8 py-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            What to Expect
          </h3>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>We'll review your application within 5 business days</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>A member of our team will contact you to discuss fit and opportunities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>We'll provide information on membership, platforms, and upcoming events</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>All conversations are confidential and respected</span>
            </li>
          </ul>
        </div>
      </SectionContainer>
    </>
  )
}
