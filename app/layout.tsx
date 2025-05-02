import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SupabaseProvider } from "@/components/SupabaseProvider"; 
import { Toaster } from 'react-hot-toast'
import "./globals.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Chronodôme 2.1',
  description: 'Événement sportif caritatif au profit de Trisomie 21 Puy de Dôme',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Chronodôme 2.1',
    description: 'Un événement sportif et solidaire dans le Puy de Dôme',
    url: 'https://chronodome21.fr',
    siteName: 'Chronodôme 2.1',
    images: [
      {
        url: 'https://chronodome21.fr/siteicon.jpg',
        width: 1200,
        height: 630,
        alt: 'Affiche de la Chronodôme 2.1',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
