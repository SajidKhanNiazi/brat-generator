import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brat Generator Different Colors – 9 Backgrounds, Mirror & Flip | Free Download',
    description: 'Make brat text images in 9 colors — green, pink, cyan, black & more. Get 3 variants: normal, mirror, flip. Free download, no signup. Brat aesthetic generator.',
    keywords: 'brat generator different colors, brat aesthetic image maker, free download, brat generator, brat color generator',
}

export default function BratColorsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebApplication",
                "name": "Brat Generator Different Colors",
                "description": "Free brat aesthetic text image generator with 9 background colors and 3 download variants",
                "url": "https://brat-generator.work/brat-generator-different-colors",
                "applicationCategory": "DesignApplication",
                "operatingSystem": "Any"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What colors are available in the brat generator?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nine colors are available including the original brat green (#8acf00), deep pink, neon cyan, pure black, and more. All colors match the Charli XCX brat aesthetic."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the mirror and flip variants?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "After generating, you get 3 image versions — normal, horizontally mirrored, and upside down. Swipe between them and download any or all three free."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the brat color generator free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, completely free — no signup, no watermark, no limit. Just type, pick a color, and download your brat image instantly."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    )
}
