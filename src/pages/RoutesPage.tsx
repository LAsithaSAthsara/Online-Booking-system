import { Clock3, MapPin, Wallet } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { routes } from '../data/mockData'

export function RoutesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
      <SectionHeader eyebrow="Routes" title="Intercity routes with premium buses" subtitle="Live schedules, estimated durations, and dynamic fares." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <GlassCard key={route.id}>
            <h3 className="text-xl font-semibold">{route.from} → {route.to}</h3>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p className="inline-flex items-center gap-2"><MapPin size={15} /> {route.distanceKm} km</p>
              <p className="inline-flex items-center gap-2"><Clock3 size={15} /> {route.duration}</p>
              <p className="inline-flex items-center gap-2"><Wallet size={15} /> From LKR {route.basePrice}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
