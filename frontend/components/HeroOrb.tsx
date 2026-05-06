"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function HeroOrb({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-accent to-accent-dim/50 rounded-full shadow-lg shadow-goldglow flex items-center justify-center opacity-80 animate-twinkle hover:animate-orbit ${className}`}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.5, zIndex: 10 }}
    >
      <Star className="w-6 h-6 md:w-8 md:h-8 text-gray-900 drop-shadow-sm animate-spin-slow" />
    </motion.div>
  );
}

