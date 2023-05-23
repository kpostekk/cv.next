import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "cv.next",
  description: "Personal site with CV",
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
      <Analytics />
    </html>
  )
}
