import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kevin Alcalde // ENG + DEV + FOUNDER',
  description:
    'Kevin Alcalde — Ingeniero Electrónico, desarrollador full-stack, fundador. IoT · Blockchain · WebGL · Mendoza, Argentina.',
  keywords: ['Kevin Alcalde', 'Ingeniería Electrónica', 'IoT', 'Blockchain', 'Solidity', 'React', 'Three.js'],
  authors: [{ name: 'Kevin Alejandro Alcalde' }],
  openGraph: {
    title: 'Kevin Alcalde // ENG + DEV + FOUNDER',
    description: 'Electronics Engineer · Full-Stack · Blockchain · Mendoza, Argentina',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Orbitron → military/sci-fi headings | JetBrains Mono → geek body */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
