"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import images from "@/lib/images";

const slides = [
  images.hero1,
  images.hero2,
  images.hero3,
  images.hero4,
  images.hero5,
];

export function HeroCarousel() {
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [prevEnabled, setPrevEnabled] = React.useState(false);
  const [nextEnabled, setNextEnabled] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full h-screen overflow-hidden group">
      {/* Carousel */}
      <div className="w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((img, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] relative h-screen"
            >
              <Image
                src={img}
                alt={`Hero ${index + 1}`}
                fill
                priority
                className="object-cover brightness-[0.35] transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute hidden inset-y-1/2 -translate-y-1/2 md:flex justify-between w-full px-4 sm:px-8 md:px-12 lg:px-[8%]">
        <Button
          className="cursor-pointer border border-white/30 bg-black/30 hover:bg-accent/40 hover:border-accent/60 shadow-md backdrop-blur-md transition-all duration-300"
          size="icon"
          variant="ghost"
          onClick={scrollPrev}
          disabled={!prevEnabled}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </Button>
        <Button
          className="cursor-pointer border border-white/30 bg-black/30 hover:bg-accent/40 hover:border-accent/60 shadow-md backdrop-blur-md transition-all duration-300"
          size="icon"
          variant="ghost"
          onClick={scrollNext}
          disabled={!nextEnabled}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-[3px] transition-all duration-300 ${i === selectedIndex ? "bg-accent w-8" : "bg-white/30 w-4 hover:bg-white/60"}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
