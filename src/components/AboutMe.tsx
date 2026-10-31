import React from 'react';
import { User, GraduationCap, Award, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const educationTimeline = [
    {
      period: "2024 - Presente",
      title: "Core Curriculum em Ciência da Computação",
      institution: "42 Luanda (ISPTEC)",
      description: "Aprendizagem baseada em projetos, resolução de problemas em C/C++, arquitetura de sistemas, gestão de memória e redes.",
      badge: "Ensino de Alto Nível"
    },
    {
      period: "2025",
      title: "Especialização em Redes de Computadores",
      institution: "Cisco Networking Academy",
      description: "Formação técnica orientada a infraestrutura, protocolos de comunicação e redes corporativas.",
      badge: "Certificação"
    },
    {
      period: "2025 - Presente",
      title: "Liderança de Comunidade & Formação",
      institution: "IMAG Devs / Cursos Técnicos",
      description: "Criador da comunidade IMAG Devs e Formador de mais de 4 turmas práticas em Web Design e Desenvolvimento Front-End.",
      badge: "Mentoria & Ensino"
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-bg relative border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Bloco 1: Perfil Profissional e Pessoal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card border border-brand-accent/20 text-brand-accent text-xs font-mono">
              <User size={14} />
              <span>SOBRE MIM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Desenvolvedor de Software com Visão de Produto e Rigor Técnico.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-brand-muted text-sm leading-relaxed">
            <p className="text-slate-200 text-base">
              Sou o <strong className="text-white">Adalberto Silvestre</strong>, desenvolvedor Front-End e Full-Stack focado em construir aplicações Web que resolvem problemas reais de negócio e entregam uma experiência de utilizador impecável.
            </p>
            <p>
              <strong>Como profissional:</strong> Alio o domínio de frameworks modernas (React, Next.js, TypeScript, Tailwind CSS) a um background sólido em Design Gráfico e Marketing Digital. Isso permite-me não apenas codificar, mas pensar a arquitetura, o fluxo de utilização e o impacto comercial das soluções que desenvolvo — como comprovado na otimização da Vianet (+210% SEO) e no sistema de gestão de frotas da Transgest.
            </p>
            <p>
              <strong>Como pessoa:</strong> Sou movido por aprendizagem contínua, disciplina e colaboração. Acredito no poder da partilha de conhecimento — razão pela qual atuo ativamente como formador de Web Design, mentor de estagiários e dinamizador da comunidade <em>IMAG Devs</em>.
            </p>
          </div>

        </div>

        {/* Bloco 2: Percurso Estudantil e Académico */}
        <div className="bg-brand-card/30 border border-brand-card rounded-2xl p-8 md:p-12">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-brand-black rounded-xl border border-brand-card/80 text-brand-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Percurso Estudantil & Académico</h3>
              <p className="text-xs text-brand-muted font-mono">A trajetória técnica que fundamenta o meu código</p>
            </div>
          </div>

          {/* Linha do Tempo */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-36 before:w-0.5 before:bg-brand-card">
            {educationTimeline.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start gap-6 group">
                
                {/* Período */}
                <div className="md:w-32 shrink-0 font-mono text-xs text-brand-accent font-bold pt-1 pl-8 md:pl-0">
                  {item.period}
                </div>

                {/* Indicador na Linha */}
                <div className="absolute left-1.5 md:left-35 top-1.5 w-3 h-3 rounded-full bg-brand-accent ring-4 ring-brand-bg group-hover:scale-125 transition-transform"></div>

                {/* Conteúdo */}
                <div className="bg-brand-black/60 border border-brand-card/80 hover:border-brand-accent/30 rounded-xl p-6 flex-1 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card text-brand-accent border border-brand-accent/20">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-300 block mb-3">{item.institution}</span>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};