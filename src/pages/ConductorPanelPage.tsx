import { Camera, CheckCircle2, ClipboardList, ScanLine, ShoppingCart } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

const actions = [
  { label: 'QR Code Scanner', icon: ScanLine },
  { label: 'Verify Ticket', icon: Camera },
  { label: 'Mark Passenger Boarded', icon: CheckCircle2 },
  { label: 'Sell Onboard Tickets', icon: ShoppingCart },
  { label: 'Passenger Manifest', icon: ClipboardList },
  { label: 'Complete Trip', icon: CheckCircle2 },
]

export function ConductorPanelPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6">
      <SectionHeader eyebrow="Conductor Panel" title="Mobile-ready trip operations" subtitle="Verify tickets, board passengers, and handle onboard sales." />
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ['Today\'s Trip', 'Colombo → Galle | SE-221 | 07:15'],
          ['Passenger List', '46 passengers | 36 boarded'],
          ['Empty Seats', '10 seats available'],
          ['Trip Status', 'In Progress'],
        ].map(([title, value]) => (
          <GlassCard key={title}>
            <p className="text-sm text-slate-500 dark:text-slate-300">{title}</p>
            <p className="mt-1 text-lg font-semibold">{value}</p>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="mt-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {actions.map((action) => (
            <button key={action.label} type="button" className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-3 text-sm dark:border-slate-700 dark:bg-slate-900/50">
              <action.icon size={16} /> {action.label}
            </button>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
