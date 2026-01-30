import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-quicksand",
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
  title: {
    default: "Conexiones360 | Agencia de Viajes en Neiva",
    template: "%s | Conexiones360",
  },
  description:
    "Conexiones360 es una agencia de viajes en Neiva con más de 15 años de experiencia. Ofrecemos paquetes turísticos nacionales e internacionales, excursiones, pasadías y transporte turístico.",
  keywords: [
    "Conexiones360",
    "agencia de viajes en Neiva",
    "paquetes turísticos Neiva",
    "viajes desde Neiva",
    "turismo Huila",
    "excursiones Colombia",
  ],
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Conexiones360 | Agencia de Viajes en Neiva",
    description:
      "Viajes nacionales e internacionales desde Neiva. Paquetes turísticos, pasadías y transporte con más de 15 años de experiencia.",
    url: "https://conexiones-360.com",
    siteName: "Conexiones360",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased`}
      >
        {/* Schema.org – Agencia de viajes */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Conexiones360",
              url: "https://conexiones-360.com",
              telephone: "+573162276795",
              address: {
                "@type": "PostalAddress",
                streetAddress: "CRA. 7 No 6-34 LOCAL 5 CENTRO",
                addressLocality: "Neiva",
                addressRegion: "Huila",
                addressCountry: "CO",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
