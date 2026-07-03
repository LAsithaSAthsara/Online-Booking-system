import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import type { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type AppLayoutProps = PropsWithChildren<{
  isDark: boolean
  onToggleTheme: () => void
  showFooter?: boolean
}>

export function AppLayout({ isDark, onToggleTheme, showFooter = true, children }: AppLayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-app-gradient text-slate-900 transition-colors duration-300 dark:bg-app-gradient-dark dark:text-slate-100">
      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {showFooter && <Footer />}
    </div>
  )
}
