import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-cream border-t border-beige-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 text-teal-deep font-mono text-xs uppercase tracking-widest mb-3"
          >
            <span className="w-8 h-px bg-teal-deep" />
            <span>01 / ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-text tracking-tight"
          >
            More than a resume.
          </motion.h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Large Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-teal-deep leading-snug">
              "I build at the intersection of Data Science, local AI models, and user-centric application engineering."
            </p>
            <p className="text-dark-text/75 text-base sm:text-lg leading-relaxed">
              Currently pursuing a B.Tech in Data Science at NMIMS MPSTME, Mumbai (2025-2028), following a Computer Engineering Diploma from Thakur Polytechnic. I don't just write scripts or build UI components — I engineer complete software products from ML data pipelines down to responsive client applications.
            </p>
          </motion.div>

          {/* Right Column: Biography & Background Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 bg-cream-soft p-8 rounded-3xl border border-beige-border shadow-sm"
          >
            <h3 className="text-xl font-display font-bold text-dark-text flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-teal-deep inline-block" />
              <span>Technical Philosophy</span>
            </h3>

            <div className="space-y-4 text-dark-text/80 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-teal-deep font-semibold">Local-First AI Systems:</strong> Architecting privacy-centric platforms like <span className="font-mono text-xs bg-beige-muted/40 px-1.5 py-0.5 rounded">BACKBONE</span> using Ollama & Qwen3 1.7B for offline medical report timeline extraction.
              </p>
              <p>
                <strong className="text-teal-deep font-semibold">Data Science & ML:</strong> Building predictive statistical systems like <span className="font-mono text-xs bg-beige-muted/40 px-1.5 py-0.5 rounded">IPL Match Predictor</span> and multimodal signal processing with OpenCV in <span className="font-mono text-xs bg-beige-muted/40 px-1.5 py-0.5 rounded">CogniScan</span>.
              </p>
              <p>
                <strong className="text-teal-deep font-semibold">Production Software Engineering:</strong> Developed 10+ client websites, built 10+ reusable production React modules at ZeroOne Tech Labs, and documented 50+ game bugs at Havoc Games.
              </p>
            </div>

            <div className="pt-4 border-t border-beige-border flex items-center justify-between font-mono text-xs text-teal-dark">
              <span>Location: Mumbai, India</span>
              <span>Available for Collaborative Engineering</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Metric Statistics Counter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-3xl bg-teal-deep text-cream-soft shadow-md text-left flex flex-col justify-between group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-cream-soft group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-mono text-cream-card/80 mt-4 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Marquee Strip */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-teal-deep uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-teal-deep" />
            <span>Tech Stack & Core Tools from Resume</span>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-cream-card border border-beige-border py-4">
            <div className="flex w-max animate-marquee-infinite space-x-6">
              {[...PERSONAL_DATA.techStrip, ...PERSONAL_DATA.techStrip].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 bg-cream-soft px-5 py-2.5 rounded-full border border-beige-border text-sm font-mono text-dark-text whitespace-nowrap shadow-sm hover:border-teal-deep transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-deep" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
