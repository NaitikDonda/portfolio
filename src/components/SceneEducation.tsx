import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EDUCATION_LIST } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SceneEducation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

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

      // 2022-2025 Thakur Polytechnic transforms into 2025-2028 NMIMS Data Science
      tl.fromTo(card1Ref.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, ease: 'power2.out' }, 0)
        .to(card1Ref.current, { scale: 0.8, opacity: 0.3 }, 0.4)
        .fromTo(card2Ref.current, { scale: 0.9, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, ease: 'power2.out' }, 0.4);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-09"
      ref={containerRef}
      className="relative min-h-screen w-full bg-cream text-dark-text flex flex-col justify-between p-6 md:p-16 overflow-hidden border-t border-beige-border"
    >
      <div className="flex justify-between items-center font-mono text-xs text-teal-deep tracking-widest uppercase z-10">
        <span>SCENE 09</span>
        <span>ACADEMIC MILESTONES</span>
      </div>

      <div className="my-auto max-w-4xl mx-auto w-full relative min-h-[420px] flex items-center justify-center">
        {/* Milestone 1: Thakur Polytechnic Diploma (2022 - 2025) */}
        <div
          ref={card1Ref}
          className="absolute w-full p-8 sm:p-12 rounded-3xl bg-cream-card border border-beige-border shadow-xl space-y-4 text-center"
        >
          <span className="text-4xl sm:text-6xl font-display font-extrabold text-teal-deep block font-mono">
            {EDUCATION_LIST[1].period}
          </span>
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-dark-text">
            {EDUCATION_LIST[1].institution}
          </h3>
          <p className="text-lg font-mono text-teal-deep">{EDUCATION_LIST[1].degree}</p>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-deep text-cream-soft font-mono font-bold text-sm">
            {EDUCATION_LIST[1].grade}
          </div>
        </div>

        {/* Milestone 2: NMIMS MPSTME B.Tech Data Science (2025 - 2028) */}
        <div
          ref={card2Ref}
          className="absolute w-full p-8 sm:p-12 rounded-3xl bg-teal-deep text-cream-soft shadow-2xl space-y-4 text-center"
        >
          <span className="text-4xl sm:text-6xl font-display font-extrabold text-cream-soft block font-mono">
            {EDUCATION_LIST[0].period}
          </span>
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-cream-soft">
            {EDUCATION_LIST[0].institution}
          </h3>
          <p className="text-lg font-mono text-cream/90">{EDUCATION_LIST[0].degree}</p>
          <div className="inline-block px-4 py-2 rounded-full bg-cream-soft text-teal-dark font-mono font-bold text-sm shadow">
            {EDUCATION_LIST[0].grade}
          </div>
        </div>
      </div>

      <div className="font-mono text-xs text-teal-deep/60 text-center uppercase tracking-widest">
        ACADEMIC PROGRESSION & CREDENTIALS
      </div>
    </section>
  );
};
