'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false });

const links = [
  { label: 'about',     href: '#about' },
  { label: 'skills',    href: '#skills' },
  { label: 'projects',  href: '#projects' },
  { label: 'github',    href: '#github' },
  { label: 'exp',       href: '#experience' },
  { label: 'logros',    href: '#achievements' },
  { label: 'contact',   href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={scrolled ? {
        background: 'var(--glass)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--line)',
      } : {}}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-4 flex items-center gap-8">
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'Orbitron, monospace',
            color: 'var(--text)',
            fontWeight: 800,
            fontSize: '0.9rem',
            letterSpacing: '0.15em',
            marginRight: 'auto',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--highlight)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
        >
          KA<span style={{ color: 'var(--highlight)' }}>_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="section-label transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Status badge */}
        <a
          href="mailto:kevinalejandroalcalde@gmail.com"
          className="hidden lg:flex items-center gap-2"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
            color: 'var(--green)',
            border: '1px solid rgba(77,122,50,0.22)',
            padding: '5px 10px',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--green)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,122,50,0.22)')}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--green)' }}
          />
          STATUS:ONLINE
        </a>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-8 py-6 space-y-5"
          style={{
            background: 'var(--glass)',
            backdropFilter: 'blur(14px)',
            borderTop: '1px solid var(--line)',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block section-label transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
