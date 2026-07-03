import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { faqItems } from '../data/mockData'

export function FaqPage() {
  const [open, setOpen] = useState<string | null>(faqItems[0]?.q ?? null)

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6">
      <SectionHeader eyebrow="FAQ" title="Everything you need to know" />
      <div className="space-y-3">
        {faqItems.map((item) => {
          const isOpen = open === item.q
          return (
            <GlassCard key={item.q}>
              <button type="button" className="flex w-full items-center justify-between text-left" onClick={() => setOpen(isOpen ? null : item.q)}>
                <span className="font-semibold">{item.q}</span>
                <ChevronDown className={isOpen ? 'rotate-180 transition' : 'transition'} size={18} />
              </button>
              {isOpen && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.a}</p>}
            </GlassCard>
          )
        })}
      </div>
    </div>
  )
}
