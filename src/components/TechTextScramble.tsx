import React, { useState, useEffect, useRef } from 'react';

interface ScrambleProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
}

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const TechTextScramble: React.FC<ScrambleProps> = ({ 
  text, 
  className = "", 
  scrambleSpeed = 30 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);

  const scramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        isScrambling.current = false;
      }
      iteration += 1;
    }, scrambleSpeed);
  };

  useEffect(() => {
    scramble();
  }, [text]);

  return (
    <span 
      onMouseEnter={scramble} 
      className={`font-mono cursor-pointer hover:text-brand-accent transition-colors ${className}`}
    >
      {displayText}
    </span>
  );
};