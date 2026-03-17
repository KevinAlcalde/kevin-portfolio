'use client';

const projects = [
  {
    name: 'CloudFarm',
    emoji: '🌿',
    tagline: 'Hidroponia IoT para forraje verde',
    description:
      'Startup de producción intensiva de forraje verde hidropónico para pequeños y grandes productores. Sistema IoT con control de temperatura, humedad y microaspersión. Reducción del 50–70% en consumo hídrico.',
    tags: ['IoT', 'Arduino', 'Node-RED', 'Sostenibilidad', 'Agritech'],
    color: 'from-emerald-500/20 to-transparent',
    border: 'border-emerald-500/30',
    badge: 'Founder',
    badgeColor: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    name: 'Apapacho',
    emoji: '❤️',
    tagline: 'Tech para adultos mayores',
    description:
      'Co-Founder de startup orientada a adultos de la tercera edad, desarrollando soluciones tecnológicas accesibles para mejorar su calidad de vida y conectividad familiar.',
    tags: ['HealthTech', 'React', 'Node.js', 'UX'],
    color: 'from-pink-500/15 to-transparent',
    border: 'border-pink-500/30',
    badge: 'Co-Founder',
    badgeColor: 'bg-pink-500/20 text-pink-400',
  },
  {
    name: 'MÜLLDER',
    emoji: '♻️',
    tagline: 'Trazabilidad de residuos en Blockchain',
    description:
      'Sistema blockchain para trazabilidad de residuos orgánicos, materiales reciclables y reutilizables. Smart contracts en Solidity para transparencia y accountability ambiental.',
    tags: ['Solidity', 'Blockchain', 'Web3', 'Green Tech', 'Ethereum'],
    color: 'from-cyan-500/15 to-transparent',
    border: 'border-cyan-500/30',
    badge: 'Founder',
    badgeColor: 'bg-cyan-500/20 text-cyan-400',
  },
  {
    name: 'Canopiis',
    emoji: '🌱',
    tagline: 'AgriTech + Chainlink Oracle',
    description:
      'Proyecto de hidroponia agrícola con integración de Chainlink para oráculos de datos ambientales. Combina IoT con blockchain para crear un sistema de agricultura de precisión descentralizado.',
    tags: ['Chainlink', 'IoT', 'Solidity', 'Web3', 'Blockchain'],
    color: 'from-green-500/15 to-transparent',
    border: 'border-green-500/30',
    badge: 'Proyecto',
    badgeColor: 'bg-green-500/20 text-green-400',
  },
  {
    name: 'Dimo AI Workflow',
    emoji: '🤖',
    tagline: 'WhatsApp AI con N8N',
    description:
      'Workflow de N8N que integra Evolution API (WhatsApp), OpenAI y PostgreSQL para crear un asistente inteligente conversacional. Automatización avanzada de procesos de negocio.',
    tags: ['N8N', 'OpenAI', 'PostgreSQL', 'WhatsApp', 'Automation'],
    color: 'from-violet-500/15 to-transparent',
    border: 'border-violet-500/30',
    badge: 'Proyecto',
    badgeColor: 'bg-violet-500/20 text-violet-400',
  },
  {
    name: 'SIGNAL.GK',
    emoji: '🚀',
    tagline: '2do lugar NASA Space Apps 2019',
    description:
      'Proyecto ganador del 2do puesto a nivel provincial en la NASA Space Apps Challenge 2019. Equipo "Avengers of Earth". Solución innovadora para análisis de señales satelitales.',
    tags: ['NASA', 'Hackathon', 'Python', 'Data', '2do Lugar ARG'],
    color: 'from-blue-500/20 to-transparent',
    border: 'border-blue-500/40',
    badge: '🏆 2do Lugar',
    badgeColor: 'bg-blue-500/20 text-blue-300',
  },
  {
    name: 'BIOSPI',
    emoji: '🧬',
    tagline: 'CIO en startup de biotech',
    description:
      'Desempeñé el cargo de CIO (Chief Information Officer) en esta startup de biotecnología, liderando la arquitectura tecnológica, infraestructura IT y estrategia digital de la empresa.',
    tags: ['Leadership', 'CIO', 'Startup', 'BioTech', 'IT Strategy'],
    color: 'from-amber-500/15 to-transparent',
    border: 'border-amber-500/30',
    badge: 'CIO',
    badgeColor: 'bg-amber-500/20 text-amber-400',
  },
  {
    name: '3D Developer Portfolio',
    emoji: '🎮',
    tagline: 'Portfolio interactivo con Three.js',
    description:
      'Proyecto de portfolio 3D inmersivo construido con Three.js y Vite. Escenas interactivas con modelos 3D, efectos de partículas y animaciones WebGL de alto rendimiento.',
    tags: ['Three.js', 'WebGL', 'Vite', '3D', 'JavaScript'],
    color: 'from-cyan-500/15 to-transparent',
    border: 'border-cyan-500/30',
    badge: 'Personal',
    badgeColor: 'bg-cyan-500/20 text-cyan-400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-mono text-cyan-400 text-sm">03.</span>
          <span className="font-mono text-slate-500 text-sm">projects & ventures</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
        </div>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white mb-4">
          Proyectos <span className="gradient-text">& Startups</span>
        </h2>
        <p className="reveal text-slate-400 mb-16 max-w-2xl">
          Desde hidroponia IoT hasta blockchain y AI — proyectos que combinan ingeniería con impacto real.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="reveal glass-card p-6 group relative overflow-hidden cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <span className="text-3xl">{p.emoji}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {p.name}
                </h3>
                <p className="text-cyan-400 text-xs font-mono mb-3">{p.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border highlight on hover */}
              <div className={`absolute inset-0 rounded-2xl border ${p.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
