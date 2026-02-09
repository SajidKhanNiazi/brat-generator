'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import {
    Image,
    Music,
    Type,
    Palette,
    Download,
    Zap,
    Heart,
    Sparkles,
    Share2
} from 'lucide-react'

const contentSections = [
    {
        icon: Image,
        iconColor: 'text-[#8ACE00]',
        iconBg: 'bg-[#8ACE00]/10',
        borderColor: 'border-[#8ACE00]/20',
        title: 'What Is a Brat Generator?',
        content: 'A Brat Generator is an album-inspired image generator that creates text-based visuals. It uses lowercase typography and bold backgrounds to match the Brat aesthetic. The most popular style includes the famous Brat Green background. People use this tool for memes, album-style covers, and social media posts. It is designed to be simple, fast, and fun.'
    },
    {
        icon: Music,
        iconColor: 'text-fuchsia-400',
        iconBg: 'bg-fuchsia-500/10',
        borderColor: 'border-fuchsia-500/20',
        title: 'Inspired by Charli XCX Brat Aesthetic',
        content: 'The Brat Generator takes inspiration from Charli XCX\'s Brat era, which became a strong cultural trend online. The design focuses on minimalism, bold colors, and raw expression. This visual identity is instantly recognizable and widely loved by fans. The simple layout and clean look make the content stand out. That is why the Brat style works so well on the internet.'
    },
    {
        icon: Type,
        iconColor: 'text-lime-400',
        iconBg: 'bg-lime-500/10',
        borderColor: 'border-lime-500/20',
        title: 'Create Brat Text with Minimalist Typography',
        content: 'This Brat Text Generator is built around clean and lowercase typography. The font style is simple but powerful, making every word feel bold. Lowercase text is a key part of the Brat album cover design. The layout keeps distractions away and focuses only on your message. The result is strong visual output that looks modern and stylish.'
    },
    {
        icon: Palette,
        iconColor: 'text-purple-400',
        iconBg: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20',
        title: 'Customize Colors with Brat Generator',
        content: 'The Brat Generator allows you to customize colors easily. You can use the classic Brat Green (#8ACE00) or switch to white, black, pink, or other custom colors. A color picker helps you choose the exact shade you want. This gives you freedom while still keeping the Brat look. Every design stays clean and eye-catching.'
    },
    {
        icon: Download,
        iconColor: 'text-amber-400',
        iconBg: 'bg-amber-500/10',
        borderColor: 'border-amber-500/20',
        title: 'Download or Share Your Brat Images',
        content: 'Once your image is ready, you can download it in high quality. The images are clean and do not include any watermark. You can also share them directly on social media platforms like Instagram, Twitter, TikTok, and Facebook. This makes it perfect for fast posting. Everything is ready with one click.'
    },
    {
        icon: Zap,
        iconColor: 'text-cyan-400',
        iconBg: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/20',
        title: 'Free, Fast, and No Sign-Up Required',
        content: 'Brat Generator is completely free to use. You do not need to create an account or buy a subscription. You can generate unlimited images without any limits. The tool works directly in your browser and loads fast. It saves time and keeps everything simple.'
    },
    {
        icon: Heart,
        iconColor: 'text-rose-400',
        iconBg: 'bg-rose-500/10',
        borderColor: 'border-rose-500/20',
        title: 'Why Brat Generator Is Perfect for Memes & Social Media',
        content: 'The Brat Generator is ideal for creating memes and viral content. People use it for album covers, profile banners, captions, and reaction images. The bold style helps posts stand out on social media feeds. The minimalist design makes messages easy to read. That is why creators love using it daily.'
    }
]

const steps = [
    {
        number: 1,
        text: 'Enter your text into the input field',
        icon: Type
    },
    {
        number: 2,
        text: 'Choose your background and text colors',
        icon: Palette
    },
    {
        number: 3,
        text: 'Preview your Brat-style image in real time',
        icon: Sparkles
    },
    {
        number: 4,
        text: 'Download or share your image instantly',
        icon: Share2
    }
]

export function SEOTextSection() {
    return (
        <section id="content" className="py-16 lg:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
            <Container>
                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
                    {contentSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-6 hover:scale-[1.02] transition-transform">
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${section.iconBg} border ${section.borderColor} flex items-center justify-center mb-4`}>
                                    <section.icon className={`w-6 h-6 ${section.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h2 className="font-display text-xl font-bold text-white mb-3">
                                    {section.title}
                                </h2>

                                {/* Content */}
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {section.content}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* How to Use Section - Special Card */}
                <motion.div
                    className="max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8" id="how-it-works">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/30 mb-4">
                                <Sparkles className="w-4 h-4 text-[#8ACE00]" />
                                <span className="text-sm font-medium text-[#8ACE00]">Quick Guide</span>
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                                How to Use This Brat Generator
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {steps.map((step) => (
                                <div key={step.number} className="flex items-start gap-4">
                                    {/* Step Number Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8ACE00] to-lime-500 flex items-center justify-center mb-2 shadow-lg shadow-[#8ACE00]/20">
                                            <span className="font-display font-bold text-white text-lg">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 pt-2">
                                        <p className="text-slate-300 font-medium leading-relaxed">
                                            {step.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-slate-500 text-sm">
                                The process is simple and beginner-friendly
                            </p>
                        </div>
                    </Card>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 bg-gradient-to-br from-[#8ACE00]/5 to-fuchsia-500/5 border-[#8ACE00]/20">
                        <Sparkles className="w-12 h-12 text-[#8ACE00] mx-auto mb-4" />
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                            Start Creating with Brat Generator
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            If you want to create bold and clean visuals quickly, Brat Generator is the right tool.
                            Just type your text, customize the look, and share your creation. No skills, no setup,
                            and no limits. Try the Brat Generator now and create your own Brat-style images in seconds.
                        </p>
                    </Card>
                </motion.div>
            </Container>
        </section>
    )
}
