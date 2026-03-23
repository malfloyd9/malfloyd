import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'

const badgeColors = {
  systems: 'border-bronze/40 bg-bronze/10 text-bronze-light',
  workshop: 'border-oak/50 bg-oak/10 text-oak-light',
  lab: 'border-thyme/50 bg-thyme/10 text-thyme-light',
}

const categoryLabel = {
  systems: 'Systems',
  workshop: 'Workshop',
  lab: 'Lab',
}

function excerpt(text) {
  const t = text?.trim() ?? ''
  if (t.length <= 140) return t
  return `${t.slice(0, 137)}…`
}

export default function ProjectCard({ project }) {
  const { slug, title, category, status, problem, purpose } = project
  const preview = excerpt(purpose || problem)

  return (
    <Link
      to={`/${category}/${slug}`}
      className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent bg-surface-2 shadow-card transition-[transform,box-shadow,border-color] duration-default ease-out motion-reduce:transform-none motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:border-bronze/25 group-hover:shadow-elevated">
        <div className="relative aspect-video w-full bg-gradient-to-br from-surface-1 via-surface-2 to-oak-dark/30">
          {project.image ? (
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-sm border px-2 py-0.5 text-xs font-medium ${badgeColors[category]}`}
            >
              {categoryLabel[category]}
            </span>
            <StatusBadge status={status} />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
          <p className="line-clamp-2 text-sm leading-relaxed text-text-secondary">
            {preview}
          </p>
        </div>
      </article>
    </Link>
  )
}
