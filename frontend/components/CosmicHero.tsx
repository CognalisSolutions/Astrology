"use client";

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { ZodiacCircle } from '@/components/ZodiacCircle';

const SIDE_FLOATING_ICONS = [
  { symbol: "\u2726", top: "19%", left: "8%", delay: "0s", size: "1.35rem", drift: "16px", rotate: "-9deg", opacity: 0.75 },
  { symbol: "\u2728", top: "32%", left: "25%", delay: "1.2s", size: "1.05rem", drift: "10px", rotate: "12deg", opacity: 0.62 },
  { symbol: "\u263e", top: "52%", left: "10%", delay: "2.1s", size: "1.2rem", drift: "18px", rotate: "-18deg", opacity: 0.72 },
  { symbol: "\u2737", top: "70%", left: "27%", delay: "0.7s", size: "1.35rem", drift: "12px", rotate: "10deg", opacity: 0.68 },
  { symbol: "\u2726", top: "88%", left: "15%", delay: "1.9s", size: "0.95rem", drift: "14px", rotate: "-4deg", opacity: 0.48 },
  { symbol: "\u2727", top: "17%", right: "18%", delay: "0.5s", size: "1.1rem", drift: "12px", rotate: "8deg", opacity: 0.65 },
  { symbol: "\u2736", top: "31%", right: "9%", delay: "1.6s", size: "1.3rem", drift: "17px", rotate: "-12deg", opacity: 0.78 },
  { symbol: "\u263d", top: "55%", right: "24%", delay: "2.4s", size: "1.2rem", drift: "11px", rotate: "14deg", opacity: 0.7 },
  { symbol: "\u2609", top: "73%", right: "12%", delay: "0.9s", size: "1rem", drift: "15px", rotate: "-7deg", opacity: 0.58 },
  { symbol: "\u2728", top: "86%", right: "28%", delay: "2.8s", size: "0.9rem", drift: "9px", rotate: "6deg", opacity: 0.46 },
  { symbol: "\u22c6", top: "25%", left: "41%", delay: "3.1s", size: "0.78rem", drift: "8px", rotate: "18deg", opacity: 0.42 },
  { symbol: "\u22c6", top: "47%", right: "39%", delay: "1.4s", size: "0.72rem", drift: "7px", rotate: "-16deg", opacity: 0.38 },
];

export function CosmicHero() {
  const [hideHeading, setHideHeading] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHideHeading(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="fixed inset-0 z-10 w-screen h-screen overflow-hidden cosmic-premium-bg isolate">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 cosmic-noise" />
        <div className="absolute inset-0 cosmic-wheel-ghost" />
        <div className="absolute inset-0 cosmic-particle-field" />
        <div className="absolute inset-0 cosmic-side-icons">
          {SIDE_FLOATING_ICONS.map((icon, index) => (
            <span
              key={icon.symbol + '-' + index}
              className="cosmic-side-icon"
              style={
                {
                  top: icon.top,
                  left: icon.left,
                  right: icon.right,
                  fontSize: icon.size,
                  animationDelay: icon.delay,
                  "--side-icon-opacity": icon.opacity,
                  "--side-icon-drift": icon.drift,
                  "--side-icon-rotate": icon.rotate,
                } as CSSProperties
              }
            >
              {icon.symbol}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-30 min-h-screen w-full mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="absolute inset-x-0 top-6 z-40 flex justify-center px-6 md:top-10 lg:top-12">
          <h1
            className={`font-cinzel text-[clamp(1.8rem,4vw,4.25rem)] leading-none text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] animate-hero-heading whitespace-nowrap transition-all duration-500 ${
              hideHeading ? 'opacity-0 invisible -translate-y-6 pointer-events-none' : 'opacity-100 visible translate-y-0'
            }`}
          >
            Sri Sammakka Sarakka Jyothisyalayam
          </h1>
        </div>

        <div className="flex min-h-screen items-center justify-center pt-24 md:pt-28 lg:pt-32">
          <div className="w-[min(82vw,500px)] md:w-[min(80vw,580px)] flex items-center justify-center">
            <ZodiacCircle />
          </div>
        </div>
      </div>
    </section>
  );
}
