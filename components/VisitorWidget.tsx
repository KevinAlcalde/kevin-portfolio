'use client';

import { useEffect, useState } from 'react';

interface GeoData {
  ip:          string;
  city:        string;
  country:     string;
  countryCode: string;
  isp:         string;
  lat:         number;
  lon:         number;
}

// Country code → flag emoji  ("AR" → "🇦🇷")
function flag(code: string) {
  if (!code || code.length !== 2) return '🌐';
  return [...code.toUpperCase()].map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join('');
}

// Fetch geo with fallback chain
async function fetchGeo(): Promise<GeoData> {
  // Primary: freeipapi.com (HTTPS, no key, generous limits)
  try {
    const r = await fetch('https://freeipapi.com/api/json/', { cache: 'no-store' });
    const d = await r.json();
    if (d?.ipAddress && d?.latitude != null) {
      return {
        ip:          d.ipAddress,
        city:        d.cityName    ?? '—',
        country:     d.countryName ?? '—',
        countryCode: d.countryCode ?? '',
        isp:         d.continent   ?? '',
        lat:         Number(d.latitude),
        lon:         Number(d.longitude),
      };
    }
  } catch { /* next */ }

  // Fallback: ipapi.co
  const r2 = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
  const d2 = await r2.json();
  return {
    ip:          d2.ip            ?? '—',
    city:        d2.city          ?? '—',
    country:     d2.country_name  ?? '—',
    countryCode: d2.country_code  ?? '',
    isp:         d2.org           ?? '',
    lat:         Number(d2.latitude),
    lon:         Number(d2.longitude),
  };
}

// Equirectangular: [lon, lat] → "x,y" for viewBox "0 0 200 100"
const px = (lon: number) => ((lon + 180) / 360) * 200;
const py = (lat: number) => ((90  - lat) / 180) * 100;
function pt([lo, la]: [number, number]) { return `${px(lo).toFixed(1)},${py(la).toFixed(1)}`; }

const LANDS: [number, number][][] = [
  // North America
  [[-165,70],[-140,60],[-130,55],[-125,50],[-120,35],[-110,23],[-85,10],[-75,8],[-75,15],[-80,23],[-75,40],[-65,44],[-55,47],[-50,60],[-60,70],[-80,83],[-165,70]],
  // South America
  [[-80,10],[-65,0],[-55,-5],[-35,-5],[-35,-10],[-40,-23],[-45,-23],[-50,-30],[-55,-40],[-65,-55],[-68,-55],[-75,-50],[-75,-40],[-80,-20],[-80,0],[-80,10]],
  // Europe
  [[-10,36],[0,44],[10,44],[20,44],[30,45],[40,42],[40,38],[35,36],[30,40],[25,38],[20,37],[15,38],[12,44],[0,44],[-10,44],[-10,36]],
  // Africa
  [[-15,15],[0,5],[10,5],[30,10],[40,10],[50,12],[45,0],[40,-15],[35,-20],[30,-35],[20,-35],[15,-30],[10,-18],[5,-5],[5,5],[0,5],[-5,5],[-15,10],[-18,15],[-15,15]],
  // Eurasia (Asia + conectado con Europa vía Urales)
  [[26,71],[60,73],[110,72],[140,70],[165,68],[180,66],[170,60],[135,45],[140,35],[130,32],[125,22],[115,20],[105,15],[100,5],[95,2],[80,-5],[75,8],[60,22],[55,22],[45,28],[40,38],[30,40],[26,44],[26,50],[26,65],[26,71]],
  // Australia
  [[115,-20],[120,-18],[130,-12],[135,-12],[140,-15],[148,-20],[152,-24],[153,-28],[150,-38],[145,-40],[140,-36],[130,-32],[125,-33],[115,-30],[115,-20]],
  // Greenland
  [[-45,84],[-20,84],[-18,78],[-25,70],[-40,65],[-55,68],[-60,76],[-50,82],[-45,84]],
  // Scandinavia
  [[5,58],[8,57],[10,55],[15,56],[20,59],[25,65],[28,70],[26,71],[22,70],[18,68],[15,66],[12,64],[8,63],[5,58]],
  // Japan
  [[130,31],[131,33],[132,34],[134,35],[136,36],[138,38],[140,40],[141,41],[141,39],[139,37],[136,34],[133,33],[130,31]],
  // Iceland
  [[-24,64],[-14,63],[-13,65],[-15,66],[-18,67],[-22,66],[-24,64]],
  // UK
  [[-5,50],[-3,51],[0,51],[1,53],[-1,54],[-3,58],[-5,58],[-6,56],[-5,54],[-3,52],[-5,50]],
];

