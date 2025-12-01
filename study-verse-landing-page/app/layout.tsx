import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "Stellar Space",
  description: "Your virtual study space to focus, collaborate, and grow.",
  generator: "v0.app",
  icons: {
    icon: "/stellar-space-logo.png",
    apple: "/stellar-space-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${outfit.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
