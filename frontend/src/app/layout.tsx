import type React from "react"
import type { Metadata } from "next"
// import { Inter } from "next/font/google" // Disabled to prevent network errors during build
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { theme } from "@/theme"
import "./globals.css"

// const inter = Inter({ subsets: ["latin"] }) // Disabled to prevent network errors during build

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
      <body className="font-sans"> {/* Use system fonts instead of Google Fonts */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
