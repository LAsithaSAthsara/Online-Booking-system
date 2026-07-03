import { AlertTriangle, Fuel, MapPinned, Navigation, Play, Square, Wifi } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

export function DriverPanelPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6">
      <SectionHeader eyebrow="Driver Panel" title="Route execution and incident reporting" subtitle="Navigation, fuel logs, and live GPS controls for drivers." />
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h3 className="font-semibold">Today\'s Route</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Kandy → Colombo | Departure 06:30 | Bus RC-118</p>
          <div className="mt-3 grid gap-2 text-sm">
            <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700"><Navigation size={14} /> Open Navigation</button>
            <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700"><MapPinned size={14} /> Share Live GPS</button>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-semibold">Trip Controls</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 font-semibold text-white"><Play size={14} /> Start Trip</button>
            <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 font-semibold text-white dark:bg-blue-600"><Square size={14} /> End Trip</button>
            <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700"><Fuel size={14} /> Submit Fuel Report</button>
            <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700"><AlertTriangle size={14} /> Report Issues</button>
            <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700"><Wifi size={14} /> Connectivity Diagnostics</button>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
