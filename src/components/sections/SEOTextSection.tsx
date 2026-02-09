'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

export function SEOTextSection() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="prose prose-invert prose-slate max-w-none">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              What is the Brat Generator?
            </h2>
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                The <strong className="text-white">Brat Generator</strong> is an online tool that allows 
                users to create custom images resembling the album cover of Charli XCX&apos;s &quot;Brat.&quot; 
                Users can input their own text to generate an image with the iconic green background 
                and lowercase typography, perfectly mimicking the album&apos;s distinctive design.
              </p>
              <p>
                Whether you&apos;re using the <strong className="text-white">Brat Font Generator</strong>, 
                <strong className="text-white"> Brat Album Cover Maker</strong>, or 
                <strong className="text-white"> Brat Creator</strong>, this tool offers a streamlined 
                way to produce content that resonates with fans of Charli XCX. The instantly recognizable 
                Brat Generator green aesthetic makes it perfect for creating distinctive, bold visuals.
              </p>
              <p>
                While the classic <strong className="text-white">Brat Generator green</strong> (#8ACE00) 
                is the signature background color, our tool also offers different colors including white, 
                black, pink, blue, purple, and more. This expanded color customization provides greater 
                flexibility for your creations.
              </p>
              <p>
                The <strong className="text-white">Brat Generator</strong> is completely free to use - 
                no account needed, no premium features locked behind payments. Simply visit the tool, 
                enter your text, customize your colors, and download your creation instantly. All image 
                processing happens directly in your browser, ensuring your privacy and security.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
