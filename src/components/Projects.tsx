import React from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-cream border-t border-beige-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-text tracking-tight">
            Engineering Showcase.
          </h2>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project: Project) => (
            <div key={project.id} className="bg-cream-card rounded-3xl p-6 sm:p-10 border border-beige-border">
              <span className="text-xs font-mono uppercase text-teal-deep font-semibold mb-2 block">
                {project.sceneNumber} — {project.category}
              </span>
              <h3 className="text-3xl font-display font-bold text-dark-text mb-2">{project.title}</h3>
              <p className="text-sm font-mono text-dark-text/60 mb-4">{project.subtitle}</p>
              <p className="text-dark-text/85 text-base leading-relaxed mb-6">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
