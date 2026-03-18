'use client';

import dynamic from 'next/dynamic';

const SkillCloud = dynamic(() => import('./SkillCloud'), { ssr: false });

const C = {
  olive:  '#7a9640',
  gold:   '#9a7c30',
  hi:     '#F74C19',
  green:  '#4d7a32',
  steel:  '#5a6a7a',
  tan:    '#8a7040',
  brown:  '#7a5048',
  dusk:   '#6a5870',
};

const cats = [
  { title: 'Frontend & 3D',       items: ['React','Next.js','TypeScript','Three.js','WebGL','GLSL Shaders','Tailwind CSS'], c: C.olive  },
  { title: 'Backend & Automation',items: ['Node.js','Python','Java','C / C++','SQL','PostgreSQL','N8N','Node-RED'],        c: C.gold   },
  { title: 'Blockchain & Web3',   items: ['Solidity','Hardhat','Ethers.js','Chainlink','Smart Contracts','IPFS'],          c: C.hi     },
  { title: 'Hardware & IoT',      items: ['Arduino','ESP8266 / ESP32','G-code','MQTT','SCARA Robotics','AutoCAD','CNC'],   c: C.green  },
  { title: 'Cloud & DevOps',      items: ['AWS (en curso)','Vercel','Docker','Portainer','Git','GitHub','CI/CD'],          c: C.steel  },
  { title: 'AI & Data',           items: ['OpenAI API','GPT-4o','Whisper','R','Data Analysis','Hacking Ético'],            c: C.tan    },
  { title: 'Diseño & Producto',   items: ['Figma','Protopie','Rhinoceros 3D','Keyshot','Adobe Premiere','After Effects'],  c: C.brown  },
  { title: 'Gestión',             items: ['ClickUp','Notion','Trello','Slack','Liderazgo de equipos','Metodologías ágiles'],c: C.dusk  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(122,150,64,0.04)' }} />

      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label" style={{ color: C.olive }}>02</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <h2 className="reveal font-black mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, color: 'var(--text)' }}>
          Stack Técnico
        </h2>
        <p className="reveal mb-16 max-w-lg" style={{ color: 'var(--muted)' }}>
          De firmware embebido a dApps en Ethereum.
          <span className="font-mono text-xs ml-2" style={{ color: C.olive }}>// drag sphere</span>
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Cloud */}
          <div className="reveal flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full" style={{ border: '1px solid rgba(122,150,64,0.07)' }} />
                <div className="absolute w-60 h-60 rounded-full" style={{ border: '1px solid rgba(247,76,25,0.06)' }} />
              </div>
              <SkillCloud />
            </div>
          </div>

          {/* Category grid */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cats.map((cat) => (
              <div
                key={cat.title}
                className="card p-4"
                style={{ borderLeftWidth: 2, borderLeftColor: `${cat.c}55` }}
              >
                <div className="text-xs font-semibold mb-3" style={{ color: cat.c, fontFamily: 'JetBrains Mono, monospace' }}>
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[0.7rem] px-2 py-0.5 transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--line)',
                        color: 'var(--muted)',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                        (e.currentTarget as HTMLElement).style.borderColor = `${cat.c}60`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
