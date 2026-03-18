'use client';

import { useEffect, useRef } from 'react';

// Pure military-khaki-olive palette for the 3D cloud
const SKILLS = [
  { label: 'React',       color: '#8aaa48' },
  { label: 'Next.js',     color: '#c0bb95' },
  { label: 'Three.js',    color: '#9aaa4a' },
  { label: 'TypeScript',  color: '#5a7888' },
  { label: 'Node.js',     color: '#789050' },
  { label: 'Python',      color: '#b8a038' },
  { label: 'Solidity',    color: '#b07820' },
  { label: 'Blockchain',  color: '#c08020' },
  { label: 'Web3',        color: '#F74C19' },  // highlight
  { label: 'IoT',         color: '#5a8a48' },
  { label: 'SQL',         color: '#607080' },
  { label: 'C++',         color: '#8a4040' },
  { label: 'Java',        color: '#9a5820' },
  { label: 'Docker',      color: '#507088' },
  { label: 'AWS',         color: '#b07028' },
  { label: 'N8N',         color: '#F74C19' },  // highlight
  { label: 'Arduino',     color: '#4a8870' },
  { label: 'Hardhat',     color: '#a09820' },
  { label: 'AutoCAD',     color: '#8a3828' },
  { label: 'Rhinoceros',  color: '#787860' },
  { label: 'WebGL',       color: '#7a9640' },
  { label: 'Git',         color: '#9a5028' },
  { label: 'GLSL',        color: '#5a8868' },
];

export default function SkillCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const size = Math.min(container.clientWidth, container.clientHeight);
    const RADIUS = size * 0.42;
    const N = SKILLS.length;

    const positions = SKILLS.map((_, i) => {
      const phi   = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: RADIUS * Math.sin(phi) * Math.cos(theta),
        y: RADIUS * Math.sin(phi) * Math.sin(theta),
        z: RADIUS * Math.cos(phi),
      };
    });

    const spans: HTMLSpanElement[] = [];
    SKILLS.forEach((skill, _i) => {
      const span = document.createElement('span');
      span.textContent = skill.label;
      span.style.position   = 'absolute';
      span.style.left       = '50%';
      span.style.top        = '50%';
      span.style.fontFamily = 'JetBrains Mono, monospace';
      span.style.fontSize   = '11px';
      span.style.fontWeight = '600';
      span.style.letterSpacing = '0.08em';
      span.style.color      = skill.color;
      span.style.cursor     = 'default';
      span.style.userSelect = 'none';
      span.style.textShadow = `0 0 6px ${skill.color}44`;
      span.style.transition = 'font-size 0.3s, text-shadow 0.3s';
      span.style.whiteSpace = 'nowrap';
      span.style.textTransform = 'uppercase';
      container.appendChild(span);
      spans.push(span);

      span.addEventListener('mouseenter', () => {
        span.style.fontSize   = '13px';
        span.style.textShadow = `0 0 14px ${skill.color}, 0 0 28px ${skill.color}55`;
      });
      span.addEventListener('mouseleave', () => {
        span.style.fontSize   = '11px';
        span.style.textShadow = `0 0 6px ${skill.color}44`;
      });
    });

    let angleY = 0.002, angleX = 0.0008;
    let raf: number;
    let dragging = false, lx = 0, ly = 0;

    const onDown = (e: MouseEvent) => { dragging = true; lx = e.clientX; ly = e.clientY; };
    const onUp   = () => { dragging = false; };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      angleY = (e.clientX - lx) * 0.0003;
      angleX = (e.clientY - ly) * 0.0003;
      lx = e.clientX; ly = e.clientY;
    };

    container.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);

    let rotX = 0, rotY = 0;

    const render = () => {
      raf = requestAnimationFrame(render);
      rotY += angleY; rotX += angleX;
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

      spans.forEach((span, i) => {
        const { x, y, z } = positions[i];
        const rx  = x * cosY - z * sinY;
        const rz  = x * sinY + z * cosY;
        const ry  = y * cosX - rz * sinX;
        const rz2 = y * sinX + rz * cosX;
        const scale = (rz2 + RADIUS * 2) / (RADIUS * 3);
        span.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`;
        span.style.opacity   = (scale * 0.85 + 0.1).toString();
        span.style.zIndex    = Math.floor(scale * 100).toString();
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
      className="relative w-full aspect-square"
      style={{ maxWidth: 360, cursor: 'grab' }}
      title="Drag to rotate"
    />
  );
}
