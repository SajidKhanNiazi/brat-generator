import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brat Generator Different Colors – Custom Color Brat Text Generator',
    description: 'Create brat-style text in any color with our colorful brat text generator. Customize your brat aesthetic with neon, pink, blue, and more. Free and easy to use.',
    keywords: 'brat text generator, brat font generator, brat style text, brat aesthetic text, colorful brat text, custom color text generator, brat green text, pink brat text, neon brat style, brat text copy and paste',
}

export default function BratColorsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
