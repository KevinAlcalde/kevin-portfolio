'use client';

import { useEffect, useState } from 'react';

interface GeoData {
  ip: string;
  city: string;
  country: string;
  flag: string;
  lat: number;
  lon: number;
}

// Equirectangular projection → SVG coords for viewBox "0 0 200 100"
function pt(lon: number, lat: number) {
  return `${(((lon + 180) / 360) * 200).toFixed(1)},${(((90 - lat) / 180) * 100).toFixed(1)}`;
}

// Simplified continent polygons [lon, lat]
const LANDS: [number, number][][] = [
  // North America
  [[-165,70],[-140,60],[-130,55],[-125,50],[-120,35],[-110,23],[-85,10],[-75,8],[-75,15],[-80,23],[-75,40],[-65,44],[-55,47],[-50,60],[-60,70],[-80,83],[-165,70]],
  // South America
  [[-80,10],[-65,0],[-55,-5],[-35,-5],[-35,-10],[-40,-23],[-45,-23],[-50,-30],[-55,-40],[-65,-55],[-68,-55],[-75,-50],[-75,-40],[-80,-20],[-80,0],[-80,10]],
  // Europe
  [[-10,36],[0,44],[10,44],[20,44],[30,45],[40,42],[40,38],[35,36],[30,40],[25,38],[20,37],[15,38],[12,44],[0,44],[-10,44],[-10,36]],
  // Africa
  [[-15,15],[0,5],[10,5],[30,10],[40,10],[50,12],[45,0],[40,-15],[35,-20],[30,-35],[20,-35],[15,-30],[10,-18],[5,-5],[5,5],[0,5],[-5,5],[-15,10],[-18,15],[-15,15]],
  // Asia + Middle East
  [[26,71],[60,73],[110,72],[140,70],[165,68],[180,66],[170,60],[135,45],[140,35],[130,32],[125,22],[115,20],[105,15],[100,5],[95,2],[80,-5],[75,8],[60,22],[55,22],[45,28],[40,38],[30,40],[26,44],[26,50],[26,65],[26,71]],
  // Australia
  [[115,-20],[120,-18],[130,-12],[135,-12],[140,-15],[148,-20],[152,-24],[153,-28],[150,-38],[145,-40],[140,-36],[130,-32],[125,-33],[115,-30],[115,-20]],
  // Greenland
  [[-45,84],[-20,84],[-18,78],[-25,70],[-40,65],[-55,68],[-60,76],[-50,82],[-45,84]],
  // Japan (approximate)
  [[130,31],[131,33],[132,34],[134,35],[136,36],[138,38],[140,40],[141,41],[141,39],[139,37],[136,34],[133,33],[130,31]],
  // UK (approximate)
  [[-5,50],[-3,51],[0,51],[2,52],[1,53],[-1,54],[-3,58],[-5,58],[-6,56],[-5,54],[-3,52],[-5,50]],
  // New Zealand (rough)
  [[172,-37],[174,-36],[176,-38],[174,-41],[172,-43],[170,-44],[168,-46],[170,-46],[172,-43],[172,-37]],
  // Scandinavia
  [[5,58],[8,57],[10,55],[15,56],[20,59],[25,65],[28,70],[26,71],[22,70],[18,68],[15,66],[12,64],[8,63],[5,58]],
  // Iceland
  [[-24,64],[-14,63],[-13,65],[-15,66],[-18,67],[-22,66],[-24,64]],
];

function WorldMap({ lat, lon }: { lat: number; lon: number }) {
  const dotX = (((lon + 180) / 360) * 200).toFixed(2);
  const dotY = (((90 - lat) / 180) * 100).toFixed(2);

  return (
    <svg
      viewBox="0 0 200 100"
      width="100%"
      style={{ display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ocean */}
      <rect width="200" height="100" fill="#04080a" />

      {/* Graticule (lat/lon grid) */}
      {([-60, -30, 0, 30, 60] as number[]).map(la => (
        <line key={`la${la}`}
          x1="0" y1={((90 - la) / 180 * 100).toFixed(1)}
          x2="200" y2={((90 - la) / 180 * 100).toFixed(1)}
          stroke="rgba(122,150,64,0.1)" strokeWidth="0.3"
        />
      ))}
      {([-120, -60, 0, 60, 120] as number[]).map(lo => (
        <line key={`lo${lo}`}
          x1={((lo + 180) / 360 * 200).toFixed(1)} y1="0"
          x2={((lo + 180) / 360 * 200).toFixed(1)} y2="100"
          stroke="rgba(122,150,64,0.1)" strokeWidth="0.3"
        />
      ))}

      {/* Equator */}
      <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(122,150,64,0.18)" strokeWidth="0.4" strokeDasharray="2 3" />

      {/* Continents */}
      {LANDS.map((poly, i) => (
        <polygon
          key={i}
          points={poly.map(([lo, la]) => pt(lo, la)).join(' ')}
          fill="rgba(74,90,40,0.55)"
          stroke="rgba(122,150,64,0.6)"
          strokeWidth="0.45"
          strokeLinejoin="round"
        />
      ))}

      {/* Visitor: outer pulse ring */}
      <circle cx={dotX} cy={dotY} r="7" fill="none" stroke="rgba(247,76,25,0.25)" strokeWidth="0.8">
        <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Visitor: crosshair */}
      <line x1={+dotX - 5} y1={dotY} x2={+dotX + 5} y2={dotY}
        stroke="rgba(247,76,25,0.65)" strokeWidth="0.5" />
      <line x1={dotX} y1={+dotY - 5} x2={dotX} y2={+dotY + 5}
        stroke="rgba(247,76,25,0.65)" strokeWidth="0.5" />

      {/* Visitor: center dot */}
      <circle cx={dotX} cy={dotY} r="1.8" fill="#F74C19" />

      {/* Border */}
      <rect width="200" height="100" fill="none" stroke="rgba(122,150,64,0.2)" strokeWidth="0.5" />
    </svg>
  );
}

