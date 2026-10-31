import React from 'react';
import { Wrench } from 'lucide-react';
import { 
  ReactIcon, NextIcon, TSIcon, TailwindIcon, NodeIcon, 
  NestIcon, PostgresIcon, CIcon, DockerIcon, FigmaIcon, GitIcon 
} from './TechIcons';

export const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Front-End & UI Web",
      description: "Construção de interfaces reativas, acessíveis e otimizadas para SEO.",
      skills: [
        { name: "React.js", level: "Avançado", icon: <ReactIcon /> },
        { name: "Next.js (App Router)", level: "Avançado", icon: <NextIcon /> },
        { name: "TypeScript", level: "Avançado", icon: <TSIcon /> },
        { name: "Tailwind CSS", level: "Avançado", icon: <TailwindIcon /> },
        { name: "HTML5 / CSS3 / ES6+", level: "Especialista", icon: <ReactIcon /> },
      ]
    },
    {
      title: "Back-End & Bases de Dados",
      description: "APIs RESTful, arquitetura de microsserviços e persistência de dados.",
      skills: [
        { name: "Node.js / Express", level: "Intermédio+", icon: <NodeIcon /> },
        { name: "NestJS", level: "Intermédio", icon: <NestIcon /> },
        { name: "PostgreSQL", level: "Intermédio", icon: <PostgresIcon /> },
        { name: "Prisma ORM", level: "Intermédio", icon: <PostgresIcon /> },
      ]
    },
    {
      title: "Fundamentos & Baixo Nível (42)",
      description: "Algoritmos, estruturas de dados e gestão eficiente de memória.",
      skills: [
        { name: "Linguagem C", level: "Domínio 42 Core", icon: <CIcon /> },
        { name: "C++ / POO", level: "Em progresso", icon: <CIcon /> },
        { name: "Gestão de Memória / Stacks", level: "Avançado", icon: <CIcon /> },
        { name: "Linux & Terminal / Bash", level: "Avançado", icon: <GitIcon /> },
      ]
    },
    {
      title: "DevOps, Testes & Ferramentas",
      description: "Controlo de versões, containerização e qualidade de código.",
      skills: [
        { name: "Git & GitHub", level: "Avançado", icon: <GitIcon /> },
        { name: "Docker", level: "Intermédio", icon: <DockerIcon /> },
        { name: "Jest / Testes", level: "Intermédio", icon: <ReactIcon /> },
        { name: "Vite / Webpack", level: "Avançado", icon: <ReactIcon /> },
      ]
    },
    {
      title: "Design & Prototipagem",
      description: "Transformação de conceitos de marca em protótipos navegáveis.",
      skills: [
        { name: "Figma (UI/UX)", level: "Avançado", icon: <FigmaIcon /> },
        { name: "Photoshop & Illustrator", level: "Avançado", icon: <FigmaIcon /> },
        { name: "Design Systems", level: "Avançado", icon: <TailwindIcon /> },
      ]
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card border border-brand-accent/20 text-brand-accent text-xs font-mono mb-3">
            <Wrench size={14} />
            <span>ARZENAL TÉCNICO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ferramentas & Tecnologias Dominadas
          </h2>
          <p className="text-brand-muted mt-2 max-w-2xl text-sm font-mono">
            Ecossistema de desenvolvimento categorizado por camada de aplicação e nível de proficiência.
          </p>
        </div>

        {/* Grelha por Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="bg-brand-card/30 border border-brand-card hover:border-brand-accent/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white font-mono mb-1">{cat.title}</h3>
                <p className="text-xs text-brand-muted mb-6">{cat.description}</p>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="bg-brand-black/60 border border-brand-card/80 rounded-xl p-3 flex items-center justify-between hover:border-brand-accent/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-brand-card rounded-lg shrink-0">
                          {skill.icon}
                        </div>
                        <span className="text-xs font-semibold text-slate-200 font-mono">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card text-brand-accent border border-brand-accent/20">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};