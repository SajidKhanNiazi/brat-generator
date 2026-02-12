'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  'aria-label'?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 hover:scale-[1.02] active:scale-[0.98]'

  const variants = {
    primary: 'bg-gradient-to-r from-[#8ACE00] to-lime-500 hover:from-[#9de000] hover:to-lime-400 text-slate-900 focus:ring-[#8ACE00] shadow-lg shadow-[#8ACE00]/25',
    secondary: 'bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-400 hover:to-purple-400 text-white focus:ring-fuchsia-400 shadow-lg shadow-fuchsia-500/25',
    outline: 'border-2 border-[#8ACE00] text-[#8ACE00] hover:bg-[#8ACE00]/10 focus:ring-[#8ACE00]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100' : ''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
