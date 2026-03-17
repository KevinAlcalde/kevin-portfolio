'use client';

const experiences = [
  {
    role: 'Presidente',
    org: 'JCI Mendoza (Cámara Junior Internacional)',
    period: '2023',
    color: 'border-cyan-400',
    dot: 'bg-cyan-400',
    icon: '👑',
    items: [
      'Lideré la organización local de JCI Mendoza como presidente electo',
      'Gestioné proyectos de impacto comunitario y desarrollo de liderazgo',
      'Coordiné equipos multidisciplinarios para iniciativas de innovación social',
    ],
  },
  {
    role: 'Co-Founder & Tech Lead',
    org: 'CloudFarm',
    period: '2021 – Presente',
    color: 'border-emerald-400',
    dot: 'bg-emerald-400',
    icon: '🌿',
    items: [
      'Desarrollé sistema IoT para control de hidroponia (temperatura, humedad, microaspersión)',
      'Implementé arquitectura de monitoreo remoto con Arduino y Node-RED',
      'Reducción del consumo hídrico del 50–70% respecto a métodos convencionales',
    ],
  },
  {
    role: 'Facilitador de Habilidades Tecnológicas',
    org: 'Mendoza Futura',
    period: '2022',
    color: 'border-purple-400',
    dot: 'bg-purple-400',
    icon: '🎓',
    items: [
      'Acompañé a alumnos del programa en el desarrollo de sus emprendimientos tecnológicos',
      'Impartí talleres de programación, IoT y emprendimiento digital',
      'Mentoring técnico a equipos de startups en etapa temprana',
    ],
  },
  {
    role: 'CIO (Chief Information Officer)',
    org: 'BIOSPI',
    period: '2020 – 2021',
    color: 'border-amber-400',
    dot: 'bg-amber-400',
    icon: '🧬',
    items: [
      'Lideré la arquitectura tecnológica e infraestructura IT de la startup',
      'Definí la estrategia digital y roadmap tecnológico de la empresa',
      'Gestioné el equipo de desarrollo y la integración de sistemas',
    ],
  },
  {
    role: 'Community Manager',
    org: 'GLIKAD SAS',
    period: '2020',
    color: 'border-pink-400',
    dot: 'bg-pink-400',
    icon: '📱',
    items: [
      'Creación de contenido audiovisual con Adobe Premiere y After Effects',
      'Gestión de redes sociales y estrategia de contenidos digitales',
      'Producción de videos corporativos y campañas digitales',
    ],
  },
  {
    role: 'Operario CNC & Diseñador 3D',
    org: 'Empresa de Mecanizado Industrial',
    period: '6 meses',
    color: 'border-slate-400',
    dot: 'bg-slate-400',
    icon: '⚙️',
    items: [
      'Diseño de piezas 2D y 3D en AutoCAD',
      'Operación de fresadoras y tornos CNC (arranque de viruta)',
      'Mantenimiento y limpieza de maquinaria industrial de precisión',
    ],
  },
  {
    role: 'Becario de Investigación',
    org: 'ReLIoT Lab — UTN',
    period: '2021',
    color: 'border-blue-400',
    dot: 'bg-blue-400',
    icon: '🔬',
    items: [
      'Investigación en Reinforcement Learning aplicado al Internet of Things',
      'Laboratorio de I+D en Universidad Tecnológica Nacional',
      'Desarrollo de algoritmos de aprendizaje para dispositivos edge',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-mono text-cyan-400 text-sm">04.</span>
          <span className="font-mono text-slate-500 text-sm">work experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
        </div>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white mb-16">
          Experiencia <span className="gradient-text">Laboral</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.org}
                className="reveal relative pl-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Dot */}
                <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full ${exp.dot} flex items-center justify-center text-sm shadow-lg`}>
                  {exp.icon}
                </div>

                {/* Card */}
                <div className={`glass-card p-5 border-l-2 ${exp.color}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold">{exp.role}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{exp.org}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-cyan-500 mt-0.5 flex-shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
