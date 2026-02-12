'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '1. What is a Brat Generator?',
    answer: 'A Brat Generator is an online tool that helps you create brat-style text instantly. You simply enter your text, and the tool generates the brat version for you to use anywhere online.',
  },
  {
    question: '2. How does the Brat Generator work?',
    answer: 'The Brat Generator works by transforming normal text into a brat-style format automatically. You just type or paste your text, and the result appears instantly without any extra steps.',
  },
  {
    question: '3. Is this Brat Generator free to use?',
    answer: 'Yes, this Brat Generator is completely free to use. You can generate brat text as many times as you want without paying anything.',
  },
  {
    question: '4. Do I need to sign up to use the Brat Generator?',
    answer: 'No, you do not need to sign up or create an account. You can use the Brat Generator directly without any registration.',
  },
  {
    question: '5. Where can I use the generated Brat text?',
    answer: 'You can use the generated brat text on social media platforms like Instagram, TikTok, or anywhere you want to share creative or fun text online.',
  },
  {
    question: '6. Can I copy and paste the Brat text easily?',
    answer: 'Yes, the Brat Generator allows you to easily copy the generated brat text and paste it wherever you need without any formatting issues.',
  },
  {
    question: '7. Does the Brat Generator work on mobile devices?',
    answer: 'Yes, the Brat Generator is mobile-friendly and works smoothly on smartphones, tablets, and desktop devices.',
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
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="pb-5 text-slate-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 scroll-mt-20">
      <Container>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            FAQ About Brat Generator
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need to know about using the Brat Generator
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto card-gradient backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
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
        </div>
      </Container>
    </section>
  )
}
