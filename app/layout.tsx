import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Marco Castro Trinidad - Data Scientist & Developer",
  description: "Portfolio profesional de Juan Marco Castro Trinidad. Especializado en Data Science, Machine Learning, análisis de datos y desarrollo de soluciones inteligentes.",
  generator: 'v0.dev',
  keywords: ["Data Science", "Machine Learning", "Python", "R", "SQL", "Portfolio", "Juan Marco Castro"],
  authors: [{ name: "Juan Marco Castro Trinidad" }],
  openGraph: {
    title: "Juan Marco Castro Trinidad - Data Scientist",
    description: "Portfolio profesional - Data Science & Machine Learning",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
