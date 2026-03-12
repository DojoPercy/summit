import type { Metadata, Viewport } from "next";
import { Libre_Franklin } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hotelier Africa Leadership Summit & Awards 2026",
    template: "%s | Hotelier Africa Summit 2026",
  },
  description:
    "The 2nd Hotelier Africa Leadership Summit & Awards 2026 — Africa's premier continental platform uniting hospitality leaders, investors, and innovators to shape the future of Africa's hospitality industry.",
  keywords: [
    "Hotelier Africa",
    "Africa hospitality summit",
    "hospitality leadership Africa",
    "hotel awards Africa 2026",
    "SBF Africa",
    "African hospitality industry",
    "hotel GM awards",
    "Africa hotel investment",
    "hospitality conference Accra",
    "Ghana hospitality event",
  ],
  authors: [{ name: "SBF Africa", url: "https://sbfafrica.com" }],
  creator: "SBF Africa",
  publisher: "Hotelier Africa",
  metadataBase: new URL("https://summit.hotelierafricamag.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Hotelier Africa Leadership Summit & Awards 2026",
    description:
      "Africa's premier continental hospitality platform — uniting leaders, celebrating excellence, and driving strategic dialogue across the continent's fastest-growing industry.",
    url: "https://summit.hotelierafricamag.com",
    siteName: "Hotelier Africa Summit",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotelier Africa Leadership Summit & Awards 2026",
    description:
      "The 2nd Hotelier Africa Leadership Summit & Awards — Africa's premier hospitality leadership platform, 2026.",
    creator: "@HotelierAfrica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f0d0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${franklin.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
