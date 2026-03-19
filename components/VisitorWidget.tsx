'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';

function flag(code: string) {
  if (!code || code.length !== 2) return '🌐';
  return [...code.toUpperCase()].map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join('');
}

const px = (lon: number) => ((lon + 180) / 360) * 200;
const py = (lat: number) => ((90  - lat) / 180) * 100;
function pt([lo, la]: [number, number]) { return `${px(lo).toFixed(1)},${py(la).toFixed(1)}`; }

const LANDS: [number, number][][] = [
  [[-165,70],[-140,60],[-130,55],[-125,50],[-120,35],[-110,23],[-85,10],[-75,8],[-75,15],[-80,23],[-75,40],[-65,44],[-55,47],[-50,60],[-60,70],[-80,83],[-165,70]],
  [[-80,10],[-65,0],[-55,-5],[-35,-5],[-35,-10],[-40,-23],[-45,-23],[-50,-30],[-55,-40],[-65,-55],[-68,-55],[-75,-50],[-75,-40],[-80,-20],[-80,0],[-80,10]],
  [[-10,36],[0,44],[10,44],[20,44],[30,45],[40,42],[40,38],[35,36],[30,40],[25,38],[20,37],[15,38],[12,44],[0,44],[-10,44],[-10,36]],
  [[-15,15],[0,5],[10,5],[30,10],[40,10],[50,12],[45,0],[40,-15],[35,-20],[30,-35],[20,-35],[15,-30],[10,-18],[5,-5],[5,5],[0,5],[-5,5],[-15,10],[-18,15],[-15,15]],
  [[26,71],[60,73],[110,72],[140,70],[165,68],[180,66],[170,60],[135,45],[140,35],[130,32],[125,22],[115,20],[105,15],[100,5],[95,2],[80,-5],[75,8],[60,22],[55,22],[45,28],[40,38],[30,40],[26,44],[26,50],[26,65],[26,71]],
  [[115,-20],[120,-18],[130,-12],[135,-12],[140,-15],[148,-20],[152,-24],[153,-28],[150,-38],[145,-40],[140,-36],[130,-32],[125,-33],[115,-30],[115,-20]],
  [[-45,84],[-20,84],[-18,78],[-25,70],[-40,65],[-55,68],[-60,76],[-50,82],[-45,84]],
  [[5,58],[8,57],[10,55],[15,56],[20,59],[25,65],[28,70],[26,71],[22,70],[18,68],[15,66],[12,64],[8,63],[5,58]],
  [[130,31],[131,33],[132,34],[134,35],[136,36],[138,38],[140,40],[141,41],[141,39],[139,37],[136,34],[133,33],[130,31]],
  [[-24,64],[-14,63],[-13,65],[-15,66],[-18,67],[-22,66],[-24,64]],
  [[-5,50],[-3,51],[0,51],[1,53],[-1,54],[-3,58],[-5,58],[-6,56],[-5,54],[-3,52],[-5,50]],
];

function WorldMap({ lat, lon }: { lat: number; lon: number }) {
  const cx = px(lon);
  const cy = py(lat);
  return (
    <svg viewBox="0 0 200 100" width="100%" style={{ display: 'block' }}>
      <style>{`@keyframes vping{0%{r:2.5;opacity:.9}100%{r:11;opacity:0}}.vping{animation:vping 1.8s ease-out infinite}`}</style>
      <rect width="200" height="100" fill="#03070a" />
      {[-60,-30,0,30,60].map(la => <line key={`la${la}`} x1="0" x2="200" y1={py(la).toFixed(1)} y2={py(la).toFixed(1)} stroke="rgba(122,150,64,0.1)" strokeWidth="0.3" />)}
      {[-120,-60,0,60,120].map(lo => <line key={`lo${lo}`} y1="0" y2="100" x1={px(lo).toFixed(1)} x2={px(lo).toFixed(1)} stroke="rgba(122,150,64,0.1)" strokeWidth="0.3" />)}
      <line x1="0" x2="200" y1="50" y2="50" stroke="rgba(122,150,64,0.2)" strokeWidth="0.4" strokeDasharray="2 3" />
      {LANDS.map((poly, i) => <polygon key={i} points={poly.map(pt).join(' ')} fill="rgba(68,88,36,0.6)" stroke="rgba(122,150,64,0.65)" strokeWidth="0.45" strokeLinejoin="round" />)}
      <circle className="vping" cx={cx} cy={cy} r="2.5" fill="none" stroke="#F74C19" strokeWidth="0.7" />
      <line x1={cx - 6} x2={cx + 6} y1={cy} y2={cy} stroke="rgba(247,76,25,0.7)" strokeWidth="0.5" />
      <line x1={cx} x2={cx} y1={cy - 6} y2={cy + 6} stroke="rgba(247,76,25,0.7)" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r="1.6" fill="#F74C19" />
      <rect width="200" height="100" fill="none" stroke="rgba(122,150,64,0.18)" strokeWidth="0.5" />
    </svg>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display:'flex', alignItems:'baseline', gap:5, marginBottom:3 }}>
      <span style={{ color:'rgba(122,150,64,0.5)', fontSize:'0.52rem', letterSpacing:'0.14em', textTransform:'uppercase', minWidth:24 }}>{label}</span>
      {children}
    </div>
  );
}

