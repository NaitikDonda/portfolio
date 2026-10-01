import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SceneIpl: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [liveProb, setLiveProb] = useState(59);

  const iplProject = PROJECTS.find((p) => p.id === 'ipl-predictor');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const calculated = Math.round(56 + self.progress * 19);
            setLiveProb(calculated);
          },
        },
      });

      tl.fromTo(graphRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, ease: 'power2.out' }, 0)
        .fromTo(metricsRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: 'power2.out' }, 0.4);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-05"
      ref={containerRef}
      className="relative min-h-screen w-full bg-teal-dark text-cream-soft flex flex-col justify-between p-6 md:p-16 overflow-hidden"
    >
      <div className="flex justify-between items-center font-mono text-xs text-cream/70 tracking-widest uppercase z-10">
        <span>SCENE 05</span>
        <span>{iplProject?.category}</span>
      </div>

      <div className="relative z-10 my-auto max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block px-3 py-1 bg-cream-soft/10 text-cream-soft rounded-full font-mono text-xs font-semibold border border-cream/20">
            PROJECT 02 — {iplProject?.date}
          </div>

          <h2 className="text-5xl sm:text-7xl font-display font-extrabold text-cream tracking-tight leading-none">
            {iplProject?.title}
          </h2>

          <p className="text-xl sm:text-2xl font-display text-emerald-400 font-semibold">
            "{iplProject?.subtitle}"
          </p>

          <p className="text-sm sm:text-base text-cream/80 leading-relaxed font-sans">
            {iplProject?.description}
          </p>

          {/* Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
            {iplProject?.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 bg-teal-deep rounded-lg text-cream-soft">
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs">
            {iplProject?.liveUrl && (
              <a
                href={iplProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-400 text-teal-dark font-bold rounded-full hover:bg-emerald-300 transition-all shadow flex items-center space-x-2"
              >
                <span className="w-2 h-2 rounded-full bg-teal-dark animate-ping" />
                <span>LIVE DEMO APP ↗</span>
              </a>
            )}

            {iplProject?.githubUrl && (
              <a
                href={iplProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-teal-deep text-cream-soft rounded-full border border-cream/20 hover:bg-cream-soft hover:text-teal-dark transition-all flex items-center space-x-2"
              >
                <span>GITHUB REPO ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Interactive Scroll-Driven Analytics Simulator */}
        <div className="lg:col-span-6 space-y-6">
          <div
            ref={graphRef}
            className="p-6 sm:p-8 rounded-3xl bg-teal-deep/90 border border-cream/20 shadow-2xl space-y-6 font-mono"
          >
            <div className="flex justify-between items-center border-b border-cream/15 pb-4">
              <span className="text-xs text-cream/70">10+ SEASONS BALL-BY-BALL ML MODEL</span>
              <span className="text-xs text-emerald-400 font-bold animate-pulse">LIVE SCROLL INFERENCE</span>
            </div>

            {/* Probability Progress Bar driven by scroll */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Team Win Probability</span>
                <span className="text-emerald-400 font-extrabold text-xl">{liveProb}%</span>
              </div>
              <div className="h-4 bg-teal-dark rounded-full overflow-hidden p-0.5 border border-cream/10">
                <div
                  className="h-full bg-emerald-400 rounded-full transition-all duration-75"
                  style={{ width: `${liveProb}%` }}
                />
              </div>
            </div>

            {/* Verified Resume Metrics */}
            <div ref={metricsRef} className="grid grid-cols-3 gap-3 pt-4 border-t border-cream/15 text-center">
              {iplProject?.metrics?.map((m, idx) => (
                <div key={idx} className="p-3 bg-teal-dark rounded-2xl border border-cream/10">
                  <span className="block text-xl font-display font-extrabold text-cream">{m.value}</span>
                  <span className="text-[10px] text-cream/60 leading-tight block mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="font-mono text-xs text-cream/50 text-center uppercase tracking-widest">
        SUB-500MS FLASK INFERENCE MICROSERVICE
      </div>
    </section>
  );
};
