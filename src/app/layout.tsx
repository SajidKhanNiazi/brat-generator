import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, Syne, Space_Mono } from 'next/font/google'
import './globals.css'


const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
})

const syneFont = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const monoFont = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://brat-generator.work'),
  alternates: {
    canonical: '/',
  },
  title: 'Brat Generator – Create Charli XCX Style Brat Text Online',
  description: 'Easily create iconic Brat album cover images with our free online tool. Customize text and colors with the classic Brat green. No signup required.',
  keywords: ['brat generator', 'brat text generator', 'brat font generator', 'brat image generator', 'brat meme generator', 'charli xcx brat', 'brat album cover', 'brat green'],
  authors: [{ name: 'Brat Generator' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    title: 'Brat Generator – Create Charli XCX Style Brat Text Online',
    description: 'Easily create iconic Brat album cover images with our free online tool. Customize text and colors with the classic Brat green.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brat Generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brat Generator – Create Charli XCX Style Brat Text Online',
    description: 'Easily create iconic Brat album cover images with our free online tool. Customize text and colors with the classic Brat green.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${syneFont.variable} ${monoFont.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for YouTube (used in SEO section video) */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        {/* Properly sized favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
      </head>
      <body className="font-body text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
