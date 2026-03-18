'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'about',        href: '#about' },
  { label: 'skills',       href: '#skills' },
  { label: 'projects',     href: '#projects' },
  { label: 'github',       href: '#github' },
  { label: 'experience',   href: '#experience' },
  { label: 'achievements', href: '#achievements' },
  { label: 'contact',      href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b backdrop-blur-xl'
          : ''
      }`}
      style={scrolled ? {
        background: 'rgba(8,8,7,0.88)',
        borderColor: 'rgba(122,150,64,0.12)',
      } : {}}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-sm tracking-[0.2em] hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)', fontWeight: 700 }}>
          KA<span style={{ color: 'var(--accent)' }}>_</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="section-label hover:text-[var(--text)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Status badge */}
        <a
          href="mailto:kevinalejandroalcalde@gmail.com"
          className="hidden md:flex items-center gap-2 text-[0.65rem] tracking-widest uppercase px-3 py-1.5 transition-colors"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: 'var(--green)',
            border: '1px solid rgba(77,122,50,0.25)',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(77,122,50,0.6)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(77,122,50,0.25)')}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
          STATUS: ONLINE
        </a>

        {/* Mobile */}
        <button
          className="md:hidden"
          style={{ color: 'var(--muted)' }}
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition-all ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-px w-6 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-current transition-all ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl px-8 py-6 space-y-5"
          style={{ background: 'rgba(8,8,7,0.97)', borderTop: '1px solid var(--line)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block section-label hover:text-[var(--text)] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
