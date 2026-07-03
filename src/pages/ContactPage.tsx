import { Mail, MapPin, Phone } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

export function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-2 md:px-6">
      <div>
        <SectionHeader eyebrow="Contact" title="Talk to the BusSeat.lk team" subtitle="We support operators, universities, enterprises, and government partners." />
        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <p className="inline-flex items-center gap-2"><Phone size={15} /> +94 11 260 8888</p>
          <p className="inline-flex items-center gap-2"><Mail size={15} /> support@busseat.lk</p>
          <p className="inline-flex items-center gap-2"><MapPin size={15} /> Colombo 03, Sri Lanka</p>
        </div>
      </div>
      <GlassCard>
        <form className="grid gap-3">
          {['Full Name', 'Email', 'Company', 'Message'].map((field) => (
            <label key={field} className="text-sm">
              {field}
              {field === 'Message' ? (
                <textarea className="mt-1 min-h-28 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900" />
              ) : (
                <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900" />
              )}
            </label>
          ))}
          <button type="button" className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">Send Message</button>
        </form>
      </GlassCard>
    </div>
  )
}
