import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { ArrowRight, Music, Type, Image as ImageIcon, Palette } from 'lucide-react'

interface ToolCardProps {
    href: string
    title: string
    description: string
    icon: React.ReactNode
    color: string
}

function ToolCard({ href, title, description, icon, color }: ToolCardProps) {
    return (
        <Link href={href} className="block group">
            <Card
                className="h-full p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800/50 border-slate-700/50"
                hover={true}
            >
                <div className="flex flex-col h-full">
                    <div className="mb-4 p-3 rounded-lg w-fit" style={{ backgroundColor: `${color}20` }}>
                        {icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#8ACE00] transition-colors">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                        {description}
                    </p>
                    <div className="flex items-center text-[#8ACE00] font-medium text-sm mt-auto">
                        Try Tool <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export function MoreToolsSection({ currentTool }: { currentTool?: 'generator' | 'lyrics' | 'meme' | 'colors' }) {
    const tools = [
        {
            id: 'generator',
            href: '/',
            title: 'Brat Generator',
            description: 'The original Brat album cover generator. Create custom text in the iconic blurry low-res style.',
            icon: <ImageIcon className="w-6 h-6 text-[#8ACE00]" />,
            color: '#8ACE00'
        },
        {
            id: 'meme',
            href: '/brat-meme-generator',
            title: 'Brat Meme Generator',
            description: 'Create viral brat-style meme images with custom colors, live preview, and instant download.',
            icon: <Type className="w-6 h-6 text-fuchsia-400" />,
            color: '#e879f9'
        },
        {
            id: 'lyrics',
            href: '/brat-lyric-generator',
            title: 'Brat Lyric Generator',
            description: 'Format your text like brat lyrics. Clean, lowercase, and punchy. Perfect for captions.',
            icon: <Music className="w-6 h-6 text-sky-400" />,
            color: '#38bdf8'
        },
        {
            id: 'colors',
            href: '/brat-generator-different-colors',
            title: 'Brat Colors',
            description: 'Go beyond green. Create custom brat-style text graphics with any color combination you want.',
            icon: <Palette className="w-6 h-6 text-[#8ACE00]" />,
            color: '#8ACE00'
        }
    ]

    // Filter out the current tool so we only show "more" tools
    const visibleTools = tools.filter(tool => tool.id !== currentTool)

    return (
        <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/20 pointer-events-none" />
            <Container className="relative">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        Explore More <span className="text-[#8ACE00]">Brat Tools</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Keep the brat summer going with our other free generators.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center">
                    {visibleTools.map((tool) => (
                        <div key={tool.id} className="col-span-1">
                            <ToolCard
                                href={tool.href}
                                title={tool.title}
                                description={tool.description}
                                icon={tool.icon}
                                color={tool.color}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
