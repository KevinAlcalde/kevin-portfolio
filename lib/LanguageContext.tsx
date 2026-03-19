'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Lang, Translations, TRANSLATIONS, countryToLang } from './i18n';

interface GeoData {
  ip: string; city: string; country: string;
  countryCode: string; isp: string; lat: number; lon: number;
}

interface LangContextValue {
  lang: Lang;
  t: Translations;
  geo: GeoData | null;
  geoLoading: boolean;
}

const LangContext = createContext<LangContextValue>({
  lang: 'es', t: TRANSLATIONS.es, geo: null, geoLoading: true,
});

export function useLanguage() { return useContext(LangContext); }

async function fetchGeo(): Promise<GeoData> {
  try {
    const r = await fetch('https://freeipapi.com/api/json/', { cache: 'no-store' });
    const d = await r.json();
    if (d?.ipAddress && d?.latitude != null) {
      return { ip: d.ipAddress, city: d.cityName ?? '—', country: d.countryName ?? '—',
        countryCode: d.countryCode ?? '', isp: d.continent ?? '',
        lat: Number(d.latitude), lon: Number(d.longitude) };
    }
  } catch { /* fall through */ }
  const r2 = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
  const d2 = await r2.json();
  return { ip: d2.ip ?? '—', city: d2.city ?? '—', country: d2.country_name ?? '—',
    countryCode: d2.country_code ?? '', isp: d2.org ?? '',
    lat: Number(d2.latitude), lon: Number(d2.longitude) };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang]           = useState<Lang>('es');
  const [geo,  setGeo]            = useState<GeoData | null>(null);
  const [geoLoading, setLoading]  = useState(true);

  useEffect(() => {
    fetchGeo()
      .then(data => {
        setGeo(data);
        setLang(countryToLang(data.countryCode));
      })
      .catch(() => {/* keep es default */})
      .finally(() => setLoading(false));
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: TRANSLATIONS[lang], geo, geoLoading }}>
      {children}
    </LangContext.Provider>
  );
}
