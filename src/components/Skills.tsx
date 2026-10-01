import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getConnectionsText = (connections: string[]) => {
    const map: Record<string, string> = {
      'backbone': 'BACKBONE (Local AI Medical Timeline)',
      'ipl-predictor': 'IPL Match Predictor (ML Model)',
      'cogniscan': 'CogniScan (Multimodal OpenCV & Speech)',
      'zeroone': 'ZeroOne Tech Labs Intern',
      'freelance': '10+ Freelance Production Web Apps',
      'ioft': 'IOFT AR/VR Unity Development'
    };
    return connections.map(c => map[c] || c);
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-cream border-t border-beige-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center space-x-3 text-teal-deep font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-teal-deep" />
            <span>05 / TECHNICAL ECOSYSTEM</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-text tracking-tight">
            Skill Matrix & Relationships.
          </h2>
          <p className="text-dark-text/70 text-base sm:text-lg mt-3 max-w-2xl">
            Interactive skill map showing real connections between technology competencies and portfolio projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-cream-card rounded-3xl p-8 border border-beige-border shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-teal-deep font-bold mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-deep" />
                  <span>{category.title}</span>
                </div>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  {category.skills.map((skill, sIdx) => {
                    const isSelected = selectedSkill === skill.name;

                    return (
                      <button
                        key={sIdx}
                        onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 border text-left flex items-center space-x-2 ${
                          isSelected
                            ? 'bg-teal-deep text-cream-soft border-teal-deep font-semibold shadow-md scale-105'
                            : 'bg-cream-soft text-dark-text border-beige-border hover:border-teal-deep/50 hover:bg-cream-pure'
                        }`}
                      >
                        <span>{skill.name}</span>
                        {skill.connections.length > 0 && (
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${isSelected ? 'bg-cream-soft text-teal-deep font-bold' : 'bg-beige-border/60 text-teal-dark'}`}>
                            {skill.connections.length}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-beige-border">
                <AnimatePresence mode="wait">
                  {selectedSkill ? (
                    <motion.div
                      key={selectedSkill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-teal-deep text-cream-soft rounded-2xl space-y-2 text-xs font-mono"
                    >
                      <div className="flex items-center justify-between text-teal-soft border-b border-cream/15 pb-2">
                        <span className="font-bold">{selectedSkill}</span>
                        <span>Linked Projects & Work</span>
                      </div>
                      {(() => {
                        let matches: string[] = [];
                        category.skills.forEach(s => {
                          if (s.name === selectedSkill) matches = s.connections;
                        });
                        const textList = getConnectionsText(matches);
                        return textList.length > 0 ? (
                          <div className="space-y-1 pt-1 text-[11px] text-cream/90">
                            {textList.map((t, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <ArrowUpRight className="w-3.5 h-3.5 text-teal-soft" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[11px] text-cream/70 italic">Core foundational engineering language</p>
                        );
                      })()}
                    </motion.div>
                  ) : (
                    <div className="p-3 bg-cream-soft rounded-2xl text-[11px] font-mono text-dark-text/60 text-center flex items-center justify-center space-x-2">
                      <Network className="w-3.5 h-3.5 text-teal-deep" />
                      <span>Click any skill pill to inspect connected portfolio projects</span>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
