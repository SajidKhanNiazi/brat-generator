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
    AspectRatio,
    Alignment,
    Valign,
    FontWeight,
    BackgroundType,
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
    MoreHorizontal,
    RotateCcw,
    Smartphone
} from 'lucide-react'

const MoreToolsSection = dynamic(
    () => import('@/components/sections/MoreToolsSection').then(mod => ({ default: mod.MoreToolsSection })),
    { ssr: false }
)
const FAQSection = dynamic(
    () => import('@/components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })),
    { ssr: false }
)

export default function BratColorsPage() {
    const canvasRef1 = useRef<HTMLCanvasElement>(null)
    const canvasRef2 = useRef<HTMLCanvasElement>(null)
    const canvasRef3 = useRef<HTMLCanvasElement>(null)

    const [text, setText] = useState('Sajid khan')
    const [subtitle, setSubtitle] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('#8ace00')
    const [secondaryColor, setSecondaryColor] = useState('#00ff00')
    const [backgroundType, setBackgroundType] = useState<BackgroundType>('solid')
    const [textColor, setTextColor] = useState('#000000')
    const [fontSize, setFontSize] = useState(90)
    const [blur, setBlur] = useState(2)
    const [noise, setNoise] = useState(0)
    const [selectedPreset, setSelectedPreset] = useState<ColorPresetKey>('lime')
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('square')
    const [alignment, setAlignment] = useState<Alignment>('center')
    const [valign, setValign] = useState<Valign>('center')
    const [fontWeight, setFontWeight] = useState<FontWeight>('medium')
    const [sticker, setSticker] = useState<string>('')


    const [downloaded1, setDownloaded1] = useState(false)
    const [downloaded2, setDownloaded2] = useState(false)
    const [downloaded3, setDownloaded3] = useState(false)
    const [copied1, setCopied1] = useState(false)
    const [copied2, setCopied2] = useState(false)
    const [copied3, setCopied3] = useState(false)

    const handleGenerate = useCallback(() => {
        const refs = [canvasRef1, canvasRef2, canvasRef3]
        const rotations = [0, 180, 180]

        refs.forEach((ref, i) => {
            if (ref.current) {
                generateBratImage(ref.current, {
                    text: text || 'brat',
                    subtitle,
                    backgroundColor,
                    secondaryColor,
                    backgroundType,
                    textColor,
                    fontSize,
                    blur,
                    noise,
                    rotation: rotations[i],
                    aspectRatio,
                    alignment,
                    valign,
                    fontWeight,
                    sticker
                })
            }
        })
    }, [text, subtitle, backgroundColor, secondaryColor, backgroundType, textColor, fontSize, blur, noise, aspectRatio, alignment, valign, fontWeight, sticker])

    // Live Preview logic
    useEffect(() => {
        handleGenerate()
    }, [handleGenerate])

    const handlePresetSelect = useCallback((presetKey: ColorPresetKey) => {
        if (presetKey === 'custom') {
            setSelectedPreset('custom')
            return
        }

        const preset = colorPresets[presetKey as keyof typeof colorPresets]
        if (!preset) return

        setSelectedPreset(presetKey)
        setBackgroundColor(preset.backgroundColor)
        setTextColor(preset.textColor)
        setSecondaryColor(preset.secondaryColor || preset.backgroundColor)
        setBackgroundType(preset.backgroundType || 'solid')
    }, [])

    const handleDownload = useCallback(async (canvas: HTMLCanvasElement | null, setDownloaded: (v: boolean) => void, suffix: string) => {
        if (canvas) {
            const filename = text ? `brat-${text.toLowerCase().replace(/\s+/g, '-')}-${suffix}` : `brat-${suffix}`
            await downloadBratImage(canvas, filename)
            setDownloaded(true)
            setTimeout(() => setDownloaded(false), 2000)
        }
    }, [text])

    const handleCopy = useCallback(async (canvas: HTMLCanvasElement | null, setCopied: (v: boolean) => void) => {
        if (canvas) {
            try {
                const blob = await new Promise<Blob | null>((resolve) => {
                    canvas.toBlob((b) => resolve(b), 'image/png')
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
    }, [])

    const handleRandomize = useCallback(() => {
        const phrases = ['vroom vroom', '360', 'bitch', 'club classics', 'mean girls', 'everything is romantic', 'sympathy is a knife', 'talk talk', 'von dutch']
        const keys = Object.keys(colorPresets) as ColorPresetKey[]
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
        const randomPreset = keys[Math.floor(Math.random() * keys.length)]

        setText(randomPhrase)
        handlePresetSelect(randomPreset)
    }, [handlePresetSelect])

    const handleTwitterShare = useCallback(() => {
        const shareText = encodeURIComponent(`I just made this with the Brat Generator Different Colors! 🟢 Check it out:`)
        const url = encodeURIComponent('https://brat-generator.work/brat-generator-different-colors')
        window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${url}`, '_blank')
    }, [])

    const fontColors = [
        { name: 'Pink', color: '#ff2d95' },
        { name: 'Deep Green', color: '#00a651' },
        { name: 'Lime', color: '#8ace00' },
        { name: 'Neon Green', color: '#00ff00' },
        { name: 'Black', color: '#000000' },
        { name: 'Silver', color: '#c0c0c0' },
        { name: 'Baby Blue', color: '#89d8ff' },
        { name: 'Neon Cyan', color: '#00ffff' },
        { name: 'Electric Purple', color: '#9126ff' },
    ]


    return (
        <>
            <Header />
            <main className="bg-[#0d0d0d] min-h-screen text-slate-100 selection:bg-[#8acf00]/30">
                <Container className="py-4 md:py-12">
                    <div className="max-w-6xl mx-auto space-y-4 md:space-y-10">
                        <div className="text-center space-y-2 md:space-y-4 max-w-3xl mx-auto">
                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                <span className="text-[#8acf00]">Brat Generator Different Colors -</span> Green, Pink, Cyan, Black & More
                            </h1>
                            <p className="hidden md:block text-lg text-slate-400 font-mono leading-relaxed max-w-2xl mx-auto">
                                Pick any brat color, type your text, get 3 instant variants - normal, mirrored, and flipped. Use our brat generator different colors for a perfect brat aesthetic image maker. Free download.
                            </p>
                            <div className="hidden md:flex flex-wrap justify-center gap-3 pt-2">
                                <span className="px-3 py-1 bg-[#1c1c1c] border border-[#8acf00] rounded-full text-[11px] font-mono text-[#8acf00]">🟢 Brat Green Original</span>
                                <span className="px-3 py-1 bg-[#1c1c1c] border border-[#8acf00] rounded-full text-[11px] font-mono text-[#8acf00]">🔄 Mirror & Flip Variants</span>
                                <span className="px-3 py-1 bg-[#1c1c1c] border border-[#8acf00] rounded-full text-[11px] font-mono text-[#8acf00]">⬇️ Free Instant Download</span>
                            </div>
                        </div>

                        {/* Daily Prompt */}
                        <div className="bg-[#161616] border border-[#222] p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center justify-between shadow-2xl animate-pulse">
                            <div className="flex items-center gap-2 md:gap-3">
                                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#8acf00]" />
                                <span className="text-xs md:text-sm font-bold uppercase tracking-widest font-syne">Daily Prompt:</span>
                                <span className="text-[#8acf00] font-mono font-bold italic text-sm">&quot;CHAOS&quot;</span>
                            </div>
                            <button onClick={() => setText('CHAOS')} className="text-xs bg-[#8acf00] text-black px-3 py-1 rounded font-bold hover:scale-105 transition-transform font-syne">Use</button>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                            {/* Left: Inputs & Layout */}
                            <div className="space-y-3 md:space-y-6 col-span-2 lg:col-span-1">
                                <div className="space-y-3 md:space-y-4 bg-[#161616] p-3 md:p-6 rounded-xl md:rounded-2xl border border-[#222] hover:border-[#8acf00]/50 transition-colors">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Content</h3>
                                    <div className="space-y-2 md:space-y-3">
                                        <textarea
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            placeholder="Main Text"
                                            className="w-full h-16 md:h-24 p-2 md:p-3 text-base md:text-lg bg-[#0d0d0d] border border-[#333] text-white rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#8acf00]/50 outline-none font-mono"
                                        />
                                        <input
                                            type="text"
                                            value={subtitle}
                                            onChange={(e) => setSubtitle(e.target.value)}
                                            placeholder="Subtitle (Optional)"
                                            className="w-full p-2 md:p-3 bg-[#0d0d0d] border border-[#333] text-white rounded-lg md:rounded-xl outline-none font-mono text-sm md:text-base"
                                        />
                                    </div>
                                    {/* Positioning & Aspect Ratio inline on mobile */}
                                    <div className="grid grid-cols-2 gap-2 pt-1">
                                        <div>
                                            <span className="text-[9px] uppercase font-bold text-slate-500 font-syne">Align</span>
                                            <div className="flex gap-1 mt-1">
                                                {(['left', 'center', 'right'] as Alignment[]).map(align => (
                                                    <button key={align} onClick={() => setAlignment(align)} className={`p-1.5 md:p-2 flex-1 rounded border transition-all ${alignment === align ? 'bg-[#8acf00] text-black border-[#8acf00]' : 'bg-[#0d0d0d] border-[#333] text-slate-400'}`}>
                                                        <MoreHorizontal className="w-3.5 h-3.5 md:w-4 md:h-4 mx-auto" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[9px] uppercase font-bold text-slate-500 font-syne">Vertical</span>
                                            <div className="flex gap-1 mt-1">
                                                {(['top', 'center', 'bottom'] as Valign[]).map(v => (
                                                    <button key={v} onClick={() => setValign(v)} className={`p-1.5 md:p-2 flex-1 rounded border transition-all ${valign === v ? 'bg-[#8acf00] text-black border-[#8acf00]' : 'bg-[#0d0d0d] border-[#333] text-slate-400'}`}>
                                                        <MoreHorizontal className="w-3.5 h-3.5 md:w-4 md:h-4 mx-auto rotate-90" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[9px] uppercase font-bold text-slate-500 font-syne">Aspect Ratio</span>
                                        <div className="flex gap-1 md:gap-2 mt-1">
                                            {(['square', 'story', 'banner'] as AspectRatio[]).map(ratio => (
                                                <button key={ratio} onClick={() => setAspectRatio(ratio)} className={`px-2 py-1.5 md:py-2 flex-1 rounded border text-[10px] uppercase font-bold transition-all ${aspectRatio === ratio ? 'bg-[#8acf00] text-black border-[#8acf00]' : 'bg-[#0d0d0d] border-[#333] text-slate-400 font-syne'}`}>
                                                    {ratio}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle: Aesthetics */}
                            <div className="space-y-3 md:space-y-6 col-span-1 lg:col-span-1">
                                <div className="space-y-3 md:space-y-4 bg-[#161616] p-3 md:p-6 rounded-xl md:rounded-2xl border border-[#222] hover:border-[#8acf00]/50 transition-colors">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Background</h3>
                                    <div className="flex gap-2 p-1 bg-[#0d0d0d] rounded-lg border border-[#333]">
                                        {(['solid', 'gradient'] as BackgroundType[]).map(t => (
                                            <button key={t} onClick={() => setBackgroundType(t)} className={`flex-1 py-1.5 rounded text-[10px] font-bold uppercase font-syne ${backgroundType === t ? 'bg-[#8acf00] text-black' : 'text-slate-500 hover:text-slate-300'}`}>
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                                        <div>
                                            <span className="text-[9px] uppercase font-bold text-slate-500 font-syne">Primary Color</span>
                                            <div className="relative h-8 md:h-10 rounded-lg border border-[#333] mt-1 overflow-hidden" style={{ backgroundColor }}>
                                                <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer scale-150" />
                                            </div>
                                        </div>
                                        {backgroundType === 'gradient' && (
                                            <div className="animate-fade-in">
                                                <span className="text-[9px] uppercase font-bold text-slate-500 font-syne">Secondary Color</span>
                                                <div className="relative h-8 md:h-10 rounded-lg border border-[#333] mt-1 overflow-hidden" style={{ backgroundColor: secondaryColor }}>
                                                    <input type="color" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer scale-150" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-1 md:space-y-2 pt-1 md:pt-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] uppercase font-bold text-slate-500 font-syne">Noise</span>
                                            <span className="text-[10px] font-mono text-[#8acf00]">{(noise * 100).toFixed(0)}%</span>
                                        </div>
                                        <input type="range" min="0" max="0.5" step="0.01" value={noise} onChange={(e) => setNoise(parseFloat(e.target.value))} className="w-full accent-[#8acf00] h-1 bg-[#333] rounded-lg appearance-none cursor-pointer" />
                                    </div>
                                    {/* Typography merged into same card on mobile */}
                                    <div className="border-t border-[#222] pt-3 mt-1">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display mb-2">Typography</h3>
                                        <div className="flex gap-1 md:gap-2">
                                            {(['bold', 'medium', 'light'] as FontWeight[]).map(w => (
                                                <button key={w} onClick={() => setFontWeight(w)} className={`flex-1 py-1 md:py-1.5 rounded border text-[10px] font-bold uppercase font-syne ${fontWeight === w ? 'bg-[#8acf00] text-black border-[#8acf00]' : 'bg-[#0d0d0d] border-[#333] text-slate-400'}`}>
                                                    {w}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="space-y-2 mt-2">
                                            <div className="space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] uppercase font-bold text-slate-500 font-syne">Blur</span>
                                                    <span className="text-[10px] font-mono text-[#8acf00]">{blur}</span>
                                                </div>
                                                <input type="range" min="0" max="10" step="0.1" value={blur} onChange={(e) => setBlur(parseFloat(e.target.value))} className="w-full accent-[#8acf00] h-1 bg-[#333] rounded-lg appearance-none cursor-pointer" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] uppercase font-bold text-slate-500 font-syne">Font Size</span>
                                                    <span className="text-[10px] font-mono text-[#8acf00]">{fontSize}</span>
                                                </div>
                                                <input type="range" min="20" max="400" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-full accent-[#8acf00] h-1 bg-[#333] rounded-lg appearance-none cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Presets & Tools */}
                            <div className="space-y-3 md:space-y-6 col-span-1 lg:col-span-1">
                                <div className="space-y-3 md:space-y-4 bg-[#161616] p-3 md:p-6 rounded-xl md:rounded-2xl border border-[#222] hover:border-[#8acf00]/50 transition-colors">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Presets</h3>
                                    <div className="grid grid-cols-5 md:grid-cols-4 gap-1.5 md:gap-2">
                                        {(Object.keys(colorPresets) as Array<keyof typeof colorPresets>).map(key => (
                                            <button key={key} onClick={() => handlePresetSelect(key)} className={`aspect-square rounded shadow-sm border ${selectedPreset === key ? 'border-[#8acf00] ring-2 ring-[#8acf00] ring-offset-1 md:ring-offset-2 ring-offset-[#161616]' : 'border-[#333]'}`} style={{ backgroundColor: colorPresets[key].backgroundColor }} />
                                        ))}
                                    </div>
                                    <button onClick={handleRandomize} className="w-full py-2 md:py-2.5 bg-indigo-600 text-white rounded-lg md:rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 transition-all font-syne">
                                        <Sparkles className="w-3.5 h-3.5" /> Randomize
                                    </button>
                                    {/* Sticker + Share merged into same card */}
                                    <div className="border-t border-[#222] pt-2 mt-1">
                                        <span className="text-[9px] uppercase font-bold text-slate-500 font-syne">Stickers</span>
                                        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-1.5">
                                            {['', '🍏', '🍎', '⭐', '❤️', '🔥', '✨', '💿', '🕶️'].map(s => (
                                                <button
                                                    key={s}
                                                    onClick={() => setSticker(s)}
                                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg border text-lg md:text-xl flex items-center justify-center transition-all ${sticker === s ? 'bg-[#8acf00] border-[#8acf00]' : 'bg-[#0d0d0d] border-[#333] hover:border-slate-500'}`}
                                                >
                                                    {s === '' ? <MoreHorizontal className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500" /> : s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button onClick={handleTwitterShare} className="w-full py-2 md:py-2.5 bg-[#1DA1F2] text-white rounded-lg md:rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 shadow-lg shadow-blue-900/20 transition-all font-syne">
                                        <Share2 className="w-3.5 h-3.5" /> Post to X / Twitter
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Previews */}
                        <div className="pt-6 md:pt-12 border-t border-[#222]">
                            <div className="flex items-center justify-between mb-4 md:mb-8">
                                <h2 className="text-lg md:text-2xl font-bold font-display tracking-tight text-[#8acf00]">THE VERSIONS</h2>
                                <span className="bg-[#8acf00] text-black px-2 md:px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest font-syne">Live Preview</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 md:gap-8">
                                {[
                                    { ref: canvasRef1, label: 'Normal', setD: setDownloaded1, d: downloaded1, setC: setCopied1, c: copied1 },
                                    { ref: canvasRef2, label: 'Mirror', setD: setDownloaded2, d: downloaded2, setC: setCopied2, c: copied2 },
                                    { ref: canvasRef3, label: 'Upside Down', setD: setDownloaded3, d: downloaded3, setC: setCopied3, c: copied3 }
                                ].map((item, idx) => (
                                    <div key={idx} className="space-y-2 md:space-y-4">
                                        <div className="bg-[#161616] rounded-lg md:rounded-2xl overflow-hidden shadow-2xl border border-[#222] relative group transition-all hover:scale-[1.02] hover:border-[#8acf00]/50">
                                            <div className="absolute top-1.5 left-1.5 md:top-4 md:left-4 z-10 bg-[#8acf00] text-black px-1.5 py-0.5 md:px-2 md:py-1 rounded text-[7px] md:text-[9px] font-black uppercase tracking-widest font-syne">
                                                {item.label}
                                            </div>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <canvas ref={item.ref} className="max-w-full h-auto p-1.5 md:p-4" />
                                            </div>
                                        </div>
                                        <div className="flex gap-1 md:gap-2">
                                            <button onClick={() => handleDownload(item.ref.current, item.setD, (idx + 1).toString())} className="flex-1 py-2 md:py-3 bg-[#8acf00] text-black rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold hover:bg-[#7ab800] transition-all flex items-center justify-center gap-1 md:gap-2 font-syne">
                                                <Download className="w-3 h-3 md:w-4 md:h-4" /> {item.d ? '✓' : 'Save'}
                                            </button>
                                            <button onClick={() => handleCopy(item.ref.current, item.setC)} className="px-2 md:px-4 py-2 md:py-3 bg-[#161616] text-white border border-[#222] rounded-lg md:rounded-xl hover:bg-[#222] transition-all">
                                                {item.c ? <Check className="w-3 h-3 md:w-4 md:h-4 text-[#8acf00]" /> : <Palette className="w-3 h-3 md:w-4 md:h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image 1: Color Variants Showcase */}
                        <section className="pt-16 flex flex-col items-center">
                            <figure className="w-full max-w-[560px] space-y-4">
                                <svg
                                    width="560"
                                    height="180"
                                    viewBox="0 0 560 180"
                                    className="w-full h-auto rounded-[12px] border border-[#222] bg-[#111111]"
                                    aria-label="Brat generator color options - all 9 background colors including original brat green"
                                >
                                    <title>Brat Generator Different Colors - Choose from 9 brat aesthetic backgrounds</title>
                                    <text x="50%" y="25" textAnchor="middle" fill="#555" fontSize="10" letterSpacing="3" fontFamily="var(--font-mono)">PICK YOUR BRAT COLOR</text>

                                    <g transform="translate(43, 85)">
                                        {[
                                            { color: '#ff2d78', label: 'hot pink' },
                                            { color: '#1a6b1a', label: 'deep green' },
                                            { color: '#8acf00', label: 'brat green' },
                                            { color: '#00ff41', label: 'neon green' },
                                            { color: '#000000', label: 'pure black' },
                                            { color: '#c0c0c0', label: 'chrome silver' },
                                            { color: '#87ceeb', label: 'baby blue' },
                                            { color: '#00e5ff', label: 'neon cyan' },
                                            { color: '#9b59b6', label: 'electric purple' },
                                        ].map((item, i) => (
                                            <g key={i} transform={`translate(${i * 54}, 0)`}>
                                                <circle cx="20" cy="20" r="20" fill={item.color} stroke="#333" strokeWidth="1" />
                                                <text x="20" y="55" textAnchor="middle" fill="#8acf00" fontSize="9" opacity="0.7" fontFamily="var(--font-mono)">{item.label}</text>
                                            </g>
                                        ))}
                                    </g>
                                </svg>
                                <figcaption className="text-center text-[11px] text-slate-500 font-mono">
                                    All 9 background colors available — including the original Charli XCX brat green #8acf00
                                </figcaption>
                            </figure>
                        </section>

                        {/* Image 2: 3 Variants Preview */}
                        <section className="pt-12 flex flex-col items-center">
                            <figure className="w-full max-w-[560px] space-y-4">
                                <svg
                                    width="560"
                                    height="200"
                                    viewBox="0 0 560 200"
                                    className="w-full h-auto rounded-[12px] border border-[#222] bg-[#111111]"
                                    aria-label="Brat image generator showing normal, mirror, and flip text variants for download"
                                >
                                    <title>Download your brat text image in 3 styles - normal, mirrored, and upside down</title>
                                    <text x="50%" y="30" textAnchor="middle" fill="#555" fontSize="10" letterSpacing="3" fontFamily="var(--font-mono)">3 DOWNLOAD VARIANTS</text>

                                    <g transform="translate(48, 60)">
                                        {/* Normal Card */}
                                        <g transform="translate(0, 0)">
                                            <rect width="140" height="120" rx="6" fill="#8acf00" />
                                            <text x="70" y="68" textAnchor="middle" fill="black" fontSize="22" fontWeight="bold" fontFamily="var(--font-display)">brat</text>
                                            <text x="70" y="140" textAnchor="middle" fill="#8acf00" fontSize="9" letterSpacing="2" fontFamily="var(--font-mono)">NORMAL</text>
                                        </g>
                                        {/* Mirror Card */}
                                        <g transform="translate(156, 0)">
                                            <rect width="140" height="120" rx="6" fill="#8acf00" />
                                            <text x="70" y="68" textAnchor="middle" fill="black" fontSize="22" fontWeight="bold" fontFamily="var(--font-display)" transformOrigin="70 68" transform="scale(-1, 1)">brat</text>
                                            <text x="70" y="140" textAnchor="middle" fill="#8acf00" fontSize="9" letterSpacing="2" fontFamily="var(--font-mono)">MIRROR</text>
                                        </g>
                                        {/* Flip Card */}
                                        <g transform="translate(312, 0)">
                                            <rect width="140" height="120" rx="6" fill="#8acf00" />
                                            <text x="70" y="68" textAnchor="middle" fill="black" fontSize="22" fontWeight="bold" fontFamily="var(--font-display)" transformOrigin="70 68" transform="rotate(180)">brat</text>
                                            <text x="70" y="140" textAnchor="middle" fill="#8acf00" fontSize="9" letterSpacing="2" fontFamily="var(--font-mono)">FLIP</text>
                                        </g>
                                    </g>
                                </svg>
                                <figcaption className="text-center text-[11px] text-slate-500 font-mono">
                                    Generate all 3 variants in one click - download each separately as PNG
                                </figcaption>
                            </figure>
                        </section>

                        {/* Features Section */}
                        <section className="pt-20 space-y-12">
                            <h2 className="text-3xl font-bold font-display tracking-tight text-center text-[#8acf00]">Why Use This Brat Color Generator?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { icon: Palette, title: '9 Unique Colors', desc: 'From original brat green to neon pink, black, and silver.' },
                                    { icon: RotateCcw, title: '3 Instant Variants', desc: 'Normal, mirror, and flip — all generated from one input.' },
                                    { icon: Download, title: 'Free PNG Download', desc: 'Download your brat image instantly, no account required.' },
                                    { icon: Smartphone, title: 'Mobile Friendly', desc: 'Works perfectly on phone — tap, swipe, download in seconds.' }
                                ].map((feature, i) => (
                                    <div key={i} className="bg-[#161616] border border-[#222] rounded-[10px] p-[18px] transition-colors hover:border-[#8acf00] group">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-[#0d0d0d] rounded-lg border border-[#222] group-hover:border-[#8acf00]/50 transition-colors">
                                                <feature.icon className="w-5 h-5 text-[#8acf00]" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-display font-bold tracking-tight text-lg text-slate-100">{feature.title}</h3>
                                                <p className="text-sm text-slate-400 font-mono leading-relaxed max-w-[280px]">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="pt-20 pb-12 space-y-12">
                            <h2 className="text-3xl font-bold font-display tracking-tight text-center text-[#8acf00]">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "What colors are available in the brat generator?",
                                        a: "Nine colors are available including the original brat green (#8acf00), deep pink, neon cyan, pure black, and more. All colors match the Charli XCX brat aesthetic."
                                    },
                                    {
                                        q: "What are the mirror and flip variants?",
                                        a: "After generating, you get 3 image versions — normal, horizontally mirrored, and upside down. Swipe between them and download any or all three free."
                                    },
                                    {
                                        q: "Is the brat color generator free to use?",
                                        a: "Yes, completely free — no signup, no watermark, no limit. Just type, pick a color, and download your brat image instantly."
                                    }
                                ].map((faq, i) => (
                                    <div key={i} className="bg-[#161616] border border-[#222] rounded-xl p-6 space-y-3">
                                        <h3 className="text-xl font-display font-bold tracking-tight text-slate-100">{faq.q}</h3>
                                        <p className="text-slate-400 font-mono text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </Container>

                <MoreToolsSection currentTool="colors" />
            </main>
            <Footer />
        </>
    )
}
