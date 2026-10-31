import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 font-sans">
      <Navbar />

      <main>
        {selectedProject ? (
          // Página Dedicada do Projeto Solicitado
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        ) : (
          // Vista Principal do Portfólio
          <>
            <Hero />
            <AboutMe />
            <ValueTriangle />
            <TechStack />
            <Projects onSelectProject={(project) => setSelectedProject(project)} />
            <Lab42 />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;