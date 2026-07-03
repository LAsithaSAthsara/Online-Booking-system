import { Bus, LayoutDashboard, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeToggle } from '../common/ThemeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/routes', label: 'Routes' },
  { to: '/book', label: 'Book Tickets' },
  { to: '/track', label: 'Track Bus' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

type NavbarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <span className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 p-2 text-white">
            <Bus size={16} />
          </span>
          <span>
            <strong className="block text-sm">BusSeat.lk</strong>
            <span className="block text-xs text-slate-500 dark:text-slate-300">Smart Transport OS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <Link
            to="/dashboard/passenger"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <LayoutDashboard size={14} />
            Dashboards
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/20 bg-white/90 px-4 pb-4 dark:border-white/10 dark:bg-slate-950/90 lg:hidden"
          >
            <div className="grid gap-2 pt-3">
              {links.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
              </div>
              <Link
                to="/dashboard/passenger"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white dark:bg-blue-600"
              >
                Open Dashboards
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
