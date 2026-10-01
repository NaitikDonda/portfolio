import React from 'react';
import { X, Download, GraduationCap, Briefcase, Code, Award, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_DATA, PROJECTS, EXPERIENCES, EDUCATION_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'experience' | 'projects' | 'education' | 'skills'>('all');

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/NaitikDonda_Resume.pdf';
    link.download = 'NaitikDonda_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-text/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-cream-soft rounded-3xl border border-teal-deep/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="p-6 bg-teal-deep text-cream-soft flex items-center justify-between border-b border-teal-dark">
          <div>
            <span className="text-xs font-mono text-cream-card/70 uppercase tracking-widest">Interactive Resume View</span>
            <h2 className="text-2xl font-display font-bold text-cream-soft">{PERSONAL_DATA.name}</h2>
            <p className="text-xs font-mono text-cream-card/90 mt-0.5">{PERSONAL_DATA.title}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownloadPdf}
              className="px-4 py-2 bg-cream-soft text-teal-dark rounded-full text-xs font-mono font-semibold hover:bg-cream transition-colors flex items-center space-x-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF Resume</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-teal-dark text-cream-soft hover:bg-teal-hover transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-6 py-3 bg-cream border-b border-beige-border overflow-x-auto text-xs font-mono">
          {[
            { id: 'all', label: 'Complete Resume' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'education', label: 'Education' },
            { id: 'skills', label: 'Skills' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-teal-deep text-cream-soft font-semibold'
                  : 'bg-cream-card text-dark-text/70 hover:bg-beige-border/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-dark-text font-sans">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-cream border border-beige-border text-xs font-mono">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-teal-deep" />
              <span>{PERSONAL_DATA.contact.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-teal-deep" />
              <span>{PERSONAL_DATA.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-teal-deep" />
              <span>{PERSONAL_DATA.contact.location}</span>
            </div>
          </div>

          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-teal-deep flex items-center space-x-2 border-b border-beige-border pb-2">
                <GraduationCap className="w-5 h-5 text-teal-deep" />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-cream-card border border-beige-border">
                    <div className="flex justify-between font-semibold text-sm">
                      <span>{edu.degree} — {edu.institution}</span>
                      <span className="font-mono text-teal-deep">{edu.period}</span>
                    </div>
                    <p className="text-xs text-dark-text/70 mt-1 font-mono">{edu.grade} • {edu.location}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-teal-deep flex items-center space-x-2 border-b border-beige-border pb-2">
                <Briefcase className="w-5 h-5 text-teal-deep" />
                <span>Professional Experience</span>
              </h3>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-cream-card border border-beige-border space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>{exp.role} @ <strong className="text-teal-deep">{exp.company}</strong></span>
                      <span className="font-mono text-xs text-teal-deep">{exp.period}</span>
                    </div>
                    <p className="text-xs font-mono text-dark-text/60">{exp.location}</p>
                    <ul className="space-y-1.5 pt-2 text-xs text-dark-text/80">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-teal-deep font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'projects') && (
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-teal-deep flex items-center space-x-2 border-b border-beige-border pb-2">
                <Code className="w-5 h-5 text-teal-deep" />
                <span>Projects</span>
              </h3>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-cream-card border border-beige-border space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>{proj.title} <span className="font-mono text-xs text-teal-deep">({proj.subtitle})</span></span>
                      <span className="font-mono text-xs text-teal-deep">{proj.date}</span>
                    </div>
                    <p className="text-xs text-dark-text/80 leading-relaxed">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-cream border border-beige-border rounded text-[10px] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'skills') && (
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-teal-deep flex items-center space-x-2 border-b border-beige-border pb-2">
                <Award className="w-5 h-5 text-teal-deep" />
                <span>Skills & Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-cream-card border border-beige-border">
                    <h4 className="text-xs font-mono font-bold text-teal-deep uppercase mb-2">{cat.title}</h4>
                    <p className="text-xs text-dark-text/80 leading-relaxed">
                      {cat.skills.map(s => s.name).join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
