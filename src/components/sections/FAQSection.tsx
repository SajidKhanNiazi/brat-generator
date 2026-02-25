'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '1. What is Brat Generator?',
    answer: 'Brat Generator is an online tool that allows users to create custom images resembling the album cover of Charli XCX’s “Brat.” You can input your own text to generate an image with a green background and lowercase typography mimicking the album’s design.',
  },
  {
    question: '2. How to use Brat Generator?',
    answer: 'Using Brat Generator is simple. Visit the website, enter your desired text in the input field, and the tool will instantly generate a custom image in the style of the “Brat” album cover. You can then download or share the image.',
  },
  {
    question: '3. Is Brat Generator free to use?',
    answer: 'Yes, Brat Generator is completely free. You can create and share many images without any cost.',
  },
  {
    question: '4. Can I choose different backgrounds in Brat Generator?',
    answer: 'The green background is the primary option, but some versions of Brat Generator also offer a white background. Check the tool for all available options.',
  },
  {
    question: '5. Is Brat Generator officially affiliated with Charli XCX?',
    answer: 'No, it is not officially affiliated with Charli XCX. It is an independent tool designed to replicate the visual style of her “Brat” album cover.',
  },
  {
    question: '6. Can I share the generated images on social media?',
    answer: 'Absolutely! The images created with Brat Generator are perfect for sharing on social media platforms. It encourages users to engage with the album’s aesthetic and spread awareness through user-generated content.',
  },
  {
    question: '7. What is a brat generator and how does it work?',
    answer: 'A brat generator is an online tool that creates images in the style of Charli XCX’s brat album cover. You can input custom text, and it generates images with the iconic brat font and brat green background, ideal for brat memes and social media content.',
  },
  {
    question: '8. What is brat summer and why is it popular?',
    answer: 'Brat summer is a cultural phenomenon inspired by Charli XCX’s brat album. The brat aesthetic became viral on social media, with people creating brat album cover style images and memes. The brat generator lets you join this trend with authentic brat styling.',
  },
  {
    question: '9. Is this brat generator really free?',
    answer: 'Yes! This brat generator is completely free to use. You can create unlimited brat memes, download high-quality images, and use them for personal or commercial purposes without watermarks or restrictions.',
  },
  {
    question: '10. What makes your brat generator authentic?',
    answer: 'The brat generator uses the exact typography and brat color scheme from the original brat album. It carefully recreates the authentic brat green background and font styling to ensure covers look like the real thing.',
  },
  {
    question: '11. Can I use different colors besides brat green?',
    answer: 'Yes! While classic brat green is most popular, the brat generator also offers multiple color options like white, black, and variations. You can experiment with different brat color combinations to create unique brat album style images.',
  },
  {
    question: '12. How do I create the perfect brat meme?',
    answer: 'To create great brat memes, keep your text short and impactful, use the classic brat font styling, and choose colors that match the brat aesthetic. The brat generator lets you experiment with different styles until you find the perfect look for your content.',
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 scroll-mt-20">
      <Container>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            FAQs
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
