import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ContentProtection } from "@/components/content-protection"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Product Designer Lead — Portfolio",
  description: "Transforming complex problems into elegant, user-centered solutions",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/mylogo.png", sizes: "32x32", type: "image/png" },
      { url: "/mylogo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/mylogo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/mylogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${inter.variable}`}
        style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui" }}
      >
        <ContentProtection />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
