import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ArrowRight, Download, Cpu } from 'lucide-react';
import { GsapTextReveal } from './GsapTextReveal';
import { TechTextScramble } from './TechTextScramble';

export const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        'rigor algorítmico.',
        'a disciplina da 42.',
        'visão de produto.',
        'alta performance.'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-brand-bg">
      {/* Glow Radial de Fundo */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Lado Esquerdo: Conteúdo & Apresentação */}
          <div className="lg:col-span-7">

            {/* Título Reduzido com Animação GSAP + Typed.js */}
            <div className="mb-5">
              <GsapTextReveal 
                text="Construo interfaces modernas e de alto impacto com"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug"
              />
              <div className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
                <span 
                  ref={typedRef}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-sky-300 to-blue-400 font-mono"
                />
              </div>
            </div>

            {/* Subtítulo */}
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-sm md:text-base text-brand-muted leading-relaxed mb-6 max-w-xl"
            >
              Desenvolvedor Front-End e Full-Stack focado no ecossistema React/Next.js. 
              Combino experiência em arquitetura Web orientada a resultados com a disciplina de baixo nível desenvolvida na 42.
            </p>

            {/* Ações (CTAs) */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#projects"
                className="px-5 py-3 rounded-lg bg-brand-accent text-brand-black font-semibold text-xs hover:bg-sky-300 transition-all flex items-center gap-2 shadow-lg shadow-brand-accent/10 font-mono cursor-pointer"
              >
                Ver Estudos de Caso
                <ArrowRight size={15} />
              </a>

              <a
                href="/cv.pdf"
                download
                className="px-5 py-3 rounded-lg bg-brand-card text-slate-200 border border-slate-800 font-semibold text-xs hover:border-brand-accent/50 transition-all flex items-center gap-2 font-mono cursor-pointer"
              >
                <Download size={15} />
                Descarregar CV
              </a>

              {/* Ícones de Redes Sociais */}
              <div className="flex items-center gap-2 text-brand-muted">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 bg-brand-card rounded-lg hover:text-white border border-slate-800 hover:border-brand-accent/30 transition-all flex items-center justify-center cursor-pointer"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 bg-brand-card rounded-lg hover:text-white border border-slate-800 hover:border-brand-accent/30 transition-all flex items-center justify-center cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Grelha de Métricas de Impacto */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5 border-t border-brand-card/60"
            >
              <div className="bg-brand-black/50 p-3 rounded-xl border border-brand-card/40">
                <span className="text-lg md:text-xl font-bold text-white font-mono block">+210%</span>
                <span className="text-[10px] text-brand-muted">SEO Vianet</span>
              </div>
              <div className="bg-brand-black/50 p-3 rounded-xl border border-brand-card/40">
                <span className="text-lg md:text-xl font-bold text-white font-mono block">-35%</span>
                <span className="text-[10px] text-brand-muted">Perdas Doc.</span>
              </div>
              <div className="bg-brand-black/50 p-3 rounded-xl border border-brand-card/40">
                <span className="text-lg md:text-xl font-bold text-white font-mono block">42 Core</span>
                <span className="text-[10px] text-brand-muted">C / C++ / Redes</span>
              </div>
              <div className="bg-brand-black/50 p-3 rounded-xl border border-brand-card/40">
                <span className="text-lg md:text-xl font-bold text-white font-mono block">+4 Turmas</span>
                <span className="text-[10px] text-brand-muted">Formador Web</span>
              </div>
            </div>

          </div>

          {/* Lado Direito: Moldura da Fotografia com Efeito Neon */}
          <div 
            data-aos="zoom-in" 
            data-aos-delay="300"
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-xs md:max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-blue rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-brand-card border border-brand-card/80 rounded-2xl p-2.5 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-brand-black border border-brand-card/60 flex items-center justify-center">
                  <img 
                    src="/sua-foto.jpg" 
                    alt="Adalberto Silvestre" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-brand-black/80 backdrop-blur-md p-2.5 rounded-lg border border-brand-card/80 flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-white font-bold block text-xs">Adalberto Silvestre</span>
                      <span className="text-brand-accent text-[10px]">Luanda, Angola 🇦🇴</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};