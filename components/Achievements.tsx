'use client';

const achievements = [
  {
    icon: '🚀',
    title: '2do Lugar NASA Space Apps',
    subtitle: 'Hackathon NASA 2019',
    desc: 'Proyecto SIGNAL.GK con el equipo "Avengers of Earth". 2do puesto a nivel provincial en la NASA Space Apps Challenge.',
    color: 'border-blue-400/40',
    glow: 'hover:shadow-blue-500/20',
    tag: '2019',
  },
  {
    icon: '👑',
    title: 'Presidente JCI Mendoza',
    subtitle: 'Cámara Junior Internacional',
    desc: 'Lideré la organización local de JCI Mendoza en 2023. Director de Proyecto Eco 2020/21, Vicepresidente 2022.',
    color: 'border-cyan-400/40',
    glow: 'hover:shadow-cyan-500/20',
    tag: '2020–2023',
  },
  {
    icon: '🏛️',
    title: 'Mención Legislatura de Mendoza',
    subtitle: 'Innovación Sustentable',
    desc: 'Mención especial en el rubro Innovación Sustentable otorgada por la Legislatura de Mendoza, programa Jóvenes Protagonistas.',
    color: 'border-purple-400/40',
    glow: 'hover:shadow-purple-500/20',
    tag: '2019',
  },
  {
    icon: '🥇',
    title: '1er Puesto Feria de Proyectos',
    subtitle: 'Maipú Joven',
    desc: 'Primer puesto en feria de proyectos organizada por Maipú Joven. Reconocimiento a la innovación y emprendimiento juvenil.',
    color: 'border-amber-400/40',
    glow: 'hover:shadow-amber-500/20',
    tag: '2016',
  },
  {
    icon: '🔭',
    title: 'CHANGER CAMP 2019',
    subtitle: 'Seleccionado nacional',
    desc: 'Seleccionado para participar del CHANGER CAMP 2019, programa de innovación y liderazgo para jóvenes changemakers.',
    color: 'border-emerald-400/40',
    glow: 'hover:shadow-emerald-500/20',
    tag: '2019',
  },
  {
    icon: '🌍',
    title: 'Young Influencers Argentina',
    subtitle: 'Instituto Goethe',
    desc: 'Seleccionado en YOUNG INFLUENCERS ARGENTINA del Goethe Institut para campañas sobre cambio climático y medio ambiente.',
    color: 'border-green-400/40',
    glow: 'hover:shadow-green-500/20',
    tag: '2022',
  },
  {
    icon: '🔬',
    title: 'Becario ReLIoT — UTN',
    subtitle: 'Laboratorio I+D',
    desc: 'Beca de investigación en el laboratorio ReLIoT (Reinforcement Learning for IoT) de la Universidad Tecnológica Nacional.',
    color: 'border-violet-400/40',
    glow: 'hover:shadow-violet-500/20',
    tag: '2021',
  },
  {
    icon: '📜',
    title: 'Tecnológico de Monterrey',
    subtitle: 'Planificación de Proyectos',
    desc: 'Curso sobre Planificación y ejecución de proyectos otorgado por el reconocido Tecnológico de Monterrey (México).',
    color: 'border-red-400/40',
    glow: 'hover:shadow-red-500/20',
    tag: 'Certificación',
  },
];

const courses = [
  'Diplomatura IoT — UTN',
  'Energía Solar Fotovoltaica — UTN',
  'Ciberseguridad — CISCO',
  'Plan 111mil (Ministerio de Educación)',
  'Modelado 3D Rhinoceros & Keyshot',
  'CNC Mecanizado 120hs — Fundación YPF',
  'Java Intermedio — CISCO Oracle',
  'AWS Cloud Practitioner (en curso)',
  'Python (en curso)',
  'Creators Lab 2021',
  'PLAN 111MIL',
  'Blockchain Bootcamp — Chainlink',
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-mono text-cyan-400 text-sm">05.</span>
          <span className="font-mono text-slate-500 text-sm">achievements & certs</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
        </div>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white mb-4">
          Logros & <span className="gradient-text">Reconocimientos</span>
        </h2>
        <p className="reveal text-slate-400 mb-16 max-w-xl">
          Distinciones, competencias y certificaciones que marcan mi trayectoria.
        </p>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className={`reveal glass-card p-5 border ${a.color} hover:shadow-xl ${a.glow} transition-all duration-300 group`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {a.icon}
                </span>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                  {a.tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-sm mb-0.5 leading-tight">{a.title}</h3>
              <p className="text-cyan-400 text-xs font-medium mb-2">{a.subtitle}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Courses strip */}
        <div className="reveal">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-cyan-400 font-mono text-sm">📚</span>
            Cursos & Certificaciones adicionales
            <div className="flex-1 h-px bg-white/5" />
          </h3>
          <div className="flex flex-wrap gap-3">
            {courses.map((c) => (
              <span
                key={c}
                className="skill-tag text-slate-300 border-slate-700/50 bg-white/3 hover:text-cyan-300"
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
