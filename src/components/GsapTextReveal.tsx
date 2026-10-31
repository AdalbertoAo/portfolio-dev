import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface GsapTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const GsapTextReveal: React.FC<GsapTextRevealProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  stagger = 0.03 
}) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.gsap-char');

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 40,
        rotateX: -90,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        delay,
        stagger,
        ease: 'back.out(1.7)',
      }
    );
  }, { scope: containerRef });

  // Dividir o texto em palavras e depois em caracteres mantendo espaços
  const words = text.split(' ');

  return (
    <h1 
      ref={containerRef} 
      className={`inline-block perspective-1000 ${className}`}
      aria-label={text}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="gsap-char inline-block origin-bottom transition-colors hover:text-brand-accent cursor-default"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};