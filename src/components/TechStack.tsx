import React from 'react';
import { Wrench } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { 
  ReactIcon, NextIcon, TSIcon, TailwindIcon, NodeIcon, 
  NestIcon, PostgresIcon, CIcon, DockerIcon, FigmaIcon, GitIcon 
} from './TechIcons';

export const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Front-End & UI Web",
      description: "Interfaces reativas, acessíveis e SEO-first.",
      skills: [
        { name: "React.js", level: "Avançado", icon: <ReactIcon /> },
        { name: "Next.js (App Router)", level: "Avançado", icon: <NextIcon /> },
        { name: "TypeScript", level: "Avançado", icon: <TSIcon /> },
        { name: "Tailwind CSS", level: "Avançado", icon: <TailwindIcon /> },
      ]
    },
    {
      title: "Back-End & Bases de Dados",
      description: "APIs RESTful, microsserviços e persistência.",
      skills: [
        { name: "Node.js / Express", level: "Intermédio+", icon: <NodeIcon /> },
        { name: "NestJS", level: "Intermédio", icon: <NestIcon /> },
        { name: "PostgreSQL / Prisma", level: "Intermédio", icon: <PostgresIcon /> },
      ]
    },
    {
      title: "Fundamentos CS (42 Luanda)",
      description: "Algoritmos, estruturas de dados e gestão de memória.",
      skills: [
        { name: "Linguagem C", level: "42 Core", icon: <CIcon /> },
        { name: "Gestão de Memória / Stacks", level: "Avançado", icon: <CIcon /> },
        { name: "Linux & Bash / Terminal", level: "Avançado", icon: <GitIcon /> },
      ]
    },
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card border border-brand-accent/20 text-brand-accent text-xs font-mono mb-3">
            <Wrench size={14} />
            <span>ARZENAL TÉCNICO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ferramentas & Tecnologias Dominadas
          </h2>
        </div>

        {/* Grelha com Cartões Spotlight Interativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <GlowCard key={idx} className="p-6">
              <h3 className="text-lg font-bold text-white font-mono mb-1">{cat.title}</h3>
              <p className="text-xs text-brand-muted mb-6">{cat.description}</p>

              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="bg-brand-black/70 border border-brand-card/80 rounded-xl p-3 flex items-center justify-between group-hover:border-brand-accent/30 transition-colors"
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
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};