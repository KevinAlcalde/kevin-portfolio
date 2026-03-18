'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const roles = [
  'Electronics_Engineer',
  'Blockchain_Dev',
  'IoT_Architect',
  'Startup_Founder',
  'Full_Stack_Dev',
  'AI_&_Data_Sci',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < role.length) {
      t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === role.length) {
      t = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* FBM WebGL shader — olive/military palette */}
      <HeroCanvas />

      {/* Subtle scanline texture (on top of shader) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px)',
        }}
      />

      {/* Grid overlay — tactical map feel */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(122,150,64,1) 1px, transparent 1px), linear-gradient(90deg, rgba(122,150,64,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full">

        {/* ID tag — military style */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-3 py-1.5"
            style={{ border: '1px solid rgba(77,122,50,0.3)', background: 'rgba(77,122,50,0.06)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
            <span className="section-label" style={{ color: 'var(--green)' }}>
              ID: ALCALDE_K · MDZ · ARG · ONLINE
            </span>
          </div>
        </div>

        {/* Name — Orbitron massive */}
        <h1
          className="font-black leading-[0.85] tracking-tight mb-8 select-none"
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(4rem, 12.5vw, 11.5rem)',
            color: 'var(--text)',
          }}
        >
          KEVIN<br />
          <span className="g-text">ALCALDE</span>
        </h1>

        {/* Typewriter — terminal style */}
        <div className="flex items-center gap-3 mb-10">
          <span className="section-label" style={{ color: 'var(--accent)' }}>&gt;_</span>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
            color: 'var(--muted)',
            letterSpacing: '0.05em',
          }}>
            {displayed}
            <span className="blink" style={{ color: 'var(--accent)' }}>█</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="mb-12 max-w-lg leading-relaxed"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
            color: 'var(--muted)',
            lineHeight: '1.8',
          }}>
          <span style={{ color: 'var(--accent)' }}>//</span> Ing. Electrónica UTN + Lic. IA Siglo 21<br />
          <span style={{ color: 'var(--accent)' }}>//</span> Firmware → Smart Contracts → WebGL<br />
          <span style={{ color: 'var(--accent)' }}>//</span> 5 startups · NASA 2nd place · YLAI 2024
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mb-20">
          {[
            { label: '[ PROYECTOS ]', href: '#projects', primary: true },
            { label: '[ GITHUB ]',    href: '#github',   primary: false },
            { label: '[ CONTACTO ]',  href: '#contact',  primary: false },
          ].map((b) => (
            <a
              key={b.href}
              href={b.href}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                padding: '10px 20px',
                border: b.primary
                  ? '1px solid var(--accent)'
                  : '1px solid rgba(122,150,64,0.25)',
                background: b.primary
                  ? 'rgba(122,150,64,0.12)'
                  : 'transparent',
                color: b.primary ? 'var(--accent)' : 'var(--muted)',
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(122,150,64,0.18)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = b.primary ? 'rgba(122,150,64,0.12)' : 'transparent';
                (e.currentTarget as HTMLElement).style.color = b.primary ? 'var(--accent)' : 'var(--muted)';
                (e.currentTarget as HTMLElement).style.borderColor = b.primary ? 'var(--accent)' : 'rgba(122,150,64,0.25)';
              }}
            >
              {b.label}
            </a>
          ))}
        </div>

        {/* Stats — terminal table */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {[
            { n: '05',    l: 'STARTUPS' },
            { n: '#2',    l: 'NASA_SPACE_APPS' },
            { n: 'PDTE',  l: 'JCI_2023' },
            { n: 'YLAI',  l: 'US_DEPT_STATE_2024' },
            { n: '04',    l: 'IDIOMAS' },
          ].map((s) => (
            <div key={s.l}>
              <div style={{
                fontFamily: 'Orbitron, monospace',
                color: 'var(--text)',
                fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                fontWeight: 800,
              }}>{s.n}</div>
              <div className="section-label mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-3">
        <div className="w-px h-8 animate-pulse" style={{ background: 'rgba(122,150,64,0.2)' }} />
        <span className="section-label">SCROLL_DOWN</span>
      </div>
    </section>
  );
}
