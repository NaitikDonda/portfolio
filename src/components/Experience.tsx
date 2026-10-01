import React from 'react';
import { MapPin, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';
import { EXPERIENCES, type Experience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-cream border-t border-beige-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center space-x-3 text-teal-deep font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-teal-deep" />
            <span>03 / CAREER TIMELINE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-text tracking-tight">
            Work & Engineering Experience.
          </h2>
        </div>

        <div className="relative pl-6 md:pl-10 border-l-2 border-teal-deep/30 space-y-16">
          {EXPERIENCES.map((exp: Experience) => (
            <div key={exp.id} className="relative group">
              <div className="bg-cream-card rounded-3xl p-6 sm:p-8 border border-beige-border shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-beige-border pb-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-teal-deep uppercase font-semibold">
                      {exp.company}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-dark-text tracking-tight mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 font-mono text-xs text-dark-text/70">
                    <Calendar className="w-3.5 h-3.5 text-teal-deep" />
                    <span>{exp.period}</span>
                    <MapPin className="w-3.5 h-3.5 text-teal-deep ml-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-dark-text/85">
                      <CheckCircle2 className="w-4 h-4 text-teal-deep shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {exp.metrics && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-beige-border">
                    {exp.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="flex items-center space-x-1.5 px-3 py-1 bg-teal-deep/10 text-teal-deep rounded-full text-xs font-mono font-medium"
                      >
                        <TrendingUp className="w-3 h-3" />
                        <span>{metric.label}: {metric.value}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
