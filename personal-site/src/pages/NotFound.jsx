import { Link } from 'react-router-dom'
import { usePageSEO } from '../hooks/usePageSEO'

export default function NotFound() {
  usePageSEO({
    title: 'Page not found',
    description: 'The page you requested does not exist.',
  })

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-2xl font-semibold text-text-primary">Page not found</h1>
      <p className="mt-3 max-w-md text-text-secondary">
        That URL does not match a project or page here.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md bg-bronze px-6 py-3 text-sm font-medium text-void transition-colors hover:bg-bronze-light focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
      >
        Back home
      </Link>
    </div>
  )
}
