import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brat Generator Tool - Create Your Own Brat Album Cover | Free Online',
  description: 'Use our free Brat Generator to create custom images inspired by Charli XCX\'s "Brat" album cover. Enter text, customize colors, download instantly. No login required.',
  keywords: ['brat generator', 'brat album cover maker', 'charli xcx brat', 'brat font generator', 'brat creator free'],
  openGraph: {
    title: 'Brat Generator - Create Your Own Brat Album Cover',
    description: 'Create custom Brat album cover style images. Free, instant download, no login required.',
    type: 'website',
  },
}

export default function BratGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
