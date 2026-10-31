import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const TechCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Deteta se o cursor está sobre elementos interativos
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Ponto Central de Precisão */}
      <motion.div
        className="fixed w-2 h-2 bg-brand-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38BDF8]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />

      {/* Retículo Externo de HUD */}
      <motion.div
        className={`fixed rounded-full border border-brand-accent/50 -translate-x-1/2 -translate-y-1/2 transition-colors ${
          isHovered ? 'border-emerald-400 bg-brand-accent/10 shadow-[0_0_20px_rgba(56,189,248,0.3)]' : ''
        }`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </div>
  );
};