export default function VisitorWidget() {
  const { t, geo, geoLoading } = useLanguage();
  const [open, setOpen]        = useState(true);
  const [mobile, setMobile]    = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 500);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const W   = mobile ? Math.min(window.innerWidth * 0.72, 180) : 224;
  const fs  = mobile ? '0.58rem' : '0.65rem';
  const fsS = mobile ? '0.5rem'  : '0.54rem';

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} title="visitor.trace" style={{
        position:'fixed', bottom: mobile ? 80 : 90, right: mobile ? 12 : 24, zIndex:9998,
        width:32, height:32,
        background:'rgba(5,7,3,0.92)', border:'1px solid rgba(122,150,64,0.28)',
        color:'#7a9640', fontSize:'0.85rem', cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 4px 14px rgba(0,0,0,0.45)',
      }}>🌐</button>
    );
  }

  return (
    <div style={{
      position:'fixed', bottom: mobile ? 80 : 90, right: mobile ? 12 : 24,
      zIndex:9998, width: W,
      background:'rgba(4,6,3,0.94)',
      border:'1px solid rgba(122,150,64,0.22)',
      backdropFilter:'blur(12px)',
      fontFamily:'JetBrains Mono, monospace',
      boxShadow:'0 8px 32px rgba(0,0,0,0.6)',
    }}>
      {/* Header */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding: mobile ? '4px 7px' : '5px 8px',
        borderBottom:'1px solid rgba(122,150,64,0.13)',
        background:'rgba(122,150,64,0.03)',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:4 }}>
          <span style={{ width:4, height:4, borderRadius:'50%', background: geoLoading ? '#9a7c30' : geo ? '#4d7a32' : '#F74C19', display:'inline-block' }} />
          <span style={{ color:'rgba(122,150,64,0.65)', fontSize:fsS, letterSpacing:'0.16em', textTransform:'uppercase' }}>visitor.trace</span>
        </div>
        <button onClick={() => setOpen(false)} style={{ background:'none', border:'none', color:'rgba(122,150,64,0.4)', cursor:'pointer', fontSize:'0.6rem', padding:'0 2px', lineHeight:1 }}>✕</button>
      </div>

      {/* Map */}
      <div style={{ lineHeight:0 }}>
        {geoLoading && (
          <div style={{ height: mobile ? 56 : 70, display:'flex', alignItems:'center', justifyContent:'center', background:'#03070a' }}>
            <span style={{ color:'rgba(122,150,64,0.4)', fontSize:fsS, letterSpacing:'0.18em' }}>{t.w_scanning}</span>
          </div>
        )}
        {!geoLoading && geo  && <WorldMap lat={geo.lat} lon={geo.lon} />}
        {!geoLoading && !geo && (
          <div style={{ height: mobile ? 56 : 70, display:'flex', alignItems:'center', justifyContent:'center', background:'#03070a' }}>
            <span style={{ color:'rgba(247,76,25,0.5)', fontSize:fsS }}>{t.w_lost}</span>
          </div>
        )}
      </div>

      {/* Data */}
      {!geoLoading && geo && (
        <div style={{ padding: mobile ? '5px 8px 6px' : '7px 9px 8px', borderTop:'1px solid rgba(122,150,64,0.1)' }}>
          <Row label="IP">
            <span style={{ color:'#F74C19', fontSize: mobile ? '0.6rem' : '0.68rem', fontWeight:700 }}>{geo.ip}</span>
          </Row>
          <Row label="LOC">
            <span style={{ color:'#d4cfb2', fontSize:fs }}>{flag(geo.countryCode)} {geo.city}, {geo.country}</span>
          </Row>
          <Row label="GEO">
            <span style={{ color:'rgba(212,207,178,0.5)', fontSize:fsS }}>
              {Math.abs(geo.lat).toFixed(2)}°{geo.lat >= 0 ? 'N' : 'S'} {Math.abs(geo.lon).toFixed(2)}°{geo.lon >= 0 ? 'E' : 'W'}
            </span>
          </Row>
          {geo.isp && !mobile && (
            <Row label="REG">
              <span style={{ color:'rgba(212,207,178,0.4)', fontSize:fsS }}>{geo.isp}</span>
            </Row>
          )}
        </div>
      )}
    </div>
  );
}
