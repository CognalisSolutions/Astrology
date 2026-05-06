"use client";

import type { CSSProperties } from "react";

const ZODIAC_SIGNS = ["\u2648", "\u2649", "\u264a", "\u264b", "\u264c", "\u264d", "\u264e", "\u264f", "\u2650", "\u2651", "\u2652", "\u2653"];
const FLOATING_GLYPHS = [
  { symbol: "\u2648", x: 17, y: 19, d: 9.2, r: 22 },
  { symbol: "\u263f", x: 83, y: 18, d: 10.4, r: -18 },
  { symbol: "\u2640", x: 11, y: 37, d: 8.8, r: 16 },
  { symbol: "\u2643", x: 87, y: 35, d: 11.5, r: -24 },
  { symbol: "\u2609", x: 8, y: 55, d: 9.7, r: 14 },
  { symbol: "\u263d", x: 90, y: 54, d: 10.2, r: -15 },
  { symbol: "\u2652", x: 13, y: 74, d: 12.1, r: 20 },
  { symbol: "\u2644", x: 84, y: 76, d: 10.7, r: -16 },
  { symbol: "\u2649", x: 26, y: 86, d: 9.3, r: 10 },
  { symbol: "\u264f", x: 74, y: 87, d: 11.2, r: -11 },
];


export function ZodiacCircle() {
  return (
    <div className="zodiac-circle-shell" aria-hidden>
      <div className="zodiac-aura zodiac-aura-inner" />
      <div className="zodiac-aura zodiac-aura-mid" />
      <div className="zodiac-aura zodiac-aura-outer" />
      <span className="zodiac-wave zodiac-wave-one" />
      <span className="zodiac-wave zodiac-wave-two" />
      <span className="zodiac-wave zodiac-wave-three" />

      <div className="zodiac-ring zodiac-ring-outer">
        <svg viewBox="0 0 500 500" className="zodiac-svg" role="img" aria-label="Astrology zodiac outer ring">
          <defs>
            <filter id="goldSoftGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="250" cy="250" r="220" className="zodiac-stroke-main" />
          <circle cx="250" cy="250" r="205" className="zodiac-stroke-soft" />
          <circle cx="250" cy="250" r="168" className="zodiac-stroke-main" />

          {ZODIAC_SIGNS.map((sign, index) => {
            const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
            const x = 250 + Math.cos(angle) * 193;
            const y = 250 + Math.sin(angle) * 193;
            return (
              <text key={sign} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="zodiac-sign-text">
                {sign}
              </text>
            );
          })}

          <circle cx="250" cy="250" r="128" className="zodiac-stroke-soft" filter="url(#goldSoftGlow)" />
        </svg>
      </div>

      <div className="zodiac-ring zodiac-ring-inner">
        <svg viewBox="0 0 500 500" className="zodiac-svg" role="img" aria-label="Astrology zodiac inner ring">
          <circle cx="250" cy="250" r="108" className="zodiac-stroke-main" />
          <circle cx="250" cy="250" r="84" className="zodiac-stroke-soft" />
          {[...Array(24)].map((_, index) => {
            const angle = (index / 24) * Math.PI * 2;
            const x1 = 250 + Math.cos(angle) * 112;
            const y1 = 250 + Math.sin(angle) * 112;
            const x2 = 250 + Math.cos(angle) * (index % 2 === 0 ? 94 : 100);
            const y2 = 250 + Math.sin(angle) * (index % 2 === 0 ? 94 : 100);
            return <line key={`tick-${index}`} x1={x1} y1={y1} x2={x2} y2={y2} className="zodiac-tick" />;
          })}
        </svg>
      </div>

      <div className="zodiac-core">
        <span className="zodiac-core-dot" />
      </div>

      {[...Array(22)].map((_, index) => {
        const angle = (index / 22) * Math.PI * 2;
        const radius = index % 3 === 0 ? 228 : index % 3 === 1 ? 246 : 214;
        const size = index % 4 === 0 ? 8 : index % 4 === 1 ? 6 : 4;
        const duration = 4.8 + (index % 5) * 1.1;
        const opacity = index % 3 === 0 ? 0.95 : index % 3 === 1 ? 0.75 : 0.55;
        const x = 50 + (Math.cos(angle) * radius * 100) / 500;
        const y = 50 + (Math.sin(angle) * radius * 100) / 500;
        return (
          <span
            key={`spark-${index}`}
            className="zodiac-spark"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${index * 0.26}s`,
            }}
          />
        );
      })}

      {FLOATING_GLYPHS.map((glyph, index) => (
        <span
          key={`glyph-${glyph.symbol}-${index}`}
          className="zodiac-floating-glyph"
          style={
            {
              left: `${glyph.x}%`,
              top: `${glyph.y}%`,
              animationDelay: `${index * 0.45}s`,
              animationDuration: `${glyph.d}s`,
              "--glyph-rot": `${glyph.r}deg`,
            } as CSSProperties
          }
        >
          {glyph.symbol}
        </span>
      ))}
    </div>
  );
}
