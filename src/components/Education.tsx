import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 md:px-8 bg-cream border-t border-beige-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center space-x-3 text-teal-deep font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-teal-deep" />
            <span>04 / ACADEMIC BACKGROUND</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-text tracking-tight">
            Education & Qualifications.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="bg-cream-card rounded-3xl p-8 border border-beige-border shadow-sm flex flex-col justify-between group hover:border-teal-deep/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-deep text-cream-soft flex items-center justify-center font-bold shadow-md">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 bg-cream-soft border border-beige-border rounded-full font-mono text-xs font-semibold text-teal-deep">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-dark-text tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-teal-deep mb-4">{edu.institution}</p>

                <div className="flex items-center space-x-2 text-xs font-mono text-dark-text/70 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-teal-deep" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-beige-border flex items-center justify-between bg-cream-soft p-4 rounded-2xl">
                <span className="text-xs font-mono text-dark-text/70 uppercase tracking-wider">Score / Grade</span>
                <span className="text-sm font-mono font-bold text-teal-deep bg-teal-deep/10 px-3 py-1 rounded-full">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
