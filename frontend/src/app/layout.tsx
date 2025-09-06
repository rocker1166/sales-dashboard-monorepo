import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { MuiThemeProvider } from "@/components/mui-theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dabang - Sales Dashboard",
  description: "Professional sales dashboard for business analytics",
  keywords: "sales, dashboard, analytics, business intelligence",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  )
}
