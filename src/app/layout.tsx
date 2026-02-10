import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'


const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://brat-generator.work'),
  title: 'Brat Generator – Create Charli XCX Style Brat Text Online',
  description: 'Easily create iconic Brat album cover images with our free online tool. Customize text and colors with the classic Brat green. No signup required.',
  keywords: ['brat generator', 'brat text generator', 'brat font generator', 'brat image generator', 'brat meme generator', 'charli xcx brat', 'brat album cover', 'brat green'],
  authors: [{ name: 'Brat Generator' }],
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
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
