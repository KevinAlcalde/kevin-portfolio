'use client';

import dynamic from 'next/dynamic';

const SkillCloud = dynamic(() => import('./SkillCloud'), { ssr: false });

const categories = [
  {
    title: 'Frontend & Web',
    icon: '🌐',
    color: 'border-cyan-500/40',
    items: ['React', 'Next.js', 'TypeScript', 'Three.js', 'WebGL', 'HTML/CSS', 'Tailwind'],
  },
  {
    title: 'Backend & DB',
    icon: '⚙️',
    color: 'border-purple-500/40',
    items: ['Node.js', 'Python', 'Java', 'C++', 'SQL', 'PostgreSQL', 'N8N'],
  },
  {
    title: 'Blockchain & Web3',
    icon: '⛓️',
    color: 'border-amber-500/40',
    items: ['Solidity', 'Hardhat', 'Ethers.js', 'Chainlink', 'Smart Contracts', 'DeFi'],
  },
  {
    title: 'Hardware & IoT',
    icon: '🔌',
    color: 'border-emerald-500/40',
    items: ['Arduino', 'ESP32', 'Node-RED', 'MQTT', 'Sensores', 'CNC', 'AutoCAD'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'border-blue-500/40',
    items: ['AWS', 'Vercel', 'Docker', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    title: 'Diseño & Multimedia',
    icon: '🎨',
    color: 'border-pink-500/40',
    items: ['Figma', 'Rhinoceros 3D', 'Keyshot', 'Adobe Premiere', 'After Effects'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-mono text-cyan-400 text-sm">02.</span>
          <span className="font-mono text-slate-500 text-sm">skills & tools</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
        </div>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white mb-4">
          Stack <span className="gradient-text">Tecnológico</span>
        </h2>
        <p className="reveal text-slate-400 mb-16 max-w-xl">
          Tecnologías que uso para construir desde prototipos de hardware hasta aplicaciones Web3 en producción.
          <span className="text-cyan-400 font-mono text-sm ml-2">// drag the sphere</span>
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Skill Cloud */}
          <div className="reveal flex flex-col items-center">
            <div className="relative">
              {/* Glow ring behind the cloud */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-cyan-500/10" />
                <div className="absolute w-64 h-64 rounded-full border border-purple-500/10" />
              </div>
              <SkillCloud />
            </div>
            <p className="text-slate-500 text-xs font-mono mt-4">↕ Arrastrá para rotar la esfera</p>
          </div>

          {/* Category cards */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div key={cat.title} className={`glass-card p-5 border-l-2 ${cat.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span>{cat.icon}</span>
                  <h3 className="text-white font-semibold text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
