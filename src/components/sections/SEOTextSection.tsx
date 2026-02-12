'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Sparkles, Palette, Zap, Download, Share2, Smartphone, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import Image from 'next/image'

/* ── YouTube Facade Component ── */
function YouTubeFacade({ videoId }: { videoId: string }) {
    const [loaded, setLoaded] = useState(false)
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

    if (loaded) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Brat Generator Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
            />
        )
    }

    return (
        <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group bg-slate-900"
            aria-label="Play Brat Generator demo video"
        >
            {/* Thumbnail */}
            <Image
                src={thumbnailUrl}
                alt="Brat Generator Demo Video Thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
                width={480}
                height={360}
                unoptimized
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-500 transition-colors flex items-center justify-center shadow-2xl">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </button>
    )
}

export function SEOTextSection() {
    const iconCards = [
        {
            icon: Sparkles,
            title: "What Is a Brat Generator?",
            description: "A Brat Generator is an album-inspired image generator that creates text-based visuals. It uses lowercase typography and bold backgrounds to match the Brat aesthetic. The most popular style includes the famous Brat Green background. People use this tool for memes, album-style covers, and social media posts.",
            color: "from-[#8ACE00] to-emerald-500"
        },
        {
            icon: Palette,
            title: "Why Use a Brat Image Generator?",
            description: "A Brat Image Generator helps you create eye-catching content without needing design software. The tool is fast, free, and works right in your browser. You can create custom text images in seconds and download them instantly for any platform.",
            color: "from-fuchsia-500 to-pink-500"
        },
        {
            icon: Zap,
            title: "Fast and Easy to Use",
            description: "No account needed. Just type your text, pick a color, and download. The generator works entirely in your browser for maximum speed and privacy. Your text never leaves your device, ensuring complete data security.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: Share2,
            title: "Perfect for Social Media",
            description: "Brat-style images are highly shareable on Instagram, Twitter, TikTok, and more. The bold, simple design captures attention quickly. Create album cover memes, status updates, or profile pictures that stand out in feeds.",
            color: "from-amber-500 to-orange-500"
        },
        {
            icon: Download,
            title: "Download Your Brat Images",
            description: "Every image you create can be downloaded instantly in PNG format. High-quality output ready for printing or sharing online. No watermarks, no restrictions, completely free to use for personal projects.",
            color: "from-violet-500 to-purple-500"
        },
        {
            icon: Smartphone,
            title: "Mobile-Friendly Design",
            description: "The Brat Generator works perfectly on phones, tablets, and desktops. Responsive design ensures a smooth experience on any screen size. Create and download images on the go, anytime, anywhere.",
            color: "from-rose-500 to-red-500"
        }
    ]

    return (
        <section id="content" className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900">
            <Container>
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Everything You Need to Know
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Create stunning Brat-style images in seconds with our free online generator
                    </p>
                </div>

                {/* Icon Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {iconCards.map((card, index) => (
                        <Card
                            key={card.title}
                            delay={index * 0.1}
                            className="h-full hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                                <card.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-white mb-3">
                                {card.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {card.description}
                            </p>
                        </Card>
                    ))}
                </div>

                {/* How to Use Section */}
                <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <Card className="p-8 bg-gradient-to-br from-[#8ACE00]/10 to-emerald-500/10 border-[#8ACE00]/20" hover={false}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#8ACE00] flex items-center justify-center">
                                <Clock className="w-6 h-6 text-slate-900" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white">
                                How to Use the Brat Generator
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="text-center">
                                <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-slate-900 font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                                    1
                                </div>
                                <h4 className="font-display font-semibold text-white mb-2">Type Your Text</h4>
                                <p className="text-slate-400 text-sm">
                                    Enter any text you want. The tool automatically converts it to lowercase for the authentic Brat look.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-slate-900 font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                                    2
                                </div>
                                <h4 className="font-display font-semibold text-white mb-2">Choose Your Color</h4>
                                <p className="text-slate-400 text-sm">
                                    Pick from preset colors or use the color picker. Brat Green is the classic choice, but any color works.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-slate-900 font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                                    3
                                </div>
                                <h4 className="font-display font-semibold text-white mb-2">Download &amp; Share</h4>
                                <p className="text-slate-400 text-sm">
                                    Click download to save your image. Share it on social media or use it however you like.
                                </p>
                            </div>
                        </div>

                        {/* YouTube Facade — loads iframe only on click */}
                        <div className="max-w-3xl mx-auto">
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/10">
                                <YouTubeFacade videoId="-dPbs5lounM" />
                            </div>
                            <p className="text-center text-xs text-slate-500 mt-4 italic">
                                Watch the quick video demo above to see how it works!
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Additional Content Sections */}
                <div className="max-w-4xl mx-auto space-y-16">
                    <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                            Best Uses for a Brat Text Generator
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                The Brat aesthetic, characterized by its lo-fi, minimalist, and unapologetically bold look, has taken the internet by storm. Our Brat Generator allows you to tap into this cultural phenomenon effortlessly. This tool is versatile and perfect for many creative projects, from casual memes to professional-looking social media assets.
                            </p>
                            <p>
                                <strong>Social Media Content:</strong> Make memes that mimic the iconic Brat album aesthetic. Create custom Instagram story backgrounds, TikTok post images, or profile pictures that stand out in crowded feeds. The high contrast of the classic Brat Green and Arial-style font ensures your message is seen.
                            </p>
                            <p>
                                <strong>Digital Branding:</strong> Design unique Discord profile banners, Twitter headers, or YouTube thumbnails. Brands and creators use this style to connect with Gen Z audiences and pop culture trends, signaling they are current and in-tune with the latest aesthetics.
                            </p>
                            <p>
                                <strong>Physical Merch &amp; Print:</strong> Because our tool generates high-quality 1080x1080px PNG images, they are perfect for custom stickers, posters, or even T-shirt designs. The minimalist design translates well to physical print, making it a favorite for DIY fans.
                            </p>
                        </div>
                    </section>

                    <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                            Why Is the Brat Aesthetic So Popular?
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                Inspired by Charli XCX&apos;s album cover, the Brat style represents a shift away from overly polished, &quot;perfect&quot; social media imagery. It embraces a &quot;messy&quot; yet intentional look that feels authentic and raw. The lowercase typography and slightly blurred effect are key elements that our generator replicates perfectly.
                            </p>
                            <p>
                                This look is often associated with the &quot;hyperpop&quot; scene and club culture, but it has transcended those niches to become a universal symbol of 2024 internet culture. Using a Brat style generator isn&apos;t just about making an image; it&apos;s about participating in a global conversation.
                            </p>
                        </div>
                    </section>

                    <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                            Completely Free and No Sign-Up Required
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                We believe tools like this should be accessible to everyone. That&apos;s why Brat Generator is 100% free with no hidden costs or subscription fees. You don&apos;t need to create an account or provide any personal information. Your privacy is a priority—that&apos;s why all image processing happens directly in your browser.
                            </p>
                            <p>
                                <strong>Fast &amp; Lightweight:</strong> Our generator is optimized for speed. There are no heavy frameworks or slow loading times. Whether you are on a desktop or a mobile device with a slow connection, you can create and download your images in seconds.
                            </p>
                            <p>
                                <strong>No Watermarks:</strong> Unlike other online generators, we don&apos;t put watermarks on your creations. The images you generate are yours to keep, share, and use however you see fit.
                            </p>
                        </div>
                    </section>

                </div>
            </Container>
        </section>
    )
}
