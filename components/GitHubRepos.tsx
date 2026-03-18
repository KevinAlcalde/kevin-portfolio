'use client';

const repos = [
  {
    name: 'Bunker4KA',
    desc: 'WhatsApp automation · EvolutionAPI + Docker + PostgreSQL + n8n + Portainer',
    lang: 'TypeScript',
    lc: '#3178c6',
    accent: 'gh-accent-ts',
    forks: 1,
    stars: 0,
  },
  {
    name: 'UpFirmwareRemo',
    desc: 'Remote OTA firmware updates for IoT devices without router port exposure',
    lang: 'C++',
    lc: '#f34b7d',
    accent: 'gh-accent-cpp',
    forks: 0,
    stars: 0,
  },
  {
    name: 'ControlRobotScara',
    desc: 'SCARA robot manipulation via G-code and Arduino · Inverse kinematics',
    lang: 'Shell / Arduino',
    lc: '#89e051',
    accent: 'gh-accent-shell',
    forks: 0,
    stars: 0,
  },
  {
    name: 'ESP8266Codes',
    desc: 'ESP8266 microcontroller examples, WiFi management and sensor libraries',
    lang: 'C++',
    lc: '#f34b7d',
    accent: 'gh-accent-cpp',
    forks: 0,
    stars: 0,
  },
  {
    name: 'OpenWiFiControl',
    desc: 'WiFi device monitoring with IP/MAC tracking and connectivity analytics',
    lang: 'C++',
    lc: '#f34b7d',
    accent: 'gh-accent-cpp',
    forks: 0,
    stars: 0,
  },
  {
    name: 'ETHKipu2024',
    desc: 'Ethereum Kipu bootcamp — smart contracts, DeFi fundamentals · LATAM',
    lang: 'TypeScript',
    lc: '#3178c6',
    accent: 'gh-accent-ts',
    forks: 0,
    stars: 0,
  },
  {
    name: 'JAVAySQL',
    desc: 'Java OOP projects · Inheritance, polymorphism, JDBC database integration',
    lang: 'Java',
    lc: '#b07219',
    accent: 'gh-accent-java',
    forks: 0,
    stars: 0,
  },
  {
    name: 'Cexamples',
    desc: 'Memory management, pointers, LIFO/FIFO structures, malloc/free patterns in C',
    lang: 'C++',
    lc: '#f34b7d',
    accent: 'gh-accent-cpp',
    forks: 0,
    stars: 0,
  },
  {
    name: 'DLLvirusScan',
    desc: 'DLL virus scanning utility — PowerShell security tooling',
    lang: 'PowerShell',
    lc: '#012456',
    accent: 'gh-accent-ps',
    forks: 0,
    stars: 0,
  },
  {
    name: 'botasitente',
    desc: 'TypeScript web application · Deployed on Vercel',
    lang: 'TypeScript',
    lc: '#3178c6',
    accent: 'gh-accent-ts',
    forks: 0,
    stars: 0,
  },
  {
    name: 'pagina01',
    desc: 'JavaScript web application · Deployed on Vercel',
    lang: 'JavaScript',
    lc: '#f1e05a',
    accent: 'gh-accent-js',
    forks: 0,
    stars: 0,
  },
  {
    name: 'paginaDatawa',
    desc: 'Web development project · CSS & layout experiments',
    lang: 'CSS',
    lc: '#563d7c',
    accent: 'gh-accent-css',
    forks: 0,
    stars: 0,
  },
];

export default function GitHubRepos() {
  return (
    <section id="github" className="py-32 px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-5 mb-3">
          <span className="section-label text-[var(--accent)]">04</span>
          <div className="h-line flex-1 max-w-xs" />
        </div>
        <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-16">
          <h2
            className="font-black text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}
          >
            GitHub
          </h2>
          <a
            href="https://github.com/KevinAlcalde"
            target="_blank"
            rel="noopener noreferrer"
            className="section-label text-[var(--accent)] border-b border-[rgba(0,207,255,0.3)] hover:border-[var(--accent)] pb-0.5 transition-colors"
          >
            github.com/KevinAlcalde ↗
          </a>
        </div>

        {/* Repo grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {repos.map((r, i) => (
            <a
              key={r.name}
              href={`https://github.com/KevinAlcalde/${r.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal card ${r.accent} p-4 flex flex-col gap-3 hover:border-[rgba(255,255,255,0.12)] transition-all`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {/* Name */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-[var(--text)] font-semibold text-sm leading-tight break-words">
                  {r.name}
                </span>
                <svg className="w-3.5 h-3.5 text-[var(--muted)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>

              {/* Description */}
              <p className="text-[var(--muted)] text-xs leading-relaxed flex-1">{r.desc}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.lc }} />
                  <span className="section-label" style={{ fontSize: '0.65rem' }}>{r.lang}</span>
                </div>
                <div className="flex items-center gap-3">
                  {r.stars > 0 && (
                    <span className="section-label" style={{ fontSize: '0.65rem' }}>⭐ {r.stars}</span>
                  )}
                  {r.forks > 0 && (
                    <span className="section-label" style={{ fontSize: '0.65rem' }}>🍴 {r.forks}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
