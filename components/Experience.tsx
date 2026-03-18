'use client';

const C = { olive:'#7a9640', gold:'#9a7c30', hi:'#F74C19', green:'#4d7a32', steel:'#5a6a7a', tan:'#8a7040', brown:'#7a5048', dusk:'#6a5870' };

const exps = [
  { role:'Presidente',            org:'JCI Mendoza · Cámara Junior Internacional',  period:'2023',        c:C.hi,    icon:'◈', items:['Máximo cargo de JCI Mendoza como Presidente electo','Proyectos de impacto comunitario, liderazgo juvenil e innovación social','Trayectoria: Director Eco (2020/21) → Vicepresidente (2022) → Presidente (2023)'] },
  { role:'CEO & Co-Founder',      org:'Biolix',                                      period:'2024–Pres.',  c:C.green, icon:'◈', items:['Desarrollo de bioestimulantes con técnicas hidropónicas','Fusión de biotecnología agrícola y cultivo controlado','Liderazgo integral: producto, equipo y estrategia de negocio'] },
  { role:'Co-Founder',            org:'Apapacho · Startup cuidado adultos mayores',  period:'2023–2024',   c:C.brown, icon:'◈', items:['Co-fundé startup de tecnología accesible para adultos mayores','Soluciones de conectividad familiar','Gestión de producto y roadmap tecnológico'] },
  { role:'Facilitador Tecnológico',org:'Mendoza Futura',                             period:'2021–2024',   c:C.olive, icon:'◈', items:['Acompañé equipos de emprendedores en proyectos tecnológicos','Talleres de programación, IoT, blockchain y emprendimiento digital','Mentoring técnico a startups en etapas tempranas'] },
  { role:'CIO · Co-Founder',      org:'BIOSPI · Startup de biotecnología',           period:'2021–2023',   c:C.gold,  icon:'◈', items:['Chief Information Officer: arquitectura IT y estrategia digital','Lideré el equipo de desarrollo e integración de sistemas','Infraestructura tecnológica inicial de la startup'] },
  { role:'Community Manager',     org:'GLIKAD SAS',                                  period:'2020',        c:C.steel, icon:'◈', items:['Producción audiovisual con Adobe Premiere y After Effects','Gestión de redes sociales y estrategia de contenidos'] },
  { role:'Operario CNC & Diseño', org:'MAV-MASHO · Taller Metal-Mecánico',           period:'2017–2018',   c:C.tan,   icon:'◈', items:['Diseño 2D y 3D en AutoCAD para piezas de mecanizado de precisión','Operación de fresadoras y tornos CNC'] },
  { role:'Becario I+D',           org:'ReLIoT Lab · UTN',                            period:'2021',        c:C.dusk,  icon:'◈', items:['Reinforcement Learning for IoT — laboratorio de investigación','Algoritmos de aprendizaje por refuerzo para dispositivos edge'] },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background:'rgba(247,76,25,0.03)' }} />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label" style={{ color:C.olive }}>05</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black mb-16" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', lineHeight:1, color:'var(--text)' }}>
          Experiencia
        </h2>

        <div className="grid md:grid-cols-2 gap-px" style={{ background:'var(--line)' }}>
          {exps.map((e, i) => (
            <div
              key={e.role+e.org}
              className="reveal p-6"
              style={{
                background:'var(--bg)',
                borderLeft:`2px solid ${e.c}`,
                transitionDelay:`${i*45}ms`,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span style={{ color:e.c, fontSize:'0.8rem' }}>{e.icon}</span>
                    <h3 className="text-sm font-bold" style={{ color:'var(--text)', fontFamily:'Orbitron, monospace' }}>{e.role}</h3>
                  </div>
                  <p className="text-sm font-medium" style={{ color:e.c, fontFamily:'JetBrains Mono, monospace' }}>{e.org}</p>
                </div>
                <span className="mono-badge flex-shrink-0">{e.period}</span>
              </div>
              <ul className="space-y-1.5">
                {e.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs" style={{ color:'var(--muted)' }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color:e.c }}>▹</span>
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
