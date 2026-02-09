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
  title: 'Brat Generator - Create Charli XCX Brat Album Cover Style Images | Free',
  description: 'Create custom images inspired by Charli XCX\'s iconic "Brat" album cover. Free online Brat Generator with custom text, colors, and instant download. No login required.',
  keywords: ['brat generator', 'brat album cover maker', 'charli xcx brat generator', 'brat font generator', 'brat creator', 'brat text generator', 'brat meme generator'],
  authors: [{ name: 'Brat Generator' }],
  openGraph: {
    title: 'Brat Generator - Create Your Own Brat Album Cover',
    description: 'Create custom images inspired by Charli XCX\'s "Brat" album cover. Free, instant, no login required.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brat Generator - Create Your Own Brat Album Cover',
    description: 'Create custom images inspired by Charli XCX\'s "Brat" album cover. Free, instant, no login required.',
  },
  robots: {
    index: true,
    follow: true,
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
