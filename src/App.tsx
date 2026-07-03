import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { MessageSquareText } from 'lucide-react'
import { AppLayout } from './components/layout/AppLayout'
import { useTheme } from './hooks/useTheme'
import { AboutPage } from './pages/AboutPage'
import { AdminPanelPage } from './pages/AdminPanelPage'
import { BookTicketsPage } from './pages/BookTicketsPage'
import { ConductorPanelPage } from './pages/ConductorPanelPage'
import { ContactPage } from './pages/ContactPage'
import { DashboardHubPage } from './pages/DashboardHubPage'
import { DriverPanelPage } from './pages/DriverPanelPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OperatorDashboardPage } from './pages/OperatorDashboardPage'
import { PassengerDashboardPage } from './pages/PassengerDashboardPage'
import { PricingPage } from './pages/PricingPage'
import { RoutesPage } from './pages/RoutesPage'
import { StatesPage } from './pages/StatesPage'
import { TrackBusPage } from './pages/TrackBusPage'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <AppLayout isDark={isDark} onToggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/book" element={<BookTicketsPage />} />
        <Route path="/track" element={<TrackBusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<DashboardHubPage />} />
        <Route path="/dashboard/passenger" element={<PassengerDashboardPage />} />
        <Route path="/dashboard/operator" element={<OperatorDashboardPage />} />
        <Route path="/dashboard/conductor" element={<ConductorPanelPage />} />
        <Route path="/dashboard/driver" element={<DriverPanelPage />} />
        <Route path="/dashboard/admin" element={<AdminPanelPage />} />
        <Route path="/states" element={<StatesPage />} />
        <Route path="/portal" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Link
        to="/contact"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-xs font-semibold text-white shadow-xl shadow-blue-600/30"
      >
        <MessageSquareText size={15} />
        Need Help?
      </Link>
    </AppLayout>
  )
}

export default App
