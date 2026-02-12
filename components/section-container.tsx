import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </section>
  )
}
