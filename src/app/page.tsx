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
  AspectRatio,
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
  SlidersHorizontal,
  Zap,
  Image as ImageIcon,
  Eye,
  Gauge,
  Cpu,
  Activity,
  Target,
  Music,
  Sun,
  Layout,
  MessageSquare,
  Smartphone,
  Flame,
  Gem,
  Droplets,
  MousePointerClick,
  Brush,
  Globe,
  Users,
} from 'lucide-react'
import { MoreToolsSection } from '@/components/sections/MoreToolsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { YouTubeVideo } from '@/components/ui/YouTubeVideo'

const PRESET_CHIPS = ['brat summer', 'that girl', 'party girl', 'main character', 'ur so julia'] as const

const ASPECT_RATIOS: Record<AspectRatio, { label: string; icon: string; width: number; height: number; desc: string }> = {
  square: { label: 'Square', icon: '⬜', width: 1080, height: 1080, desc: '1080 × 1080px • Perfect for Instagram' },
  story: { label: 'Story', icon: '📱', width: 1080, height: 1920, desc: '1080 × 1920px • Perfect for TikTok & Reels' },
  banner: { label: 'Banner', icon: '🖥️', width: 1500, height: 500, desc: '1500 × 500px • Perfect for Twitter / X' },
}

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [text, setText] = useState('brat')
  const [backgroundColor, setBackgroundColor] = useState('#8ACE00')
  const [textColor, setTextColor] = useState('#000000')
  const [selectedPreset, setSelectedPreset] = useState<ColorPresetKey>('classic')
  const [canShare, setCanShare] = useState(false)
  const [copied, setCopied] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [bgColorError, setBgColorError] = useState(false)
  const [textColorError, setTextColorError] = useState(false)

  // New feature states
  const [blur, setBlur] = useState(2)
  const [fontSize, setFontSize] = useState(72)
  const [selectedChip, setSelectedChip] = useState<string | null>(null)
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('square')

  // Check if Web Share API is available
  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
  }, [])

  // Generate image whenever settings change (only if colors are valid)
  useEffect(() => {
    if (canvasRef.current && isValidHexColor(backgroundColor) && isValidHexColor(textColor)) {
      generateBratImage(canvasRef.current, {
        text: text || 'brat',
        backgroundColor,
        textColor,
        blur,
        fontSize,
        aspectRatio,
      })
    }
  }, [text, backgroundColor, textColor, blur, fontSize, aspectRatio])

  const handlePresetSelect = useCallback((presetKey: ColorPresetKey) => {
    const preset = colorPresets[presetKey]
    setSelectedPreset(presetKey)
    setBackgroundColor(preset.backgroundColor)
    setTextColor(preset.textColor)
    setBgColorError(false)
    setTextColorError(false)
  }, [])

  // Validate hex color format
  const isValidHexColor = (color: string): boolean => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
  }

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

  const handleChipSelect = useCallback((chip: string) => {
    if (selectedChip === chip) {
      setSelectedChip(null)
    } else {
      setSelectedChip(chip)
      setText(chip)
    }
  }, [selectedChip])

  const handleTextChange = useCallback((value: string) => {
    setText(value)
    setSelectedChip(null)
  }, [])

  // Slider green-fill helper: sets a CSS gradient background on the track
  const getSliderStyle = (value: number, min: number, max: number): React.CSSProperties => {
    const pct = ((value - min) / (max - min)) * 100
    return { background: `linear-gradient(to right, #8ACE00 ${pct}%, #2a2a2a ${pct}%)` }
  }

  const handleDownload = useCallback(async () => {
    if (canvasRef.current) {
      const filename = text ? `brat-${text.toLowerCase().replace(/\s+/g, '-')}` : 'brat-generator'
      await downloadBratImage(canvasRef.current, filename)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2000)
    }
  }, [text])

  const handleShare = useCallback(async () => {
    if (canvasRef.current) {
      const success = await shareBratImage(canvasRef.current, text)
      if (!success) {
        // Fallback: copy to clipboard
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
        {/* Hero + Generator Section */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          {/* Background decorations — hidden on mobile to reduce DOM/paint cost */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#8ACE00]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
          </div>

          <Container className="relative">
            {/* Hero Text */}
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/30 mb-6">
                <Sparkles className="w-4 h-4 text-[#8ACE00]" />
                <span className="text-sm font-medium text-[#8ACE00]">Free Brat Album Cover Maker</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Brat Generator - </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ACE00] via-lime-400 to-green-400">
                  The Official Brat Album Cover Maker
                </span>
              </h1>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Create custom images inspired by Charli XCX&apos;s iconic &quot;Brat&quot; album cover.
                Enter your text, customize colors, and download instantly.
              </p>
            </div>

            {/* Generator Tool */}
            <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <Card className="p-6 sm:p-8 lg:p-10" hover={false}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                  {/* Left: Controls */}
                  <div className="space-y-6 order-2 lg:order-1">
                    {/* Text Input */}
                    <div>
                      <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                        <Type className="w-5 h-5 text-[#8ACE00]" />
                        Enter Your Text
                      </label>
                      <input
                        type="text"
                        id="brat-text-input"
                        value={text}
                        onChange={(e) => handleTextChange(e.target.value)}
                        placeholder="Type your text here..."
                        maxLength={100}
                        aria-label="Enter the text for your Brat image"
                        className="w-full px-4 py-4 rounded-xl bg-slate-900/70 border border-slate-700 text-white text-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#8ACE00] focus:border-transparent transition-all"
                      />
                      <p className="text-sm text-slate-500 mt-2">
                        Text automatically converts to lowercase • {text.length}/100
                      </p>
                    </div>

                    {/* Preset Text Chips */}
                    <div className="chips-container">
                      <div className="chips-scroll flex gap-2 overflow-x-auto pb-1">
                        {PRESET_CHIPS.map((chip) => (
                          <button
                            key={chip}
                            onClick={() => handleChipSelect(chip)}
                            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${selectedChip === chip
                              ? 'bg-[#8ACE00] text-black border-[#8ACE00] font-bold'
                              : 'bg-[#1c1c1c] text-[#aaa] border-[#333] hover:border-[#555]'
                              }`}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Brat Blur Slider */}
                    <div>
                      <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                        <Sparkles className="w-5 h-5 text-[#8ACE00]" />
                        Brat Blur
                        <span className="ml-auto text-sm font-mono text-[#8ACE00]">✦ {blur}</span>
                      </label>
                      <input
                        type="range"
                        min={0}
                        max={10}
                        step={1}
                        value={blur}
                        onChange={(e) => setBlur(parseInt(e.target.value))}
                        className="brat-slider w-full"
                        style={getSliderStyle(blur, 0, 10)}
                        aria-label="Adjust text blur amount"
                      />
                    </div>

                    {/* Text Size Slider */}
                    <div>
                      <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                        <SlidersHorizontal className="w-5 h-5 text-[#8ACE00]" />
                        Text Size
                        <span className="ml-auto text-sm font-mono text-[#8ACE00]">✦ {fontSize}px</span>
                      </label>
                      <input
                        type="range"
                        min={20}
                        max={120}
                        step={1}
                        value={fontSize}
                        onChange={(e) => setFontSize(parseInt(e.target.value))}
                        className="brat-slider w-full"
                        style={getSliderStyle(fontSize, 20, 120)}
                        aria-label="Adjust text font size"
                      />
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
                                  <Check
                                    className="w-5 h-5"
                                    style={{ color: preset.textColor }}
                                  />
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
                        {/* Background Color */}
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

                        {/* Text Color */}
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
                        aria-label="Download your Brat image"
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
                      <div suppressHydrationWarning>
                        <Button
                          onClick={handleShare}
                          variant="secondary"
                          size="lg"
                          className="flex-1 w-full"
                          aria-label="Share or copy your Brat image"
                        >
                          {copied ? (
                            <>
                              <Check className="w-5 h-5 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Share2 className="w-5 h-5 mr-2" />
                              <span suppressHydrationWarning>{canShare ? 'Share' : 'Copy Image'}</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Preview */}
                  <div className="order-1 lg:order-2">
                    <label className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                      <Sparkles className="w-5 h-5 text-[#8ACE00]" />
                      Live Preview
                    </label>
                    <div
                      className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-700"
                      style={{
                        aspectRatio: `${ASPECT_RATIOS[aspectRatio].width} / ${ASPECT_RATIOS[aspectRatio].height}`,
                        maxHeight: aspectRatio === 'story' ? '480px' : undefined,
                      }}
                    >
                      <canvas
                        ref={canvasRef}
                        width={ASPECT_RATIOS[aspectRatio].width}
                        height={ASPECT_RATIOS[aspectRatio].height}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Aspect Ratio Toggle */}
                    <div className="mt-4 flex justify-center">
                      <div className="inline-flex gap-1 p-1 rounded-xl border border-[#333] bg-[#111]">
                        {(Object.keys(ASPECT_RATIOS) as AspectRatio[]).map((ratio) => {
                          const cfg = ASPECT_RATIOS[ratio]
                          const isActive = aspectRatio === ratio
                          return (
                            <button
                              key={ratio}
                              onClick={() => setAspectRatio(ratio)}
                              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg text-xs font-medium transition-all ${isActive
                                ? 'border border-[#8ACE00] text-[#8ACE00] bg-[#1a2200]'
                                : 'border border-transparent text-[#888] bg-transparent hover:text-white'
                                }`}
                            >
                              <span className="text-base leading-none">{cfg.icon}</span>
                              <span>{cfg.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-3">
                      {ASPECT_RATIOS[aspectRatio].desc}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        {/* Intro Section */}
        <section className="py-24 border-b border-slate-800 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#8ACE00]/[0.03] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-fuchsia-500/[0.02] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

          <Container>
            <div className="max-w-5xl mx-auto relative">
              {/* Header area */}
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/20 text-[#8ACE00] text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  Free Online Tool &mdash; No Signup Required
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
                  <span className="text-white">What is </span>
                  <span className="bg-gradient-to-r from-[#8ACE00] to-emerald-400 bg-clip-text text-transparent">Brat Generator</span>
                  <span className="text-white">?</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                  The fastest way to create bold, iconic Charli XCX-inspired visuals. Type, customize, and download &mdash; all in seconds.
                </p>
              </div>

              {/* Two-column premium cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="group relative p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/40 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8ACE00]/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#8ACE00]/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-[#8ACE00]" />
                      </div>
                      <h3 className="text-lg font-bold text-white">Your Creative Powerhouse</h3>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-[#8ACE00]/20 via-slate-700 to-transparent mb-4" />
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Welcome, Brat Generator, your all-in-one tool to transform any text into bratty, bold, and instantly iconic art. As a free brat generator and unique brat font maker, it&apos;s the fastest way to capture the viral brat summer vibe with full power to create eye-catching, share-worthy designs in seconds. From my experience working with trending visuals, I&apos;ve seen how this simple, fun, online tool helps people type their text, pick eye-catching colors, and instantly turn any idea into a share-ready design. Whether you&apos;re designing something crafted with a minimal, unapologetic energy inspired by Charli XCX&apos;s aesthetic or remixing the feel of her iconic album cover, this free brat generator makes it feel effortless.
                    </p>
                  </div>
                </div>

                <div className="group relative p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40 rounded-2xl border border-slate-800 hover:border-fuchsia-500/40 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center">
                        <Flame className="w-5 h-5 text-fuchsia-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">Built for Creators</h3>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-fuchsia-500/20 via-slate-700 to-transparent mb-4" />
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Many users call it a brat typer because it quickly converts words into visual art, perfect for creating memes, covers, and playful graphics. This brat website is built for creative freedom, so you don&apos;t need design skills or worry about limits. Some people come here searching for a brag generator, but what they really find is an all-in-one brat maker that works directly in the browser. It is dedicated, focuses on speed, simplicity, and high-quality output, making it perfect for social media creators, music fans, and anyone who wants their content to stand out. From casual fun to social media styling, it delivers professional-quality branding visuals linked to a global trend, offering free, fast, and built for endless creativity with true standout visuals every time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-5 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                  <div className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-[#8ACE00] to-emerald-400 bg-clip-text text-transparent mb-1">100K+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Happy Users</div>
                </div>
                <div className="text-center p-5 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                  <div className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-1">1M+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Images Created</div>
                </div>
                <div className="text-center p-5 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                  <div className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-1">4.9 ★</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">User Rating</div>
                </div>
                <div className="text-center p-5 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                  <div className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Free Forever</div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* How to Use Section */}
        <section className="py-16 sm:py-24 border-b border-slate-800">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6 text-center sm:text-left">
                How to Use Brat Generator
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-12 text-center sm:text-left">
                If you are using a brat text generator, you will notice how simple it feels to follow the given steps and create unique images. From my experience, the Brat Generator truly shows its simplicity because it quickly and effortlessly transforms custom text into bold, album-inspired visuals, almost like digital Brat merchandise. The generator works fully in English, does not require any setup, and many users prefer the brat generator English version that runs directly in the browser without downloads or restrictions. You can even check the simple infographic to better understand how to use brat the right way.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8ACE00] text-black flex items-center justify-center text-sm font-black">1</span>
                    Step 1: Select a Background and Text Color
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    In the first step, Select a Background and Text Color. Choose a background and text overlay color for your Brat cover. You can pick popular brat colors like green, white, or black, or go with a custom color from the color palette. This helps you personalize the image and make it uniquely yours using the available options.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8ACE00] text-black flex items-center justify-center text-sm font-black">2</span>
                    Step 2: Enter Your Text
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Now Enter Your Text. Visit the website, type your desired text into the input field, and set the base for your custom design. In this next step, add any bratty text you want to show, whether it’s a phrase, joke, quote, or any feeling you have.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8ACE00] text-black flex items-center justify-center text-sm font-black">3</span>
                    Step 3: Customize and Generate
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Go to Customize the Style and adjust the font color or background color if needed. Then Generate image by clicking Generate to see a preview. Make small adjustments until you are satisfied with the result. This is where your design starts to feel complete.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8ACE00] text-black flex items-center justify-center text-sm font-black">4</span>
                    Step 4: Download or Share
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    After finalizing, you can Download or Share your work. Download the image to your device, copy it to your clipboard, or share directly on social media platforms. You can Share the Creation, easily share your Brat-style creation on your favorite platforms like Instagram, Twitter, or Facebook. Spreading bratty images is now quicker and more fun — there is no need to download first, just create, click, and post.
                  </p>
                </div>
              </div>

              {/* YouTube Video Demo */}
              <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="max-w-3xl mx-auto">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/10 group">
                    <YouTubeVideo videoId="-dPbs5lounM" />
                  </div>
                  <p className="text-center text-sm text-slate-500 mt-4 italic">
                    Watch our quick video guide to master the Brat aesthetic!
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* All About Section */}
        < section className="py-20 border-b border-slate-800" >
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  All about Brat Generator you need to know
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Distinctive Visual Appeal */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8ACE00]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Gem className="w-6 h-6 text-[#8ACE00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Distinctive Visual Appeal</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    Embark on a journey of self-expression and design with the Brat Generator, a captivating creative tool that empowers you to channel your inner artist while celebrating the bold aesthetic of Charli XCX. From my hands-on work with visual tools, I’ve seen how crafting custom memes, personalizing album-inspired covers, and exploring vibrant colors combines the thrill of artistic freedom with real satisfaction and playful creativity. The distinctive visual appeal comes from its iconic, minimalistic design, mimicking lowercase typography and the green background of the “Brat” album cover, creating a unique visual identity. Whether you use Brat Font Generator, Brat Album Cover Maker, or Brat Creator, it’s a streamlined way to produce content that resonates with fans, is instantly recognizable, and reflects the Brat Generator Green aesthetic that users value for distinctive, bold visuals and personalized image customization.
                  </p>
                </div>

                {/* Color Additions */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Droplets className="w-6 h-6 text-fuchsia-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Color Additions</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    With Color Additions, the classic Brat Generator Green signature background now meets newer versions like <Link href="/brat-generator-different-colors" className="text-[#8ACE00] hover:underline">Brat Generator Different Colors</Link>, offering expanded customization options. You can select green, white, or other hues, giving greater flexibility to your creations. I’ve tested the Brat Generator Charli XCX Free tool while exploring the Brat Generation Gratis version, and the addition of colors clearly broadens the artistic scope of the generator.
                  </p>
                </div>

                {/* Interactive Engagement */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MousePointerClick className="w-6 h-6 text-sky-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Interactive Engagement</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    Through Interactive Engagement, the tool fosters creative participation by making it easy to create personalized designs. Social media users love sharing Brat Generator Memes, drawn to the engaging, playful aesthetic. From Brat Maker to Brat Generator, the simplicity of the platform helps first-time users interact meaningfully with Charli XCX’s visual legacy, creating viral, shareable content.
                  </p>
                </div>

                {/* Artistic Exploration */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Brush className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Artistic Exploration</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    For Artistic Exploration, artists and fans see the tool as it serves a canvas for artistic exploration. Using Brat Album Cover Maker, it inspires creativity by replicating the style of the “Brat” album while letting users experiment with custom text, brat generator different colors, and <a href="https://www.alternativedesigns.net/" target="_blank" rel="noopener noreferrer" className="text-[#8ACE00] hover:underline">alternative designs</a>. This freedom lets fans reimagine their own “Brat” narratives, producing engaging visuals that reflect true individuality.
                  </p>
                </div>

                {/* Cultural Reach */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Cultural Reach</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Cultural Reach of the tool transcends boundaries with strong global appeal. From Brat Generator Gratis for Spanish-speaking users to the universally accessible Brat Font Generator, it has sparked a worldwide trend. Its association with Charli XCX Brat Generator connects fans across different cultures, forming a shared visual language rooted in the artist’s branding, while Brat Generator remains popular in regions that value creative, free-to-use tools.
                  </p>
                </div>

                {/* Community Logo */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Community Logo</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    As a Community Logo solution, Brat Creator can be repurposed to design unique community logos and group identities. Its minimalist style and options like Brat Generator Different Colors make it a practical choice for team branding and fan clubs. With the Brat Generator Charli XCX Free version, communities can build identity around an album-inspired design while maintaining a personal touch.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section >

        {/* Features Section */}
        < section className="py-20 border-b border-slate-800 bg-slate-900/10" >
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Features of Brat Generator
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Brat Generator is an easy-to-use online tool that lets users create bold images inspired by the iconic style of Charli XCX’s “Brat” album cover, using bright green backgrounds and clean lowercase text. It quickly turns simple words into eye-catching visuals that are perfect for memes, social media posts, and creative content without needing any design skills.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Ease of Use */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8ACE00]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-[#8ACE00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Ease of Use</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Ease of Use inside Features of Brat Generator makes it perfect even if you are not a designer. With the Easy of Use icon, the tool feels super easy and straightforward because of its simple design. You just type your bratty messages, pick your favourite colors, and click generate. This brat generation tool requires No Sign-up and No Subscription, making it completely free of cost. Just open the website and start creating your personalized Brat covers by entering funny quotes, bratty words, or random thoughts, all about showing off your bratty style.
                  </p>
                </div>

                {/* Image Quality */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-6 h-6 text-fuchsia-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Image Quality</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Image Quality Icon ensures every generated image comes in high-quality resolution and stays sharp, even when you share it on social media or save it for later.
                  </p>
                </div>

                {/* Real-Time Preview */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8ACE00]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Eye className="w-6 h-6 text-[#8ACE00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Real-Time Preview</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Real-Time Preview Icon lets you view a live preview of your creation, so you can tweak the final look and see results instantly before downloading brat pic.
                  </p>
                </div>

                {/* High Speed */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Gauge className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">High Speed</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The High Speed Icon provides an Instant Result, giving you the image in a second after hitting the generate button. There are no loading screens, no waiting around, and no advertisements, which saves time.
                  </p>
                </div>

                {/* Resource Efficiency */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Cpu className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Resource Efficiency</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Resource Efficiency Icon highlights how Brat generator anomali is a lightweight tool that runs smoothly in a browser without using the device&apos;s memory or slowing down the machine. It uses no resources but delivers quality work.
                  </p>
                </div>

                {/* Custom Colors */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Palette className="w-6 h-6 text-fuchsia-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Custom Colors</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Custom Colors Icon allows you to choose a unique color from the color palette, add a hex code in the color input box, or use default colors to make a cover unique.
                  </p>
                </div>

                {/* Strong Output */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8ACE00]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Activity className="w-6 h-6 text-[#8ACE00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Strong Output</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Strong Output system supports fast brat generator typing, so you see results quickly. Some users call it a brat type generator or brat writing generator, because it focuses on turning simple words into strong visual output.
                  </p>
                </div>

                {/* Share to Social Media */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Share2 className="w-6 h-6 text-sky-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Share to Social Media</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    With the Share to Social Media Icon, you can Share to Social Media without downloading to your device first. Simply post to Facebook or TikTok by directly uploading with a single click.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section >

        {/* Aesthetic Section */}
        < section className="py-20 border-b border-slate-800 bg-slate-900/10" >
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Why the Brat Aesthetic Stands Out
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  The Brat aesthetic stands out because of its bold green color, simple layout, and strong lowercase typography that instantly catches attention. Inspired by Charli XCX’s “Brat” era, it feels confident, modern, and rebellious, making it perfect for today’s fast-moving social media world.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Bold and Instant Recognizable */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8ACE00]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-[#8ACE00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Bold and Instant Recognizable</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Brat aesthetic immediately stands out with its high-impact simplicity. Unlike complex graphics, it uses strong color contrast and clean typography to grab attention immediately. This makes it very effective in crowded digital feeds, where viewers decide in seconds what to notice.
                  </p>
                </div>

                {/* Inspired by Pop Culture Energy */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Music className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Inspired by Pop Culture Energy</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    Its popularity comes from the cultural impact of Charli XCX during the Brat era, creating a confident, edgy visual identity. The style is rooted in modern pop culture, so creators and fans naturally gravitate toward it to stay on trend.
                  </p>
                </div>

                {/* The Power of Brat Green */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8ACE00]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sun className="w-6 h-6 text-[#8ACE00]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">The Power of Brat Green</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The signature lime-green tone is the heartbeat of the Brat aesthetic. Bright, unconventional, and impossible to overlook, it helps designs stand out instantly, boosts visibility, and communicates energy and boldness, defining the rebellious personality of the Brat vibe.
                  </p>
                </div>

                {/* Simple but Iconic Album Design */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Layout className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Simple but Iconic Album Design</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Brat look is memorable because of its restraint. With minimal elements, bold text, and a flat background, the design feels modern and confident rather than busy. This simplicity lets anyone recreate the style and achieve a polished, album-quality result that looks intentional and professional.
                  </p>
                </div>

                {/* Brat Meme Generator Craze */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center"><Link href="/brat-meme-generator" className="hover:text-[#8ACE00] transition-colors">Brat Meme Generator</Link><span className="ml-1.5">Craze</span></h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    Online tools that convert text into Brat-style visuals have fueled the trend’s rapid growth. Users can produce shareable graphics in seconds, making the format popular for memes, reactions, and quick social posts. The easier it is to create, the faster the aesthetic spreads across platforms.
                  </p>
                </div>

                {/* Perfect for Social Media */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6 text-sky-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Perfect for Social Media</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    The Brat style performs extremely well on modern platforms. Bold text is readable even on small screens, and the square-friendly layout fits feeds perfectly. Its scroll-stopping quality makes it a favorite among creators, giving maximum visibility with minimal effort.
                  </p>
                </div>

                {/* Expressive and Playfully Rebellious */}
                <div className="h-full flex flex-col gap-4 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-[#8ACE00]/30 transition-all group">
                  <div className="flex gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Flame className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">Expressive and Playfully Rebellious</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                    At its core, the Brat aesthetic communicates attitude. It feels cheeky, confident, and slightly defiant, traits that appeal to today’s online culture. With its ease of customization, the style attracts both casual users and serious content creators.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section >

        <FAQSection />

        {/* ── Internal Links ── */}
        <MoreToolsSection currentTool="generator" />
      </main >
      <Footer />
    </>
  )
}
