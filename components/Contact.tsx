'use client';

const links = [
  { label: 'Email',    val: 'kevinalejandroalcalde@gmail.com', href: 'mailto:kevinalejandroalcalde@gmail.com', c: '#00cfff' },
  { label: 'GitHub',   val: 'github.com/KevinAlcalde',         href: 'https://github.com/KevinAlcalde',         c: '#e2e8f0' },
  { label: 'WhatsApp', val: '+549 261 697-4513',               href: 'https://wa.me/5492616974513',             c: '#00e5a0' },
  { label: 'LinkedIn', val: 'linkedin.com/in/kevinalcalde',    href: 'https://linkedin.com/in/kevinalcalde',    c: '#3b82f6' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="h-line mb-0" />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3 pt-16">
          <span className="section-label text-[var(--accent)]">07</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>

        {/* Big CTA heading — acko.net style */}
        <div className="reveal mb-16">
          <h2
            className="font-black text-white leading-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.9 }}
          >
            Let's build<br />
            <span className="g-text">something.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal">
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
              Busco oportunidades en <span className="text-[var(--text)]">ingeniería electrónica, desarrollo web/Web3 o proyectos de impacto</span>.
              También abro a colaboraciones, mentoring y proyectos open-source.
            </p>
            <a
              href="mailto:kevinalejandroalcalde@gmail.com"
              className="inline-block px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Escribime →
            </a>
          </div>

          {/* Right — contact cards */}
          <div className="reveal grid grid-cols-1 gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center justify-between px-5 py-4 group"
              >
                <div>
                  <div className="section-label mb-1" style={{ color: l.c }}>{l.label}</div>
                  <div className="text-[var(--text)] text-sm font-mono group-hover:text-white transition-colors">
                    {l.val}
                  </div>
                </div>
                <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="h-line mt-20 mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="section-label">
            Kevin Alejandro Alcalde · Maipú, Mendoza, Argentina
          </span>
          <span className="section-label">
            Built with Next.js · Three.js · WebGL · GLSL
          </span>
        </div>
      </div>
    </section>
  );
}
