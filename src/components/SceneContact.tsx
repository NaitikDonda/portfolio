import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/portfolioData';

export const SceneContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#0F5C5B', '#073C3B', '#D8CCB5', '#FFFDF8'],
      });
    }, 600);
  };

  return (
    <section
      id="scene-11"
      className="relative min-h-screen w-full bg-cream text-dark-text flex flex-col justify-between p-6 md:p-16 overflow-hidden border-t border-beige-border"
    >
      <div className="flex justify-between items-center font-mono text-xs text-teal-deep tracking-widest uppercase z-10">
        <span>SCENE 11</span>
        <span>FINAL CHAPTER</span>
      </div>

      <div className="my-auto max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Narrative */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-deep font-bold">CONTACT</span>
            <h2 className="text-5xl sm:text-7xl font-display font-bold text-dark-text tracking-tight leading-none">
              Let's build something meaningful.
            </h2>
            <p className="text-base sm:text-lg text-dark-text/80 font-sans">
              Open for Data Science roles, local AI development, full-stack web platforms, and mobile engineering projects.
            </p>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-cream-card border border-beige-border">
              <span className="text-[10px] text-dark-text/60 uppercase block">EMAIL</span>
              <a href={`mailto:${PERSONAL_DATA.contact.email}`} className="text-lg font-bold text-teal-deep hover:underline">
                {PERSONAL_DATA.contact.email}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-cream-card border border-beige-border">
              <span className="text-[10px] text-dark-text/60 uppercase block">PHONE</span>
              <a href={`tel:${PERSONAL_DATA.contact.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-teal-deep hover:underline">
                {PERSONAL_DATA.contact.phone}
              </a>
            </div>

            {/* Verified Social Profile Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={PERSONAL_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-deep text-cream-soft rounded-full font-bold hover:bg-teal-dark transition-all shadow"
              >
                LINKEDIN PROFILE ↗
              </a>
              <a
                href={PERSONAL_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cream-card text-teal-deep rounded-full border border-beige-border font-bold hover:bg-teal-deep hover:text-cream-soft transition-all shadow-sm"
              >
                GITHUB PROFILE ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column Contact Form */}
        <div className="lg:col-span-6 bg-cream-card p-8 sm:p-10 rounded-3xl border border-beige-border shadow-xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <h3 className="text-3xl font-display font-bold text-teal-deep">Message Sent!</h3>
              <p className="text-sm font-sans text-dark-text/80">
                Thank you {formData.name}. Naitik will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 bg-teal-deep text-cream-soft rounded-full text-xs font-mono"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <h3 className="text-2xl font-display font-bold text-dark-text mb-4">Send a Message</h3>

              <div>
                <label className="block text-xs font-mono text-dark-text/70 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-xl bg-cream-soft border border-beige-border text-dark-text text-sm focus:outline-none focus:border-teal-deep"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-dark-text/70 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-cream-soft border border-beige-border text-dark-text text-sm focus:outline-none focus:border-teal-deep"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-dark-text/70 uppercase mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share project details or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-cream-soft border border-beige-border text-dark-text text-sm focus:outline-none focus:border-teal-deep resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-teal-deep text-cream-soft rounded-xl font-mono font-bold text-xs uppercase tracking-wider hover:bg-teal-dark transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="pt-8 border-t border-beige-border flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-dark-text/60 gap-2">
        <span>© 2026 NAITIK DONDA</span>
        <span>B.Tech Data Science · Developer · Builder</span>
      </div>
    </section>
  );
};
