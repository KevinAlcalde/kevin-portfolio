'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Cursor glow follow
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', onMove);

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-slate-500 text-sm">
        <p>
          Diseñado & construido por{' '}
          <span className="text-cyan-400 font-medium">Kevin Alcalde</span> · Mendoza, Argentina
        </p>
        <p className="mt-1 font-mono text-xs text-slate-600">
          {'<'} Three.js · Next.js · WebGL {'>'}
        </p>
      </footer>
    </>
  );
}
