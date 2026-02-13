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
  ChevronDown,
} from 'lucide-react'
import { MoreToolsSection } from '@/components/sections/MoreToolsSection'

// Lazy-load below-fold sections — they don't need to block FCP/LCP
const SEOTextSection = dynamic(
  () => import('@/components/sections/SEOTextSection').then(mod => ({ default: mod.SEOTextSection })),
  { ssr: true }
)
const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })),
  { ssr: true }
)

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
                <span className="text-white">Brat Generator – </span>
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
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type your text here..."
                        maxLength={100}
                        aria-label="Enter the text for your Brat image"
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
                      <Button
                        onClick={handleShare}
                        variant="secondary"
                        size="lg"
                        className="flex-1"
                        aria-label={canShare ? 'Share your Brat image' : 'Copy Brat image to clipboard'}
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
          </Container>
        </section>

        {/* SEO Content Section — lazy loaded */}
        <SEOTextSection />

        {/* FAQ Section — lazy loaded */}
        <FAQSection />

        {/* ── Internal Links ── */}
        <MoreToolsSection currentTool="generator" />
      </main>
      <Footer />
    </>
  )
}
