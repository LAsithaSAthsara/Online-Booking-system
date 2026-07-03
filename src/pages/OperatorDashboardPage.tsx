import { Activity, BarChart3, BusFront, CalendarClock, Download, Filter, Search, Users } from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'

const revenueData = [
  { month: 'Jan', revenue: 1.2, bookings: 1.1 },
  { month: 'Feb', revenue: 1.5, bookings: 1.3 },
  { month: 'Mar', revenue: 1.8, bookings: 1.6 },
  { month: 'Apr', revenue: 2.2, bookings: 2.1 },
  { month: 'May', revenue: 2.6, bookings: 2.4 },
  { month: 'Jun', revenue: 3.0, bookings: 2.8 },
]

const topRoutes = [
  { route: 'Colombo-Galle', occupancy: 88 },
  { route: 'Kandy-Colombo', occupancy: 84 },
  { route: 'Colombo-Jaffna', occupancy: 76 },
  { route: 'Matara-Kandy', occupancy: 73 },
]

export function OperatorDashboardPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
      <SectionHeader eyebrow="Bus Operator Dashboard" title="Royal Coach SaaS Command Center" subtitle="Revenue, occupancy, fleet, staffing, and booking intelligence in one place." />

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {[
          ['Today Revenue', 'LKR 482,000'],
          ['Monthly Revenue', 'LKR 9.1M'],
          ['Total Bookings', '4,842'],
          ['Occupancy Rate', '82%'],
          ['Active Trips', '34'],
          ['Pending Refunds', '26'],
        ].map(([label, value]) => (
          <GlassCard key={label} className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-300">{label}</p>
            <p className="mt-1 text-xl font-semibold text-blue-600 dark:text-blue-300">{value}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <GlassCard>
          <h3 className="mb-4 text-lg font-semibold">Revenue and Bookings Trend</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#94a3b820" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Area dataKey="revenue" stroke="#2563eb" fill="url(#revenueGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-4 text-lg font-semibold">Top Routes by Occupancy</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topRoutes} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#94a3b820" />
                <XAxis type="number" stroke="#64748b" />
                <YAxis type="category" dataKey="route" stroke="#64748b" width={110} />
                <Tooltip />
                <Bar dataKey="occupancy" fill="#10b981" radius={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <ManagementCard title="Bus Management" icon={BusFront} items={['Add/Edit/Delete Bus', 'Seat Layout Builder', 'Amenities + Images', 'Assign Driver']} />
        <ManagementCard title="Route Management" icon={CalendarClock} items={['Create Route + Stops', 'Distance + Duration', 'Pricing Rules', 'Schedule Windows']} />
        <ManagementCard title="Booking Management" icon={Search} items={['Search & Filter', 'Manual Booking', 'Cancel/Refund', 'Export CSV']} />
        <ManagementCard title="Passenger Management" icon={Users} items={['Passenger Profiles', 'Travel History', 'Frequent Travelers']} />
        <ManagementCard title="Fleet Management" icon={Activity} items={['Maintenance Schedule', 'Insurance', 'Fuel Logs', 'Service History']} />
        <ManagementCard title="Reports" icon={BarChart3} items={['Daily/Monthly Revenue', 'Route Performance', 'Passenger Analytics', 'Download PDF']} />
      </div>

      <GlassCard className="mt-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs dark:border-slate-700"><Search size={13} /> Search</button>
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs dark:border-slate-700"><Filter size={13} /> Filter</button>
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs dark:border-slate-700"><Download size={13} /> Export CSV</button>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="py-2">Booking ID</th><th>Passenger</th><th>Route</th><th>Status</th><th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['BS-9021', 'Kasun Wijesinghe', 'Colombo-Galle', 'Confirmed', 'LKR 2,150'],
                ['BS-9022', 'Nadeesha Perera', 'Kandy-Colombo', 'Boarded', 'LKR 1,950'],
                ['BS-9023', 'Saman Kumara', 'Matara-Kandy', 'Refund Pending', 'LKR 3,400'],
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

function ManagementCard({ title, icon: Icon, items }: { title: string; icon: typeof BusFront; items: string[] }) {
  return (
    <GlassCard>
      <div className="inline-flex rounded-xl bg-blue-100 p-2 text-blue-700 dark:bg-blue-400/20 dark:text-blue-200"><Icon size={16} /></div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </GlassCard>
  )
}
