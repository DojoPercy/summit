"use client";

import React, { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GoldWaveProps {
  className?: string;
  count?: number;
  opacity?: number;
}

export const GoldWave: React.FC<GoldWaveProps> = ({
  className,
  count = 12,
  opacity = 1.0,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Triple width viewBox to allow seamless translation
  // viewBox="0 0 4320 400" (1440 * 3 = 4320)
  // Higher vertical range (400) to prevent clipping of thick strokes and glow

  const particles = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      cx: Math.random() * 4320,
      cy: Math.random() * 400,
      r: Math.random() * 1.5 + 0.5,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
  }, []);

  // One wave cycle data (repeatable)
  // We'll repeat this 3 times in the path
  const waveSegment = (y: number, i: number) => {
    const amp = 80 + i * 2;
    return `c 360,${amp} 720,${-amp} 1080,0 s 720,${-amp} 1080,0`;
  };

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden pointer-events-none",
        className,
      )}
    >
      <svg
        viewBox="0 0 4320 400"
        preserveAspectRatio="none"
        className="w-[300%] h-full ml-[-100%] absolute animate-gold-translate"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <linearGradient
            id="gold-shimmer-triple"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#b8860b">
              <animate
                attributeName="offset"
                values="-1; 1"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#ffd700">
              <animate
                attributeName="offset"
                values="0; 2"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#b8860b">
              <animate
                attributeName="offset"
                values="1; 3"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <filter
            id="gold-glow-triple"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Generate multiple continuous waves spanning triple width */}
        {Array.from({ length: count }).map((_, i) => {
          const startY = 200 + (i - count / 2) * 8;
          return (
            <path
              key={i}
              fill="none"
              stroke="url(#gold-shimmer-triple)"
              strokeWidth={1 + i * 0.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                opacity: 0.2 + Math.sin(i) * 0.15,
                filter: i % 4 === 0 ? "url(#gold-glow-triple)" : "none",
              }}
              d={`M 0,${startY} ${waveSegment(startY, i)} ${waveSegment(startY, i)}`}
            />
          );
        })}

        {/* Core Shiny Looping Path */}
        <path
          fill="none"
          stroke="url(#gold-shimmer-triple)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{
            opacity: 0.8,
            filter: "url(#gold-glow-triple)",
          }}
          d={`M 0,200 c 360,100 720,-100 1080,0 s 720,-100 1080,0 s 720,100 1080,0 s 720,-100 1080,0`}
        />

        {/* Sparkle/Glitter layer spanning triple width - only render on client to avoid hydration mismatch */}
        {mounted &&
          particles.map((p, i) => (
            <circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill="#fff8e1"
              className="animate-gold-sparkle"
              style={{
                animationDelay: p.delay,
                animationDuration: p.duration,
                filter: "drop-shadow(0 0 2px #ffd700)",
              }}
            />
          ))}
      </svg>
    </div>
  );
};

export default GoldWave;
