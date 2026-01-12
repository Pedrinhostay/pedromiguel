import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Preloader } from "@/components/ui/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Miguel | Automação & IA para Escalar Negócios",
  description: "Especialista em automação com n8n, inteligência artificial e design de sites. Transformo complexidade em eficiência para empresas que querem escalar sem aumentar a carga de trabalho.",
  keywords: ["automação", "IA", "inteligência artificial", "n8n", "sites", "design", "automação empresarial", "chatbot", "integração de sistemas", "Pedro Miguel"],
  authors: [{ name: "Pedro Miguel" }],
  creator: "Pedro Miguel",
  publisher: "Pedro Miguel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Pedro Miguel | Automação & IA para Escalar Negócios",
    description: "Especialista em automação com n8n, inteligência artificial e design de sites. Transformo complexidade em eficiência.",
    siteName: "Pedro Miguel - Automação & Design",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pedro Miguel - Automação & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Miguel | Automação & IA para Escalar Negócios",
    description: "Especialista em automação com n8n, inteligência artificial e design de sites.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Preloader />
          <ScrollProvider>
            {children}
          </ScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
