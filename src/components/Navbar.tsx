import React, { useState } from 'react';
import { Terminal, Mail, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-card/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Terminal Badge */}
        <a href="#" className="flex items-center gap-2 text-white font-mono font-bold text-lg group">
          <span className="text-brand-accent group-hover:rotate-12 transition-transform duration-300">
            <Terminal size={22} />
          </span>
          <span>adalberto<span className="text-brand-accent">.dev</span></span>
          
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-brand-muted">
          <a href="#about" className="hover:text-brand-accent transition-colors">// sobre</a>
          <a href="#projects" className="hover:text-brand-accent transition-colors">// projetos</a>
          <a href="#lab42" className="hover:text-brand-accent transition-colors">// 42_lab</a>
          <a href="#contact" className="hover:text-brand-accent transition-colors">// contacto</a>
        </nav>

        {/* CTA Botão Entre em Contacto */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-brand-accent text-brand-black font-semibold text-xs hover:bg-sky-300 transition-all flex items-center gap-2 shadow-lg shadow-brand-accent/10 font-mono"
          >
            <Mail size={14} />
            Entre em Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-muted hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-card border-b border-brand-card/50 px-6 py-6 flex flex-col gap-4 font-mono text-sm">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-brand-accent">// sobre</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-brand-accent">// projetos</a>
          <a href="#lab42" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-brand-accent">// 42_lab</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-brand-accent">// contacto</a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="mt-2 text-center py-3 bg-brand-accent text-brand-black font-bold rounded-lg"
          >
            Entre em Contacto
          </a>
        </div>
      )}
    </header>
  );
};