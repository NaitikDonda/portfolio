import React, { useState } from 'react';
import { Terminal as TerminalIcon, X, Copy, Check } from 'lucide-react';
import { PERSONAL_DATA, PROJECTS, EXPERIENCES } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'naitik --help',
      output: `AVAILABLE COMMANDS:
  naitik bio        - Display developer profile & status
  naitik projects   - List core AI/ML & full-stack projects
  naitik experience - Display career experience timeline
  naitik contact    - Show verified email & phone details
  clear             - Clear terminal screen`
    }
  ]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let output = '';

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (trimmed === 'naitik --help' || trimmed === 'help') {
      output = `AVAILABLE COMMANDS:
  naitik bio        - Display developer profile & status
  naitik projects   - List core AI/ML & full-stack projects
  naitik experience - Display career experience timeline
  naitik contact    - Show verified email & phone details
  clear             - Clear terminal screen`;
    } else if (trimmed === 'naitik bio') {
      output = `NAME: ${PERSONAL_DATA.name}
TITLE: ${PERSONAL_DATA.title}
STATUS: ${PERSONAL_DATA.status} (${PERSONAL_DATA.batch})
LOCATION: ${PERSONAL_DATA.contact.location}
BIO: ${PERSONAL_DATA.intro}`;
    } else if (trimmed === 'naitik projects') {
      output = PROJECTS.map(p => `[${p.sceneNumber}] ${p.title} (${p.category})\n    Tech: ${p.tech.join(', ')}\n    Desc: ${p.description}`).join('\n\n');
    } else if (trimmed === 'naitik experience') {
      output = EXPERIENCES.map(e => `• ${e.role} @ ${e.company} [${e.period}]\n  ${e.highlights.join('\n  ')}`).join('\n\n');
    } else if (trimmed === 'naitik contact') {
      output = `EMAIL: ${PERSONAL_DATA.contact.email}\nPHONE: ${PERSONAL_DATA.contact.phone}\nGITHUB: ${PERSONAL_DATA.contact.github}\nLINKEDIN: ${PERSONAL_DATA.contact.linkedin}`;
    } else {
      output = `Command not recognized: "${trimmed}". Type "naitik --help" for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setInput('');
  };

  const copyContact = () => {
    navigator.clipboard.writeText(`npx naitikdonda`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-text/70 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-teal-dark border border-cream/20 rounded-2xl shadow-2xl overflow-hidden font-mono flex flex-col max-h-[80vh]">
        <div className="px-4 py-3 bg-teal-deep flex items-center justify-between border-b border-cream/15 text-cream-soft text-xs">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span>naitik@developer-cli ~ (zsh)</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={copyContact}
              className="px-2.5 py-1 rounded bg-teal-dark text-[10px] text-cream/90 flex items-center space-x-1 hover:bg-cream/10"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>npx naitikdonda</span>
            </button>
            <button onClick={onClose} className="p-1 text-cream/70 hover:text-cream">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs text-cream/90 font-mono">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center space-x-2 text-emerald-400">
                <span>❯</span>
                <span className="font-bold">{item.cmd}</span>
              </div>
              <pre className="text-cream/80 whitespace-pre-wrap leading-relaxed pl-4 font-mono text-[11px]">
                {item.output}
              </pre>
            </div>
          ))}
        </div>

        <form onSubmit={handleCommand} className="p-4 bg-teal-deep/50 border-t border-cream/10 flex items-center space-x-2 text-xs">
          <span className="text-emerald-400 font-bold">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'naitik bio', 'naitik projects', or 'naitik --help'..."
            className="flex-1 bg-transparent text-cream-soft focus:outline-none font-mono text-xs placeholder-cream/40"
          />
          <button type="submit" className="px-3 py-1 bg-teal-deep text-cream-soft rounded text-[11px] hover:bg-teal-hover">
            RUN
          </button>
        </form>
      </div>
    </div>
  );
};
