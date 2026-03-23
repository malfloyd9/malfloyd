import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/systems', label: 'Systems' },
  { to: '/workshop', label: 'Workshop' },
  { to: '/lab', label: 'Lab' },
  { to: '/resume', label: 'Resume' },
]

const linkClass = ({ isActive }) =>
  [
    'inline-flex min-h-[44px] items-center border-b-2 px-1 py-2 text-sm font-medium transition-colors duration-fast motion-reduce:transition-none',
    isActive
      ? 'border-bronze text-text-primary'
      : 'border-transparent text-text-secondary hover:border-oak/40 hover:text-text-primary',
  ].join(' ')

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-oak/15 bg-surface-1/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          to="/"
          className="min-h-[44px] min-w-[44px] py-2 text-base font-semibold tracking-tight text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
        >
          Jeff Floyd
        </Link>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-oak/30 px-3 text-text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? '✕' : '☰'}
        </button>

        <nav
          className="hidden md:block"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center gap-6 lg:gap-8">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={linkClass} end={false}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-oak/15 bg-surface-1 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Primary mobile">
          <ul className="flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    [
                      'block min-h-[44px] rounded-md px-3 py-3 text-base font-medium',
                      isActive
                        ? 'bg-surface-2 text-text-primary ring-1 ring-bronze/40'
                        : 'text-text-secondary hover:bg-surface-2',
                    ].join(' ')
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
