'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
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
    Type,
    Sparkles,
    Check,
    Download,
    Share2,
    Palette,
    ArrowRight,
    Droplet,
    Paintbrush,
    ChevronDown,
} from 'lucide-react'
import dynamic from 'next/dynamic'

const BratMemeFAQSection = dynamic(
    () => import('@/components/sections/BratMemeFAQSection').then((mod) => mod.BratMemeFAQSection),
    { ssr: true }
)

import { MoreToolsSection } from '@/components/sections/MoreToolsSection'


const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Brat Meme Generator',
    url: 'https://brat-generator.work/brat-meme-generator',
    description:
        'Create viral brat style memes instantly. Customize text, colors, and download high-quality 1080×1080 images perfect for Instagram.',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'All',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    featureList: [
        'Custom text input',
        'Color presets',
        'Custom background and text colors',
        'Live preview',
        '1080x1080 image download',
        'Share to social media',
        'Mobile responsive',
    ],
}

/* ─── Page ─── */

export default function BratMemeGeneratorPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [text, setText] = useState('brat meme')
    const [backgroundColor, setBackgroundColor] = useState('#8ACE00')
    const [textColor, setTextColor] = useState('#000000')
    const [selectedPreset, setSelectedPreset] = useState<ColorPresetKey>('classic')
    const [canShare, setCanShare] = useState(false)
    const [copied, setCopied] = useState(false)
    const [downloaded, setDownloaded] = useState(false)
    const [bgColorError, setBgColorError] = useState(false)
    const [textColorError, setTextColorError] = useState(false)

    useEffect(() => {
        setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
    }, [])

    const isValidHexColor = (color: string): boolean => {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
    }

    useEffect(() => {
        if (canvasRef.current && isValidHexColor(backgroundColor) && isValidHexColor(textColor)) {
            generateBratImage(canvasRef.current, {
                text: text || 'brat meme',
                backgroundColor,
                textColor,
            })
        }
    }, [text, backgroundColor, textColor])

    const handlePresetSelect = useCallback((presetKey: ColorPresetKey) => {
        const preset = colorPresets[presetKey]
        setSelectedPreset(presetKey)
        setBackgroundColor(preset.backgroundColor)
        setTextColor(preset.textColor)
        setBgColorError(false)
        setTextColorError(false)
    }, [])

    const handleBackgroundColorChange = useCallback((value: string) => {
        setBackgroundColor(value)
        setBgColorError(value ? !(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) : false)
    }, [])

    const handleTextColorChange = useCallback((value: string) => {
        setTextColor(value)
        setTextColorError(value ? !(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) : false)
    }, [])

    const handleDownload = useCallback(async () => {
        if (canvasRef.current) {
            const filename = text ? `brat-meme-${text.toLowerCase().replace(/\s+/g, '-')}` : 'brat-meme'
            await downloadBratImage(canvasRef.current, filename)
            setDownloaded(true)
            setTimeout(() => setDownloaded(false), 2000)
        }
    }, [text])

    const handleShare = useCallback(async () => {
        if (canvasRef.current) {
            const success = await shareBratImage(canvasRef.current, text)
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
    }, [text])

    return (
        <>
            <Script
                id="webapp-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />

            <Header />
            <main>
                {/* ── 1. Hero + Generator Tool ── */}
                <section className="relative py-12 lg:py-20 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8ACE00]/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
                    </div>

                    <Container className="relative">
                        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/30 mb-6">
                                <Sparkles className="w-4 h-4 text-[#8ACE00]" />
                                <span className="text-sm font-medium text-[#8ACE00]">Free Brat Meme Maker</span>
                            </div>

                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                                <span className="text-white">Brat Meme Generator – </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ACE00] via-lime-400 to-green-400">
                                    Create Viral Meme Images in Seconds
                                </span>
                            </h1>

                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                Create custom meme images inspired by Charli XCX&apos;s iconic &quot;Brat&quot; album cover.
                                Enter your text, customize colors, and download instantly.
                            </p>
                        </div>

                        {/* Generator Tool */}
                        <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <Card className="p-6 sm:p-8 lg:p-10" hover={false}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                    {/* Left: Controls */}
                                    <div className="space-y-6 order-2 lg:order-1">
                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                <Type className="w-5 h-5 text-[#8ACE00]" />
                                                Enter Your Meme Text
                                            </label>
                                            <input
                                                type="text"
                                                id="brat-meme-text-input"
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                placeholder="Type your meme text here..."
                                                maxLength={100}
                                                aria-label="Enter the text for your Brat meme"
                                                className="w-full px-4 py-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white text-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#8ACE00] focus:border-transparent transition-all"
                                            />
                                            <p className="text-sm text-slate-500 mt-2">
                                                Text automatically converts to lowercase • {text.length}/100
                                            </p>
                                        </div>

                                        {/* Color Presets */}
                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                <Palette className="w-5 h-5 text-fuchsia-400" />
                                                Choose a Style
                                            </label>
                                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                                                {(Object.keys(colorPresets) as ColorPresetKey[]).map((key) => {
                                                    const preset = colorPresets[key]
                                                    const isSelected = selectedPreset === key
                                                    return (
                                                        <button
                                                            key={key}
                                                            onClick={() => handlePresetSelect(key)}
                                                            className={`relative aspect-square rounded-xl border-2 transition-all ${isSelected
                                                                ? 'border-white scale-110 shadow-lg z-10'
                                                                : 'border-slate-700 hover:border-slate-500 hover:scale-105'
                                                                }`}
                                                            style={{ backgroundColor: preset.backgroundColor }}
                                                            title={preset.name}
                                                            aria-label={`Select ${preset.name} style`}
                                                        >
                                                            {isSelected && (
                                                                <div className="absolute inset-0 flex items-center justify-center">
                                                                    <Check className="w-5 h-5" style={{ color: preset.textColor }} />
                                                                </div>
                                                            )}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        {/* Custom Colors */}
                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-4">
                                                <Paintbrush className="w-5 h-5 text-fuchsia-400" />
                                                Custom Colors
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                                                        <Droplet className="w-4 h-4" />
                                                        Background Color
                                                    </label>
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="color"
                                                            value={backgroundColor}
                                                            onChange={(e) => handleBackgroundColorChange(e.target.value)}
                                                            className="w-12 h-12 rounded-xl cursor-pointer border-2 border-slate-700 flex-shrink-0 hover:border-[#8ACE00] transition-colors shadow-lg"
                                                            title="Pick background color"
                                                            aria-label="Select custom background color"
                                                            style={{ backgroundColor: isValidHexColor(backgroundColor) ? backgroundColor : '#8ACE00' }}
                                                        />
                                                        <div className="flex-1">
                                                            <input
                                                                type="text"
                                                                value={backgroundColor}
                                                                onChange={(e) => handleBackgroundColorChange(e.target.value)}
                                                                placeholder="#8ACE00"
                                                                maxLength={7}
                                                                className={`w-full px-3 py-2.5 rounded-lg bg-slate-900/70 border text-white text-sm font-mono focus:outline-none focus:ring-2 transition-all ${bgColorError
                                                                    ? 'border-red-500 focus:ring-red-500'
                                                                    : 'border-slate-700 focus:ring-[#8ACE00] focus:border-[#8ACE00]'
                                                                    }`}
                                                            />
                                                            {bgColorError && (
                                                                <p className="text-xs text-red-400 mt-1">Invalid hex color</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                                                        <Type className="w-4 h-4" />
                                                        Text Color
                                                    </label>
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="color"
                                                            value={textColor}
                                                            onChange={(e) => handleTextColorChange(e.target.value)}
                                                            className="w-12 h-12 rounded-xl cursor-pointer border-2 border-slate-700 flex-shrink-0 hover:border-fuchsia-400 transition-colors shadow-lg"
                                                            title="Pick text color"
                                                            aria-label="Select custom text color"
                                                            style={{ backgroundColor: isValidHexColor(textColor) ? textColor : '#000000' }}
                                                        />
                                                        <div className="flex-1">
                                                            <input
                                                                type="text"
                                                                value={textColor}
                                                                onChange={(e) => handleTextColorChange(e.target.value)}
                                                                placeholder="#000000"
                                                                maxLength={7}
                                                                className={`w-full px-3 py-2.5 rounded-lg bg-slate-900/70 border text-white text-sm font-mono focus:outline-none focus:ring-2 transition-all ${textColorError
                                                                    ? 'border-red-500 focus:ring-red-500'
                                                                    : 'border-slate-700 focus:ring-fuchsia-400 focus:border-fuchsia-400'
                                                                    }`}
                                                            />
                                                            {textColorError && (
                                                                <p className="text-xs text-red-400 mt-1">Invalid hex color</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                            <Button
                                                onClick={handleDownload}
                                                size="lg"
                                                className="flex-1"
                                                aria-label="Download your Brat meme image"
                                            >
                                                {downloaded ? (
                                                    <>
                                                        <Check className="w-5 h-5 mr-2" />
                                                        Downloaded!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Download className="w-5 h-5 mr-2" />
                                                        Download Image
                                                    </>
                                                )}
                                            </Button>
                                            <Button
                                                onClick={handleShare}
                                                variant="secondary"
                                                size="lg"
                                                className="flex-1"
                                                aria-label={canShare ? 'Share your Brat meme image' : 'Copy Brat meme image to clipboard'}
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check className="w-5 h-5 mr-2" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Share2 className="w-5 h-5 mr-2" />
                                                        {canShare ? 'Share' : 'Copy Image'}
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Right: Preview */}
                                    <div className="order-1 lg:order-2">
                                        <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                            <Sparkles className="w-5 h-5 text-[#8ACE00]" />
                                            Live Preview
                                        </label>
                                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-700">
                                            <canvas
                                                ref={canvasRef}
                                                width={1080}
                                                height={1080}
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <p className="text-center text-sm text-slate-500 mt-3">
                                            1080 × 1080px • Perfect for Instagram
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Trust Signals */}
                        <div className="max-w-3xl mx-auto mt-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-500">
                                <span className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-[#8ACE00]" /> No watermark
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-[#8ACE00]" /> Free to use
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-[#8ACE00]" /> Instant download
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Check className="w-4 h-4 text-[#8ACE00]" /> Mobile friendly
                                </span>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ── 2. Article Content ── */}
                <section className="py-16 lg:py-20">
                    <Container>
                        <div className="max-w-3xl mx-auto space-y-12">
                            <div className="text-center mb-10">
                                <p className="text-lg text-slate-400">
                                    Memes move fast. If your text is not clear, bold, and mobile-friendly, people scroll past it.
                                    A strong idea deserves strong formatting. That&apos;s exactly why we built this Brat Meme Generator.
                                </p>
                            </div>

                            {/* What Is a Brat Meme Generator */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    What Is a Brat Meme Generator?
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    A Brat Meme Generator is a tool that formats your meme text in a bold, minimalist brat style
                                    and converts it into a ready-to-share image.
                                </p>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    Instead of using complex graphic editors, you simply:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Enter your meme text</li>
                                    <li>Choose a style</li>
                                    <li>Customize colors</li>
                                    <li>Download the image</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    The tool automatically:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Converts text to lowercase</li>
                                    <li>Tracks character count</li>
                                    <li>Formats spacing</li>
                                    <li>Displays a live preview</li>
                                    <li>Generates a 1080×1080 image</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    This square format works perfectly for Instagram posts.
                                </p>
                            </div>

                            {/* Why Meme Formatting Matters */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Why Meme Formatting Matters
                                </h2>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    Memes succeed because they are:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Easy to read</li>
                                    <li>Fast to understand</li>
                                    <li>Visually consistent</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    Mobile devices account for the majority of global web traffic. That means your meme must look
                                    clean on small screens.
                                </p>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    Short lines. Clear contrast. Strong layout. That&apos;s what brat-style formatting delivers.
                                </p>
                            </div>

                            {/* How the Brat Meme Generator Works */}
                            <div className="space-y-6">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    How the Brat Meme Generator Works
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    The process stays simple and direct.
                                </p>

                                {/* Steps */}
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <h3 className="font-display text-xl font-bold text-white">
                                            Step 1: Enter Your Meme Text
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            Type your text inside the input area. The tool automatically converts everything to lowercase.
                                            This keeps your meme visually consistent and aligned with modern internet style.
                                        </p>
                                        <p className="text-slate-400 leading-relaxed">
                                            You will also see a live character counter (for example: 9/100).
                                            This helps you keep your meme short and punchy.
                                            Short memes perform better because they load fast and read fast.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="font-display text-xl font-bold text-white">
                                            Step 2: Customize Colors
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            This is where your meme becomes unique. You can choose background color and text color.
                                            High contrast improves readability.
                                        </p>
                                        <p className="text-slate-400 leading-relaxed">
                                            Good color contrast ensures your meme remains readable even on bright screens.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="font-display text-xl font-bold text-white">
                                            Step 3: Live Preview
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            The tool shows a Live Preview instantly. You don&apos;t need to guess how the final
                                            image will look — you see it in real time with final layout, selected colors,
                                            formatted text, and the 1080×1080 size indicator.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="font-display text-xl font-bold text-white">
                                            Step 4: Download Image
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            Once satisfied, click Download Image. The tool generates a 1080×1080px image ready for
                                            Instagram posts, Facebook, Pinterest, Threads, and LinkedIn square posts.
                                            No resizing needed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Why 1080 × 1080 Matters */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Why 1080 × 1080 Matters
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Instagram recommends square formats for feed posts. A 1080×1080 image ensures
                                    high resolution, sharp display, and no awkward cropping.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Using a standard square format avoids layout problems across platforms.
                                    The generator prepares your meme at this optimized size automatically.
                                </p>
                            </div>

                            {/* Designed for Social Media Creators */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Designed for Social Media Creators
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    If you post regularly, speed matters. Instead of opening a graphic editor, choosing fonts,
                                    adjusting spacing, and exporting files, you can write your joke, pick colors, and download — all in seconds.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Consistency also matters. When you use the same brat-style layout repeatedly,
                                    your content becomes recognizable. Brand identity grows through repetition.
                                </p>
                            </div>

                            {/* Brat Meme Generator vs Traditional Meme Editors */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Brat Meme Generator vs Traditional Meme Editors
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Traditional meme editors focus on image templates with top text, bottom text,
                                    and Impact fonts. Those tools work well for classic meme formats.
                                </p>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    This Brat Meme Generator focuses on:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Text-driven memes</li>
                                    <li>Minimal design</li>
                                    <li>Clean aesthetic</li>
                                    <li>Social-ready square images</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    It avoids unnecessary features. Simplicity improves speed.
                                </p>
                            </div>

                            {/* Built for Performance and Trust */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Built for Performance and Trust
                                </h2>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    This tool does not:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Use AI to generate jokes</li>
                                    <li>Pull content from external databases</li>
                                    <li>Copy trending memes</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    You write your own text. That matters for authenticity.
                                    Original content builds trust with audiences and platforms.
                                </p>
                            </div>

                            {/* Best Practices */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Best Practices for Better Meme Results
                                </h2>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    To get stronger results:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Keep text under 100 characters</li>
                                    <li>Use high contrast colors</li>
                                    <li>Avoid long paragraphs</li>
                                    <li>Focus on one idea</li>
                                    <li>Test readability in preview</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    Clarity beats complexity.
                                </p>
                            </div>

                            {/* Who Should Use This Tool */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Who Should Use This Tool?
                                </h2>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    This tool works well for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Social media creators</li>
                                    <li>Small brands</li>
                                    <li>Meme pages</li>
                                    <li>Students</li>
                                    <li>Anyone who loves sarcasm</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    If you need fast, clean meme images without design software, this tool fits.
                                </p>
                            </div>

                            {/* Final Thoughts */}
                            <div className="space-y-4">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white italic">
                                    Final Thoughts
                                </h2>
                                <p className="text-slate-400 leading-relaxed font-semibold">
                                    The Brat Meme Generator combines simplicity with control. You get:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-400">
                                    <li>Lowercase formatting</li>
                                    <li>Character counter</li>
                                    <li>Custom background and text colors</li>
                                    <li>Live preview</li>
                                    <li>1080×1080 Instagram-ready image</li>
                                    <li>Instant download</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    No clutter. No fake promises. No hidden logic.
                                </p>
                                <p className="text-slate-400 leading-relaxed font-semibold italic">
                                    You bring the humor. The generator makes it bold and shareable.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ── 3. FAQ Section ── */}
                <BratMemeFAQSection />

                {/* ── 4. Internal Links ── */}
                <MoreToolsSection currentTool="meme" />
            </main>
            <Footer />
        </>
    )
}
