'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="p-2 rounded-lg bg-[#8ACE00]"
              whileHover={{ rotate: 12 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="w-5 h-5 text-slate-900" />
            </motion.div>
            <span className="font-display font-bold text-xl text-white group-hover:text-[#8ACE00] transition-all">
              Brat Generator
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="#how-it-works"
              className="hidden sm:block font-display font-medium text-slate-400 hover:text-[#8ACE00] transition-colors text-sm"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="hidden sm:block font-display font-medium text-slate-400 hover:text-[#8ACE00] transition-colors text-sm"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-[#8ACE00] text-slate-900 font-display font-semibold text-sm hover:bg-[#9de000] transition-colors"
            >
              Create Now
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
