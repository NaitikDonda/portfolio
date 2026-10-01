import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { SceneOpening } from './components/SceneOpening';
import { SceneAbout } from './components/SceneAbout';
import { SceneBuilder } from './components/SceneBuilder';
import { SceneBackbone } from './components/SceneBackbone';
import { SceneIpl } from './components/SceneIpl';
import { SceneCogniscan } from './components/SceneCogniscan';
import { SceneExperience } from './components/SceneExperience';
import { SceneSkills } from './components/SceneSkills';
import { SceneEducation } from './components/SceneEducation';
import { SceneAchievements } from './components/SceneAchievements';
import { SceneContact } from './components/SceneContact';
import { ResumeModal } from './components/ResumeModal';
import { TerminalModal } from './components/TerminalModal';

export function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [currentScene, setCurrentScene] = useState(1);

  useEffect(() => {
    if (!hasEntered) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const scenes = [
        'scene-01', 'scene-02', 'scene-03', 'scene-04',
        'scene-05', 'scene-06', 'scene-07', 'scene-08',
        'scene-09', 'scene-10', 'scene-11'
      ];

      for (let i = 0; i < scenes.length; i++) {
        const el = document.getElementById(scenes[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentScene(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, [hasEntered]);

  return (
    <div className="min-h-screen bg-cream text-dark-text font-sans relative selection:bg-teal-deep selection:text-cream-soft overflow-x-hidden">
      {!hasEntered && (
        <Preloader onEnter={() => setHasEntered(true)} />
      )}

      {hasEntered && (
        <>
          <CustomCursor />
          <Navbar
            currentScene={currentScene}
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
            onOpenTerminalModal={() => setIsTerminalModalOpen(true)}
          />

          <main>
            <SceneOpening />
            <SceneAbout />
            <SceneBuilder />
            <SceneBackbone />
            <SceneIpl />
            <SceneCogniscan />
            <SceneExperience />
            <SceneSkills />
            <SceneEducation />
            <SceneAchievements />
            <SceneContact />
          </main>

          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />

          <TerminalModal
            isOpen={isTerminalModalOpen}
            onClose={() => setIsTerminalModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;
