'use client';

const socials = [
  {
    label: 'Email',
    value: 'kevinalejandroalcalde@gmail.com',
    href: 'mailto:kevinalejandroalcalde@gmail.com',
    icon: '✉️',
    color: 'border-cyan-500/40 hover:border-cyan-400',
  },
  {
    label: 'GitHub',
    value: 'github.com/KevinAlcalde',
    href: 'https://github.com/KevinAlcalde',
    icon: '💻',
    color: 'border-purple-500/40 hover:border-purple-400',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kevinalcalde',
    href: 'https://linkedin.com/in/kevinalcalde',
    icon: '🔗',
    color: 'border-blue-500/40 hover:border-blue-400',
  },
  {
    label: 'Teléfono',
    value: '(0261) 6974513',
    href: 'tel:+542616974513',
    icon: '📱',
    color: 'border-emerald-500/40 hover:border-emerald-400',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="reveal flex items-center justify-center gap-4 mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-500/30" />
          <span className="font-mono text-cyan-400 text-sm">06. contact</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-500/30" />
        </div>

        <h2 className="reveal text-4xl md:text-6xl font-black text-white mb-6">
          Hablemos<span className="gradient-text">.</span>
        </h2>

        <p className="reveal text-slate-400 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
          Estoy buscando nuevas oportunidades y colaboraciones. Si tenés un proyecto interesante,
          una propuesta o simplemente querés conectar, ¡escribime!
        </p>

        <p className="reveal text-slate-500 text-sm mb-12 font-mono">
          📍 Maipú, Mendoza, Argentina · disponible remotamente
        </p>

        {/* Big email CTA */}
        <a
          href="mailto:kevinalejandroalcalde@gmail.com"
          className="reveal inline-block px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#030712] font-black text-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 mb-16"
        >
          ✉️ Escribime un mensaje
        </a>

        {/* Social links */}
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-4 border ${s.color} transition-all duration-300 text-left group`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <div className="text-xs text-slate-500 font-medium mb-0.5">{s.label}</div>
              <div className="text-sm text-slate-200 group-hover:text-cyan-300 transition-colors font-mono truncate">
                {s.value}
              </div>
            </a>
          ))}
        </div>

        {/* Fun facts strip */}
        <div className="reveal glass-card p-6 text-left">
          <h3 className="text-white font-bold mb-4 text-center">
            <span className="gradient-text">Datos curiosos</span> sobre Kevin
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏔️</span>
              <div>
                <div className="text-slate-200 font-medium">Mendocino</div>
                <div className="text-slate-500">Ama los Andes y el buen vino Malbec</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <div>
                <div className="text-slate-200 font-medium">Eco-innovador</div>
                <div className="text-slate-500">Combina tecnología con sustentabilidad</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <div className="text-slate-200 font-medium">Políglota</div>
                <div className="text-slate-500">Español, Inglés, Alemán B2.1 y Portugués</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
