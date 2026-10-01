import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ACHIEVEMENTS } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SceneAchievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

      // Giant 08 grows to fill screen, then reveals hackathon narrative
      tl.fromTo(numRef.current, { scale: 0.5, opacity: 0.2 }, { scale: 1.8, opacity: 1, ease: 'power2.out' }, 0)
        .fromTo(textRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: 'power2.out' }, 0.4);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-10"
      ref={containerRef}
      className="relative min-h-screen w-full bg-teal-dark text-cream-soft flex flex-col justify-between p-6 md:p-16 overflow-hidden select-none"
    >
      <div className="flex justify-between items-center font-mono text-xs text-cream/70 tracking-widest uppercase z-10">
        <span>SCENE 10</span>
        <span>HACKATHONS & ACHIEVEMENTS</span>
      </div>

      <div className="my-auto text-center space-y-6 max-w-5xl mx-auto z-10 relative">
        <h1
          ref={numRef}
          className="text-8xl sm:text-[180px] lg:text-[240px] font-display font-extrabold text-cream leading-none tracking-tighter"
        >
          08
        </h1>

        <div ref={textRef} className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-emerald-400">
            NATIONAL HACKATHONS
          </h2>
          <p className="text-sm sm:text-base text-cream/80 font-sans leading-relaxed">
            {ACHIEVEMENTS[0].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 font-mono text-xs text-left">
            {ACHIEVEMENTS.slice(1).map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-teal-deep/80 border border-cream/15">
                <span className="text-[10px] text-emerald-400 block uppercase font-bold">{item.badge}</span>
                <span className="font-bold text-cream mt-1 block">{item.title}</span>
                <p className="text-[11px] text-cream/70 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="font-mono text-xs text-cream/50 text-center uppercase tracking-widest z-10">
        SMART INDIA HACKATHON 2025 & 2026 COMPETITOR
      </div>
    </section>
  );
};
