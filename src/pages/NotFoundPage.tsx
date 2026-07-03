import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">404</p>
      <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">The page you requested does not exist in this demo.</p>
      <Link to="/" className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">Back to home</Link>
    </div>
  )
}
