import Head from "next/head"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "cv.next",
  description: "CV of Krystian Postek",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
