'use client';

export default function About() {
  const langs = [
    { lang: 'Español', level: 'Nativo', pct: 100, color: '#00cfff' },
    { lang: 'Inglés',  level: 'Avanzado B2 · AMICANA', pct: 85, color: '#7b5af0' },
    { lang: 'Alemán',  level: 'B2.1 · Goethe Zentrum', pct: 58, color: '#00e5a0' },
    { lang: 'Portugués', level: 'Conversacional', pct: 42, color: '#f59e0b' },
  ];

  const education = [
    {
      title: 'Ingeniería Electrónica',
      org: 'UTN · Facultad Regional Mendoza',
      year: '2019 – Presente · 4to año',
      c: '#00cfff',
    },
    {
      title: 'Lic. IA & Robótica',
      org: 'Universidad Siglo 21',
      year: '2025 – Presente · 2do año',
      c: '#7b5af0',
    },
    {
      title: 'Técnico Mecánico',
      org: 'ETIEC Emilio Civit',
      year: '2017',
      c: '#00e5a0',
    },
    {
      title: 'Diplomatura IoT',
      org: 'UTN FR Resistencia',
      year: '2021',
      c: '#f59e0b',
    },
  ];

  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24 relative">
      {/* Ambient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent2)] opacity-[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label text-[var(--accent)]">01</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black text-white mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}>
          Sobre mí
        </h2>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          {/* Text — 3/5 */}
          <div className="md:col-span-3 reveal space-y-5">
            <p className="text-[var(--text)] text-lg leading-relaxed">
              Soy <span className="text-[var(--accent)] font-semibold">Kevin Alejandro Alcalde</span>,
              ingeniero electrónico en formación (UTN Mendoza, 4to año) y estudiante de Licenciatura en
              Inteligencia Artificial & Robótica (Siglo 21). Nacido en 1998 en Mendoza, Argentina.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              Me muevo entre hardware y software: diseñé firmware para ESP8266, controlo robots SCARA con
              G-code, escribo smart contracts en Solidity y construyo workflows de IA con n8n + OpenAI.
              Mi hilo conductor es la <span className="text-[var(--green)]">tecnología sostenible</span> — cada
              proyecto que lidero busca reducir impacto ambiental o democratizar el acceso a recursos.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              Presidente de JCI Mendoza 2023, 2do lugar NASA Space Apps 2019 y seleccionado por el
              <span className="text-white"> Departamento de Estado de EE.UU.</span> para el programa
              YLAI 2024 (Young Leaders of the Americas Initiative).
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { k: 'Email',     v: 'kevinalejandroalcalde@gmail.com' },
                { k: 'Ubicación', v: 'Maipú, Mendoza · ARG' },
                { k: 'WhatsApp',  v: '+549 261 697-4513' },
                { k: 'Status',    v: '✅ Disponible' },
              ].map((f) => (
                <div key={f.k} className="card p-3">
                  <div className="section-label mb-1">{f.k}</div>
                  <div className="text-[var(--text)] text-sm font-medium truncate">{f.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 2/5 */}
          <div className="md:col-span-2 reveal space-y-10">
            {/* Languages */}
            <div>
              <h3 className="section-label text-[var(--accent)] mb-5">Idiomas</h3>
              <div className="space-y-4">
                {langs.map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[var(--text)] font-medium">{l.lang}</span>
                      <span className="section-label">{l.level}</span>
                    </div>
                    <div className="h-0.5 bg-[var(--line)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${l.pct}%`, background: l.color, transition: 'width 1s ease' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="section-label text-[var(--accent)] mb-5">Educación</h3>
              <div className="space-y-3">
                {education.map((e) => (
                  <div key={e.title} className="card p-4 border-l-2" style={{ borderLeftColor: e.c }}>
                    <div className="text-[var(--text)] font-semibold text-sm">{e.title}</div>
                    <div className="text-[var(--muted)] text-xs mt-0.5">{e.org}</div>
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
