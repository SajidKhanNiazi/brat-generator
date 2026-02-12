import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brat Lyric Generator – Create Brat Style Lyrics Instantly',
    description:
        'Generate brat-style lyrics for songs, rap, and creative writing. Use our free auto brat lyrics generator with ready templates.',
    keywords: [
        'brat lyrics generator',
        'brat lyrics maker',
        'brat lyrics generator video',
        'brat lyrics charli xcx',
        'auto brat lyrics generator',
        'brat lyrics template',
    ],
    alternates: {
        canonical: 'https://brat-generator.work/brat-lyric-generator',
    },
    openGraph: {
        title: 'Brat Lyric Generator – Create Brat Style Lyrics Instantly',
        description:
            'Generate brat-style lyrics for songs, rap, and creative writing. Use our free auto brat lyrics generator with ready templates.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Brat Generator',
        url: 'https://brat-generator.work/brat-lyric-generator',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brat Lyric Generator – Create Brat Style Lyrics Instantly',
        description:
            'Generate brat-style lyrics for songs, rap, and creative writing. Use our free auto brat lyrics generator with ready templates.',
    },
}

export default function BratLyricGeneratorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
