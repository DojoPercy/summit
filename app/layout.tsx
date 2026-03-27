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
    default: "Ghana Green Mining & Critical Minerals Awards 2026",
    template: "%s | GGMCA 2026",
  },
  description:
    "Ghana's premier national recognition platform celebrating excellence, sustainability, innovation, and leadership across Ghana's mining, minerals, timber, and natural resource industries. 24th April 2026 · Accra Marriott Hotel.",
  keywords: [
    "Ghana Green Mining Awards",
    "Critical Minerals Awards Ghana",
    "responsible mining Ghana",
    "sustainable mining Africa",
    "SBF Africa",
    "Ghana natural resources",
    "mining awards 2026",
    "ESG mining Ghana",
    "Ghana lithium bauxite gold",
    "green economy Ghana",
  ],
  authors: [{ name: "SBF Africa" }],
  creator: "SBF Africa",
  publisher: "Strategic Brand Focus Africa Limited",
  metadataBase: new URL("https://ggmca.sbfafrica.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Ghana Green Mining & Critical Minerals Awards 2026",
    description:
      "Recognizing Responsible Mining • Sustainable Industry • Green Economy Leadership — 24th April 2026, Accra Marriott Hotel.",
    url: "https://ggmca.sbfafrica.com",
    siteName: "Ghana Green Mining & Critical Minerals Awards",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghana Green Mining & Critical Minerals Awards 2026",
    description:
      "Ghana's premier mining and critical minerals recognition platform. 24th April 2026 · Accra Marriott Hotel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
          defaultTheme="light"
          forcedTheme="light"
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
