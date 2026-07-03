import { TimerReset } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type SeatMapProps = {
  onSelectionChange: (seats: string[], total: number) => void
  ticketPrice: number
}

type SeatStatus = 'available' | 'booked' | 'female' | 'selected'

const lockedSeats = new Set(['A1', 'A2', 'B3', 'C1', 'D4'])
const femaleSeats = new Set(['A4', 'B1', 'D2'])

function getSeatClass(status: SeatStatus) {
  const base = 'h-10 w-10 rounded-xl text-xs font-semibold transition'
  if (status === 'booked') return `${base} cursor-not-allowed bg-slate-300 text-slate-500 dark:bg-slate-700 dark:text-slate-400`
  if (status === 'female') return `${base} cursor-not-allowed bg-pink-200 text-pink-700 dark:bg-pink-400/30 dark:text-pink-200`
  if (status === 'selected') return `${base} bg-blue-600 text-white shadow-lg shadow-blue-600/30`
  return `${base} bg-emerald-100 text-emerald-700 hover:scale-105 dark:bg-emerald-400/20 dark:text-emerald-200`
}

export function SeatMap({ onSelectionChange, ticketPrice }: SeatMapProps) {
  const [selected, setSelected] = useState<string[]>([])
  const [seconds, setSeconds] = useState(600)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    onSelectionChange(selected, selected.length * ticketPrice)
  }, [selected, ticketPrice, onSelectionChange])

  const seatRows = useMemo(() => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], [])

  function seatStatus(seat: string): SeatStatus {
    if (selected.includes(seat)) return 'selected'
    if (lockedSeats.has(seat)) return 'booked'
    if (femaleSeats.has(seat)) return 'female'
    return 'available'
  }

  function toggleSeat(seat: string) {
    const status = seatStatus(seat)
    if (status === 'booked' || status === 'female') return

    setSelected((prev) => {
      if (prev.includes(seat)) return prev.filter((v) => v !== seat)
      if (prev.length >= 5) return prev
      return [...prev, seat]
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-blue-200 bg-blue-50 p-3 text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
        <span className="text-sm font-semibold">Seat lock timer</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold dark:bg-slate-900">
          <TimerReset size={14} />
          {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
        </span>
      </div>

      <div className="rounded-3xl border border-white/20 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Driver</div>
        <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900" />

        <div className="space-y-3">
          {seatRows.map((row) => (
            <div key={row} className="grid grid-cols-5 gap-2">
              {[1, 2].map((n) => {
                const seat = `${row}${n}`
                return (
                  <button key={seat} type="button" onClick={() => toggleSeat(seat)} className={getSeatClass(seatStatus(seat))}>
                    {seat}
                  </button>
                )
              })}
              <div className="h-10" />
              {[3, 4].map((n) => {
                const seat = `${row}${n}`
                return (
                  <button key={seat} type="button" onClick={() => toggleSeat(seat)} className={getSeatClass(seatStatus(seat))}>
                    {seat}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-4">
        <Legend color="bg-emerald-100 dark:bg-emerald-400/20" label="Available" />
        <Legend color="bg-slate-300 dark:bg-slate-700" label="Booked" />
        <Legend color="bg-pink-200 dark:bg-pink-400/30" label="Female occupied" />
        <Legend color="bg-blue-600" label="Selected" />
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-300">Maximum 5 seats can be selected per booking.</p>
    </div>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 p-2 dark:border-slate-700 dark:bg-slate-900/50">
      <span className={`h-4 w-4 rounded ${color}`} />
      <span>{label}</span>
    </div>
  )
}
