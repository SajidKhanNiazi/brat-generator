'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Type, Palette, Download } from 'lucide-react'
import { YouTubeVideo } from '@/components/ui/YouTubeVideo'

const steps = [
  {
    icon: Type,
    title: 'Enter Your Text',
    description: 'Visit the Brat Generator and type your desired text into the input field. This will serve as the base for your custom design.',
    color: 'from-[#8ACE00] to-lime-500',
  },
  {
    icon: Palette,
    title: 'Customize the Style',
    description: 'Adjust the font color or background color using the available presets or custom color picker to personalize your image.',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Download,
    title: 'Download or Share',
    description: 'After finalizing your design, download the image to your device or share it directly on social media platforms.',
    color: 'from-amber-500 to-orange-500',
  },
]

export function HowToUseSection() {
  return (
    <section id="how-it-works" className="py-20 scroll-mt-20">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            How to Use Brat Generator
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Creating your own Brat album cover style image is easy. Just follow these three simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} delay={index * 0.15} className="relative">
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <span className="font-display font-bold text-[#8ACE00]">{index + 1}</span>
              </div>

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <step.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* YouTube Video Demo */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/10 group">
              <YouTubeVideo videoId="-dPbs5lounM" />
            </div>
            <p className="text-center text-sm text-slate-500 mt-4 italic">
              Watch our quick video guide to master the Brat aesthetic!
            </p>
          </div>
        </div>
      </Container>



    </section>
  )
}
