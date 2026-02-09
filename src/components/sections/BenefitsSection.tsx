'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Image, Users, Globe, Brush } from 'lucide-react'

const benefits = [
  {
    icon: Image,
    title: 'Artistic Exploration',
    description: 'Express your creativity by replicating the "Brat" album style while experimenting with custom text and colors.',
  },
  {
    icon: Users,
    title: 'Interactive Engagement',
    description: 'Create shareable Brat memes and engaging content that resonates with Charli XCX fans worldwide.',
  },
  {
    icon: Globe,
    title: 'Cultural Reach',
    description: 'Join a global community of creators using the Brat Generator to create viral, shareable content.',
  },
  {
    icon: Brush,
    title: 'Community & Branding',
    description: 'Design unique community logos or group identities with the minimalist Brat aesthetic.',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              All About Brat Generator
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Embark on a journey of self-expression and design with Brat Generator, a captivating 
              creative tool that empowers you to channel your inner artist while celebrating the 
              bold aesthetic of Charli XCX.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether you&apos;re crafting custom memes, personalizing album-inspired covers, or exploring 
              vibrant colors, Brat Generator combines the thrill of artistic freedom with the 
              satisfaction of playful creativity. The instantly recognizable Brat green aesthetic 
              makes it perfect for users who value distinctive, bold visuals.
            </p>
          </motion.div>

          {/* Benefits cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} delay={index * 0.1} className="p-5">
                <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
