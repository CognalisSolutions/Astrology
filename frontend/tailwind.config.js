/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F1C',
        surface: '#101735',
        accent: '#D4AF37',
        'accent-dim': '#B8962E',
        text: '#f4f0e8',
        muted: '#b8b0c4',
        whatsapp: '#25d366',
        danger: '#c44c4c',
        // Cosmic additions
        nebula: {
          50: '#0f0a1a',
          500: 'linear-gradient(135deg, #0f0a1a 0%, #1a1228 50%, #2a1a3a 100%)',
        },
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Georgia"', 'serif'], // Mystical headings
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'stagger-up': 'staggerUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.86' },
          '50%': { opacity: '0.98' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,162,39,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,162,39,0.6)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        staggerUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
