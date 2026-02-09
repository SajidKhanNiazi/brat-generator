'use client'

import { Container } from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { Sparkles, Palette, Zap, Download, Share2, Smartphone, Clock, Heart } from 'lucide-react'
import { Card } from '@/components/ui/Card'

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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Everything You Need to Know
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Create stunning Brat-style images in seconds with our free online generator
                    </p>
                </motion.div>

                {/* Icon Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {iconCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
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
                        </motion.div>
                    ))}
                </div>

                {/* How to Use Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <Card className="p-8 bg-gradient-to-br from-[#8ACE00]/10 to-emerald-500/10 border-[#8ACE00]/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#8ACE00] flex items-center justify-center">
                                <Clock className="w-6 h-6 text-slate-900" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white">
                                How to Use the Brat Generator
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                <h4 className="font-display font-semibold text-white mb-2">Download & Share</h4>
                                <p className="text-slate-400 text-sm">
                                    Click download to save your image. Share it on social media or use it however you like.
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Additional Content Sections */}
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                            Best Uses for a Brat Text Generator
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            This tool is versatile and perfect for many creative projects. Make memes that mimic the Brat album
                            aesthetic. Create custom Instagram story backgrounds or TikTok post images. Design unique Discord
                            profile banners or Twitter headers. You can even print them as stickers or posters.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            The Brat text style is minimalist and attention-grabbing. It works great for announcements, quotes,
                            or jokes. Brands and creators use this style to connect with Gen Z audiences and pop culture trends.
                        </p>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                            Completely Free and No Sign-Up Required
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            We believe tools like this should be accessible to everyone. That's why Brat Generator is 100% free
                            with no hidden costs or subscription fees. You don't need to create an account or provide any personal
                            information. Just visit the website, create your image, and download it instantly.
                        </p>
                    </motion.section>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Card className="p-8 bg-gradient-to-br from-[#8ACE00]/20 to-emerald-500/20 border-[#8ACE00]/30">
                        <Heart className="w-12 h-12 text-[#8ACE00] mx-auto mb-4" />
                        <h3 className="font-display text-2xl font-bold text-white mb-3">
                            Start Creating Your Brat Images Now
                        </h3>
                        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                            Join thousands of creators making bold, minimalist images. No skills required. No downloads.
                            Just pure creative freedom in your browser.
                        </p>
                        <a
                            href="#generator"
                            className="inline-block px-8 py-3 rounded-lg bg-[#8ACE00] text-slate-900 font-display font-semibold hover:bg-[#9de000] transition-colors"
                        >
                            Try It Now
                        </a>
                    </Card>
                </motion.div>
            </Container>
        </section>
    )
}
