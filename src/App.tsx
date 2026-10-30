import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueTriangle } from './components/ValueTriangle';
import { Projects } from './components/Projects';

export function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ValueTriangle />
        <Projects />
      </main>
    </div>
  );
}

export default App;