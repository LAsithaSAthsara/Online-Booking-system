import { Globe, MessageCircleMore, PhoneCall, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/20 bg-slate-900 text-slate-200 dark:border-white/10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold">BusSeat.lk</h3>
          <p className="mt-3 text-sm text-slate-400">Smart Bus Transportation Management System for passengers, operators, and staff in Sri Lanka.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Product</h4>
          <div className="grid gap-2 text-sm text-slate-300">
            <Link to="/book">Book Tickets</Link>
            <Link to="/track">Live Tracking</Link>
            <Link to="/pricing">Operator Pricing</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Company</h4>
          <div className="grid gap-2 text-sm text-slate-300">
            <Link to="/about">About</Link>
            <Link to="/routes">Routes</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Connect</h4>
          <div className="flex items-center gap-3">
            {[Globe, PhoneCall, Send, MessageCircleMore].map((Icon) => (
              <button key={Icon.name} className="rounded-full border border-slate-700 p-2 text-slate-200 transition hover:bg-slate-700" type="button" aria-label={Icon.name}>
                <Icon size={16} />
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">Hotline: +94 11 260 8888</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">© 2026 BusSeat.lk. All rights reserved.</div>
    </footer>
  )
}
