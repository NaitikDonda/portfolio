import React, { useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'normal' | 'hover' | 'project' | 'link'>('normal');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const projectCard = target.closest('.project-visual-hover');
      const interactiveLink = target.closest('a, button, .interactive-hover');

      if (projectCard) {
        setCursorType('project');
        setCursorText('VIEW');
      } else if (interactiveLink) {
        setCursorType('link');
        setCursorText('OPEN');
      } else if (target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'SPAN') {
        setCursorType('hover');
        setCursorText('');
      } else {
        setCursorType('normal');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot / Expanding Ring */}
      <div
        className="pointer-events-none fixed z-50 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-widest text-cream-soft uppercase transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: cursorType === 'project' ? '64px' : cursorType === 'link' ? '48px' : cursorType === 'hover' ? '32px' : '10px',
          height: cursorType === 'project' ? '64px' : cursorType === 'link' ? '48px' : cursorType === 'hover' ? '32px' : '10px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: cursorType === 'project' ? '#0F5C5B' : cursorType === 'link' ? '#073C3B' : cursorType === 'hover' ? 'rgba(15, 92, 91, 0.4)' : '#0F5C5B',
          opacity: cursorType === 'hover' ? 0.6 : 0.95,
          border: cursorType !== 'normal' ? '1px solid rgba(247, 241, 227, 0.4)' : 'none'
        }}
      >
        {cursorText}
      </div>

      {/* Subtle Depth Ring */}
      <div
        className="pointer-events-none fixed z-40 rounded-full border border-teal-deep/30 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: cursorType !== 'normal' ? '72px' : '36px',
          height: cursorType !== 'normal' ? '72px' : '36px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
