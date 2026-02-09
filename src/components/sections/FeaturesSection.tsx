'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Palette, Zap, Smartphone, Download, Share2, Shield } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Distinctive Visual Appeal',
    description: 'Create images with the iconic lowercase typography and signature Brat green background inspired by Charli XCX\'s album.',
  },
  {
    icon: Zap,
    title: 'Color Customization',
    description: 'Choose from classic Brat green, white, black, pink, and more. Use custom colors to create unique designs.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on any device. Create and download your Brat images on your phone, tablet, or computer.',
  },
  {
    icon: Download,
    title: 'Instant Download',
    description: 'Download high-quality 1080x1080px images perfect for Instagram, TikTok, and other social platforms.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your creations directly to social media or copy to clipboard with a single click.',
  },
  {
    icon: Shield,
    title: '100% Free & Private',
    description: 'No login required, no watermarks. All processing happens in your browser - your data stays private.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Our Brat Generator?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The best free online Brat album cover maker with features designed for creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={feature.title} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8ACE00]/10 border border-[#8ACE00]/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#8ACE00]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
