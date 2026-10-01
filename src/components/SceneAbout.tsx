import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SceneAbout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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

      tl.fromTo(text1Ref.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, ease: 'power2.out' })
        .fromTo(text2Ref.current, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, ease: 'power2.out' }, 0.2)
        .to(marqueeRef.current, { x: '-30%', ease: 'none' }, 0.4);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-02"
      ref={containerRef}
      className="relative min-h-screen w-full bg-cream text-dark-text flex flex-col justify-between py-20 px-6 md:px-16 overflow-hidden border-t border-beige-border"
    >
      <div className="flex justify-between items-center font-mono text-xs text-teal-deep tracking-widest uppercase">
        <span>SCENE 02</span>
        <span>WHO IS NAITIK?</span>
      </div>

      <div className="my-auto space-y-12 max-w-6xl mx-auto w-full">
        {/* Huge Oversized Editorial Title */}
        <div ref={text1Ref} className="space-y-2">
          <span className="text-xs font-mono uppercase text-teal-deep tracking-widest">PHILOSOPHY</span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-dark-text leading-none tracking-tight">
            More than a resume.
          </h2>
        </div>

        {/* Narrative Biography Statement */}
        <div ref={text2Ref} className="grid grid-cols-1 md:grid-cols-12 gap-8 text-base sm:text-xl text-dark-text/80 leading-relaxed font-sans">
          <div className="md:col-span-7">
            <p className="font-semibold text-teal-deep text-xl sm:text-2xl mb-4 font-display">
              "I build at the intersection of Data Science, local AI models, and user-centric application engineering."
            </p>
            <p className="text-sm sm:text-base text-dark-text/70">
              Pursuing B.Tech Data Science at NMIMS MPSTME, Mumbai (2025-2028), backed by a Computer Engineering Diploma from Thakur Polytechnic. I construct complete software systems from ML data pipelines down to cross-platform mobile and web applications.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4 font-mono">
            {PERSONAL_DATA.stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-cream-card border border-beige-border">
                <span className="text-3xl font-display font-bold text-teal-deep block">{stat.value}</span>
                <span className="text-[10px] text-dark-text/60 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Moving Technology Strip */}
      <div className="w-full overflow-hidden border-t border-b border-beige-border py-3 bg-cream-card">
        <div ref={marqueeRef} className="flex space-x-8 whitespace-nowrap font-mono text-xs text-teal-deep font-bold">
          {PERSONAL_DATA.techStrip.concat(PERSONAL_DATA.techStrip).map((tech, idx) => (
            <span key={idx} className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-deep" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
