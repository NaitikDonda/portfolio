import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SceneBackbone: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const doc1Ref = useRef<HTMLDivElement>(null);
  const doc2Ref = useRef<HTMLDivElement>(null);
  const doc3Ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineSeparatorRef = useRef<HTMLDivElement>(null);

  const backboneProject = PROJECTS.find((p) => p.id === 'backbone');

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

      tl.fromTo(doc1Ref.current, { x: '-40vw', y: '-30vh', rotate: -15 }, { x: '0vw', y: '0vh', rotate: 0, ease: 'power2.out' }, 0)
        .fromTo(doc2Ref.current, { x: '40vw', y: '-20vh', rotate: 20 }, { x: '0vw', y: '0vh', rotate: 0, ease: 'power2.out' }, 0)
        .fromTo(doc3Ref.current, { x: '0vw', y: '40vh', rotate: -10 }, { x: '0vw', y: '0vh', rotate: 0, ease: 'power2.out' }, 0)
        .fromTo(timelineRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, ease: 'power2.inOut' }, 0.3)
        .to([doc1Ref.current, doc2Ref.current, doc3Ref.current], { opacity: 0, scale: 0.8 }, 0.7)
        .fromTo(lineSeparatorRef.current, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0.8);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-04"
      ref={containerRef}
      className="relative min-h-screen w-full bg-cream text-dark-text flex flex-col justify-between p-6 md:p-16 overflow-hidden border-t border-beige-border"
    >
      <div className="flex justify-between items-center font-mono text-xs text-teal-deep tracking-widest uppercase z-10">
        <span>SCENE 04</span>
        <span>{backboneProject?.category}</span>
      </div>

      <div className="relative z-10 my-auto max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block px-3 py-1 bg-teal-deep/10 text-teal-deep rounded-full font-mono text-xs font-semibold">
            PROJECT 01 — {backboneProject?.date}
          </div>

          <h2 className="text-5xl sm:text-7xl font-display font-extrabold text-dark-text tracking-tight leading-none">
            {backboneProject?.title}
          </h2>

          <p className="text-xl sm:text-2xl font-display text-teal-deep font-semibold">
            "{backboneProject?.subtitle}"
          </p>

          <p className="text-sm sm:text-base text-dark-text/80 leading-relaxed font-sans">
            {backboneProject?.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
            {backboneProject?.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 bg-cream-soft border border-beige-border rounded-lg text-teal-dark font-medium">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs">
            {backboneProject?.githubUrl && (
              <a
                href={backboneProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-teal-deep text-cream-soft rounded-full font-medium hover:bg-teal-dark transition-all shadow flex items-center space-x-2"
              >
                <span>GITHUB REPOSITORY ↗</span>
              </a>
            )}
            {backboneProject?.apkUrl && (
              <a
                href={backboneProject.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-cream-card text-teal-deep border border-teal-deep/30 rounded-full font-medium hover:bg-teal-deep hover:text-cream-soft transition-all shadow flex items-center space-x-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD APK ↗</span>
              </a>
            )}
          </div>

          <div className="pt-2 border-t border-beige-border font-mono text-xs text-teal-deep font-bold">
            ✓ 40+ Evaluation Documents Engineered & Validated
          </div>
        </div>

        <div className="lg:col-span-6 relative min-h-[380px] flex items-center justify-center">
          <div ref={timelineRef} className="absolute w-full h-1 bg-teal-deep rounded-full z-10 flex items-center justify-between px-4">
            <span className="w-4 h-4 rounded-full bg-teal-deep border-2 border-cream animate-ping" />
            <span className="font-mono text-[10px] bg-teal-deep text-cream-soft px-2 py-0.5 rounded">CHRONOLOGICAL PATIENT TIMELINE</span>
            <span className="w-4 h-4 rounded-full bg-teal-deep border-2 border-cream" />
          </div>

          <div
            ref={doc1Ref}
            className="absolute top-4 left-4 p-4 rounded-2xl bg-cream-card border border-beige-border shadow-lg font-mono text-xs max-w-[220px]"
          >
            <span className="text-[10px] text-teal-deep block font-bold">PDF LAB REPORT</span>
            <p className="text-[11px] text-dark-text/80 mt-1">Hemoglobin: 14.2 g/dL</p>
            <span className="text-[9px] text-dark-text/50 block mt-2">OCR Extracted</span>
          </div>

          <div
            ref={doc2Ref}
            className="absolute top-12 right-4 p-4 rounded-2xl bg-cream-card border border-beige-border shadow-lg font-mono text-xs max-w-[220px]"
          >
            <span className="text-[10px] text-teal-deep block font-bold">PRESCRIPTION</span>
            <p className="text-[11px] text-dark-text/80 mt-1">Local Ollama Qwen3 1.7B</p>
            <span className="text-[9px] text-teal-deep font-semibold block mt-2">100% Offline / Local</span>
          </div>

          <div
            ref={doc3Ref}
            className="absolute bottom-6 left-12 p-4 rounded-2xl bg-cream-card border border-beige-border shadow-lg font-mono text-xs max-w-[240px]"
          >
            <span className="text-[10px] text-teal-deep block font-bold">DISCHARGE SUMMARY</span>
            <p className="text-[11px] text-dark-text/80 mt-1">Temporal ordering saved in SQLite</p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div ref={lineSeparatorRef} className="w-full h-1 bg-teal-deep origin-left transform scale-x-0" />
      </div>
    </section>
  );
};
