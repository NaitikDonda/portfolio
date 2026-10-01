import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 md:px-8 bg-teal-dark text-cream-soft border-t border-teal-deep">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-display font-bold text-cream-soft">{PERSONAL_DATA.name}</h3>
          <p className="text-xs font-mono text-cream-card/70 mt-1">{PERSONAL_DATA.title}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs font-mono text-cream-card/80">
          <a href="#home" className="hover:text-cream-soft transition-colors">Home</a>
          <a href="#about" className="hover:text-cream-soft transition-colors">About</a>
          <a href="#projects" className="hover:text-cream-soft transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cream-soft transition-colors">Experience</a>
          <a href="#contact" className="hover:text-cream-soft transition-colors">Contact</a>
        </div>

        <div className="text-xs font-mono text-cream-card/60">
          © {new Date().getFullYear()} Naitik Donda. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
