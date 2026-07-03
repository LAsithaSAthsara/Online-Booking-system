import { Check } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

const plans = [
  { name: 'Starter', price: 'LKR 25,000', subtitle: 'For regional operators', features: ['Up to 25 trips/day', 'Basic analytics', 'QR ticketing', 'Email support'] },
  { name: 'Growth', price: 'LKR 65,000', subtitle: 'For expanding networks', features: ['Unlimited trips', 'Live tracking', 'Seat lock + refunds', 'SMS + WhatsApp alerts'], featured: true },
  { name: 'Enterprise', price: 'Custom', subtitle: 'For nationwide fleets', features: ['Custom SLAs', 'Advanced BI reports', 'Multi-brand tenancy', 'Dedicated success manager'] },
]

export function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
      <SectionHeader eyebrow="Pricing" title="Flexible plans for bus operators" subtitle="Transparent subscription tiers with enterprise-grade capabilities." />
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard key={plan.name} className={plan.featured ? 'ring-2 ring-blue-500' : ''}>
            {plan.featured && <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Most Popular</span>}
            <h3 className="mt-4 text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-3xl font-semibold text-blue-600 dark:text-blue-300">{plan.price}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{plan.subtitle}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="inline-flex items-center gap-2"><Check size={14} className="text-emerald-500" /> {feature}</li>
              ))}
            </ul>
            <button type="button" className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-blue-600">Get Started</button>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
