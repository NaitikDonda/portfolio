import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParticleCanvas } from './ParticleCanvas';

gsap.registerPlugin(ScrollTrigger);

export const SceneBuilder: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const word3Ref = useRef<HTMLSpanElement>(null);
  const word4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(word1Ref.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, ease: 'power2.out' }, 0)
        .fromTo(word2Ref.current, { x: '-50vw', opacity: 0 }, { x: '0vw', opacity: 1, ease: 'power2.out' }, 0.2)
        .fromTo(word3Ref.current, { y: '50vh', opacity: 0 }, { y: '0vh', opacity: 1, ease: 'power2.out' }, 0.4)
        .fromTo(word4Ref.current, { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1, ease: 'power2.out' }, 0.6);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-03"
      ref={containerRef}
      className="relative min-h-screen w-full bg-teal-dark text-cream-soft flex flex-col justify-between p-8 md:p-16 overflow-hidden select-none"
    >
      <ParticleCanvas speedMultiplier={1.5} />

      <div className="flex justify-between items-center font-mono text-xs text-cream/70 tracking-widest uppercase z-10">
        <span>SCENE 03</span>
        <span>THE BUILDER</span>
      </div>

      <div className="my-auto flex flex-col items-center justify-center text-center space-y-4 z-10">
        <span ref={word1Ref} className="text-6xl sm:text-8xl lg:text-9xl font-display font-extrabold text-cream opacity-20 block leading-none">
          DATA
        </span>
        <span ref={word2Ref} className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-teal-soft block leading-none">
          SCIENCE
        </span>
        <span ref={word3Ref} className="text-4xl sm:text-6xl lg:text-7xl font-mono text-cream-card block italic">
          MEETS
        </span>
        <span ref={word4Ref} className="text-4xl sm:text-6xl lg:text-8xl font-display font-extrabold text-cream-soft block tracking-tight">
          CREATIVE TECHNOLOGY.
        </span>
      </div>

      <div className="font-mono text-xs text-cream/60 text-center uppercase tracking-widest z-10">
        ARCHITECTING END-TO-END DIGITAL SYSTEMS
      </div>
    </section>
  );
};
