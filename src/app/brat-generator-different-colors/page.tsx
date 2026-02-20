'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
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
    Droplet,
    Paintbrush,
} from 'lucide-react'

const MoreToolsSection = dynamic(
    () => import('@/components/sections/MoreToolsSection').then(mod => ({ default: mod.MoreToolsSection })),
    { ssr: false }
)
const BratColorsContent = dynamic(
    () => import('@/components/sections/BratColorsContent').then(mod => ({ default: mod.BratColorsContent })),
    { ssr: false }
)
const FAQSection = dynamic(
    () => import('@/components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })),
    { ssr: false }
)

export default function BratColorsPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [text, setText] = useState('brat')
    const [backgroundColor, setBackgroundColor] = useState('#e879f9') // Default to fuchsia/pink for this page focus
    const [textColor, setTextColor] = useState('#000000')
    const [selectedPreset, setSelectedPreset] = useState<ColorPresetKey>('pink')
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
                text: text || 'brat',
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
        if (value && !isValidHexColor(value)) {
            setBgColorError(true)
        } else {
            setBgColorError(false)
        }
    }, [])

    const handleTextColorChange = useCallback((value: string) => {
        setTextColor(value)
        if (value && !isValidHexColor(value)) {
            setTextColorError(true)
        } else {
            setTextColorError(false)
        }
    }, [])

    const handleDownload = useCallback(async () => {
        if (canvasRef.current) {
            const filename = text ? `brat-colors-${text.toLowerCase().replace(/\s+/g, '-')}` : 'brat-generator-colors'
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
                            new ClipboardItem({ 'image/png': blob })
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
            <Header />
            <main>
                <section className="relative py-12 lg:py-20 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                    </div>

                    <Container className="relative">
                        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/30 mb-6">
                                <Palette className="w-4 h-4 text-[#8ACE00]" />
                                <span className="text-sm font-medium text-[#8ACE00]">Custom Background & Text Colors</span>
                            </div>

                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                                <span className="text-white">Brat Generator – </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
                                    Different Colors Edition
                                </span>
                            </h1>

                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                Go beyond the green. Create your own custom Brat album cover with any color combination.
                                Perfect for <strong>colorful brat text</strong> and <strong>brat aesthetic text</strong>.
                            </p>
                        </div>

                        {/* Generator Tool */}
                        <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <Card className="p-6 sm:p-8 lg:p-10" hover={false}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                                    <div className="space-y-6 order-2 lg:order-1">
                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                <Type className="w-5 h-5 text-fuchsia-400" />
                                                Enter Your Text
                                            </label>
                                            <input
                                                type="text"
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                placeholder="Type your text here..."
                                                maxLength={100}
                                                className="w-full px-4 py-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white text-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                                <Palette className="w-5 h-5 text-cyan-400" />
                                                Color Presets
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

                                        <div>
                                            <label className="flex items-center gap-2 font-display font-semibold text-white mb-4">
                                                <Paintbrush className="w-5 h-5 text-rose-400" />
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
                                                            className="w-12 h-12 rounded-xl cursor-pointer border-2 border-slate-700 flex-shrink-0"
                                                        />
                                                        <input
                                                            type="text"
                                                            value={backgroundColor}
                                                            onChange={(e) => handleBackgroundColorChange(e.target.value)}
                                                            className={`w-full px-3 py-2.5 rounded-lg bg-slate-900/70 border text-white text-sm font-mono focus:outline-none focus:ring-2 ${bgColorError ? 'border-red-500' : 'border-slate-700'}`}
                                                        />
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
                                                            className="w-12 h-12 rounded-xl cursor-pointer border-2 border-slate-700 flex-shrink-0"
                                                        />
                                                        <input
                                                            type="text"
                                                            value={textColor}
                                                            onChange={(e) => handleTextColorChange(e.target.value)}
                                                            className={`w-full px-3 py-2.5 rounded-lg bg-slate-900/70 border text-white text-sm font-mono focus:outline-none focus:ring-2 ${textColorError ? 'border-red-500' : 'border-slate-700'}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                            <Button onClick={handleDownload} size="lg" className="flex-1 bg-fuchsia-600 hover:bg-fuchsia-500">
                                                {downloaded ? <><Check className="w-5 h-5 mr-2" /> Downloaded!</> : <><Download className="w-5 h-5 mr-2" /> Download Image</>}
                                            </Button>
                                            <Button onClick={handleShare} variant="secondary" size="lg" className="flex-1">
                                                {copied ? <><Check className="w-5 h-5 mr-2" /> Copied!</> : <><Share2 className="w-5 h-5 mr-2" /> {canShare ? 'Share' : 'Copy Image'}</>}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="order-1 lg:order-2">
                                        <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                                            <Sparkles className="w-5 h-5 text-fuchsia-400" />
                                            Live Preview
                                        </label>
                                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-700">
                                            <canvas ref={canvasRef} width={1080} height={1080} className="w-full h-full" />
                                        </div>
                                        <p className="text-center text-sm text-slate-500 mt-3">1080 × 1080px • High Resolution</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Container>
                </section>

                <BratColorsContent />
                <FAQSection />
                <MoreToolsSection currentTool="colors" />
            </main>
            <Footer />
        </>
    )
}
