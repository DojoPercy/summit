"use client";

import { motion as _motion } from "framer-motion";
import React from "react";

const motion: any = _motion as any;

interface PremiumPillarProps {
  title: string;
  description: string;
  imagePath?: string; // User will provide these
  index: number;
}

export default function PremiumPillar({
  title,
  description,
  imagePath,
  index,
}: PremiumPillarProps) {
  return (
    <motion.div
      className="relative overflow-hidden group h-[400px] rounded-sm bg-card border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      {/* Background Image Placeholder / User Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {imagePath ? (
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-50"
          />
        ) : (
          <div className="w-full h-full bg-secondary/30 transition-transform duration-700 group-hover:scale-110 flex items-center justify-center">
            {/* Fallback pattern or text */}
            <span className="text-foreground/10 text-xs font-mono uppercase tracking-widest -rotate-45">
              // ADD IMAGE: {title}
            </span>
          </div>
        )}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        >
          <div className="h-0.5 w-8 bg-accent mb-4 transform origin-left transition-all duration-500 group-hover:w-16" />
          <h3 className="font-display text-2xl font-bold text-white mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-[280px] transform transition-all duration-500 group-hover:text-white">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 z-30 border border-accent/0 group-hover:border-accent/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}
