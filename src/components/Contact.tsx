import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate smooth submission delay & trigger confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#0F5C5B', '#083B3A', '#DCCFB8', '#FFFDF7']
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-cream border-t border-beige-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="flex items-center space-x-3 text-teal-deep font-mono text-xs uppercase tracking-widest mb-3">
                <span className="w-8 h-px bg-teal-deep" />
                <span>07 / GET IN TOUCH</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-text tracking-tight">
                Let's build something meaningful.
              </h2>
              <p className="text-dark-text/75 text-base sm:text-lg mt-4 max-w-xl">
                Open for Data Science roles, local AI development, full-stack web platforms, and mobile engineering projects.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${PERSONAL_DATA.contact.email}`}
                className="flex items-center space-x-4 p-5 rounded-2xl bg-cream-card border border-beige-border hover:border-teal-deep/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-deep text-cream-soft flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-dark-text/60 uppercase">Direct Email</span>
                  <p className="text-lg font-display font-bold text-dark-text group-hover:text-teal-deep transition-colors">
                    {PERSONAL_DATA.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-4 p-5 rounded-2xl bg-cream-card border border-beige-border hover:border-teal-deep/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-deep text-cream-soft flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-dark-text/60 uppercase">Phone</span>
                  <p className="text-lg font-display font-bold text-dark-text group-hover:text-teal-deep transition-colors">
                    {PERSONAL_DATA.contact.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-cream-card border border-beige-border">
                <div className="w-12 h-12 rounded-xl bg-teal-deep text-cream-soft flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-dark-text/60 uppercase">Location</span>
                  <p className="text-lg font-display font-bold text-dark-text">
                    {PERSONAL_DATA.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                href={PERSONAL_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-cream-soft border border-beige-border font-mono text-xs text-dark-text hover:bg-teal-deep hover:text-cream-soft transition-all flex items-center space-x-2"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-cream-soft border border-beige-border font-mono text-xs text-dark-text hover:bg-teal-deep hover:text-cream-soft transition-all flex items-center space-x-2"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Side Animated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-cream-card p-8 sm:p-10 rounded-3xl border border-beige-border shadow-md"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-teal-deep text-cream-soft mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-dark-text">Message Received!</h3>
                <p className="text-sm text-dark-text/70 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Naitik will get back to you shortly at {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 bg-teal-deep text-cream-soft rounded-full text-xs font-mono font-medium"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-display font-bold text-dark-text">Send a Message</h3>

                <div>
                  <label className="block text-xs font-mono text-dark-text/70 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-cream-soft border border-beige-border text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-teal-deep font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-dark-text/70 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-cream-soft border border-beige-border text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-teal-deep font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-dark-text/70 uppercase mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share project details or inquiry..."
                    className="w-full px-4 py-3.5 rounded-xl bg-cream-soft border border-beige-border text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-teal-deep font-sans text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-teal-deep text-cream-soft rounded-xl font-medium text-sm hover:bg-teal-dark transition-all duration-300 shadow-md flex items-center justify-center space-x-2 group disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
