'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ArrowRight, BookOpen, Clock, User, Calendar } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
    {
        title: "How to Make a Brat Image for Instagram — Square, Story & Carousel Guide",
        description: "Learn how to create the perfect brat aesthetic image with the right sizes, colors, and bold attitude for your social media.",
        href: "/blog/how-to-make-a-brat-image-for-instagram",
        date: "Feb 28, 2026",
        author: "Brat Admin",
        readTime: "5 min read",
        category: "Instagram Guide"
    }
]

export function BlogSection() {
    return (
        <section className="py-24 bg-slate-900/10 border-b border-slate-800 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <Container className="relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/20 text-[#8ACE00] text-xs font-bold uppercase tracking-wider mb-4">
                            <BookOpen className="w-3.5 h-3.5" />
                            Brat Resources & Guides
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
                            Latest from <span className="text-[#8ACE00]">the Blog</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[#8ACE00] font-semibold hover:underline group transition-all"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl">
                    {blogPosts.map((post, index) => (
                        <Link href={post.href} key={index} className="group">
                            <Card className="p-0 overflow-hidden hover:border-[#8ACE00]/40 transition-all bg-slate-900/40">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Mockup or Image area */}
                                    <div className="lg:w-1/3 bg-[#8ACE00] aspect-video lg:aspect-auto flex items-center justify-center p-8 group-hover:scale-[1.02] transition-transform duration-500">
                                        <div className="bg-white p-4 shadow-2xl rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                            <p className="font-display text-4xl font-bold text-black border-slate-200">brat</p>
                                        </div>
                                    </div>

                                    <div className="p-8 lg:w-2/3 flex flex-col justify-center">
                                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4 font-medium uppercase tracking-widest">
                                            <span className="text-[#8ACE00]">{post.category}</span>
                                            <span className="flex items-center gap-1.5 line-clamp-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5 line-clamp-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-[#8ACE00] transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                                            Keep Reading
                                            <ArrowRight className="w-4 h-4 text-[#8ACE00] group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    )
}
