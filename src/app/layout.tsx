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
  title: 'Brat Generator – Create Brat Text & Images Online Free',
  description: 'Create bold brat text and images online with Brat Generator. Inspired by Charli XCX Brat album. Free, fast, no signup required.',
  keywords: ['brat generator', 'brat text generator', 'brat font generator', 'brat image generator', 'brat meme generator', 'charli xcx brat', 'brat album cover', 'brat green'],
  authors: [{ name: 'Brat Generator' }],
  openGraph: {
    title: 'Brat Generator – Create Brat Text & Images Online Free',
    description: 'Create bold brat text and images online with Brat Generator. Inspired by Charli XCX Brat album. Free, fast, no signup required.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brat Generator – Create Brat Text & Images Online Free',
    description: 'Create bold brat text and images online with Brat Generator. Inspired by Charli XCX Brat album. Free, fast, no signup required.',
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
