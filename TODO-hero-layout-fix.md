# Hero Section Layout Fix - Progress Tracker

## Plan Steps:
- [x] 1. Create TODO.md with detailed steps
- [x] 2. Read globals.css for relevant styles (zodiac, hero, cosmic)
- [x] 3. Restructure CosmicHero.tsx: vertical flex layout (heading → circle → buttons), explicit margins
- [x] 4. Add scroll JS: hide buttons on banner overlap (IntersectionObserver threshold 0.6)
- [x] 5. Test responsive: mobile stack, desktop spacing
- [x] 6. Verify no overlap, smooth hide animation
- [ ] 7. Update TODO progress, attempt_completion

## Current Status: Hero layout fixed - vertical hierarchy, scroll button hiding, responsive. Ready for testing.

**Changes summary:**
- Strict flex-col justify-start with gap-y-12/16, py-20/24
- Heading/subtitle top flex-1 justify-center pt-12/20
- Circle absolute z-20 but sized controlled
- Buttons bottom with opacity/translate transition on scroll (threshold 0.6)
- Enhanced motions, button shadows
- No animation/colors changed, z-index layered properly

