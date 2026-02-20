'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Sparkles, Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: '/', label: 'Generator', mobileIcon: '🎨' },
    { href: '/brat-lyric-generator', label: 'Lyric Generator', mobileIcon: '🎵' },
    { href: '/brat-meme-generator', label: 'Meme Generator', mobileIcon: '😈' },
    { href: '/brat-generator-different-colors', label: 'Brat Colors', mobileIcon: '🌈' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0 transition-transform group-hover:rotate-6">
              <img src="/logo.svg" alt="Brat Generator Logo" className="w-full h-full" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#8ACE00] transition-all">
              Brat Generator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = mounted && pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-display font-medium text-sm transition-colors ${isActive
                    ? 'bg-[#8ACE00]/10 text-[#8ACE00]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-slate-800 transition-colors active:bg-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Menu — CSS transition instead of framer-motion AnimatePresence */}
        <div
          className={`md:hidden overflow-hidden border-t border-slate-800 transition-all duration-200 ease-in-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-t-0'
            }`}
        >
          <div className="py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = mounted && pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-display font-medium transition-colors min-h-[48px] ${isActive
                    ? 'bg-[#8ACE00]/10 text-[#8ACE00]'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white active:bg-slate-700'
                    }`}
                >
                  <span className="text-lg">{link.mobileIcon}</span>
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </header>
  )
}
