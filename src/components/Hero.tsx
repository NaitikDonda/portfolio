import React from 'react';
import { ArrowDown, Download, Code2, Brain, Activity, Terminal } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden bg-cream bg-grid-pattern"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-teal-deep/10 blur-[100px] transition-transform duration-300"
          style={{
            transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)`
          }}
        />

        <div
          className="absolute top-1/3 right-[10%] w-64 h-64 border border-teal-deep/20 rounded-3xl hidden lg:block transition-transform duration-300"
          style={{
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px) rotate(${mousePos.x * 15}deg)`
          }}
        />

        <div
          className="absolute bottom-1/4 left-[8%] w-48 h-48 border border-teal-deep/15 rounded-full hidden lg:block transition-transform duration-300"
          style={{
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
          }}
        />

        <div className="absolute inset-0 opacity-40">
          {[
            { top: '20%', left: '15%', label: 'Scikit-learn' },
            { top: '35%', left: '80%', label: 'Qwen3 1.7B' },
            { top: '70%', left: '18%', label: 'Flutter' },
            { top: '75%', left: '75%', label: 'React.js' },
          ].map((point, index) => (
            <div
              key={index}
              style={{ top: point.top, left: point.left }}
              className="absolute hidden md:flex items-center space-x-2 bg-cream-soft/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal-deep/20 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-teal-deep animate-ping" />
              <span className="text-[11px] font-mono text-teal-dark font-medium">{point.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cream-card border border-teal-deep/20 text-xs font-mono text-teal-dark mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-deep opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-deep"></span>
          </span>
          <span>{PERSONAL_DATA.status}</span>
          <span className="text-dark-text/40">•</span>
          <span className="text-teal-deep font-semibold">{PERSONAL_DATA.batch}</span>
        </div>

        <h2 className="text-base md:text-xl font-mono uppercase tracking-[0.25em] text-teal-deep font-semibold mb-3">
          {PERSONAL_DATA.name}
        </h2>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-dark-text leading-[1.08] tracking-tight mb-8 max-w-4xl">
          Building <span className="text-teal-deep italic font-serif">Intelligent</span> Digital Experiences.
        </h1>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 max-w-3xl">
          {PERSONAL_DATA.title.split('•').map((item, index) => (
            <span
              key={index}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-cream-soft border border-beige-border text-dark-text shadow-sm"
            >
              {item.trim()}
            </span>
          ))}
        </div>

        <p className="text-base sm:text-lg text-dark-text/80 leading-relaxed max-w-2xl mb-10 font-normal">
          {PERSONAL_DATA.intro}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-8 py-4 bg-teal-deep text-cream-soft rounded-full font-medium text-sm hover:bg-teal-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center space-x-3 group"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onOpenResumeModal}
            className="w-full sm:w-auto px-8 py-4 bg-cream-card border-2 border-teal-deep text-teal-deep rounded-full font-medium text-sm hover:bg-teal-deep hover:text-cream-soft transition-all duration-300 transform hover:-translate-y-1 shadow-sm flex items-center justify-center space-x-3"
          >
            <Download className="w-4 h-4" />
            <span>Interactive Resume</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {[
            { icon: Brain, title: "Data Science", desc: "ML Models & Analytics" },
            { icon: Terminal, title: "Local AI", desc: "Ollama & OCR Pipelines" },
            { icon: Code2, title: "Full-Stack", desc: "React & REST APIs" },
            { icon: Activity, title: "Flutter Dev", desc: "Cross-Platform Mobile" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-cream-soft/60 border border-beige-border text-left hover:border-teal-deep/40 transition-colors"
            >
              <item.icon className="w-5 h-5 text-teal-deep mb-2" />
              <h4 className="font-display font-semibold text-sm text-dark-text">{item.title}</h4>
              <p className="text-[11px] text-dark-text/60 font-mono mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={scrollToWork}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center text-teal-deep/60 hover:text-teal-deep transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest mb-1">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
