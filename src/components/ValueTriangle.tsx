import React from 'react';
import { Palette, Layers, Cpu, CheckCircle2 } from 'lucide-react';

export const ValueTriangle: React.FC = () => {
  const pillars = [
    {
      icon: <Palette className="text-brand-accent" size={28} />,
      title: "01. Design & UX Strategy",
      subtitle: "Sensibilidade Visual & Prototipagem",
      description: "A minha bagagem em Design Gráfico e Marketing permite-me transformar requisitos complexos em interfaces intuitivas, alinhando estética moderna com foco na conversão e usabilidade.",
      highlights: ["Figma & Mockups 3D", "Design Systems & Tailwind", "Arquitetura de Informação"]
    },
    {
      icon: <Layers className="text-brand-accent" size={28} />,
      title: "02. Engenharia de Produto",
      subtitle: "Aplicações Escaláveis de Alto Nível",
      description: "Construção de aplicações Web robustas do zero ao deploy. Domínio de React, Next.js e TypeScript no Front-End, integrados com Node.js/NestJS e bases de dados relacionais.",
      highlights: ["React / Next.js / TypeScript", "NestJS & Prisma ORM", "SEO & Otimização de Performance"]
    },
    {
      icon: <Cpu className="text-brand-accent" size={28} />,
      title: "03. Fundamentos de CS (42)",
      subtitle: "Rigor Algorítmico & Baixo Nível",
      description: "A formação rigorosa na 42 Luanda garante-me uma compreensão profunda do que acontece sob o capô: gestão eficiente de memória, otimização de algoritmos e resolução de problemas complexos.",
      highlights: ["C / C++ & Gestão de Memória", "Estruturas de Dados & Ordenação", "Linux & CLI Utilities"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-bg relative border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Secção */}
        <div className="mb-16">
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest">// Porquê Contratar-me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            O Triângulo de Valor: Design, Produto e Engenharia.
          </h2>
          <p className="text-brand-muted mt-3 max-w-2xl">
            Uma combinação pouco comum entre sensibilidade estética de produto e a disciplina de baixo nível da Ciência da Computação.
          </p>
        </div>

        {/* Grelha dos 3 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-brand-card/60 border border-brand-card hover:border-brand-accent/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 bg-brand-black/60 rounded-xl w-fit border border-brand-card mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <span className="text-xs font-mono text-brand-muted uppercase tracking-wider">{pillar.title}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">{pillar.subtitle}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-brand-card/80">
                <ul className="space-y-2">
                  {pillar.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 size={14} className="text-brand-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};