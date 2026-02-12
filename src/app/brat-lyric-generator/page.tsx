'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
    generateBratImage,
    downloadBratImage,
    shareBratImage,
    colorPresets,
    ColorPresetKey,
} from '@/lib/bratGenerator'
import {
    Download,
    Share2,
    Palette,
    Type,
    Sparkles,
    Check,
    RotateCcw,
    ChevronDown,
    Music,
    Video,
    ArrowRight,
} from 'lucide-react'

/* ─── Brat Lyrics Formatter ─── */

type LyricStyle = 'default' | 'aggressive' | 'soft' | 'charli'
type StructureMode = 'verse' | 'chorus' | 'full'

function formatBratLyrics(
    raw: string,
    style: LyricStyle,
    structure: StructureMode,
): string {
    if (!raw.trim()) return ''

    let lines = raw
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)

    // Lowercase everything — core brat rule
    lines = lines.map((l) => l.toLowerCase())

    // Style-specific transforms
    switch (style) {
        case 'aggressive':
            lines = lines.map((l) =>
                l
                    .replace(/,\s*/g, '\n')
                    .replace(/\band\b/gi, '\n')
                    .replace(/\bbut\b/gi, '\n'),
            )
            lines = lines
                .join('\n')
                .split('\n')
                .map((l) => l.trim())
                .filter(Boolean)
            break
        case 'soft':
            lines = lines.map((l, i) => (i % 2 === 1 ? `${l} ...` : l))
            break
        case 'charli':
            lines = lines.map((l) => {
                const words = l.split(' ').filter(Boolean)
                if (words.length > 1) return `${l} ${words[words.length - 1]}`
                return l
            })
            break
        default:
            break
    }

    // Add structure labels
    if (structure === 'full' && lines.length >= 4) {
        const third = Math.ceil(lines.length / 3)
        const labeled: string[] = []
        labeled.push('[verse]')
        labeled.push(...lines.slice(0, third))
        labeled.push('')
        labeled.push('[chorus]')
        labeled.push(...lines.slice(third, third * 2))
        labeled.push('')
        labeled.push('[bridge]')
        labeled.push(...lines.slice(third * 2))
        lines = labeled
    } else if (structure === 'verse') {
        lines = ['[verse]', ...lines]
    } else if (structure === 'chorus') {
        lines = ['[chorus]', ...lines]
    }

    return lines.join('\n')
}

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

/* ─── Page ─── */

