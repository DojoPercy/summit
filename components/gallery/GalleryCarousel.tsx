"use client"

import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'

const slides = [images.hero1, images.hero2, images.hero3, images.hero4, images.hero5]

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()

    const autoplay = setInterval(() => emblaApi.scrollNext(), 4000)
    return () => {
      clearInterval(autoplay)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full h-80 md:h-[60vh]" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((src, idx) => (
            <div key={idx} className="min-w-0 flex-[0_0_100%] relative h-full">
              <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover" priority={idx < 2} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-1/2 -translate-y-1/2 flex justify-between w-full px-4 sm:px-8 md:px-12 lg:px-[8%]">
        <Button
          className="rounded-full cursor-pointer border border-gray-300 bg-white/60 hover:bg-white shadow-md backdrop-blur-md"
          size="icon"
          variant="ghost"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          className="rounded-full cursor-pointer border border-gray-300 bg-white/60 hover:bg-white shadow-md backdrop-blur-md"
          size="icon"
          variant="ghost"
          onClick={scrollNext}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${i === selectedIndex ? 'bg-accent scale-110' : 'bg-white/40'}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
