"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    src: "/main/_RAD4856.jpg",
    alt: "Hotelier Africa Leadership Summit – delegate session",
    caption: "Leadership in Session",
  },
  {
    src: "/main/2NDFF&BMAWARDS2025(47of346).jpg",
    alt: "Hotelier Africa Awards 2025 – ceremony",
    caption: "Awards Ceremony",
  },
  {
    src: "/main/_RAD4872.jpg",
    alt: "Hotelier Africa Leadership Summit – panel discussion",
    caption: "Panel Discussions",
  },
  {
    src: "/main/2NDFF&BMAWARDS2025(57of346).jpg",
    alt: "Hotelier Africa Awards 2025 – gala night",
    caption: "Gala Night",
  },
];

export default function EventHighlights() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-[8%] bg-background">
      {/* Section header */}
      <div className="mb-10 flex flex-col gap-2">
        <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">
          Previous Edition
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
          Highlights from the 1st Edition
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm mt-1">
          A glimpse of the conversations, connections and celebrations from the
          inaugural Hotelier Africa Leadership Summit &amp; Awards.
        </p>
      </div>

      {/* Photo grid — 2 tall left + 2 stacked right */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[480px]">
        {/* First image — spans 2 rows */}
        <motion.div
          className="relative col-span-1 row-span-2 md:col-span-2 overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={highlights[0].src}
            alt={highlights[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute bottom-3 left-4 text-xs tracking-widest uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {highlights[0].caption}
          </span>
        </motion.div>

        {/* Images 2, 3, 4 — right side */}
        {highlights.slice(1).map((img, i) => (
          <motion.div
            key={img.src}
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-3 left-3 text-xs tracking-widest uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.caption}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
