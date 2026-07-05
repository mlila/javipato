import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "JAVI PATO | Illustrative Blackwork Tattoo Artist",
    template: "%s | JAVI PATO",
  },
  description:
    "Illustrative blackwork tattoo artist based in Madrid. Dark botanical art, geometric voids, and permanent narrative ink.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID;
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-48.png" sizes="48x48" />
        <link rel="icon" href="/favicon-128.png" sizes="128x128" />
        <link rel="apple-touch-icon" href="/favicon-128.png" />
        {isProd && gaMeasurementId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} bg-background text-on-background selection:bg-primary selection:text-on-primary custom-scrollbar antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
