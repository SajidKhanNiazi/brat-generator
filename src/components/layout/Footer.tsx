import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Sparkles, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-20">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#8ACE00]">
              <Sparkles className="w-4 h-4 text-slate-900" />
            </div>
            <span className="font-display font-bold text-lg text-white">
              Brat Generator
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#8ACE00] transition-colors">
              Generator
            </Link>
            <Link href="#how-it-works" className="hover:text-[#8ACE00] transition-colors">
              How It Works
            </Link>
            <Link href="#faq" className="hover:text-[#8ACE00] transition-colors">
              FAQ
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#8ACE00] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Brat Generator. Not affiliated with Charli XCX.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for creative people
          </p>
        </div>
      </Container>
    </footer>
  )
}
