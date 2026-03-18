'use client';

// ── Military palette only ──────────────────────────────────────────
const C = {
  olive:  '#7a9640',
  gold:   '#9a7c30',
  green:  '#4d7a32',
  hi:     '#F74C19',
  steel:  '#5a6a7a',
  tan:    '#8a7040',
};

export default function About() {
  const langs = [
    { lang: 'Español',   level: 'Nativo',              pct: 100, color: C.olive },
    { lang: 'Inglés',    level: 'Avanzado B2 · AMICANA', pct: 85,  color: C.gold  },
    { lang: 'Alemán',    level: 'B2.1 · Goethe Zentrum', pct: 58,  color: C.green },
    { lang: 'Portugués', level: 'Conversacional',       pct: 42,  color: C.hi    },
  ];

  const education = [
    { title: 'Ingeniería Electrónica',    org: 'UTN · Facultad Regional Mendoza', year: '2019 – Presente · 4to año', c: C.olive },
    { title: 'Lic. IA & Robótica',        org: 'Universidad Siglo 21',            year: '2025 – Presente · 2do año', c: C.hi    },
    { title: 'Técnico Mecánico',          org: 'ETIEC Emilio Civit',              year: '2017',                      c: C.green },
    { title: 'Diplomatura IoT',           org: 'UTN FR Resistencia',              year: '2021',                      c: C.gold  },
  ];

  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(154,124,48,0.04)' }}
      />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label" style={{ color: C.olive }}>01</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black mb-16" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, color: 'var(--text)' }}>
          Sobre mí
        </h2>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          {/* Text */}
          <div className="md:col-span-3 reveal space-y-5">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text)' }}>
              Soy <span style={{ color: C.hi, fontWeight: 600 }}>Kevin Alejandro Alcalde</span>,
              ingeniero electrónico (UTN Mendoza, 4to año) y estudiante de Licenciatura en IA & Robótica (Siglo 21).
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
              Me muevo entre hardware y software: diseño firmware para ESP8266, controlo robots SCARA con G-code,
              escribo smart contracts en Solidity y construyo workflows de IA con n8n + OpenAI.
              Mi hilo conductor es la <span style={{ color: C.green }}>tecnología sostenible</span>.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
              Presidente de JCI Mendoza 2023, 2do lugar NASA Space Apps 2019 y seleccionado por el{' '}
              <span style={{ color: 'var(--text)' }}>Departamento de Estado de EE.UU.</span> para el
              programa <span style={{ color: C.hi }}>YLAI 2024</span>.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { k: 'Email',     v: 'kevinalejandroalcalde@gmail.com' },
                { k: 'Ubicación', v: 'Maipú, Mendoza · ARG' },
                { k: 'WhatsApp',  v: '+549 261 697-4513' },
                { k: 'Status',    v: 'DISPONIBLE' },
              ].map((f) => (
                <div key={f.k} className="card p-3">
                  <div className="section-label mb-1">{f.k}</div>
                  <div className="text-sm font-medium truncate" style={{ color: 'var(--text)' }}>{f.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-2 reveal space-y-10">
            {/* Languages */}
            <div>
              <h3 className="section-label mb-5" style={{ color: C.olive }}>Idiomas</h3>
              <div className="space-y-4">
                {langs.map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span style={{ color: 'var(--text)', fontWeight: 500 }}>{l.lang}</span>
                      <span className="section-label">{l.level}</span>
                    </div>
                    <div className="h-0.5 rounded-full overflow-hidden" style={{ background: 'var(--line)' }}>
                      <div className="h-full" style={{ width: `${l.pct}%`, background: l.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="section-label mb-5" style={{ color: C.olive }}>Educación</h3>
              <div className="space-y-3">
                {education.map((e) => (
                  <div key={e.title} className="card p-4" style={{ borderLeftWidth: 2, borderLeftColor: e.c }}>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{e.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{e.org}</div>
                    <div className="font-mono text-xs mt-1" style={{ color: e.c }}>{e.year}</div>
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
