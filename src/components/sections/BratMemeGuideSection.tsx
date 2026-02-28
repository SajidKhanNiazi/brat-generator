'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import {
    Instagram,
    Layers,
    Zap,
    Palette,
    Share2,
    Layout,
    Smile,
    Target,
    CheckCircle2,
    Play
} from 'lucide-react'

export function BratMemeGuideSection() {
    return (
        <section className="py-16 lg:py-24 bg-slate-900/50">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Hero area of the guide */}
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            How to Make a Brat Image for Instagram
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                            Creating the perfect brat image instagram post is not just about adding text on a photo.
                            It is about using the right size, colors, and mood that match the brat aesthetic.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* Section 1: Introduction */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                                    <Target className="w-6 h-6 text-[#8ACE00]" />
                                    Unleash Your Bold Vibe
                                </h3>
                                <div className="space-y-4 text-slate-400 leading-relaxed">
                                    <p>
                                        The Brat Image Generator helps you unleash a bold, sassy, and confident vibe.
                                        Instead of making ordinary edits, you use a Brat filter that makes images sharp, full of attitude, and always fearless.
                                    </p>
                                    <p>
                                        These brat edits turn simple pictures into eye-catching aesthetic edits that shine with confidence.
                                        When you use the right clicks, the tool transforms your content into something impossible to ignore.
                                    </p>
                                </div>
                            </div>
                            <Card className="p-1 bg-gradient-to-br from-[#8ACE00]/20 to-emerald-500/20" hover={false}>
                                <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden border border-white/10 p-8">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-[#8ACE00] rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                                            <Smile className="w-12 h-12 text-slate-900" />
                                        </div>
                                        <p className="font-display text-xl font-bold text-white mb-2">brat summer energy</p>
                                        <p className="text-slate-500 text-sm">#8ACE00 • lowercase • bold</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Section 2: Why it's popular */}
                        <div className="bg-slate-800/30 rounded-3xl p-8 md:p-12 border border-slate-700/50">
                            <div className="max-w-3xl mx-auto space-y-8">
                                <div className="text-center">
                                    <h3 className="font-display text-2xl font-bold text-white mb-4">Why Everyone Is Obsessed</h3>
                                    <p className="text-slate-400">The brat vibe is growing like wildfire. It is not just a filter, it is a lifestyle.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        { icon: Instagram, label: "Viral Stories", desc: "Blow up on Instagram feeds" },
                                        { icon: Share2, label: "TikTok Trends", desc: "Perfect for video overlays" },
                                        { icon: Zap, label: "Real Energy", desc: "Feels authentic and raw" }
                                    ].map((item, i) => (
                                        <div key={i} className="text-center space-y-3">
                                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mx-auto text-[#8ACE00]">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-white text-sm">{item.label}</h4>
                                            <p className="text-slate-500 text-xs">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Features & Usage */}
                        <div className="space-y-12">
                            <h3 className="font-display text-2xl font-bold text-white text-center">Mastering the Generator</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Card className="p-6 space-y-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#8ACE00]/10 flex items-center justify-center text-[#8ACE00]">
                                        <Palette className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white">Brat Colors</h4>
                                    <p className="text-slate-400 text-sm">Use Brat Green (#8ACE00), Hot Pink (#FF69B4), or sleek Black (#000000) for maximum engagement.</p>
                                </Card>
                                <Card className="p-6 space-y-4">
                                    <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500">
                                        <Layout className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white">Perfect Format</h4>
                                    <p className="text-slate-400 text-sm">For Instagram, use 1080×1080 square format. This keeps your layout clean and sharp on any device.</p>
                                </Card>
                                <Card className="p-6 space-y-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white">Carousel Strategy</h4>
                                    <p className="text-slate-400 text-sm">Create a 3-card carousel: Normal + Mirror + Flip. Align text differently on each to create motion and flow.</p>
                                </Card>
                            </div>
                        </div>

                        {/* Section 4: How to Use Steps */}
                        <div className="space-y-10">
                            <div className="text-center">
                                <h3 className="font-display text-2xl font-bold text-white mb-4">How to Generate Yours</h3>
                                <p className="text-slate-400">Simple steps to create content impossible to ignore.</p>
                            </div>
                            <div className="max-w-2xl mx-auto space-y-6">
                                {[
                                    { step: 1, title: "Upload or Select", desc: "Start with your photo or use a blank brat-core template." },
                                    { step: 2, title: "Add Brat Elements", desc: "Apply bold brat fonts and signature filters for that sassy look." },
                                    { step: 3, title: "Customize", desc: "Adjust colors, alignment, and size to match your personal vibe." },
                                    { step: 4, title: "Download & Share", desc: "Save as PNG and share directly to TikTok, Instagram, or Discord." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-slate-900 font-bold flex items-center justify-center flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 5: Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                            <div className="space-y-6">
                                <h3 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                    Why Use Our Suite?
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8ACE00] mt-2 flex-shrink-0" />
                                        <p className="text-slate-400 text-sm"><span className="text-white font-semibold">Instant Results:</span> No loading screens, no waiting. Real-time preview as you type.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8ACE00] mt-2 flex-shrink-0" />
                                        <p className="text-slate-400 text-sm"><span className="text-white font-semibold">Premium Quality:</span> High-quality PNGs with no watermarks and no logins required.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8ACE00] mt-2 flex-shrink-0" />
                                        <p className="text-slate-400 text-sm"><span className="text-white font-semibold">Complete Suite:</span> Includes lyrics generator, video overlays, and retro sparkles.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#8ACE00]/5 rounded-2xl p-6 border border-[#8ACE00]/20 flex flex-col justify-center">
                                <h4 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Play className="w-4 h-4 text-[#8ACE00]" />
                                    Pro Tip for Engagement
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    From experience, posting between <span className="text-white font-semibold">6–9 PM</span> works best on Instagram.
                                    Weekends are especially strong for social media posts. Focus on high contrast (white text on black or black on green) to stop the scroll.
                                </p>
                                <div className="flex gap-2">
                                    <div className="h-2 w-12 bg-[#8ACE00] rounded-full" />
                                    <div className="h-2 w-4 bg-[#8ACE00]/30 rounded-full" />
                                    <div className="h-2 w-4 bg-[#8ACE00]/30 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
