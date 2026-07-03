import { Download, Headset, MapPinned, QrCode, Search, ShieldCheck, TicketCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { operators, reviews, routes } from '../data/mockData'

const stats = [
	{ value: '10,000+', label: 'Bookings' },
	{ value: '500+', label: 'Daily Trips' },
	{ value: '100+', label: 'Bus Operators' },
	{ value: '50,000+', label: 'Happy Passengers' },
]

const reasons = [
	{ icon: TicketCheck, title: 'Online Booking', body: 'Reserve seats in seconds with instant confirmation.' },
	{ icon: ShieldCheck, title: 'Secure Payments', body: 'Trusted payment rails with full audit visibility.' },
	{ icon: QrCode, title: 'QR Ticket', body: 'Fast and paperless boarding experience for travelers.' },
	{ icon: MapPinned, title: 'Live Tracking', body: 'Real-time bus movement and delay predictions.' },
	{ icon: Headset, title: '24/7 Customer Support', body: 'Always-on support with WhatsApp and call center.' },
]

export function HomePage() {
	return (
		<div>
			<section className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-14 pt-10 md:grid-cols-2 md:px-6 md:pt-16">
				<div className="space-y-6">
					<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-200">
						Smart Bus Transportation Management System
					</motion.span>
					<h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
						BusSeat.lk for Sri Lanka's next-generation transport ecosystem.
					</h1>
					<p className="max-w-xl text-slate-600 md:text-lg dark:text-slate-300">
						A premium command center for passengers, operators, conductors, drivers, and platform admins with seamless booking, tracking, and revenue operations.
					</p>
					<div className="flex flex-wrap items-center gap-3">
						<button type="button" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">Start Booking</button>
						<button type="button" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold dark:border-slate-600">Watch Demo</button>
					</div>
				</div>

				<GlassCard className="relative overflow-hidden">
					<div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-emerald-400/30 blur-3xl" />
					<h3 className="mb-4 text-lg font-semibold">Search Bus Card</h3>
					<div className="grid gap-3">
						{['From', 'To', 'Date', 'Passengers'].map((field) => (
							<label key={field} className="text-sm text-slate-600 dark:text-slate-300">
								{field}
								<input
									className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 outline-none ring-blue-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
									placeholder={`Select ${field}`}
								/>
							</label>
						))}
						<button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 py-3 text-sm font-semibold text-white">
							<Search size={16} />
							Search Buses
						</button>
					</div>
				</GlassCard>
			</section>

			<section className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-6">
				{stats.map((item) => (
					<GlassCard key={item.label} className="text-center">
						<p className="text-3xl font-semibold text-blue-600 dark:text-blue-300">{item.value}</p>
						<p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{item.label}</p>
					</GlassCard>
				))}
			</section>

			<section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-6">
				<SectionHeader eyebrow="Popular Routes" title="Top routes across Sri Lanka" subtitle="Real-time seat visibility, dynamic pricing, and trusted operators." />
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{routes.map((route) => (
						<GlassCard key={route.id} className="group transition hover:-translate-y-1">
							<p className="text-sm text-slate-500 dark:text-slate-400">{route.distanceKm} km</p>
							<h3 className="mt-2 text-xl font-semibold">{route.from} → {route.to}</h3>
							<p className="mt-1 text-slate-600 dark:text-slate-300">{route.duration}</p>
							<p className="mt-5 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-400/20 dark:text-blue-200">From LKR {route.basePrice}</p>
						</GlassCard>
					))}
				</div>
			</section>

			<section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-6">
				<SectionHeader eyebrow="Why Choose" title="Built for reliability, designed for delight" />
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{reasons.map((item) => (
						<GlassCard key={item.title}>
							<item.icon className="text-blue-600 dark:text-blue-300" size={22} />
							<h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
							<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.body}</p>
						</GlassCard>
					))}
				</div>
			</section>

			<section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-6">
				<SectionHeader eyebrow="Customer Reviews" title="What customers and operators say" />
				<div className="grid gap-4 md:grid-cols-3">
					{reviews.map((review) => (
						<GlassCard key={review.id}>
							<p className="text-sm text-slate-600 dark:text-slate-300">“{review.comment}”</p>
							<p className="mt-4 font-semibold">{review.name}</p>
							<p className="text-xs text-slate-500 dark:text-slate-400">{review.role}</p>
						</GlassCard>
					))}
				</div>
			</section>

			<section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-6">
				<GlassCard className="overflow-hidden bg-gradient-to-r from-slate-900 to-blue-800 text-white dark:from-slate-900 dark:to-blue-900">
					<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
						<div>
							<p className="text-xs uppercase tracking-[0.2em] text-blue-200">Download Mobile App</p>
							<h3 className="mt-2 text-3xl font-semibold">Take BusSeat.lk everywhere you travel</h3>
							<p className="mt-2 text-blue-100">Book, track, and board with a single tap. Supports QR wallet and real-time alerts.</p>
						</div>
						<button type="button" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
							<Download size={16} />
							Download App
						</button>
					</div>
				</GlassCard>
			</section>

			<section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-6">
				<SectionHeader eyebrow="Bus Operators" title="Leading Sri Lankan operators" />
				<div className="grid grid-cols-2 gap-4 md:grid-cols-5">
					{operators.map((operator) => (
						<div key={operator.id} className="rounded-2xl border border-white/30 bg-white/70 p-4 text-center backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
							<div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">{operator.logo}</div>
							<p className="text-sm font-semibold">{operator.name}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
