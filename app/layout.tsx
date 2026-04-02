// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yhon Ccerhuayo | Fullstack Developer & AI Engineer',
  description:
    'Portafolio profesional desarrollado con Next.js, Tailwind CSS, Machine Learning y visualización de datos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
