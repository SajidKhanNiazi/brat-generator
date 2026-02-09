'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Sparkles, Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
            <motion.div
              className="p-2 rounded-lg bg-[#8ACE00]"
              whileHover={{ rotate: 12 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
            </motion.div>
            <span className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#8ACE00] transition-all">
              Brat Generator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/#how-it-works"
              className="font-display font-medium text-slate-400 hover:text-[#8ACE00] transition-colors text-sm"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="font-display font-medium text-slate-400 hover:text-[#8ACE00] transition-colors text-sm"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-[#8ACE00] text-slate-900 font-display font-semibold text-sm hover:bg-[#9de000] transition-colors"
            >
              Create Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-slate-800"
            >
              <div className="py-4 space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:bg-slate-800 rounded-lg font-display font-medium transition-colors"
                >
                  🎨 Generator
                </Link>
                <Link
                  href="/#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg font-display transition-colors"
                >
                  📖 How It Works
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg font-display transition-colors"
                >
                  📧 Contact Us
                </Link>
                <div className="pt-2">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block mx-4 px-4 py-3 text-center rounded-lg bg-[#8ACE00] text-slate-900 font-display font-semibold hover:bg-[#9de000] transition-colors"
                  >
                    Create Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
