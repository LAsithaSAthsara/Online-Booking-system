import { AlertTriangle, CheckCircle2, Inbox } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

export function StatesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
      <SectionHeader eyebrow="System States" title="Empty, error, and success experiences" subtitle="Production-grade edge state design patterns used across the product." />
      <div className="grid gap-4 md:grid-cols-3">
        <GlassCard>
          <Inbox className="text-slate-500" />
          <h3 className="mt-3 font-semibold">Empty State</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">No bookings found for this date. Try another route or date range.</p>
          <button type="button" className="mt-3 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">Find Trips</button>
        </GlassCard>
        <GlassCard>
          <AlertTriangle className="text-amber-500" />
          <h3 className="mt-3 font-semibold">Error State</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Payment verification failed. Please retry or use another method.</p>
          <button type="button" className="mt-3 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-white">Retry Payment</button>
        </GlassCard>
        <GlassCard>
          <CheckCircle2 className="text-emerald-500" />
          <h3 className="mt-3 font-semibold">Success State</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Your booking is confirmed and QR ticket is ready to download.</p>
          <button type="button" className="mt-3 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white">View Ticket</button>
        </GlassCard>
      </div>
    </div>
  )
}
