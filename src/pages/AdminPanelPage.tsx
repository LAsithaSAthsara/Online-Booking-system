import { BarChart3, CreditCard, LifeBuoy, Settings2, ShieldCheck, Users } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

export function AdminPanelPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <SectionHeader eyebrow="Super Admin Panel" title="Platform governance and business oversight" subtitle="Manage operators, subscriptions, users, payments, and support operations." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AdminCard icon={ShieldCheck} title="Manage Bus Operators" value="122 active operators" />
        <AdminCard icon={CreditCard} title="Subscription Plans" value="Starter, Growth, Enterprise" />
        <AdminCard icon={Users} title="User Management" value="54,221 total users" />
        <AdminCard icon={BarChart3} title="Platform Analytics" value="99.95% uptime" />
        <AdminCard icon={LifeBuoy} title="Support Tickets" value="18 open tickets" />
        <AdminCard icon={Settings2} title="Platform Settings" value="Policy and system controls" />
      </div>
      <GlassCard className="mt-4">
        <h3 className="text-lg font-semibold">Payments Overview</h3>
        <div className="mt-3 overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="py-2">Operator</th><th>Plan</th><th>Amount</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Royal Coach', 'Growth', 'LKR 65,000', 'Paid'],
                ['NTC Express', 'Enterprise', 'LKR 220,000', 'Paid'],
                ['Lanka Travels', 'Starter', 'LKR 25,000', 'Due'],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-slate-100 dark:border-slate-800">
                  {row.map((col) => <td key={col} className="py-2">{col}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  )
}

function AdminCard({ icon: Icon, title, value }: { icon: typeof ShieldCheck; title: string; value: string }) {
  return (
    <GlassCard>
      <div className="inline-flex rounded-xl bg-blue-100 p-2 text-blue-700 dark:bg-blue-400/20 dark:text-blue-200"><Icon size={16} /></div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{value}</p>
    </GlassCard>
  )
}