export default function VisitorWidget() {
  const [geo, setGeo] = useState<GeoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetch('https://ipwho.is/')
      .then(r => r.json())
      .then(d => {
        setGeo({
          ip:      d.ip      ?? '—',
          city:    d.city    ?? '—',
          country: d.country ?? '—',
          flag:    d.flag?.emoji ?? '🌐',
          lat:     d.latitude  ?? 0,
          lon:     d.longitude ?? 0,
        });
      })
      .catch(() => {/* silently fail */})
      .finally(() => setLoading(false));
  }, []);

  /* Minimized state — just a globe icon */
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        title="visitor.trace"
        style={{
          position: 'fixed', bottom: 90, right: 24, zIndex: 9998,
          width: 38, height: 38,
          background: 'rgba(6,8,4,0.9)',
          border: '1px solid rgba(122,150,64,0.3)',
          color: '#7a9640', fontSize: '1rem',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        🌐
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 90,
      right: 24,
      zIndex: 9998,
      width: 224,
      background: 'rgba(5,7,3,0.93)',
      border: '1px solid rgba(122,150,64,0.22)',
      backdropFilter: 'blur(10px)',
      fontFamily: 'JetBrains Mono, monospace',
      boxShadow: '0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(122,150,64,0.06)',
    }}>

      {/* Header bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '5px 8px',
        borderBottom: '1px solid rgba(122,150,64,0.14)',
        background: 'rgba(122,150,64,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#F74C19', display: 'inline-block' }} />
          <span style={{ color: 'rgba(122,150,64,0.7)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            visitor.trace
          </span>
        </div>
        <button
          onClick={() => setOpen(false)}
          style={{ background: 'none', border: 'none', color: 'rgba(122,150,64,0.4)', cursor: 'pointer', fontSize: '0.65rem', padding: '0 2px', lineHeight: 1 }}
        >
          ✕
        </button>
      </div>

      {/* Map */}
      <div style={{ lineHeight: 0 }}>
        {loading ? (
          <div style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#04080a' }}>
            <span style={{ color: 'rgba(122,150,64,0.4)', fontSize: '0.6rem', letterSpacing: '0.18em' }}>SCANNING...</span>
          </div>
        ) : geo ? (
          <WorldMap lat={geo.lat} lon={geo.lon} />
        ) : (
          <div style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#04080a' }}>
            <span style={{ color: 'rgba(247,76,25,0.5)', fontSize: '0.6rem' }}>OFFLINE</span>
          </div>
        )}
      </div>

      {/* Info rows */}
      {!loading && geo && (
        <div style={{ padding: '7px 9px 6px', borderTop: '1px solid rgba(122,150,64,0.1)' }}>
          {/* IP */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
            <span style={{ color: 'rgba(122,150,64,0.5)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', minWidth: 26 }}>IP</span>
            <span style={{ color: '#F74C19', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em' }}>{geo.ip}</span>
          </div>
          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
            <span style={{ color: 'rgba(122,150,64,0.5)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', minWidth: 26 }}>LOC</span>
            <span style={{ color: '#d4cfb2', fontSize: '0.62rem' }}>{geo.flag} {geo.city}, {geo.country}</span>
          </div>
          {/* Coordinates */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ color: 'rgba(122,150,64,0.5)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', minWidth: 26 }}>GEO</span>
            <span style={{ color: 'rgba(212,207,178,0.5)', fontSize: '0.58rem' }}>
              {geo.lat.toFixed(2)}°{geo.lat >= 0 ? 'N' : 'S'} {Math.abs(geo.lon).toFixed(2)}°{geo.lon >= 0 ? 'E' : 'W'}
            </span>
          </div>
        </div>
      )}

      {/* MAC note */}
      <div style={{
        padding: '4px 9px 5px',
        borderTop: '1px solid rgba(122,150,64,0.07)',
      }}>
        <span style={{ color: 'rgba(122,150,64,0.25)', fontSize: '0.52rem', letterSpacing: '0.06em' }}>
          MAC // restricted by browser
        </span>
      </div>
    </div>
  );
}
