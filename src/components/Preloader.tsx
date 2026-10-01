import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onEnter: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-cream text-dark-text flex flex-col justify-between p-8 sm:p-16 select-none font-mono">
      {/* Top Banner */}
      <div className="flex justify-between items-center text-xs tracking-widest uppercase text-teal-deep font-bold">
        <span>INTERACTIVE EXPERIENCE</span>
        <span>2025 — 2028</span>
      </div>

      {/* Main Title Center */}
      <div className="my-auto max-w-4xl">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-display font-extrabold tracking-tighter text-dark-text leading-none mb-4">
          NAITIK<br />
          <span className="text-teal-deep">DONDA</span>
        </h1>
        <p className="text-sm sm:text-lg font-sans text-dark-text/75 max-w-xl">
          B.Tech Data Science · AI/ML Systems · Full-Stack Development
        </p>
      </div>

      {/* Bottom Progress / Enter Action */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-beige-border pt-6">
        <div>
          <span className="text-[10px] text-teal-deep block uppercase tracking-widest mb-1">LOADING SEQUENCE</span>
          <div className="flex items-center space-x-3">
            <div className="w-48 sm:w-64 h-2 bg-beige-border rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-deep transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-bold text-teal-deep">{progress}%</span>
          </div>
        </div>

        {isReady ? (
          <button
            onClick={onEnter}
            className="px-10 py-4 bg-teal-deep text-cream-soft rounded-full font-display font-bold text-sm tracking-wider uppercase hover:bg-teal-dark transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse"
          >
            ENTER EXPERIENCE →
          </button>
        ) : (
          <span className="text-xs text-dark-text/60 animate-pulse uppercase tracking-widest">
            INITIALIZING ASSETS...
          </span>
        )}
      </div>
    </div>
  );
};
