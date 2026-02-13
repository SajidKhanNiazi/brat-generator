'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { ChevronDown } from 'lucide-react'
import Script from 'next/script'

/* ─── FAQ Item ─── */
function FAQItem({
    q,
    a,
    open,
    toggle,
}: {
    q: string
    a: string
    open: boolean
    toggle: () => void
}) {
    return (
        <div className="border border-slate-700/50 rounded-xl overflow-hidden">
            <button
                onClick={toggle}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-slate-800/50 hover:bg-slate-800 transition-colors"
                aria-expanded={open}
            >
                <span className="font-display font-semibold text-white text-sm sm:text-base pr-4">
                    {q}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-5 py-4 text-slate-400 text-sm leading-relaxed bg-slate-900/40">
                    {a}
                </div>
            </div>
        </div>
    )
}

/* ─── FAQ Data ─── */
const faqs = [
    {
        q: 'Is this brat meme generator free?',
        a: 'Yes. This tool is completely free to use. No signup, no watermark, no hidden fees.',
    },
    {
        q: 'Does this tool create meme text for me?',
        a: 'No. You write the meme text yourself. The tool only formats it into brat style and generates a downloadable image.',
    },
    {
        q: 'What image size does it generate?',
        a: 'The tool generates 1080×1080px images, which is the recommended square format for Instagram feed posts.',
    },
    {
        q: 'Can I customize the colors?',
        a: 'Yes. You can choose from preset color styles or manually set custom background and text colors using hex codes or the color picker.',
    },
    {
        q: 'Can I use the memes commercially?',
        a: 'Yes. You write your own text, so the output is your original content. You can use it on social media, videos, or personal projects.',
    },
    {
        q: 'Does it work on mobile?',
        a: 'Yes. The tool is fully mobile-responsive with large touch targets, clean layout, and instant download support.',
    },
    {
        q: 'Is any AI used to generate the memes?',
        a: 'No. This is a pure text formatting and image generation tool. No AI writing, no external databases, no content copying.',
    },
]

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
        },
    })),
}

export function BratMemeFAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    return (
        <section className="py-16 lg:py-20 bg-slate-900/30">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center italic">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                q={faq.q}
                                a={faq.a}
                                open={openFAQ === i}
                                toggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
