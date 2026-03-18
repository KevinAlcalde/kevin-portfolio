'use client';

const exps = [
  {
    role: 'Presidente',
    org: 'JCI Mendoza · Cámara Junior Internacional',
    period: '2023',
    c: '#00cfff',
    icon: '👑',
    items: [
      'Lideré la organización local como Presidente electo de JCI Mendoza',
      'Gestioné proyectos de impacto comunitario, liderazgo juvenil e innovación social',
      'Camino: Director Proyecto Eco (2020/21) → Vicepresidente (2022) → Presidente (2023)',
    ],
  },
  {
    role: 'CEO & Co-Founder',
    org: 'Biolix',
    period: '2024 – Presente',
    c: '#00e5a0',
    icon: '🧪',
    items: [
      'Empresa de desarrollo de bioestimulantes con técnicas hidropónicas',
      'Fusión de biotecnología agrícola y sistemas de cultivo controlado',
      'Liderazgo integral: producto, equipo y estrategia de negocio',
    ],
  },
  {
    role: 'Co-Founder',
    org: 'Apapacho · Startup de cuidado de adultos mayores',
    period: '2023 – 2024',
    c: '#ec4899',
    icon: '❤️',
    items: [
      'Co-fundé startup orientada a mejorar la calidad de vida de adultos mayores',
      'Desarrollé soluciones tecnológicas accesibles para conectividad familiar',
      'Gestión de producto y roadmap tecnológico',
    ],
  },
  {
    role: 'Facilitador Tecnológico',
    org: 'Mendoza Futura',
    period: '2021 – 2024',
    c: '#7b5af0',
    icon: '🎓',
    items: [
      'Acompañé a equipos de emprendedores en el desarrollo de sus proyectos tecnológicos',
      'Talleres de programación, IoT, blockchain y emprendimiento digital',
      'Mentoring técnico a startups en etapas tempranas del programa',
    ],
  },
  {
    role: 'CIO · Co-Founder',
    org: 'BIOSPI · Startup de biotecnología',
    period: '2021 – 2023',
    c: '#f59e0b',
    icon: '🧬',
    items: [
      'Chief Information Officer: arquitectura IT, estrategia digital y roadmap tecnológico',
      'Lideré el equipo de desarrollo y la integración de sistemas',
      'Implementé la infraestructura tecnológica inicial de la startup',
    ],
  },
  {
    role: 'Community Manager',
    org: 'GLIKAD SAS',
    period: '2020',
    c: '#3b82f6',
    icon: '📱',
    items: [
      'Producción audiovisual con Adobe Premiere y After Effects',
      'Gestión de redes sociales y estrategia de contenidos digitales',
    ],
  },
  {
    role: 'Operario CNC & Diseñador 3D',
    org: 'MAV-MASHO · Taller Metal-Mecánico',
    period: '2017 – 2018',
    c: '#94a3b8',
    icon: '⚙️',
    items: [
      'Diseño 2D y 3D en AutoCAD para piezas de mecanizado de precisión',
      'Operación de fresadoras y tornos CNC (arranque de viruta)',
    ],
  },
  {
    role: 'Becario I+D',
    org: 'ReLIoT Lab · UTN',
    period: '2021',
    c: '#60a5fa',
    icon: '🔬',
    items: [
      'Reinforcement Learning for the Internet of Things — laboratorio de investigación',
      'Algoritmos de aprendizaje por refuerzo para dispositivos edge IoT',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[var(--accent2)] opacity-[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label text-[var(--accent)]">05</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black text-white mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}>
          Experiencia
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-[var(--line)]">
          {exps.map((e, i) => (
            <div
              key={e.role + e.org}
              className="reveal bg-[var(--bg)] p-6 border-l-2"
              style={{ borderLeftColor: e.c, transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span>{e.icon}</span>
                    <h3 className="text-[var(--text)] font-bold text-sm">{e.role}</h3>
                  </div>
                  <p className="text-sm font-medium" style={{ color: e.c }}>{e.org}</p>
                </div>
                <span className="mono-badge flex-shrink-0">{e.period}</span>
              </div>
              <ul className="space-y-1.5">
                {e.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: e.c }}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
