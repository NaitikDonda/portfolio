import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SceneExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current?.scrollWidth! - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-07"
      ref={containerRef}
      className="relative h-screen w-full bg-cream text-dark-text flex flex-col justify-between p-6 md:p-16 overflow-hidden border-t border-beige-border"
    >
      <div className="flex justify-between items-center font-mono text-xs text-teal-deep tracking-widest uppercase z-10 shrink-0">
        <span>SCENE 07</span>
        <span>HORIZONTAL CAREER JOURNEY</span>
      </div>

      <div className="my-auto w-full overflow-hidden">
        <div ref={trackRef} className="flex space-x-12 items-center w-max px-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="w-[320px] sm:w-[450px] p-8 rounded-3xl bg-cream-card border border-beige-border shadow-md space-y-6 shrink-0 hover:border-teal-deep transition-colors"
            >
              <div className="flex justify-between items-start border-b border-beige-border pb-4">
                <div>
                  <span className="text-xs font-mono text-teal-deep uppercase font-bold">{exp.company}</span>
                  <h3 className="text-2xl font-display font-bold text-dark-text mt-1">{exp.role}</h3>
                </div>
                <span className="px-3 py-1 bg-cream-soft border border-beige-border rounded-full font-mono text-xs font-semibold text-teal-deep">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-dark-text/80 font-sans">
                {exp.highlights.map((h, i) => (
                  <p key={i}>• {h}</p>
                ))}
              </div>

              {exp.metrics && (
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-beige-border font-mono">
                  {exp.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 bg-cream-soft rounded-xl text-center">
                      <span className="text-lg font-bold text-teal-deep block">{m.value}</span>
                      <span className="text-[9px] text-dark-text/60 leading-tight block">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="font-mono text-xs text-teal-deep/60 text-center uppercase tracking-widest shrink-0">
        SCROLL HORIZONTALLY THROUGH CAREER MILESTONES →
      </div>
    </section>
  );
};
