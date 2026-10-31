import React from 'react';
import { ExternalLink, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ReactIcon, NextIcon, TSIcon, TailwindIcon, NodeIcon, NestIcon, PostgresIcon } from './TechIcons';

interface ProjectsProps {
  onSelectProject: (project: any) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
const caseStudies = [
  {
    id: "vianet",
    badge: "EM PRODUÇÃO",
    title: "Vianet — Remodelação Web & Gestão Documental",
    subtitle: "Sistema de Otimização Operacional e SEO",
    image: "/projects/vianet-1.jpg",
    // Lista com 3 fotos para o projeto Vianet
    images: [
      "/projects/vianet-1.jpg",
      "/projects/vianet-2.jpg",
      "/projects/vianet-3.jpg"
    ],
    description: "Reformulação completa da arquitetura web da Vianet, focada em produtividade documental e indexação avançada nos motores de busca.",
    details: "Este projeto envolveu o redesenho da interface de navegação, otimização técnica de velocidade de carregamento (Lighthouse Score > 90) e reestruturação da gestão de arquivos para evitar perdas de documentos na rotina diária das equipas operacionais.",
    problem: "Perdas frequentes de arquivos operacionais e reduzida presença nos motores de busca.",
    results: [
      { label: "Tráfego Orgânico", value: "+210%" },
      { label: "Perdas Doc.", value: "-35%" }
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "SEO"],
    liveUrl: "https://vianet.ao",
    githubUrl: "https://github.com/adalberto/vianet-remodel"
  },
  {
    id: "transgest",
    badge: "EM PRODUÇÃO",
    title: "Transgest — Gestão de Frotas Escolares",
    subtitle: "Plataforma Logística Full-Stack",
    image: "/projects/transgest-1.jpg",
    // Lista com 3 fotos para o projeto Transgest
    images: [
      "/projects/transgest-1.jpg",
      "/projects/transgest-2.jpg",
      "/projects/transgest-3.jpg"
    ],
    description: "Plataforma centralizada para controlo de transporte escolar, rotas em tempo real, gestão de motoristas e manutenção preventiva.",
    details: "Desenvolvido com uma arquitetura moderna em Next.js no Front-End e NestJS no Back-End com PostgreSQL. Inclui testes automatizados em Jest e integração containerizada com Docker.",
    problem: "Logística dispersa e falta de controlo centralizado de rotas e custos de manutenção de veículos.",
    results: [
      { label: "Testes", value: "Jest / Cobertura" },
      { label: "Database", value: "PostgreSQL / Prisma" }
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker"],
    liveUrl: "https://transgest.ao",
    githubUrl: "https://github.com/adalberto/transgest-fleet"
  }
];

  return (
    <section id="projects" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest">// Portfólio de Projetos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Projetos de Mercado em Destaque
            </h2>
          </div>
          <p className="text-brand-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
            Sistemas reais desenvolvidos com foco em usabilidade, arquitetura escalável e impacto mensurável.
          </p>
        </div>

        {/* Lista de Projetos */}
        <div className="space-y-12">
          {caseStudies.map((project) => (
            <article 
              key={project.id}
              className="bg-brand-card/40 border border-brand-card hover:border-brand-accent/30 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Captura do Projeto */}
                <div className="lg:col-span-5 bg-brand-black relative min-h-[260px] lg:min-h-full overflow-hidden flex items-center justify-center group border-b lg:border-b-0 lg:border-r border-brand-card/60">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('flex-col', 'p-8');
                    }}
                  />

                  <div className="hidden text-center text-brand-muted font-mono text-xs">
                    <ImageIcon size={36} className="mx-auto text-brand-accent mb-2 opacity-60" />
                    <span>Adiciona a captura em:</span>
                    <code className="text-slate-300 bg-brand-card px-2 py-1 rounded block mt-1">
                      public{project.image}
                    </code>
                  </div>

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-brand-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.badge}
                  </span>
                </div>

                {/* Informações do Projeto */}
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-brand-accent font-mono text-xs mt-1 mb-4">{project.subtitle}</p>
                    <p className="text-brand-muted text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Stack com Ícones */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-brand-black text-brand-accent font-mono text-xs border border-brand-card/80 flex items-center gap-1.5"
                        >
                          <ReactIcon size={12} />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Métricas */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-card/60">
                      {project.results.map((res, idx) => (
                        <div key={idx} className="bg-brand-black/50 p-3 rounded-lg border border-brand-card/60">
                          <span className="text-lg font-bold text-white font-mono block">{res.value}</span>
                          <span className="text-[11px] text-brand-muted">{res.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-brand-card/60">
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-brand-accent text-brand-black font-semibold text-xs hover:bg-sky-300 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Ver em Produção
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-brand-black text-slate-200 border border-brand-card hover:border-brand-accent/40 text-xs font-mono transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 fill-current text-brand-accent" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Repositório Git
                    </a>

                    {/* Ver Mais (Abre a Página Dedicada) */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="ml-auto px-4 py-2.5 rounded-lg bg-brand-card hover:bg-brand-blue text-brand-accent hover:text-white border border-brand-card/80 text-xs font-mono transition-colors flex items-center gap-1.5"
                    >
                      Ver Mais Detalhes <ChevronRight size={14} />
                    </button>

                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};