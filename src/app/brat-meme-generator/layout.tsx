import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brat Meme Generator – Create Viral Brat Style Memes Online',
    description:
        'Create viral brat style memes instantly. Customize text, colors, and download high-quality 1080×1080 images perfect for Instagram. Free online brat meme generator.',
    openGraph: {
        title: 'Brat Meme Generator – Create Viral Brat Style Memes Online',
        description:
            'Create viral brat style memes instantly. Customize text, colors, and download high-quality 1080×1080 images perfect for Instagram.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brat Meme Generator – Create Viral Brat Style Memes Online',
        description:
            'Create viral brat style memes instantly. Customize text, colors, and download high-quality 1080×1080 images perfect for Instagram.',
    },
    alternates: {
        canonical: 'https://brat-generator.work/brat-meme-generator',
    },
}

export default function BratMemeGeneratorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
