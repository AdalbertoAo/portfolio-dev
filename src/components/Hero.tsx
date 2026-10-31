import React from 'react';
import { ArrowRight, Download, Cpu, UserCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-bg">
      {/* Glow Radial de Fundo */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Texto & Apresentação */}
          <div className="lg:col-span-7">
            
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

            {/* Subtítulo */}
            <p className="text-base md:text-lg text-brand-muted leading-relaxed mb-8 max-w-2xl">
              Desenvolvedor Front-End e Full-Stack focado no ecossistema React/Next.js. 
              Combino experiência em arquitetura Web orientada a resultados com a disciplina de baixo nível desenvolvida na 42.
            </p>

            {/* Ações (CTAs) */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
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

              {/* Redes Sociais */}
              <div className="flex items-center gap-2 text-brand-muted">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-brand-card rounded-lg hover:text-white border border-slate-800 hover:border-brand-accent/30 transition-all flex items-center justify-center"
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
                  className="p-3 bg-brand-card rounded-lg hover:text-white border border-slate-800 hover:border-brand-accent/30 transition-all flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Grelha de Métricas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-brand-card/60">
              <div className="bg-brand-black/50 p-3.5 rounded-xl border border-brand-card/40">
                <span className="text-xl md:text-2xl font-bold text-white font-mono block">+210%</span>
                <span className="text-[11px] text-brand-muted">SEO Vianet</span>
              </div>
              <div className="bg-brand-black/50 p-3.5 rounded-xl border border-brand-card/40">
                <span className="text-xl md:text-2xl font-bold text-white font-mono block">-35%</span>
                <span className="text-[11px] text-brand-muted">Perdas Doc.</span>
              </div>
              <div className="bg-brand-black/50 p-3.5 rounded-xl border border-brand-card/40">
                <span className="text-xl md:text-2xl font-bold text-white font-mono block">42 Core</span>
                <span className="text-[11px] text-brand-muted">C / C++ / Redes</span>
              </div>
              <div className="bg-brand-black/50 p-3.5 rounded-xl border border-brand-card/40">
                <span className="text-xl md:text-2xl font-bold text-white font-mono block">+4 Turmas</span>
                <span className="text-[11px] text-brand-muted">Formador Web</span>
              </div>
            </div>

          </div>

          {/* Lado Direito: Moldura da Fotografia */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              
              {/* Efeito Neon de Borda e Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-blue rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Contentor da Fotografia */}
              <div className="relative bg-brand-card border border-brand-card/80 rounded-2xl p-3 shadow-2xl">
                
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-brand-black border border-brand-card/60 flex items-center justify-center">
                  
                  {/* Substituir src="/sua-foto.jpg" pela tua foto real na pasta public/ */}
                  <img 
                    src="/sua-foto.jpg" 
                    alt="Adalberto Silvestre" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback visual caso a imagem não exista ainda na pasta
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('flex-col', 'gap-3');
                    }}
                  />
                  
                  {/* Placeholder exibido enquanto não adicionares a foto */}
                  <div className="hidden text-center p-6 text-brand-muted font-mono text-xs">
                    <UserCheck size={40} className="mx-auto text-brand-accent mb-2 opacity-80" />
                    <span>Adiciona a tua fotografia em:</span>
                    <code className="block text-slate-200 mt-1 bg-brand-card p-1 rounded">public/sua-foto.jpg</code>
                  </div>

                  {/* Badge Sobreposta */}
                  <div className="absolute bottom-3 left-3 right-3 bg-brand-black/80 backdrop-blur-md p-3 rounded-lg border border-brand-card/80 flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-white font-bold block">Adalberto Silvestre</span>
                      <span className="text-brand-accent text-[10px]">Luanda, Angola 🇦🇴</span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
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