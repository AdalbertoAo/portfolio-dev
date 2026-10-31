import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, ShieldAlert, Layers, Cpu, Image as ImageIcon } from 'lucide-react';

interface ProjectDetailProps {
  project: any;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Garante pelo menos 3 imagens para exibição
  const imagesList = project.images && project.images.length >= 3 
    ? project.images 
    : [
        project.image || "/projects/placeholder-1.jpg", 
        "/projects/placeholder-2.jpg", 
        "/projects/placeholder-3.jpg"
      ];

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  // Faz scroll automático para o topo ao abrir a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Botão Voltar */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-card text-brand-accent hover:text-white border border-brand-card/80 text-xs font-mono mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} />
          Voltar para a Lista de Projetos
        </button>

        {/* Cabeçalho do Projeto */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {project.badge}
            </span>
            <span className="text-xs font-mono text-brand-muted">// GALERIA & ESTUDO DE CASO</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h1>
          <p className="text-brand-accent font-mono text-sm">{project.subtitle}</p>
        </div>

        {/* Galeria de Fotos Interativa (Foto Principal + 3 Miniaturas) */}
        <div className="space-y-4 mb-12">
          
          {/* Foto Principal em Destaque */}
          <div className="bg-brand-black border border-brand-card rounded-2xl overflow-hidden shadow-2xl relative min-h-[300px] md:min-h-[460px] flex items-center justify-center">
            <img 
              src={imagesList[selectedImgIndex]} 
              alt={`${project.title} - Visualização ${selectedImgIndex + 1}`}
              className="w-full h-[350px] md:h-[480px] object-cover object-top transition-all duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.querySelector('.fallback-msg')?.classList.remove('hidden');
              }}
            />

            {/* Placeholder exibido caso a imagem ainda não exista */}
            <div className="fallback-msg hidden text-center text-brand-muted font-mono text-xs p-8">
              <ImageIcon size={40} className="mx-auto text-brand-accent mb-2 opacity-60" />
              <span>Adiciona a imagem em:</span>
              <code className="text-slate-300 bg-brand-card px-2 py-1 rounded block mt-1">
                public{imagesList[selectedImgIndex]}
              </code>
            </div>

            {/* Contador de Fotos */}
            <div className="absolute bottom-4 right-4 bg-brand-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-brand-card/80 text-[11px] font-mono text-brand-accent">
              Foto {selectedImgIndex + 1} de {imagesList.length}
            </div>
          </div>

          {/* Miniaturas Clicáveis (Grelha de 3 Fotos) */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {imagesList.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedImgIndex(idx)}
                className={`relative aspect-video bg-brand-black border rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                  selectedImgIndex === idx 
                    ? 'border-brand-accent ring-2 ring-brand-accent/50 scale-[1.02]' 
                    : 'border-brand-card opacity-60 hover:opacity-100 hover:border-brand-accent/40'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-brand-black/90 text-[10px] font-mono text-white border border-brand-card/80">
                  Captura 0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          <p className="text-[11px] font-mono text-brand-muted text-center pt-1">
            💡 Clica nas miniaturas para alterar a foto do projeto.
          </p>

        </div>

        {/* Conteúdo Detalhado do Projeto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Descrição & Arquitetura (Esquerda) */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-brand-card/30 border border-brand-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="text-brand-accent" size={20} />
                Visão Geral do Sistema
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                {project.details}
              </p>
            </div>

            {/* O Desafio de Negócio */}
            <div className="bg-brand-black/60 border border-brand-card rounded-2xl p-8 space-y-3">
              <h3 className="text-sm font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert size={16} />
                Desafio & Problema de Negócio
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Tecnologias Utilizadas */}
            <div className="bg-brand-card/30 border border-brand-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="text-brand-accent" size={20} />
                Stack Tecnológica Aplicada
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.stack.map((tech: string, idx: number) => (
                  <div key={idx} className="bg-brand-black p-3 rounded-xl border border-brand-card flex items-center gap-3">
                    <span className="text-brand-accent font-bold text-xs">#</span>
                    <span className="text-xs font-mono text-slate-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Métricas e Links (Direita) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-brand-card/40 border border-brand-card rounded-2xl p-6 space-y-6">
              <h3 className="text-sm font-mono text-brand-muted uppercase tracking-wider">// Impacto Mensurável</h3>
              
              <div className="space-y-4">
                {project.results.map((res: any, idx: number) => (
                  <div key={idx} className="bg-brand-black p-4 rounded-xl border border-brand-card">
                    <span className="text-2xl font-bold text-white font-mono block">{res.value}</span>
                    <span className="text-xs text-brand-muted">{res.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-brand-card/60">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-brand-accent text-brand-black font-semibold text-xs text-center hover:bg-sky-300 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Aceder em Produção
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-brand-black text-slate-200 border border-brand-card hover:border-brand-accent/40 text-xs font-mono text-center transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-brand-accent" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Ver Código no GitHub
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};