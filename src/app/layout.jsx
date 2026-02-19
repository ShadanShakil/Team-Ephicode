import { Inter, Syne } from "next/font/google"
import "./globals.css"
import BackToTop from "@/components/back-to-top"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

export const metadata = {
  title: "Ephicode | Global Digital Tech & Creative Agency",
  description:
    "Ephicode provides high-performance Web/App development, Video Editing, and Performance Marketing for global brands. Built for speed, engineered for growth.",
  icons: {
    icon: "/logo.svg",
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
  openGraph: {
    title: "Ephicode | Global Digital Tech & Creative Agency",
    description: "Ephicode provides high-performance Web/App development, Video Editing, and Performance Marketing for global brands. Built for speed, engineered for growth.",
    url: "https://team-ephicode.vercel.app",
    siteName: "Ephicode",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#121212",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`
            #loading-screen { display: none !important; }
            #content-wrapper { opacity: 1 !important; transform: none !important; }
          `}</style>
        </noscript>
      </head>
      <body className={`${syne.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  )
}
