import { Link } from 'react-router-dom'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

const roles = [
  { title: 'Passenger Dashboard', to: '/dashboard/passenger', desc: 'Trips, rewards, wallet, profile settings' },
  { title: 'Bus Operator Dashboard', to: '/dashboard/operator', desc: 'Revenue, bookings, fleet and staff management' },
  { title: 'Conductor Panel', to: '/dashboard/conductor', desc: 'Boarding verification and onboard ticketing' },
  { title: 'Driver Panel', to: '/dashboard/driver', desc: 'Navigation, trip controls, fuel reports' },
  { title: 'Super Admin Panel', to: '/dashboard/admin', desc: 'Operator governance and platform analytics' },
]

export function DashboardHubPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      <SectionHeader eyebrow="Role Based Authentication" title="Choose a portal" subtitle="Passenger, operator, driver, conductor, and admin experiences." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <GlassCard key={role.title}>
            <h3 className="text-lg font-semibold">{role.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{role.desc}</p>
            <Link to={role.to} className="mt-4 inline-block rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
              Open Portal
            </Link>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
