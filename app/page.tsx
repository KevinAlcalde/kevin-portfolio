'use client';

import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GitHubRepos from '../components/GitHubRepos';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import VisitorWidget from '../components/VisitorWidget';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor glow
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', onMove);

    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('mousemove', onMove);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-glow" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubRepos />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <VisitorWidget />
    </>
  );
}
