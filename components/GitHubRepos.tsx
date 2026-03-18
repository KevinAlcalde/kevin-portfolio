'use client';

// Language dot colors — desaturated to military palette
const LC: Record<string, string> = {
  'C++':         '#7a3838',
  'TypeScript':  '#446080',
  'JavaScript':  '#7a6820',
  'PowerShell':  '#284050',
  'Shell':       '#486820',
  'Java':        '#6a4818',
  'CSS':         '#483858',
  'Mixed':       '#484838',
};

const repos = [
  { name:'Bunker4KA',         desc:'WhatsApp automation · EvolutionAPI + Docker + PostgreSQL + n8n + Portainer', lang:'TypeScript', accent:'gh-accent-ts',    forks:1 },
  { name:'UpFirmwareRemo',    desc:'Remote OTA firmware updates for IoT devices without router port exposure',    lang:'C++',        accent:'gh-accent-cpp',   forks:0 },
  { name:'ControlRobotScara', desc:'SCARA robot manipulation via G-code and Arduino · Inverse kinematics',       lang:'Shell',      accent:'gh-accent-shell', forks:0 },
  { name:'ESP8266Codes',      desc:'ESP8266 microcontroller examples, WiFi management and sensor libraries',     lang:'C++',        accent:'gh-accent-cpp',   forks:0 },
  { name:'OpenWiFiControl',   desc:'WiFi device monitoring with IP/MAC tracking and connectivity analytics',     lang:'C++',        accent:'gh-accent-cpp',   forks:0 },
  { name:'ETHKipu2024',       desc:'Ethereum Kipu bootcamp — smart contracts, DeFi fundamentals · LATAM',       lang:'TypeScript', accent:'gh-accent-ts',    forks:0 },
  { name:'JAVAySQL',          desc:'Java OOP projects · Inheritance, polymorphism, JDBC database integration',   lang:'Java',       accent:'gh-accent-java',  forks:0 },
  { name:'Cexamples',         desc:'Memory management, pointers, LIFO/FIFO structures, malloc/free in C',       lang:'C++',        accent:'gh-accent-cpp',   forks:0 },
  { name:'DLLvirusScan',      desc:'DLL virus scanning utility — PowerShell security tooling',                   lang:'PowerShell', accent:'gh-accent-ps',    forks:0 },
  { name:'botasitente',       desc:'TypeScript web application · Deployed on Vercel',                            lang:'TypeScript', accent:'gh-accent-ts',    forks:0 },
  { name:'pagina01',          desc:'JavaScript web application · Deployed on Vercel',                            lang:'JavaScript', accent:'gh-accent-js',    forks:0 },
  { name:'paginaDatawa',      desc:'Web development project · CSS & layout experiments',                         lang:'CSS',        accent:'gh-accent-css',   forks:0 },
];

export default function GitHubRepos() {
  return (
    <section id="github" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label" style={{ color:'#7a9640' }}>04</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-16">
          <h2 className="font-black" style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', lineHeight:1, color:'var(--text)' }}>
            GitHub
          </h2>
          <a
            href="https://github.com/KevinAlcalde"
            target="_blank" rel="noopener noreferrer"
            className="section-label pb-0.5 transition-colors"
            style={{ color:'#F74C19', borderBottom:'1px solid rgba(247,76,25,0.3)' }}
            onMouseEnter={e => (e.currentTarget.style.borderBottomColor = '#F74C19')}
            onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'rgba(247,76,25,0.3)')}
          >
            github.com/KevinAlcalde ↗
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {repos.map((r, i) => (
            <a
              key={r.name}
              href={`https://github.com/KevinAlcalde/${r.name}`}
              target="_blank" rel="noopener noreferrer"
              className={`reveal card ${r.accent} p-4 flex flex-col gap-3`}
              style={{ transitionDelay:`${i*28}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold leading-tight break-words" style={{ color:'var(--text)', fontFamily:'Orbitron, monospace', fontSize:'0.78rem' }}>
                  {r.name}
                </span>
                <svg className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color:'var(--muted)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <p className="text-xs leading-relaxed flex-1" style={{ color:'var(--muted)' }}>{r.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: LC[r.lang] || '#484838' }} />
                  <span className="section-label" style={{ fontSize:'0.62rem' }}>{r.lang}</span>
                </div>
                {r.forks > 0 && (
                  <span className="section-label" style={{ fontSize:'0.62rem', color:'#F74C19' }}>
                    🍴 {r.forks}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
