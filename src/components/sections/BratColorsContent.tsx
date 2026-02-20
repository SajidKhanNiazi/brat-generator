'use client'

import { Container } from '@/components/ui/Container'
import { Palette, Zap, CheckCircle, Smartphone, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import Image from 'next/image'

export function BratColorsContent() {
    const featureCards = [
        {
            icon: Palette,
            title: "Infinite Color Choices",
            description: "Use our custom hex code picker to find your perfect shade. From neon brat style to subtle pastels, the possibilities are endless.",
            color: "from-[#8ACE00] to-emerald-500"
        },
        {
            icon: Zap,
            title: "Brat Font Generator",
            description: "Our tool perfectly replicates the iconic lo-fi, minimalist lowercase typography of the original album cover.",
            color: "from-fuchsia-500 to-pink-500"
        },
        {
            icon: CheckCircle,
            title: "No Watermarks",
            description: "Every image you create is 100% yours. We never add watermarks, so your designs stay clean and professional.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: Smartphone,
            title: "Mobile Optimized",
            description: "Create and download your colorful brat text graphics on the go. Our generator works perfectly on any screen size.",
            color: "from-amber-500 to-orange-500"
        }
    ]

    return (
        <section id="content" className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900">
            <Container>
                {/* Introduction Section */}
                <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
                        Brat Generator: Express Yourself in Every Color
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                        <p className="mb-6">
                            Welcome to the ultimate destination for the <strong>brat text generator</strong> with a twist! While the iconic neon green is the heart of the brat aesthetic, sometimes you want to express your mood in a different shade. Whether you&apos;re feeling a vibrant pink, a moody blue, or a stark white, our <strong>brat style text</strong> generator has you covered.
                        </p>
                        <p>
                            The <strong>Brat Generator Different Colors</strong> is a specialized version of our popular tool that focuses on the versatility of the brat aesthetic. It allows you to create high-quality, album-inspired text graphics using any color palette you can imagine. From the classic <strong>brat green text</strong> to modern <strong>pink brat text</strong>, this tool makes it easy to customize your digital presence.
                        </p>
                    </div>
                </div>

                {/* How to Use Section with Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                            <Image
                                src="/images/brat-colors-grid.svg"
                                alt="Grid of colorful brat text squares in various vibrant colors"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <p className="text-center text-sm text-slate-500 mt-4 italic">
                            Experiment with unlimited color combinations to find your perfect brat vibe.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 mb-6">
                            <Sparkles className="w-4 h-4 text-fuchsia-400" />
                            <span className="text-sm font-medium text-fuchsia-400">Easy 4-Step Process</span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                            How to Use the Colored Brat Generator
                        </h3>
                        <div className="space-y-6">
                            {[
                                { step: '1', title: 'Type Your Message', text: 'Enter any text into the generator. It works for names, lyrics, or even long sentences.' },
                                { step: '2', title: 'Pick a Color Preset', text: 'Choose from our curated list of brat-inspired colors like Pink, Blue, Purple, or White.' },
                                { step: '3', title: 'Go Custom', text: 'Use the hex code picker to find a specific shade. From neon aesthetics to pastel vibes, the choice is yours.' },
                                { step: '4', title: 'Download & Share', text: 'Once you&apos;re happy with the result, save your high-resolution image instantly.' },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8ACE00]/20 border border-[#8ACE00]/40 flex items-center justify-center text-[#8ACE00] font-bold text-sm">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Popular Color Combinations Section */}
                <div className="mb-24">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
                        Popular Color Combinations
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Pink Brat', bg: 'bg-[#FF69B4]', text: 'Classic Y2K vibe' },
                            { name: 'Sky Blue', bg: 'bg-[#00BFFF]', text: 'Modern minimalist' },
                            { name: 'Lavender', bg: 'bg-[#9B59B6]', text: 'Dreamy aesthetic' },
                            { name: 'Dark Mode', bg: 'bg-slate-950', text: 'Sleek and edgy' },
                        ].map((color) => (
                            <div key={color.name} className="flex flex-col items-center">
                                <div className={`w-full aspect-square rounded-xl ${color.bg} border border-white/10 mb-4 transition-transform hover:rotate-3`}></div>
                                <span className="text-white font-medium mb-1">{color.name}</span>
                                <span className="text-xs text-slate-500">{color.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Use Different Colors? */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                            Beyond the Green: Why Different Colors Matter
                        </h3>
                        <div className="prose prose-invert max-w-none text-slate-400">
                            <p className="mb-4">
                                While the iconic lime green defines the <strong>brat aesthetic</strong>, the beauty of the movement is its versatility. Different colors allow you to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Match your social media feed or aesthetic theme.</li>
                                <li>Express different moods—from aggressive neon to soft pastels.</li>
                                <li>Create distinct branding for meme pages or personal projects.</li>
                                <li>Stand out in a sea of green with unique <strong>colorful brat text</strong>.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                            <Image
                                src="/images/brat-colors-hero.svg"
                                alt="High resolution pink brat style text graphic"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="max-w-4xl mx-auto mb-24 animate-fade-in-up">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
                        Powerful Features for Creative Expression
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featureCards.map((card) => (
                            <Card key={card.title} className="p-6 bg-slate-800/40 border-slate-700/50">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                                    <card.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-bold mb-2">{card.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-400">Everything you need to know about colored brat text graphics.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Can I use any color for my brat text?",
                                a: "Yes! Our tool features a full custom color picker, allowing you to create any shade from neon brat style to subtle pastels."
                            },
                            {
                                q: "Is the font the same as the original album?",
                                a: "We use a font that captures the exact lo-fi, minimalist spirit of the iconic album cover, ensuring your graphics look authentic."
                            },
                            {
                                q: "What size are the generated images?",
                                a: "All images are generated at 1080x1080 pixels, making them perfect for Instagram, TikTok, and Twitter posts."
                            },
                            {
                                q: "Is this tool free to use?",
                                a: "Absolutely. You can generate and download as many different colored brat images as you like for free."
                            }
                        ].map((faq, idx) => (
                            <Card key={idx} className="p-6 bg-slate-800/30 border-slate-700/30">
                                <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Conclusion */}
                <div className="text-center max-w-2xl mx-auto py-12 border-t border-slate-800">
                    <h3 className="font-display text-2xl font-bold text-white mb-4">Start Creating Your Brat Aesthetic</h3>
                    <p className="text-slate-400 mb-8">
                        Ready to start creating? Head back to our main <Link href="/" className="text-[#8ACE00] hover:underline transition-all">Brat Generator</Link> if you want the classic look, or experiment with our <strong>custom color text generator</strong> above.
                    </p>
                </div>
            </Container>
        </section>
    )
}
