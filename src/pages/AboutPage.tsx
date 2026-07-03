import { Globe2, Radar, Shield, Sparkles } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

const pillars = [
  { icon: Sparkles, title: 'Premium Experience', body: 'Modern product design with accessibility-first interfaces.' },
  { icon: Radar, title: 'Operational Intelligence', body: 'Trip monitoring, route analytics, and occupancy visibility.' },
  { icon: Shield, title: 'Secure Platform', body: 'Role-based permissions and protected payment workflows.' },
  { icon: Globe2, title: 'National Coverage', body: 'Built for intercity and regional transport in Sri Lanka.' },
]

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
      <SectionHeader
        eyebrow="About BusSeat.lk"
        title="A transportation platform engineered for trust, speed, and scale"
        subtitle="BusSeat.lk unifies passengers, operators, conductors, drivers, and admins in one intelligent operating system."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {pillars.map((item) => (
          <GlassCard key={item.title}>
            <item.icon className="text-blue-600 dark:text-blue-300" />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{item.body}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
