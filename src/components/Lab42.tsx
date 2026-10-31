import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, RotateCcw, ExternalLink, Trophy, X, Sparkles } from 'lucide-react';

export const Lab42: React.FC = () => {
  const initialStackA = [42, 13, 3, 88, 7];
  const [stackA, setStackA] = useState<number[]>(initialStackA);
  const [stackB, setStackB] = useState<number[]>([]);
  const [logs, setLogs] = useState<string[]>(["// Executável push_swap pronto. Esvazia a Stack B e ordena a Stack A!"]);
  const [moves, setMoves] = useState<number>(0);

  const [isWon, setIsWon] = useState<boolean>(false);
  const [showCongrats, setShowCongrats] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Monitorização em tempo real das pilhas via useEffect
  useEffect(() => {
    if (moves === 0) return;

    // Condição de vitória: Stack B vazia, todos os elementos na Stack A e ordem crescente
    const isBEmpty = stackB.length === 0;
    const hasAllElements = stackA.length === initialStackA.length;
    const isSortedAscending = stackA.every((val, i, arr) => i === 0 || arr[i - 1] <= val);

    if (isBEmpty && hasAllElements && isSortedAscending) {
      if (!isWon) {
        setIsWon(true);
        setShowCongrats(true);
        setLogs(prev => [...prev.slice(-4), "🎉 SUCESSO: Stack A ordenada perfeitamente em ordem crescente!"]);
      }
    } else {
      setIsWon(false);
    }
  }, [stackA, stackB, moves]);

  // Efeito de Confetes Ciber/Tech em Canvas
  useEffect(() => {
    if (!showCongrats || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      char: string;
      alpha: number;
    }> = [];

    const colors = ['#38BDF8', '#10B981', '#6366F1', '#F43F5E', '#F59E0B'];
    const chars = ['0', '1', '{', '}', '<', '>', ';', '42', 'C', 'OK'];

    for (let i = 0; i < 140; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2 - 40,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 14 + 10,
        char: chars[Math.floor(Math.random() * chars.length)],
        alpha: 1,
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // Gravidade
        p.alpha -= 0.009;

        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillStyle = p.color;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      });

      particles = particles.filter(p => p.alpha > 0);

      if (particles.length > 0) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [showCongrats]);

  // Helper de Operações
  const registerMove = (logMsg: string) => {
    setMoves(prev => prev + 1);
    setLogs(prev => [...prev.slice(-4), logMsg]);
  };

  // Operações push_swap
  const sa = () => {
    if (stackA.length < 2) return;
    const newA = [...stackA];
    [newA[0], newA[1]] = [newA[1], newA[0]];
    setStackA(newA);
    registerMove("sa : troca 2 primeiros da Stack A");
  };

  const sb = () => {
    if (stackB.length < 2) return;
    const newB = [...stackB];
    [newB[0], newB[1]] = [newB[1], newB[0]];
    setStackB(newB);
    registerMove("sb : troca 2 primeiros da Stack B");
  };

  const pa = () => {
    if (stackB.length === 0) return;
    const newB = [...stackB];
    const val = newB.shift()!;
    setStackA([val, ...stackA]);
    setStackB(newB);
    registerMove(`pa : moveu ${val} de B para topo de A`);
  };

  const pb = () => {
    if (stackA.length === 0) return;
    const newA = [...stackA];
    const val = newA.shift()!;
    setStackA(newA);
    setStackB([val, ...stackB]);
    registerMove(`pb : moveu ${val} de A para topo de B`);
  };

  const ra = () => {
    if (stackA.length < 2) return;
    const newA = [...stackA];
    const val = newA.shift()!;
    newA.push(val);
    setStackA(newA);
    registerMove("ra : roda Stack A para cima");
  };

  const rb = () => {
    if (stackB.length < 2) return;
    const newB = [...stackB];
    const val = newB.shift()!;
    newB.push(val);
    setStackB(newB);
    registerMove("rb : roda Stack B para cima");
  };

  const rra = () => {
    if (stackA.length < 2) return;
    const newA = [...stackA];
    const val = newA.pop()!;
    newA.unshift(val);
    setStackA(newA);
    registerMove("rra : roda Stack A para baixo");
  };

  const rrb = () => {
    if (stackB.length < 2) return;
    const newB = [...stackB];
    const val = newB.pop()!;
    newB.unshift(val);
    setStackB(newB);
    registerMove("rrb : roda Stack B para baixo");
  };

  const handleReset = () => {
    setStackA(initialStackA);
    setStackB([]);
    setMoves(0);
    setIsWon(false);
    setShowCongrats(false);
    setLogs(["// Stack reinicializada. Tenta ordenar com o menor número de movimentos!"]);
  };

  const coreProjects = [
    {
      name: "push_swap",
      tag: "ALGORITMOS DE ORDENAÇÃO",
      desc: "Ordenação de dados numa pilha com limite de instruções em C.",
      concepts: ["O(n log n)", "Gestão de Stacks", "Otimização"],
      githubUrl: "https://github.com/adalberto/push_swap"
    },
    {
      name: "Libft & ft_printf",
      tag: "BIBLIOTECA PADRÃO C",
      desc: "Reescrita da libc e implementação de formatação variádica de strings.",
      concepts: ["malloc", "Ponteiros", "Funções Variádicas"],
      githubUrl: "https://github.com/adalberto/libft"
    },
    {
      name: "get_next_line",
      tag: "GESTÃO DE BUFFERS",
      desc: "Leitura eficiente de linhas a partir de File Descriptors em C.",
      concepts: ["File Descriptors", "Variáveis Estáticas", "Buffers"],
      githubUrl: "https://github.com/adalberto/get_next_line"
    }
  ];

  return (
    <section id="lab42" className="py-24 bg-brand-bg relative border-t border-brand-card/40">
      
      {/* Canvas de Confetes Tech */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />

      {/* Modal Central de Vitória */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <div className="bg-brand-black border-2 border-brand-accent shadow-[0_0_80px_rgba(56,189,248,0.5)] p-8 rounded-2xl text-center max-w-md relative overflow-hidden">
              
              <button 
                onClick={() => setShowCongrats(false)}
                className="absolute top-4 right-4 text-brand-muted hover:text-white p-1 rounded-lg bg-brand-card cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="p-3 bg-brand-accent/10 w-fit rounded-xl mx-auto border border-brand-accent/30 text-brand-accent mb-4">
                <Trophy size={40} className="animate-bounce text-amber-400" />
              </div>

              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-emerald-400 to-sky-300 font-mono mb-2">
                🎉 PARABÉNS!
              </h3>
              
              <p className="text-slate-200 font-mono text-xs mb-6 leading-relaxed">
                Ordenaste com sucesso a Stack A em <strong className="text-brand-accent">{moves} movimentos</strong>!
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 bg-brand-accent text-brand-black font-bold font-mono text-xs rounded-xl hover:bg-sky-300 transition-colors cursor-pointer"
                >
                  Jogar Novamente
                </button>
                <button
                  onClick={() => setShowCongrats(false)}
                  className="px-4 py-3 bg-brand-card text-slate-300 font-mono text-xs rounded-xl border border-brand-card/80 hover:text-white cursor-pointer"
                >
                  Fechar
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <p className="text-brand-muted mt-2 max-w-2xl text-sm font-mono">
            Simulador de push_swap. Esvazia a Stack B e ordena a Stack A do menor (topo) ao maior (base)!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Terminal / Simulador */}
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
              
              {/* Área das Pilhas A e B */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* STACK A */}
                <div className={`p-4 rounded-xl border transition-colors ${isWon ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-brand-card/30 border-brand-card/60'}`}>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-brand-accent font-bold flex items-center gap-1.5">
                      STACK A
                      {isWon && <span className="text-[10px] bg-emerald-500 text-brand-black px-1.5 py-0.2 rounded font-bold">ORDENADA 🎉</span>}
                    </span>
                    <span className="text-brand-muted">({stackA.length})</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-36 justify-center border-t border-brand-card/40 pt-2">
                    {stackA.map((val, idx) => (
                      <motion.div 
                        key={`a-${val}`}
                        layout
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="flex flex-col items-center gap-1 flex-1 max-w-[36px]"
                      >
                        <span className="text-[10px] text-brand-accent font-mono">{val}</span>
                        <div 
                          className={`w-full rounded-t-md transition-colors ${isWon ? 'bg-gradient-to-t from-emerald-600 to-emerald-400' : 'bg-gradient-to-t from-brand-blue to-brand-accent'}`}
                          style={{ height: `${(val / 100) * 80 + 12}px` }}
                        />
                        <span className="text-[9px] text-brand-muted">[{idx}]</span>
                      </motion.div>
                    ))}
                    {stackA.length === 0 && (
                      <span className="text-xs text-brand-muted my-auto font-mono">// Vazia</span>
                    )}
                  </div>
                </div>

                {/* STACK B */}
                <div className="bg-brand-card/30 p-4 rounded-xl border border-brand-card/60">
                  <div className="flex items-center justify-between text-xs text-brand-muted mb-2 font-mono">
                    <span className="text-emerald-400 font-bold">STACK B</span>
                    <span>({stackB.length})</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-36 justify-center border-t border-brand-card/40 pt-2">
                    {stackB.map((val, idx) => (
                      <motion.div 
                        key={`b-${val}`}
                        layout
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="flex flex-col items-center gap-1 flex-1 max-w-[36px]"
                      >
                        <span className="text-[10px] text-emerald-400 font-mono">{val}</span>
                        <div 
                          className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md"
                          style={{ height: `${(val / 100) * 80 + 12}px` }}
                        />
                        <span className="text-[9px] text-brand-muted">[{idx}]</span>
                      </motion.div>
                    ))}
                    {stackB.length === 0 && (
                      <span className="text-xs text-brand-muted my-auto font-mono">// Vazia</span>
                    )}
                  </div>
                </div>

              </div>

              {/* Controles do Simulador */}
              <div className="space-y-3 pt-2 border-t border-brand-card/60">
                <div className="flex items-center justify-between text-xs text-brand-muted font-mono">
                  <span>INSTRUÇÕES DE ORDENAÇÃO:</span>
                  <span>Movimentos: <strong className="text-brand-accent">{moves}</strong></span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <motion.button whileTap={{ scale: 0.92 }} onClick={sa} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-white text-xs font-mono border border-brand-card/80 transition-all cursor-pointer">
                    sa
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.92 }} onClick={sb} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-white text-xs font-mono border border-brand-card/80 transition-all cursor-pointer">
                    sb
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.92 }} onClick={pa} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-brand-accent font-bold text-xs font-mono border border-brand-accent/30 transition-all cursor-pointer">
                    pa
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.92 }} onClick={pb} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-emerald-400 font-bold text-xs font-mono border border-emerald-500/30 transition-all cursor-pointer">
                    pb
                  </motion.button>

                  <motion.button whileTap={{ scale: 0.92 }} onClick={ra} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-white text-xs font-mono border border-brand-card/80 transition-all cursor-pointer">
                    ra
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.92 }} onClick={rb} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-white text-xs font-mono border border-brand-card/80 transition-all cursor-pointer">
                    rb
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.92 }} onClick={rra} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-white text-xs font-mono border border-brand-card/80 transition-all cursor-pointer">
                    rra
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.92 }} onClick={rrb} className="py-2 rounded bg-brand-card hover:bg-brand-blue text-white text-xs font-mono border border-brand-card/80 transition-all cursor-pointer">
                    rrb
                  </motion.button>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded bg-brand-black hover:bg-brand-card text-brand-muted hover:text-white text-xs border border-brand-card/80 transition-all font-mono flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <RotateCcw size={14} />
                  Reiniciar Desafio
                </button>
              </div>

              {/* Console Output */}
              <div className="bg-brand-bg/90 p-3 rounded-lg border border-brand-card/50 text-xs space-y-1 font-mono text-emerald-400/90">
                <AnimatePresence>
                  {logs.map((log, i) => (
                    <motion.div 
                      key={i + log}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-brand-muted">$</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Destaque Módulos 42 */}
          <div className="lg:col-span-5 space-y-4">
            {coreProjects.map((proj, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
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

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};