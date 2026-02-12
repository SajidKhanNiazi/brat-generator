'use client'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <div
      className={`card-gradient backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 ${hover ? 'hover:border-[#8ACE00]/30 hover:glow-green' : ''} transition-all duration-300 animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
