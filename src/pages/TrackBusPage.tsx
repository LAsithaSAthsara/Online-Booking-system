import { motion } from 'framer-motion'
import { BusFront, Gauge, MapPinned, Timer } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { trackingStops } from '../data/mockData'

export function TrackBusPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-14 md:px-6">
      <SectionHeader eyebrow="Live Tracking" title="Track your bus in real time" subtitle="Operator telemetry, ETA predictions, and trip timeline in one view." />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <GlassCard>
          <div className="relative h-[350px] overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-200 to-blue-100 dark:from-slate-900 dark:to-blue-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4),_transparent_40%)]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 380" fill="none">
              <path d="M40 300 C200 50, 520 70, 760 290" stroke="rgba(37,99,235,0.6)" strokeWidth="8" strokeLinecap="round" strokeDasharray="14 14" />
            </svg>
            <motion.div
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '75%' }}
              transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute left-0 top-0"
              style={{ offsetPath: 'path("M40 300 C200 50, 520 70, 760 290")' }}
            >
              <div className="rounded-full bg-blue-600 p-3 text-white shadow-lg shadow-blue-600/30">
                <BusFront size={20} />
              </div>
            </motion.div>
            <div className="absolute left-5 top-5 rounded-xl bg-white/80 px-3 py-2 text-xs dark:bg-slate-900/80">Current: Aluthgama</div>
          </div>
        </GlassCard>

        <div className="space-y-4">
          <GlassCard>
            <h3 className="text-lg font-semibold">Trip Snapshot</h3>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p className="inline-flex items-center gap-2"><MapPinned size={14} /> Colombo → Galle</p>
              <p className="inline-flex items-center gap-2"><Timer size={14} /> ETA 10:00 AM</p>
              <p className="inline-flex items-center gap-2"><Gauge size={14} /> 68 km/h</p>
              <p>Driver: Ruwan Madushanka</p>
              <p>Arrival countdown: 00:56:12</p>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold">Journey Timeline</h3>
            <div className="mt-3 space-y-3">
              {trackingStops.map((stop) => (
                <div key={stop.name} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900/50">
                  <div>
                    <p className="font-semibold">{stop.name}</p>
                    <p className="text-xs text-slate-500">ETA {stop.eta}</p>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${stop.status === 'completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-200' : stop.status === 'current' ? 'bg-blue-100 text-blue-700 dark:bg-blue-400/20 dark:text-blue-200' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'}`}>
                    {stop.status}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
