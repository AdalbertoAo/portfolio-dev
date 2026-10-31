import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';

import { TechCursor } from './components/TechCursor';
import { ParticlesBg } from './components/ParticlesBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { ValueTriangle } from './components/ValueTriangle';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Lab42 } from './components/Lab42';
import { Footer } from './components/Footer';

export function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    // Inicialização do AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 font-sans relative selection:bg-brand-accent selection:text-brand-black overflow-x-hidden">
      
      {/* Retículo e Cursor Cibernético HUD */}
      <TechCursor />

      {/* Fundo de Partículas Interativas em Canvas */}
      <ParticlesBg />

      {/* Navegação Fixa */}
      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            /* Vista Dedicada do Detalhe do Projeto */
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
            /* Vista Principal do Portfólio */
            <motion.div
              key="main-portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />

              <div data-aos="fade-up">
                <AboutMe />
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <ValueTriangle />
              </div>

              <div data-aos="zoom-in-up" data-aos-delay="150">
                <TechStack />
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <Projects onSelectProject={(project) => setSelectedProject(project)} />
              </div>

              <div data-aos="flip-up" data-aos-delay="150">
                <Lab42 />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;