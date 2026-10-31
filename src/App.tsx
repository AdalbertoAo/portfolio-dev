import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { ValueTriangle } from './components/ValueTriangle';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Lab42 } from './components/Lab42';
import { Footer } from './components/Footer';
import { ParticlesBg } from './components/ParticlesBg';
import { SectionReveal } from './components/SectionReveal';

export function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 font-sans relative selection:bg-brand-accent selection:text-brand-black">
      
      {/* 1. Fundo Dinâmico de Partículas Interativas */}
      <ParticlesBg />

      {/* 2. Navegação Fixa com Transparência Blur */}
      <Navbar />

      {/* 3. Conteúdo Principal */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="project-detail"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <ProjectDetail 
                project={selectedProject} 
                onBack={() => setSelectedProject(null)} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="main-portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              
              <SectionReveal>
                <AboutMe />
              </SectionReveal>

              <SectionReveal>
                <ValueTriangle />
              </SectionReveal>

              <SectionReveal>
                <TechStack />
              </SectionReveal>

              <SectionReveal>
                <Projects onSelectProject={(project) => setSelectedProject(project)} />
              </SectionReveal>

              <SectionReveal>
                <Lab42 />
              </SectionReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Rodapé */}
      <Footer />
    </div>
  );
}

export default App;