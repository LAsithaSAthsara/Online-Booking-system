import { LockKeyhole, Mail, UserCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'
import type { Role } from '../types'

const roleMap: Record<Role, string> = {
  passenger: '/dashboard/passenger',
  operator: '/dashboard/operator',
  conductor: '/dashboard/conductor',
  driver: '/dashboard/driver',
  admin: '/dashboard/admin',
}

export function LoginPage() {
  const navigate = useNavigate()
  const [role, setRole] = useState<Role>('passenger')
  const [email, setEmail] = useState('amaya@busseat.lk')
  const [password, setPassword] = useState('demo1234')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(roleMap[role])
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
      <SectionHeader
        eyebrow="Secure Login"
        title="Sign in to BusSeat.lk"
        subtitle="Demo authentication for passengers, operators, conductors, drivers, and super admins."
      />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-500 text-white">
          <h3 className="text-2xl font-semibold">Welcome back</h3>
          <p className="mt-2 text-sm text-blue-50">
            One login gateway for the full BusSeat.lk ecosystem. Choose your role to view role-specific dashboards and operational workflows.
          </p>

          <div className="mt-6 grid gap-3 text-xs text-blue-50/90 md:grid-cols-2">
            <p className="rounded-xl border border-white/30 bg-white/10 p-3">Passenger: booking history, wallet, rewards</p>
            <p className="rounded-xl border border-white/30 bg-white/10 p-3">Operator: revenue, fleet, routes, staff</p>
            <p className="rounded-xl border border-white/30 bg-white/10 p-3">Conductor: QR verification and boarding</p>
            <p className="rounded-xl border border-white/30 bg-white/10 p-3">Driver/Admin: trip controls and platform analytics</p>
          </div>
        </GlassCard>

        <GlassCard>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Role
              <select
                value={role}
                onChange={(event) => setRole(event.target.value as Role)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm outline-none ring-blue-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
              >
                <option value="passenger">Passenger</option>
                <option value="operator">Bus Operator</option>
                <option value="conductor">Conductor</option>
                <option value="driver">Driver</option>
                <option value="admin">Super Admin</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <div className="relative mt-1">
                <Mail size={15} className="pointer-events-none absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white/80 py-2.5 pl-9 pr-3 text-sm outline-none ring-blue-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Password
              <div className="relative mt-1">
                <LockKeyhole size={15} className="pointer-events-none absolute left-3 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white/80 py-2.5 pl-9 pr-3 text-sm outline-none ring-blue-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-3 text-sm font-semibold text-white"
            >
              <UserCircle2 size={16} />
              Continue to Portal
            </button>

            <p className="text-xs text-slate-500 dark:text-slate-300">
              Demo login only. Any valid email and password will continue to the selected role dashboard.
            </p>
          </form>
        </GlassCard>
      </div>
    </div>
  )
}
