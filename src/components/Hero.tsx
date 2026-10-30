import React from 'react';
import { ArrowRight, Download, Github, Linkedin, ShieldCheck, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-brand-bg">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          
          {/* Tag de Posicionamento */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-card border border-brand-accent/20 text-brand-accent text-xs font-mono mb-6">
            <Cpu size={14} />
            <span>Front-End Specialist & CS Fundamentals (42 Luanda)</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Construo interfaces modernas e de alto impacto com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
              rigor algorítmico.
            </span>
          </h1>

          {/* Subtítulo orientando a produto e solução */}
          <p className="text-lg text-brand-muted leading-relaxed mb-8">
            Desenvolvedor Front-End e Full-Stack focado no ecossistema React/Next.js. 
            Combino experiência em arquitetura Web orientada a resultados com a disciplina de baixo nível desenvolvida na 42.
          </p>

          {/* Ações (CTAs) */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-lg bg-brand-accent text-brand-black font-semibold text-sm hover:bg-sky-300 transition-all flex items-center gap-2 shadow-lg shadow-brand-accent/10"
            >
              Ver Estudos de Caso
              <ArrowRight size={16} />
            </a>

            <a
              href="/cv.pdf"
              download
              className="px-6 py-3.5 rounded-lg bg-brand-card text-slate-200 border border-slate-800 font-semibold text-sm hover:border-brand-accent/50 transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Descarregar CV
            </a>

            <div className="flex items-center gap-2 ml-auto md:ml-0 text-brand-muted">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-brand-card rounded-lg hover:text-white border border-slate-800 hover:border-brand-accent/30 transition-all">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-brand-card rounded-lg hover:text-white border border-slate-800 hover:border-brand-accent/30 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Grelha de Métricas de Impacto (Inspirado no Kuanzambi/Edito) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-brand-card/60">
            <div className="bg-brand-black/50 p-4 rounded-xl border border-brand-card/40">
              <span className="text-2xl md:text-3xl font-bold text-white font-mono block mb-1">+210%</span>
              <span className="text-xs text-brand-muted">Tráfego Orgânico (SEO Vianet)</span>
            </div>

            <div className="bg-brand-black/50 p-4 rounded-xl border border-brand-card/40">
              <span className="text-2xl md:text-3xl font-bold text-white font-mono block mb-1">-35%</span>
              <span className="text-xs text-brand-muted">Perdas Operacionais Documentais</span>
            </div>

            <div className="bg-brand-black/50 p-4 rounded-xl border border-brand-card/40">
              <span className="text-2xl md:text-3xl font-bold text-white font-mono block mb-1">42 Core</span>
              <span className="text-xs text-brand-muted">C / C++ & Algoritmos</span>
            </div>

            <div className="bg-brand-black/50 p-4 rounded-xl border border-brand-card/40">
              <span className="text-2xl md:text-3xl font-bold text-white font-mono block mb-1">+4 Turmas</span>
              <span className="text-xs text-brand-muted">Formador de Web Design</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};