'use client';

const projects = [
  {
    name: 'CloudFarm',
    cover: 'cover-3',
    cat: 'IoT · AgriTech · Startup',
    year: '2021 – Presente',
    desc: 'Producción intensiva de forraje verde hidropónico con IoT. Control de temperatura, humedad y microaspersión. Reducción del 50–70% del consumo hídrico.',
    tags: ['Arduino', 'Node-RED', 'IoT', 'Sostenibilidad'],
    badge: 'Founder',
    bc: '#00e5a0',
  },
  {
    name: 'MÜLLDER',
    cover: 'cover-2',
    cat: 'Blockchain · Web3 · GreenTech',
    year: '2022',
    desc: 'Trazabilidad de residuos orgánicos y materiales reciclables usando smart contracts en Ethereum. Transparencia y accountability ambiental on-chain.',
    tags: ['Solidity', 'Hardhat', 'Ethers.js', 'Blockchain'],
    badge: 'Founder',
    bc: '#7b5af0',
  },
  {
    name: 'Green Connection',
    cover: 'cover-9',
    cat: 'E-commerce · AgriTech · Plataforma',
    year: '2024 – Presente',
    desc: 'Plataforma de distribución directa productor-consumidor de frutas y verduras frescas en Mendoza. Delivery semanal, bolsones personalizados.',
    tags: ['Next.js', 'Node.js', 'Docker', 'SDD'],
    badge: 'Proyecto',
    bc: '#00e5a0',
  },
  {
    name: 'Bunker4KA',
    cover: 'cover-5',
    cat: 'Automation · WhatsApp · AI',
    year: '2024',
    desc: 'Stack completo: Evolution API + WhatsApp + n8n + OpenAI Whisper + GPT-4o-mini + PostgreSQL + Redis en Docker. Asistente de voz IA para WhatsApp.',
    tags: ['n8n', 'OpenAI', 'Docker', 'PostgreSQL', 'EvolutionAPI'],
    badge: 'Open Source',
    bc: '#00cfff',
    gh: 'https://github.com/KevinAlcalde/Bunker4KA',
  },
  {
    name: 'UpFirmwareRemo',
    cover: 'cover-8',
    cat: 'IoT · Firmware · OTA',
    year: '2023',
    desc: 'Sistema de actualización remota de firmware para dispositivos IoT sin exponer puertos del router. Arquitectura segura para updates OTA en campo.',
    tags: ['C++', 'ESP8266', 'Arduino', 'IoT', 'OTA'],
    badge: 'Open Source',
    bc: '#3b82f6',
    gh: 'https://github.com/KevinAlcalde/UpFirmwareRemo',
  },
  {
    name: 'ControlRobotScara',
    cover: 'cover-7',
    cat: 'Robótica · Hardware · G-code',
    year: '2023',
    desc: 'Control de robot SCARA mediante G-code y Arduino. Cinemática directa e inversa, control de servos y steppers, interfaz de comandos serial.',
    tags: ['Arduino', 'G-code', 'C++', 'SCARA', 'Robotics'],
    badge: 'Open Source',
    bc: '#f59e0b',
    gh: 'https://github.com/KevinAlcalde/ControlRobotScara',
  },
  {
    name: 'OpenWiFiControl',
    cover: 'cover-1',
    cat: 'Network · Monitoring · IoT',
    year: '2023',
    desc: 'Sistema de monitoreo de dispositivos WiFi con tracking de IPs y MACs. Analytics de conectividad para redes locales y control de acceso.',
    tags: ['C++', 'ESP8266', 'WiFi', 'Networking'],
    badge: 'Open Source',
    bc: '#00cfff',
    gh: 'https://github.com/KevinAlcalde/OpenWiFiControl',
  },
  {
    name: 'Canopiis',
    cover: 'cover-10',
    cat: 'AgriTech · Chainlink · Blockchain',
    year: '2023',
    desc: 'Hidroponia agrícola con oráculos Chainlink para datos ambientales on-chain. Agricultura de precisión descentralizada con contratos inteligentes.',
    tags: ['Chainlink', 'Solidity', 'IoT', 'Web3'],
    badge: 'Proyecto',
    bc: '#7b5af0',
  },
  {
    name: 'AquaGenEd',
    cover: 'cover-11',
    cat: 'EdTech · Water · Biotech',
    year: '2024',
    desc: 'Tecnología educativa enfocada en purificación de agua y sistemas acuáticos. Presentación a startup accelerators con materiales audiovisuales completos.',
    tags: ['Educación', 'Biotech', 'Sustentabilidad'],
    badge: 'Proyecto',
    bc: '#34d399',
  },
  {
    name: 'ETH Kipu 2024',
    cover: 'cover-4',
    cat: 'Blockchain · Educación · Web3',
    year: '2024',
    desc: 'Proyectos del bootcamp de Ethereum en Latinoamérica. Contratos inteligentes, DeFi básico y exploración de protocolos Layer 2.',
    tags: ['Solidity', 'TypeScript', 'Ethereum', 'DeFi'],
    badge: 'Bootcamp',
    bc: '#f59e0b',
    gh: 'https://github.com/KevinAlcalde/ETHKipu2024',
  },
  {
    name: 'SIGNAL.GK',
    cover: 'cover-6',
    cat: 'Hackathon · NASA · Data',
    year: '2019',
    desc: '2do puesto provincial · NASA Space Apps Challenge. Equipo "Avengers of Earth". Análisis de señales satelitales para monitoreo ambiental.',
    tags: ['Python', 'Data', 'NASA', 'Hackathon'],
    badge: '🏆 2do Lugar',
    bc: '#60a5fa',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label text-[var(--accent)]">03</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2
          className="reveal font-black text-white mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}
        >
          Proyectos
        </h2>
        <p className="reveal text-[var(--muted)] mb-16 max-w-xl">
          Startups, repos open-source, experimentos de hardware y contribuciones blockchain.
        </p>

        {/* Editorial grid — large cards like acko.net posts */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--line)]">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="reveal bg-[var(--bg)] group relative overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              {/* Cover */}
              <div className={`${p.cover} h-40 relative overflow-hidden flex-shrink-0`}>
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />
                {/* Badge */}
                <span
                  className="absolute top-4 right-4 mono-badge text-xs"
                  style={{ color: p.bc, borderColor: `${p.bc}30`, background: `${p.bc}10` }}
                >
                  {p.badge}
                </span>
                {/* Year */}
                <span className="absolute bottom-4 left-4 section-label">{p.year}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 border-t border-[var(--line)]">
                <div className="section-label text-[var(--accent)] mb-2">{p.cat}</div>
                <h3
                  className="text-white font-bold mb-3 group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontSize: '1.1rem', lineHeight: 1.3 }}
                >
                  {p.name}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed flex-1 mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="pill text-[0.68rem] px-2 py-0.5">{t}</span>
                  ))}
                  {p.gh && (
                    <a
                      href={p.gh}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.68rem] px-2 py-0.5 border border-[rgba(255,255,255,0.1)] text-[var(--muted)] hover:text-white hover:border-white transition-colors"
                      style={{ borderRadius: '2px' }}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
