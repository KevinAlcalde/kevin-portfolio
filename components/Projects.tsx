'use client';

const C = { olive:'#7a9640', gold:'#9a7c30', hi:'#F74C19', green:'#4d7a32', steel:'#5a6a7a', tan:'#8a7040', brown:'#7a5048', dusk:'#6a5870' };

const projects = [
  { name:'CloudFarm',         cover:'cover-3',  cat:'IoT · AgriTech · Startup',         year:'2021–Pres.', desc:'Forraje verde hidropónico con IoT. Control de temperatura, humedad y microaspersión. Reducción 50–70% del consumo hídrico.',                                       tags:['Arduino','Node-RED','IoT','Sustentabilidad'],              badge:'FOUNDER',     bc:C.green },
  { name:'MÜLLDER',           cover:'cover-2',  cat:'Blockchain · Web3 · GreenTech',     year:'2022',       desc:'Trazabilidad de residuos orgánicos en Ethereum. Smart contracts para accountability ambiental on-chain.',                                                     tags:['Solidity','Hardhat','Ethers.js','Blockchain'],            badge:'FOUNDER',     bc:C.gold  },
  { name:'Green Connection',  cover:'cover-9',  cat:'E-commerce · AgriTech',             year:'2024–Pres.', desc:'Plataforma directa productor→consumidor de frutas y verduras en Mendoza. Delivery semanal, bolsones personalizados.',                                       tags:['Next.js','Node.js','Docker','SDD'],                       badge:'PROYECTO',    bc:C.olive },
  { name:'Bunker4KA',         cover:'cover-5',  cat:'Automation · WhatsApp · AI',        year:'2024',       desc:'Evolution API + n8n + OpenAI Whisper + GPT-4o-mini + PostgreSQL + Redis en Docker. Asistente de voz IA para WhatsApp.',                                    tags:['n8n','OpenAI','Docker','PostgreSQL'],                     badge:'OPEN SOURCE', bc:C.hi,   gh:'https://github.com/KevinAlcalde/Bunker4KA' },
  { name:'UpFirmwareRemo',    cover:'cover-8',  cat:'IoT · Firmware · OTA',              year:'2023',       desc:'Sistema de OTA para dispositivos IoT sin exponer puertos del router. Arquitectura segura para updates en campo.',                                            tags:['C++','ESP8266','Arduino','OTA'],                          badge:'OPEN SOURCE', bc:C.steel,gh:'https://github.com/KevinAlcalde/UpFirmwareRemo' },
  { name:'ControlRobotScara', cover:'cover-7',  cat:'Robótica · Hardware · G-code',      year:'2023',       desc:'Control de robot SCARA via G-code y Arduino. Cinemática directa e inversa, control de servos y steppers.',                                                  tags:['Arduino','G-code','C++','SCARA'],                         badge:'OPEN SOURCE', bc:C.gold, gh:'https://github.com/KevinAlcalde/ControlRobotScara' },
  { name:'OpenWiFiControl',   cover:'cover-1',  cat:'Network · Monitoring · IoT',        year:'2023',       desc:'Monitoreo de dispositivos WiFi con tracking de IPs y MACs. Analytics de conectividad para redes locales.',                                                  tags:['C++','ESP8266','WiFi','Networking'],                      badge:'OPEN SOURCE', bc:C.olive,gh:'https://github.com/KevinAlcalde/OpenWiFiControl' },
  { name:'Canopiis',          cover:'cover-10', cat:'AgriTech · Chainlink · Blockchain', year:'2023',       desc:'Hidroponia agrícola con oráculos Chainlink para datos ambientales on-chain. Agricultura de precisión descentralizada.',                                       tags:['Chainlink','Solidity','IoT','Web3'],                      badge:'PROYECTO',    bc:C.dusk  },
  { name:'AquaGenEd',         cover:'cover-11', cat:'EdTech · Water · Biotech',          year:'2024',       desc:'Tecnología educativa en purificación de agua y sistemas acuáticos. Presentado a startup accelerators internacionales.',                                      tags:['Educación','Biotech','Sustentabilidad'],                  badge:'PROYECTO',    bc:C.green },
  { name:'ETH Kipu 2024',     cover:'cover-4',  cat:'Blockchain · Web3',                 year:'2024',       desc:'Bootcamp Ethereum Kipu LATAM. Contratos inteligentes, DeFi básico y exploración de protocolos Layer 2.',                                                     tags:['Solidity','TypeScript','Ethereum','DeFi'],                badge:'BOOTCAMP',    bc:C.gold, gh:'https://github.com/KevinAlcalde/ETHKipu2024' },
  { name:'SIGNAL.GK',         cover:'cover-6',  cat:'Hackathon · NASA · Data',           year:'2019',       desc:'2do puesto provincial · NASA Space Apps Challenge. Equipo "Avengers of Earth". Análisis de señales satelitales para monitoreo ambiental.',                  tags:['Python','Data','NASA','Hackathon'],                       badge:'🏆 2DO LUGAR',bc:C.hi    },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label" style={{ color: C.olive }}>03</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black mb-4" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', lineHeight:1, color:'var(--text)' }}>
          Proyectos
        </h2>
        <p className="reveal mb-16 max-w-xl" style={{ color:'var(--muted)' }}>
          Startups, repos open-source, hardware y blockchain.
        </p>

        {/* Editorial grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px" style={{ background:'var(--line)' }}>
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="reveal group relative overflow-hidden flex flex-col"
              style={{ background:'var(--bg)', transitionDelay:`${i*40}ms` }}
            >
              {/* Cover */}
              <div className={`${p.cover} h-40 relative flex-shrink-0`}>
                <div className="absolute inset-0" style={{ background:'linear-gradient(to top, var(--bg) 0%, transparent 60%)' }} />
                <span
                  className="absolute top-4 right-4 mono-badge"
                  style={{ color:p.bc, borderColor:`${p.bc}35`, background:`${p.bc}10` }}
                >
                  {p.badge}
                </span>
                <span className="absolute bottom-4 left-4 section-label">{p.year}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1" style={{ borderTop:'1px solid var(--line)' }}>
                <div className="section-label mb-2" style={{ color:C.olive }}>{p.cat}</div>
                <h3
                  className="font-bold mb-3 transition-colors"
                  style={{ fontSize:'1.05rem', lineHeight:1.3, color:'var(--text)', fontFamily:'Orbitron, monospace' }}
                  onMouseEnter={e => (e.currentTarget.style.color = p.bc)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                >
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color:'var(--muted)' }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="pill text-[0.67rem] px-2 py-0.5">{t}</span>
                  ))}
                  {p.gh && (
                    <a
                      href={p.gh} target="_blank" rel="noopener noreferrer"
                      className="text-[0.67rem] px-2 py-0.5 transition-colors"
                      style={{ border:'1px solid var(--line)', color:'var(--muted)', fontFamily:'JetBrains Mono, monospace' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                      }}
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
