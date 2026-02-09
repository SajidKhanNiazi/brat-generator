'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export function ToolPreviewSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            See the Brat Generator in Action
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Create iconic album cover style images with just a few clicks
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8" hover={false}>
            {/* Demo Preview Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { text: 'brat', bg: '#8ACE00', color: '#000' },
                { text: 'party', bg: '#FF69B4', color: '#000' },
                { text: 'summer', bg: '#00BFFF', color: '#000' },
                { text: 'iconic', bg: '#1a1a1a', color: '#8ACE00' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ backgroundColor: item.bg }}
                >
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ color: item.color }}
                  >
                    <span className="text-xl sm:text-2xl font-bold lowercase">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-slate-400 mt-6">
              The classic Brat green, custom colors, and endless possibilities
            </p>
          </Card>
        </div>
      </Container>
    </section>
  )
}
