import type { Metadata } from 'next'
import { Header } from '@/components/layout/header/Header'
import '../../styles/globals.css'
import Footer from '@/components/layout/footer/Footer'

export const metadata: Metadata = {
  title: 'About Andrei',
  description: 'About Andrei Lopatin, Senior Frontend Developer, Engineer',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function AboutLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
