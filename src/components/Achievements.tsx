import { Trophy, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-4 md:px-8 bg-cream border-t border-beige-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center space-x-3 text-teal-deep font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-teal-deep" />
            <span>06 / RECOGNITION & HACKATHONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-text tracking-tight">
            Hackathons & Credentials.
          </h2>
        </div>

        <div className="mb-12 bg-teal-deep text-cream-soft rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute right-0 bottom-0 opacity-10 font-display text-[180px] font-extrabold leading-none pointer-events-none select-none">
            08
          </div>

          <div className="space-y-4 max-w-2xl relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-cream-soft/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-cream-soft border border-cream/20">
              <Trophy className="w-4 h-4 text-cream-soft" />
              <span>Smart India Hackathon 2025 & 2026 Participant</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-bold text-cream-soft">
              8 National Hackathons Competed
            </h3>

            <p className="text-cream-card/80 text-sm sm:text-base leading-relaxed">
              Demonstrated solution building under tight time constraints. Participated in major national competitive hackathons including SIH 2025 & SIH 2026, building software prototypes under rapid iteration.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-teal-dark rounded-2xl border border-cream/20 min-w-[200px]">
            <span className="text-6xl sm:text-7xl font-display font-extrabold text-cream-soft">8+</span>
            <span className="text-xs font-mono text-cream/70 uppercase tracking-wider mt-1">Hackathons</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="bg-cream-card rounded-3xl p-6 border border-beige-border shadow-sm hover:border-teal-deep/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-6 h-6 text-teal-deep" />
                  <span className="px-3 py-1 bg-cream-soft border border-beige-border rounded-full text-[11px] font-mono text-teal-dark">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-xl font-display font-bold text-dark-text mb-2">{item.title}</h4>
                <p className="text-sm text-dark-text/75 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
