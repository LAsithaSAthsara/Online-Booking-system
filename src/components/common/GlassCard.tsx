import type { PropsWithChildren } from 'react'

type GlassCardProps = PropsWithChildren<{
  className?: string
}>

export function GlassCard({ className = '', children }: GlassCardProps) {
  return (
    <div className={`rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-blue-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 ${className}`}>
      {children}
    </div>
  )
}
