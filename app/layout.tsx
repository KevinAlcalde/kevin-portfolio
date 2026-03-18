import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kevin Alcalde // ENG + DEV + FOUNDER',
  description:
    'Kevin Alcalde — Ingeniero Electrónico, desarrollador full-stack, fundador. IoT · Blockchain · WebGL · Mendoza, Argentina.',
  authors: [{ name: 'Kevin Alejandro Alcalde' }],
};

// Prevent flash of wrong theme — runs before React hydrates
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
  } catch(e) {
    document.documentElement.setAttribute('data-theme','dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Theme script — must run before body renders */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
