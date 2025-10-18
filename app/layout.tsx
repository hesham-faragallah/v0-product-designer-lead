import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
