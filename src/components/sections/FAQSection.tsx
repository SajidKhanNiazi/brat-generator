'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Brat Generator?',
    answer: 'Brat Generator is an online tool that allows users to create custom images resembling the album cover of Charli XCX\'s "Brat." Users can input their own text to generate an image with a green background and lowercase typography, mimicking the album\'s iconic design.',
  },
  {
    question: 'How do I use the Brat Generator?',
    answer: 'Using Brat Generator is simple. Enter the desired text in the input field above, customize the colors using our presets or color picker, and the tool will instantly generate a custom image in the style of the "Brat" album cover. You can then download or share the image.',
  },
  {
    question: 'Is the Brat Generator free to use?',
    answer: 'Yes, Brat Generator is completely free. Users can create and share as many images as they want without any cost. There are no hidden fees, no premium features, and no account required.',
  },
  {
    question: 'Can I choose different background colors?',
    answer: 'Yes! While the classic green background (#8ACE00) is the signature option, Brat Generator also offers white, black, pink, blue, purple, orange, and mint presets. You can also use the custom color picker to choose any color you want.',
  },
  {
    question: 'Is Brat Generator officially affiliated with Charli XCX?',
    answer: 'No, Brat Generator is not officially affiliated with Charli XCX. It is an independent tool designed to replicate the visual style of her "Brat" album cover for creative and entertainment purposes.',
  },
  {
    question: 'Can I share the generated images on social media?',
    answer: 'Absolutely! The images created with Brat Generator are perfect for sharing on social media platforms like Instagram, TikTok, Twitter, and more. The tool encourages users to engage with the album\'s aesthetic and create viral, shareable content.',
  },
  {
    question: 'What image size does the Brat Generator create?',
    answer: 'Brat Generator creates images at 1080x1080 pixels, which is the perfect square format for Instagram posts, profile pictures, and other social media platforms.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-slate-800 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-white group-hover:text-[#8ACE00] transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 scroll-mt-20">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            FAQ About Brat Generator
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need to know about using the Brat Generator
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto card-gradient backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
