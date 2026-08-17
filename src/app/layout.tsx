import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://orquideas.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Como Cultivar Orquídeas: Guia Prático para Iniciantes",
    template: "%s | Guia de Cultivo de Orquídeas",
  },
  description:
    "Aprenda os princípios básicos para cultivar orquídeas: ambiente, luminosidade, rega, adubação, substratos, pragas e fungos.",
  keywords: [
    "como cuidar de orquídeas",
    "como cultivar orquídeas",
    "cultivo de orquídeas",
    "cuidados com orquídeas",
    "rega de orquídeas",
    "luminosidade das orquídeas",
    "adubação de orquídeas",
    "substrato para orquídeas",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Guia de Cultivo de Orquídeas",
    title: "Como Cultivar Orquídeas: Guia Prático para Iniciantes",
    description:
      "Aprenda os princípios básicos para cultivar orquídeas: ambiente, luminosidade, rega, adubação, substratos, pragas e fungos.",
    // A imagem Open Graph é gerada automaticamente em build via src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Cultivar Orquídeas: Guia Prático para Iniciantes",
    description:
      "Aprenda os princípios básicos para cultivar orquídeas: ambiente, luminosidade, rega, adubação, substratos, pragas e fungos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream-50 font-sans text-ink-900">
        {children}
      </body>
    </html>
  );
}
