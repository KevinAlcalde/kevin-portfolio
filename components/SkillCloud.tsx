'use client';

import { useEffect, useRef } from 'react';

const SKILLS = [
  { label: 'React', color: '#61dafb' },
  { label: 'Next.js', color: '#ffffff' },
  { label: 'Three.js', color: '#06b6d4' },
  { label: 'TypeScript', color: '#3178c6' },
  { label: 'Node.js', color: '#68a063' },
  { label: 'Python', color: '#ffd43b' },
  { label: 'Solidity', color: '#a855f7' },
  { label: 'Blockchain', color: '#f7931a' },
  { label: 'Web3', color: '#e040fb' },
  { label: 'IoT', color: '#10b981' },
  { label: 'SQL', color: '#4479a1' },
  { label: 'C++', color: '#00599c' },
  { label: 'Java', color: '#ed8b00' },
  { label: 'Docker', color: '#2496ed' },
  { label: 'AWS', color: '#ff9900' },
  { label: 'N8N', color: '#ea4b71' },
  { label: 'Arduino', color: '#00979d' },
  { label: 'Hardhat', color: '#f7e557' },
  { label: 'AutoCAD', color: '#e51837' },
  { label: 'Rhinoceros', color: '#808080' },
  { label: 'WebGL', color: '#06b6d4' },
  { label: 'Git', color: '#f05032' },
  { label: 'CISCO', color: '#1ba0d7' },
];

interface Position {
  x: number;
  y: number;
  z: number;
}

export default function SkillCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const RADIUS = 160;
    const N = SKILLS.length;

    // Distribute on sphere using Fibonacci lattice
    const positions: Position[] = SKILLS.map((_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: RADIUS * Math.sin(phi) * Math.cos(theta),
        y: RADIUS * Math.sin(phi) * Math.sin(theta),
        z: RADIUS * Math.cos(phi),
      };
    });

    // Create span elements
    const spans: HTMLSpanElement[] = [];
    SKILLS.forEach((skill, i) => {
      const span = document.createElement('span');
      span.textContent = skill.label;
      span.style.color = skill.color;
      span.style.position = 'absolute';
      span.style.left = '50%';
      span.style.top = '50%';
      span.style.transform = 'translate(-50%, -50%)';
      span.style.fontSize = '13px';
      span.style.fontWeight = '600';
      span.style.cursor = 'default';
      span.style.userSelect = 'none';
      span.style.fontFamily = 'Inter, sans-serif';
      span.style.letterSpacing = '0.5px';
      span.style.textShadow = `0 0 8px ${skill.color}66`;
      span.style.transition = 'font-size 0.3s ease, text-shadow 0.3s ease';
      span.style.whiteSpace = 'nowrap';
      container.appendChild(span);
      spans.push(span);

      span.addEventListener('mouseenter', () => {
        span.style.fontSize = '15px';
        span.style.textShadow = `0 0 16px ${skill.color}, 0 0 30px ${skill.color}88`;
      });
      span.addEventListener('mouseleave', () => {
        span.style.fontSize = '13px';
        span.style.textShadow = `0 0 8px ${skill.color}66`;
      });
    });

    let angleX = 0.0015;
    let angleY = 0.003;
    let raf: number;

    // Mouse drag
    let dragging = false;
    let lastX = 0, lastY = 0;
    const onDown = (e: MouseEvent) => { dragging = true; lastX = e.clientX; lastY = e.clientY; };
    const onUp = () => { dragging = false; };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      angleY = dx * 0.0004;
      angleX = dy * 0.0004;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    container.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);

    let rotX = 0, rotY = 0;

    const render = () => {
      raf = requestAnimationFrame(render);
      rotY += angleY;
      rotX += angleX;

      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

      spans.forEach((span, i) => {
        const { x, y, z } = positions[i];

        // Rotate Y
        const rx = x * cosY - z * sinY;
        const rz = x * sinY + z * cosY;

        // Rotate X
        const ry = y * cosX - rz * sinX;
        const rz2 = y * sinX + rz * cosX;

        const scale = (rz2 + RADIUS * 2) / (RADIUS * 3);

        span.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`;
        span.style.opacity = (scale * 0.9 + 0.1).toString();
        span.style.zIndex = Math.floor(scale * 100).toString();
      });
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
      spans.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: 380, height: 380, cursor: 'grab' }}
      title="Drag to rotate"
    />
  );
}
