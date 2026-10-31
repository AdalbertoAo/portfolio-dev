import React from 'react';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black border-t border-brand-card/60 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-card/40">
          
          {/* Coluna de Contacto Directo */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest">// CANAL ABERTO</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Vamos construir a próxima solução.
            </h2>
            <p className="text-brand-muted text-sm max-w-md leading-relaxed">
              Disponível para novos projetos, consultoria de engenharia Web e oportunidades em equipas de produto de alto rendimento.
            </p>

            <div className="space-y-4 pt-4">
              <a 
                href="mailto:adalberto.silvestre@dev.ao" 
                className="flex items-center gap-3 text-slate-200 hover:text-brand-accent font-mono text-sm transition-colors group"
              >
                <div className="p-2.5 bg-brand-card rounded-lg border border-brand-card/80 group-hover:border-brand-accent/40">
                  <Mail size={18} className="text-brand-accent" />
                </div>
                <span>adalberto.silvestre@dev.ao</span>
              </a>

              <div className="flex items-center gap-3 text-brand-muted font-mono text-sm">
                <div className="p-2.5 bg-brand-card rounded-lg border border-brand-card/80">
                  <MapPin size={18} className="text-brand-accent" />
                </div>
                <span>Luanda, Angola (Disponível para Trabalho Remoto)</span>
              </div>
            </div>
          </div>

          {/* Mini Formulário de Contacto Rápido */}
          <div className="lg:col-span-6 bg-brand-card/40 border border-brand-card rounded-2xl p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-brand-muted mb-2">// Nome</label>
                <input 
                  type="text" 
                  placeholder="Seu nome ou empresa"
                  className="w-full bg-brand-black border border-brand-card rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted mb-2">// Email de Contacto</label>
                <input 
                  type="email" 
                  placeholder="seu.email@dominio.com"
                  className="w-full bg-brand-black border border-brand-card rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-muted mb-2">// Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Descreva brevemente o projeto ou oportunidade..."
                  className="w-full bg-brand-black border border-brand-card rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors font-mono resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-brand-accent text-brand-black font-semibold rounded-lg text-sm hover:bg-sky-300 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>

        {/* Linha de Copyright e Status */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-brand-muted gap-4">
          <div>
            © {new Date().getFullYear()} Adalberto Silvestre — Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>SYSTEM STATUS: 100% ONLINE</span>
            </div>
            <span>42 LUANDA ID: adasilve</span>
          </div>
        </div>

      </div>
    </footer>
  );
};