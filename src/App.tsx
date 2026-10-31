import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { ValueTriangle } from './components/ValueTriangle';
import { Projects } from './components/Projects';
import { Lab42 } from './components/Lab42';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <ValueTriangle />
        <Projects />
        <Lab42 />
      </main>
      <Footer />
    </div>
  );
}

export default App;