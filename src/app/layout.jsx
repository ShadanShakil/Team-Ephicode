import { Inter, Syne } from "next/font/google"
import "./globals.css"

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
  title: "Ephicode - Top Mobile App Development Agency",
  description:
    "Ephicode crafts award-winning custom digital products driven by strategy, design and technology",
}

export const viewport = {
  themeColor: "#121212",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
