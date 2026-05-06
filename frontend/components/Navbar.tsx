"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar bg-[#0A0F1C] backdrop-blur-md border-b border-accent/30 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.2)]"
      style={{
        padding: '1rem 0', // 16px balanced
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-accent hover:text-accent/80 underline-none hover:underline text-lg md:text-xl font-cinzel font-semibold transition-all duration-300 hover:drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]"
          aria-label="Back to Home"
        >
          ← Home
        </Link>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-primary"
          style={{
            fontSize: '0.95rem',
            borderRadius: '12px',
          }}
        >
          Book Consultation
        </motion.button>
      </div>
    </motion.nav>
  );
}

