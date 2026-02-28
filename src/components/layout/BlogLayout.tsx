'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface BlogLayoutProps {
    children: React.ReactNode
    title: string
    description?: string
    breadcrumb?: { label: string; href: string }[]
}

export function BlogLayout({ children, title, description, breadcrumb }: BlogLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            <Header />
            <main className="flex-grow py-12 lg:py-20">
                <Container>
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none">
                        <Link href="/" className="hover:text-[#8ACE00] transition-colors flex items-center gap-1">
                            <Home className="w-3.5 h-3.5" />
                            Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                        <Link href="/blog" className="hover:text-[#8ACE00] transition-colors">
                            Blog
                        </Link>
                        {breadcrumb?.map((item, index) => (
                            <React.Fragment key={index}>
                                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                                <Link href={item.href} className="hover:text-[#8ACE00] transition-colors last:text-slate-300 last:pointer-events-none">
                                    {item.label}
                                </Link>
                            </React.Fragment>
                        ))}
                    </nav>

                    <div className="max-w-4xl mx-auto">
                        <header className="mb-12">
                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-lg text-slate-400 max-w-2xl">
                                    {description}
                                </p>
                            )}
                        </header>

                        <div className="prose prose-invert prose-slate prose-lg max-w-none 
                            prose-headings:font-display prose-headings:font-bold prose-headings:text-white
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                            prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4
                            prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-6
                            prose-strong:text-white prose-strong:font-bold
                            prose-a:text-[#8ACE00] prose-a:no-underline hover:prose-a:underline
                            prose-li:text-slate-400 prose-li:mb-2
                            prose-img:rounded-2xl prose-img:border prose-img:border-slate-800
                        ">
                            {children}
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    )
}