function WorldMap({ lat, lon }: { lat: number; lon: number }) {
  const cx = px(lon);
  const cy = py(lat);

  return (
    <svg viewBox="0 0 200 100" width="100%" style={{ display: 'block' }}>
      <style>{`
        @keyframes vping {
          0%   { r: 2.5; opacity: 0.9; }
          100% { r: 12;  opacity: 0;   }
        }
        .vping { animation: vping 1.8s ease-out infinite; }
      `}</style>

      {/* Ocean */}
      <rect width="200" height="100" fill="#03070a" />

      {/* Graticule */}
      {[-60,-30,0,30,60].map(la => (
        <line key={`la${la}`} x1="0" x2="200"
          y1={py(la).toFixed(1)} y2={py(la).toFixed(1)}
          stroke="rgba(122,150,64,0.1)" strokeWidth="0.3" />
      ))}
      {[-120,-60,0,60,120].map(lo => (
        <line key={`lo${lo}`} y1="0" y2="100"
          x1={px(lo).toFixed(1)} x2={px(lo).toFixed(1)}
          stroke="rgba(122,150,64,0.1)" strokeWidth="0.3" />
      ))}
      {/* Equator */}
      <line x1="0" x2="200" y1="50" y2="50"
        stroke="rgba(122,150,64,0.2)" strokeWidth="0.4" strokeDasharray="2 3" />

      {/* Continents */}
      {LANDS.map((poly, i) => (
        <polygon key={i}
          points={poly.map(pt).join(' ')}
          fill="rgba(68,88,36,0.6)"
          stroke="rgba(122,150,64,0.65)"
          strokeWidth="0.45"
          strokeLinejoin="round"
        />
      ))}

      {/* Ping ring (CSS animated) */}
      <circle className="vping" cx={cx} cy={cy} r="2.5"
        fill="none" stroke="#F74C19" strokeWidth="0.7" />

      {/* Crosshair */}
      <line x1={cx - 6} x2={cx + 6} y1={cy} y2={cy}
        stroke="rgba(247,76,25,0.7)" strokeWidth="0.5" />
      <line x1={cx} x2={cx} y1={cy - 6} y2={cy + 6}
        stroke="rgba(247,76,25,0.7)" strokeWidth="0.5" />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r="1.6" fill="#F74C19" />

      {/* Border */}
      <rect width="200" height="100" fill="none"
        stroke="rgba(122,150,64,0.18)" strokeWidth="0.5" />
    </svg>
  );
}

/* ── Row helper ─────────────────────────────── */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
      <span style={{
        color: 'rgba(122,150,64,0.5)', fontSize: '0.54rem',
        letterSpacing: '0.14em', textTransform: 'uppercase', minWidth: 28,
      }}>{label}</span>
      {children}
    </div>
  );
}

/* ── Main widget ────────────────────────────── */
export default function VisitorWidget() {
  const [geo,     setGeo]     = useState<GeoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);
  const [open,    setOpen]    = useState(true);

  useEffect(() => {
    fetchGeo()
      .then(setGeo)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} title="visitor.trace" style={{
        position: 'fixed', bottom: 90, right: 24, zIndex: 9998,
        width: 36, height: 36,
        background: 'rgba(5,7,3,0.92)',
        border: '1px solid rgba(122,150,64,0.28)',
        color: '#7a9640', fontSize: '0.95rem', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.45)',
      }}>🌐</button>
    );
  }

  return (
    <div style={{
      position: 'fixed', bottom: 90, right: 24, zIndex: 9998, width: 228,
      background: 'rgba(4,6,3,0.94)',
      border: '1px solid rgba(122,150,64,0.22)',
      backdropFilter: 'blur(12px)',
      fontFamily: 'JetBrains Mono, monospace',
      boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    }}>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '5px 8px',
        borderBottom: '1px solid rgba(122,150,64,0.13)',
        background: 'rgba(122,150,64,0.03)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: loading ? '#9a7c30' : error ? '#F74C19' : '#4d7a32',
            display: 'inline-block',
          }} />
          <span style={{ color: 'rgba(122,150,64,0.65)', fontSize: '0.57rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            visitor.trace
          </span>
        </div>
        <button onClick={() => setOpen(false)} style={{
          background: 'none', border: 'none',
          color: 'rgba(122,150,64,0.4)', cursor: 'pointer',
          fontSize: '0.65rem', padding: '0 2px', lineHeight: 1,
        }}>✕</button>
      </div>

      {/* Map */}
      <div style={{ lineHeight: 0 }}>
        {loading && (
          <div style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#03070a' }}>
            <span style={{ color: 'rgba(122,150,64,0.4)', fontSize: '0.58rem', letterSpacing: '0.2em' }}>SCANNING…</span>
          </div>
        )}
        {!loading && !error && geo && <WorldMap lat={geo.lat} lon={geo.lon} />}
        {!loading && (error || !geo) && (
          <div style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#03070a' }}>
            <span style={{ color: 'rgba(247,76,25,0.5)', fontSize: '0.58rem', letterSpacing: '0.1em' }}>SIGNAL LOST</span>
          </div>
        )}
      </div>

      {/* Data rows */}
      {!loading && geo && (
        <div style={{ padding: '7px 9px 8px', borderTop: '1px solid rgba(122,150,64,0.1)' }}>
          <Row label="IP">
            <span style={{ color: '#F74C19', fontSize: '0.68rem', fontWeight: 700 }}>{geo.ip}</span>
          </Row>
          <Row label="LOC">
            <span style={{ color: '#d4cfb2', fontSize: '0.62rem' }}>
              {flag(geo.countryCode)} {geo.city}, {geo.country}
            </span>
          </Row>
          <Row label="GEO">
            <span style={{ color: 'rgba(212,207,178,0.5)', fontSize: '0.57rem' }}>
              {Math.abs(geo.lat).toFixed(2)}°{geo.lat >= 0 ? 'N' : 'S'}&nbsp;
              {Math.abs(geo.lon).toFixed(2)}°{geo.lon >= 0 ? 'E' : 'W'}
            </span>
          </Row>
          {geo.isp && (
            <Row label="REG">
              <span style={{ color: 'rgba(212,207,178,0.4)', fontSize: '0.57rem' }}>{geo.isp}</span>
            </Row>
          )}
        </div>
      )}
    </div>
  );
}
