import { useMemo, useState } from 'react'
import { CreditCard, Landmark, MessageCircleMore, QrCode, Ticket } from 'lucide-react'
import { GlassCard } from '../components/common/GlassCard'
import { SectionHeader } from '../components/common/SectionHeader'
import { SeatMap } from '../components/booking/SeatMap'
import { operators, routes, trips } from '../data/mockData'

const stepLabels = ['Search', 'Results', 'Seats', 'Passenger', 'Payment', 'Ticket']

const paymentMethods = [
  { label: 'Credit Card', icon: CreditCard },
  { label: 'Bank Transfer', icon: Landmark },
  { label: 'Cash', icon: Ticket },
  { label: 'PayHere (Demo)', icon: CreditCard },
  { label: 'Stripe (Demo)', icon: CreditCard },
]

export function BookTicketsPage() {
  const [step, setStep] = useState(1)
  const [selectedTripId, setSelectedTripId] = useState(trips[0].id)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [seatTotal, setSeatTotal] = useState(0)
  const [promo, setPromo] = useState('')

  const selectedTrip = trips.find((trip) => trip.id === selectedTripId) ?? trips[0]
  const selectedRoute = routes.find((r) => r.id === selectedTrip.routeId) ?? routes[0]
  const selectedOperator = operators.find((op) => op.id === selectedTrip.operatorId) ?? operators[0]

  const discount = promo.toLowerCase() === 'busseat10' ? Math.round(seatTotal * 0.1) : 0
  const grandTotal = seatTotal - discount

  const summaryRows = useMemo(
    () => [
      { label: 'Trip', value: `${selectedRoute.from} → ${selectedRoute.to}` },
      { label: 'Operator', value: selectedOperator.name },
      { label: 'Seats', value: selectedSeats.length ? selectedSeats.join(', ') : 'None selected' },
      { label: 'Amount', value: `LKR ${seatTotal || selectedTrip.price}` },
      { label: 'Discount', value: `- LKR ${discount}` },
      { label: 'Total', value: `LKR ${grandTotal || selectedTrip.price}` },
    ],
    [selectedRoute, selectedOperator, selectedSeats, seatTotal, selectedTrip.price, discount, grandTotal],
  )

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
      <SectionHeader eyebrow="Book Tickets" title="Complete digital booking experience" subtitle="Search, select seats, pay securely, and receive premium QR tickets." />

      <div className="mb-8 grid grid-cols-3 gap-2 rounded-2xl border border-white/20 bg-white/60 p-2 backdrop-blur-xl md:grid-cols-6 dark:border-white/10 dark:bg-slate-900/60">
        {stepLabels.map((label, index) => {
          const current = index + 1
          return (
            <button
              key={label}
              type="button"
              onClick={() => setStep(current)}
              className={`rounded-xl px-2 py-2 text-xs font-semibold md:text-sm ${step === current ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {current}. {label}
            </button>
          )
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.45fr_0.9fr]">
        <div className="space-y-5">
          {step === 1 && (
            <GlassCard>
              <h3 className="text-xl font-semibold">Step 1: Search Bus</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {['From', 'To', 'Date', 'Number of Passengers'].map((field) => (
                  <label key={field} className="text-sm">
                    {field}
                    <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900" placeholder={`Select ${field}`} />
                  </label>
                ))}
              </div>
              <div className="mt-5 grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-700 dark:bg-slate-800/60 md:grid-cols-4">
                {['Price', 'Departure Time', 'Arrival Time', 'Bus Type', 'AC / Non AC', 'Luxury', 'Available Seats', 'Bus Operator'].map((filter) => (
                  <span key={filter} className="rounded-lg bg-white px-2 py-1 dark:bg-slate-900">{filter}</span>
                ))}
              </div>
              <button type="button" className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white" onClick={() => setStep(2)}>
                Search Results
              </button>
            </GlassCard>
          )}

          {step === 2 && (
            <GlassCard>
              <h3 className="text-xl font-semibold">Step 2: Bus Search Results</h3>
              <div className="mt-4 space-y-3">
                {trips.map((trip) => {
                  const route = routes.find((r) => r.id === trip.routeId)
                  const operator = operators.find((o) => o.id === trip.operatorId)
                  return (
                    <button
                      key={trip.id}
                      type="button"
                      onClick={() => {
                        setSelectedTripId(trip.id)
                        setStep(3)
                      }}
                      className={`w-full rounded-2xl border p-4 text-left transition ${selectedTripId === trip.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10' : 'border-slate-200 bg-white/60 dark:border-slate-700 dark:bg-slate-900/60'}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-semibold">{operator?.name} · {trip.busName}</p>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">LKR {trip.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{route?.from} → {route?.to} · {trip.departure} - {trip.arrival} · {trip.duration}</p>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Amenities: {trip.amenities.join(', ')} · Seats: {trip.availableSeats} · {trip.ac ? 'AC' : 'Non AC'} · {trip.type}</p>
                    </button>
                  )
                })}
              </div>
            </GlassCard>
          )}

          {step === 3 && (
            <GlassCard>
              <h3 className="text-xl font-semibold">Step 3: Seat Selection</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{selectedTrip.busName} · {selectedRoute.from} → {selectedRoute.to}</p>
              <div className="mt-4">
                <SeatMap
                  ticketPrice={selectedTrip.price}
                  onSelectionChange={(seats, total) => {
                    setSelectedSeats(seats)
                    setSeatTotal(total)
                  }}
                />
              </div>
              <button type="button" className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white" onClick={() => setStep(4)}>
                Continue to Passenger Info
              </button>
            </GlassCard>
          )}

          {step === 4 && (
            <GlassCard>
              <h3 className="text-xl font-semibold">Step 4: Passenger Information</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {['Full Name', 'NIC / Passport', 'Mobile Number', 'Email Address', 'Emergency Contact'].map((field) => (
                  <label key={field} className="text-sm md:col-span-1">
                    {field}
                    <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900" placeholder={`Enter ${field}`} />
                  </label>
                ))}
              </div>
              <button type="button" className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white" onClick={() => setStep(5)}>
                Proceed to Payment
              </button>
            </GlassCard>
          )}

          {step === 5 && (
            <GlassCard>
              <h3 className="text-xl font-semibold">Step 5: Payment</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {paymentMethods.map((method) => (
                  <button key={method.label} type="button" className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-3 text-sm dark:border-slate-700 dark:bg-slate-900/60">
                    <method.icon size={16} /> {method.label}
                  </button>
                ))}
              </div>
              <label className="mt-4 block text-sm">
                Promo Code
                <input value={promo} onChange={(e) => setPromo(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900" placeholder="Use BUSSEAT10" />
              </label>
              <button type="button" className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white" onClick={() => setStep(6)}>
                Complete Payment
              </button>
            </GlassCard>
          )}

          {step === 6 && (
            <GlassCard className="overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white">
              <h3 className="text-xl font-semibold">Step 6: Digital Ticket</h3>
              <p className="mt-1 text-sm text-blue-100">Apple Wallet inspired digital pass</p>
              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
                <div className="space-y-2 text-sm">
                  <p>Booking ID: BSLK-2026-00981</p>
                  <p>Passenger: Amaya De Silva</p>
                  <p>Route: {selectedRoute.from} → {selectedRoute.to}</p>
                  <p>Date: 2026-07-20</p>
                  <p>Departure: {selectedTrip.departure}</p>
                  <p>Seats: {selectedSeats.length ? selectedSeats.join(', ') : 'A3'}</p>
                  <p>Payment: Paid</p>
                </div>
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white text-slate-900">
                  <QrCode size={56} />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <button type="button" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900">Download PDF</button>
                <button type="button" className="rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold">Email Ticket</button>
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold"><MessageCircleMore size={14} /> Share via WhatsApp</button>
              </div>
            </GlassCard>
          )}
        </div>

        <GlassCard className="h-fit lg:sticky lg:top-24">
          <h3 className="text-lg font-semibold">Booking Summary</h3>
          <div className="mt-3 space-y-2 text-sm">
            {summaryRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between border-b border-slate-200/80 py-2 dark:border-slate-700/70">
                <span className="text-slate-500 dark:text-slate-300">{row.label}</span>
                <span className={row.label === 'Total' ? 'font-semibold text-blue-600 dark:text-blue-300' : 'font-medium'}>{row.value}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
