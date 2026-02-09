import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Sparkles, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-20">
      <Container className="py-8 sm:py-12">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="p-2 rounded-lg bg-[#8ACE00]">
            <Sparkles className="w-4 h-4 text-slate-900" />
          </div>
          <span className="font-display font-bold text-lg text-white">
            Brat Generator
          </span>
        </div>

        {/* Links Section - Mobile Stack */}
        <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 max-w-md mx-auto mb-8">
          {/* Legal Section */}
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
              Legal
            </span>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/privacy-policy" className="text-slate-400 hover:text-[#8ACE00] transition-colors py-1">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-[#8ACE00] transition-colors py-1">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-[#8ACE00] transition-colors py-1">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="text-slate-400 hover:text-[#8ACE00] transition-colors py-1">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
              Support
            </span>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/contact" className="text-slate-400 hover:text-[#8ACE00] transition-colors py-1">
                Contact Us
              </Link>
              <Link href="/#how-it-works" className="text-slate-400 hover:text-[#8ACE00] transition-colors py-1">
                How It Works
              </Link>
              <Link href="/" className="text-slate-400 hover:text-[#8ACE00] transition-colors py-1">
                Generator
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-slate-800 space-y-2 text-center">
          <p className="text-xs text-slate-500 leading-relaxed">
            © {currentYear} Brat Generator
          </p>
          <p className="text-xs text-slate-500">
            Not affiliated with Charli XCX
          </p>
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for creative people
          </p>
        </div>
      </Container>
    </footer>
  )
}
