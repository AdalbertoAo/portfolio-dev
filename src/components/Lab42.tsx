import React, { useState } from 'react';
import { Terminal, Cpu, Play, RotateCcw, CheckCircle2, Code2, Layers } from 'lucide-react';

export const Lab42: React.FC = () => {
  // Estado para a simulação simples do push_swap (Stack A)
  const initialStack = [42, 13, 3, 88, 7, 25];
  const [stackA, setStackA] = useState<number[]>(initialStack);
  const [logs, setLogs] = useState<string[]>(["// Executável push_swap pronto."]);
  const [moves, setMoves] = useState<number>(0);

  // Simulação manual de operações de ordenação em C
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
    setLogs(prev => [...prev.slice(-4), "ra : desloca todos os elementos da Stack A para cima (1º passa a último)"]);
  };

  const handleReset = () => {
    setStackA(initialStack);
    setMoves(0);
    setLogs(["// Stack A reinicializada com valores não ordenados."]);
  };

  const coreProjects = [
    {
      name: "push_swap",
      tag: "ALGORITMOS DE ORDENAÇÃO",
      desc: "Ordenação de dados numa pilha com um conjunto limitado de instruções e o menor número possível de movimentos.",
      concepts: ["Complexidade O(n log n)", "Gestão de Stacks", "Otimização de Instruções"]
    },
    {
      name: "Libft & ft_printf",
      tag: "BIBLIOTECA PADRÃO C",
      desc: "Reescrita do zero das funções essenciais da libc e implementação de formatação variádica de strings sem bibliotecas externas.",
      concepts: ["Alocação Dinâmica (malloc)", "Ponteiros & Pointers to Pointers", "Funções Variádicas"]
    },
    {
      name: "get_next_line",
      tag: "GESTÃO DE BUFFERS",
      desc: "Função capaz de ler e retornar uma linha por chamada a partir de um File Descriptor, prevenindo memory leaks.",
      concepts: ["File Descriptors (FD)", "Variáveis Estáticas", "Buffer Optimization"]
    }
  ];

  return (
    <section id="lab42" className="py-24 bg-brand-bg relative border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card border border-brand-accent/20 text-brand-accent text-xs font-mono mb-3">
            <Terminal size={14} />
            <span>42 LUANDA CORE LAB</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Fundamentos de Ciência da Computação
          </h2>
          <p className="text-brand-muted mt-2 max-w-2xl text-sm">
            Demonstração prática de resolução de problemas algorítmicos e rigor em C/C++ sem abstrações de frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Terminal / Simulador push_swap (Esquerda) */}
          <div className="lg:col-span-7 bg-brand-black border border-brand-card rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Terminal Header */}
            <div className="bg-brand-card/80 px-4 py-3 border-b border-brand-card/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 font-mono text-xs text-brand-muted">push_swap_visualizer.c</span>
              </div>
              <span className="text-xs font-mono text-brand-accent">C99 Standard</span>
            </div>

            {/* Visualizador de Pilhas */}
            <div className="p-6 font-mono text-sm space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-brand-muted mb-3">
                  <span>STACK A (Estado Atual):</span>
                  <span>Movimentos: <strong className="text-brand-accent">{moves}</strong></span>
                </div>

                {/* Barras/Elementos da Stack A */}
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

              {/* Controles do Simulador */}
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

              {/* Output de Logs do Terminal */}
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

          {/* Destaque dos Módulos em C (Direita) */}
          <div className="lg:col-span-5 space-y-4">
            {coreProjects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-brand-card/40 border border-brand-card hover:border-brand-accent/30 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white font-mono">{proj.name}</h3>
                  <span className="text-[10px] font-mono text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/20">
                    {proj.tag}
                  </span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.concepts.map((c, i) => (
                    <span key={i} className="text-[10px] font-mono bg-brand-black text-slate-300 px-2 py-0.5 rounded border border-brand-card/60">
                      #{c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};