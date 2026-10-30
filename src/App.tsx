import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueTriangle } from './components/ValueTriangle';
import { Projects } from './components/Projects';

export function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 font-sans">
      {/* Navegação Fixa */}
      <Navbar />

      {/* Secções Principais */}
      <main>
        <Hero />
        <ValueTriangle />
        <Projects />
        
        {/* Placeholder temporário para validação da grelha antes das últimas secções */}
        <section className="py-20 text-center border-t border-brand-card/40 bg-brand-black/40">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card text-brand-muted font-mono text-xs border border-brand-card/80">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
            Aguardando validação dos testes para renderizar: [ 42_Lab & Footer ]
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;