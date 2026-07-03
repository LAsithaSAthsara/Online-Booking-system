import { Bell, Heart, Settings, Ticket, Wallet } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

const quickActions = [
  { label: 'Notifications', icon: Bell },
  { label: 'Saved Passengers', icon: Ticket },
  { label: 'Favorite Routes', icon: Heart },
  { label: 'Wallet', icon: Wallet },
  { label: 'Settings', icon: Settings },
]

export function PassengerDashboardPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <SectionHeader eyebrow="Passenger Dashboard" title="Welcome back, Amaya" subtitle="Manage trips, rewards, wallet, and personalized travel preferences." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          ['Upcoming Trips', '03'],
          ['Booking History', '42'],
          ['Rewards Points', '8,400'],
          ['Wallet Balance', 'LKR 5,200'],
        ].map(([label, value]) => (
          <GlassCard key={label} className="text-center">
            <p className="text-2xl font-semibold text-blue-600 dark:text-blue-300">{value}</p>
            <p className="text-sm text-slate-500 dark:text-slate-300">{label}</p>
          </GlassCard>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <h3 className="text-lg font-semibold">Upcoming Trips</h3>
          <div className="mt-3 space-y-3">
            {['Kandy → Colombo | 2026-07-06 06:30 | Seat B2', 'Colombo → Galle | 2026-07-11 07:15 | Seat A4'].map((trip) => (
              <div key={trip} className="rounded-xl border border-slate-200 bg-white/70 p-3 text-sm dark:border-slate-700 dark:bg-slate-900/50">
                <p>{trip}</p>
                <button className="mt-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white" type="button">View Ticket</button>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <div className="mt-3 grid gap-2 text-sm">
            {quickActions.map((action) => (
              <button key={action.label} type="button" className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-left dark:border-slate-700 dark:bg-slate-900/50">
                <action.icon size={15} /> {action.label}
              </button>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
