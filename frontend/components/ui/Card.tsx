"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function Card({ children, className = '', hoverGlow = true }: CardProps) {
  return (
    <motion.div
      className={`card ${className} min-h-0`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={hoverGlow ? { scale: 1.05, rotateX: 5 } : {}}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

