import React from 'react';
import { ExternalLink, TrendingUp, ShieldAlert, CheckCircle, Database, Server } from 'lucide-react';

export const Projects: React.FC = () => {
  const caseStudies = [
    {
      id: "vianet",
      badge: "EM PRODUÇÃO",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      title: "Vianet — Remodelação Web & Gestão Documental",
      subtitle: "Otimização de SEO e Redução de Perdas Operacionais",
      description: "Reformulação completa da presença digital e da arquitetura do sistema de gestão documental. Otimização de performance de carregamento, SEO técnico e interface focada em produtividade operacional.",
      problem: "Perdas de documentos críticos na operação diária e reduzida visibilidade orgânica nos motores de busca.",
      results: [
        { label: "Crescimento de Tráfego Orgânico", value: "+210%" },
        { label: "Redução em Perdas Operacionais", value: "-35%" }
      ],
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "SEO Optimization"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "transgest",
      badge: "EM PRODUÇÃO",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      title: "Transgest — Gestão de Frotas Escolares",
      subtitle: "Sistema Full-Stack de Monitorização e Logística",
      description: "Plataforma web para gestão centralizada de frotas de transporte escolar. Controlo em tempo real de rotas, manutenção de veículos, gestão de motoristas e relatórios automatizados.",
      problem: "Acompanhamento disperso e manual da logística de transporte, resultando em falhas de comunicação e atrasos de rotas.",
      results: [
        { label: "Testes Automatizados", value: "Jest / Cobertura" },
        { label: "Arquitetura de Dados", value: "PostgreSQL + Prisma" }
      ],
      stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Jest", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Secção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest">// Casos de Estudo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Projetos de Mercado em Produção
            </h2>
          </div>
          <p className="text-brand-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
            Sistemas reais desenvolvidos com foco em impacto direto de negócio, métricas mensuráveis e arquitetura escalável.
          </p>
        </div>

        {/* Lista de Casos de Estudo */}
        <div className="space-y-12">
          {caseStudies.map((project) => (
            <article 
              key={project.id}
              className="bg-brand-card/40 border border-brand-card hover:border-brand-accent/30 rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Coluna de Informação Principal */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${project.badgeColor} flex items-center gap-1.5`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-brand-accent font-mono text-xs mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-brand-muted leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="bg-brand-black/60 p-4 rounded-xl border border-brand-card/60">
                    <span className="text-xs font-mono text-slate-400 font-bold block mb-1 uppercase tracking-wider">
                      Desafio de Negócio:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-brand-card text-brand-muted font-mono text-xs border border-brand-card/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Coluna de Métricas e Ações */}
                <div className="lg:col-span-5 bg-brand-black/40 border border-brand-card/80 rounded-xl p-6 flex flex-col justify-between h-full space-y-6">
                  
                  <div>
                    <span className="text-xs font-mono text-brand-muted uppercase tracking-wider block mb-4">// Impacto & Resultados</span>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {project.results.map((res, idx) => (
                        <div key={idx} className="bg-brand-card/80 p-4 rounded-lg border border-brand-card/60">
                          <span className="text-2xl font-bold text-white font-mono block">{res.value}</span>
                          <span className="text-xs text-brand-muted">{res.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-brand-card/60">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-lg bg-brand-accent text-brand-black font-semibold text-xs text-center hover:bg-sky-300 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Ver Projeto
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-brand-card text-brand-muted hover:text-white border border-brand-card/80 transition-colors flex items-center justify-center"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
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