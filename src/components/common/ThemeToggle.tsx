import { MoonStar, Sun } from 'lucide-react'

type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:scale-105 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={14} /> : <MoonStar size={14} />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}
