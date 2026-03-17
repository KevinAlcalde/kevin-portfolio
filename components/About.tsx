'use client';

export default function About() {
  const langs = [
    { lang: 'Español', level: 'Nativo', pct: 100, color: 'bg-cyan-400' },
    { lang: 'Inglés', level: 'Avanzado (AMICANA)', pct: 85, color: 'bg-purple-400' },
    { lang: 'Alemán', level: 'B2.1 (Goethe)', pct: 60, color: 'bg-emerald-400' },
    { lang: 'Portugués', level: 'Intermedio', pct: 45, color: 'bg-amber-400' },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-mono text-cyan-400 text-sm">01.</span>
          <span className="font-mono text-slate-500 text-sm">about_me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
        </div>

        <h2 className="reveal text-4xl md:text-5xl font-black text-white mb-16">
          Sobre <span className="gradient-text">mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="reveal space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Soy <span className="text-cyan-400 font-semibold">Kevin Alejandro Alcalde</span>, un
              ingeniero electrónico en formación (4to año, UTN Mendoza) apasionado por la intersección
              entre tecnología, emprendimiento y sostenibilidad.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Con experiencia en mecanizado industrial, desarrollo web full-stack, blockchain y sistemas IoT,
              combino perspectivas de hardware y software para construir soluciones innovadoras. He liderado
              equipos como <span className="text-purple-400 font-medium">Presidente de JCI Mendoza 2023</span> y
              co-fundado múltiples startups que buscan impacto real.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Mi enfoque está en proyectos de <span className="text-emerald-400 font-medium">tecnología sostenible</span>:
              desde hidroponia controlada por IoT hasta trazabilidad de residuos en blockchain. Creo
              que la tecnología es la herramienta más poderosa para resolver los desafíos ambientales de hoy.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { icon: '📍', label: 'Ubicación', val: 'Maipú, Mendoza, ARG' },
                { icon: '🎓', label: 'Carrera', val: 'Ing. Electrónica (UTN)' },
                { icon: '📧', label: 'Email', val: 'kevinalejandroalcalde@gmail.com' },
                { icon: '🚀', label: 'Status', val: 'Disponible' },
              ].map((f) => (
                <div key={f.label} className="glass-card p-3">
                  <div className="text-xs text-slate-500 mb-0.5">{f.icon} {f.label}</div>
                  <div className="text-sm text-slate-200 font-medium truncate">{f.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & certifications */}
          <div className="reveal space-y-8">
            {/* Languages */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="text-cyan-400">{'<'}</span>
                Idiomas
                <span className="text-cyan-400">{'/>'}</span>
              </h3>
              <div className="space-y-4">
                {langs.map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-200 font-medium">{l.lang}</span>
                      <span className="text-slate-400 font-mono text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${l.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="text-purple-400">{'<'}</span>
                Educación
                <span className="text-purple-400">{'/>'}</span>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Ingeniería Electrónica (4to año)',
                    org: 'UTN Facultad Regional Mendoza',
                    year: '2019 – Presente',
                    color: 'border-cyan-500/40',
                  },
                  {
                    title: 'Técnico Mecánico',
                    org: 'ETIEC Emilio Civit',
                    year: '2017',
                    color: 'border-purple-500/40',
                  },
                  {
                    title: 'Diplomatura en IoT',
                    org: 'UTN FR Resistencia',
                    year: '2021',
                    color: 'border-emerald-500/40',
                  },
                  {
                    title: 'Ciencia de Datos e IA',
                    org: 'Universidad Siglo 21',
                    year: '2025 – Presente',
                    color: 'border-amber-500/40',
                  },
                ].map((e) => (
                  <div key={e.title} className={`glass-card p-4 border-l-2 ${e.color}`}>
                    <div className="text-slate-200 font-semibold text-sm">{e.title}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{e.org}</div>
                    <div className="text-cyan-400 font-mono text-xs mt-1">{e.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
