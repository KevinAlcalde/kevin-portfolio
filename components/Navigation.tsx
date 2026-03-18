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
        scrolled ? 'border-b border-[var(--line)] backdrop-blur-xl bg-[rgba(6,6,8,0.85)]' : ''
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-white font-bold text-sm tracking-widest hover:text-[var(--accent)] transition-colors">
          KA<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="section-label hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Available badge */}
        <a
          href="mailto:kevinalejandroalcalde@gmail.com"
          className="hidden md:flex items-center gap-2 text-xs font-mono text-[var(--green)] border border-[rgba(0,229,160,0.2)] px-3 py-1.5 hover:border-[var(--green)] transition-colors"
          style={{ borderRadius: '2px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
          open to work
        </a>

        {/* Mobile */}
        <button className="md:hidden text-[var(--muted)] hover:text-white" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition-all ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-px w-6 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-current transition-all ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[rgba(6,6,8,0.97)] backdrop-blur-xl border-t border-[var(--line)] px-8 py-6 space-y-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block section-label hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