export default function BratLyricGeneratorPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [inputText, setInputText] = useState('')
    const [formattedText, setFormattedText] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('#8ACE00')
    const [textColor, setTextColor] = useState('#000000')
    const [selectedPreset, setSelectedPreset] = useState<ColorPresetKey>('classic')
    const [style, setStyle] = useState<LyricStyle>('default')
    const [structure, setStructure] = useState<StructureMode>('full')

    const [canShare, setCanShare] = useState(false)
    const [copied, setCopied] = useState(false)
    const [downloaded, setDownloaded] = useState(false)
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    // Check if Web Share API is available
    useEffect(() => {
        setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
    }, [])

    // Generate image whenever settings change
    useEffect(() => {
        if (canvasRef.current) {
            generateBratImage(canvasRef.current, {
                text:
                    formattedText || (inputText ? inputText.toLowerCase() : 'brat'),
                backgroundColor,
                textColor,
            })
        }
    }, [formattedText, inputText, backgroundColor, textColor])

    const handleGenerate = useCallback(() => {
        setFormattedText(formatBratLyrics(inputText, style, structure))
    }, [inputText, style, structure])

    const handleReset = useCallback(() => {
        setInputText('')
        setFormattedText('')
        setSelectedPreset('classic')
        setBackgroundColor('#8ACE00')
        setTextColor('#000000')
        setStyle('default')
        setStructure('full')
    }, [])

    const handleDownload = useCallback(async () => {
        if (canvasRef.current) {
            await downloadBratImage(canvasRef.current, 'brat-lyrics')
            setDownloaded(true)
            setTimeout(() => setDownloaded(false), 2000)
        }
    }, [])

    const handleShare = useCallback(async () => {
        if (canvasRef.current) {
            const success = await shareBratImage(
                canvasRef.current,
                formattedText || inputText,
            )
            if (!success) {
                try {
                    const blob = await new Promise<Blob | null>((resolve) => {
                        canvasRef.current?.toBlob((b) => resolve(b), 'image/png')
                    })
                    if (blob) {
                        await navigator.clipboard.write([
                            new ClipboardItem({ 'image/png': blob }),
                        ])
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                    }
                } catch (err) {
                    console.error('Failed to copy:', err)
                }
            }
        }
    }, [formattedText, inputText])

    const handlePresetSelect = useCallback((presetKey: ColorPresetKey) => {
        const preset = colorPresets[presetKey]
        setSelectedPreset(presetKey)
        setBackgroundColor(preset.backgroundColor)
        setTextColor(preset.textColor)
    }, [])

    const styleOptions: { key: LyricStyle; label: string }[] = [
        { key: 'default', label: 'Brat Mood' },
        { key: 'aggressive', label: 'Aggressive' },
        { key: 'soft', label: 'Soft' },
        { key: 'charli', label: 'Charli-inspired' },
    ]

    const structureOptions: { key: StructureMode; label: string }[] = [
        { key: 'verse', label: 'Verse' },
        { key: 'chorus', label: 'Chorus' },
        { key: 'full', label: 'Full Song' },
    ]

    const faqs = [
        {
            q: 'Is this brat lyrics generator free?',
            a: 'Yes. This tool is completely free to use.',
        },
        {
            q: 'Does this tool create lyrics for me?',
            a: 'No. You write the lyrics. The tool only formats them.',
        },
        {
            q: 'Is this an auto brat lyrics generator?',
            a: 'It automatically formats your lyrics into brat style, but it does not generate new lyrics.',
        },
        {
            q: 'Can I copy and use the lyrics anywhere?',
            a: 'Yes. You can copy the output and use it on social media, videos, or personal projects.',
        },
    ]

    return (
        <>
            <Header />
            <main>
                {/* ── 1. Hero Section ── */}
                <section className="relative py-12 lg:py-20 overflow-hidden">
                    {/* Background decorations — hidden on mobile */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8ACE00]/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
                    </div>

                    <Container className="relative">
                        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/30 mb-6">
                                <Sparkles className="w-4 h-4 text-[#8ACE00]" />
                                <span className="text-sm font-medium text-[#8ACE00]">
                                    Free Brat Lyrics Maker
                                </span>
                            </div>

                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                                Brat Lyric Generator
                            </h1>

                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                The Brat Lyric Generator is a simple online tool that formats
                                your own lyrics into the popular brat-style text. If you already
                                use a brat generator for text, this tool is the same idea — just
                                focused on lyrics, songs, rap, and creative writing.
                            </p>
                        </div>

                        {/* ── 2. Lyrics Tool UI ── */}
                        <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <Card className="p-6 sm:p-8 lg:p-10" hover={false}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                    {/* Left: Controls */}
                                    <div className="space-y-6 order-2 lg:order-1">
                                        {/* Lyrics Input */}
                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                <Type className="w-5 h-5 text-[#8ACE00]" />
                                                Your Lyrics
                                            </label>
                                            <textarea
                                                value={inputText}
                                                onChange={(e) => setInputText(e.target.value)}
                                                placeholder="Paste your lyrics here…"
                                                rows={5}
                                                className="w-full px-4 py-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#8ACE00] focus:border-transparent transition-all resize-y min-h-[120px]"
                                            />
                                        </div>

                                        {/* Styles & Options */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Formatting Style */}
                                            <div>
                                                <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                    <Sparkles className="w-4 h-4 text-[#8ACE00]" />
                                                    Style
                                                </label>
                                                <select
                                                    value={style}
                                                    onChange={(e) =>
                                                        setStyle(e.target.value as LyricStyle)
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#8ACE00]"
                                                >
                                                    {styleOptions.map((o) => (
                                                        <option key={o.key} value={o.key}>
                                                            {o.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {/* Structure */}
                                            <div>
                                                <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                    <Music className="w-4 h-4 text-fuchsia-400" />
                                                    Structure
                                                </label>
                                                <select
                                                    value={structure}
                                                    onChange={(e) =>
                                                        setStructure(e.target.value as StructureMode)
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#8ACE00]"
                                                >
                                                    {structureOptions.map((o) => (
                                                        <option key={o.key} value={o.key}>
                                                            {o.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Color Presets */}
                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                <Palette className="w-5 h-5 text-fuchsia-400" />
                                                Color Presets
                                            </label>
                                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                                                {(
                                                    Object.keys(colorPresets) as ColorPresetKey[]
                                                ).map((key) => (
                                                    <button
                                                        key={key}
                                                        onClick={() => handlePresetSelect(key)}
                                                        className={`group relative w-full aspect-square rounded-lg border-2 transition-all ${selectedPreset === key ? 'border-[#8ACE00] scale-110' : 'border-transparent hover:border-slate-500'}`}
                                                        title={colorPresets[key].name}
                                                    >
                                                        <div
                                                            className="w-full h-full rounded-md shadow-inner"
                                                            style={{
                                                                backgroundColor:
                                                                    colorPresets[key].backgroundColor,
                                                            }}
                                                        />
                                                        {selectedPreset === key && (
                                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                                <Check className="w-5 h-5 text-slate-950 bg-[#8ACE00] rounded-full p-0.5" />
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Primary Actions */}
                                        <div className="pt-2 space-y-3">
                                            <Button
                                                onClick={handleGenerate}
                                                size="lg"
                                                className="w-full"
                                                disabled={!inputText.trim()}
                                            >
                                                <Sparkles className="w-5 h-5 mr-2" />
                                                Generate Brat Lyrics
                                            </Button>

                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <Button
                                                    onClick={handleDownload}
                                                    variant="secondary"
                                                    className="flex-1"
                                                    disabled={!inputText.trim()}
                                                >
                                                    {downloaded ? (
                                                        <Check className="w-4 h-4 mr-2" />
                                                    ) : (
                                                        <Download className="w-4 h-4 mr-2" />
                                                    )}
                                                    Download Image
                                                </Button>
                                                <Button
                                                    onClick={handleShare}
                                                    variant="outline"
                                                    className="flex-1"
                                                    disabled={!inputText.trim()}
                                                >
                                                    {copied ? (
                                                        <Check className="w-4 h-4 mr-2" />
                                                    ) : canShare ? (
                                                        <Share2 className="w-4 h-4 mr-2" />
                                                    ) : (
                                                        <Check className="w-4 h-4 mr-2" />
                                                    )}
                                                    {copied ? 'Copied!' : canShare ? 'Share' : 'Copy'}
                                                </Button>
                                            </div>

                                            <button
                                                onClick={handleReset}
                                                className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 mx-auto"
                                            >
                                                <RotateCcw className="w-3.5 h-3.5" />
                                                Reset Tool
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right: Canvas Preview */}
                                    <div className="order-1 lg:order-2 flex flex-col">
                                        <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                            <Sparkles className="w-5 h-5 text-[#8ACE00]" />
                                            Brat Lyrics Output
                                        </label>
                                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-700 bg-slate-800">
                                            <canvas
                                                ref={canvasRef}
                                                width={800}
                                                height={800}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-center text-sm text-slate-500 mt-4 italic">
                                            This tool formats your lyrics using the Official Brat
                                            Generator style.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* ── 3. SEO Information / Article Content ── */}
                <section className="py-16 lg:py-20">
                    <Container>
                        <div className="max-w-3xl mx-auto space-y-12">
                            <div className="text-center mb-10">
                                <p className="text-lg text-slate-400">
                                    You write the lyrics. The tool reshapes them into short,
                                    punchy, brat-style lines that are easy to copy and share.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    What Is a Brat Lyrics Generator?
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    A brat lyrics generator is a formatting tool that takes your
                                    written lyrics and applies a brat-style look to them.
                                </p>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    It helps you:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Break lyrics into clean lines</li>
                                    <li>Keep everything lowercase</li>
                                    <li>Add rhythm and spacing</li>
                                    <li>Apply simple structure like verse or chorus</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    This tool does not write lyrics for you. It only formats what
                                    you already wrote — just like the main Brat Generator.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    How This Brat Lyrics Maker Works
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Using this brat lyrics maker is very easy:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                    <li>Paste or write your lyrics in the input box</li>
                                    <li>
                                        Choose a style (Brat Mood, Aggressive, Soft, or
                                        Charli-inspired)
                                    </li>
                                    <li>Select a structure (Verse, Chorus, or Full Song)</li>
                                    <li>Click Generate Brat Lyrics</li>
                                    <li>Copy your formatted lyrics and use them anywhere</li>
                                </ol>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    No login. No AI writing. No delay.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Auto Brat Lyrics Generator for Songs &amp; Rap
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    This page works like an auto brat lyrics generator, but only
                                    for formatting.
                                </p>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    That means:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Your lyrics stay original</li>
                                    <li>
                                        The tool instantly applies brat-style formatting
                                    </li>
                                    <li>Results are fast and lightweight</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    It&apos;s perfect for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Song drafts</li>
                                    <li>Rap lyrics</li>
                                    <li>Creative writing</li>
                                    <li>Social media captions</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    Because it only formats text, it&apos;s safe to use for personal
                                    and commercial projects.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Brat Lyrics Inspired by Charli XCX
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Many users look for brat lyrics Charli XCX style text. This
                                    tool is inspired by the brat aesthetic and vibe, not by
                                    copying any real lyrics.
                                </p>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    Important note:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>No copyrighted lyrics are used</li>
                                    <li>No real songs are copied</li>
                                    <li>
                                        &ldquo;Charli-inspired&rdquo; only refers to style and mood, not
                                        content
                                    </li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    You always stay in control of what you write.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ── 4. Brat Lyrics Templates ── */}
                <section className="py-16 lg:py-20 bg-slate-900/30">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 text-center italic">
                                Brat Lyrics Template Examples
                            </h2>
                            <p className="text-slate-400 text-center mb-8">
                                If you&apos;re not sure how to structure your lyrics, you can follow
                                a brat lyrics template like these:
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <Card className="p-6" hover={false}>
                                    <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                                        Example 1 – Simple Song
                                    </h3>
                                    <pre className="text-[#8ACE00] font-mono text-sm leading-relaxed">
                                        {`Verse\nChorus\nVerse\nChorus`}
                                    </pre>
                                </Card>
                                <Card className="p-6" hover={false}>
                                    <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                                        Example 2 – Full Song
                                    </h3>
                                    <pre className="text-[#8ACE00] font-mono text-sm leading-relaxed">
                                        {`Verse\nChorus\nVerse\nBridge\nChorus`}
                                    </pre>
                                </Card>
                            </div>
                            <p className="text-center text-slate-500 text-sm mt-8">
                                These templates only guide structure. Your words stay 100%
                                yours.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* ── 5. Video Mention ── */}
                <section className="py-16 lg:py-20">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Video className="w-6 h-6 text-fuchsia-400" />
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 italic">
                                        Brat Lyrics Generator for Video Content
                                    </h2>
                                    <p className="text-slate-400 leading-relaxed mb-4">
                                        Many creators use this tool as a brat lyrics generator video
                                        helper.
                                    </p>
                                    <p className="text-slate-400 leading-relaxed font-semibold">
                                        You can:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
                                        <li>Generate brat-style lyrics</li>
                                        <li>Copy the text</li>
                                        <li>Paste it into TikTok, Reels, or lyric videos</li>
                                    </ul>
                                    <p className="text-slate-400 leading-relaxed">
                                        The short lines and spacing make the text easy to animate or
                                        display on screen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ── 6. FAQ Section ── */}
                <section className="py-16 lg:py-20 bg-slate-900/30">
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

                {/* ── 7. Internal Link Section ── */}
                <section className="py-16 lg:py-20">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-slate-400 leading-relaxed mb-4 italic">
                                Want to format normal text too? Try our
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-[#8ACE00] font-display font-semibold hover:underline transition-colors"
                            >
                                Brat Generator
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    )
}
