'use client';

import { useLanguage } from '../lib/LanguageContext';

const C = { olive:'#7a9640', gold:'#9a7c30', hi:'#F74C19', green:'#4d7a32', steel:'#5a6a7a', tan:'#8a7040', brown:'#7a5048', dusk:'#6a5870' };

export default function Projects() {
  const { t } = useLanguage();
  const projects = [
    { name:'CloudFarm',         cover:'cover-3',  cat:'IoT · AgriTech · Startup',         year:'2021–Pres.', desc:t.p_cloudfarm,  tags:['Arduino','Node-RED','IoT','Sustentabilidad'],              badge:'FOUNDER',     bc:C.green },
    { name:'MÜLLDER',           cover:'cover-2',  cat:'Blockchain · Web3 · GreenTech',     year:'2022',       desc:t.p_mullder,    tags:['Solidity','Hardhat','Ethers.js','Blockchain'],            badge:'FOUNDER',     bc:C.gold  },
    { name:'Green Connection',  cover:'cover-9',  cat:'E-commerce · AgriTech',             year:'2024–Pres.', desc:t.p_greenconn,  tags:['Next.js','Node.js','Docker','SDD'],                       badge:'PROYECTO',    bc:C.olive },
    { name:'Bunker4KA',         cover:'cover-5',  cat:'Automation · WhatsApp · AI',        year:'2024',       desc:t.p_bunker,     tags:['n8n','OpenAI','Docker','PostgreSQL'],                     badge:'OPEN SOURCE', bc:C.hi,   gh:'https://github.com/KevinAlcalde/Bunker4KA' },
    { name:'UpFirmwareRemo',    cover:'cover-8',  cat:'IoT · Firmware · OTA',              year:'2023',       desc:t.p_upfirmware, tags:['C++','ESP8266','Arduino','OTA'],                          badge:'OPEN SOURCE', bc:C.steel,gh:'https://github.com/KevinAlcalde/UpFirmwareRemo' },
    { name:'ControlRobotScara', cover:'cover-7',  cat:'Robótica · Hardware · G-code',      year:'2023',       desc:t.p_scara,      tags:['Arduino','G-code','C++','SCARA'],                         badge:'OPEN SOURCE', bc:C.gold, gh:'https://github.com/KevinAlcalde/ControlRobotScara' },
    { name:'OpenWiFiControl',   cover:'cover-1',  cat:'Network · Monitoring · IoT',        year:'2023',       desc:t.p_openwifi,   tags:['C++','ESP8266','WiFi','Networking'],                      badge:'OPEN SOURCE', bc:C.olive,gh:'https://github.com/KevinAlcalde/OpenWiFiControl' },
    { name:'Canopiis',          cover:'cover-10', cat:'AgriTech · Chainlink · Blockchain', year:'2023',       desc:t.p_canopiis,   tags:['Chainlink','Solidity','IoT','Web3'],                      badge:'PROYECTO',    bc:C.dusk  },
    { name:'AquaGenEd',         cover:'cover-11', cat:'EdTech · Water · Biotech',          year:'2024',       desc:t.p_aquagened,  tags:['Educación','Biotech','Sustentabilidad'],                  badge:'PROYECTO',    bc:C.green },
    { name:'ETH Kipu 2024',     cover:'cover-4',  cat:'Blockchain · Web3',                 year:'2024',       desc:t.p_ethkipu,    tags:['Solidity','TypeScript','Ethereum','DeFi'],                badge:'BOOTCAMP',    bc:C.gold, gh:'https://github.com/KevinAlcalde/ETHKipu2024' },
    { name:'SIGNAL.GK',         cover:'cover-6',  cat:'Hackathon · NASA · Data',           year:'2019',       desc:t.p_signal,     tags:['Python','Data','NASA','Hackathon'],                       badge:'🏆 2DO LUGAR',bc:C.hi    },
  ];
  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label" style={{ color: C.olive }}>03</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black mb-4" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', lineHeight:1, color:'var(--text)' }}>
          {t.sec_projects}
        </h2>
        <p className="reveal mb-16 max-w-xl" style={{ color:'var(--muted)' }}>
          {t.projects_sub}
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
