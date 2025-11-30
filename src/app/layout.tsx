import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import { Analytics } from '@/components/layout/ga/Analytics'

export const metadata: Metadata = {
  title: 'Ad tech',
  description: 'Ad tech',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/16x16.png"
      />
      <link rel="manifest" href="manifest.json" />
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {children}
      </body>
      <Analytics />
    </html>
  )
}
