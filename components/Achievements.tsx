'use client';

const featured = [
  {
    icon: '🚀',
    title: '2do Lugar · NASA Space Apps',
    sub: 'Hackathon NASA 2019 · Provincial ARG',
    desc: 'Proyecto SIGNAL.GK · Equipo "Avengers of Earth". Análisis de señales satelitales para monitoreo ambiental.',
    c: '#3b82f6',
    year: '2019',
  },
  {
    icon: '🇺🇸',
    title: 'YLAI Fellow 2024',
    sub: 'Young Leaders of the Americas · US Dept. of State',
    desc: 'Seleccionado por el Departamento de Estado de EE.UU. para el programa de liderazgo joven de las Américas.',
    c: '#00cfff',
    year: '2024',
  },
  {
    icon: '👑',
    title: 'Presidente · JCI Mendoza',
    sub: 'Cámara Junior Internacional',
    desc: 'Dir. Eco 2020/21 → Vicepresidente 2022 → Presidente 2023. Máximo cargo de la organización local.',
    c: '#7b5af0',
    year: '2023',
  },
  {
    icon: '🏛️',
    title: 'Mención Legislatura Mendoza',
    sub: 'Innovación Sustentable · Jóvenes Protagonistas',
    desc: 'Mención especial en rubro Innovación Sustentable. Reconocimiento provincial por impacto social.',
    c: '#00e5a0',
    year: '2019',
  },
  {
    icon: '🌍',
    title: 'Young Influencers Argentina',
    sub: 'Instituto Goethe · Cambio Climático',
    desc: 'Seleccionado para campañas sobre cambio climático y medio ambiente en el programa Goethe Institut.',
    c: '#34d399',
    year: '2022',
  },
  {
    icon: '🥇',
    title: '1er Puesto · Maipú Joven',
    sub: 'Feria de Proyectos',
    desc: 'Primer puesto en feria de proyectos juveniles de Maipú. Innovación y emprendimiento temprano.',
    c: '#f59e0b',
    year: '2016',
  },
  {
    icon: '🔭',
    title: 'CHANGER CAMP 2019',
    sub: 'Programa de Liderazgo e Innovación',
    desc: 'Seleccionado para participar del CHANGER CAMP — espacio de changemakers y líderes jóvenes.',
    c: '#ec4899',
    year: '2019',
  },
  {
    icon: '🔬',
    title: 'Becario ReLIoT · UTN',
    sub: 'Laboratorio I+D · Investigación',
    desc: 'Beca en el lab de Reinforcement Learning for IoT (ReLIoT) de la Universidad Tecnológica Nacional.',
    c: '#60a5fa',
    year: '2021',
  },
];

const courses = [
  'Diplomatura IoT · UTN',
  'Energía Solar Fotovoltaica · UTN',
  'Blockchain Bootcamp · Chainlink/ETH Kipu',
  'Ciberseguridad · CISCO',
  'PLAN 111MIL · Min. de Educación',
  'Java Intermedio · CISCO Oracle Academy',
  'CNC Mecanizado 120hs · Fundación YPF',
  'Modelado 3D Rhinoceros & Keyshot',
  'Planificación de Proyectos · Tec. de Monterrey',
  'Creators Lab 2021',
  'AWS Cloud Practitioner (en curso)',
  'Python (en curso)',
  'HTML / CSS / JS · Junior Achievement',
  'Hacking Ético · CeReCoN',
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 bg-[var(--accent)] opacity-[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label text-[var(--accent)]">06</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black text-white mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}>
          Logros
        </h2>

        {/* Featured grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] mb-20">
          {featured.map((a, i) => (
            <div
              key={a.title}
              className="reveal bg-[var(--bg)] p-5 group hover:bg-[var(--bg3)] transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300 block">
                  {a.icon}
                </span>
                <span className="mono-badge">{a.year}</span>
              </div>
              <h3 className="text-[var(--text)] font-bold text-sm leading-tight mb-1">{a.title}</h3>
              <p className="text-xs font-medium mb-3" style={{ color: a.c }}>{a.sub}</p>
              <p className="text-[var(--muted)] text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Courses strip */}
        <div className="reveal">
          <h3 className="section-label text-[var(--accent)] mb-6">Cursos & Certificaciones</h3>
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <span
                key={c}
                className="text-[0.72rem] px-3 py-1.5 bg-[rgba(255,255,255,0.03)] border border-[var(--line)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[rgba(255,255,255,0.1)] transition-all"
                style={{ borderRadius: '2px' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
