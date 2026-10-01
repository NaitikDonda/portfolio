import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

// Web Audio API Ambient Sound Synthesizer for subtle story immersion
class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggleSound(): boolean {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbient();
    } else {
      this.stopAmbient();
    }

    return !this.isMuted;
  }

  private startAmbient() {
    if (!this.ctx) return;
    try {
      this.oscillator = this.ctx.createOscillator();
      this.gainNode = this.ctx.createGain();

      this.oscillator.type = 'sine';
      this.oscillator.frequency.setValueAtTime(110, this.ctx.currentTime);
      this.gainNode.gain.setValueAtTime(0.015, this.ctx.currentTime);

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);
      this.oscillator.start();
    } catch (e) {
      console.warn("Sound engine error", e);
    }
  }

  private stopAmbient() {
    if (this.oscillator) {
      try {
        this.oscillator.stop();
        this.oscillator.disconnect();
      } catch (e) {}
      this.oscillator = null;
    }
  }

  public playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {}
  }
}

export const soundInstance = new SoundEngine();

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenTerminalModal: () => void;
  currentScene: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal, onOpenTerminalModal, currentScene }) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSoundToggle = () => {
    const active = soundInstance.toggleSound();
    setIsSoundOn(active);
  };

  const navItems = [
    { label: 'HOME', href: '#scene-01' },
    { label: 'ABOUT', href: '#scene-02' },
    { label: 'WORK', href: '#scene-04' },
    { label: 'EXPERIENCE', href: '#scene-07' },
    { label: 'SKILLS', href: '#scene-08' },
    { label: 'CONTACT', href: '#scene-11' },
  ];

  const formattedSceneNumber = currentScene.toString().padStart(2, '0');

  const scrollToScene = (href: string) => {
    setIsMobileMenuOpen(false);
    soundInstance.playClick();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => scrollToScene('#scene-01')}
          className="flex items-center space-x-3 text-teal-deep font-mono font-bold text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
        >
          <span className="w-8 h-8 rounded-full bg-teal-deep text-cream-soft flex items-center justify-center text-xs">
            ND
          </span>
          <span className="hidden sm:inline text-dark-text font-display font-semibold">NAITIK DONDA</span>
        </button>

        <nav className="hidden md:flex items-center space-x-1 bg-cream-card/80 backdrop-blur-md px-5 py-2 rounded-full border border-beige-border shadow-sm">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToScene(item.href)}
              className="px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-dark-text/80 hover:text-teal-deep transition-colors rounded-full"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => {
              soundInstance.playClick();
              onOpenTerminalModal();
            }}
            className="p-2 rounded-full bg-teal-deep/10 text-teal-deep border border-teal-deep/20 hover:bg-teal-deep hover:text-cream-soft transition-all"
            title="Open Developer CLI Terminal ('naitik --help')"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-1 bg-cream-card px-3 py-1.5 rounded-full border border-beige-border text-xs font-mono text-teal-deep shadow-sm">
            <span className="font-bold">{formattedSceneNumber}</span>
            <span className="text-dark-text/40">/</span>
            <span className="text-dark-text/60">11</span>
          </div>

          <button
            onClick={handleSoundToggle}
            className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all flex items-center space-x-1.5 shadow-sm ${
              isSoundOn
                ? 'bg-teal-deep text-cream-soft border-teal-deep'
                : 'bg-cream-card text-dark-text/70 border-beige-border hover:border-teal-deep'
            }`}
            title="Toggle Ambient Audio Experience"
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span>{isSoundOn ? 'SOUND ON' : 'SOUND OFF'}</span>
          </button>

          <button
            onClick={() => {
              soundInstance.playClick();
              onOpenResumeModal();
            }}
            className="hidden lg:flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-teal-deep text-cream-soft text-xs font-mono font-medium hover:bg-teal-dark transition-all shadow"
          >
            <span>VIEW RESUME</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-teal-deep text-cream-soft"
            aria-label="Toggle Menu"
          >
            <span className="font-mono text-xs font-bold">MENU</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-cream-soft/95 backdrop-blur-xl border border-teal-deep/20 rounded-2xl p-6 shadow-2xl space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToScene(item.href)}
              className="w-full text-left py-2 px-4 rounded-xl text-sm font-mono text-dark-text hover:bg-teal-deep hover:text-cream-soft transition-all"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-beige-border space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTerminalModal();
              }}
              className="w-full py-2.5 bg-teal-dark text-cream-soft rounded-xl font-mono text-xs flex items-center justify-center space-x-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>OPEN CLI TERMINAL</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-2.5 bg-teal-deep text-cream-soft rounded-xl font-mono text-xs"
            >
              VIEW RESUME MODAL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
