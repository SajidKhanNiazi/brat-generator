'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Sparkles, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8ACE00]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ACE00]/10 border border-[#8ACE00]/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#8ACE00]" />
            <span className="text-sm font-medium text-[#8ACE00]">Free Brat Album Cover Maker</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Brat Generator</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ACE00] via-lime-400 to-green-400">
              Create Your Own Brat Album Cover
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create custom images inspired by Charli XCX&apos;s iconic &quot;Brat&quot; album cover. 
            Enter your text, customize colors, and download or share your creation instantly.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/brat-generator">
              <Button size="lg" className="group">
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg">
                How It Works
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-slate-500">Free to Use</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-white">Instant</div>
              <div className="text-sm text-slate-500">Download</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-white">8+</div>
              <div className="text-sm text-slate-500">Color Presets</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
