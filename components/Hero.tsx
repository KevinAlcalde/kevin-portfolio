'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const roles = [
  'Electronics Engineer',
  'Full-Stack Developer',
  'Blockchain Developer',
  'IoT Specialist',
  'Serial Entrepreneur',
  'Tech Innovator',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js background */}
      <HeroCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)'
      }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-mono mb-8 animate-fadeInUp">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos · Mendoza, Argentina
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-none" style={{animationDelay: '0.2s'}}>
          <span className="block text-white">Kevin</span>
          <span className="block gradient-text">Alcalde</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl font-mono text-slate-300">
            <span className="text-cyan-400">{'<'}</span>
            <span className="text-slate-200 font-semibold">{displayed}</span>
            <span className="text-cyan-400 animate-pulse">|</span>
            <span className="text-cyan-400">{'/>'}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Estudiante de <span className="text-cyan-300 font-medium">Ingeniería Electrónica</span> en UTN Mendoza.
          Emprendedor en serie con proyectos de <span className="text-purple-400 font-medium">IoT, Blockchain y sostenibilidad</span>.
          Presidente de JCI Mendoza 2023. 2do lugar NASA Space Apps.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-cyan-500 text-[#030712] font-bold text-sm hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:scale-105"
          >
            Contactarme
          </a>
          <a
            href="mailto:kevinalejandroalcalde@gmail.com"
            className="px-8 py-3 rounded-xl border border-purple-500/40 text-purple-300 font-semibold text-sm hover:bg-purple-500/10 hover:border-purple-400 transition-all hover:scale-105"
          >
            kevinalejandroalcalde@gmail.com
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '5+', label: 'Startups fundadas' },
            { value: '2nd', label: 'NASA Space Apps 2019' },
            { value: '2023', label: 'Presidente JCI' },
            { value: '3+', label: 'Idiomas' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-3xl font-black gradient-text-cyan">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span className="font-mono">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-500/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
