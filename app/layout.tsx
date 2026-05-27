import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  variable: '--font-source-serif',
  display: 'swap',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Yahya Ahmed — iOS Developer & Automation Builder',
  description: 'I build fast, thoughtful, and user-focused products — from iOS apps to business automations.',
  keywords: ['iOS Developer', 'Swift', 'SwiftUI', 'Automation', 'App Development', 'Freelance'],
  authors: [{ name: 'Yahya Ahmed' }],
  creator: 'Yahya Ahmed',
  openGraph: {
    title: 'Yahya Ahmed — iOS Developer & Automation Builder',
    description: 'I build fast, thoughtful, and user-focused products — from iOS apps to business automations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yahya Ahmed — iOS Developer & Automation Builder',
    description: 'I build fast, thoughtful, and user-focused products — from iOS apps to business automations.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f2eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
