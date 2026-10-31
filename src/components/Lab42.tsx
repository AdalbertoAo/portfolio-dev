import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, ExternalLink } from 'lucide-react';

export const Lab42: React.FC = () => {
  const initialStack = [42, 13, 3, 88, 7, 25];
  const [stackA, setStackA] = useState<number[]>(initialStack);
  const [logs, setLogs] = useState<string[]>(["// Executável push_swap pronto."]);
  const [moves, setMoves] = useState<number>(0);

  const handleSwapA = () => {
    if (stackA.length < 2) return;
    const newStack = [...stackA];
    const temp = newStack[0];
    newStack[0] = newStack[1];
    newStack[1] = temp;
    setStackA(newStack);
    setMoves(prev => prev + 1);
    setLogs(prev => [...prev.slice(-4), "sa : troca os 2 primeiros elementos da Stack A"]);
  };

  const handleRotateA = () => {
    if (stackA.length < 2) return;
    const newStack = [...stackA];
    const first = newStack.shift()!;
    newStack.push(first);
    setStackA(newStack);
    setMoves(prev => prev + 1);
    setLogs(prev => [...prev.slice(-4), "ra : desloca elementos para cima"]);
  };

  const handleReset = () => {
    setStackA(initialStack);
    setMoves(0);
    setLogs(["// Stack A reinicializada."]);
  };

  // Lista com links diretos para repositórios GitHub
  const coreProjects = [
    {
      name: "push_swap",
      tag: "ALGORITMOS DE ORDENAÇÃO",
      desc: "Ordenação de dados numa pilha com limite de instruções em C.",
      concepts: ["O(n log n)", "Gestão de Stacks", "Otimização"],
      githubUrl: "https://github.com/adalberto/push_swap" // Substitui depois pelo teu link
    },
    {
      name: "Libft & ft_printf",
      tag: "BIBLIOTECA PADRÃO C",
      desc: "Reescrita da libc e implementação de formatação variádica de strings.",
      concepts: ["malloc", "Ponteiros", "Funções Variádicas"],
      githubUrl: "https://github.com/adalberto/libft" // Substitui depois pelo teu link
    },
    {
      name: "get_next_line",
      tag: "GESTÃO DE BUFFERS",
      desc: "Leitura eficiente de linhas a partir de File Descriptors em C.",
      concepts: ["File Descriptors", "Variáveis Estáticas", "Buffers"],
      githubUrl: "https://github.com/adalberto/get_next_line" // Substitui depois pelo teu link
    }
  ];

  return (
    <section id="lab42" className="py-24 bg-brand-bg relative border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card border border-brand-accent/20 text-brand-accent text-xs font-mono mb-3">
            <Terminal size={14} />
            <span>42 LUANDA CORE LAB</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Fundamentos de Ciência da Computação
          </h2>
          <p className="text-brand-muted mt-2 max-w-2xl text-sm">
            Demonstração prática de resolução de problemas algorítmicos em C/C++ sem abstrações.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Terminal / Simulador (Esquerda) */}
          <div className="lg:col-span-7 bg-brand-black border border-brand-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-brand-card/80 px-4 py-3 border-b border-brand-card/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 font-mono text-xs text-brand-muted">push_swap_visualizer.c</span>
              </div>
              <span className="text-xs font-mono text-brand-accent">C99 Standard</span>
            </div>

            <div className="p-6 font-mono text-sm space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-brand-muted mb-3">
                  <span>STACK A (Estado Atual):</span>
                  <span>Movimentos: <strong className="text-brand-accent">{moves}</strong></span>
                </div>

                <div className="flex items-end gap-2 h-36 bg-brand-card/30 p-4 rounded-xl border border-brand-card/40 justify-center">
                  {stackA.map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 flex-1 max-w-[48px]">
                      <span className="text-[10px] text-brand-accent font-mono">{val}</span>
                      <div 
                        className="w-full bg-gradient-to-t from-brand-blue to-brand-accent rounded-t-md transition-all duration-300"
                        style={{ height: `${(val / 100) * 80 + 10}px` }}
                      />
                      <span className="text-[9px] text-brand-muted">[{idx}]</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-brand-card/60">
                <button
                  onClick={handleSwapA}
                  className="px-3 py-1.5 rounded bg-brand-card hover:bg-brand-blue text-white text-xs border border-brand-card/80 transition-all font-mono flex items-center gap-1.5"
                >
                  <Play size={12} className="text-brand-accent" />
                  sa (Swap A)
                </button>
                <button
                  onClick={handleRotateA}
                  className="px-3 py-1.5 rounded bg-brand-card hover:bg-brand-blue text-white text-xs border border-brand-card/80 transition-all font-mono flex items-center gap-1.5"
                >
                  <Play size={12} className="text-brand-accent" />
                  ra (Rotate A)
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded bg-brand-black text-brand-muted hover:text-white text-xs border border-brand-card/80 transition-all font-mono ml-auto flex items-center gap-1.5"
                >
                  <RotateCcw size={12} />
                  Reset
                </button>
              </div>

              <div className="bg-brand-bg/90 p-3 rounded-lg border border-brand-card/50 text-xs space-y-1 font-mono text-emerald-400/90">
                {logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-brand-muted">$</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Destaque dos Módulos com Botão para GitHub (Direita) */}
          <div className="lg:col-span-5 space-y-4">
            {coreProjects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-brand-card/40 border border-brand-card hover:border-brand-accent/30 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white font-mono">{proj.name}</h3>
                    <span className="text-[10px] font-mono text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/20">
                      {proj.tag}
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed mb-3">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.concepts.map((c, i) => (
                      <span key={i} className="text-[10px] font-mono bg-brand-black text-slate-300 px-2 py-0.5 rounded border border-brand-card/60">
                        #{c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botão de Redirecionamento ao GitHub do Projeto */}
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-brand-black hover:bg-brand-card text-brand-accent hover:text-white border border-brand-card text-xs font-mono transition-colors flex items-center justify-center gap-2 group"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Ver Repositório GitHub
                  <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};