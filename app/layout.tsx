import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kevin Alcalde | Electronics Engineer & Entrepreneur',
  description:
    'Portfolio de Kevin Alcalde — Ingeniero Electrónico, emprendedor y desarrollador full-stack de Mendoza, Argentina. Especializado en IoT, Blockchain, Web3 y tecnología sostenible.',
  keywords: [
    'Kevin Alcalde',
    'Ingeniería Electrónica',
    'IoT',
    'Blockchain',
    'Solidity',
    'Web3',
    'Mendoza Argentina',
    'React',
    'Next.js',
    'Three.js',
  ],
  authors: [{ name: 'Kevin Alejandro Alcalde' }],
  openGraph: {
    title: 'Kevin Alcalde | Engineer & Entrepreneur',
    description: 'Electronics Engineer, Full-Stack Developer & Serial Entrepreneur from Mendoza, Argentina',
    type: 'website',
    url: 'https://kevin.alcalde',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030712] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
