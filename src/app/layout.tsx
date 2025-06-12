// app/layout.tsx o app/layout.js
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Quicksand } from 'next/font/google';
import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-quicksand',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conexiones360",
  description: "Agencia turística",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo .png" type="image/png" />
      </head>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} ${quicksand.variable} 
          antialiased 
          bg-[var(--background)] text-[var(--foreground)] font-sans
        `}
      >
        {children}
      </body>
    </html>
  );
}
