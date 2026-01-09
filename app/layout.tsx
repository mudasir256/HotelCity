import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotel City Kräme am Römer - Self Check In | Frankfurt',
  description: 'Centrally located hotel in Frankfurt between historic Old Town and modern financial district. Free WiFi, pet-friendly, family rooms, and self check-in available.',
  keywords: 'hotel Frankfurt, city hotel, Römer, Old Town Frankfurt, pet friendly hotel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

