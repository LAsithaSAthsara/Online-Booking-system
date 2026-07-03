import type { BusOperator, BusTrip, Review, RouteInfo, StopPoint } from '../types'

export const operators: BusOperator[] = [
  { id: 'op1', name: 'NTC Express', logo: 'NE', hotline: '+94 11 234 5601', rating: 4.8 },
  { id: 'op2', name: 'Intercity Travels', logo: 'IT', hotline: '+94 11 264 1188', rating: 4.6 },
  { id: 'op3', name: 'Royal Coach', logo: 'RC', hotline: '+94 81 223 8800', rating: 4.7 },
  { id: 'op4', name: 'Lanka Travels', logo: 'LT', hotline: '+94 31 457 9900', rating: 4.5 },
  { id: 'op5', name: 'Southern Express', logo: 'SE', hotline: '+94 41 221 0022', rating: 4.9 },
]

export const routes: RouteInfo[] = [
  { id: 'r1', from: 'Kandy', to: 'Colombo', distanceKm: 116, duration: '3h 10m', basePrice: 1450, popular: true },
  { id: 'r2', from: 'Colombo', to: 'Galle', distanceKm: 126, duration: '2h 45m', basePrice: 1650, popular: true },
  { id: 'r3', from: 'Colombo', to: 'Jaffna', distanceKm: 398, duration: '8h 30m', basePrice: 4200, popular: true },
  { id: 'r4', from: 'Kurunegala', to: 'Colombo', distanceKm: 95, duration: '2h 20m', basePrice: 1250, popular: true },
  { id: 'r5', from: 'Matara', to: 'Kandy', distanceKm: 246, duration: '5h 35m', basePrice: 2950, popular: true },
]

export const trips: BusTrip[] = [
  {
    id: 't1',
    operatorId: 'op1',
    busName: 'NTC Falcon X',
    routeId: 'r1',
    departure: '06:30',
    arrival: '09:40',
    duration: '3h 10m',
    amenities: ['WiFi', 'USB', 'Recliner'],
    type: 'Luxury',
    ac: true,
    availableSeats: 17,
    price: 1950,
  },
  {
    id: 't2',
    operatorId: 'op5',
    busName: 'Southern Sapphire',
    routeId: 'r2',
    departure: '07:15',
    arrival: '10:00',
    duration: '2h 45m',
    amenities: ['AC', 'Snack', 'Charging'],
    type: 'Semi Luxury',
    ac: true,
    availableSeats: 12,
    price: 2150,
  },
  {
    id: 't3',
    operatorId: 'op3',
    busName: 'Royal Aurora',
    routeId: 'r3',
    departure: '21:00',
    arrival: '05:30',
    duration: '8h 30m',
    amenities: ['Sleeper', 'Blanket', 'WiFi'],
    type: 'Luxury',
    ac: true,
    availableSeats: 8,
    price: 5600,
  },
  {
    id: 't4',
    operatorId: 'op2',
    busName: 'Intercity CityMax',
    routeId: 'r4',
    departure: '08:10',
    arrival: '10:30',
    duration: '2h 20m',
    amenities: ['USB', 'Leg Rest'],
    type: 'Normal',
    ac: false,
    availableSeats: 22,
    price: 1350,
  },
  {
    id: 't5',
    operatorId: 'op4',
    busName: 'Lanka Titan',
    routeId: 'r5',
    departure: '14:30',
    arrival: '20:05',
    duration: '5h 35m',
    amenities: ['AC', 'Entertainment'],
    type: 'Semi Luxury',
    ac: true,
    availableSeats: 10,
    price: 3400,
  },
]

export const reviews: Review[] = [
  {
    id: 'rv1',
    name: 'Nadeesha Perera',
    role: 'Frequent Traveler, Colombo',
    comment: 'Seat locking and live tracking are excellent. I never miss my bus anymore.',
    rating: 5,
  },
  {
    id: 'rv2',
    name: 'Kasun Wijesinghe',
    role: 'University Student, Kandy',
    comment: 'The QR ticket flow is smooth and conductor verification takes seconds.',
    rating: 5,
  },
  {
    id: 'rv3',
    name: 'Thilini Fernando',
    role: 'Operator Manager, Galle',
    comment: 'The operator dashboard gave us full control over routes, fleet, and revenue.',
    rating: 4,
  },
]

export const trackingStops: StopPoint[] = [
  { name: 'Makumbura Multimodal Center', eta: '08:10', status: 'completed' },
  { name: 'Kalutara South', eta: '08:42', status: 'completed' },
  { name: 'Aluthgama', eta: '09:04', status: 'current' },
  { name: 'Ambalangoda', eta: '09:31', status: 'upcoming' },
  { name: 'Galle Central Bus Stand', eta: '10:00', status: 'upcoming' },
]

export const sriLankanNames = [
  'Amaya De Silva',
  'Sahan Jayawardena',
  'Dilshan Ranasinghe',
  'Imesha Gunawardena',
  'Piumi Senanayake',
]

export const faqItems = [
  {
    q: 'How does seat locking work?',
    a: 'When you pick seats, BusSeat.lk reserves them for 10 minutes so other passengers cannot book them.',
  },
  {
    q: 'Can I cancel and get a refund?',
    a: 'Yes. Refund eligibility depends on operator policy, route type, and cancellation window.',
  },
  {
    q: 'Can conductors verify tickets offline?',
    a: 'Yes. The conductor panel supports cached QR verification for low-network areas.',
  },
  {
    q: 'Do you support operator-specific pricing?',
    a: 'Yes. Operators can set route-level pricing, seasonal offers, and promo discounts.',
  },
]
