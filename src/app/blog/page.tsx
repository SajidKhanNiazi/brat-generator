'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import Link from 'next/link'

const posts = [
    {
        title: "How to Make a Brat Image for Instagram — Square, Story & Carousel Guide",
        description: "Creating the perfect brat image instagram post is not just about adding text on a photo. It is about using the right size, colors, and mood...",
        href: "/blog/how-to-make-a-brat-image-for-instagram",
        date: "February 28, 2026",
        author: "Brat Admin",
        readTime: "5 min read",
        category: "Instagram Guide"
    }
]

export default function BlogListingPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            <Header />
            <main className="flex-grow py-16 lg:py-24">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <header className="text-center mb-16">
                            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
                                Latest from the <span className="text-[#8ACE00]">Brat Blog</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Discover tips, tricks, and guides on how to master the Brat aesthetic for your social media and beyond.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 gap-8">
                            {posts.map((post, index) => (
                                <Link href={post.href} key={index} className="group">
                                    <Card className="p-8 hover:border-[#8ACE00]/50 transition-colors bg-slate-900/50 border-slate-800">
                                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4">
                                            <span className="px-2 py-1 rounded-md bg-[#8ACE00]/10 text-[#8ACE00] font-semibold tracking-wider uppercase">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#8ACE00] transition-colors leading-tight">
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-400 leading-relaxed mb-6 line-clamp-2">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-[#8ACE00] font-semibold">
                                            Read More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    )
}
