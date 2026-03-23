const labels = {
  active: 'Active',
  'in-progress': 'In Progress',
  archived: 'Archived',
  experimental: 'Experimental',
}

export default function StatusBadge({ status }) {
  const base =
    'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm px-3 py-1 text-xs font-medium tracking-wide'

  const styles = {
    active: 'bg-thyme text-text-primary',
    'in-progress': 'bg-bronze text-void',
    archived: 'bg-surface-2 text-text-secondary',
    experimental:
      'border border-thyme-dark bg-transparent text-text-secondary',
  }

  return (
    <span
      className={`${base} ${styles[status] ?? styles.archived}`}
      role="status"
    >
      {labels[status] ?? status}
    </span>
  )
}
