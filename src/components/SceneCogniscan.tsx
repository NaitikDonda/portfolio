import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SceneCogniscan: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stream1Ref = useRef<HTMLDivElement>(null);
  const stream2Ref = useRef<HTMLDivElement>(null);
  const fusionRef = useRef<HTMLDivElement>(null);

  const cogniProject = PROJECTS.find((p) => p.id === 'cogniscan');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      });

      // Stream 1 (Camera) and Stream 2 (Audio) converge into Fusion Layer
      tl.fromTo(stream1Ref.current, { x: '-30vw', opacity: 0 }, { x: '0vw', opacity: 1, ease: 'power2.out' }, 0)
        .fromTo(stream2Ref.current, { x: '30vw', opacity: 0 }, { x: '0vw', opacity: 1, ease: 'power2.out' }, 0)
        .fromTo(fusionRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, ease: 'power2.out' }, 0.4);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-06"
      ref={containerRef}
      className="relative min-h-screen w-full bg-cream text-dark-text flex flex-col justify-between p-6 md:p-16 overflow-hidden border-t border-beige-border"
    >
      <div className="flex justify-between items-center font-mono text-xs text-teal-deep tracking-widest uppercase z-10">
        <span>SCENE 06</span>
        <span>{cogniProject?.category}</span>
      </div>

      <div className="relative z-10 my-auto max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block px-3 py-1 bg-teal-deep/10 text-teal-deep rounded-full font-mono text-xs font-semibold">
            PROJECT 03 — {cogniProject?.date}
          </div>

          <h2 className="text-5xl sm:text-7xl font-display font-extrabold text-dark-text tracking-tight leading-none">
            {cogniProject?.title}
          </h2>

          <p className="text-xl sm:text-2xl font-display text-teal-deep font-semibold">
            "{cogniProject?.subtitle}"
          </p>

          <p className="text-sm sm:text-base text-dark-text/80 leading-relaxed font-sans">
            {cogniProject?.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
            {cogniProject?.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 bg-cream-soft border border-beige-border rounded-lg text-teal-dark font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Multimodal Signal Stream Fusion Simulation */}
        <div className="lg:col-span-6 space-y-4 relative min-h-[360px] flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Stream 1: Camera */}
            <div
              ref={stream1Ref}
              className="p-5 rounded-2xl bg-cream-card border border-beige-border shadow-md space-y-2 font-mono"
            >
              <div className="flex items-center justify-between text-xs text-teal-deep font-bold">
                <span>CAMERA STREAM</span>
                <span className="w-2 h-2 rounded-full bg-teal-deep animate-ping" />
              </div>
              <p className="text-[11px] text-dark-text/75">Facial expression landmarks (OpenCV)</p>
            </div>

            {/* Stream 2: Audio */}
            <div
              ref={stream2Ref}
              className="p-5 rounded-2xl bg-cream-card border border-beige-border shadow-md space-y-2 font-mono"
            >
              <div className="flex items-center justify-between text-xs text-teal-deep font-bold">
                <span>AUDIO STREAM</span>
                <span className="w-2 h-2 rounded-full bg-teal-deep animate-ping" />
              </div>
              <p className="text-[11px] text-dark-text/75">Speech features & acoustic spectrum</p>
            </div>
          </div>

          {/* Central Converged Feature Fusion Layer */}
          <div
            ref={fusionRef}
            className="w-full p-6 rounded-3xl bg-teal-deep text-cream-soft text-center font-mono space-y-3 shadow-xl"
          >
            <span className="text-xs uppercase tracking-widest text-cream/70 block">FEATURE FUSION PIPELINE</span>
            <div className="text-lg font-bold">MACHINE LEARNING CLASSIFICATION</div>
            <span className="text-[11px] text-cream/80 block">Affective Emotion & Cognitive Signal Detection</span>
          </div>
        </div>
      </div>

      <div className="font-mono text-xs text-teal-deep/60 text-center uppercase tracking-widest">
        MULTIMODAL SIGNAL FUSION ARCHITECTURE
      </div>
    </section>
  );
};
