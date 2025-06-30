import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky-Pay - Paiements Sécurisés et Rapides",
  description: "Plateforme de paiement moderne et sécurisée pour vos transactions en ligne. Paiements instantanés, frais réduits, sécurité maximale.",
  keywords: ["paiement", "transaction", "sécurité", "fintech", "e-commerce", "stripe", "paypal"],
  authors: [{ name: "Sky-Pay Team" }],
  creator: "Sky-Pay",
  publisher: "Sky-Pay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Sky-Pay - Paiements Sécurisés et Rapides",
    description: "Plateforme de paiement moderne et sécurisée pour vos transactions en ligne.",
    url: "/",
    siteName: "Sky-Pay",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky-Pay - Paiements Sécurisés et Rapides",
    description: "Plateforme de paiement moderne et sécurisée pour vos transactions en ligne.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
