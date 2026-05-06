"use client";

import Particles from '@tsparticles/react';

export function ParticlesBg() {
  return (
    <div className="absolute left-0 top-0 w-[450px] h-[200px] -z-10 pointer-events-none">
      <Particles
        id="tsparticles-cosmic"
        options={{
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 60,
          particles: {
            number: { 
              value: 80, 
              density: { 
                enable: true
              } 
            },
            color: { value: ['#c9a227', '#ffd700', '#ffaa00', '#c9a22740'] },
            shape: { type: 'circle' },
            opacity: { 
              value: { min: 0.15, max: 0.4 }
            },
            size: { 
              value: { min: 1, max: 3 }
            },
            links: {
              enable: true,
              distance: 150,
              color: '#c9a22720',
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              onClick: { enable: true, mode: 'push' },
              resize: { enable: true },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

