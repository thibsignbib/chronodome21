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

export const metadata = {
  title: 'Chronodôme 2.1',
  description: 'Événement sportif caritatif au profit de Trisomie 21 Puy de Dôme',
  icons: {
    icon: '/images/background3.png',
  },
  openGraph: {
    title: 'Chronodôme 2.1',
    description: 'Un événement sportif et solidaire dans le Puy de Dôme',
    url: 'https://chronodome21.fr',
    siteName: 'Chronodôme 2.1',
    images: [
      {
        url: '/images/siteicon.png',
        width: 1200,
        height: 630,
        alt: 'Affiche de la Chronodôme 2.1',
      },
    ],
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
