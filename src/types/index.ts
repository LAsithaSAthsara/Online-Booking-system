export type Role = 'passenger' | 'operator' | 'conductor' | 'driver' | 'admin'

export interface RouteInfo {
  id: string
  from: string
  to: string
  distanceKm: number
  duration: string
  basePrice: number
  popular?: boolean
}

export interface BusOperator {
  id: string
  name: string
  logo: string
  hotline: string
  rating: number
}

export interface BusTrip {
  id: string
  operatorId: string
  busName: string
  routeId: string
  departure: string
  arrival: string
  duration: string
  amenities: string[]
  type: 'Normal' | 'Semi Luxury' | 'Luxury'
  ac: boolean
  availableSeats: number
  price: number
}

export interface Review {
  id: string
  name: string
  role: string
  comment: string
  rating: number
}

export interface StopPoint {
  name: string
  eta: string
  status: 'completed' | 'current' | 'upcoming'
}
