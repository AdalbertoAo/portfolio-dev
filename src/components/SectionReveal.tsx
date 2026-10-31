import React from 'react';
import { motion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  showDivider?: boolean;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  showDivider = true 
}) => {
  return (
    <div className="relative">
      {/* Separador de Secção com Feixe Neon Pulsante */}
      {showDivider && (
        <div className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-card to-transparent relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-75"
            />
          </div>
        </div>
      )}

      {/* Conteúdo com Entrada Marcante em Fade, Slide e Scale */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.7, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};