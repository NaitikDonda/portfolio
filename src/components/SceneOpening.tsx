import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_DATA } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';

gsap.registerPlugin(ScrollTrigger);

export const SceneOpening: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 1,
          pin: true,
        },
      });

      tl.to(title1Ref.current, { x: '-25vw', opacity: 0.2, ease: 'power1.inOut' }, 0)
        .to(title2Ref.current, { x: '25vw', opacity: 0.2, ease: 'power1.inOut' }, 0)
        .to(subtitleRef.current, { opacity: 0, y: -20, ease: 'power1.out' }, 0)
        .to(headlineRef.current, { scale: 1.1, opacity: 1, ease: 'power2.out' }, 0.2);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-01"
      ref={containerRef}
      className="relative min-h-screen w-full bg-cream text-dark-text flex flex-col items-center justify-center overflow-hidden px-4 select-none"
    >
      {/* Background Interactive Particle Constellation Flow */}
      <ParticleCanvas speedMultiplier={1} />

      <div className="relative z-10 text-center space-y-4">
        <h1
          ref={title1Ref}
          className="text-6xl sm:text-8xl md:text-9xl font-display font-extrabold text-dark-text tracking-tighter leading-none"
        >
          NAITIK
        </h1>
        <h1
          ref={title2Ref}
          className="text-6xl sm:text-8xl md:text-9xl font-display font-extrabold text-teal-deep tracking-tighter leading-none"
        >
          DONDA
        </h1>

        <p
          ref={subtitleRef}
          className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.3em] text-dark-text/70 mt-6"
        >
          {PERSONAL_DATA.title}
        </p>

        <h2
          ref={headlineRef}
          className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-teal-deep opacity-0 transition-opacity mt-8 max-w-3xl mx-auto leading-tight"
        >
          "{PERSONAL_DATA.headline}"
        </h2>
      </div>

      <div className="absolute bottom-10 text-center font-mono text-[10px] uppercase tracking-widest text-teal-deep/60 animate-bounce">
        SCROLL TO DISCOVER STORY ↓
      </div>
    </section>
  );
};
