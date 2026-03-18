'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const roles = [
  'Electronics Engineer',
  'Blockchain Developer',
  'IoT Architect',
  'Startup Founder',
  'Full-Stack Dev',
  'AI & Data Science',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < role.length) {
      t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === role.length) {
      t = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* FBM WebGL shader */}
      <HeroCanvas />

      {/* Very subtle grid — acko.net-like precision */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content — pushed left like acko.net */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full">

        {/* Status badge */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a0] animate-pulse" />
          <span className="section-label text-[#00e5a0]">Disponible · Mendoza, Argentina</span>
        </div>

        {/* Name — massive acko.net-style */}
        <h1
          className="font-black leading-[0.88] tracking-tight text-white mb-8 select-none"
          style={{ fontSize: 'clamp(4.5rem, 13vw, 12rem)' }}
        >
          Kevin<br />
          <span className="g-text">Alcalde</span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="h-px flex-shrink-0"
            style={{ width: 'clamp(2rem, 4vw, 4rem)', background: 'rgba(0,207,255,0.5)' }}
          />
          <p
            className="font-mono text-[var(--muted)] tracking-wide"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)' }}
          >
            {displayed}
            <span className="text-[var(--accent)] animate-pulse">_</span>
          </p>
        </div>

        {/* Brief pitch */}
        <p
          className="text-[var(--muted)] leading-relaxed mb-12 max-w-lg"
          style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)' }}
        >
          Ing. Electrónica (UTN) · Ciencia de Datos & IA (Siglo 21).
          Construyo desde firmware IoT hasta dApps en Ethereum.
          5 startups, 2do puesto NASA Space Apps, YLAI 2024.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#projects"
            className="px-7 py-3 bg-[var(--accent)] text-[#060608] font-bold text-sm tracking-wide hover:bg-white transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-[rgba(255,255,255,0.12)] text-[var(--muted)] text-sm tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            style={{ borderRadius: '2px' }}
          >
            Contacto
          </a>
          <a
            href="https://github.com/KevinAlcalde"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-[rgba(255,255,255,0.12)] text-[var(--muted)] text-sm tracking-wide hover:border-white hover:text-white transition-all"
            style={{ borderRadius: '2px' }}
          >
            GitHub
          </a>
        </div>

        {/* Stats row — compact, minimal */}
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {[
            { n: '5+',   l: 'startups' },
            { n: '#2',   l: 'NASA Space Apps 2019' },
            { n: '2023', l: 'Pdte. JCI Mendoza' },
            { n: 'YLAI', l: '2024 · US Dept. of State' },
            { n: '4',    l: 'idiomas' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-white font-black text-xl">{s.n}</div>
              <div className="section-label mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-3">
        <div className="w-px h-8 bg-[rgba(255,255,255,0.1)] animate-pulse" />
        <span className="section-label">scroll</span>
      </div>
    </section>
  );
}
