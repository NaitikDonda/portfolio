import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SceneSkills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getConnectedProjects = (connections: string[]) => {
    const map: Record<string, string> = {
      'backbone': 'BACKBONE (Local AI Medical Timeline)',
      'ipl-predictor': 'IPL Match Predictor (ML Model)',
      'cogniscan': 'CogniScan (Multimodal OpenCV & Speech)',
      'zeroone': 'ZeroOne Tech Labs Intern',
      'freelance': '10+ Freelance Production Web Apps',
      'ioft': 'IOFT AR/VR Unity Development'
    };
    return connections.map((c) => map[c] || c);
  };

  return (
    <section
      id="scene-08"
      className="relative min-h-screen w-full bg-teal-dark text-cream-soft flex flex-col justify-between p-6 md:p-16 overflow-hidden border-t border-teal-deep"
    >
      <div className="flex justify-between items-center font-mono text-xs text-cream/70 tracking-widest uppercase z-10">
        <span>SCENE 08</span>
        <span>TECHNOLOGY UNIVERSE</span>
      </div>

      <div className="my-auto max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-cream tracking-tight">
            Skill Competency Map
          </h2>
          <p className="text-xs font-mono text-cream/70">
            Click any technology node to inspect its real implementation in Naitik's portfolio.
          </p>
        </div>

        {/* Technology Universe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-teal-deep/80 border border-cream/20 shadow-xl space-y-4"
            >
              <h3 className="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => {
                  const isSelected = activeSkill === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => setActiveSkill(isSelected ? null : skill.name)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                        isSelected
                          ? 'bg-cream text-teal-dark font-bold shadow-lg scale-105'
                          : 'bg-teal-dark text-cream/80 border-cream/15 hover:border-cream/50'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.connections.length > 0 && (
                        <span className="ml-2 text-[9px] px-1.5 py-0.2 rounded-full bg-teal-deep text-cream">
                          {skill.connections.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Inspector Banner */}
              {activeSkill && (
                <div className="mt-4 p-4 rounded-2xl bg-teal-dark border border-emerald-400/30 font-mono text-xs text-cream/90 space-y-1">
                  <span className="text-[10px] text-emerald-400 uppercase font-bold">USED IN WORK:</span>
                  {(() => {
                    let connections: string[] = [];
                    category.skills.forEach((s) => {
                      if (s.name === activeSkill) connections = s.connections;
                    });
                    const projects = getConnectedProjects(connections);
                    return projects.length > 0 ? (
                      projects.map((p, i) => <p key={i} className="text-cream-soft">• {p}</p>)
                    ) : (
                      <p className="text-cream/60 italic">Core software engineering skill</p>
                    );
                  })()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="font-mono text-xs text-cream/50 text-center uppercase tracking-widest">
        ENGINEERING SKILLS SUPPORTED BY RESUME VERIFICATION
      </div>
    </section>
  );
};
