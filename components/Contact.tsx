'use client';

import { useLanguage } from '../lib/LanguageContext';

const links = [
  { label:'Email',    val:'kevinalejandroalcalde@gmail.com', href:'mailto:kevinalejandroalcalde@gmail.com', c:'#7a9640' },
  { label:'GitHub',   val:'github.com/KevinAlcalde',         href:'https://github.com/KevinAlcalde',         c:'#8a8870' },
  { label:'WhatsApp', val:'+549 261 697-4513',               href:'https://wa.me/5492616974513',             c:'#4d7a32' },
  { label:'LinkedIn', val:'linkedin.com/in/kevinalcalde',    href:'https://linkedin.com/in/kevinalcalde',    c:'#5a6a7a' },
];

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="h-line mb-0" />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3 pt-16">
          <span className="section-label" style={{ color:'#7a9640' }}>07</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>

        {/* Big heading */}
        <div className="reveal mb-16">
          <h2
            className="font-black"
            style={{ fontSize:'clamp(3rem,8vw,8rem)', lineHeight:0.9, color:'var(--text)' }}
          >
            {t.sec_contact}<br />
            <span style={{
              background:'linear-gradient(120deg, #7a9640 0%, #F74C19 55%, #9a7c30 100%)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
            }}>
              something.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal">
            <p className="text-lg leading-relaxed mb-8" style={{ color:'var(--muted)' }}>
              {t.contact_desc}
            </p>
            <a
              href="mailto:kevinalejandroalcalde@gmail.com"
              style={{
                display:'inline-block',
                padding:'12px 32px',
                background:'var(--highlight)',
                color:'#fff',
                fontFamily:'JetBrains Mono, monospace',
                fontWeight:700,
                fontSize:'0.8rem',
                letterSpacing:'0.15em',
                textTransform:'uppercase',
                transition:'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--text)';
                (e.currentTarget as HTMLElement).style.color = 'var(--bg)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--highlight)';
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
            >
              {t.contact_cta}
            </a>
          </div>

          {/* Right — contact cards */}
          <div className="reveal grid grid-cols-1 gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank" rel="noopener noreferrer"
                className="card flex items-center justify-between px-5 py-4 group"
              >
                <div>
                  <div className="section-label mb-1" style={{ color:l.c }}>{l.label}</div>
                  <div
                    className="text-sm font-mono transition-colors"
                    style={{ color:'var(--text)', fontFamily:'JetBrains Mono, monospace' }}
                  >
                    {l.val}
                  </div>
                </div>
                <svg className="w-4 h-4 transition-colors" style={{ color:'var(--muted)' }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="h-line mt-20 mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="section-label">{t.contact_footer1}</span>
          <span className="section-label">{t.contact_footer2}</span>
        </div>
      </div>
    </section>
  );
}
