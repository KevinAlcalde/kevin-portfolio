'use client';

const C = { olive:'#7a9640', gold:'#9a7c30', hi:'#F74C19', green:'#4d7a32', steel:'#5a6a7a', tan:'#8a7040', brown:'#7a5048', dusk:'#6a5870' };

const featured = [
  { icon:'◈', title:'2do Lugar · NASA Space Apps', sub:'Hackathon NASA 2019 · Provincial ARG', desc:'Proyecto SIGNAL.GK · Equipo "Avengers of Earth". Análisis de señales satelitales para monitoreo ambiental.', c:C.hi,    year:'2019' },
  { icon:'◈', title:'YLAI Fellow 2024',             sub:'Young Leaders of the Americas · US Dept. of State', desc:'Seleccionado por el Departamento de Estado de EE.UU. para el programa de liderazgo joven de las Américas.', c:C.olive, year:'2024' },
  { icon:'◈', title:'Presidente · JCI Mendoza',     sub:'Cámara Junior Internacional',                desc:'Dir. Eco 2020/21 → Vicepresidente 2022 → Presidente 2023. Máximo cargo de la organización local.', c:C.gold,  year:'2023' },
  { icon:'◈', title:'Mención Legislatura Mendoza',  sub:'Innovación Sustentable · Jóvenes Protagonistas', desc:'Mención especial en Innovación Sustentable. Reconocimiento provincial por impacto social.', c:C.green, year:'2019' },
  { icon:'◈', title:'Young Influencers Argentina',  sub:'Instituto Goethe · Cambio Climático',        desc:'Seleccionado para campañas sobre cambio climático y medio ambiente en el programa Goethe Institut.', c:C.steel, year:'2022' },
  { icon:'◈', title:'1er Puesto · Maipú Joven',     sub:'Feria de Proyectos',                         desc:'Primer puesto en feria de proyectos juveniles de Maipú. Innovación y emprendimiento temprano.', c:C.tan,   year:'2016' },
  { icon:'◈', title:'CHANGER CAMP 2019',            sub:'Programa de Liderazgo e Innovación',         desc:'Seleccionado para el CHANGER CAMP — espacio de changemakers y líderes jóvenes.',                 c:C.brown, year:'2019' },
  { icon:'◈', title:'Becario ReLIoT · UTN',         sub:'Laboratorio I+D · Investigación',            desc:'Beca en el lab de Reinforcement Learning for IoT de la Universidad Tecnológica Nacional.',         c:C.dusk,  year:'2021' },
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
      <div className="absolute bottom-0 left-1/2 w-96 h-64 -translate-x-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ background:'rgba(122,150,64,0.04)' }} />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label" style={{ color:C.olive }}>06</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black mb-16" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', lineHeight:1, color:'var(--text)' }}>
          Logros
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mb-20" style={{ background:'var(--line)' }}>
          {featured.map((a, i) => (
            <div
              key={a.title}
              className="reveal p-5 group transition-colors"
              style={{ background:'var(--bg)', transitionDelay:`${i*35}ms` }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl group-hover:scale-110 transition-transform block" style={{ color:a.c }}>{a.icon}</span>
                <span className="mono-badge">{a.year}</span>
              </div>
              <h3 className="text-sm font-bold leading-tight mb-1" style={{ color:'var(--text)', fontFamily:'Orbitron, monospace', fontSize:'0.75rem' }}>{a.title}</h3>
              <p className="text-xs font-medium mb-3" style={{ color:a.c, fontFamily:'JetBrains Mono, monospace' }}>{a.sub}</p>
              <p className="text-xs leading-relaxed" style={{ color:'var(--muted)' }}>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="section-label mb-6" style={{ color:C.olive }}>Cursos & Certificaciones</h3>
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <span
                key={c}
                className="text-[0.7rem] px-3 py-1.5 transition-all"
                style={{ background:'var(--card-bg)', border:'1px solid var(--line)', color:'var(--muted)', fontFamily:'JetBrains Mono, monospace' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(122,150,64,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                }}
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
